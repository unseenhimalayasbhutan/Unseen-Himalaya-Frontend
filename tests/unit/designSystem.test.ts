import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

describe("repository design system", () => {
  const designSystem = fs.readFileSync(
    path.join(root, "app", "design-system.css"),
    "utf8",
  );
  const layout = fs.readFileSync(path.join(root, "app", "layout.tsx"), "utf8");

  it("defines the required semantic color and typography tokens", () => {
    [
      "--color-bg-page",
      "--color-bg-section",
      "--color-bg-elevated",
      "--color-bg-card",
      "--color-text-primary",
      "--color-text-secondary",
      "--color-accent",
      "--color-border",
      "--font-display",
      "--font-body",
      "--font-script",
      "--section-padding-y",
      "--container-main",
    ].forEach((token) => {
      expect(designSystem).toContain(token);
    });
  });

  it("loads the design-system layer after legacy styles", () => {
    const imports = [...layout.matchAll(/import "\.\/([^"]+\.css)";/g)].map(
      (match) => match[1],
    );

    expect(imports[imports.length - 1]).toBe("design-system.css");
  });

  it("keeps only the approved public font families in the root layout", () => {
    expect(layout).toContain("Allura");
    expect(layout).toContain("Cormorant+Garamond");
    expect(layout).toContain("Montserrat");
    expect(layout).not.toContain("Poppins");
    expect(layout).not.toContain("Playfair+Display");
    expect(layout).not.toContain("Josefin+Sans");
  });
});
