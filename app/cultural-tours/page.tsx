"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
} from "lucide-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  TourImageSlot as ImageSlot,
  TourSectionHeader as SectionHeader,
  type ImageAsset,
} from "../components/TourPagePrimitives";
import {
  ItineraryPackageShowcase,
  type PackageShowcaseItem,
} from "../components/ItineraryPackageShowcase";
import {
  itineraries as culturalRoutes,
} from "../data/tourItineraries";
import { getB2cUsdPrice } from "../data/tourPricing";
import { sortPackages } from "../data/packageShowcases";

type CulturalValue = {
  title: string;
  description: string;
};

const culturalShowcasePackages: PackageShowcaseItem[] = culturalRoutes.map(
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

export default function CulturalToursPage() {
  return (
    <>
      <Header />

      <main className="tour-pro-page cultural-pro-page cultural-pro-updated-page">
        <section className="tour-pro-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />

          <div className="container tour-pro-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow">
                <MapPin aria-hidden="true" />
                <span>Handcrafted Cultural Journeys</span>
              </div>

              <h1>
                Experience Bhutan&apos;s living heritage through monasteries,
                villages, festivals, and everyday culture.
              </h1>

              <p>
                These cultural and nature journeys are designed for travelers who want more
                than sightseeing: they want stories, rituals, architecture, food,
                dress, arts, spiritual sites, breath taking views and meaningful encounters.
              </p>

              <div className="tour-pro-hero-actions">
                <Link href="/contact" className="tour-pro-btn-primary">
                  Plan Cultural Journey <ArrowRight aria-hidden="true" />
                </Link>

                <Link href="/festival-tours" className="tour-pro-btn-secondary">
                  View Festival Tours
                </Link>
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
              eyebrow="The Bhutanese Way"
              title="Culture is not staged. It is part of daily life."
              subtitle="From national dress and prayer flags to dzongs, local markets, archery, farmhouses, temple rituals, and Majestic mounatins. Bhutan's identity can be experienced in real community settings."
            />

            <div className="cultural-value-grid-clean">
              {culturalValues.map((item, index) => (
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
          eyebrow="Cultural Tour Packages"
          title="Choose a Bhutan cultural and nature journey."
          subtitle="Browse packages in a simple card grid, then open the itinerary, cost/inclusions, terms, and more package options in the detail tabs."
          routeLabel="Cultural Route"
          packages={sortPackages(culturalShowcasePackages)}
          detailBasePath="/cultural-tours"
        />

        <section className="tour-pro-cta">
          <div className="container">
            <div className="tour-pro-cta-card">
              <div>
                <span>Plan Your Cultural Journey</span>
                <h2>Ready to build a Bhutan cultural tour around your dates?</h2>
                <p>
                  Tell us your preferred travel month, pace, hotel style, and
                  cultural interests. We will shape a route with the right
                  balance of monasteries, villages, scenery, and local
                  encounters.
                </p>
              </div>

              <Link href="/contact" className="tour-pro-btn-primary">
                Start Planning
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

const heroImage: ImageAsset = {
  src: "/Haa Summer Festival6.jpg",
  alt: "Bhutan cultural tour hero",
  label: "Cultural Tour Hero Image",
  copyrightName: "Scarlet DG",
};

const heroTrust = [
  "Monasteries and dzongs",
  "Farmhouse and local life",
  "Arts, textiles, archery, and festivals",
  "Explore nature and scenic views",
];

const culturalValues: CulturalValue[] = [
  {
    title: "Sacred Architecture",
    description:
      "Dzongs and monasteries remain active spiritual, administrative, and community spaces.",
  },
  {
    title: "Living Festivals",
    description:
      "Tshechus bring together masked dances, blessings, music, dress, and village gatherings.",
  },
  {
    title: "National Dress",
    description:
      "Gho and Kira are still worn proudly in schools, offices, ceremonies, and festivals.",
  },
  {
    title: "Archery Culture",
    description:
      "Bhutan's national sport is social, musical, competitive, and full of local character.",
  },
  {
    title: "Traditional Crafts",
    description:
      "Textiles, handmade paper, painting, carving, and weaving reveal Bhutan's artistic identity.",
  },
  {
    title: "Local Food",
    description:
      "Food experiences such as farmhouse dinners, ema datshi, red rice, and butter tea add depth.",
  },
];
