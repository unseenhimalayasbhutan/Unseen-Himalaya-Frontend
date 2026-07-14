import { cyclingItineraries } from "../../data/cyclingItineraries";
import { festivalPackages } from "../../data/festivalPackages";
import { landEntryItineraries } from "../../data/landEntryItineraries";
import { photographyTourCodes } from "../../data/photographyTourCodes";
import {
  customizableItems,
  itineraries,
  reservationAndCancellation,
  termsAndConditions,
  tourExclusions,
  tourInclusions,
} from "../../data/tourItineraries";
import { siteConfig } from "../../siteConfig";
import type { KnowledgeRecord } from "./types";
import {
  cleanText,
  formatRate,
  parseDuration,
  splitRouteDestinations,
} from "./text";

const INDEX_DATE = "2026-07-13";
const hiddenFestivalPackageTitles = new Set([
  "5-Day Chhukha Tshechu Land-Entry Festival Tour",
  "7-Day Chhukha Tshechu Festival Tour",
]);

type StandardTour = (typeof itineraries)[number];

export function buildKnowledgeRecords(): KnowledgeRecord[] {
  const records: KnowledgeRecord[] = [
    buildStaticRecord({
      id: "site-overview",
      title: `${siteConfig.name} overview`,
      sourceUrl: "/",
      contentType: "company",
      summary:
        "Licensed Bhutan-based destination management company offering private tours and custom travel arrangements.",
      content: [
        siteConfig.description,
        `Company contact: email ${siteConfig.contact.email}, phone and WhatsApp ${siteConfig.contact.phoneDisplay}.`,
        "The team supports private Bhutan tours, cultural journeys, festival tours, hotel reservations, guides, transportation, tailor-made travel experiences, B2B travel-agent inquiries, and custom itineraries.",
      ].join(" "),
    }),
    buildStaticRecord({
      id: "contact-handoff",
      title: "Contact and human handoff",
      sourceUrl: "/contact",
      contentType: "contact",
      summary: "WhatsApp, email, and phone contact details for travel inquiries.",
      content: [
        `WhatsApp and phone: ${siteConfig.contact.phoneDisplay}.`,
        `Email: ${siteConfig.contact.email}.`,
        "WhatsApp is best for quick travel questions. Email is best for detailed tour inquiries and B2B requests.",
        "Travellers should share travel dates, number of guests, preferred hotel style, interests, and budget range for a customised itinerary or quotation.",
      ].join(" "),
    }),
    buildStaticRecord({
      id: "tour-inclusions-exclusions",
      title: "Tour inclusions, exclusions, and SDF notes",
      sourceUrl: "/bhutan-tours",
      contentType: "policy",
      summary: "Common inclusions and exclusions for package quotations.",
      content: [
        `Inclusions: ${tourInclusions.join("; ")}.`,
        `Exclusions: ${tourExclusions.join("; ")}.`,
        "Displayed package rates are starting rates for a 3-star hotel Standard Tour and are subject to +5% GST. Hotels can be upgraded for Premium and Luxury packages. SDF is excluded unless a final quotation says otherwise. Website price notes state that foreign nationals pay SDF of USD 100 per night per person and Indian nationals pay Nu. 1,200 per night per person.",
      ].join(" "),
      requiresVerification: true,
    }),
    buildStaticRecord({
      id: "booking-terms",
      title: "Booking, reservation, and cancellation terms",
      sourceUrl: "/terms",
      contentType: "policy",
      summary: "Booking confirmation, payment, cancellation, and date-change notes.",
      content: [...reservationAndCancellation, ...termsAndConditions].join(" "),
      requiresVerification: true,
    }),
    buildStaticRecord({
      id: "customisation-options",
      title: "Custom itinerary options",
      sourceUrl: "/contact",
      contentType: "planning",
      summary: "Hotel, meal, activity, vehicle, and special-interest customisation options.",
      content: customizableItems
        .map((item) => `${item.title}: ${item.description}`)
        .join(" "),
    }),
    buildStaticRecord({
      id: "visa-sdf-verification",
      title: "Visa and Sustainable Development Fee verification",
      sourceUrl: "/faq",
      contentType: "travel-info",
      summary: "Visa and SDF information should be verified before quoting or booking.",
      content:
        "Website price notes state that foreign nationals pay SDF of USD 100 per night per person and Indian nationals pay Nu. 1,200 per night per person. Visa and SDF rules are government-regulated, so exact government rules, SDF rates, border procedures, visa requirements, monument fees, and flight schedules must be reconfirmed before booking. The chatbot must not invent SDF amounts or visa rules beyond the public website note.",
      requiresVerification: true,
    }),
    buildStaticRecord({
      id: "best-time-festivals",
      title: "Best time to visit and festival planning",
      sourceUrl: "/best-time",
      contentType: "travel-info",
      summary:
        "Travel dates, festival dates, weather, and hotel availability require confirmation.",
      content:
        "Bhutan can be planned around culture, nature, festivals, photography, soft adventure, and seasonal preferences. Festival dates, weather-dependent activities, road conditions, and hotel availability should always be reconfirmed before booking.",
      requiresVerification: true,
    }),
  ];

  return [
    ...records,
    ...itineraries.map((route) =>
      buildTourRecord(route, "regular-tour", "/bhutan-tours", {
        tourCode: photographyTourCodes[route.slug] || route.tourCode,
      })
    ),
    ...landEntryItineraries.map((route) =>
      buildTourRecord(route, "land-entry-tour", "/land-entry-tours", {
        entryPoint: "Phuentsholing",
        exitPoint: "Phuentsholing",
      })
    ),
    ...cyclingItineraries.map((route) =>
      buildTourRecord(route, "cycling-tour", "/cycling-tours", {
        interests: ["cycling", "active travel", "culture"],
      })
    ),
    ...festivalPackages
      .filter((pkg) => !hiddenFestivalPackageTitles.has(pkg.title))
      .map((pkg) => {
        const duration = parseDuration(pkg.duration);
        const destinations = splitRouteDestinations(pkg.coverage);
        const content = [
          `${pkg.title}.`,
          `${pkg.tourCode ? `Tour code: ${pkg.tourCode}.` : ""}`,
          `Duration: ${pkg.duration}.`,
          `Route: ${cleanText(pkg.coverage)}.`,
          `Festival dates: ${cleanText(pkg.dates)}.`,
          `Best for: ${cleanText(pkg.bestFor)}.`,
          cleanText(pkg.summary),
          `${formatRate(pkg.startingRate)}.`,
          `Festivals and interests: ${pkg.festivals.map(cleanText).join(", ")}.`,
          pkg.days
            .map(
              (day) =>
                `Day ${day.day}: ${cleanText(day.title)}. ${day.activities.map(cleanText).join("; ")}.`
            )
            .join(" "),
        ].join(" ");

        return {
          id: `festival-tour:${slugify(pkg.title)}`,
          title: cleanText(pkg.title),
          content,
          summary: cleanText(pkg.summary),
          sourceUrl: `${siteConfig.url}/festival-tours`,
          contentType: "festival-tour",
          tourCode: pkg.tourCode,
          startingRate: pkg.startingRate,
          tourCategory: "festival",
          ...duration,
          destinations,
          entryPoint: destinations[0] || "Paro",
          exitPoint: destinations[destinations.length - 1] || "Paro",
          interests: [...pkg.festivals.map(cleanText), "festival", "culture"],
          travelSeason: inferTravelSeason(`${pkg.dates} ${pkg.summary}`),
          festivalName: pkg.festivals[0],
          lastUpdated: INDEX_DATE,
          requiresVerification: true,
        } satisfies KnowledgeRecord;
      }),
  ];
}

function buildTourRecord(
  route: StandardTour,
  contentType: string,
  sourcePath: string,
  overrides: Partial<KnowledgeRecord> = {}
): KnowledgeRecord {
  const duration = parseDuration(route.duration);
  const destinations = splitRouteDestinations(route.route);
  const displayTourCode = overrides.tourCode || route.tourCode;
  const interests = inferInterests(
    `${route.name} ${route.theme} ${route.summary} ${route.bestFor} ${route.tags.join(" ")}`
  );
  const content = [
    `${cleanText(route.name)}.`,
    `${displayTourCode ? `Tour code: ${displayTourCode}.` : ""}`,
    `Duration: ${cleanText(route.duration)}.`,
    `Route: ${cleanText(route.route)}.`,
    `Theme: ${cleanText(route.theme)}.`,
    `Best for: ${cleanText(route.bestFor)}.`,
    cleanText(route.summary),
    `${formatRate(route.startingRate)}.`,
    `Tags: ${route.tags.map(cleanText).join(", ")}.`,
    route.days
      .map((day) => `${cleanText(day.title)}. ${day.activities.map(cleanText).join("; ")}.`)
      .join(" "),
  ].join(" ");

  return {
    id: `${contentType}:${route.slug}`,
    title: cleanText(route.name),
    content,
    summary: cleanText(route.summary),
    sourceUrl: `${siteConfig.url}${sourcePath}`,
    contentType,
    tourCode: displayTourCode,
    startingRate: route.startingRate,
    tourCategory: route.theme,
    ...duration,
    destinations,
    entryPoint: destinations[0] || overrides.entryPoint || "Paro",
    exitPoint: destinations[destinations.length - 1] || overrides.exitPoint || "Paro",
    interests: [...new Set([...(overrides.interests || []), ...interests])],
    travelSeason: inferTravelSeason(route.summary),
    lastUpdated: INDEX_DATE,
    requiresVerification: false,
    ...overrides,
  };
}

function buildStaticRecord(
  record: Omit<KnowledgeRecord, "lastUpdated" | "requiresVerification"> &
    Partial<Pick<KnowledgeRecord, "requiresVerification">>
): KnowledgeRecord {
  return {
    ...record,
    sourceUrl: record.sourceUrl.startsWith("http")
      ? record.sourceUrl
      : `${siteConfig.url}${record.sourceUrl}`,
    lastUpdated: INDEX_DATE,
    requiresVerification: record.requiresVerification || false,
  };
}

function inferInterests(text: string) {
  const lowerText = cleanText(text).toLowerCase();
  const interests = [
    ["culture", "cultural", "dzong", "museum", "heritage", "temple"],
    ["festival", "festival", "tshechu", "drup"],
    ["photography", "photo", "photography", "view", "sunrise"],
    ["nature", "nature", "valley", "crane", "forest", "bird"],
    ["birdwatching", "bird", "crane"],
    ["cycling", "cycling", "bike"],
    ["luxury", "luxury", "premium"],
    ["family", "family", "children"],
    ["honeymoon", "honeymoon", "romantic"],
    ["soft adventure", "hike", "rafting", "trail", "active"],
  ];

  return interests
    .filter(([, ...terms]) => terms.some((term) => lowerText.includes(term)))
    .map(([interest]) => interest);
}

function inferTravelSeason(text: string) {
  const lowerText = cleanText(text).toLowerCase();
  return [
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
  ].filter((month) => lowerText.includes(month));
}

function slugify(value: string) {
  return cleanText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
