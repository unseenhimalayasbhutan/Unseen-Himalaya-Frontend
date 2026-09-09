import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL || "http://localhost:3009";
const widths = [1920, 1440, 1280, 1024, 768, 430, 390, 360];
const libraryChecks = [
  ["/cultural-tours", "Relevant Cultural Itineraries"],
  ["/festival-tours", "Festival Itinerary Library"],
  ["/bhutan-tours", "Photography Route Library"],
  ["/cycling-tours", "Cycling Itinerary Library"],
  ["/land-entry-tours", "Land-Entry Itinerary Library"],
];
const heroRoutes = [
  "/cultural-tours",
  "/festival-tours",
  "/bhutan-tours",
  "/cycling-tours",
  "/land-entry-tours",
  "/seasons",
  "/about-bhutan",
  "/facts",
];

function parseRgb(value) {
  const match = value?.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;
  const [r, g, b] = match[1].split(",").slice(0, 3).map((part) => Number.parseFloat(part));
  return { r, g, b };
}

function luminance({ r, g, b }) {
  const convert = (value) => {
    const channel = value / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * convert(r) + 0.7152 * convert(g) + 0.0722 * convert(b);
}

function contrast(foreground, background) {
  const l1 = luminance(foreground);
  const l2 = luminance(background);
  const hi = Math.max(l1, l2);
  const lo = Math.min(l1, l2);
  return (hi + 0.05) / (lo + 0.05);
}

const browser = await chromium.launch({ headless: true });
const failures = [];
const observations = [];

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  for (const [route, text] of libraryChecks) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    const locator = page.getByText(text, { exact: true });
    const count = await locator.count();
    observations.push({ type: "library", route, text, count });
    if (count > 0) {
      failures.push({ type: "library-still-present", route, text, count });
    }
  }
  await page.close();

  for (const width of widths) {
    const viewport = { width, height: width <= 430 ? 900 : 950 };
    const p = await browser.newPage({ viewport });

    await p.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    await p.locator(".why-section").scrollIntoViewIfNeeded();
    await p.waitForTimeout(250);
    const whyDetails = await p.evaluate(() => {
      const selectors = [
        ".why-section .main-title",
        ".why-section .description",
        ".why-section .feature-title",
        ".why-section .feature-text",
        ".why-section .bottom-heading h2",
        ".why-section .bottom-heading p",
        ".why-section .bottom-title",
        ".why-section .bottom-text",
      ];
      return selectors.flatMap((selector) =>
        Array.from(document.querySelectorAll(selector)).slice(0, 6).map((el) => {
          const style = getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          let parent = el.parentElement;
          while (parent && getComputedStyle(parent).backgroundColor === "rgba(0, 0, 0, 0)") {
            parent = parent.parentElement;
          }
          return {
            selector,
            text: el.textContent?.trim().slice(0, 80),
            color: style.color,
            background: parent ? getComputedStyle(parent).backgroundColor : getComputedStyle(document.body).backgroundColor,
            width: rect.width,
            height: rect.height,
          };
        })
      );
    });

    for (const detail of whyDetails) {
      const fg = parseRgb(detail.color);
      const bg = parseRgb(detail.background);
      const ratio = fg && bg ? contrast(fg, bg) : null;
      observations.push({ type: "why-text", width, ...detail, contrast: ratio });
      if (ratio !== null && ratio < 3.2 && detail.width > 0 && detail.height > 0) {
        failures.push({ type: "low-contrast-why-text", width, ...detail, contrast: Number(ratio.toFixed(2)) });
      }
    }

    const lowerHomeOverlap = await p.evaluate(() => {
      const controls = Array.from(document.querySelectorAll(".ai-chatbot-toggle, .floating-whatsapp-cta"))
        .map((el, index) => {
          const rect = el.getBoundingClientRect();
          return {
            index,
            cls: el.className,
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          };
        })
        .filter((rect) => rect.width > 0 && rect.height > 0);
      const cards = Array.from(document.querySelectorAll(".why-section .bottom-card, .why-section .feature-card"))
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            text: el.textContent?.trim().replace(/\s+/g, " ").slice(0, 80),
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          };
        })
        .filter((rect) => rect.width > 0 && rect.height > 0);
      const overlaps = [];
      for (const control of controls) {
        for (const card of cards) {
          if (
            control.left < card.right &&
            control.right > card.left &&
            control.top < card.bottom &&
            control.bottom > card.top
          ) {
            overlaps.push({ control, card });
          }
        }
      }
      return overlaps;
    });
    observations.push({ type: "lower-home-controls", width, overlaps: lowerHomeOverlap });
    if (lowerHomeOverlap.length) {
      failures.push({ type: "floating-controls-overlap-lower-home-card", width, overlaps: lowerHomeOverlap });
    }

    await p.goto(`${baseUrl}/upcoming-events`, { waitUntil: "networkidle" });
    await p.locator(".site-footer").scrollIntoViewIfNeeded();
    await p.waitForTimeout(250);
    const footerOverlap = await p.evaluate(() => {
      const footer = document.querySelector(".site-footer")?.getBoundingClientRect();
      const controls = Array.from(document.querySelectorAll(".ai-chatbot-toggle, .floating-whatsapp-cta"))
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            cls: el.className,
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          };
        })
        .filter((rect) => rect.width > 0 && rect.height > 0);
      const content = Array.from(document.querySelectorAll(".site-footer a, .site-footer h3, .site-footer p, .site-footer .site-footer-certificate"))
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            text: el.textContent?.trim().replace(/\s+/g, " ").slice(0, 80),
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          };
        })
        .filter((rect) => rect.width > 0 && rect.height > 0);
      const controlElements = Array.from(document.querySelectorAll(".ai-chatbot-toggle, .floating-whatsapp-cta"));
      const overlap = [];
      for (const control of controls) {
        for (const item of content) {
          if (
            control.left < item.right &&
            control.right > item.left &&
            control.top < item.bottom &&
            control.bottom > item.top
          ) {
            const x = Math.min(Math.max((control.left + control.right) / 2, 0), window.innerWidth - 1);
            const y = Math.min(Math.max((control.top + control.bottom) / 2, 0), window.innerHeight - 1);
            const topElement = document.elementFromPoint(x, y);
            const controlElement = controlElements[control.index];
            const visuallyBlocking = !!controlElement && (topElement === controlElement || controlElement.contains(topElement));
            if (visuallyBlocking) {
              overlap.push({ control, item });
            }
          }
        }
      }
      return { footer, controls, overlap };
    });
    observations.push({ type: "footer-controls", width, ...footerOverlap });
    if (footerOverlap.overlap.length) {
      failures.push({ type: "floating-controls-overlap-footer-content", width, overlaps: footerOverlap.overlap });
    }

    for (const route of heroRoutes) {
      await p.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
      await p.waitForTimeout(200);
      const hero = await p.evaluate(() => {
        const h1 = document.querySelector("main h1, .seasons-pro-hero-title");
        if (!h1) return null;
        const rect = h1.getBoundingClientRect();
        const style = getComputedStyle(h1);
        const parent = h1.parentElement?.getBoundingClientRect();
        return {
          text: h1.textContent?.trim().replace(/\s+/g, " ").slice(0, 120),
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          right: rect.right,
          width: rect.width,
          height: rect.height,
          fontSize: style.fontSize,
          lineHeight: style.lineHeight,
          parentWidth: parent?.width ?? null,
          overflowX: document.documentElement.scrollWidth - window.innerWidth,
        };
      });
      observations.push({ type: "hero", width, route, hero });
      if (hero) {
        if (hero.overflowX > 2) {
          failures.push({ type: "horizontal-overflow", width, route, overflowX: hero.overflowX });
        }
        if (hero.bottom > viewport.height - 24 && width >= 768) {
          failures.push({ type: "hero-heading-too-tall", width, route, hero });
        }
        if (hero.parentWidth && hero.width > hero.parentWidth + 2) {
          failures.push({ type: "hero-heading-overflows-parent", width, route, hero });
        }
      }
    }

    await p.close();
  }
} finally {
  await browser.close();
}

const report = { baseUrl, failureCount: failures.length, failures, observations };
console.log(JSON.stringify(report, null, 2));
process.exitCode = failures.length ? 1 : 0;
