import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL || "http://localhost:3001";
const widths = [1440, 1024, 768, 430, 390];
const destinations = ["Thimphu", "Paro", "Haa", "Punakha", "Gangtey"];
const outDir = path.join(".tmp", "strict-visual-audit", "destinations-journeys");

const parseRgb = (value) => {
  if (value.startsWith("#")) {
    const hex = value.slice(1);
    if (hex.length === 6 || hex.length === 8) {
      return [
        Number.parseInt(hex.slice(0, 2), 16),
        Number.parseInt(hex.slice(2, 4), 16),
        Number.parseInt(hex.slice(4, 6), 16),
        hex.length === 8 ? Number.parseInt(hex.slice(6, 8), 16) / 255 : 1,
      ];
    }
  }

  const match = value.match(/rgba?\(([^)]+)\)/);
  if (!match) return null;
  const channels = match[1].split(",").map((part) => Number.parseFloat(part.trim()));
  return [channels[0], channels[1], channels[2], channels[3] ?? 1];
};

const luminance = (rgb) => {
  const [r, g, b] = rgb.slice(0, 3).map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrastRatio = (a, b) => {
  const l1 = luminance(a);
  const l2 = luminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

const sameColor = (a, b) => {
  const rgbA = parseRgb(a);
  const rgbB = parseRgb(b);
  if (!rgbA || !rgbB) return false;
  return rgbA.slice(0, 3).every((value, index) => Math.abs(value - rgbB[index]) < 1);
};

const alphaOf = (value) => parseRgb(value)?.[3] ?? 1;

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const results = [];

try {
  for (const width of widths) {
    const height = width <= 430 ? 844 : width <= 768 ? 1024 : 980;
    const page = await browser.newPage({ viewport: { width, height } });
    const issues = [];

    await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForSelector(".uh-destination-layout", { timeout: 15000 });
    await page.locator(".uh-destination-layout").scrollIntoViewIfNeeded();
    await page.waitForTimeout(250);

    const screenshotPath = path.join(outDir, `homepage-${width}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    const metrics = await page.evaluate((expectedDestinations) => {
      const rect = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const box = el.getBoundingClientRect();
        return {
          top: box.top,
          right: box.right,
          bottom: box.bottom,
          left: box.left,
          width: box.width,
          height: box.height,
        };
      };

      const styleValue = (el, prop) => getComputedStyle(el).getPropertyValue(prop).trim();
      const root = getComputedStyle(document.documentElement);
      const optionEls = Array.from(document.querySelectorAll(".uh-destination-option"));
      const previewHeading = document.querySelector(".uh-destination-preview-content h3");
      const previewBody = document.querySelector(".uh-destination-preview-content p");
      const previewMeta = document.querySelector(".uh-destination-preview-meta");
      const previewButton = document.querySelector(".uh-journeys-link-btn");

      return {
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        vars: {
          textPrimary: root.getPropertyValue("--color-text-primary").trim(),
          textSecondary: root.getPropertyValue("--color-text-secondary").trim(),
          accent: root.getPropertyValue("--color-accent").trim(),
          bgCard: root.getPropertyValue("--color-bg-card").trim(),
          border: root.getPropertyValue("--color-border").trim(),
          borderStrong: root.getPropertyValue("--color-border-strong").trim(),
        },
        layout: rect(".uh-destination-layout"),
        preview: {
          heading: previewHeading ? styleValue(previewHeading, "color") : null,
          body: previewBody ? styleValue(previewBody, "color") : null,
          metaBg: previewMeta ? styleValue(previewMeta, "background-color") : null,
          metaColor: previewMeta ? styleValue(previewMeta, "color") : null,
          buttonBg: previewButton ? styleValue(previewButton, "background-color") : null,
          buttonRadius: previewButton ? styleValue(previewButton, "border-radius") : null,
        },
        options: optionEls.map((option, index) => {
          const title = option.querySelector("h3");
          const number = option.querySelector("span");
          const thumb = option.querySelector(".uh-destination-option-thumb");
          const img = option.querySelector("img");
          const optionBox = option.getBoundingClientRect();
          const thumbBox = thumb.getBoundingClientRect();
          const titleBox = title.getBoundingClientRect();
          const numberBox = number.getBoundingClientRect();
          return {
            index,
            label: title?.textContent?.trim(),
            expected: expectedDestinations[index],
            background: styleValue(option, "background-color"),
            borderColor: styleValue(option, "border-color"),
            display: styleValue(option, "display"),
            alignItems: styleValue(option, "align-items"),
            minHeight: styleValue(option, "min-height"),
            titleColor: title ? styleValue(title, "color") : null,
            titleFontSize: title ? styleValue(title, "font-size") : null,
            numberColor: number ? styleValue(number, "color") : null,
            thumbnailObjectFit: img ? styleValue(img, "object-fit") : null,
            thumbnailObjectPosition: img ? styleValue(img, "object-position") : null,
            thumbnailRadius: thumb ? styleValue(thumb, "border-radius") : null,
            rect: {
              top: optionBox.top,
              right: optionBox.right,
              bottom: optionBox.bottom,
              left: optionBox.left,
              width: optionBox.width,
              height: optionBox.height,
            },
            thumbRect: {
              top: thumbBox.top,
              bottom: thumbBox.bottom,
              height: thumbBox.height,
            },
            numberRect: {
              top: numberBox.top,
              bottom: numberBox.bottom,
              height: numberBox.height,
            },
            titleRect: {
              top: titleBox.top,
              bottom: titleBox.bottom,
              height: titleBox.height,
            },
            pressed: option.getAttribute("aria-pressed"),
          };
        }),
      };
    }, destinations);

    if (metrics.scrollWidth > metrics.innerWidth + 1) {
      issues.push(`horizontal scroll: ${metrics.scrollWidth} > ${metrics.innerWidth}`);
    }

    const bgRgb = parseRgb(metrics.options[0]?.background || "");
    for (const option of metrics.options) {
      if (option.label !== option.expected) {
        issues.push(`destination order changed at ${option.index}: ${option.label}`);
      }
      if (!sameColor(option.titleColor, metrics.vars.textPrimary)) {
        issues.push(`${option.label} title color is ${option.titleColor}, expected ${metrics.vars.textPrimary}`);
      }
      if (!sameColor(option.numberColor, metrics.vars.accent)) {
        issues.push(`${option.label} number color is ${option.numberColor}, expected ${metrics.vars.accent}`);
      }
      if (option.thumbnailObjectFit !== "cover") {
        issues.push(`${option.label} thumbnail object-fit is ${option.thumbnailObjectFit}`);
      }
      if (option.alignItems !== "center") {
        issues.push(`${option.label} row align-items is ${option.alignItems}`);
      }
      if (bgRgb && option.titleColor) {
        const ratio = contrastRatio(parseRgb(option.titleColor), bgRgb);
        if (ratio < 4.5) {
          issues.push(`${option.label} title contrast is ${ratio.toFixed(2)}`);
        }
      }
      if (option.pressed === "true" && alphaOf(option.borderColor) <= alphaOf(metrics.vars.border) + 0.05) {
        issues.push(`${option.label} selected border did not strengthen: ${option.borderColor}`);
      }
      const titleCenter = (option.titleRect.top + option.titleRect.bottom) / 2;
      const rowCenter = (option.rect.top + option.rect.bottom) / 2;
      if (Math.abs(titleCenter - rowCenter) > option.rect.height * 0.26) {
        issues.push(`${option.label} title is not vertically centered`);
      }
    }

    const clickedPreviews = [];
    for (const name of destinations) {
      await page.getByRole("button", { name: new RegExp(name) }).click();
      await page.waitForTimeout(100);
      const previewTitle = await page.locator(".uh-destination-preview-content h3").innerText();
      clickedPreviews.push(previewTitle);
      if (previewTitle.trim() !== name) {
        issues.push(`clicking ${name} preview showed ${previewTitle}`);
      }
    }

    await page.locator(".uh-destination-option-2").hover();
    await page.waitForTimeout(150);
    const hover = await page.evaluate(() => {
      const option = document.querySelector(".uh-destination-option-2");
      if (!option) return null;
      const h3 = option.querySelector("h3");
      return {
        borderColor: getComputedStyle(option).borderColor,
        background: getComputedStyle(option).backgroundColor,
        titleColor: h3 ? getComputedStyle(h3).color : null,
      };
    });

    if (hover && !sameColor(hover.titleColor, metrics.vars.textPrimary)) {
      issues.push(`hover title color is ${hover.titleColor}`);
    }
    if (hover && alphaOf(hover.borderColor) <= alphaOf(metrics.vars.border) + 0.05) {
      issues.push(`hover border did not strengthen: ${hover.borderColor}`);
    }

    results.push({
      width,
      height,
      issues,
      metrics,
      clickedPreviews,
      hover,
      screenshotPath,
    });

    await page.close();
  }
} finally {
  await browser.close();
}

const failures = results.filter((result) => result.issues.length > 0);
const report = {
  reportPath: path.join(outDir, "layout-report.json"),
  failures,
  results,
};

await fs.writeFile(report.reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

if (failures.length > 0) {
  process.exitCode = 1;
}
