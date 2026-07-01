"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
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
  itineraries as culturalRoutes,
  reservationAndCancellation,
  termsAndConditions,
  tourExclusions,
  tourInclusions,
} from "../data/tourItineraries";

type CulturalValue = {
  title: string;
  description: string;
};

function getItineraryIndexFromHash() {
  if (typeof window === "undefined") return -1;

  const hashSlug = window.location.hash
    .replace(/^#/, "")
    .replace(/^itinerary-/, "");

  if (!hashSlug) return -1;

  return culturalRoutes.findIndex((route) => route.slug === hashSlug);
}

export default function CulturalToursPage() {
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
                <Sparkles aria-hidden="true" />
                <span>Cultural Tours in Bhutan</span>
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

        <section className="tour-pro-section tour-pro-section-warm uh-itinerary-section cultural-pro-itinerary-section">
          <div className="container">
            <SectionHeader
              eyebrow="Relevant Cultural Itineraries"
              title="Classic routes with strong cultural value."
              subtitle="Select a route below to preview the route flow, highlights, inclusions, exclusions, and full day-by-day journey."
            />

            <div className="cultural-pro-route-shell">
  <aside
    className="cultural-pro-route-options"
    aria-label="Relevant cultural itineraries"
  >
    {culturalRoutes.map((route, index) => {
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
                  `#itinerary-${route.slug}`
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
    {culturalRoutes[activeRoute] ? (
      <RoutePanel
        key={culturalRoutes[activeRoute].slug}
        route={culturalRoutes[activeRoute]}
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
              title="Tour inclusions, exclusions, reservation policies, and terms & conditions."
              subtitle="A separate section for the practical details guests and partners should understand before confirming a cultural tour."
            />

            <div className="uh-festival-booking-clarity-shell cultural-pro-booking-shell">
              <div className="uh-festival-booking-clarity-overview">
                <div className="uh-festival-booking-clarity-copy">
                  <span>Before confirmation</span>
                  <h3>Clear terms make cultural travel smoother.</h3>
                  <p>
                    Cultural routes can be adjusted by pace, hotel category,
                    optional experiences, guide focus, and travel season. This
                    section separates the practical terms from the itinerary so
                    guests can clearly see what is included, excluded, and
                    reconfirmed before booking.
                  </p>
                </div>
              </div>

              <div className="uh-festival-booking-clarity-grid cultural-pro-booking-grid">
                <article className="uh-festival-booking-clarity-card uh-festival-booking-clarity-card-primary cultural-pro-booking-card cultural-pro-booking-card-primary">
                  <div className="uh-festival-booking-clarity-card-head cultural-pro-booking-card-head">
                    <div className="uh-festival-booking-clarity-icon">
                      <CheckCircle aria-hidden="true" />
                    </div>

                    <div>
                      <span>Included Services</span>
                      <h4>Tour Inclusions</h4>
                    </div>
                  </div>

                  <ul>
                    {tourInclusions.map((item, index) => (
                      <li key={item}>
                        <strong>{String(index + 1).padStart(2, "0")}</strong>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="uh-festival-booking-clarity-card cultural-pro-booking-card">
                  <div className="uh-festival-booking-clarity-card-head cultural-pro-booking-card-head">
                    <div className="uh-festival-booking-clarity-icon">
                      <ShieldCheck aria-hidden="true" />
                    </div>

                    <div>
                      <span>Not Included</span>
                      <h4>Important Exclusions</h4>
                    </div>
                  </div>

                  <ul>
                    {tourExclusions.map((item, index) => (
                      <li key={item}>
                        <strong>{String(index + 1).padStart(2, "0")}</strong>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="uh-festival-booking-clarity-card cultural-pro-booking-card">
                  <div className="uh-festival-booking-clarity-card-head cultural-pro-booking-card-head">
                    <div className="uh-festival-booking-clarity-icon">
                      <CalendarDays aria-hidden="true" />
                    </div>

                    <div>
                      <span>Booking Process</span>
                      <h4>Reservation & Cancellation</h4>
                    </div>
                  </div>

                  <ul>
                    {reservationAndCancellation.map((item, index) => (
                      <li key={item}>
                        <strong>{String(index + 1).padStart(2, "0")}</strong>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="uh-festival-booking-clarity-card uh-festival-booking-clarity-card-dark cultural-pro-booking-card">
                  <div className="uh-festival-booking-clarity-card-head cultural-pro-booking-card-head">
                    <div className="uh-festival-booking-clarity-icon">
                      <ShieldCheck aria-hidden="true" />
                    </div>

                    <div>
                      <span>Terms to Confirm</span>
                      <h4>Terms & Conditions</h4>
                    </div>
                  </div>

                  <ul>
                    {termsAndConditions.map((item, index) => (
                      <li key={item}>
                        <strong>{String(index + 1).padStart(2, "0")}</strong>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

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

function RoutePanel({
  route,
  routeIndex,
  panelId,
}: {
  route: (typeof culturalRoutes)[number];
  routeIndex: number;
  panelId?: string;
}) {
  return (
    <article id={panelId ?? `itinerary-${route.slug}`} className="cultural-pro-route-panel">
      <div className="cultural-pro-route-panel-grid">
        <div className="cultural-pro-route-main">
          <div className="cultural-pro-route-kicker">
            Cultural Route {String(routeIndex + 1).padStart(2, "0")}
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
            <span>Day-by-day journey</span>
            <strong>
              {route.days.length} {route.days.length === 1 ? "travel day" : "travel days"}
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
              Customize This Cultural Route
              <ChevronRight aria-hidden="true" />
            </Link>

            <Link href="/festival-tours" className="tour-pro-btn-secondary">
              Add Festival Experience
            </Link>
          </div>
        </div>

        <aside className="cultural-pro-route-media">
          <ImageSlot image={route.image} className="cultural-pro-route-image" />

          <div className="cultural-pro-route-note">
            <span>Culture Focus</span>
            <strong>{route.theme}</strong>
            <p>
              This route can be adjusted with farmhouse meals, archery, textile
              visits, festival timing, hot stone bath, local markets, museums,
              and pace preferences.
            </p>
          </div>
        </aside>
      </div>
    </article>
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
