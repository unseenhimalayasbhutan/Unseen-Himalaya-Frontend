import { expect, test, type Page } from "@playwright/test";
import {
  culturalShowcasePackages,
  cyclingShowcasePackages,
  festivalShowcasePackages,
  landEntryShowcasePackages,
  photographyShowcasePackages,
} from "../../app/data/packageShowcases";

const staticRoutes = [
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

const detailRoutes = [
  ...culturalShowcasePackages.map((pkg) => `/cultural-tours/${pkg.slug}`),
  ...photographyShowcasePackages.map((pkg) => `/bhutan-tours/${pkg.slug}`),
  ...festivalShowcasePackages.map((pkg) => `/festival-tours/${pkg.slug}`),
  ...landEntryShowcasePackages.map((pkg) => `/land-entry-tours/${pkg.slug}`),
  ...cyclingShowcasePackages.map((pkg) => `/cycling-tours/${pkg.slug}`),
];

const pressedGroups = [
  { route: "/", selector: ".uh-whychoose-feature-card", name: "home why choose cards" },
  { route: "/", selector: ".uh-destination-option", name: "home destination cards" },
  { route: "/", selector: ".uh-travel-step-card", name: "home how-it-works cards" },
  { route: "/why-visit", selector: ".uh-whyvisit-reason-tab", name: "why visit reason tabs" },
  { route: "/why-visit", selector: ".uh-whyvisit-style-button", name: "why visit travel style buttons" },
  { route: "/why-visit", selector: ".uh-whyvisit-moment-button", name: "why visit moment buttons" },
  { route: "/facts", selector: ".facts-redesign-philosophy-tab", name: "facts topic tabs" },
  { route: "/bhutan-tours", selector: ".uh-itinerary-redesign-filter-btn", name: "Bhutan tours duration filters" },
  { route: "/festival-tours", selector: ".uh-festival-library-redesign-filter-btn", name: "festival tours duration filters" },
  { route: "/optional-tours", selector: ".uh-addon-category-button", name: "optional tours category buttons" },
  { route: "/optional-tours", selector: ".uh-addon-experience-card", name: "optional tours add-on cards" },
  { route: "/festival-calendar", selector: ".festival-calendar-redesign-month-tab", name: "festival month tabs" },
] as const;

const activeRouteGroups = [
  { route: "/cultural-tours", selector: ".cultural-pro-route-option", name: "cultural tour route selectors" },
  { route: "/bhutan-tours", selector: ".cultural-pro-route-option", name: "Bhutan tour route selectors" },
  { route: "/festival-tours", selector: ".cultural-pro-route-option", name: "festival tour route selectors" },
  { route: "/land-entry-tours", selector: ".cultural-pro-route-option", name: "land-entry route selectors" },
  { route: "/cycling-tours", selector: ".cultural-pro-route-option", name: "cycling route selectors" },
] as const;

test.describe.configure({ mode: "serial" });

test("desktop header dropdown buttons expose working menus on every section", async ({ page }) => {
  await page.goto("/");

  for (const name of ["Adventures", "Bhutan Overview", "Travelling to Bhutan", "Company"]) {
    const trigger = page.getByRole("button", { name });

    await trigger.click();
    await expect(trigger, `${name} desktop nav should open`).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await expect(
      page.locator(".nav-item.open .dropdown-item").first(),
      `${name} desktop nav should show links`,
    ).toBeVisible();
  }
});

test("mobile header menu buttons and submenu links work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const mobileNavigation = page.locator("#mobile-navigation");

  await expect(mobileNavigation).toHaveAttribute("aria-hidden", "false");

  for (const name of ["Adventures", "Bhutan Overview", "Travelling to Bhutan", "Company"]) {
    const trigger = mobileNavigation.getByRole("button", { name });

    await trigger.click();
    await expect(trigger, `${name} mobile submenu should open`).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await expect(
      mobileNavigation.locator(".mobile-submenu.open a").first(),
      `${name} mobile submenu should expose links`,
    ).toBeVisible();
  }

  await mobileNavigation.getByRole("link", { name: "Contact Us" }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("stateful component button groups work on listing and information pages", async ({ page }) => {
  test.setTimeout(180_000);

  for (const group of pressedGroups) {
    await page.goto(group.route);
    await expect(page.locator("h1")).toBeVisible();
    await assertNoFrameworkOverlay(page, group.route);
    await clickEveryPressedButton(page, group.selector, group.name);
  }

  for (const group of activeRouteGroups) {
    await page.goto(group.route);
    await expect(page.locator("h1")).toBeVisible();
    await assertNoFrameworkOverlay(page, group.route);
    await clickEveryActiveRouteButton(page, group.selector, group.name);
  }
});

test("generated package detail page tabs work across all tour detail pages", async ({ page }) => {
  test.setTimeout(240_000);

  for (const route of detailRoutes) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await assertNoFrameworkOverlay(page, route);

    const tabs = page.getByRole("tab");
    await expect(tabs, `${route} should render detail tabs`).toHaveCount(4);

    for (let index = 0; index < 4; index += 1) {
      const tab = tabs.nth(index);

      await tab.click();
      await expect(tab, `${route} tab ${index + 1} should become selected`).toHaveAttribute(
        "aria-selected",
        "true",
      );
      await expect(page.locator(".uh-hb-detail-panel")).toBeVisible();
    }
  }
});

test("CTA-style links and public buttons resolve on all pages", async ({ page, request }) => {
  test.setTimeout(180_000);

  const routes = new Set([...staticRoutes, ...detailRoutes]);

  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await assertNoFrameworkOverlay(page, route);

    const links = await page.locator("a").evaluateAll((anchors) =>
      anchors
        .map((anchor) => ({
          href: anchor.getAttribute("href") || "",
          text: anchor.textContent?.replace(/\s+/g, " ").trim() || "",
        }))
        .filter((link) => link.href && !link.href.startsWith("#")),
    );

    for (const link of links) {
      if (link.href.startsWith("mailto:") || link.href.startsWith("tel:")) {
        expect(link.href, `${route} contact link should be concrete`).not.toMatch(/x{3,}|placeholder/i);
        continue;
      }

      if (link.href.includes("wa.me")) {
        expect(link.href, `${route} WhatsApp link should use wa.me`).toMatch(/^https:\/\/wa\.me\//);
        continue;
      }

      if (!link.href.startsWith("/")) continue;

      const target = link.href.split("#")[0];
      if (!target || target === route) continue;

      const response = await request.get(target);
      expect(response.ok(), `${route} link "${link.text || link.href}" should resolve`).toBe(true);
    }
  }
});

test("contact form controls and floating chat controls are usable", async ({ page }) => {
  await page.goto("/contact");

  await page.getByLabel("Full Name").fill("Functional Test Traveler");
  await page.getByLabel("Email Address").fill("traveler@example.com");
  await page.getByLabel("Travel Month").fill("October 2026");
  await page
    .getByLabel("What kind of Bhutan trip are you interested in?")
    .selectOption("cultural");
  await page.getByLabel("Message").fill("Please help plan a cultural Bhutan journey.");
  await expect(page.getByRole("button", { name: /submit inquiry/i })).toBeEnabled();

  await page.getByRole("button", { name: "Open Jarvis" }).click();
  await expect(page.getByLabel("Jarvis travel chat")).toBeVisible();
  await page.getByLabel("Ask Jarvis").fill("Do you offer cultural tours?");
  await expect(page.getByRole("button", { name: /send/i })).toBeEnabled();
  await page.getByRole("button", { name: /reset/i }).click();
  await expect(page.getByLabel("Ask Jarvis")).toHaveValue("");
  await page
    .getByRole("region", { name: "Jarvis travel chat" })
    .getByRole("button", { name: "Close Jarvis" })
    .click();
  await expect(page.getByLabel("Jarvis travel chat")).toHaveCount(0);
});

test("upcoming events package CTAs and footer buttons remain functional", async ({ page }) => {
  await page.goto("/upcoming-events");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  const viewPackages = page.getByRole("link", { name: /view packages/i });
  await viewPackages.click();
  await expect(page).toHaveURL(/#concert-packages$/);
  await expect(page.locator("#concert-packages")).toBeVisible();

  const bookingLinks = page.locator(
    ".upcoming-events-gold-btn, .upcoming-events-outline-btn, .upcoming-events-call-link, .upcoming-events-tier-card a, .upcoming-events-footer-cta",
  );
  const count = await bookingLinks.count();
  expect(count, "upcoming events should expose multiple booking CTAs").toBeGreaterThan(4);

  for (let index = 0; index < count; index += 1) {
    const href = await bookingLinks.nth(index).getAttribute("href");

    expect(href, `event CTA ${index + 1} should have a destination`).toBeTruthy();
    if (href !== "#concert-packages") {
      expect(href, `event CTA ${index + 1} should route to WhatsApp`).toMatch(
        /^https:\/\/wa\.me\//,
      );
    }
  }

  await expect(page.getByRole("link", { name: /terms & conditions/i })).toHaveAttribute(
    "href",
    "/terms",
  );
  await expect(page.getByRole("link", { name: /privacy policy/i })).toHaveAttribute(
    "href",
    "/privacy-policy",
  );
});

async function clickEveryPressedButton(page: Page, selector: string, name: string) {
  const buttons = page.locator(selector);
  const count = await buttons.count();

  expect(count, `${name} should have multiple buttons`).toBeGreaterThan(1);

  for (let index = 0; index < count; index += 1) {
    const button = buttons.nth(index);

    await button.scrollIntoViewIfNeeded();
    await button.click();
    await expect(button, `${name} item ${index + 1} should become pressed`).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await assertNoFrameworkOverlay(page, name);
  }
}

async function clickEveryActiveRouteButton(page: Page, selector: string, name: string) {
  const buttons = page.locator(selector);
  const count = await buttons.count();

  expect(count, `${name} should have multiple route buttons`).toBeGreaterThan(1);

  for (let index = 0; index < count; index += 1) {
    const button = buttons.nth(index);

    await button.scrollIntoViewIfNeeded();
    await button.click();
    await expect(button, `${name} item ${index + 1} should become active`).toHaveClass(
      /is-active/,
    );
    await expect(button, `${name} item ${index + 1} should expand`).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await assertNoFrameworkOverlay(page, name);
  }
}

async function assertNoFrameworkOverlay(page: Page, context: string) {
  await expect(
    page.locator("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay"),
    `${context} should not show a framework error overlay`,
  ).toHaveCount(0);
}
