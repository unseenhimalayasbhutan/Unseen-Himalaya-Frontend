import { expect, test } from "@playwright/test";
import { siteConfig } from "../../app/siteConfig";

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
  "/documents",
  "/facts",
  "/faq",
  "/festival-calendar",
  "/festival-tours",
  "/gnh-philosophies",
  "/legal-documents",
  "/optional-tours",
  "/privacy-policy",
  "/seasons",
  "/terms",
  "/why-visit",
];

const hydrationPattern =
  /hydration|server rendered HTML|Hydration failed|Text content does not match/i;

test("all public routes hydrate without React markup mismatches", async ({
  page,
}, testInfo) => {
  testInfo.setTimeout(120_000);
  const hydrationMessages: string[] = [];

  page.on("console", (message) => {
    const text = message.text();

    if (hydrationPattern.test(text)) {
      hydrationMessages.push(text);
    }
  });
  page.on("pageerror", (error) => {
    if (hydrationPattern.test(error.message)) {
      hydrationMessages.push(error.message);
    }
  });

  for (const route of publicRoutes) {
    const before = hydrationMessages.length;

    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("h1")).toBeVisible();
    await page.waitForTimeout(250);

    expect(
      hydrationMessages.slice(before),
      `${route} should hydrate without React mismatch errors`,
    ).toEqual([]);
  }

  expect(hydrationMessages).toEqual([]);
});

test("all public routes render the shared shell without horizontal overflow", async ({
  page,
}) => {
  for (const route of publicRoutes) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });

    expect(response?.ok(), `${route} should return a successful response`).toBe(
      true,
    );
    await expect(page.locator("header.site-header")).toHaveCount(1);
    await expect(page.locator("footer.site-footer")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveCount(1);

    const layout = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(
      layout.scrollWidth,
      `${route} should not overflow horizontally`,
    ).toBeLessThanOrEqual(layout.clientWidth + 1);
  }
});

test("public contact links are consistent and contain no placeholders", async ({
  page,
}) => {
  await page.goto("/contact");

  const contactLinks = await page
    .locator('a[href^="mailto:"], a[href^="tel:"], a[href*="wa.me"]')
    .evaluateAll((links) => links.map((link) => link.getAttribute("href") || ""));

  expect(contactLinks.length).toBeGreaterThan(3);
  expect(contactLinks.join(" ")).not.toMatch(
    /x{3,}|17123456|hello@unseenbhutan|info@unseenhimalayas/i,
  );
  expect(contactLinks).toContain(siteConfig.contact.emailHref);
  expect(contactLinks).toContain(siteConfig.contact.phoneHref);
  expect(contactLinks).toContain(siteConfig.contact.whatsappHref);
});

test("representative pages share the same typography system", async ({
  page,
}) => {
  const routes = ["/about-bhutan", "/currency", "/terms"];
  const typography = [];

  for (const route of routes) {
    await page.goto(route);
    typography.push(
      await page.locator("h1").evaluate((heading) => ({
        bodyFont: getComputedStyle(document.body).fontFamily,
        headingFont: getComputedStyle(heading).fontFamily,
      })),
    );
  }

  expect(new Set(typography.map((item) => item.bodyFont)).size).toBe(1);
  for (const item of typography) {
    expect(item.headingFont).toMatch(/Playfair|Cormorant/i);
  }
});

test("every public route has unique on-page SEO metadata", async ({ page }) => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();

  for (const route of publicRoutes) {
    await page.goto(route);

    const title = await page.title();
    const description =
      (await page.locator('meta[name="description"]').getAttribute("content")) ||
      "";
    const canonical =
      (await page.locator('link[rel="canonical"]').getAttribute("href")) || "";

    expect(title, `${route} needs a useful title`).toContain("Unseen Himalayas");
    expect(description.length, `${route} needs a useful description`).toBeGreaterThan(
      70,
    );
    expect(
      new URL(canonical).toString(),
      `${route} needs a canonical URL`,
    ).toBe(new URL(route, `${siteConfig.url}/`).toString());
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(1);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveCount(1);
    await expect(page.locator('script[type="application/ld+json"]')).not.toHaveCount(
      0,
    );

    expect(titles.has(title), `${route} title should be unique`).toBe(false);
    expect(
      descriptions.has(description),
      `${route} description should be unique`,
    ).toBe(false);
    titles.add(title);
    descriptions.add(description);
  }
});

test("all internal page links resolve successfully", async ({ page, request }) => {
  const internalLinks = new Set<string>();

  for (const route of publicRoutes) {
    await page.goto(route);
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) =>
      links
        .map((link) => link.getAttribute("href") || "")
        .filter((href) => href && !href.startsWith("/#")),
    );

    hrefs.forEach((href) => internalLinks.add(href.split("#")[0]));
  }

  for (const href of internalLinks) {
    const response = await request.get(href);
    expect(response.ok(), `${href} should resolve successfully`).toBe(true);
  }
});
