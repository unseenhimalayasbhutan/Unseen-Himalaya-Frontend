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
import { ItineraryPackageShowcase } from "../components/ItineraryPackageShowcase";
import { customizableItems } from "../data/tourItineraries";
import {
  photographyCollectionSubtitle,
  photographyOperatingPrinciples,
} from "../data/photographyItineraries";
import {
  photographyShowcasePackages,
  sortPackages,
} from "../data/packageShowcases";

export default function PhotographyTourPage() {
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

              <h1>Bhutan through the lens.</h1>

              <p>
                {photographyCollectionSubtitle} Choose from 3 to 8 day routes
                across Paro, Thimphu, Punakha, Gangtey, and Phobjikha.
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

        <section className="tour-pro-section">
          <div className="container">
            <SectionHeader
              eyebrow="Photography Planning"
              title="Flexible pacing, respectful access, and realistic light windows."
              subtitle="These tours are planned for photographers and visual storytellers, with route timing adjusted around the best available light while respecting Bhutan's site rules and local communities."
            />

            <div className="uh-bhutan-custom-grid">
              {photographyOperatingPrinciples.map((item, index) => (
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

        <ItineraryPackageShowcase
          eyebrow="Photography Tour Packages"
          title="Choose a Bhutan photography route."
          subtitle="Browse the updated UH-PT photography itinerary collection, then open each route for day-by-day details, cost/inclusions, terms, and more package options."
          routeLabel="Photography Route"
          packages={sortPackages(photographyShowcasePackages)}
          detailBasePath="/photography-tour"
        />

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <SectionHeader
              eyebrow="What Can Be Customized"
              title="Build the same route in your own style."
              subtitle="Choose the pace, comfort level, special interests, and photo priorities without losing the core Bhutan experience."
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
