"use client";


import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Mountain,
  ShieldCheck,
} from "lucide-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
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
  customizableItems,
  itineraries,
} from "../data/tourItineraries";
import { photographyTourCodes } from "../data/photographyTourCodes";
import { getB2cUsdPrice } from "../data/tourPricing";
import { sortPackages } from "../data/packageShowcases";

const photographyShowcasePackages: PackageShowcaseItem[] = itineraries.map(
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
    tourCode: photographyTourCodes[route.slug] || route.tourCode,
    pricing: getB2cUsdPrice(route.tourCode),
    days: route.days.map((day, index) => ({
      label: `Day ${String(index + 1).padStart(2, "0")}`,
      title: day.title.replace(/^Day\s*\d+\s*:\s*/i, ""),
      activities: day.activities,
    })),
  })
);

export default function BhutanToursPage() {
  return (
    <>
      <Header />

      <main className="tour-pro-page bhutantour-pro-page">
        <section className="tour-pro-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />

          <div className="container tour-pro-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow">
                <Camera aria-hidden="true" />
                <span>Photography Tours</span>
              </div>

              <h1>
                Choose a Bhutan photography journey that matches your time,
                pace, and creative style.
              </h1>

              <p>
                Explore ready-to-use Bhutan routes from 3 to 8 days, then
                customize them with sunrise viewpoints, cultural moments,
                nature stops, festivals, farmhouse visits, hotel categories,
                and your preferred travel pace.
              </p>

              <div className="tour-pro-hero-actions">
                <Link href="/optional-tours" className="tour-pro-btn-primary">
                  Customize My Trip <ArrowRight aria-hidden="true" />
                </Link>

                <a href="#itinerary-library" className="tour-pro-btn-secondary">
                  View Photography Routes
                </a>
              </div>

              
            </div>

            <div className="tour-pro-hero-card">
              <ImageSlot image={heroImage} className="tour-pro-hero-image" />

             
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <div className="tour-pro-stats-grid">
              {quickStats.map((stat) => (
                <div key={stat.label} className="tour-pro-stat-card">
                  <stat.icon aria-hidden="true" />
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ItineraryPackageShowcase
          eyebrow="Photography Tour Packages"
          title="Choose a Bhutan photography route."
          subtitle="Browse packages in a simple card grid, then open the itinerary, cost/inclusions, terms, and more package options in the detail tabs."
          routeLabel="Photography Route"
          packages={sortPackages(photographyShowcasePackages)}
          detailBasePath="/bhutan-tours"
        />

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <SectionHeader
              eyebrow="What Can Be Customized"
              title="Build the same route in your own style."
              subtitle="Our guests can choose the pace, comfort level, activities, and special interests without changing the core Bhutan experience."
            />

            <div className="uh-bhutan-custom-grid">
              {customizableItems.map((item, index) => (
                <article key={item.title} className="uh-bhutan-custom-card">
                  <div className="uh-bhutan-custom-marker">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

const heroImage: ImageAsset = {
  src: "/ppp-optimized.jpg",
  alt: "Bhutan photography tour route image",
  label: "Photography Tours Hero Image",
  copyrightName: "",
};



const quickStats = [
  { icon: CalendarDays, value: "10", label: "Ready Itineraries" },
  { icon: Mountain, value: "3-8", label: "Day Options" },
  { icon: ShieldCheck, value: "Private", label: "Guide & Driver" },
  { icon: Camera, value: "Photo", label: "Custom Focus" },
];
