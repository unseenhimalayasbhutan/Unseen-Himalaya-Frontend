"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  MapPin,
  Mountain,
  ShieldCheck,
  Sparkles,
  Users,
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
  customizableItems,
  durationFilters,
  itineraries,
  reservationAndCancellation,
  termsAndConditions,
  tourExclusions,
  tourInclusions,
} from "../data/tourItineraries";

const getDurationId = (duration: string) =>
  duration.split(" ")[0].replace(/[^0-9]/g, "");

const getDurationFilterId = (duration: string) =>
  `${getDurationId(duration)}days`;

export default function BhutanToursPage() {
  const [activeDuration, setActiveDuration] = useState("all");
  const [activeRouteSlug, setActiveRouteSlug] = useState(
    itineraries[0]?.slug || ""
  );

  const filteredItineraries = useMemo(() => {
    if (activeDuration === "all") return itineraries;

    return itineraries.filter(
      (route) => getDurationFilterId(route.duration) === activeDuration
    );
  }, [activeDuration]);

  const handleDurationChange = (durationId: string) => {
    const nextRoutes =
      durationId === "all"
        ? itineraries
        : itineraries.filter(
            (route) => getDurationFilterId(route.duration) === durationId
          );

    setActiveDuration(durationId);
    setActiveRouteSlug(nextRoutes[0]?.slug || "");
  };

  const handleRouteSelect = (routeSlug: string) => {
    // Keep one itinerary open at all times. This prevents the section from
    // looking broken when a user clicks the active card again.
    setActiveRouteSlug(routeSlug);
  };

  const activeRoute =
    filteredItineraries.find((route) => route.slug === activeRouteSlug) ||
    filteredItineraries[0] ||
    null;

  const selectedRoutePosition = activeRoute
    ? filteredItineraries.findIndex((route) => route.slug === activeRoute.slug) + 1
    : 0;

  return (
    <>
      <Header />

      <main className="tour-pro-page bhutantour-pro-page">
        <section className="tour-pro-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />

          <div className="container tour-pro-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow">
                <Sparkles aria-hidden="true" />
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

        <section
          id="itinerary-library"
          className="tour-pro-section tour-pro-section-warm uh-bhutan-library-section uh-itinerary-redesign-section"
        >
          <div className="container">
            <SectionHeader
              eyebrow="Photography Route Library"
              title="Choose a ready route, then customize it around your photography interests." 
              subtitle="Filter by duration, select a route, and view the full journey in one focused panel."
            />

            <div className="uh-itinerary-redesign-shell">
              <div className="uh-itinerary-redesign-topbar">
                <div className="uh-itinerary-redesign-topbar-copy">
                  <span>Choose duration</span>
                  <strong>
                    {filteredItineraries.length}{" "}
                    {filteredItineraries.length === 1 ? "route" : "routes"} available
                  </strong>
                </div>

                <div
                  className="uh-itinerary-redesign-filter-row"
                  aria-label="Itinerary duration filters"
                >
                  {durationFilters.map((filter) => {
                    const isActive = activeDuration === filter.id;

                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => handleDurationChange(filter.id)}
                        className={`uh-itinerary-redesign-filter-btn ${
                          isActive ? "is-active" : ""
                        }`}
                        aria-pressed={isActive}
                      >
                        {filter.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="cultural-pro-route-shell photography-pro-route-shell">
                <aside
                  className="cultural-pro-route-options"
                  aria-label="Bhutan photography route list"
                >
                    {filteredItineraries.map((route, index) => {
                      const isActive = activeRoute?.slug === route.slug;
                      const mobilePanelId = `mobile-photography-route-${route.slug}`;

                      return (
                        <div
                          key={route.slug}
                          className={`cultural-pro-route-option-group ${
                            isActive ? "is-open" : ""
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => handleRouteSelect(route.slug)}
                            className={`cultural-pro-route-option ${
                              isActive ? "is-active" : ""
                            }`}
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
                              <PhotographyRoutePanel
                                route={route}
                                routePosition={index + 1}
                              />
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                </aside>

                <div className="cultural-pro-route-panel-list">
                {activeRoute ? (
                  <PhotographyRoutePanel
                    key={activeRoute.slug}
                    route={activeRoute}
                    routePosition={selectedRoutePosition}
                  />
                ) : (
                  <div className="uh-itinerary-redesign-empty-state">
                    No itineraries found for this duration yet.
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="bhutan-tour-booking-clarity"
          className="tour-pro-section tour-pro-section-white uh-bhutan-booking-clarity-section"
        >
          <div className="container">
            <SectionHeader
              eyebrow="Booking Clarity"
              title="Tour inclusions, exclusions, reservation policies, and terms & conditions."
              subtitle="A separate section for the practical details guests should understand before confirming a photography tour."
            />

            <div className="uh-bhutan-booking-clarity-shell">
              <div className="uh-bhutan-booking-clarity-overview">
                <div className="uh-bhutan-booking-clarity-copy">
                  <span>Before confirmation</span>
                  
                  <p>
                    Every itinerary can be customized. This section separates the business
                    details from the day-by-day itinerary so clients can clearly see
                    what is included, what is excluded, and what must be confirmed
                    before travel.
                  </p>
                </div>

                
              </div>

              <div className="uh-bhutan-booking-clarity-grid">
                <article className="uh-bhutan-booking-clarity-card uh-bhutan-booking-clarity-card-primary">
                  <div className="uh-bhutan-booking-clarity-card-head">
                    <div className="uh-bhutan-booking-clarity-icon">
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

                <article className="uh-bhutan-booking-clarity-card">
                  <div className="uh-bhutan-booking-clarity-card-head">
                    <div className="uh-bhutan-booking-clarity-icon">
                      <ChevronRight aria-hidden="true" />
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

                <article className="uh-bhutan-booking-clarity-card">
                  <div className="uh-bhutan-booking-clarity-card-head">
                    <div className="uh-bhutan-booking-clarity-icon">
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

                <article className="uh-bhutan-booking-clarity-card uh-bhutan-booking-clarity-card-dark">
                  <div className="uh-bhutan-booking-clarity-card-head">
                    <div className="uh-bhutan-booking-clarity-icon">
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

function PhotographyRoutePanel({
  route,
  routePosition,
}: {
  route: (typeof itineraries)[number];
  routePosition: number;
}) {
  return (
    <article className="cultural-pro-route-panel photography-pro-route-panel" aria-live="polite">
      <div className="cultural-pro-route-panel-grid">
        <div className="cultural-pro-route-main">
          <div className="cultural-pro-route-kicker">
            Photography Route {String(routePosition).padStart(2, "0")}
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
              Enquire About This Route
              <ChevronRight aria-hidden="true" />
            </Link>

            <Link href="/optional-tours" className="tour-pro-btn-secondary">
              Add Experiences
            </Link>
          </div>
        </div>

        <aside className="cultural-pro-route-media">
          <ImageSlot image={route.image} className="cultural-pro-route-image" />

          <div className="cultural-pro-route-note">
            <span>Customizable</span>
            <strong>{route.theme}</strong>
            <p>
              Hotels, meals, activities, guide, vehicle, and travel pace can be
              adjusted before confirmation.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}

const heroImage: ImageAsset = {
  src: "/ppp.png",
  alt: "Bhutan photography tour route image",
  label: "Photography Tours Hero Image",
  copyrightName: "",
};



const quickStats = [
  { icon: CalendarDays, value: "10", label: "Ready Itineraries" },
  { icon: Mountain, value: "3-8", label: "Day Options" },
  { icon: ShieldCheck, value: "Private", label: "Guide & Driver" },
  { icon: Sparkles, value: "Photo", label: "Custom Focus" },
];
