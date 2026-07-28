import type { PackageShowcaseItem } from "../components/ItineraryPackageShowcase";
import { cyclingItineraries } from "./cyclingItineraries";
import { festivalPackages } from "./festivalPackages";
import { landEntryItineraries } from "./landEntryItineraries";
import { photographyTourCodes } from "./photographyTourCodes";
import {
  itineraries,
  reservationAndCancellation,
  termsAndConditions,
  tourExclusions,
  tourInclusions,
} from "./tourItineraries";
import { getB2cUsdPrice } from "./tourPricing";

const removedFestivalPackageTitles = new Set([
  "5-Day Chhukha Tshechu Land-Entry Festival Tour",
  "7-Day Chhukha Tshechu Festival Tour",
]);

const visibleFestivalPackages = festivalPackages.filter(
  (pkg) => !removedFestivalPackageTitles.has(pkg.title)
);

export const packageInclusions = mergeCostItems(
  tourInclusions.filter((item) => !/monument entry fees/i.test(item)),
  ["Sustainable Development Fee", "Visa fee"]
);

export const packageExclusions = mergeCostItems(
  tourExclusions.filter(
    (item) => !/(sustainable development fee|visa fee|visa and sdf)/i.test(item)
  ),
  ["Monument entry fees"]
);

export const packageReservationNotes = reservationAndCancellation;
export const packageTerms = termsAndConditions;

export const festivalReservationNotes = [
  "Festival and race tours should be booked early because hotel demand rises around event dates.",
  "Booking is confirmed only after written confirmation and receipt of the required advance payment.",
  "Final payment should be completed before the agreed deadline stated in the quotation.",
  "Cancellation charges depend on hotel, airline, government, race organizer, and service-provider policies.",
  "Date changes are subject to hotel availability, event schedule feasibility, and supplier price differences.",
];

export const festivalTerms = [
  "Festival dates, race schedules, locations, and access should be reconfirmed before final booking because local schedules may change.",
  "The final quotation will confirm whether SDF, visa fee, domestic flight, meals, entrance fees, race support, and taxes are included or excluded.",
  "Itinerary timing may change due to weather, road conditions, festival crowd movement, flight timing, race rules, or guest safety.",
  "When festivals overlap, guests may need to choose one festival experience from the same date range.",
  "Festival routing depends on local schedules, road permissions, venue access, and organizer instructions.",
  "Unseen Himalayas Bhutan will provide suitable routing alternatives if a listed service becomes unavailable after confirmation.",
];

export const culturalShowcasePackages = sortPackages(
  itineraries.map((route) => ({
    slug: route.slug,
    title: route.name,
    duration: route.duration,
    route: route.route,
    summary: route.summary,
    bestFor: route.bestFor,
    theme: route.theme,
    image: route.image,
    tags: route.tags,
    tourCode: route.tourCode,
    pricing: getB2cUsdPrice(route.tourCode),
    days: route.days.map((day, index) => ({
      label: `Day ${String(index + 1).padStart(2, "0")}`,
      title: day.title.replace(/^Day\s*\d+\s*:\s*/i, ""),
      activities: day.activities,
    })),
  }))
);

export const photographyShowcasePackages = sortPackages(
  itineraries.map((route) => ({
    slug: route.slug,
    title: route.name,
    duration: route.duration,
    route: route.route,
    summary: route.summary,
    bestFor: route.bestFor,
    theme: route.theme,
    image: route.image,
    tags: route.tags,
    tourCode: photographyTourCodes[route.slug] || route.tourCode,
    pricing: getB2cUsdPrice(route.tourCode),
    days: route.days.map((day, index) => ({
      label: `Day ${String(index + 1).padStart(2, "0")}`,
      title: day.title.replace(/^Day\s*\d+\s*:\s*/i, ""),
      activities: day.activities,
    })),
  }))
);

export const landEntryShowcasePackages = sortPackages(
  landEntryItineraries.map((route) => ({
    slug: route.slug,
    title: route.name,
    duration: route.duration,
    route: route.route,
    summary: route.summary,
    bestFor: route.bestFor,
    theme: route.theme,
    image: route.image,
    tags: route.tags,
    tourCode: route.tourCode,
    pricing: getB2cUsdPrice(route.tourCode),
    days: route.days.map((day, index) => ({
      label: `Day ${String(index + 1).padStart(2, "0")}`,
      title: day.title.replace(/^Day\s*\d+\s*:\s*/i, ""),
      activities: day.activities,
    })),
  }))
);

export const cyclingShowcasePackages = sortPackages(
  cyclingItineraries.map((route) => ({
    slug: route.slug,
    title: route.name,
    duration: route.duration,
    route: route.route,
    summary: route.summary,
    bestFor: route.bestFor,
    theme: route.theme,
    image: route.image,
    tags: route.tags,
    tourCode: route.tourCode,
    days: route.days.map((day, index) => ({
      label: `Day ${String(index + 1).padStart(2, "0")}`,
      title: day.title.replace(/^Day\s*\d+\s*:\s*/i, ""),
      activities: day.activities,
    })),
  }))
);

export const festivalShowcasePackages = sortPackages(
  visibleFestivalPackages.map((pkg) => ({
    slug: pkg.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
    title: pkg.title,
    duration: pkg.duration,
    route: pkg.coverage,
    summary: pkg.summary,
    bestFor: pkg.bestFor,
    theme: pkg.dates,
    image: pkg.image,
    tags: pkg.festivals,
    tourCode: pkg.tourCode,
    pricing: getB2cUsdPrice(pkg.tourCode),
    days: pkg.days.map((day) => ({
      label: `Day ${day.day}`,
      title: day.title,
      activities: day.activities,
    })),
  }))
);

export function sortPackages(packages: PackageShowcaseItem[]) {
  return [...packages].sort((first, second) => {
    const dayDifference = getPackageDays(first.duration) - getPackageDays(second.duration);

    if (dayDifference !== 0) return dayDifference;

    return first.title.localeCompare(second.title);
  });
}

export function getPackageDays(duration: string) {
  return Number(duration.match(/\d+/)?.[0] || 0);
}

function mergeCostItems(baseItems: string[], extraItems: string[]) {
  const normalized = new Set<string>();
  const result: string[] = [];

  [...baseItems, ...extraItems].forEach((item) => {
    const key = item.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

    if (normalized.has(key)) return;

    normalized.add(key);
    result.push(item);
  });

  return result;
}
