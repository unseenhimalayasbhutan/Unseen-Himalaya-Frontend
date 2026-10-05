import { expect, test } from "@playwright/test";
import { siteConfig } from "../../app/siteConfig";

const publicRoutes = [
  "/",
  "/about-bhutan",
  "/about-us",
  "/best-time",
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
  "/seasons",
  "/sdf",
  "/terms",
  "/upcoming-events",
  "/why-visit",
];

const redirectRoutes = [
  { from: "/bhutan-tours", to: "/cultural-tours" },
] as const;

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
    await expect(page.locator("footer.site-footer, footer.upcoming-events-poster-footer")).toHaveCount(1);
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

test("all public routes keep the shared header visually consistent", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });

  const snapshots: Array<{
    route: string;
    styles: Record<string, string>;
  }> = [];

  for (const route of publicRoutes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("header.site-header")).toHaveCount(1);

    snapshots.push({
      route,
      styles: await page.locator("header.site-header").evaluate(() => {
        const read = (selector: string) => {
          const element = document.querySelector<HTMLElement>(selector);
          if (!element) return {};

          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();

          return {
            backgroundColor: style.backgroundColor,
            color: style.color,
            display: style.display,
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            height: Math.round(rect.height).toString(),
            letterSpacing: style.letterSpacing,
            lineHeight: style.lineHeight,
            minHeight: style.minHeight,
            padding: style.padding,
            textTransform: style.textTransform,
            width: Math.round(rect.width).toString(),
          };
        };

        const navText = read(".dropdown-btn, .nav-link");
        delete navText.width;

        return {
          ...Object.fromEntries(
            Object.entries(read(".site-header")).map(([key, value]) => [
              `header.${key}`,
              value,
            ]),
          ),
          ...Object.fromEntries(
            Object.entries(read(".top-bar")).map(([key, value]) => [
              `topBar.${key}`,
              value,
            ]),
          ),
          ...Object.fromEntries(
            Object.entries(read(".navbar")).map(([key, value]) => [
              `navbar.${key}`,
              value,
            ]),
          ),
          ...Object.fromEntries(
            Object.entries(navText).map(([key, value]) => [
              `navText.${key}`,
              value,
            ]),
          ),
          ...Object.fromEntries(
            Object.entries(read(".logo-image")).map(([key, value]) => [
              `logo.${key}`,
              value,
            ]),
          ),
        };
      }),
    });
  }

  const [baseline] = snapshots;
  for (const snapshot of snapshots.slice(1)) {
    expect(snapshot.styles, `${snapshot.route} header should match ${baseline.route}`).toEqual(
      baseline.styles,
    );
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
    expect(item.headingFont).toMatch(/Cormorant/i);
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

test("legacy public routes redirect to canonical destinations", async ({ page }) => {
  for (const route of redirectRoutes) {
    await page.goto(route.from, { waitUntil: "domcontentloaded" });

    await expect(page, `${route.from} should redirect to ${route.to}`).toHaveURL(
      new RegExp(`${route.to}$`),
    );
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
