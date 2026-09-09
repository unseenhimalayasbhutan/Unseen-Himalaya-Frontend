import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
const messages = [];
const failedRequests = [];

page.on("console", (message) => {
  messages.push({
    type: message.type(),
    text: message.text(),
  });
});

page.on("pageerror", (error) => {
  messages.push({
    type: "pageerror",
    text: error.message,
  });
});

page.on("requestfailed", (request) => {
  failedRequests.push({
    url: request.url(),
    failure: request.failure()?.errorText ?? null,
    resourceType: request.resourceType(),
  });
});

const baseUrl = process.env.BASE_URL || "http://localhost:3009";

await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

const snapshot = await page.evaluate(() => {
  const kicker = document.querySelector(".uh-journeys-heading .uh-journeys-kicker");
  const title = document.querySelector(".uh-journeys-heading h2");
  const description = document.querySelector(".uh-journeys-heading p");
  const radios = Array.from(document.querySelectorAll(".uh-destination-radio")).map((node) => ({
    id: node.id,
    className: node.className,
    checked: node.checked,
    ariaHidden: node.getAttribute("aria-hidden"),
    tabIndex: node.getAttribute("tabindex"),
  }));
  const preview = document.querySelector(".uh-destination-preview");

  return {
    kickerClass: kicker?.className ?? null,
    titleClass: title?.className ?? null,
    descriptionClass: description?.className ?? null,
    radios,
    previewClass: preview?.className ?? null,
    previewId: preview?.id ?? null,
    previewLive: preview?.getAttribute("aria-live") ?? null,
  };
});

console.log(JSON.stringify({ baseUrl, messages, failedRequests, snapshot }, null, 2));
await browser.close();
