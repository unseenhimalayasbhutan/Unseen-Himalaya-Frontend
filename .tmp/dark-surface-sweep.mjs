import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL || "http://localhost:3009";
const outDir = path.join(".tmp", "dark-surface-sweep");

const allRoutes = [
  "/",
  "/about-bhutan",
  "/facts",
  "/gnh-philosophies",
  "/why-visit",
  "/places-to-visit",
  "/documents",
  "/legal-documents",
  "/currency",
  "/best-time",
  "/festival-calendar",
  "/sdf",
  "/faq",
  "/about-us",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/upcoming-events",
  "/seasons",
  "/cultural-tours",
  "/festival-tours",
  "/bhutan-tours",
  "/cycling-tours",
  "/land-entry-tours",
  "/optional-tours",
  "/bhutan-trekkings",
  "/cultural-tours/3-day-paro-thimphu-paro",
  "/festival-tours/4-day-dechenphu-tshechu-short-festival-tour",
  "/bhutan-tours/3-day-paro-thimphu-paro",
  "/cycling-tours/3-day-bhutan-cycling-tour",
  "/land-entry-tours/4-day-paro-focus",
];

const routes = process.env.ROUTES
  ? process.env.ROUTES.split(",").map((route) => route.trim()).filter(Boolean)
  : allRoutes;

const viewports = [
  { name: "desktop", width: 1440, height: 950 },
  { name: "mobile", width: 390, height: 844 },
];

const hoverRoutes = new Set([
  "/",
  "/contact",
  "/faq",
  "/cultural-tours",
  "/festival-tours",
  "/bhutan-tours",
  "/optional-tours",
  "/cultural-tours/3-day-paro-thimphu-paro",
]);

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const results = [];

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });

    for (const route of routes) {
      const url = new URL(route, baseUrl).toString();
      const routeResult = {
        route,
        viewport: viewport.name,
        status: null,
        title: "",
        issues: [],
        hoverIssues: [],
        formIssues: [],
        consoleErrors: [],
      };

      page.on("console", (msg) => {
        if (msg.type() === "error") routeResult.consoleErrors.push(msg.text());
      });

      try {
        const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 18000 });
        routeResult.status = response?.status() ?? null;
        routeResult.title = await page.title();
        await page.waitForTimeout(500);

        console.error(`[dark-sweep] ${viewport.name} ${route}`);

        const routeIssues = await page.evaluate(() => {
          const parseColor = (value) => {
            if (!value || value === "transparent") return [0, 0, 0, 0];
            const rgba = value.match(/rgba?\(([^)]+)\)/);
            if (!rgba) return [0, 0, 0, 0];
            const parts = rgba[1].split(",").map((part) => Number.parseFloat(part.trim()));
            return [parts[0], parts[1], parts[2], parts[3] ?? 1];
          };

          const blend = (fg, bg) => {
            const alpha = fg[3] ?? 1;
            return [
              fg[0] * alpha + bg[0] * (1 - alpha),
              fg[1] * alpha + bg[1] * (1 - alpha),
              fg[2] * alpha + bg[2] * (1 - alpha),
              1,
            ];
          };

          const luminance = (rgb) => {
            const [r, g, b] = rgb.slice(0, 3).map((channel) => {
              const value = channel / 255;
              return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
            });
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
          };

          const contrast = (a, b) => {
            const l1 = luminance(a);
            const l2 = luminance(b);
            return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
          };

          const colorString = (rgb) =>
            `rgb(${Math.round(rgb[0])}, ${Math.round(rgb[1])}, ${Math.round(rgb[2])})`;

          const isVisible = (el) => {
            const style = getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            return (
              style.display !== "none" &&
              style.visibility !== "hidden" &&
              Number.parseFloat(style.opacity || "1") > 0.02 &&
              rect.width > 0 &&
              rect.height > 0
            );
          };

          const elementPath = (el) => {
            const parts = [];
            let node = el;
            while (node && node.nodeType === Node.ELEMENT_NODE && parts.length < 5) {
              let part = node.tagName.toLowerCase();
              if (node.id) part += `#${node.id}`;
              const classes = Array.from(node.classList || []).slice(0, 3);
              if (classes.length) part += `.${classes.join(".")}`;
              parts.unshift(part);
              node = node.parentElement;
            }
            return parts.join(" > ");
          };

          const effectiveBackground = (el) => {
            let bg = [13, 13, 13, 1];
            const chain = [];
            let node = el;
            while (node && node.nodeType === Node.ELEMENT_NODE) {
              chain.push(node);
              node = node.parentElement;
            }
            for (const item of chain.reverse()) {
              const style = getComputedStyle(item);
              const color = parseColor(style.backgroundColor);
              if ((color[3] ?? 1) > 0) bg = blend(color, bg);
            }
            return bg;
          };

          const hasLightSurface = (el) => {
            let node = el;
            while (node && node.nodeType === Node.ELEMENT_NODE) {
              const bg = parseColor(getComputedStyle(node).backgroundColor);
              if ((bg[3] ?? 1) > 0 && luminance(blend(bg, [13, 13, 13, 1])) > 0.35) return true;
              node = node.parentElement;
            }
            return false;
          };

          const candidates = Array.from(
            document.querySelectorAll(
              [
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "p",
                "span",
                "small",
                "strong",
                "a",
                "button",
                "label",
                "li",
                "dt",
                "dd",
                "summary",
                "input",
                "textarea",
                "select",
                "svg",
              ].join(","),
            ),
          );

          const issues = [];
          const formIssues = [];
          const seen = new Set();

          for (const el of candidates) {
            if (!isVisible(el)) continue;
            if (el.closest('[aria-hidden="true"], .sr-only')) continue;

            const style = getComputedStyle(el);
            const tag = el.tagName.toLowerCase();
            const text =
              tag === "input" || tag === "textarea" || tag === "select"
                ? el.getAttribute("placeholder") || el.getAttribute("aria-label") || el.value || tag
                : (el.innerText || el.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
            if (tag !== "svg" && !text) continue;
            if (text.length > 220) continue;

            const textColor = parseColor(style.color);
            const bg = effectiveBackground(el);
            const ratio = contrast(textColor, bg);
            const bgLum = luminance(bg);
            const textLum = luminance(textColor);
            const rect = el.getBoundingClientRect();
            const key = `${tag}|${text}|${Math.round(rect.top)}|${Math.round(rect.left)}`;
            if (seen.has(key)) continue;
            seen.add(key);

            if (bgLum < 0.18 && textLum < 0.16 && ratio < 4.5 && !hasLightSurface(el)) {
              issues.push({
                kind: "dark-text-on-dark",
                tag,
                text: text || `${tag} currentColor`,
                classes: el.className?.toString?.() || "",
                path: elementPath(el),
                color: style.color,
                background: colorString(bg),
                contrast: Number(ratio.toFixed(2)),
                top: Math.round(rect.top),
              });
            }

            if (tag === "a" && ["rgb(0, 0, 238)", "rgb(85, 26, 139)"].includes(style.color)) {
              issues.push({
                kind: "browser-default-link-color",
                tag,
                text,
                classes: el.className?.toString?.() || "",
                path: elementPath(el),
                color: style.color,
                background: colorString(bg),
                contrast: Number(ratio.toFixed(2)),
                top: Math.round(rect.top),
              });
            }

            if (tag === "svg") {
              const stroke = style.stroke;
              const fill = style.fill;
              if ([style.color, stroke, fill].some((value) => /rgb\(0, 0, 0\)|rgb\(13, 13, 13\)|rgb\(21, 21, 21\)/.test(value))) {
                issues.push({
                  kind: "dark-icon-on-dark",
                  tag,
                  text: el.getAttribute("aria-label") || "svg",
                  classes: el.className?.toString?.() || "",
                  path: elementPath(el),
                  color: style.color,
                  stroke,
                  fill,
                  background: colorString(bg),
                  contrast: Number(contrast(textColor, bg).toFixed(2)),
                  top: Math.round(rect.top),
                });
              }
            }

            if (tag === "input" || tag === "textarea") {
              const placeholder = getComputedStyle(el, "::placeholder").color;
              const placeholderColor = parseColor(placeholder);
              const placeholderRatio = contrast(placeholderColor, bg);
              if (placeholderRatio < 3.5 && bgLum < 0.24) {
                formIssues.push({
                  kind: "low-placeholder-contrast",
                  tag,
                  text,
                  classes: el.className?.toString?.() || "",
                  path: elementPath(el),
                  placeholder,
                  background: colorString(bg),
                  contrast: Number(placeholderRatio.toFixed(2)),
                });
              }
            }

            if ((tag === "input" || tag === "textarea" || tag === "select") && bgLum < 0.18 && ratio < 4.5) {
              formIssues.push({
                kind: "low-control-text-contrast",
                tag,
                text,
                classes: el.className?.toString?.() || "",
                path: elementPath(el),
                color: style.color,
                background: colorString(bg),
                contrast: Number(ratio.toFixed(2)),
              });
            }
          }

          return { issues, formIssues };
        });

        routeResult.issues.push(...routeIssues.issues.slice(0, 80));
        routeResult.formIssues.push(...routeIssues.formIssues.slice(0, 40));

        const hoverIssues = [];
        if (hoverRoutes.has(route)) {
          const hoverSelector = [
            ".nav-link",
            ".dropdown-btn",
            ".mobile-nav-link",
            ".mobile-dropdown-btn",
            ".tour-pro-btn-primary",
            ".tour-pro-btn-secondary",
            ".uh-journeys-link-btn",
            ".uh-journeys-btn-primary",
            ".uh-journeys-btn-secondary",
            ".uh-destination-option",
            ".uh-package-card",
            ".uh-package-preview-btn",
            ".contact-pro-submit-btn",
            ".faq-item",
            ".faq-question",
            ".ai-chatbot-toggle",
            ".floating-whatsapp-cta",
            ".cultural-pro-route-option",
            ".uh-festival-library-redesign-route-card",
            ".uh-addon-category-button",
            ".uh-addon-experience-card",
          ].join(",");

          const hoverCount = await page.locator(hoverSelector).count();

          for (let i = 0; i < Math.min(hoverCount, 14); i += 1) {
            const locator = page.locator(hoverSelector).nth(i);
          try {
            await locator.hover({ timeout: 1500 });
            await page.waitForTimeout(60);
            const hover = await locator.evaluate((el) => {
              const parseColor = (value) => {
                if (!value || value === "transparent") return [0, 0, 0, 0];
                const rgba = value.match(/rgba?\(([^)]+)\)/);
                if (!rgba) return [0, 0, 0, 0];
                const parts = rgba[1].split(",").map((part) => Number.parseFloat(part.trim()));
                return [parts[0], parts[1], parts[2], parts[3] ?? 1];
              };
              const luminance = (rgb) => {
                const [r, g, b] = rgb.slice(0, 3).map((channel) => {
                  const value = channel / 255;
                  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
                });
                return 0.2126 * r + 0.7152 * g + 0.0722 * b;
              };
              const contrast = (a, b) => {
                const l1 = luminance(a);
                const l2 = luminance(b);
                return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
              };
              const blend = (fg, bg) => {
                const alpha = fg[3] ?? 1;
                return [
                  fg[0] * alpha + bg[0] * (1 - alpha),
                  fg[1] * alpha + bg[1] * (1 - alpha),
                  fg[2] * alpha + bg[2] * (1 - alpha),
                  1,
                ];
              };
              const background = (() => {
                let bg = [13, 13, 13, 1];
                const chain = [];
                let node = el;
                while (node && node.nodeType === Node.ELEMENT_NODE) {
                  chain.push(node);
                  node = node.parentElement;
                }
                for (const item of chain.reverse()) {
                  const color = parseColor(getComputedStyle(item).backgroundColor);
                  if ((color[3] ?? 1) > 0) bg = blend(color, bg);
                }
                return bg;
              })();
              const style = getComputedStyle(el);
              const color = parseColor(style.color);
              const ratio = contrast(color, background);
              return {
                text: (el.innerText || el.getAttribute("aria-label") || el.getAttribute("title") || el.tagName)
                  .replace(/\s+/g, " ")
                  .trim()
                  .slice(0, 120),
                color: style.color,
                background: `rgb(${Math.round(background[0])}, ${Math.round(background[1])}, ${Math.round(background[2])})`,
                contrast: Number(ratio.toFixed(2)),
                darkText: luminance(color) < 0.16,
                darkBg: luminance(background) < 0.18,
              };
            });
            if (hover.darkText && hover.darkBg && hover.contrast < 4.5) {
              hoverIssues.push({ kind: "hover-dark-text-on-dark", ...hover });
            }
          } catch {
            // Some targets can detach during responsive menus.
          }
          }
        }

        routeResult.hoverIssues.push(...hoverIssues);
      } catch (error) {
        routeResult.issues.push({ kind: "route-load-error", message: error.message });
      }

      results.push(routeResult);
    }

    await page.close();
  }
} finally {
  await browser.close();
}

const failures = results.flatMap((result) =>
  [...result.issues, ...result.hoverIssues, ...result.formIssues].map((issue) => ({
    route: result.route,
    viewport: result.viewport,
    ...issue,
  })),
);

const report = { baseUrl, routes, viewports, failures, results };
const reportPath = path.join(outDir, "report.json");
await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ reportPath, failureCount: failures.length, failures: failures.slice(0, 180) }, null, 2));
