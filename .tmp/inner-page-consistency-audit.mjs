import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.argv[2] || process.env.BASE_URL || "http://localhost:3000";
const outDir = path.join(".tmp", "inner-page-consistency");
await fs.mkdir(outDir, { recursive: true });

const routes = [
  { label: "Homepage", path: "/" },
  { label: "Cultural Tours", path: "/cultural-tours" },
  { label: "Festival Tours", path: "/festival-tours" },
  { label: "Photography Tours", path: "/bhutan-tours" },
  { label: "Cycling Tours", path: "/cycling-tours" },
  { label: "Land Entry Tours", path: "/land-entry-tours" },
  { label: "Customizable Tours", path: "/optional-tours" },
  { label: "Seasons", path: "/seasons" },
  { label: "About Bhutan", path: "/about-bhutan" },
  { label: "GNH", path: "/gnh-philosophies" },
  { label: "Bhutan Facts", path: "/facts" },
  { label: "Why Visit Bhutan", path: "/why-visit" },
  { label: "Places to Visit", path: "/places-to-visit" },
  { label: "Documents", path: "/documents" },
  { label: "Currency", path: "/currency" },
  { label: "Best Time", path: "/best-time" },
  { label: "Festival Calendar", path: "/festival-calendar" },
  { label: "SDF", path: "/sdf" },
  { label: "FAQ", path: "/faq" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact", path: "/contact" },
  { label: "Policy", path: "/privacy-policy" },
  { label: "Terms", path: "/terms" },
];

function classifyHero(pathname) {
  if (pathname === "/") return "home";
  return "inner";
}

const browser = await chromium.launch({ headless: true });
const results = [];

for (const viewport of [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "mobile", width: 390, height: 1100 },
]) {
  for (const route of routes) {
    const page = await browser.newPage({ viewport });
    const consoleErrors = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    await page.goto(`${baseUrl}${route.path}`, { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(outDir, `${viewport.name}-${route.label.replaceAll(" ", "-").toLowerCase()}.png`),
      fullPage: false,
    });

    const data = await page.evaluate((routeInfo) => {
      const sample = (selector, limit = 6) =>
        Array.from(document.querySelectorAll(selector))
          .slice(0, limit)
          .map((el) => {
            const s = getComputedStyle(el);
            const r = el.getBoundingClientRect();
            return {
              text: el.textContent?.trim().replace(/\s+/g, " ").slice(0, 120) || "",
              className: typeof el.className === "string" ? el.className : "",
              tag: el.tagName.toLowerCase(),
              color: s.color,
              background: s.backgroundColor,
              fontFamily: s.fontFamily,
              fontSize: s.fontSize,
              fontWeight: s.fontWeight,
              textTransform: s.textTransform,
              letterSpacing: s.letterSpacing,
              borderColor: s.borderColor,
              borderRadius: s.borderRadius,
              boxShadow: s.boxShadow,
              width: Math.round(r.width),
              height: Math.round(r.height),
            };
          });

      const containerWidths = Array.from(document.querySelectorAll(".container"))
        .map((el) => Math.round(el.getBoundingClientRect().width))
        .filter(Boolean);
      const maxContainer = containerWidths.length ? Math.max(...containerWidths) : 0;

      const hero =
        document.querySelector("main > section[class*='hero']") ||
        document.querySelector("main > section:first-child");
      const heroStyles = hero
        ? (() => {
            const s = getComputedStyle(hero);
            const r = hero.getBoundingClientRect();
            return {
              className: typeof hero.className === "string" ? hero.className : "",
              background: s.backgroundColor,
              backgroundImage: s.backgroundImage.slice(0, 220),
              color: s.color,
              width: Math.round(r.width),
              height: Math.round(r.height),
            };
          })()
        : null;

      const h2s = sample("main h2", 12);
      const darkH2s = h2s.filter((item) =>
        /rgb\((0, 0, 0|1[0-9], 1[0-9], 1[0-9]|2[0-9], 2[0-9], 2[0-9]|3[0-9], 3[0-9], 3[0-9])\)/.test(item.color)
      );
      const whiteBody = sample("main p, main li", 30).filter((item) => item.color === "rgb(255, 255, 255)");
      const blueLinks = sample("main a", 30).filter((item) =>
        item.color === "rgb(0, 0, 238)" || item.color === "rgb(85, 26, 139)"
      );
      const buttons = sample(
        "main a[class*='btn'], main a[class*='button'], main button[class*='btn'], main button[class*='button']",
        8
      );
      const cards = sample(
        "main [class*='card'], main [class*='surface'], main [class*='panel']",
        12
      );
      const credits = sample("main figcaption, main [class*='credit']", 8);
      const eyebrows = sample(
        "main [class*='eyebrow'], main [class*='section-label'], main [class*='kicker'], main [class*='label']",
        12
      );

      return {
        route: routeInfo,
        heroStyles,
        h1: sample("main h1", 2),
        h2s,
        darkH2s,
        whiteBody,
        blueLinks,
        buttons,
        cards,
        credits,
        eyebrows,
        maxContainer,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    }, route);

    results.push({
      viewport: viewport.name,
      family: classifyHero(route.path),
      path: route.path,
      label: route.label,
      ...data,
      consoleErrors,
    });
    await page.close();
  }
}

await browser.close();
await fs.writeFile(
  path.join(outDir, "audit-results.json"),
  JSON.stringify(results, null, 2)
);

const summary = results.map((item) => ({
  viewport: item.viewport,
  page: item.label,
  path: item.path,
  heroClass: item.heroStyles?.className || "",
  heroHeight: item.heroStyles?.height || 0,
  maxContainer: item.maxContainer,
  h1Font: item.h1[0]?.fontFamily || "",
  h1Color: item.h1[0]?.color || "",
  firstH2Font: item.h2s[0]?.fontFamily || "",
  firstH2Color: item.h2s[0]?.color || "",
  darkH2s: item.darkH2s.length,
  whiteBody: item.whiteBody.length,
  blueLinks: item.blueLinks.length,
  buttons: item.buttons.length,
  cardRadius: item.cards[0]?.borderRadius || "",
  overflow: item.overflow,
  consoleErrors: item.consoleErrors.length,
}));

console.table(summary);
console.log(`Wrote ${path.join(outDir, "audit-results.json")}`);
