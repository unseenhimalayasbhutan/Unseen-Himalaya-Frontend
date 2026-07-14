import { createHash } from "node:crypto";

const TOKEN_SPLIT_PATTERN = /[^a-z0-9+]+/i;
const MOJIBAKE_PATTERN = /[\u00c3\u00c2\u00e2]/;

export function cleanText(text: string) {
  let decodedText = text || "";

  if (MOJIBAKE_PATTERN.test(decodedText)) {
    try {
      decodedText = Buffer.from(decodedText, "latin1").toString("utf8");
    } catch {
      decodedText = text;
    }
  }

  return decodedText
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2022/g, "-")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function stableHash(value: string) {
  return createHash("sha256").update(cleanText(value).toLowerCase()).digest("hex");
}

export function tokenize(text: string) {
  return cleanText(text)
    .toLowerCase()
    .split(TOKEN_SPLIT_PATTERN)
    .map((token) => token.trim())
    .filter((token) => token.length > 2)
    .filter((token) => !STOP_WORDS.has(token));
}

export function keywordOverlapScore(query: string, content: string) {
  const queryTokens = new Set(tokenize(query));
  if (queryTokens.size === 0) return 0;

  const contentTokens = new Set(tokenize(content));
  let matches = 0;
  queryTokens.forEach((token) => {
    if (contentTokens.has(token)) matches += 1;
  });

  return matches / queryTokens.size;
}

export function parseDuration(duration: string) {
  const days = duration.match(/(\d+)\s*days?/i)?.[1];
  const nights = duration.match(/(\d+)\s*nights?/i)?.[1];

  return {
    durationDays: days ? Number(days) : null,
    durationNights: nights ? Number(nights) : null,
  };
}

export function splitRouteDestinations(route: string) {
  return cleanText(route)
    .split(/\s*(?:-|,|\/|\u2022|>)\s*/g)
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item, index, all) => all.indexOf(item) === index);
}

export function formatRate(rate?: number) {
  return typeof rate === "number"
    ? `Starting at Nu. ${rate.toLocaleString("en-US")} + 5% GST`
    : "Rate on request + 5% GST";
}

export function truncateText(text: string, maxLength: number) {
  const cleaned = cleanText(text);
  if (cleaned.length <= maxLength) return cleaned;

  return `${cleaned.slice(0, maxLength - 1).trim()}...`;
}

export function vectorizeText(text: string, dimensions = 128) {
  const vector = Array.from({ length: dimensions }, () => 0);

  tokenize(text).forEach((token) => {
    const hash = createHash("sha256").update(token).digest();
    const index = hash[0] % dimensions;
    const sign = hash[1] % 2 === 0 ? 1 : -1;
    vector[index] += sign;
  });

  const magnitude = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));
  return magnitude > 0 ? vector.map((value) => value / magnitude) : vector;
}

export function cosineSimilarity(left: number[], right: number[]) {
  const length = Math.min(left.length, right.length);
  if (length === 0) return 0;

  let dot = 0;
  for (let index = 0; index < length; index += 1) {
    dot += left[index] * right[index];
  }

  return dot;
}

export function chunkText(recordId: string, title: string, content: string) {
  const paragraphs = cleanText(content)
    .split(/(?=(?:Day\s+\d+|Day\s+[0-9]{2}:|Inclusions|Exclusions|Terms|Important))/i)
    .map((item) => item.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let current = cleanText(title);

  paragraphs.forEach((paragraph) => {
    if (`${current} ${paragraph}`.length > 1400 && current.length > title.length + 20) {
      chunks.push(current);
      current = `${title}. ${paragraph}`;
      return;
    }

    current = `${current} ${paragraph}`.trim();
  });

  if (current) chunks.push(current);

  return chunks.map((chunk, index) => ({
    id: `${recordId}::chunk-${index + 1}`,
    content: chunk,
  }));
}

export function summarizeConversation(messages: Array<{ role: string; content: string }>) {
  return messages
    .slice(-8)
    .map((message) => `${message.role}: ${truncateText(message.content, 160)}`)
    .join(" | ");
}

const STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "from",
  "you",
  "your",
  "are",
  "can",
  "our",
  "but",
  "not",
  "about",
  "into",
  "will",
  "need",
  "want",
  "tour",
  "bhutan",
  "please",
]);
