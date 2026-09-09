import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const targets = [
  {
    route: "/",
    selector: ".uh-destination-option-content h3",
    texts: ["Thimphu", "Paro", "Haa", "Punakha", "Gangtey"],
  },
  {
    route: "/about-bhutan",
    selector: ".about-bhutan-overview-card h3",
    texts: ["Name & Identity", "Geography & Neighbours", "Capital & Districts", "People & Languages"],
  },
];

function parseRgb(value) {
  const match = value?.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;
  const parts = match[1].split(",").map((part) => Number.parseFloat(part.trim()));
  return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
}

function luminance({ r, g, b }) {
  const channel = [r, g, b].map((value) => {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channel[0] + 0.7152 * channel[1] + 0.0722 * channel[2];
}

function contrast(foreground, background) {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

const browser = await chromium.launch({ headless: true });
const results = [];

for (const viewport of [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "mobile", width: 390, height: 1100 },
]) {
  const page = await browser.newPage({ viewport });

  for (const target of targets) {
    await page.goto(`${baseUrl}${target.route}`, { waitUntil: "networkidle" });
    const readings = await page.locator(target.selector).evaluateAll((nodes, expectedTexts) => {
      function effectiveBackground(node) {
        let current = node;
        while (current && current.nodeType === Node.ELEMENT_NODE) {
          const styles = getComputedStyle(current);
          const background = styles.backgroundColor;
          if (background && !background.startsWith("rgba(0, 0, 0, 0)") && background !== "transparent") {
            return background;
          }
          current = current.parentElement;
        }
        return getComputedStyle(document.body).backgroundColor;
      }

      return nodes
        .map((node) => ({
          text: node.textContent?.trim() ?? "",
          color: getComputedStyle(node).color,
          background: effectiveBackground(node),
        }))
        .filter((row) => expectedTexts.includes(row.text));
    }, target.texts);

    for (const row of readings) {
      const fg = parseRgb(row.color);
      const bg = parseRgb(row.background);
      results.push({
        viewport: viewport.name,
        route: target.route,
        text: row.text,
        color: row.color,
        background: row.background,
        contrast: fg && bg ? Number(contrast(fg, bg).toFixed(2)) : null,
      });
    }
  }

  await page.close();
}

await browser.close();

console.log(JSON.stringify(results, null, 2));
