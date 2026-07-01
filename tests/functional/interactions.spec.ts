import { expect, test } from "@playwright/test";

async function selectSecond(
  page: import("@playwright/test").Page,
  selector: string,
  activeCheck: "pressed" | "current" | "active-class" = "pressed",
) {
  const buttons = page.locator(selector);
  await expect(buttons).toHaveCount(await buttons.count());
  expect(await buttons.count(), `${selector} needs multiple choices`).toBeGreaterThan(1);

  const second = buttons.nth(1);
  await second.scrollIntoViewIfNeeded();
  await second.click();
  if (activeCheck === "current") {
    await expect(second).toHaveAttribute("aria-current", "true");
  } else if (activeCheck === "active-class") {
    await expect(second).toHaveClass(/is-active/);
  } else {
    await expect(second).toHaveAttribute("aria-pressed", "true");
  }
}

async function previewSecondPackage(page: import("@playwright/test").Page) {
  const secondPackage = page.locator(".uh-package-card").nth(1);

  await secondPackage.scrollIntoViewIfNeeded();
  await secondPackage.focus();
  await expect(secondPackage).toHaveAttribute("aria-current", "true");
  await expect(page.locator(".uh-package-preview")).toContainText(
    "5-Day Classic Western Bhutan",
  );
  await expect(page.locator(".uh-package-preview")).toContainText(
    "5 Days / 4 Nights",
  );
}

test("home page selectors respond to clicks", async ({ page }) => {
  await page.goto("/");

  await selectSecond(page, ".uh-whychoose-feature-card");
  await selectSecond(page, ".uh-destination-option");
  await previewSecondPackage(page);
  await expect(
    page.locator(".uh-package-preview").getByRole("link", {
      name: "Enquire",
    }),
  ).toBeVisible();
  await selectSecond(page, ".uh-travel-step-card");
});

test("information-page selectors respond to clicks", async ({ page }) => {
  await page.goto("/why-visit");
  await selectSecond(page, ".uh-whyvisit-reason-tab");
  await selectSecond(page, ".uh-whyvisit-style-button");
  await selectSecond(page, ".uh-whyvisit-moment-button");

  await page.goto("/facts");
  await selectSecond(page, ".facts-redesign-philosophy-tab");

  await page.goto("/cultural-tours");
  await selectSecond(page, ".cultural-pro-route-option", "active-class");
});

test("tour filters, route previews, and add-ons respond to clicks", async ({
  page,
}) => {
  await page.goto("/bhutan-tours");
  await selectSecond(page, ".uh-itinerary-redesign-filter-btn");
  const tourTrigger = page.locator(".cultural-pro-route-option").first();
  await tourTrigger.click();
  await expect(tourTrigger).toHaveClass(/is-active/);

  await page.goto("/festival-tours");
  await selectSecond(page, ".uh-festival-library-redesign-filter-btn");
  const festivalTrigger = page.locator(".cultural-pro-route-option").first();
  await festivalTrigger.click();
  await expect(festivalTrigger).toHaveClass(/is-active/);

  await page.goto("/optional-tours");
  await selectSecond(page, ".uh-addon-category-button");
  const addOn = page.locator(".uh-addon-experience-card").first();
  await addOn.click();
  await expect(addOn).toHaveAttribute("aria-pressed", "true");
});
