import { chromium } from "playwright";

const baseUrl = process.argv[2] || "http://localhost:3001";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

await page.goto(baseUrl, { waitUntil: "networkidle" });
await scrollThroughPage(page);

const slices = [
  { name: "hero", selector: ".home-hero" },
  { name: "journeys", selector: ".uh-journeys-section" },
  { name: "why", selector: ".uh-whychoose-section" },
  { name: "travel", selector: ".uh-travel-section" },
  { name: "cta", selector: ".cta-contact-section" },
];

for (const slice of slices) {
  const locator = page.locator(slice.selector).first();
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  await locator.screenshot({ path: `.tmp/home-${slice.name}-desktop.png` });
}

await browser.close();

async function scrollThroughPage(page) {
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);

  for (let y = 0; y <= pageHeight; y += 700) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(80);
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(250);
}
