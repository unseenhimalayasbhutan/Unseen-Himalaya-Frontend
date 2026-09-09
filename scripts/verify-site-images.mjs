import { chromium } from "@playwright/test";

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const routes = [
  "/",
  "/festival-tours",
  "/places-to-visit",
  "/seasons",
  "/why-visit",
  "/optional-tours",
  "/gnh-philosophies",
  "/upcoming-events",
  "/legal-documents",
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const failures = [];

page.on("pageerror", (error) => {
  failures.push(`Page error: ${error.message}`);
});

page.on("console", (message) => {
  if (message.type() === "error") {
    const text = message.text();
    if (text.includes("www.gstatic.com/images/branding/googlelogo")) return;
    if (text.includes("net::ERR_NETWORK_ACCESS_DENIED")) return;
    failures.push(`Console error: ${message.text()}`);
  }
});

for (const route of routes) {
  const url = `${baseUrl}${route}`;
  const response = await page.goto(url, { waitUntil: "networkidle" });

  if (!response || !response.ok()) {
    failures.push(`${route}: HTTP ${response?.status() ?? "no response"}`);
    continue;
  }

  const bodyTextLength = await page.locator("body").innerText().then((text) => text.trim().length);
  if (bodyTextLength === 0) {
    failures.push(`${route}: rendered body is empty`);
  }

  await page.evaluate(async () => {
    const step = Math.max(window.innerHeight * 0.8, 600);
    for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
    window.scrollTo(0, 0);
  });

  await page.waitForLoadState("networkidle");

  const brokenImages = await page.locator("img").evaluateAll(async (images) => {
    const sources = Array.from(
      new Set(
        images
          .map((image) => image.currentSrc || image.src)
          .filter((src) => {
            if (!src) return false;
            const url = new URL(src, window.location.href);
            return url.origin === window.location.origin;
          }),
      ),
    );

    const results = await Promise.all(
      sources.map(async (src) => {
        try {
          const response = await fetch(src, { method: "HEAD" });
          return response.ok ? null : `${src} (${response.status})`;
        } catch {
          return src;
        }
      }),
    );

    return results.filter(Boolean);
  });

  if (brokenImages.length > 0) {
    failures.push(`${route}: broken images ${brokenImages.join(", ")}`);
  }
}

await browser.close();

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Verified ${routes.length} routes with no broken rendered images.`);
