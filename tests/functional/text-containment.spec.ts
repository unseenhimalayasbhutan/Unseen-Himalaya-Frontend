import { expect, test, type Page } from "@playwright/test";

const routes = [
  "/",
  "/bhutan-tours",
  "/cultural-tours",
  "/land-entry-tours",
  "/festival-tours",
  "/contact",
  "/facts",
  "/faq",
  "/optional-tours",
];

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1366, height: 768 },
];

async function findTextOverflow(page: Page) {
  return page.evaluate(() => {
    const selectors = [
      ".tour-pro-route-rate-note",
      ".cultural-pro-route-note",
      ".cultural-pro-route-facts > div",
      ".cultural-pro-route-option",
      ".cultural-pro-day-item",
      ".uh-package-card",
      ".uh-package-preview",
      ".contact-pro-card",
      ".contact-pro-form-card",
      ".tour-pro-stat-card",
      ".uh-bhutan-custom-card",
      ".faq-item",
    ];

    const inspected = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
    const failures: string[] = [];

    for (const element of inspected) {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);

      if (rect.width < 2 || rect.height < 2 || style.visibility === "hidden") {
        continue;
      }

      const horizontalOverflow = element.scrollWidth - element.clientWidth;
      const verticalOverflow =
        style.overflowY === "hidden" ? element.scrollHeight - element.clientHeight : 0;

      if (horizontalOverflow > 2 || verticalOverflow > 2) {
        const label =
          element.getAttribute("class") ||
          element.getAttribute("aria-label") ||
          element.tagName.toLowerCase();
        failures.push(
          `${label}: scroll ${element.scrollWidth}x${element.scrollHeight}, client ${element.clientWidth}x${element.clientHeight}`,
        );
      }
    }

    return failures;
  });
}

test("priority card and route text stays inside its boxes", async ({ page }) => {
  test.setTimeout(180_000);

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);

    for (const route of routes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(250);

      const failures = await findTextOverflow(page);
      expect(failures, `${viewport.name} ${route}`).toEqual([]);
    }
  }
});
