import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const sourcePath = path.join(root, "app", "data", "placesToVisit.ts");
const source = fs.readFileSync(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;

const cjsModule = { exports: {} };
vm.runInNewContext(compiled, { module: cjsModule, exports: cjsModule.exports }, { filename: sourcePath });

const chapters = cjsModule.exports.destinationChapters ?? [];
const refs = [];
const missingCardImages = [];
const missingFiles = [];

for (const chapter of chapters) {
  if (chapter.heroImage) {
    refs.push({
      destination: chapter.name,
      title: `${chapter.name} hero`,
      image: chapter.heroImage,
    });
  }

  for (const attraction of chapter.attractions ?? []) {
    if (!attraction.image) {
      missingCardImages.push(`${chapter.name}: ${attraction.title}`);
      continue;
    }

    refs.push({
      destination: chapter.name,
      title: attraction.title,
      image: attraction.image,
    });
  }
}

for (const ref of refs) {
  if (!ref.image.startsWith("/")) {
    missingFiles.push(`${ref.destination}: ${ref.title} -> ${ref.image} (not root-relative)`);
    continue;
  }

  const localPath = path.join(root, "public", ref.image.slice(1));
  if (!fs.existsSync(localPath)) {
    missingFiles.push(`${ref.destination}: ${ref.title} -> ${ref.image}`);
  }
}

const imageCounts = new Map();
for (const ref of refs) {
  const items = imageCounts.get(ref.image) ?? [];
  items.push(`${ref.destination}: ${ref.title}`);
  imageCounts.set(ref.image, items);
}

const duplicates = [...imageCounts.entries()]
  .filter(([, items]) => items.length > 1)
  .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

console.log(`Checked ${chapters.length} destinations and ${refs.length} page image slots.`);

console.log("\nCards without images:");
if (missingCardImages.length === 0) {
  console.log("  none");
} else {
  for (const item of missingCardImages) console.log(`  ${item}`);
}

console.log("\nMissing or invalid files:");
if (missingFiles.length === 0) {
  console.log("  none");
} else {
  for (const item of missingFiles) console.log(`  ${item}`);
}

console.log("\nRepeated places-to-visit images:");
if (duplicates.length === 0) {
  console.log("  none");
} else {
  for (const [image, items] of duplicates) {
    console.log(`  ${items.length}x ${image}`);
    for (const item of items) console.log(`    - ${item}`);
  }
}
