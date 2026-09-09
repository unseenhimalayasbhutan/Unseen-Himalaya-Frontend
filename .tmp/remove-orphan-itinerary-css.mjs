import fs from "node:fs";

const files = ["app/globals.css", "app/design-system.css"];
const obsoleteTokens = [
  ".cultural-pro-route",
  ".cultural-pro-itinerary-section",
  ".uh-itinerary-redesign",
  ".uh-festival-library-redesign",
  ".uh-festival-library-accordion",
  ".uh-bhutan-library",
  ".uh-bhutan-route",
  ".uh-itinerary-",
  "#uh-duration",
  "#uh-bhutan-route",
  "#uh-cultural-route",
];

function findMatchingBrace(source, openIndex) {
  let depth = 0;
  let quote = null;
  let inComment = false;

  for (let i = openIndex; i < source.length; i += 1) {
    const current = source[i];
    const next = source[i + 1];

    if (inComment) {
      if (current === "*" && next === "/") {
        inComment = false;
        i += 1;
      }
      continue;
    }

    if (quote) {
      if (current === "\\" && next) {
        i += 1;
      } else if (current === quote) {
        quote = null;
      }
      continue;
    }

    if (current === "/" && next === "*") {
      inComment = true;
      i += 1;
      continue;
    }

    if (current === "\"" || current === "'") {
      quote = current;
      continue;
    }

    if (current === "{") {
      depth += 1;
    } else if (current === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  throw new Error(`Unmatched brace at ${openIndex}`);
}

function splitSelectors(selectorText) {
  const selectors = [];
  let start = 0;
  let paren = 0;
  let bracket = 0;
  let quote = null;

  for (let i = 0; i < selectorText.length; i += 1) {
    const current = selectorText[i];
    const next = selectorText[i + 1];

    if (quote) {
      if (current === "\\" && next) {
        i += 1;
      } else if (current === quote) {
        quote = null;
      }
      continue;
    }

    if (current === "\"" || current === "'") {
      quote = current;
    } else if (current === "(") {
      paren += 1;
    } else if (current === ")") {
      paren -= 1;
    } else if (current === "[") {
      bracket += 1;
    } else if (current === "]") {
      bracket -= 1;
    } else if (current === "," && paren === 0 && bracket === 0) {
      selectors.push(selectorText.slice(start, i));
      start = i + 1;
    }
  }

  selectors.push(selectorText.slice(start));
  return selectors;
}

function isObsolete(selector) {
  return obsoleteTokens.some((token) => selector.includes(token));
}

function leadingTrivia(text) {
  let index = 0;

  while (index < text.length) {
    const whitespace = text.slice(index).match(/^\s+/);
    if (whitespace) {
      index += whitespace[0].length;
      continue;
    }

    if (text.startsWith("/*", index)) {
      const close = text.indexOf("*/", index + 2);
      if (close === -1) break;
      index = close + 2;
      continue;
    }

    break;
  }

  return text.slice(0, index);
}

function pruneCss(source, stats) {
  let output = "";
  let cursor = 0;

  while (cursor < source.length) {
    const open = source.indexOf("{", cursor);
    if (open === -1) {
      output += source.slice(cursor);
      break;
    }

    const head = source.slice(cursor, open);
    const close = findMatchingBrace(source, open);
    const body = source.slice(open + 1, close);
    const prefix = leadingTrivia(head);
    const statement = head.slice(prefix.length).trim();

    if (statement.startsWith("@")) {
      const prunedBody = pruneCss(body, stats);
      if (prunedBody.trim()) {
        output += `${head}{${prunedBody}}`;
      } else {
        stats.removedAtRules += 1;
      }
    } else {
      const selectors = splitSelectors(statement);
      const keptSelectors = selectors.filter((selector) => !isObsolete(selector));
      const removedCount = selectors.length - keptSelectors.length;

      if (removedCount) {
        stats.removedSelectors += removedCount;
      }

      if (keptSelectors.length) {
        const rebuiltHead =
          removedCount > 0
            ? `${prefix}${keptSelectors.map((selector) => selector.trim()).join(",\n")}`
            : head;
        output += `${rebuiltHead}{${body}}`;
      } else if (removedCount) {
        stats.removedRules += 1;
      } else {
        output += source.slice(cursor, close + 1);
      }
    }

    cursor = close + 1;
  }

  return output.replace(/\n{4,}/g, "\n\n\n");
}

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const stats = { removedSelectors: 0, removedRules: 0, removedAtRules: 0 };
  const next = pruneCss(source, stats);

  if (next !== source) {
    fs.writeFileSync(file, next);
  }

  console.log(
    `${file}: removed ${stats.removedSelectors} selectors, ${stats.removedRules} rules, ${stats.removedAtRules} empty at-rules`
  );
}
