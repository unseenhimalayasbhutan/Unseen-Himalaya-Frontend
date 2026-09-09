import fs from "node:fs";

const file = "app/globals.css";
let css = fs.readFileSync(file, "utf8");
const start = css.indexOf(".facts-redesign-page{");
const end = css.indexOf("@media(max-width:860px)", start);

if (start === -1 || end === -1) {
  throw new Error("Could not locate the Facts redesign CSS block.");
}

let block = css.slice(start, end);
const replacements = [
  [
    "background:linear-gradient(135deg,var(--color-text-secondary),var(--color-text-secondary)),radial-gradient(circle at right top,var(--color-border),transparent 18rem)",
    "background:var(--color-bg-elevated)",
  ],
  [
    "background:linear-gradient(145deg,var(--color-text-secondary),var(--color-text-secondary)),radial-gradient(circle at 90% 10%,var(--color-border),transparent 16rem)",
    "background:var(--color-bg-card)",
  ],
  [
    "background:linear-gradient(135deg,var(--color-text-secondary),var(--color-text-secondary))",
    "background:var(--color-bg-card-hover)",
  ],
  [
    "background:linear-gradient(145deg,var(--color-text-secondary),var(--color-text-secondary)),radial-gradient(circle at 90% 0%,var(--color-border),transparent 20rem)",
    "background:var(--color-bg-elevated)",
  ],
  [
    "background:var(--color-text-secondary)",
    "background:var(--color-bg-card)",
  ],
  [
    "border:1px solid var(--color-text-secondary)",
    "border:1px solid var(--color-border)",
  ],
  [
    "color:var(--dark)",
    "color:var(--color-text-primary)",
  ],
  [
    ".facts-redesign-philosophy-tab.is-active .facts-redesign-philosophy-number{background:var(--gold);color:var(--color-border)}",
    ".facts-redesign-philosophy-tab.is-active .facts-redesign-philosophy-number{background:var(--color-accent);color:var(--color-bg-page)}",
  ],
  [
    ".facts-redesign-philosophy-tab:hover,.facts-redesign-philosophy-tab:focus-visible,.facts-redesign-philosophy-tab.is-active{transform:translateY(-2px);border-color:var(--color-border);background:var(--color-bg-card-hover);box-shadow: var(--shadow-subtle);outline:none}",
    ".facts-redesign-philosophy-tab:hover,.facts-redesign-philosophy-tab:focus-visible,.facts-redesign-philosophy-tab.is-active{transform:translateY(-2px);border-color:var(--color-border-strong);background:var(--color-bg-card-hover);box-shadow: var(--shadow-subtle);outline:none}",
  ],
  [
    ".facts-redesign-philosophy-tab-content strong{color:var(--color-text-primary);font-size: var(--font-size-md);line-height:1.35}",
    ".facts-redesign-philosophy-tab-content strong{color:var(--color-text-primary);font-size: var(--font-size-md);line-height:1.35}",
  ],
  [
    ".facts-redesign-point{display:flex;align-items:flex-start;gap:10px;color:var(--color-border);font-size: var(--font-size-md);line-height:1.6}",
    ".facts-redesign-point{display:flex;align-items:flex-start;gap:10px;color:var(--color-text-secondary);font-size: var(--font-size-md);line-height:1.6}",
  ],
  [
    ".facts-redesign-highlight-item{display:flex;align-items:flex-start;gap:10px;color:var(--color-border);font-size: var(--font-size-md);line-height:1.6}",
    ".facts-redesign-highlight-item{display:flex;align-items:flex-start;gap:10px;color:var(--color-text-secondary);font-size: var(--font-size-md);line-height:1.6}",
  ],
  [
    ".facts-redesign-dark-section{padding:clamp(78px,8vw,112px) 0;background:radial-gradient(circle at 20% 0%,var(--color-border),transparent 26rem),linear-gradient(135deg,var(--color-border),var(--color-border));color:var(--color-border)}",
    ".facts-redesign-dark-section{padding:clamp(78px,8vw,112px) 0;background:var(--color-bg-section);color:var(--color-text-secondary)}",
  ],
  [
    ".facts-redesign-section-heading-dark h2,.facts-redesign-section-heading-dark p{color:var(--color-border)}",
    ".facts-redesign-section-heading-dark h2{color:var(--color-text-primary)}.facts-redesign-section-heading-dark p{color:var(--color-text-secondary)}",
  ],
];

let changed = 0;
for (const [before, after] of replacements) {
  if (block.includes(before)) {
    block = block.split(before).join(after);
    changed += 1;
  }
}

css = `${css.slice(0, start)}${block}${css.slice(end)}`;
fs.writeFileSync(file, css);
console.log(`normalized Facts CSS replacements: ${changed}`);
