import { chromium } from "playwright";

const baseUrl = process.argv[2] || "http://localhost:3001";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

await page.goto(baseUrl, { waitUntil: "networkidle" });
await scrollThroughPage(page);
await page.screenshot({ path: ".tmp/home-design-desktop.png", fullPage: true });

await page.setViewportSize({ width: 390, height: 1400 });
await page.goto(baseUrl, { waitUntil: "networkidle" });
await scrollThroughPage(page);
await page.screenshot({ path: ".tmp/home-design-mobile.png", fullPage: true });

const report = await page.evaluate(() => {
  const sections = Array.from(
    document.querySelectorAll(
      ".home-hero, .uh-journeys-section, .uh-whychoose-section, .uh-travel-section, .cta-contact-section"
    )
  ).map((section) => {
    const rect = section.getBoundingClientRect();
    const styles = getComputedStyle(section);

    return {
      className: section.className,
      background: styles.backgroundColor,
      color: styles.color,
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    };
  });

  const visibleBlobs = Array.from(
    document.querySelectorAll(
      ".uh-journeys-bg-orb, .uh-travel-bg-orb, .why-bg-orb"
    )
  ).filter((element) => getComputedStyle(element).display !== "none").length;

  const guidebookImages = Array.from(
    document.querySelectorAll(".uh-guidebook-image img")
  ).map((img) => {
    const rect = img.getBoundingClientRect();
    const styles = getComputedStyle(img);

    return {
      src: img.currentSrc || img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      display: styles.display,
      opacity: styles.opacity,
      visibility: styles.visibility,
    };
  });

  return { sections, visibleBlobs, guidebookImages };
});

console.log(JSON.stringify(report, null, 2));
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
