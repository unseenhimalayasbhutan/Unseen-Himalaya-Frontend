import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, "public");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const maxLongEdge = 2400;
const minSavingsBytes = 1024;

const stats = {
  checked: 0,
  optimized: 0,
  before: 0,
  after: 0,
  skipped: 0,
};

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const input = await fs.readFile(filePath);
  stats.checked += 1;
  stats.before += input.length;

  try {
    const metadata = await sharp(input, { limitInputPixels: false }).metadata();
    const width = metadata.width || 0;
    const height = metadata.height || 0;
    const shouldResize = Math.max(width, height) > maxLongEdge;

    let pipeline = sharp(input, { limitInputPixels: false }).rotate();

    if (shouldResize) {
      pipeline = pipeline.resize({
        width: maxLongEdge,
        height: maxLongEdge,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    let output;

    if (extension === ".jpg" || extension === ".jpeg") {
      output = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    } else if (extension === ".webp") {
      output = await pipeline.webp({ quality: 82, effort: 6 }).toBuffer();
    } else {
      output = await pipeline
        .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
        .toBuffer();
    }

    if (output.length + minSavingsBytes >= input.length) {
      stats.after += input.length;
      stats.skipped += 1;
      return;
    }

    const tempPath = `${filePath}.optimized`;
    await fs.writeFile(tempPath, output);
    await fs.rename(tempPath, filePath);

    stats.optimized += 1;
    stats.after += output.length;
  } catch (error) {
    stats.after += input.length;
    stats.skipped += 1;
    console.warn(`Skipped ${path.relative(projectRoot, filePath)}: ${error.message}`);
  }
}

const files = await walk(publicRoot);

for (const file of files) {
  await optimizeImage(file);
}

const saved = stats.before - stats.after;
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2);

console.log(`Checked ${stats.checked} images.`);
console.log(`Optimized ${stats.optimized} images; skipped ${stats.skipped}.`);
console.log(`Image payload changed from ${mb(stats.before)} MB to ${mb(stats.after)} MB.`);
console.log(`Saved ${mb(saved)} MB.`);
