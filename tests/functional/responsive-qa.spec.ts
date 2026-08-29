import { expect, test, type Locator, type Page } from "@playwright/test";

const publicRoutes = [
  "/",
  "/about-bhutan",
  "/about-us",
  "/best-time",
  "/bhutan-tours",
  "/bhutan-trekkings",
  "/contact",
  "/cultural-tours",
  "/currency",
  "/cycling-tours",
  "/documents",
  "/facts",
  "/faq",
  "/festival-calendar",
  "/festival-tours",
  "/gnh-philosophies",
  "/land-entry-tours",
  "/legal-documents",
  "/optional-tours",
  "/places-to-visit",
  "/privacy-policy",
  "/sdf",
  "/seasons",
  "/terms",
  "/upcoming-events",
  "/why-visit",
] as const;

const requiredHomepageWidths = [1920, 1440, 1280, 1024, 768, 430, 390, 360] as const;
const sitewideSmokeWidths = [1440, 390] as const;

test("homepage remains usable across the requested responsive width matrix", async ({ page }) => {
  test.setTimeout(180_000);

  for (const width of requiredHomepageWidths) {
    await page.setViewportSize({ width, height: width <= 430 ? 844 : 1000 });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    await expect(page.locator("h1")).toBeVisible();
    await assertNoHorizontalOverflow(page, `homepage ${width}px`);
    await assertPrimaryControlsHaveUsableBoxes(page, `homepage ${width}px`);
    await assertFloatingControlsDoNotOverlap(page, `homepage ${width}px`);
    await assertHomepageDuplicatesAreHidden(page, `homepage ${width}px`);
  }
});

test("all public pages keep buttons usable at desktop and narrow mobile widths", async ({ page }) => {
  test.setTimeout(240_000);

  for (const width of sitewideSmokeWidths) {
    await page.setViewportSize({ width, height: width <= 430 ? 844 : 1000 });

    for (const route of publicRoutes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await expect(page.locator("h1")).toBeVisible();

      await assertNoHorizontalOverflow(page, `${route} ${width}px`);
      await assertPrimaryControlsHaveUsableBoxes(page, `${route} ${width}px`);
      await assertFloatingControlsDoNotOverlap(page, `${route} ${width}px`);
    }
  }
});

async function assertNoHorizontalOverflow(page: Page, context: string) {
  const layout = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
  }));

  expect(
    Math.max(layout.scrollWidth, layout.bodyScrollWidth),
    `${context} should not create a horizontal scrollbar`,
  ).toBeLessThanOrEqual(layout.clientWidth + 1);
}

async function assertPrimaryControlsHaveUsableBoxes(page: Page, context: string) {
  const badControls = await page
    .locator(
      [
        'a[class*="btn"]',
        'a[class*="button"]',
        'a[class*="cta"]',
        'button[class*="btn"]',
        'button[class*="button"]',
        'button[class*="tab"]',
        "button[aria-pressed]",
        "button[aria-selected]",
        ".ai-chatbot-toggle",
        ".floating-whatsapp-cta",
      ].join(", "),
    )
    .evaluateAll((elements) =>
      elements
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);

          return (
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            Number(style.opacity) > 0 &&
            rect.width > 0 &&
            rect.height > 0
          );
        })
        .map((element) => {
          const rect = element.getBoundingClientRect();

          return {
            text: element.textContent?.replace(/\s+/g, " ").trim() || element.getAttribute("aria-label") || "",
            width: rect.width,
            height: rect.height,
          };
        })
        .filter((control) => control.width < 24 || control.height < 24),
    );

  expect(badControls, `${context} should not have collapsed CTA/button controls`).toEqual([]);
}

async function assertFloatingControlsDoNotOverlap(page: Page, context: string) {
  const overlap = await page.evaluate(() => {
    const first = document.querySelector(".ai-chatbot-toggle")?.getBoundingClientRect();
    const second = document.querySelector(".floating-whatsapp-cta")?.getBoundingClientRect();

    if (!first || !second || first.width === 0 || second.width === 0) return false;

    return !(
      first.right < second.left ||
      second.right < first.left ||
      first.bottom < second.top ||
      second.bottom < first.top
    );
  });

  expect(overlap, `${context} Ask AI and WhatsApp controls should not overlap`).toBe(false);
}

async function assertHomepageDuplicatesAreHidden(page: Page, context: string) {
  await expectVisibleCount(page.locator(".uh-destination-option"), context, "destination options");
  await expectVisibleCount(page.locator(".uh-whychoose-feature-card"), context, "why choose cards");
  await expectVisibleCount(page.locator(".uh-travel-step-card"), context, "how it works steps");
}

async function expectVisibleCount(locator: Locator, context: string, label: string) {
  const visibleCount = await locator.evaluateAll((elements) =>
    elements.filter((element) => {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);

      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        Number(style.opacity) > 0 &&
        rect.width > 0 &&
        rect.height > 0
      );
    }).length,
  );

  expect(visibleCount, `${context} should show one intended ${label} implementation`).toBeGreaterThan(0);
  expect(visibleCount, `${context} should not show duplicated ${label}`).toBeLessThanOrEqual(8);
}
