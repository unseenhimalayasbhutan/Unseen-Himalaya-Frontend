"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  CheckCircle,
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
  cyclingItineraries as cyclingRoutes,
} from "../data/cyclingItineraries";
import { sortPackages } from "../data/packageShowcases";

type CyclingValue = {
  title: string;
  description: string;
};

const cyclingShowcasePackages: PackageShowcaseItem[] = cyclingRoutes.map(
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
    days: route.days.map((day, index) => ({
      label: `Day ${String(index + 1).padStart(2, "0")}`,
      title: day.title.replace(/^Day\s*\d+\s*:\s*/i, ""),
      activities: day.activities,
    })),
  })
);

export default function CyclingToursPage() {
  return (
    <>
      <Header />

      <main className="tour-pro-page cultural-pro-page cultural-pro-updated-page">
        <section className="tour-pro-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />

          <div className="container tour-pro-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow">
                <Bike aria-hidden="true" />
                <span>Guided Valley Rides</span>
              </div>

              <h1>
                Ride Bhutan&apos;s valleys, passes, villages, and sacred landscapes
                with flexible cycling support.
              </h1>

              <p>
                Choose short Thimphu and Paro rides or longer western Bhutan
                cycling journeys through Punakha, Phobjikha, Gangtey, and
                Tiger&apos;s Nest.
              </p>

              <div className="tour-pro-hero-actions">
                <Link href="/contact" className="tour-pro-btn-primary">
                  Plan Cycling Journey <ArrowRight aria-hidden="true" />
                </Link>

                <a href="#cycling-itineraries" className="tour-pro-btn-secondary">
                  View Cycling Routes
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
              eyebrow="Ride With Support"
              title="Cycling routes can stay active without becoming rigid."
              subtitle="Each route can be adjusted by fitness level, weather, road conditions, bike support, and preferred sightseeing pace."
            />

            <div className="cultural-value-grid-clean">
              {cyclingValues.map((item, index) => (
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
          eyebrow="Cycling Tour Packages"
          title="Choose a Bhutan cycling route."
          subtitle="Browse packages in a simple card grid, then open the itinerary, inclusions, terms, and more package options in the detail tabs."
          routeLabel="Cycling Route"
          packages={sortPackages(cyclingShowcasePackages)}
          detailBasePath="/cycling-tours"
          showPrices={false}
        />

      </main>

      <Footer />
    </>
  );
}

const heroImage: ImageAsset = {
  src: "/cycling.jpg",
  alt: "Cycling tour in Bhutan",
  label: "Cycling Tour Hero Image",
  copyrightName: "Unseen Himalayas Bhutan",
};

const heroTrust = [
  "3 to 8 day cycling routes",
  "Support vehicle options",
  "Culture, nature, and recovery time",
];

const cyclingValues: CyclingValue[] = [
  {
    title: "Fitness-Based Routing",
    description:
      "Cycling sections can be shortened, extended, or replaced with scenic drives depending on rider comfort.",
  },
  {
    title: "Support Vehicle",
    description:
      "A vehicle can remain available for luggage, rest breaks, weather changes, and mixed-ability groups.",
  },
  {
    title: "Scenic Passes",
    description:
      "Routes can include Dochula, Punakha valley roads, Phobjikha landscapes, and Paro riverside rides.",
  },
  {
    title: "Cultural Balance",
    description:
      "Cycling days still leave room for dzongs, monasteries, museums, local markets, and village encounters.",
  },
  {
    title: "Recovery Time",
    description:
      "Longer routes include softer sightseeing, optional hot stone bath, and lighter rides after active days.",
  },
  {
    title: "Flexible Equipment Planning",
    description:
      "Bike fitting, safety briefings, spare-part needs, and guide support can be confirmed before arrival.",
  },
];
