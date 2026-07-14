"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Hash,
  MapPin,
  Users,
} from "lucide-react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BookingClaritySection } from "../components/BookingClaritySection";
import {
  TourImageSlot as ImageSlot,
  TourRateNote as RateNote,
  TourSectionHeader as SectionHeader,
  type ImageAsset,
} from "../components/TourPagePrimitives";
import { landEntryItineraries as landEntryRoutes } from "../data/landEntryItineraries";

type LandEntryValue = {
  title: string;
  description: string;
};

function getItineraryIndexFromHash() {
  if (typeof window === "undefined") return -1;

  const hashSlug = window.location.hash
    .replace(/^#/, "")
    .replace(/^itinerary-/, "");

  if (!hashSlug) return -1;

  return landEntryRoutes.findIndex((route) => route.slug === hashSlug);
}

export default function LandEntryToursPage() {
  const [activeRoute, setActiveRoute] = useState(0);

  useEffect(() => {
    const syncRouteWithHash = () => {
      const nextIndex = getItineraryIndexFromHash();

      if (nextIndex >= 0) {
        setActiveRoute(nextIndex);
      }
    };

    syncRouteWithHash();
    window.addEventListener("hashchange", syncRouteWithHash);

    return () => window.removeEventListener("hashchange", syncRouteWithHash);
  }, []);

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

        <section
          id="land-entry-itineraries"
          className="tour-pro-section tour-pro-section-warm uh-itinerary-section cultural-pro-itinerary-section"
        >
          <div className="container">
            <SectionHeader
              eyebrow="Land-Entry Itinerary Library"
              title="Choose a 4 to 8 day Bhutan route from Phuentsholing."
              subtitle="Select a route below to preview the route flow, highlights, inclusions, exclusions, and full day-by-day journey."
            />

            <div className="cultural-pro-route-shell">
              <aside
                className="cultural-pro-route-options"
                aria-label="Land-entry itineraries"
              >
                {landEntryRoutes.map((route, index) => {
                  const isActive = activeRoute === index;
                  const mobilePanelId = `mobile-itinerary-${route.slug}`;

                  return (
                    <div
                      key={route.slug}
                      className={`cultural-pro-route-option-group ${
                        isActive ? "is-open" : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={`cultural-pro-route-option ${
                          isActive ? "is-active" : ""
                        }`}
                        onClick={() => {
                          setActiveRoute(index);

                          if (typeof window !== "undefined") {
                            window.history.replaceState(
                              null,
                              "",
                              `#itinerary-${route.slug}`,
                            );
                          }
                        }}
                        aria-expanded={isActive}
                        aria-controls={mobilePanelId}
                      >
                        <span className="cultural-pro-route-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="cultural-pro-route-option-content">
                          <span>{route.duration}</span>
                          <strong>{route.name}</strong>
                          <small>{route.route}</small>
                        </span>

                        <ChevronRight aria-hidden="true" />
                      </button>

                      {isActive ? (
                        <div
                          id={mobilePanelId}
                          className="cultural-pro-route-mobile-panel"
                        >
                          <RoutePanel
                            key={`mobile-${route.slug}`}
                            route={route}
                            routeIndex={index}
                          />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </aside>

              <div className="cultural-pro-route-panel-list">
                {landEntryRoutes[activeRoute] ? (
                  <RoutePanel
                    key={landEntryRoutes[activeRoute].slug}
                    route={landEntryRoutes[activeRoute]}
                    routeIndex={activeRoute}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <BookingClaritySection subtitle="A separate section for the practical details guests and partners should understand before confirming a land-entry tour." />
      </main>

      <Footer />
    </>
  );
}

function RoutePanel({
  route,
  routeIndex,
  panelId,
}: {
  route: (typeof landEntryRoutes)[number];
  routeIndex: number;
  panelId?: string;
}) {
  return (
    <article
      id={panelId ?? `itinerary-${route.slug}`}
      className="cultural-pro-route-panel"
    >
      <div className="cultural-pro-route-panel-grid">
        <div className="cultural-pro-route-main">
          <div className="cultural-pro-route-kicker">
            Land-Entry Route {String(routeIndex + 1).padStart(2, "0")}
          </div>

          <h3>{route.name}</h3>
          <p>{route.summary}</p>

          <div className="cultural-pro-route-facts">
            <div>
              <Clock aria-hidden="true" />
              <span>Duration</span>
              <strong>{route.duration}</strong>
            </div>

            <div>
              <MapPin aria-hidden="true" />
              <span>Route</span>
              <strong>{route.route}</strong>
            </div>

            <div>
              <Users aria-hidden="true" />
              <span>Best For</span>
              <strong>{route.bestFor}</strong>
            </div>

            {route.tourCode ? (
              <div>
                <Hash aria-hidden="true" />
                <span>Tour Code</span>
                <strong>{route.tourCode}</strong>
              </div>
            ) : null}
          </div>

          <div className="cultural-pro-route-tags">
            {route.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="cultural-pro-day-heading">
            <span>Day-by-day land-entry journey</span>
            <strong>
              {route.days.length}{" "}
              {route.days.length === 1 ? "travel day" : "travel days"}
            </strong>
          </div>

          <div className="cultural-pro-day-timeline">
            {route.days.map((day, index) => (
              <div key={day.title} className="cultural-pro-day-item">
                <div className="cultural-pro-day-number">
                  Day {String(index + 1).padStart(2, "0")}
                </div>

                <div className="cultural-pro-day-content">
                  <h4>{day.title}</h4>

                  <ul>
                    {day.activities.map((activity) => (
                      <li key={activity}>
                        <CheckCircle aria-hidden="true" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="cultural-pro-route-actions">
            <Link href="/contact" className="tour-pro-btn-primary">
              Customize This Land-Entry Route
              <ChevronRight aria-hidden="true" />
            </Link>

            <Link href="/optional-tours" className="tour-pro-btn-secondary">
              Add Custom Experiences
            </Link>
          </div>
        </div>

        <aside className="cultural-pro-route-media">
          <ImageSlot
            image={route.image}
            className="cultural-pro-route-image"
          />

          <div className="cultural-pro-route-note">
            <span>Land-Entry Focus</span>
            <RateNote startingRate={route.startingRate} />
            <strong>{route.theme}</strong>
            <p>
              Border arrival timing, road conditions, sightseeing stops, and
              exit formalities should be reconfirmed before the final quotation.
            </p>
          </div>
        </aside>
      </div>
    </article>
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
