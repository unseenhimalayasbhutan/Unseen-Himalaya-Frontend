import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = "http://localhost:3001";
const outDir = path.resolve(".tmp/strict-visual-audit/design-system");

const pages = [
  ["Homepage", "/"],
  ["Cultural Tours", "/cultural-tours"],
  ["Festival Tours", "/festival-tours"],
  ["Photography Tours", "/bhutan-tours"],
  ["About Bhutan", "/about-bhutan"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
  ["Tour Detail", "/cultural-tours/3-day-paro-thimphu-paro"],
];

const selectors = {
  h2: "body h2",
  copy: "main p, section p",
  cta: [
    "body .btn-primary",
    "body .tour-pro-btn-primary",
    "body .home-hero-btn-primary",
    "body .contact-pro-btn-primary",
    "body .festival-calendar-redesign-btn-primary",
    "body .about-bhutan-btn-primary",
    "body .uh-journeys-btn-primary",
    "body .uh-hb-detail-cta",
    "body .cta-btn",
    "body a[href*='contact']",
    "body a[href^='mailto']",
  ].join(","),
  card: [
    "body .ds-surface",
    "body .card",
    "body [class*='-card']",
    "body [class*='Card']",
  ].join(","),
  label: [
    "body .ds-section-heading-eyebrow",
    "body .tour-pro-section-label",
    "body .contact-pro-section-label",
    "body .about-bhutan-label",
    "body .section-eyebrow",
    "body .uh-hb-page-title > span",
    "body .section-label",
    "body .top-heading > span",
    "body .bottom-heading > span",
    "body [class*='kicker']",
    "body [class*='eyebrow']",
  ].join(","),
};

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
const results = [];

for (const [label, route] of pages) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  await page.screenshot({
    path: path.join(outDir, `${label.toLowerCase().replaceAll(" ", "-")}.png`),
    fullPage: false,
  });

  const data = await page.evaluate((selectors) => {
    const serialStyle = (element) => {
      if (!element) return null;
      const cs = getComputedStyle(element);
      return {
        text: element.textContent?.trim().replace(/\s+/g, " ").slice(0, 120) || "",
        tag: element.tagName.toLowerCase(),
        className: element.getAttribute("class") || "",
        backgroundColor: cs.backgroundColor,
        color: cs.color,
        borderColor: cs.borderColor,
        borderRadius: cs.borderRadius,
        boxShadow: cs.boxShadow,
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        textTransform: cs.textTransform,
      };
    };
    const visible = (el) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return rect.width > 0 && rect.height > 0 && cs.visibility !== "hidden" && cs.display !== "none";
    };
    const firstVisible = (selector) => Array.from(document.querySelectorAll(selector)).find(visible) || null;
    const body = getComputedStyle(document.body);
    const main = getComputedStyle(document.querySelector("main") || document.body);
    const header = getComputedStyle(document.querySelector(".site-header") || document.body);
    const footer = getComputedStyle(document.querySelector(".site-footer") || document.body);
    const overlay = document.querySelector("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay");

    return {
      hasContent: document.body.innerText.trim().length > 0,
      hasErrorOverlay: Boolean(overlay),
      body: {
        backgroundColor: body.backgroundColor,
        color: body.color,
        fontFamily: body.fontFamily,
        fontSize: body.fontSize,
        lineHeight: body.lineHeight,
      },
      main: {
        backgroundColor: main.backgroundColor,
        color: main.color,
      },
      header: {
        backgroundColor: header.backgroundColor,
        color: header.color,
        borderColor: header.borderBottomColor,
        boxShadow: header.boxShadow,
      },
      footer: {
        backgroundColor: footer.backgroundColor,
        color: footer.color,
        borderColor: footer.borderTopColor,
        boxShadow: footer.boxShadow,
      },
      h2: serialStyle(firstVisible(selectors.h2)),
      copy: serialStyle(firstVisible(selectors.copy)),
      cta: serialStyle(firstVisible(selectors.cta)),
      card: serialStyle(firstVisible(selectors.card)),
      sectionLabel: serialStyle(firstVisible(selectors.label)),
    };
  }, selectors);

  results.push({ label, route, ...data });
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto(baseUrl, { waitUntil: "networkidle" });
await mobile.screenshot({ path: path.join(outDir, "mobile-header-closed.png"), fullPage: false });
await mobile.locator(".mobile-menu-btn").click();
await mobile.screenshot({ path: path.join(outDir, "mobile-header-open.png"), fullPage: false });
const mobileHeader = await mobile.evaluate(() => {
  const header = getComputedStyle(document.querySelector(".site-header"));
  const button = getComputedStyle(document.querySelector(".mobile-menu-btn"));
  const menu = getComputedStyle(document.querySelector(".mobile-menu"));
  return {
    header: { backgroundColor: header.backgroundColor, color: header.color, borderColor: header.borderBottomColor },
    button: { backgroundColor: button.backgroundColor, color: button.color, borderColor: button.borderColor, borderRadius: button.borderRadius },
    menu: { backgroundColor: menu.backgroundColor, color: menu.color, borderColor: menu.borderLeftColor, boxShadow: menu.boxShadow },
  };
});

await browser.close();

const report = { generatedAt: new Date().toISOString(), baseUrl, pages: results, mobileHeader };
await fs.writeFile(path.join(outDir, "computed-styles.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
