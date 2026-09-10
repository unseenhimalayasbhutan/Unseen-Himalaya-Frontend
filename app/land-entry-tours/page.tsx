"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
} from "lucide-react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {
  TourImageSlot as ImageSlot,
  TourSectionHeader as SectionHeader,
  type ImageAsset,
} from "../components/TourPagePrimitives";
import {
  ItineraryPackageShowcase,
  type PackageShowcaseItem,
} from "../components/ItineraryPackageShowcase";
import { landEntryItineraries as landEntryRoutes } from "../data/landEntryItineraries";
import { getB2cUsdPrice } from "../data/tourPricing";
import { sortPackages } from "../data/packageShowcases";

type LandEntryValue = {
  title: string;
  description: string;
};

const landEntryShowcasePackages: PackageShowcaseItem[] = landEntryRoutes.map(
  (route) => ({
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
  })
);

export default function LandEntryToursPage() {
  return (
    <>
      <Header />

      <main className="tour-pro-page cultural-pro-page cultural-pro-updated-page land-entry-pro-page">
        <section className="tour-pro-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />

          <div className="container tour-pro-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow">
                <MapPin aria-hidden="true" />
                <span>Tourist entering via land entry points</span>
              </div>

              <h1>
                Bhutan itineraries for travelers entering through
                Phuentsholing and continuing into Thimphu, Punakha, Gangtey,
                and Paro.
              </h1>

              <p>
                Choose 4 to 8 day land-entry routes designed around border
                arrival formalities, scenic overland transfers, western Bhutan
                highlights, and a smooth Phuentsholing exit.
              </p>

              <div className="tour-pro-hero-actions">
                <Link href="/contact" className="tour-pro-btn-primary">
                  Plan Land-Entry Journey <ArrowRight aria-hidden="true" />
                </Link>

                <a href="#land-entry-itineraries" className="tour-pro-btn-secondary">
                  View Land-Entry Routes
                </a>
              </div>

              <div className="tour-pro-trust-row">
                {heroTrust.map((item) => (
                  <div key={item} className="tour-pro-trust-item">
                    <CheckCircle aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-pro-hero-card">
              <ImageSlot image={heroImage} className="tour-pro-hero-image" />
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <SectionHeader
              eyebrow="Border-Entry Planning"
              title="Routes built around practical land-entry movement."
              subtitle="Each journey starts and ends through Phuentsholing, with timing that can be adjusted around border formalities, road conditions, hotel availability, and sightseeing pace."
            />

            <div className="cultural-value-grid-clean">
              {landEntryValues.map((item, index) => (
                <article key={item.title} className="cultural-value-card-clean">
                  <div className="cultural-value-marker">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ItineraryPackageShowcase
          eyebrow="Land-Entry Tour Packages"
          title="Choose a Bhutan route from Phuentsholing."
          subtitle="Browse packages in a simple card grid, then open the itinerary, cost/inclusions, terms, and more package options in the detail tabs."
          routeLabel="Land-Entry Route"
          packages={sortPackages(landEntryShowcasePackages)}
          detailBasePath="/land-entry-tours"
          showInrPrices
        />

      </main>

      <Footer />
    </>
  );
}

const heroImage: ImageAsset = {
  src: "/Dochula by Marcus Westberg63.jpg",
  alt: "Land-entry tour through Bhutan",
  label: "Land-Entry Tour Hero Image",
  copyrightName: "Unseen Himalayas Bhutan",
};

const heroTrust = [
  "4 to 8 day land-entry routes",
  "Phuentsholing entry and exit",
  "Thimphu, Punakha, Gangtey, and Paro options",
];

const landEntryValues: LandEntryValue[] = [
  {
    title: "Border Arrival Support",
    description:
      "Routes begin with Phuentsholing arrival, guide greeting, entry-formality support, and onward transfer planning.",
  },
  {
    title: "Scenic Overland Flow",
    description:
      "Itineraries account for overland travel time with refreshment stops, photo stops, and flexible road pacing.",
  },
  {
    title: "Western Bhutan Highlights",
    description:
      "Short routes cover Thimphu and Paro, while longer routes add Punakha, Phobjikha, and Gangtey.",
  },
  {
    title: "Flexible Sightseeing",
    description:
      "Museums, dzongs, markets, village walks, rafting, farmhouse meals, and hikes can be tuned to guest interest.",
  },
  {
    title: "Tiger's Nest Options",
    description:
      "Most routes include a Paro day for Taktsang Monastery, with optional hot stone bath or farmhouse dinner.",
  },
  {
    title: "Smooth Land Exit",
    description:
      "The final day returns to Phuentsholing with time for road stops and exit-point transfer planning.",
  },
];
