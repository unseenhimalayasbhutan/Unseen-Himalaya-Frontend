import { expect, test, type Page } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1366, height: 768 },
];

async function expectNoHorizontalOverflow(page: Page, label: string) {
  const layout = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(layout.scrollWidth, `${label} should not overflow horizontally`).toBeLessThanOrEqual(
    layout.clientWidth + 1,
  );
}

async function expectReadableText(locator: ReturnType<Page["locator"]>, label: string) {
  const color = await locator.evaluate((element) => getComputedStyle(element).color);
  expect(color, `${label} should have a concrete readable color`).not.toBe("");
}

async function previewSecondPackage(page: Page) {
  const secondPackage = page.locator(".uh-package-card").nth(1);

  await secondPackage.scrollIntoViewIfNeeded();
  await secondPackage.focus();
  await expect(secondPackage).toHaveAttribute("aria-current", "true");
  await expect(page.locator(".uh-package-preview")).toContainText(
    "5-Day Classic Western Bhutan",
  );
  await expect(page.locator(".uh-package-preview")).toContainText("Selected itinerary");
}

test("warm cream theme renders on hero, shared CTA, and legal pages", async ({
  page,
}) => {
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/");

    await expect(page.locator(".home-hero")).toBeVisible();
    await expectReadableText(page.locator(".home-hero h1"), `${viewport.name} home hero`);
    await expect(page.locator(".cta-contact-section")).toBeVisible();
    await expectReadableText(
      page.locator(".cta-contact-content h2").first(),
      `${viewport.name} shared CTA`,
    );
    await expectNoHorizontalOverflow(page, `${viewport.name} home`);

    await page.goto("/terms");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expectReadableText(page.getByRole("heading", { level: 1 }), `${viewport.name} terms`);
    await expectNoHorizontalOverflow(page, `${viewport.name} terms`);
  }
});

test("itinerary libraries are usable and responsive on tour pages", async ({
  page,
}) => {
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);

    await page.goto("/");
    await previewSecondPackage(page);
    await expectNoHorizontalOverflow(page, `${viewport.name} home itinerary library`);

    await page.goto("/bhutan-tours");
    await page.locator(".uh-itinerary-redesign-filter-btn").nth(1).click();
    await page.locator(".cultural-pro-route-option").first().click();
    await expect(page.locator(".cultural-pro-route-panel:visible").first()).toBeVisible();
    await expect(page.locator(".cultural-pro-route-actions:visible").first()).toBeVisible();
    await expectNoHorizontalOverflow(page, `${viewport.name} Bhutan itinerary library`);

    await page.goto("/festival-tours");
    await page.locator(".uh-festival-library-redesign-filter-btn").nth(1).click();
    await page.locator(".cultural-pro-route-option").first().click();
    await expect(page.locator(".cultural-pro-route-panel:visible").first()).toBeVisible();
    await expect(page.getByText("Festival planning")).toHaveCount(0);
    await expectNoHorizontalOverflow(page, `${viewport.name} festival itinerary library`);
  }
});
