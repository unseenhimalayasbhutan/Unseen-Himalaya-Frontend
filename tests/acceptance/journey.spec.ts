import { expect, test } from "@playwright/test";

test("a traveler can navigate from mobile menu to planning a journey", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator("#mobile-navigation")).toHaveAttribute(
    "aria-hidden",
    "false",
  );

  const mobileNavigation = page.locator("#mobile-navigation");
  await mobileNavigation
    .getByRole("button", { name: "Travelling to Bhutan" })
    .click();
  await mobileNavigation.getByRole("link", { name: /faq/i }).click();

  await expect(page).toHaveURL(/\/faq$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Everything you need",
  );

  await page
    .getByRole("main")
    .getByRole("link", { name: "Contact our team", exact: true })
    .click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "start planning",
  );

  await page.getByLabel("Full Name").fill("Acceptance Test Traveler");
  await page.getByLabel("Email Address").fill("traveler@example.com");
  await page.getByLabel("Travel Month").fill("October 2026");
  await page
    .getByLabel("What kind of Bhutan trip are you interested in?")
    .selectOption("cultural");
  await page.getByLabel("Message").fill("Interested in a private cultural tour.");

  await expect(page.getByRole("button", { name: /submit inquiry/i })).toBeEnabled();
  await expect(
    page.getByText(/review and edit the message before sending/i),
  ).toBeVisible();
});

test("a traveler can explore a tour and reach the inquiry page", async ({
  page,
}) => {
  await page.goto("/bhutan-tours");

  const duration = page.locator(".uh-itinerary-redesign-filter-btn").nth(1);
  await duration.click();
  await expect(duration).toHaveAttribute("aria-pressed", "true");

  const route = page.locator(".cultural-pro-route-option").first();
  await route.click();
  await expect(route).toHaveClass(/is-active/);

  await page.getByRole("link", { name: /enquire about this route/i }).first().click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByLabel("Full Name")).toBeVisible();
});
