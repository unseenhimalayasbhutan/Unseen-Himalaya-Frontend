"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bike,
  CheckCircle,
  ChevronRight,
  Clock,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  TourImageSlot as ImageSlot,
  TourSectionHeader as SectionHeader,
  type ImageAsset,
} from "../components/TourPagePrimitives";
import {
  cyclingItineraries as cyclingRoutes,
} from "../data/cyclingItineraries";
import {
  reservationAndCancellation,
  termsAndConditions,
  tourExclusions,
  tourInclusions,
} from "../data/tourItineraries";

type CyclingValue = {
  title: string;
  description: string;
};

function getItineraryIndexFromHash() {
  if (typeof window === "undefined") return -1;

  const hashSlug = window.location.hash
    .replace(/^#/, "")
    .replace(/^itinerary-/, "");

  if (!hashSlug) return -1;

  return cyclingRoutes.findIndex((route) => route.slug === hashSlug);
}

export default function CyclingToursPage() {
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

      <main className="tour-pro-page cultural-pro-page cultural-pro-updated-page">
        <section className="tour-pro-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />

          <div className="container tour-pro-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow">
                <Bike aria-hidden="true" />
                <span>Cycling Tours in Bhutan</span>
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

        <section
          id="cycling-itineraries"
          className="tour-pro-section tour-pro-section-warm uh-itinerary-section cultural-pro-itinerary-section"
        >
          <div className="container">
            <SectionHeader
              eyebrow="Cycling Itinerary Library"
              title="Choose a 3 to 8 day Bhutan cycling route."
              subtitle="Select a route below to preview the route flow, highlights, inclusions, exclusions, and full day-by-day journey."
            />

            <div className="cultural-pro-route-shell">
              <aside
                className="cultural-pro-route-options"
                aria-label="Relevant cycling itineraries"
              >
                {cyclingRoutes.map((route, index) => {
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
                {cyclingRoutes[activeRoute] ? (
                  <RoutePanel
                    key={cyclingRoutes[activeRoute].slug}
                    route={cyclingRoutes[activeRoute]}
                    routeIndex={activeRoute}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white cultural-pro-booking-section uh-festival-booking-clarity-section">
          <div className="container">
            <SectionHeader
              eyebrow="Booking Clarity"
              title="Cycling inclusions, exclusions, reservation policies, and terms & conditions."
              subtitle="Cycling routes may require additional bike support, vehicle access, spare parts, and weather checks before confirmation."
            />

            <div className="uh-festival-booking-clarity-shell cultural-pro-booking-shell">
              <div className="uh-festival-booking-clarity-overview">
                <div className="uh-festival-booking-clarity-copy">
                  <span>Before confirmation</span>
                  <h3>Support, pace, and safety are planned together.</h3>
                  <p>
                    Cycling itineraries can be shaped around riding experience,
                    support-vehicle preferences, hotel category, route distance,
                    and recovery time. Final route details should be confirmed
                    with current road, weather, and guest fitness conditions.
                  </p>
                </div>
              </div>

              <div className="uh-festival-booking-clarity-grid cultural-pro-booking-grid">
                <BookingCard
                  title="Tour Inclusions"
                  label="Included Services"
                  items={tourInclusions}
                  primary
                />

                <BookingCard
                  title="Tour Exclusions"
                  label="Not Included"
                  items={tourExclusions}
                />

                <BookingCard
                  title="Reservation & Cancellation"
                  label="Booking Notes"
                  items={reservationAndCancellation}
                />

                <BookingCard
                  title="Terms & Conditions"
                  label="Important Terms"
                  items={termsAndConditions}
                />
              </div>
            </div>
          </div>
        </section>
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
  route: (typeof cyclingRoutes)[number];
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
            Cycling Route {String(routeIndex + 1).padStart(2, "0")}
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
          </div>

          <div className="cultural-pro-route-tags">
            {route.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="cultural-pro-day-heading">
            <span>Day-by-day cycling journey</span>
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
              Customize This Cycling Route
              <ChevronRight aria-hidden="true" />
            </Link>

            <Link href="/optional-tours" className="tour-pro-btn-secondary">
              Add Custom Experiences
            </Link>
          </div>
        </div>

        <aside className="cultural-pro-route-media">
          <ImageSlot image={route.image} className="cultural-pro-route-image" />

          <div className="cultural-pro-route-note">
            <span>Cycling Focus</span>
            <strong>{route.theme}</strong>
            <p>
              Riding sections can be adjusted by fitness level, weather,
              support-vehicle access, road conditions, and the guest&apos;s preferred
              balance between cycling and cultural visits.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}

function BookingCard({
  title,
  label,
  items,
  primary = false,
}: {
  title: string;
  label: string;
  items: string[];
  primary?: boolean;
}) {
  return (
    <article
      className={`uh-festival-booking-clarity-card cultural-pro-booking-card ${
        primary
          ? "uh-festival-booking-clarity-card-primary cultural-pro-booking-card-primary"
          : ""
      }`}
    >
      <div className="uh-festival-booking-clarity-card-head cultural-pro-booking-card-head">
        <div className="uh-festival-booking-clarity-icon">
          {primary ? <CheckCircle aria-hidden="true" /> : <ShieldCheck aria-hidden="true" />}
        </div>

        <div>
          <span>{label}</span>
          <h4>{title}</h4>
        </div>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
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
