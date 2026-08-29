import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = "http://localhost:3000";
const outDir = path.resolve(".tmp/strict-visual-audit/dark-contrast");

const pages = [
  ["homepage", "/"],
  ["about-bhutan", "/about-bhutan"],
  ["bhutan-facts", "/facts"],
  ["cultural-tours", "/cultural-tours"],
  ["festival-tours", "/festival-tours"],
  ["photography-tours", "/bhutan-tours"],
  ["faq", "/faq"],
  ["contact", "/contact"],
  ["tour-detail", "/cultural-tours/3-day-paro-thimphu-paro"],
];

const viewports = [
  ["desktop", { width: 1366, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
];

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const results = [];

for (const [viewportName, viewport] of viewports) {
  const page = await browser.newPage({ viewport });

  for (const [label, route] of pages) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(outDir, `${label}-${viewportName}.png`),
      fullPage: false,
    });

    const result = await page.evaluate(() => {
      const targets = [
        "main h1",
        "main h2",
        "main h3",
        "main h4",
        "main h5",
        "main h6",
        "main summary",
        "main button",
        "main a",
        ".feature-title",
        ".card-title",
        ".destination-title",
        ".info-card-title",
        ".uh-destination-option h3",
        ".uh-destination-preview h3",
        ".uh-package-card h3",
        ".tour-pro-card h3",
        ".tour-pro-route-card h3",
        ".tour-pro-tab-card h3",
        ".uh-hb-package-card strong",
        ".uh-hb-detail-panel h2",
        ".uh-hb-detail-panel h3",
        ".uh-hb-detail-panel h4",
        ".about-bhutan-overview-card h3",
        ".about-bhutan-detail-card h3",
        ".about-bhutan-timeline-card h3",
        ".facts-redesign-story-card h3",
        ".facts-redesign-number-card h3",
        ".facts-redesign-philosophy-tab strong",
        ".facts-redesign-philosophy-panel h3",
        ".facts-redesign-airport-card h4",
        ".faq-question span",
        ".contact-pro-card h3",
        ".mobile-submenu-item-title",
      ].join(",");

      const parseColor = (value) => {
        const match = value.match(/rgba?\(([^)]+)\)/);
        if (!match) return null;
        const parts = match[1].split(",").map((part) => Number.parseFloat(part.trim()));
        return {
          r: parts[0],
          g: parts[1],
          b: parts[2],
          a: Number.isFinite(parts[3]) ? parts[3] : 1,
          raw: value,
        };
      };

      const channel = (value) => {
        const normalized = value / 255;
        return normalized <= 0.03928
          ? normalized / 12.92
          : ((normalized + 0.055) / 1.055) ** 2.4;
      };

      const luminance = (color) =>
        0.2126 * channel(color.r) + 0.7152 * channel(color.g) + 0.0722 * channel(color.b);

      const contrast = (a, b) => {
        const la = luminance(a);
        const lb = luminance(b);
        const light = Math.max(la, lb);
        const dark = Math.min(la, lb);
        return (light + 0.05) / (dark + 0.05);
      };

      const visible = (element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return (
          rect.width > 0 &&
          rect.height > 0 &&
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          element.textContent.trim().length > 0
        );
      };

      const nearestOpaqueSurface = (element) => {
        let current = element;
        while (current && current !== document.documentElement) {
          const style = getComputedStyle(current);
          const bg = parseColor(style.backgroundColor);
          if (bg && bg.a > 0.95) return { color: bg, selector: current.className || current.tagName.toLowerCase() };
          current = current.parentElement;
        }
        const bodyBg = parseColor(getComputedStyle(document.body).backgroundColor);
        return { color: bodyBg, selector: "body" };
      };

      const darkTextOnGold = (element, textColor, surfaceColor) => {
        const bgLum = luminance(surfaceColor);
        const textLum = luminance(textColor);
        const className = element.getAttribute("class") || "";
        return (
          textLum < 0.08 &&
          bgLum > 0.28 &&
          /btn|button|tab|active|submit|cta/i.test(className)
        );
      };

      const inspected = [];
      const failures = [];
      const elements = Array.from(new Set(Array.from(document.querySelectorAll(targets))));

      for (const element of elements) {
        if (!visible(element)) continue;
        const style = getComputedStyle(element);
        const textColor = parseColor(style.color);
        const surface = nearestOpaqueSurface(element);
        if (!textColor || !surface.color) continue;

        const surfaceLum = luminance(surface.color);
        const ratio = contrast(textColor, surface.color);
        const isDarkSurface = surfaceLum < 0.12;
        const isLarge = ["H1", "H2", "H3"].includes(element.tagName);
        const threshold = isLarge ? 3 : 4.5;
        const record = {
          tag: element.tagName.toLowerCase(),
          className: element.getAttribute("class") || "",
          text: element.textContent.trim().replace(/\s+/g, " ").slice(0, 90),
          color: textColor.raw,
          surface: surface.color.raw,
          surfaceSelector: String(surface.selector).slice(0, 120),
          contrast: Number(ratio.toFixed(2)),
          threshold,
        };

        if (isDarkSurface) inspected.push(record);
        if (isDarkSurface && ratio < threshold && !darkTextOnGold(element, textColor, surface.color)) {
          failures.push(record);
        }
      }

      const overlay = document.querySelector("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay");
      return {
        hasContent: document.body.innerText.trim().length > 0,
        hasErrorOverlay: Boolean(overlay),
        inspectedDarkTextNodes: inspected.length,
        failures,
        examples: inspected.slice(0, 16),
      };
    });

    results.push({ label, route, viewport: viewportName, ...result });
  }

  await page.close();
}

await browser.close();

const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  results,
  totalFailures: results.reduce((total, result) => total + result.failures.length, 0),
};

await fs.writeFile(path.join(outDir, "computed-contrast.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
