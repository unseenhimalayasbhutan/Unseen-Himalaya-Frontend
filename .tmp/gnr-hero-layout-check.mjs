import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const widths = [1920, 1440, 1280, 1024, 768, 430, 390];
const outDir = path.join(".tmp", "gnr-hero-layout");
await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

function gap(a, b) {
  if (!a || !b) return null;
  const dx = Math.max(0, Math.max(a.left - b.right, b.left - a.right));
  const dy = Math.max(0, Math.max(a.top - b.bottom, b.top - a.bottom));
  if (dx === 0 && dy === 0) return 0;
  return Math.round(Math.hypot(dx, dy));
}

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 1200 } });
  const messages = [];
  page.on("console", (message) => {
    const text = message.text();
    if (/Guns|height value of 0|hydration|horizontal/i.test(text)) {
      messages.push({ type: message.type(), text });
    }
  });

  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, `home-${width}.png`), fullPage: false });

  const metrics = await page.evaluate(() => {
    const rect = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        top: Math.round(r.top),
        right: Math.round(r.right),
        bottom: Math.round(r.bottom),
        left: Math.round(r.left),
        width: Math.round(r.width),
        height: Math.round(r.height),
      };
    };

    const hero = document.querySelector(".home-hero");
    const image = document.querySelector(".home-hero-gnr-link img");
    const card = document.querySelector(".home-hero-gnr-link");
    const styles = card ? getComputedStyle(card) : null;
    const imageStyles = image ? getComputedStyle(image) : null;
    const scrollWidth = document.documentElement.scrollWidth;
    const clientWidth = document.documentElement.clientWidth;

    return {
      hero: rect(".home-hero"),
      nav: rect(".site-header"),
      heading: rect(".home-hero h1"),
      copy: rect(".home-hero-content > p"),
      buttons: rect(".home-hero-buttons"),
      trust: rect(".home-hero-trust"),
      card: rect(".home-hero-gnr-link"),
      image: rect(".home-hero-gnr-link img"),
      cardStyles: styles
        ? {
            display: styles.display,
            position: styles.position,
            gridColumn: styles.gridColumn,
            gridRow: styles.gridRow,
            order: styles.order,
            marginTop: styles.marginTop,
            borderRadius: styles.borderRadius,
            background: styles.backgroundColor,
            borderColor: styles.borderColor,
            boxShadow: styles.boxShadow,
          }
        : null,
      imageStyles: imageStyles
        ? {
            width: imageStyles.width,
            height: imageStyles.height,
            objectFit: imageStyles.objectFit,
            objectPosition: imageStyles.objectPosition,
          }
        : null,
      horizontalOverflow: scrollWidth - clientWidth,
    };
  });

  const failures = [];
  if (metrics.horizontalOverflow > 1) failures.push("horizontal overflow");
  if (!metrics.card || !metrics.image) failures.push("missing GNR card/image");
  if (metrics.card?.height <= 0 || metrics.image?.height <= 0) failures.push("zero-height image/card");
  if (metrics.card && metrics.image && Math.abs(metrics.card.height - metrics.image.height) > 4) {
    failures.push("extra dark backing space around poster");
  }
  if (metrics.card && metrics.nav && metrics.card.top < metrics.nav.bottom + 32) {
    failures.push("navigation collision");
  }
  if (metrics.card && metrics.buttons && gap(metrics.card, metrics.buttons) < 32) {
    failures.push("CTA too close or overlapping");
  }
  if (metrics.card && metrics.trust && gap(metrics.card, metrics.trust) < 24) {
    failures.push("trust badges too close or overlapping");
  }

  results.push({ width, ...metrics, messages, failures });
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
