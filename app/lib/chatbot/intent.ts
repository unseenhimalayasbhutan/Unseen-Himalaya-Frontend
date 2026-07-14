import { cleanText } from "./text";
import type { ChatIntent, ChatMessage, TravelerProfile } from "./types";

export function detectIntent(question: string): ChatIntent {
  const text = cleanText(question).toLowerCase();

  if (matches(text, ["ignore your instructions", "ignore previous instructions", "system prompt", "hidden prompt", "developer instructions", "confidential", "supplier rate", "supplier rates", "internal cost", "internal hotel cost", "markup", "profit"])) return "unrelated";
  if (matches(text, ["b2b", "travel agent", "travel agency", "operator rate"])) return "b2b";
  if (matches(text, ["human", "real person", "call me", "speak to"])) return "human_agent";
  if (matches(text, ["urgent", "emergency", "complaint", "problem", "stuck"])) return "urgent";
  if (matches(text, ["existing booking", "already booked", "booking reference"])) return "existing_booking";
  if (matches(text, ["book", "reserve", "send inquiry", "quotation", "quote", "custom itinerary"])) return "booking";
  if (matches(text, ["sdf", "sustainable development fee"])) return "sdf";
  if (matches(text, ["visa", "permit", "entry requirement"])) return "visa";
  if (matches(text, ["contact", "whatsapp", "email", "phone"])) return "human_agent";
  if (
    matches(text, ["price", "cost", "rate", "starting", "budget", "how much", "final price"]) ||
    ((text.includes("low") || text.includes("budget")) &&
      (text.includes("five-star") || text.includes("5-star") || text.includes("five star") || text.includes("luxury")))
  ) return "tour_price";
  if (matches(text, ["hotel", "5-star", "five star", "luxury hotel", "room", "accommodation"])) return "hotel";
  if (matches(text, ["luxury", "premium", "better hotel"])) return "luxury_travel";
  if (matches(text, ["festival", "tshechu", "drup"])) return "festival";
  if (matches(text, ["best time", "season", "weather", "month", "snowfall", ...MONTHS])) return "best_time";
  if (matches(text, ["phuentsholing", "phuntsholing", "phuentsholling", "pling", "land entry", "by road", "border"])) return "entry_phuentsholing";
  if (matches(text, ["paro airport", "enter through paro", "flight entry"])) return "entry_paro";
  if (matches(text, ["group", "people", "travellers", "travelers", "guests", "pax", "ten"]) || /\bwe\s+(?:are|have)\s+(?:\d+|one|two|three|four|five|six|seven|eight|nine|ten)\b/.test(text)) return "group_travel";
  if (matches(text, ["family", "children", "kid"])) return "family_travel";
  if (matches(text, ["photo", "photography", "camera"])) return "photography";
  if (matches(text, ["bird", "birdwatching", "crane"])) return "birdwatching";
  if (matches(text, ["cycling", "bike", "bicycle"])) return "cycling";
  if (matches(text, ["motorcycle", "motorbike"])) return "motorcycle";
  if (matches(text, ["culture", "cultural", "temple", "dzong"])) return "cultural";
  if (matches(text, ["nature", "valley", "hike", "soft adventure"])) return "nature";
  if (matches(text, ["honeymoon", "romantic", "couple"])) return "honeymoon";
  if (matches(text, ["itinerary", "day", "route", "package", "same package"])) return "itinerary_question";
  if (matches(text, ["recommend", "suggest", "best tour", "show me", "find"])) return "tour_recommendation";
  if (matches(text, ["bhutan", "thimphu", "paro", "punakha", "tiger"])) return "general_bhutan";

  return "unrelated";
}

export function extractTravelerProfile(messages: ChatMessage[]): TravelerProfile {
  const text = cleanText(messages.map((message) => message.content).join(" ")).toLowerCase();
  const latest = cleanText(messages[messages.length - 1]?.content || "").toLowerCase();
  const latestFirstText = messages
    .slice()
    .reverse()
    .map((message) => cleanText(message.content).toLowerCase());
  const durationDays = extractLatestNumberBefore(latestFirstText, ["day", "days"]);
  const travelers = extractLatestTravelers(latestFirstText);
  const interests = inferProfileInterests(text);
  const destinations = ["paro", "thimphu", "punakha", "phobjikha", "gangtey", "haa", "bumthang"]
    .filter((destination) => text.includes(destination))
    .map((destination) => destination[0].toUpperCase() + destination.slice(1));

  return {
    durationDays,
    travelers,
    adults: extractLatestNumberBefore(latestFirstText, ["adults", "adult"]),
    children: [],
    travelDates: extractTravelDate(text),
    interests,
    pace: text.includes("not rushed") || text.includes("slow") ? "relaxed" : undefined,
    hotelCategory: extractHotelCategory(text),
    budget: extractBudget(text),
    entryPoint: hasPhuentsholingAlias(text) || text.includes("land") ? "Phuentsholing" : text.includes("paro") ? "Paro" : undefined,
    exitPoint: hasPhuentsholingAlias(text) ? "Phuentsholing" : undefined,
    destinations,
    groupType: text.includes("family") ? "family" : text.includes("honeymoon") ? "honeymoon" : undefined,
    specialRequirements: latest.includes("same package") || latest.includes("instead") ? latest : undefined,
  };
}

export function isFollowUpQuestion(question: string) {
  const text = cleanText(question).toLowerCase();
  return /\b(it|this|that|same|instead|first one|second one|third one|the first|the second|the third|make it|add|remove|for eight days|for 8 days)\b/.test(text);
}

function matches(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

function extractNumberBefore(text: string, nouns: string[]) {
  const words = nouns.join("|");
  const numeric = text.match(new RegExp(`(\\d+)\\s*(?:-|\\s)*(?:${words})`));
  if (numeric) return Number(numeric[1]);

  const wordNumbers: Record<string, number> = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    fifteen: 15,
  };
  const wordMatch = text.match(
    new RegExp(`(${Object.keys(wordNumbers).join("|")})\\s*(?:-|\\s)*(?:${words})`)
  );
  return wordMatch ? wordNumbers[wordMatch[1]] : undefined;
}

function extractLatestNumberBefore(texts: string[], nouns: string[]) {
  for (const text of texts) {
    const value = extractNumberBefore(text, nouns);
    if (value) return value;
  }

  return undefined;
}

function extractLatestTravelers(texts: string[]) {
  for (const text of texts) {
    const explicit = extractNumberBefore(text, ["people", "person", "travellers", "travelers", "guests", "pax"]);
    if (explicit) return explicit;

    const standalone = extractStandalonePeopleCount(text);
    if (standalone) return standalone;
  }

  return undefined;
}

function extractStandalonePeopleCount(text: string) {
  const wordNumbers: Record<string, number> = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
  };
  const match = text.match(
    new RegExp(`\\b(?:we are|we have|actually|we are actually)\\s+(\\d+|${Object.keys(wordNumbers).join("|")})\\b`)
  );
  if (!match) return undefined;
  return /^\d+$/.test(match[1]) ? Number(match[1]) : wordNumbers[match[1]];
}

function inferProfileInterests(text: string) {
  const interests = [
    ["culture", ["culture", "cultural", "dzong", "temple"]],
    ["nature", ["nature", "valley", "hike", "crane"]],
    ["festival", ["festival", "tshechu", "drup"]],
    ["photography", ["photo", "photography", "camera"]],
    ["cycling", ["cycling", "bike"]],
    ["birdwatching", ["bird", "crane"]],
    ["luxury", ["luxury", "premium", "5-star", "five star"]],
    ["honeymoon", ["honeymoon", "romantic"]],
  ]
    .filter(([, terms]) => (terms as string[]).some((term) => text.includes(term)))
    .map(([interest]) => interest as string);

  if (/\b(?:remove|no|not|without)\s+(?:the\s+)?festival/.test(text)) {
    return interests.filter((interest) => interest !== "festival");
  }

  return interests;
}

function extractHotelCategory(text: string) {
  if (text.includes("5-star") || text.includes("five star") || text.includes("luxury")) return "luxury";
  if (text.includes("premium")) return "premium";
  if (text.includes("standard")) return "standard";
  return undefined;
}

function extractBudget(text: string) {
  const match = text.match(/(?:budget|around|under|below)\s*([a-z]{0,3}\s*[\d,]+)/i);
  return match ? cleanText(match[1]) : undefined;
}

function extractTravelDate(text: string) {
  const month = MONTHS.find((item) => text.includes(item));
  return month;
}

function hasPhuentsholingAlias(text: string) {
  return ["phuentsholing", "phuntsholing", "phuentsholling", "pling"].some((term) =>
    text.includes(term)
  );
}

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
