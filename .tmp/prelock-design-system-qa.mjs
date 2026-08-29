import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const baseURL = process.env.BASE_URL || "http://localhost:3004";

const widths = [1920, 1440, 1280, 1024, 768, 430, 390, 360];
const routes = [
  { path: "/", name: "Homepage" },
  { path: "/about-bhutan", name: "About Bhutan" },
  { path: "/facts", name: "Bhutan Facts" },
  { path: "/cultural-tours", name: "Cultural Tours" },
  { path: "/festival-tours", name: "Festival Tours" },
  { path: "/bhutan-tours", name: "Photography Tours" },
  { path: "/faq", name: "FAQ" },
  { path: "/contact", name: "Contact" },
  { path: "/cultural-tours/3-day-paro-thimphu-paro", name: "Tour Detail" },
];

const routeSpecificSelectors = {
  "/": [
    [".home-hero-gnr-link", "homepage GNR feature card"],
    [".uh-destination-option", "homepage Destinations selector"],
    [".uh-package-preview-media", "homepage Selected itinerary image"],
    [".why-section", "lower homepage"],
    [".site-footer", "footer"],
    [".site-header", "header"],
  ],
  "/about-bhutan": [
    [".about-bhutan-overview-card", "About Bhutan information cards"],
    [".about-bhutan-detail-card", "About Bhutan detail cards"],
    [".site-footer", "footer"],
    [".site-header", "header"],
  ],
  "/facts": [
    [".facts-redesign-story-card", "facts-style cards"],
    [".facts-redesign-philosophy-tab", "facts tabs"],
    [".site-footer", "footer"],
    [".site-header", "header"],
  ],
  "/cultural-tours": [
    [".tour-pro-card, .uh-hb-package-card, .cultural-value-card-clean", "Cultural Tours cards"],
    [".site-footer", "footer"],
    [".site-header", "header"],
  ],
  "/festival-tours": [
    [".tour-pro-card, .uh-hb-package-card, .uh-festival-anchor-card", "Festival Tours cards"],
    [".site-footer", "footer"],
    [".site-header", "header"],
  ],
};

const failures = [];
const observations = [];

function parseRgb(value) {
  const match = value.match(/rgba?\(([^)]+)\)/);
  if (!match) return null;
  const parts = match[1].split(/[,\s/]+/).filter(Boolean).map(Number);
  const [r, g, b] = parts;
  const a = parts.length >= 4 ? parts[3] : 1;
  if ([r, g, b, a].some((n) => Number.isNaN(n))) return null;
  return { r, g, b, a };
}

function luminance({ r, g, b }) {
  const convert = (value) => {
    const s = value / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * convert(r) + 0.7152 * convert(g) + 0.0722 * convert(b);
}

function contrast(a, b) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const hi = Math.max(l1, l2);
  const lo = Math.min(l1, l2);
  return (hi + 0.05) / (lo + 0.05);
}

const browser = await chromium.launch({ headless: true });
try {
  for (const width of widths) {
    const viewport = { width, height: width <= 430 ? 900 : 980 };
    const page = await browser.newPage({ viewport });
    page.setDefaultTimeout(15000);

    for (const route of routes) {
      console.log(`[prelock-qa] ${width} ${route.path}`);
      await page.goto(`${baseURL}${route.path}`, { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const step = Math.max(240, Math.floor(window.innerHeight * 0.75));
        for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await pause(80);
        }
        window.scrollTo(0, 0);
      });
      await page.waitForLoadState("networkidle");

      const result = await page.evaluate(({ routePath, routeName, routeSpecificSelectors }) => {
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
        const visible = (el) => {
          const rect = el.getBoundingClientRect();
          const style = getComputedStyle(el);
          return rect.width > 1 && rect.height > 1 && style.visibility !== "hidden" && style.display !== "none";
        };
        const root = getComputedStyle(document.documentElement);
        const tokens = {
          primary: root.getPropertyValue("--color-text-primary").trim(),
          secondary: root.getPropertyValue("--color-text-secondary").trim(),
          muted: root.getPropertyValue("--color-text-muted").trim(),
          accent: root.getPropertyValue("--color-accent").trim(),
          card: root.getPropertyValue("--color-bg-card").trim(),
          elevated: root.getPropertyValue("--color-bg-elevated").trim(),
          section: root.getPropertyValue("--color-bg-section").trim(),
          page: root.getPropertyValue("--color-bg-page").trim(),
        };

        const findings = [];
        const notes = [];

        if (document.documentElement.scrollWidth > window.innerWidth + 1) {
          findings.push({
            kind: "horizontal-overflow",
            detail: `${document.documentElement.scrollWidth}px document width on ${window.innerWidth}px viewport`,
          });
        }

        const fontChecks = [
          ["body", "Montserrat"],
          ["h1", "Cormorant"],
          ["h2", "Cormorant"],
          [".section-label, .tour-pro-section-label, .ds-section-heading-eyebrow", "Allura"],
        ];
        for (const [selector, expected] of fontChecks) {
          const el = document.querySelector(selector);
          if (!el || !visible(el)) continue;
          const family = getComputedStyle(el).fontFamily;
          if (!family.toLowerCase().includes(expected.toLowerCase())) {
            findings.push({ kind: "font-family", selector, detail: `${family} does not include ${expected}` });
          }
        }

        const textSelector = "h1,h2,h3,h4,h5,h6,p,li,span,small,strong,a,button,label,summary,input,textarea,select";
        for (const el of Array.from(document.querySelectorAll(textSelector))) {
          if (!visible(el)) continue;
          const style = getComputedStyle(el);
          const color = parse(style.color);
          const background = backgroundFor(el);
          if (!color || !background) continue;
          const ratio = (() => {
            const lum = (rgb) => {
              const c = (value) => {
                const s = value / 255;
                return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
              };
              return 0.2126 * c(rgb.r) + 0.7152 * c(rgb.g) + 0.0722 * c(rgb.b);
            };
            const l1 = lum(color);
            const l2 = lum(background);
            return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
          })();
          const text = (el.textContent || el.value || el.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ");
          if (text && ratio < 2.7) {
            findings.push({
              kind: "low-contrast-text",
              selector: el.tagName.toLowerCase(),
              classes: typeof el.className === "string" ? el.className : "",
              text: text.slice(0, 80),
              color: style.color,
              background: `rgb(${background.r}, ${background.g}, ${background.b})`,
              ratio,
            });
          }
          if (el.matches("a[href]") && color.r < 120 && color.g < 120 && color.b > 140) {
            findings.push({
              kind: "default-link-color",
              text: text.slice(0, 80),
              color: style.color,
              classes: typeof el.className === "string" ? el.className : "",
            });
          }
        }

        for (const img of Array.from(document.images)) {
          if (!visible(img)) continue;
          if (img.complete && (!img.naturalWidth || !img.naturalHeight)) {
            findings.push({
              kind: "image-load",
              selector: img.alt || img.currentSrc,
              detail: `complete=${img.complete} natural=${img.naturalWidth}x${img.naturalHeight}`,
            });
            continue;
          }
          if (!img.complete) continue;
          const rect = img.getBoundingClientRect();
          const objectFit = getComputedStyle(img).objectFit;
          const renderedRatio = rect.width / rect.height;
          const naturalRatio = img.naturalWidth / img.naturalHeight;
          if ((objectFit === "fill" || objectFit === "none") && Math.abs(renderedRatio - naturalRatio) / naturalRatio > 0.08) {
            findings.push({
              kind: "image-distortion",
              selector: img.alt || img.currentSrc,
              objectFit,
              rendered: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
              natural: `${img.naturalWidth}x${img.naturalHeight}`,
            });
          }
        }

        for (const [selector, label] of routeSpecificSelectors[routePath] || []) {
          const count = Array.from(document.querySelectorAll(selector)).filter(visible).length;
          notes.push({ route: routeName, selector, label, count });
          if (count === 0) {
            findings.push({ kind: "missing-key-component", selector, detail: label });
          }
        }

        return { tokens, findings, notes };
      }, { routePath: route.path, routeName: route.name, routeSpecificSelectors });

      for (const finding of result.findings) {
        failures.push({ width, route: route.path, page: route.name, ...finding });
      }
      observations.push({ width, route: route.path, page: route.name, notes: result.notes });

      const hoverSelectors = [
        "a[href]",
        "button",
        ".uh-destination-option",
        ".facts-redesign-philosophy-tab",
        ".site-footer a",
      ];
      for (const selector of hoverSelectors) {
        const loc = page.locator(selector).first();
        if (!(await loc.count())) continue;
        try {
          await loc.hover({ timeout: 2000 });
          const hover = await loc.evaluate((el) => {
            const style = getComputedStyle(el);
            return {
              color: style.color,
              background: style.backgroundColor,
              text: (el.textContent || el.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").slice(0, 80),
            };
          });
          const c = parseRgb(hover.color);
          const b = parseRgb(hover.background) || { r: 11, g: 11, b: 11, a: 1 };
          if (c && contrast(c, b) < 2.7 && hover.text) {
            failures.push({ width, route: route.path, page: route.name, kind: "hover-low-contrast", selector, ...hover });
          }
        } catch {
          // Some elements may be outside the initial viewport at narrow widths.
        }
      }
    }
    await page.close();
  }
} finally {
  await browser.close();
}

const report = { failures, observations };
const reportPath = path.join(".tmp", "prelock-design-system-qa.json");
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ reportPath, failureCount: failures.length, failures: failures.slice(0, 80) }, null, 2));
