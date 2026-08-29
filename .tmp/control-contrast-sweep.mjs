import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const baseURL = process.env.BASE_URL || "http://localhost:3000";
const routes = [
  "/",
  "/about-bhutan",
  "/facts",
  "/gnh-philosophies",
  "/why-visit",
  "/places-to-visit",
  "/documents",
  "/legal-documents",
  "/currency",
  "/best-time",
  "/festival-calendar",
  "/sdf",
  "/faq",
  "/about-us",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/upcoming-events",
  "/seasons",
  "/cultural-tours",
  "/festival-tours",
  "/bhutan-tours",
  "/cycling-tours",
  "/land-entry-tours",
  "/optional-tours",
  "/bhutan-trekkings",
  "/cultural-tours/3-day-paro-thimphu-paro",
  "/festival-tours/4-day-dechenphu-tshechu-short-festival-tour",
  "/bhutan-tours/3-day-paro-thimphu-paro",
  "/cycling-tours/3-day-bhutan-cycling-tour",
  "/land-entry-tours/4-day-paro-focus",
];

const viewports = [
  { name: "desktop", width: 1440, height: 950 },
  { name: "mobile", width: 390, height: 844 },
];

const failures = [];

function relLum({ r, g, b }) {
  const convert = (value) => {
    const s = value / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * convert(r) + 0.7152 * convert(g) + 0.0722 * convert(b);
}

function contrast(a, b) {
  const l1 = relLum(a);
  const l2 = relLum(b);
  const hi = Math.max(l1, l2);
  const lo = Math.min(l1, l2);
  return (hi + 0.05) / (lo + 0.05);
}

const browser = await chromium.launch({ headless: true });
try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    page.setDefaultTimeout(12000);
    for (const route of routes) {
      console.log(`[control-sweep] ${viewport.name} ${route}`);
      await page.goto(`${baseURL}${route}`, { waitUntil: "networkidle" });
      await page.evaluate(() => window.scrollTo(0, 0));

      const items = await page.evaluate(() => {
        const parse = (value) => {
          const match = value.match(/rgba?\(([^)]+)\)/);
          if (!match) return null;
          const parts = match[1].split(/[,\s/]+/).filter(Boolean).map(Number);
          const [r, g, b] = parts;
          const a = parts.length >= 4 ? parts[3] : 1;
          if ([r, g, b, a].some((n) => Number.isNaN(n))) return null;
          return { r, g, b, a };
        };
        const blend = (fg, bg) => ({
          r: Math.round(fg.r * fg.a + bg.r * (1 - fg.a)),
          g: Math.round(fg.g * fg.a + bg.g * (1 - fg.a)),
          b: Math.round(fg.b * fg.a + bg.b * (1 - fg.a)),
          a: 1,
        });
        const backgroundFor = (el) => {
          let current = el;
          let bg = { r: 11, g: 11, b: 11, a: 1 };
          const stack = [];
          while (current && current.nodeType === Node.ELEMENT_NODE) {
            stack.push(current);
            current = current.parentElement;
          }
          for (const node of stack.reverse()) {
            const color = parse(getComputedStyle(node).backgroundColor);
            if (color && color.a > 0) bg = color.a < 1 ? blend(color, bg) : color;
          }
          return bg;
        };
        const selector = "button, a[href], input, textarea, select, [role='button']";
        return Array.from(document.querySelectorAll(selector)).flatMap((el) => {
          const rect = el.getBoundingClientRect();
          const style = getComputedStyle(el);
          if (
            rect.width < 1 ||
            rect.height < 1 ||
            style.visibility === "hidden" ||
            style.display === "none"
          ) {
            return [];
          }
          const text =
            el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement
              ? el.value || el.placeholder || el.getAttribute("aria-label") || ""
              : (el.textContent || el.getAttribute("aria-label") || "").trim();
          if (!text && el.tagName.toLowerCase() !== "select") return [];
          return [{
            tag: el.tagName.toLowerCase(),
            text: text.replace(/\s+/g, " ").slice(0, 80),
            classes: el.className && typeof el.className === "string" ? el.className : "",
            disabled: Boolean(el.disabled || el.getAttribute("aria-disabled") === "true"),
            color: parse(style.color),
            background: backgroundFor(el),
            opacity: Number(style.opacity || 1),
          }];
        });
      });

      for (const item of items) {
        if (!item.color || !item.background) continue;
        const ratio = contrast(item.color, item.background);
        const threshold = item.disabled ? 2.4 : 3.0;
        if (ratio < threshold) {
          failures.push({ route, viewport: viewport.name, ratio, ...item });
        }
      }
    }
    await page.close();
  }
} finally {
  await browser.close();
}

const reportPath = path.join(".tmp", "control-contrast-sweep.json");
fs.writeFileSync(reportPath, JSON.stringify({ failures }, null, 2));
console.log(JSON.stringify({ reportPath, failureCount: failures.length, failures: failures.slice(0, 40) }, null, 2));
