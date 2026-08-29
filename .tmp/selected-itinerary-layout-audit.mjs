import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL || "http://localhost:3001";
const widths = [1440, 1280, 1024, 768, 430, 390];
const outDir = path.join(".tmp", "strict-visual-audit", "selected-itinerary");

const rectFor = (el) =>
  el
    ? {
        top: el.top,
        right: el.right,
        bottom: el.bottom,
        left: el.left,
        width: el.width,
        height: el.height,
      }
    : null;

const overlaps = (a, b) =>
  Boolean(
    a &&
      b &&
      a.left < b.right &&
      a.right > b.left &&
      a.top < b.bottom &&
      a.bottom > b.top,
  );

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const results = [];

try {
  for (const width of widths) {
    const height = width <= 430 ? 844 : width <= 768 ? 1024 : 980;
    const page = await browser.newPage({ viewport: { width, height } });

    await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForSelector(".uh-package-preview.is-active", { timeout: 15000 });
    await page.locator(".uh-package-preview.is-active").scrollIntoViewIfNeeded();
    await page.waitForFunction(() => {
      const img = document.querySelector(".uh-package-preview-media img");
      return img && img.complete && img.naturalWidth > 0;
    });
    await page.waitForTimeout(250);

    const screenshotPath = path.join(outDir, `homepage-${width}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    const metrics = await page.evaluate(() => {
      const getRect = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        };
      };

      const mediaImg = document.querySelector(".uh-package-preview-media img");
      const panel = document.querySelector(".uh-package-preview.is-active");
      const media = document.querySelector(".uh-package-preview-media");

      return {
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        cardGrid: getRect(".uh-package-grid"),
        panel: getRect(".uh-package-preview.is-active"),
        media: getRect(".uh-package-preview-media"),
        mediaImg: getRect(".uh-package-preview-media img"),
        body: getRect(".uh-package-preview-body"),
        text: getRect(".uh-package-preview-text"),
        meta: getRect(".uh-package-preview-meta"),
        nextSection: getRect(".uh-travel-section"),
        panelDisplay: panel ? getComputedStyle(panel).display : null,
        panelColumns: panel ? getComputedStyle(panel).gridTemplateColumns : null,
        mediaStyle: media
          ? {
              borderRadius: getComputedStyle(media).borderRadius,
              overflow: getComputedStyle(media).overflow,
              border: getComputedStyle(media).border,
              aspectRatio: getComputedStyle(media).aspectRatio,
            }
          : null,
        imgStyle: mediaImg
          ? {
              objectFit: getComputedStyle(mediaImg).objectFit,
              objectPosition: getComputedStyle(mediaImg).objectPosition,
              width: getComputedStyle(mediaImg).width,
              height: getComputedStyle(mediaImg).height,
              naturalWidth: mediaImg.naturalWidth,
              naturalHeight: mediaImg.naturalHeight,
            }
          : null,
      };
    });

    const issues = [];
    const { cardGrid, panel, media, mediaImg, body, meta, nextSection } = metrics;

    if (metrics.scrollWidth > metrics.innerWidth + 1) {
      issues.push(`horizontal scroll: ${metrics.scrollWidth} > ${metrics.innerWidth}`);
    }

    if (!panel || !media || !body || !mediaImg) {
      issues.push("missing selected itinerary panel/media/body/image");
    }

    if (panel && cardGrid) {
      if (Math.abs(panel.left - cardGrid.left) > 2) {
        issues.push(`panel left edge misaligned by ${Math.abs(panel.left - cardGrid.left).toFixed(1)}px`);
      }
      if (Math.abs(panel.right - cardGrid.right) > 2) {
        issues.push(`panel right edge misaligned by ${Math.abs(panel.right - cardGrid.right).toFixed(1)}px`);
      }
    }

    if (media && body) {
      const stacked = media.bottom <= body.top || body.bottom <= media.top;
      const sideBySide = media.right <= body.left || body.right <= media.left;
      const mediaShare = media.width / (media.width + body.width);

      if (width >= 1024 && !sideBySide) {
        issues.push("desktop layout is not side-by-side");
      }
      if (width >= 1024 && (mediaShare < 0.38 || mediaShare > 0.45)) {
        issues.push(`desktop image share outside target: ${mediaShare.toFixed(2)}`);
      }
      if (width === 768 && sideBySide && body.width < 300) {
        issues.push(`tablet content column is too narrow: ${body.width.toFixed(1)}px`);
      }
      if (width === 768 && !sideBySide && !stacked) {
        issues.push("tablet layout is neither cleanly stacked nor side-by-side");
      }
      if (width <= 430 && !stacked) {
        issues.push("mobile layout is not stacked");
      }
      if (width <= 430 && panel && media.width / panel.width < 0.78) {
        issues.push(`mobile image is too small: ${media.width.toFixed(1)}px`);
      }
      if (overlaps(media, meta)) {
        issues.push("media overlaps metadata/CTA row");
      }
    }

    if (media && mediaImg) {
      if (Math.abs(media.left - mediaImg.left) > 2 || Math.abs(media.right - mediaImg.right) > 2) {
        issues.push("image does not fill media width");
      }
      if (Math.abs(media.top - mediaImg.top) > 2 || Math.abs(media.bottom - mediaImg.bottom) > 2) {
        issues.push("image does not fill media height");
      }
    }

    if (media && nextSection && media.bottom > nextSection.top) {
      issues.push("selected itinerary image collides with next section");
    }

    if (metrics.imgStyle?.objectFit !== "cover") {
      issues.push(`image object-fit is ${metrics.imgStyle?.objectFit}`);
    }

    if (metrics.mediaStyle?.overflow !== "hidden") {
      issues.push(`media overflow is ${metrics.mediaStyle?.overflow}`);
    }

    results.push({
      width,
      height,
      issues,
      metrics: {
        ...metrics,
        cardGrid: rectFor(cardGrid),
        panel: rectFor(panel),
        media: rectFor(media),
        mediaImg: rectFor(mediaImg),
        body: rectFor(body),
        text: rectFor(metrics.text),
        meta: rectFor(meta),
        nextSection: rectFor(nextSection),
      },
      screenshotPath,
    });

    await page.close();
  }
} finally {
  await browser.close();
}

const failures = results.filter((result) => result.issues.length > 0);
const report = {
  reportPath: path.join(outDir, "layout-report.json"),
  failures,
  results,
};

await fs.writeFile(report.reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

if (failures.length > 0) {
  process.exitCode = 1;
}
