import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const outDir = path.join(".tmp", "strict-visual-audit", "hero-gnr");
const widths = [1920, 1440, 1280, 1024, 768, 430, 390];
const expectedRatio = 1448 / 1086;

fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const results = [];

  for (const width of widths) {
    const height = width >= 1280 ? 1080 : width >= 1024 ? 900 : width >= 768 ? 1024 : 844;
    const page = await browser.newPage({ viewport: { width, height } });
    await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
    await page.locator(".home-hero-gnr-link img").waitFor({ state: "visible" });
    await page.waitForFunction(() => {
      const img = document.querySelector(".home-hero-gnr-link img");
      return img && img.complete && img.naturalWidth > 0;
    });
    await page.locator(".home-hero-gnr-link img").evaluate((img) => img.decode?.().catch(() => undefined));
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(outDir, `homepage-${width}.png`), fullPage: false });

    const metrics = await page.evaluate((expectedRatio) => {
      const rectsOverlap = (a, b) => a && b && a.right > b.left && a.left < b.right && a.bottom > b.top && a.top < b.bottom;
      const distance = (a, b) => {
        if (!a || !b || rectsOverlap(a, b)) return 0;
        const dx = Math.max(b.left - a.right, a.left - b.right, 0);
        const dy = Math.max(b.top - a.bottom, a.top - b.bottom, 0);
        return Math.round(Math.hypot(dx, dy));
      };
      const rect = (selector) => {
        const node = document.querySelector(selector);
        if (!node) return null;
        const r = node.getBoundingClientRect();
        return {
          top: r.top,
          right: r.right,
          bottom: r.bottom,
          left: r.left,
          width: r.width,
          height: r.height,
        };
      };

      const card = rect(".home-hero-gnr-link");
      const img = rect(".home-hero-gnr-link img");
      const nav = rect(".site-header");
      const hero = rect(".home-hero");
      const h1 = rect(".home-hero h1");
      const copy = rect(".home-hero p");
      const buttons = rect(".home-hero-buttons");
      const trust = rect(".home-hero-trust");
      const trustItems = Array.from(document.querySelectorAll(".home-hero-trust-item")).map((node) => {
        const r = node.getBoundingClientRect();
        return { top: r.top, right: r.right, bottom: r.bottom, left: r.left, width: r.width, height: r.height };
      });

      const styles = card ? getComputedStyle(document.querySelector(".home-hero-gnr-link")) : null;
      const cardRatio = card ? card.width / card.height : 0;
      const imgRatio = img ? img.width / img.height : 0;
      const major = [h1, copy, buttons, trust].filter(Boolean);

      return {
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        card,
        img,
        nav,
        hero,
        h1,
        buttons,
        trust,
        trustItems,
        cardRatio,
        imgRatio,
        ratioDelta: Math.abs(cardRatio - expectedRatio),
        imageRatioDelta: Math.abs(imgRatio - expectedRatio),
        cardStyle: styles ? {
          background: styles.backgroundColor,
          border: styles.border,
          borderRadius: styles.borderRadius,
          boxShadow: styles.boxShadow,
        } : null,
        overlaps: {
          nav: major.some((r) => rectsOverlap(nav, r)) || rectsOverlap(nav, card),
          h1: rectsOverlap(card, h1),
          buttons: rectsOverlap(card, buttons),
          trust: rectsOverlap(card, trust),
        },
        distances: {
          h1: distance(card, h1),
          buttons: distance(card, buttons),
          trust: distance(card, trust),
        },
        trustSingleLine: trustItems.length > 1
          ? trustItems.every((r) => Math.abs(r.top - trustItems[0].top) < 3)
          : true,
      };
    }, expectedRatio);

    const issues = [];
    if (metrics.scrollWidth > metrics.innerWidth + 1) issues.push("horizontal scroll");
    if (!metrics.card || !metrics.img) issues.push("missing poster");
    if (metrics.card) {
      if (metrics.card.left < 16 || metrics.card.right > width - 16) issues.push("poster too close to viewport edge");
      if (metrics.card.top < (metrics.nav?.bottom || 0) + 24) issues.push("poster too close to navigation");
      if (metrics.card.bottom > (metrics.hero?.bottom || height) + 1) issues.push("poster clipped by hero");
      if (metrics.ratioDelta > 0.03 || metrics.imageRatioDelta > 0.03) issues.push("poster distorted or blank card space");
    }
    if (metrics.overlaps.nav) issues.push("navigation collision");
    if (metrics.overlaps.h1) issues.push("heading overlap");
    if (metrics.overlaps.buttons) issues.push("CTA overlap");
    if (metrics.overlaps.trust) issues.push("trust badge overlap");
    if (width >= 1024 && metrics.card?.width > 500) issues.push("desktop poster too wide");
    if (width >= 1024 && metrics.card?.width < 320) issues.push("desktop poster too small");
    if (width < 1024 && metrics.card?.width > Math.min(440, width - 36) + 1) issues.push("mobile/tablet poster too wide");
    if (width >= 1024 && metrics.trust && metrics.card && metrics.distances.trust < 32) issues.push("desktop trust too close to poster");
    if (width < 1024 && metrics.trust && metrics.card && metrics.card.top < metrics.trust.bottom + 32) issues.push("mobile poster not separated from trust");
    if (width >= 1024 && !metrics.trustSingleLine) issues.push("desktop trust badges wrapped");

    results.push({ width, height, issues, metrics });
    await page.close();
  }

  await browser.close();

  const reportPath = path.join(outDir, "layout-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(JSON.stringify({ reportPath, failures: results.filter((r) => r.issues.length), results }, null, 2));

  if (results.some((r) => r.issues.length)) process.exitCode = 1;
})();
