import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scannedRoots = ["app", "next.config.ts"];
const ignoredDirectories = new Set(["node_modules", ".next", ".git"]);
const sourceExtensions = /\.(?:tsx?|css|json)$/i;
const imageExtensions = /\.(?:jpg|jpeg|png|webp|avif|gif|svg)(?:\?[^"')\s]+)?$/i;

const files = [];

function walk(entry) {
  const fullPath = path.join(root, entry);
  if (!fs.existsSync(fullPath)) return;
  const stat = fs.statSync(fullPath);

  if (stat.isDirectory()) {
    for (const child of fs.readdirSync(fullPath, { withFileTypes: true })) {
      if (child.isDirectory() && ignoredDirectories.has(child.name)) continue;
      walk(path.join(entry, child.name));
    }
    return;
  }

  if (sourceExtensions.test(entry)) {
    files.push(entry);
  }
}

for (const entry of scannedRoots) {
  walk(entry);
}

const refs = [];
const seenRefs = new Set();
const stringLiteralPattern = /["'`]([^"'`]+?\.(?:jpg|jpeg|png|webp|avif|gif|svg)(?:\?[^"'`]*)?)["'`]/gi;
const cssUrlPattern = /url\(["']?([^"')]+?\.(?:jpg|jpeg|png|webp|avif|gif|svg)(?:\?[^"')]+)?)["']?\)/gi;

function addReference(file, source, matchIndex, ref) {
  if (!ref || /^https?:\/\//i.test(ref) || ref.startsWith("data:")) return;
  if (ref.includes("${")) return;
  const line = source.slice(0, matchIndex).split(/\r?\n/).length;
  const key = `${file}:${line}:${ref}`;
  if (seenRefs.has(key)) return;
  seenRefs.add(key);
  refs.push({ file, line, ref });
}

for (const file of files) {
  const source = fs.readFileSync(path.join(root, file), "utf8");

  for (const match of source.matchAll(stringLiteralPattern)) {
    addReference(file, source, match.index ?? 0, match[1]);
  }

  for (const match of source.matchAll(cssUrlPattern)) {
    addReference(file, source, match.index ?? 0, match[1]);
  }
}

const publicRoot = path.join(root, "public");
const missing = [];
const nonRoot = [];
const counts = new Map();

for (const refInfo of refs) {
  const cleanRef = refInfo.ref.split("?")[0];
  if (!imageExtensions.test(cleanRef)) continue;

  if (!cleanRef.startsWith("/")) {
    nonRoot.push(refInfo);
  }

  const publicRelative = cleanRef.startsWith("/") ? cleanRef.slice(1) : cleanRef;
  const publicPath = path.join(publicRoot, publicRelative);

  if (!fs.existsSync(publicPath)) {
    missing.push(refInfo);
  }

  counts.set(cleanRef, (counts.get(cleanRef) ?? 0) + 1);
}

const duplicates = [...counts.entries()]
  .filter(([, count]) => count >= 3)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
const perFileDuplicates = [];
const refsByFile = new Map();

for (const item of refs) {
  const cleanRef = item.ref.split("?")[0];
  const fileRefs = refsByFile.get(item.file) ?? new Map();
  const locations = fileRefs.get(cleanRef) ?? [];
  locations.push(item.line);
  fileRefs.set(cleanRef, locations);
  refsByFile.set(item.file, fileRefs);
}

for (const [file, fileRefs] of refsByFile) {
  for (const [ref, lines] of fileRefs) {
    if (lines.length > 1) {
      perFileDuplicates.push({ file, ref, lines });
    }
  }
}

perFileDuplicates.sort(
  (a, b) =>
    b.lines.length - a.lines.length ||
    a.file.localeCompare(b.file) ||
    a.ref.localeCompare(b.ref),
);

console.log(`Scanned ${files.length} source files.`);
console.log(`Found ${refs.length} local image references.`);

console.log("\nMissing files:");
if (missing.length === 0) {
  console.log("  none");
} else {
  for (const item of missing) {
    console.log(`  ${item.file}:${item.line} ${item.ref}`);
  }
}

console.log("\nNon-root local paths:");
if (nonRoot.length === 0) {
  console.log("  none");
} else {
  for (const item of nonRoot) {
    console.log(`  ${item.file}:${item.line} ${item.ref}`);
  }
}

console.log("\nRepeated references (3+):");
if (duplicates.length === 0) {
  console.log("  none");
} else {
  for (const [ref, count] of duplicates) {
    console.log(`  ${count}x ${ref}`);
  }
}

console.log("\nPer-file repeated references:");
if (perFileDuplicates.length === 0) {
  console.log("  none");
} else {
  for (const item of perFileDuplicates) {
    console.log(`  ${item.file} ${item.lines.length}x ${item.ref} lines ${item.lines.join(", ")}`);
  }
}
