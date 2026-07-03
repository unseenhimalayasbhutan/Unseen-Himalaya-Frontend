"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle, ChevronRight, Clock, MapPin, Users } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import {
  TourImageSlot as ImageSlot,
  TourSectionHeader as SectionHeader,
  type ImageAsset,
} from "../components/TourPagePrimitives";
import { tourExclusions, tourInclusions } from "../data/tourItineraries";

type FestivalItem = {
  name: string;
  category: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  slug: string;
  image: ImageAsset;
};

type FestivalTourDay = {
  day: string;
  title: string;
  activities: string[];
};

type FestivalPackage = {
  title: string;
  duration: string;
  dates: string;
  coverage: string;
  bestFor: string;
  summary: string;
  festivals: string[];
  image: ImageAsset;
  days: FestivalTourDay[];
};

type FestivalFilter = {
  id: string;
  label: string;
};

const getFestivalPackageId = (duration: string) =>
  duration.split(" ")[0].replace(/[^0-9]/g, "");

const sortFestivalPackages = (packages: FestivalPackage[]) =>
  [...packages].sort((first, second) => {
    const firstDuration = Number(getFestivalPackageId(first.duration));
    const secondDuration = Number(getFestivalPackageId(second.duration));

    if (firstDuration !== secondDuration) {
      return firstDuration - secondDuration;
    }

    return first.title.localeCompare(second.title);
  });

export default function FestivalToursPage() {
  const [activeDuration, setActiveDuration] = useState("all");
  const [activePackageTitle, setActivePackageTitle] = useState(
    () => sortFestivalPackages(festivalPackages)[0]?.title || ""
  );

  const filteredPackages = useMemo(() => {
    if (activeDuration === "all") {
      return sortFestivalPackages(festivalPackages);
    }

    return sortFestivalPackages(
      festivalPackages.filter(
        (pkg) => getFestivalPackageId(pkg.duration) === activeDuration
      )
    );
  }, [activeDuration]);

  const handleDurationChange = (durationId: string) => {
    const nextPackages =
      durationId === "all"
        ? sortFestivalPackages(festivalPackages)
        : sortFestivalPackages(
            festivalPackages.filter(
              (pkg) => getFestivalPackageId(pkg.duration) === durationId
            )
          );

    setActiveDuration(durationId);
    setActivePackageTitle(nextPackages[0]?.title || "");
  };

  const activePackage =
    filteredPackages.find((pkg) => pkg.title === activePackageTitle) ||
    filteredPackages[0] ||
    null;

  const handlePackageSelect = (packageTitle: string) => {
    setActivePackageTitle(packageTitle);
  };

  return (
    <>
      <Header />

      <main className="tour-pro-page festival-pro-page festival-pro-page-accordion">
        <section className="tour-pro-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />

          <div className="container tour-pro-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow">
                <span>Festival & Event Tours 2026</span>
              </div>

              <h1>
                Experience Bhutan&apos;s festival season, cycling race routes,
                Black Necked crane, and sacred tshechus.
              </h1>

              <p>
                Choose the original September festival circuits, Tour of the
                Cycling race packages, October tshechu tours, or November Black
                Necked Crane Festival journeys.
              </p>

              <div className="tour-pro-hero-actions">
                <Link href="/contact" className="tour-pro-btn-primary">
                  Plan Festival Journey
                </Link>

                <a href="#festival-itineraries" className="tour-pro-btn-secondary">
                  View Festival Routes
                </a>
              </div>

              <div className="tour-pro-trust-row">
                {heroTrust.map((item) => (
                  <div key={item} className="tour-pro-trust-item">
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
            <div className="tour-pro-stats-grid uh-festival-stat-grid">
              {festivalQuickStats.map((stat) => (
                <div key={stat.label} className="tour-pro-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="festival-itineraries"
          className="tour-pro-section tour-pro-section-warm uh-festival-accordion-section uh-festival-library-redesign-section"
        >
          <div className="container">
            <SectionHeader
              eyebrow="Festival Itinerary Library"
              title="Choose a September festival circuit, Bhutan Scenic Cycling Tour package, October tshechu route, or November Black Necked crane festival journey."
              subtitle="Filter by duration, select a route, and view the full day-by-day journey."
            />

            <div className="uh-festival-library-redesign-shell">
              <div className="uh-festival-library-redesign-topbar">
                <div className="uh-festival-library-redesign-topbar-copy">
                  <span>Choose duration</span>
                  <strong>
                    {filteredPackages.length}{" "}
                    {filteredPackages.length === 1
                      ? "festival route"
                      : "festival routes"}{" "}
                    available
                  </strong>
                </div>

                <div
                  className="uh-festival-library-redesign-filter-row"
                  aria-label="Festival route duration filters"
                >
                  {festivalPackageFilters.map((filter) => {
                    const isActive = activeDuration === filter.id;

                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => handleDurationChange(filter.id)}
                        className={`uh-festival-library-redesign-filter-btn ${
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

              <div className="cultural-pro-route-shell festival-pro-route-shell">
                <aside
                  className="cultural-pro-route-options"
                  aria-label="Curated Bhutan festival route list"
                >
                  {filteredPackages.length > 0 ? (
                    filteredPackages.map((pkg, index) => {
                      const isActive = activePackage?.title === pkg.title;
                      const mobilePanelId = `mobile-festival-package-${index}`;

                      return (
                        <div
                          key={pkg.title}
                          className={`cultural-pro-route-option-group ${
                            isActive ? "is-open" : ""
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => handlePackageSelect(pkg.title)}
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
                              <span>{pkg.duration}</span>
                              <strong>{pkg.title}</strong>
                              <small>{pkg.coverage}</small>
                            </span>

                            <ChevronRight aria-hidden="true" />
                          </button>

                          {isActive ? (
                            <div
                              id={mobilePanelId}
                              className="cultural-pro-route-mobile-panel"
                            >
                              <FestivalPackagePanel
                                pkg={pkg}
                                packagePosition={index + 1}
                              />
                            </div>
                          ) : null}
                        </div>
                      );
                    })
                  ) : (
                    <div className="uh-festival-library-redesign-empty-state">
                      No festival routes found for this duration yet.
                    </div>
                  )}
                </aside>

                <div className="cultural-pro-route-panel-list">
                  {activePackage ? (
                    <FestivalPackagePanel
                      key={activePackage.title}
                      pkg={activePackage}
                      packagePosition={
                        filteredPackages.findIndex(
                          (pkg) => pkg.title === activePackage.title
                        ) + 1
                      }
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="festival-booking-clarity"
          className="tour-pro-section tour-pro-section-white uh-festival-booking-clarity-section"
        >
          <div className="container">
            <SectionHeader
              eyebrow="Booking Clarity"
              title="Festival inclusions, exclusions, reservation rules, and terms."
              subtitle="A separate section for the practical details guests and partners should understand before confirming a festival tour."
            />

            <div className="uh-festival-booking-clarity-shell">
              <div className="uh-festival-booking-clarity-overview">
                <div className="uh-festival-booking-clarity-copy">
                  <span>Before confirmation</span>
                  <h3>Clear terms make festival travel smoother.</h3>
                  <p>
                    Festival and event tours need early hotel planning, route
                    coordination, date checks, race support planning, and
                    supplier confirmation. This section separates the business
                    terms from the itinerary so clients can understand exactly
                    what is included, what is excluded, and what must be
                    reconfirmed.
                  </p>
                </div>
              </div>

              <div className="uh-festival-booking-clarity-grid">
                <article className="uh-festival-booking-clarity-card uh-festival-booking-clarity-card-primary">
                  <div className="uh-festival-booking-clarity-card-head">
                    <div className="uh-festival-booking-clarity-icon" />

                    <div>
                      <span>Included Services</span>
                      <h4>Inclusions</h4>
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

                <article className="uh-festival-booking-clarity-card">
                  <div className="uh-festival-booking-clarity-card-head">
                    <div className="uh-festival-booking-clarity-icon" />

                    <div>
                      <span>Not Included</span>
                      <h4>Exclusions</h4>
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

                <article className="uh-festival-booking-clarity-card">
                  <div className="uh-festival-booking-clarity-card-head">
                    <div className="uh-festival-booking-clarity-icon" />

                    <div>
                      <span>Booking Process</span>
                      <h4>Reservation & Cancellation</h4>
                    </div>
                  </div>

                  <ul>
                    {festivalReservationNotes.map((item, index) => (
                      <li key={item}>
                        <strong>{String(index + 1).padStart(2, "0")}</strong>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="uh-festival-booking-clarity-card uh-festival-booking-clarity-card-dark">
                  <div className="uh-festival-booking-clarity-card-head">
                    <div className="uh-festival-booking-clarity-icon" />

                    <div>
                      <span>Terms to Reconfirm</span>
                      <h4>Terms</h4>
                    </div>
                  </div>

                  <ul>
                    {festivalTerms.map((item, index) => (
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

        <section className="tour-pro-section tour-pro-section-white uh-festival-featured-section">
          <div className="container">
            <SectionHeader
              eyebrow="Signature Festival Anchors"
              title="Immersive cultural festival experiences included in each journey."
              subtitle="These festivals are the main cultural anchors used to design the 5-day, 9-day, and 12-day journeys."
            />

            <div className="uh-festival-anchor-grid">
              {featuredFestivals.map((festival, index) => (
                <article key={festival.slug} className="uh-festival-anchor-card">
                  <div className="uh-festival-anchor-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <ImageSlot
                    image={festival.image}
                    className="uh-festival-anchor-image"
                  />

                  <div className="uh-festival-anchor-content">
                    <span>{festival.category}</span>
                    <h3>{festival.name}</h3>
                    <p>{festival.description}</p>

                    <div className="uh-festival-facts uh-festival-anchor-facts">
                      <div>
                        <span>{festival.date}</span>
                      </div>

                      <div>
                        <span>{festival.location}</span>
                      </div>
                    </div>
                  </div>
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

function FestivalPackagePanel({
  pkg,
  packagePosition,
}: {
  pkg: FestivalPackage;
  packagePosition: number;
}) {
  return (
    <article className="cultural-pro-route-panel festival-pro-route-panel" aria-live="polite">
      <div className="cultural-pro-route-panel-grid">
        <div className="cultural-pro-route-main">
          <div className="cultural-pro-route-kicker">
            Festival Route {String(packagePosition).padStart(2, "0")}
          </div>

          <h3>{pkg.title}</h3>

          <p>{pkg.summary}</p>

          <div className="cultural-pro-route-facts">
            <div>
              <Clock aria-hidden="true" />
              <span>Duration</span>
              <strong>{pkg.duration}</strong>
            </div>

            <div>
              <MapPin aria-hidden="true" />
              <span>Dates</span>
              <strong>{pkg.dates}</strong>
            </div>

            <div>
              <Users aria-hidden="true" />
              <span>Coverage</span>
              <strong>{pkg.coverage}</strong>
            </div>
          </div>

          <div className="cultural-pro-route-tags">
            {pkg.festivals.map((festival) => (
              <span key={festival}>{festival}</span>
            ))}
          </div>

          <div className="cultural-pro-day-heading">
            <span>Day-by-day festival journey</span>
            <strong>
              {pkg.days.length}{" "}
              {pkg.days.length === 1 ? "travel day" : "travel days"}
            </strong>
          </div>

          <div className="cultural-pro-day-timeline">
            {pkg.days.map((day) => (
              <div
                key={`${pkg.title}-${day.day}`}
                className="cultural-pro-day-item"
              >
                <div className="cultural-pro-day-number">
                  Day {day.day}
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
              Customize This Festival Tour
              <ChevronRight aria-hidden="true" />
            </Link>

            <Link href="/cultural-tours" className="tour-pro-btn-secondary">
              View Regular Tours
            </Link>
          </div>
        </div>

        <aside className="cultural-pro-route-media">
          <ImageSlot
            image={pkg.image}
            className="cultural-pro-route-image"
          />

          <div className="cultural-pro-route-note">
            <span>Festival routing note</span>
            <strong>{pkg.bestFor}</strong>
            <p>
              Hotel location, festival viewing time, road travel, domestic
              flight timing, and local festival schedules should be reconfirmed
              before final quotation.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}

const festivalPackageFilters: FestivalFilter[] = [
  { id: "all", label: "All Festival Routes" },
  { id: "4", label: "4 Days Tour" },
  { id: "5", label: "5 Days Tour" },
  { id: "7", label: "7 Days Tour" },
  { id: "9", label: "9 Days Tour" },
  { id: "11", label: "11 Days Tour" },
  { id: "12", label: "12 Days Tour" },
];

const festivalQuickStats = [
  { value: "Sep-Nov", label: "Event Season" },
  { value: "Cycling", label: "Race Packages" },
  { value: "4-12", label: "Day Route Options" },
  { value: "14", label: "Curated Packages" },
];

const festivalReservationNotes = [
  "Festival and race tours should be booked early because hotel demand rises around event dates.",
  "Booking is confirmed only after written confirmation and receipt of the required advance payment.",
  "Final payment should be completed before the agreed deadline stated in the quotation.",
  "Cancellation charges depend on hotel, airline, government, race organizer, and service-provider policies.",
  "Date changes are subject to hotel availability, event schedule feasibility, and supplier price differences.",
];

const festivalTerms = [
  "Festival dates, race schedules, locations, and access should be reconfirmed before final booking because local schedules may change.",
  "The final quotation will confirm whether SDF, visa fee, domestic flight, meals, entrance fees, race support, and taxes are included or excluded.",
  "Itinerary timing may change due to weather, road conditions, festival crowd movement, flight timing, race rules, or guest safety.",
  "When festivals overlap, guests may need to choose one festival experience from the same date range.",
  "Bhutan Scenic Cycling Tour support depends on official race regulations, road permissions, and organizer instructions.",
  "Unseen Himalayas Bhutan will provide suitable routing alternatives if a listed service becomes unavailable after confirmation.",
];

const heroImage: ImageAsset = {
  src: "",
  alt: "Bhutan festival hero",
  label: "Festival Hero Image",
  copyrightName: "Unseen Himalayas Bhutan",
};

const heroTrust = [
  "Original festival routes",
  "Bhutan Scenic Cycling Tour 2026 cycling packages",
  "October and November festival tours for international and regional guests",
];

const featuredFestivals: FestivalItem[] = [
  {
    name: "Thimphu Drubchen & Thimphu Tshechu",
    category: "Capital Festival Experience",
    date: "17 Sept and 21-23 Sept 2026",
    location: "Tashi Chhodzong, Thimphu",
    description:
      "A strong capital-based festival experience combining the evening atmosphere of Thimphu Drubchen with the main Thimphu Tshechu celebrations at Tashi Chhodzong.",
    highlights: [
      "Evening Thimphu Drubchen on arrival day",
      "Opening day of Thimphu Tshechu",
      "Full-day festival experience in the capital",
      "Works well with Paro, Punakha, and Wangdue routes",
    ],
    slug: "thimphu-drubchen-tshechu",
    image: {
      src: "/Thimphu Tshechu by Bassem Nimah108.jpg",
      alt: "Thimphu festival image",
      label: "Thimphu Festival Image",
      copyrightName: "Carissa Nimah",
    },
  },
  {
    name: "Wangdue Tshechu or Haa Tshechu",
    category: "Choose Your Western Valley Festival",
    date: "19-21 Sept 2026",
    location: "Wangduephodrang or Lhakhang Karpo, Haa",
    description:
      "Haa Tshechu and Wangdue Tshechu take place on overlapping dates, so guests can choose between a hidden-valley Haa route or a Punakha/Wangdue cultural route.",
    highlights: [
      "Wangdue option pairs naturally with Punakha Valley",
      "Haa option travels via Chelela Pass",
      "Both options connect smoothly with Thimphu Tshechu",
      "Best for guests who want a western Bhutan festival circuit",
    ],
    slug: "haa-wangdue-choice",
    image: {
      src: "/IMG_1786.jpg",
      alt: "Haa or Wangdue festival image",
      label: "Haa Wangdue Festival Image",
      copyrightName: "Kezang Choden",
    },
  },
  {
    name: "Central Bhutan Festival Extension",
    category: "Bumthang & Gangtey Culture",
    date: "23-26 Sept 2026",
    location: "Tamshing Lhakhang, Bumthang and Gangtey Gonpa",
    description:
      "A deeper route for travelers who want more than western Bhutan, including Tamshing Phala Chhoepa, Gangtey Tshechu, and the Gangtey Thongdrel unfurling.",
    highlights: [
      "Tamshing Phala Chhoepa in Bumthang",
      "Gangtey Tshechu at Gangtey Gonpa",
      "Thongdrel unfurling on the final festival morning",
      "Best suited for a 12-day September route",
    ],
    slug: "central-bhutan-festival-extension",
    image: {
      src: "/Haa Summer Festival2.jpg",
      alt: "Central Bhutan festival image",
      label: "Central Bhutan Festival Image",
      copyrightName: "Scarlette DG",
    },
  },
  {
    name: "Bhutan Scenic Cycling Tour",
    category: "Cycling Race Event",
    date: "September 2026",
    location: "Bumthang to Thimphu",
    description:
      "A legendary mountain bike race across Bhutan, designed here with acclimatization, bike checks, race support, recovery, sightseeing, and optional Tiger’s Nest.",
    highlights: [
      "Race support",
      "Bumthang start",
      "Thimphu finish",
      "Optional Taktsang",
    ],
    slug: "bhutan-scenic-cycling-tour",
    image: {
      src: "/p5pb29093445.jpg",
      alt: "Bhutan Scenic Cycling Tour cycling race in Bhutan",
      label: "Bhutan Scenic Cycling Tour Image",
      copyrightName: "Martin Bissig / bissig.ch",
    },
  },
  {
    name: "Black Necked Crane Festival",
    category: "Conservation Festival",
    date: "11 November 2026",
    location: "Gangtey Gonpa, Phobjikha",
    description:
      "A community and conservation-focused celebration in Phobjikha Valley, built around crane-themed performances and local cultural programs.",
    highlights: [
      "Phobjikha Valley",
      "Gangtey Monastery",
      "Crane conservation",
      "Tiger’s Nest option",
    ],
    slug: "black-necked-crane-festival",
    image: {
      src: "/Phobjikha-valley-by-Alicia-Warner-6.jpg",
      alt: "Black Necked Crane Festival route image",
      label: "Black Necked Crane Festival Image",
      copyrightName: "Alicia Warner",
    },
  },
  {
    name: "Chhukha Tshechu",
    category: "Land-entry Festival",
    date: "19-21 October 2026",
    location: "Chhukha",
    description:
      "A practical October festival option for Indian and regional guests entering by land through Phuntsholing.",
    highlights: ["Phuntsholing entry", "Chhukha Tshechu", "Thimphu", "Paro"],
    slug: "chhukha-tshechu",
    image: {
      src: "/ChhukhaTshechu.jpg",
      alt: "Chhukha Tshechu festival tour image",
      label: "Chhukha Tshechu Image",
      copyrightName: "Unseen Himalayas Bhutan",
    },
  },
  {
    name: "Dechenphu Tshechu",
    category: "Short Cultural Festival",
    date: "21 October 2026",
    location: "Dechenphu Lhakhang, Thimphu",
    description:
      "A short festival route for international guests who want Thimphu culture, Dechenphu Tshechu, Paro, and optional Tiger’s Nest.",
    highlights: [
      "Dechenphu Lhakhang",
      "Thimphu culture",
      "Paro",
      "Tiger’s Nest option",
    ],
    slug: "dechenphu-tshechu",
    image: {
      src: "/DechenphuTshechu.jpg",
      alt: "Dechenphu Tshechu festival tour image",
      label: "Dechenphu Tshechu Image",
      copyrightName: "Ben Richards",
    },
  },
];

const festivalPackages: FestivalPackage[] = [
  {
    title: "5-Day Bhutan Festival Tour: Wangdue Route",
    duration: "5 Days / 4 Nights",
    dates: "17-21 September 2026",
    coverage: "Paro • Thimphu • Wangdue • Punakha • Paro",
    bestFor: "Short western festival trip",
    summary:
      "A compact festival route for guests who want Thimphu Drubchen, Wangdue Tshechu, Dochula, Punakha/Wangdue valley, and a smooth Paro departure.",
    festivals: ["Thimphu Drubchen", "Wangdue Tshechu", "Punakha/Wangdue Valley"],
    image: {
      src: "/thedronebook-TourismBoardBhutan-200A6604.jpg",
      alt: "5-day Wangdue festival route image",
      label: "5-Day Wangdue Festival Route Image",
      copyrightName: "www.thedronebook.com",
    },
    days: [
      {
        day: "01",
        title: "17 Sept | Arrival - Paro to Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Scenic drive to Thimphu, approximately 1.5-2 hours",
          "Evening visit to Thimphu Drubchen at Tashi Chhodzong",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "02",
        title: "18 Sept | Thimphu to Wangduephodrang",
        activities: [
          "Morning sightseeing in Thimphu, including Buddha Dordenma or Memorial Chorten",
          "Drive via Dochula Pass to Wangduephodrang",
          "Attend local preparations and pre-Tshechu cultural atmosphere",
          "Overnight in Punakha or Wangdue",
        ],
      },
      {
        day: "03",
        title: "19 Sept | Wangdue Tshechu Day 1",
        activities: [
          "Full day at Wangdue Tshechu",
          "Experience masked dances, rituals, and local gathering",
          "Evening relaxation in Punakha Valley",
          "Overnight in Punakha or Wangdue",
        ],
      },
      {
        day: "04",
        title: "20 Sept | Wangdue Tshechu to Thimphu",
        activities: [
          "Morning final hours of Wangdue Tshechu, selected performances",
          "Drive back to Thimphu",
          "Evening leisure in Thimphu, cafes or craft bazaar",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "05",
        title: "21 Sept | Thimphu to Paro Departure",
        activities: [
          "Early morning drive to Paro",
          "Visit Tamchog Lhakhang if flight timing allows",
          "Airport drop at Paro International Airport",
        ],
      },
    ],
  },
  {
    title: "5-Day Bhutan Festival Tour: Haa Route",
    duration: "5 Days / 4 Nights",
    dates: "17-21 September 2026",
    coverage: "Paro • Thimphu • Haa • Paro",
    bestFor: "Short hidden-valley festival trip",
    summary:
      "A compact Haa-focused festival route for guests who prefer a quieter valley, Chelela Pass scenery, Haa Tshechu, and a Paro/Taktsang finish.",
    festivals: ["Thimphu Drubchen", "Haa Tshechu", "Chelela Pass", "Taktsang Hike"],
    image: {
      src: "/thedronebook-TourismBoardBhutan-200A3579.jpg",
      alt: "5-day Haa festival route image",
      label: "5-Day Haa Festival Route Image",
      copyrightName: "www.thedronebook.com",
    },
    days: [
      {
        day: "01",
        title: "17 Sept | Arrival - Paro to Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Scenic drive to Thimphu, approximately 1.5-2 hours",
          "Evening visit to Thimphu Drubchen at Tashi Chhodzong",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "02",
        title: "18 Sept | Thimphu to Haa",
        activities: [
          "Morning sightseeing in Thimphu, including Buddha Dordenma or Memorial Chorten",
          "Drive via Chelela Pass to Haa",
          "Attend local preparations and pre-Tshechu atmosphere",
          "Overnight in Haa",
        ],
      },
      {
        day: "03",
        title: "19 Sept | Haa Tshechu Day 1",
        activities: [
          "Full day at Haa Tshechu",
          "Experience masked dances, rituals, and local gathering",
          "Evening relaxation in Haa Valley",
          "Overnight in Haa Valley",
        ],
      },
      {
        day: "04",
        title: "20 Sept | Haa Tshechu to Paro",
        activities: [
          "Early morning at Haa Tshechu",
          "Travel to Paro early",
          "Taktsang Monastery hike",
          "Explore Paro Valley and overnight in Paro",
        ],
      },
      {
        day: "05",
        title: "21 Sept | Paro Airport Drop",
        activities: ["Airport drop at Paro International Airport"],
      },
    ],
  },
  {
    title: "9-Day Western Bhutan Festival Circuit: Wangdue & Thimphu",
    duration: "9 Days / 8 Nights",
    dates: "17-25 September 2026",
    coverage: "Paro • Thimphu • Punakha • Wangdue • Paro",
    bestFor: "Western Bhutan festival depth",
    summary:
      "A stronger western Bhutan circuit combining Thimphu Drubchen, Wangdue Tshechu, Thimphu Tshechu, Punakha/Wangdue valley, Paro Valley, and Taktsang.",
    festivals: [
      "Thimphu Drubchen",
      "Wangdue Tshechu",
      "Thimphu Tshechu",
      "Taktsang",
    ],
    image: {
      src: "/Thimphu Tshechu by Bassem Nimah65.jpg",
      alt: "9-day Wangdue and Thimphu festival route image",
      label: "9-Day Wangdue Thimphu Festival Route Image",
      copyrightName: "Carissa Nimah",
    },
    days: [
      {
        day: "01",
        title: "17 Sept | Arrival - Paro to Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Drive to Thimphu",
          "Evening Thimphu Drubchen at Tashi Chhodzong",
        ],
      },
      {
        day: "02",
        title: "18 Sept | Thimphu Sightseeing",
        activities: [
          "Buddha Dordenma",
          "Memorial Chorten",
          "Folk Heritage Museum",
        ],
      },
      {
        day: "03",
        title: "19 Sept | Thimphu to Wangduephodrang",
        activities: [
          "Drive via Dochula Pass",
          "Attend Wangdue Tshechu Day 1",
          "Overnight in Punakha or Wangdue",
        ],
      },
      {
        day: "04",
        title: "20 Sept | Wangduephodrang Tshechu",
        activities: ["Full day festival experience", "Explore Punakha Valley"],
      },
      {
        day: "05",
        title: "21 Sept | Wangduephodrang to Thimphu",
        activities: [
          "Drive back to Thimphu",
          "Attend Thimphu Tshechu opening day",
        ],
      },
      {
        day: "06",
        title: "22 Sept | Thimphu Tshechu",
        activities: ["Full day at Tashi Chhodzong"],
      },
      {
        day: "07",
        title: "23 Sept | Thimphu Tshechu",
        activities: [
          "Full day at Tashi Chhodzong",
          "Explore Thimphu nightlife towards evening",
        ],
      },
      {
        day: "08",
        title: "24 Sept | Thimphu to Paro",
        activities: ["Taktsang hike", "Explore Paro Valley"],
      },
      {
        day: "09",
        title: "25 Sept | Paro Departure",
        activities: [
          "Transfer to Paro International Airport",
          "Departure from Bhutan",
        ],
      },
    ],
  },
  {
    title: "9-Day Western Bhutan Festival Circuit: Haa & Thimphu",
    duration: "9 Days / 8 Nights",
    dates: "17-25 September 2026",
    coverage: "Paro • Thimphu • Haa • Paro",
    bestFor: "Hidden-valley festival depth",
    summary:
      "A western festival circuit for guests who prefer Haa Valley, Chelela Pass, Haa Tshechu, Thimphu Tshechu, Paro Valley, and Taktsang.",
    festivals: ["Thimphu Drubchen", "Haa Tshechu", "Thimphu Tshechu", "Taktsang"],
    image: {
      src: "/Lhakhang Karpo Courtyard with monks haa  DOT AA Original Bhutan Travels.jpg",
      alt: "9-day Haa and Thimphu festival route image",
      label: "9-Day Haa Thimphu Festival Route Image",
      copyrightName: "Kuenzang",
    },
    days: [
      {
        day: "01",
        title: "17 Sept | Arrival - Paro to Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Drive to Thimphu",
          "Evening Thimphu Drubchen at Tashi Chhodzong",
        ],
      },
      {
        day: "02",
        title: "18 Sept | Thimphu Sightseeing",
        activities: [
          "Buddha Dordenma",
          "Memorial Chorten",
          "Folk Heritage Museum",
        ],
      },
      {
        day: "03",
        title: "19 Sept | Thimphu to Haa",
        activities: [
          "Drive via Chelela Pass",
          "Attend Haa Tshechu Day 1",
          "Overnight in Haa",
        ],
      },
      {
        day: "04",
        title: "20 Sept | Haa Tshechu",
        activities: ["Full day festival experience", "Explore Haa Valley"],
      },
      {
        day: "05",
        title: "21 Sept | Haa to Thimphu",
        activities: [
          "Drive back to Thimphu",
          "Attend Thimphu Tshechu opening day",
        ],
      },
      {
        day: "06",
        title: "22 Sept | Thimphu Tshechu",
        activities: ["Full day at Tashi Chhodzong"],
      },
      {
        day: "07",
        title: "23 Sept | Thimphu Tshechu",
        activities: [
          "Full day at Tashi Chhodzong",
          "Explore Thimphu nightlife towards evening",
        ],
      },
      {
        day: "08",
        title: "24 Sept | Thimphu to Paro",
        activities: ["Taktsang hike", "Explore Paro Valley"],
      },
      {
        day: "09",
        title: "25 Sept | Paro Departure",
        activities: [
          "Transfer to Paro International Airport",
          "Departure from Bhutan",
        ],
      },
    ],
  },
  {
    title: "12-Day Western & Central Bhutan Festival Itinerary",
    duration: "12 Days / 11 Nights",
    dates: "17-28 September 2026",
    coverage: "Paro • Thimphu • Wangdue • Bumthang • Gangtey • Paro",
    bestFor: "Maximum September festivals",
    summary:
      "A deeper festival journey designed for maximum cultural exposure across western and central Bhutan, with limited downtime and multiple September festival choices.",
    festivals: [
      "Thimphu Drubchen",
      "Wangdue Tshechu",
      "Thimphu Tshechu",
      "Tamshing Phala Chhoepa",
      "Gangtey Tshechu",
      "Gangtey Thongdrel",
    ],
    image: {
      src: "/Gangtey Monastery  DOT AA Original Bhutan Travels.jpg",
      alt: "12-day western and central Bhutan festival image",
      label: "12-Day Western Central Bhutan Festival Image",
      copyrightName: "Agnieszka Wieczorek / Amazing Aerial Agency",
    },
    days: [
      {
        day: "01",
        title: "17 Sept | Arrival - Paro to Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Drive to Thimphu",
          "Evening Thimphu Drubchen at Tashi Chhodzong",
        ],
      },
      {
        day: "02",
        title: "18 Sept | Thimphu Sightseeing",
        activities: [
          "Buddha Dordenma",
          "Memorial Chorten",
          "Prepare for the main Tshechus",
        ],
      },
      {
        day: "03",
        title: "19 Sept | Thimphu to Wangduephodrang",
        activities: ["Drive via Dochula Pass", "Attend Wangdue Tshechu Day 1"],
      },
      {
        day: "04",
        title: "20 Sept | Wangdue Tshechu",
        activities: [
          "Full festival experience",
          "Overnight in Punakha or Wangdue",
        ],
      },
      {
        day: "05",
        title: "21 Sept | Wangdue to Thimphu",
        activities: ["Attend Thimphu Tshechu opening day"],
      },
      {
        day: "06",
        title: "22 Sept | Thimphu Tshechu",
        activities: ["Full day at Tashi Chhodzong"],
      },
      {
        day: "07",
        title: "23 Sept | Thimphu to Paro to Bumthang",
        activities: ["Flight to Bumthang", "Attend Tamshing Phala Chhoepa"],
      },
      {
        day: "08",
        title: "24 Sept | Bumthang to Gangtey",
        activities: ["Scenic drive", "Evening rest in Phobjikha"],
      },
      {
        day: "09",
        title: "25 Sept | Gangtey Tshechu",
        activities: ["Festival at Gangtey Gonpa"],
      },
      {
        day: "10",
        title: "26 Sept | Gangtey Tshechu Thongdrel to Paro or Thimphu",
        activities: [
          "Thongdrel unfurling",
          "Leisure time at Thimphu or Paro depending on routing",
        ],
      },
      {
        day: "11",
        title: "27 Sept | Paro",
        activities: ["Paro Taktsang hike", "Explore Paro Valley"],
      },
      {
        day: "12",
        title: "28 Sept | Paro Departure",
        activities: ["Departure from Paro International Airport"],
      },
    ],
  },
  {
    title: "Bhutan Scenic Cycling Tour 2026 – 7-Day Race Tour",
    duration: "7 Days / 6 Nights",
    dates: "2-8 September 2026",
    coverage: "Paro • Thimphu • Trongsa • Bumthang • Thimphu • Paro",
    bestFor: "Riders with limited time",
    summary:
      "A compact race-focused itinerary with arrival recovery, acclimatization, bike preparation, race registration, Bhutan Scenic Cycling Tour race day, recovery, and departure via Paro.",
    festivals: [
      "Bhutan Scenic Cycling Tour",
      "Cycling Race",
      "Bumthang to Thimphu",
      "Recovery Day",
    ],
    image: {
      src: "/cycling.jpg",
      alt: "Bhutan Scenic Cycling Tour 7-day race tour image",
      label: "Bhutan Scenic Cycling Tour 7-Day Image",
      copyrightName: "Unseen Himalayas Bhutan",
    },
    days: [
      {
        day: "01",
        title: "2 Sept | Arrival in Paro – Transfer to Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Meet your guide and transfer to Thimphu",
          "Light sightseeing and leisure time to recover from travel",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "02",
        title: "3 Sept | Thimphu Acclimatization & Bike Preparation",
        activities: [
          "Bike assembly and technical checks",
          "Short acclimatization ride around Thimphu",
          "Visit Buddha Dordenma",
          "Visit National Memorial Chorten",
          "Final race briefing and preparation",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "03",
        title: "4 Sept | Thimphu – Trongsa",
        activities: [
          "Scenic drive across central Bhutan via Dochula Pass and Pele La Pass",
          "En route stops for photographs and refreshments",
          "Visit Trongsa Dzong if time permits",
          "Overnight in Trongsa",
        ],
      },
      {
        day: "04",
        title: "5 Sept | Trongsa – Bumthang",
        activities: [
          "Drive to Bumthang via Yotong La Pass",
          "Bhutan Scenic Cycling Tour registration and race briefing",
          "Final bike inspection and race preparation",
          "Early rest before race day",
          "Overnight in Bumthang",
        ],
      },
      {
        day: "05",
        title: "6 Sept | Bhutan Scenic Cycling Tour Race",
        activities: [
          "Early morning transfer to the starting point",
          "Participate in the Bhutan Scenic Cycling Tour mountain bike race from Bumthang to Thimphu",
          "Race support and assistance provided throughout the day",
          "Finish-line celebration upon arrival in Thimphu",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "06",
        title: "7 Sept | Recovery Day in Thimphu",
        activities: [
          "Late breakfast",
          "Optional recovery massage or traditional hot stone bath",
          "Light sightseeing: Buddha Dordenma, National Memorial Chorten, Craft Bazaar, or Farmers’ Market if open",
          "Optional celebratory lunch or farewell dinner",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "07",
        title: "8 Sept | Thimphu – Paro – Departure",
        activities: [
          "Transfer to Paro Airport for departure",
          "Optional visit to Paro Rinpung Dzong or Kyichu Lhakhang if timing allows",
          "Tiger’s Nest hike recommended only as an extra day extension",
          "End of tour",
        ],
      },
    ],
  },
  {
    title: "Bhutan Scenic Cycling Tour 2026 – 9-Day Balanced Race Tour",
    duration: "9 Days / 8 Nights",
    dates: "1-9 September 2026",
    coverage: "Paro • Thimphu • Punakha • Trongsa • Bumthang • Thimphu • Paro",
    bestFor: "Best-balanced race itinerary",
    summary:
      "A strong 9-day package with arrival, acclimatization, bike preparation, sightseeing, race day, recovery, Paro sightseeing, and optional Tiger’s Nest or soft recovery day.",
    festivals: [
      "Bhutan Scenic Cycling Tour",
      "Acclimatization",
      "Race Support",
      "Optional Tiger’s Nest",
    ],
    image: {
      src: "cycle.jpg",
      alt: "Bhutan Scenic Cycling Tour 9-day balanced race tour image",
      label: "Bhutan Scenic Cycling Tour 9-Day Image",
      copyrightName: "Unseen Himalayas Bhutan",
    },
    days: [
      {
        day: "01",
        title: "1 Sept | Arrival in Paro – Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Meet cycling guide or support coordinator",
          "Transfer to Thimphu, approximately 1.5-2 hours",
          "Light sightseeing if time allows: Buddha Dordenma, Memorial Chorten, or Thimphu town walk",
          "Evening briefing on Bhutan travel, altitude, road conditions, and race preparation",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "02",
        title: "2 Sept | Thimphu Acclimatization, Bike Check & Sightseeing",
        activities: [
          "Optional easy acclimatization ride around Thimphu",
          "Bike assembly and mechanical check",
          "Visit Folk Heritage Museum, National Textile Museum, Traditional Paper Factory, or Tashichho Dzong subject to access",
          "Final check of bike condition, spare tubes, lights, hydration, nutrition, riding clothes, rain gear, and support items",
          "Keep the day light to conserve rider energy",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "03",
        title: "3 Sept | Thimphu – Punakha – Trongsa",
        activities: [
          "Early breakfast",
          "Drive to Punakha via Dochula Pass",
          "Stop at Dochula Pass for 108 chortens and Himalayan views",
          "Visit Punakha Dzong",
          "Continue scenic drive towards Trongsa",
          "Trongsa valley viewpoint if time permits",
          "Overnight in Trongsa",
        ],
      },
      {
        day: "04",
        title: "4 Sept | Trongsa – Bumthang / Registration & Final Preparation",
        activities: [
          "Morning visit to Trongsa Dzong or Ta Dzong Museum depending on time",
          "Drive to Bumthang",
          "Check in and rest",
          "Race registration or bib collection subject to official race schedule",
          "Bike inspection and final mechanical check",
          "Short warm-up ride only if rider feels comfortable",
          "Early dinner and early sleep before race day",
          "Overnight in Bumthang",
        ],
      },
      {
        day: "05",
        title: "5 Sept | Race Day: Bumthang – Thimphu",
        activities: [
          "Very early wake-up and light pre-race meal",
          "Transfer to race start point in Bumthang",
          "Participate in Bhutan Scenic Cycling Tour Race from Bumthang to Thimphu",
          "Support vehicle follows as per race rules and road permissions",
          "Support points planned around Bumthang, Trongsa, Pelela, Wangdue/Punakha, Dochula, and Thimphu finish",
          "Post-race transfer to hotel, recovery meal, and rest",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "06",
        title: "6 Sept | Recovery Day in Thimphu",
        activities: [
          "Late breakfast",
          "Optional recovery massage or hot stone bath",
          "Light sightseeing only: Buddha Dordenma, Memorial Chorten, Craft Bazaar, or Farmers’ Market if open",
          "Optional celebratory lunch or dinner",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "07",
        title: "7 Sept | Thimphu – Paro Sightseeing",
        activities: [
          "Leisure breakfast",
          "Drive to Paro",
          "Visit Paro Rinpung Dzong",
          "Visit Ta Dzong / National Museum",
          "Visit Kyichu Lhakhang",
          "Explore Paro town and handicraft shops",
          "Optional traditional dress and archery experience",
          "Overnight in Paro",
        ],
      },
      {
        day: "08",
        title: "8 Sept | Optional Paro Taktsang Hike or Soft Recovery Day",
        activities: [
          "Option A: Hike to Taktsang Monastery with cafeteria viewpoint stop",
          "Option B: Easy Paro valley sightseeing, Kyichu Lhakhang, farmhouse visit, hot stone bath, or leisure shopping",
          "Keep Tiger’s Nest optional because riders may need recovery after the race",
          "Overnight in Paro",
        ],
      },
      {
        day: "09",
        title: "9 Sept | Departure from Paro",
        activities: [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan",
        ],
      },
    ],
  },
  {
    title: "Bhutan Scenic Cycling Tour 2026 – 11-Day Acclimatization Tour",
    duration: "11 Days / 10 Nights",
    dates: "Bhutan Scenic Cycling Tour 2026 period",
    coverage: "Paro • Thimphu • Punakha • Trongsa • Bumthang • Thimphu • Paro",
    bestFor: "Riders needing extra preparation",
    summary:
      "An extended Bhutan Scenic Cycling Tour package with additional acclimatization, training rides, central Bhutan transfer, race participation, recovery, Paro sightseeing, and optional Tiger’s Nest.",
    festivals: [
      "Bhutan Scenic Cycling Tour",
      "Training Rides",
      "Race Briefing",
      "Tiger’s Nest Option",
    ],
    image: {
      src: "/1765.jpg",
      alt: "Bhutan Scenic Cycling Tour 11-day acclimatization tour image",
      label: "Bhutan Scenic Cycling Tour 11-Day Image",
      copyrightName: "Unseen Himalayas Bhutan",
    },
    days: [
      {
        day: "01",
        title: "Arrival in Paro – Transfer to Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Meet your guide and transfer to Thimphu",
          "Leisure time to relax and acclimatize",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "02",
        title: "Thimphu Acclimatization Ride & Sightseeing",
        activities: [
          "Bike assembly and equipment check",
          "Short acclimatization ride around Thimphu Valley",
          "Visit Buddha Dordenma",
          "Visit National Memorial Chorten",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "03",
        title: "Thimphu Cycling Practice & Cultural Exploration",
        activities: [
          "Easy cycling practice ride around Thimphu",
          "Visit Tashichho Dzong",
          "Visit Folk Heritage Museum",
          "Visit Simply Bhutan or National Textile Museum",
          "Final bike adjustments and race preparation",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "04",
        title: "Thimphu – Punakha",
        activities: [
          "Scenic drive via Dochula Pass",
          "Visit Dochula Pass",
          "Visit Punakha Dzong",
          "Optional walk across Punakha Suspension Bridge",
          "Overnight in Punakha",
        ],
      },
      {
        day: "05",
        title: "Punakha – Trongsa",
        activities: [
          "Scenic drive through central Bhutan",
          "En route stops for photography and refreshments",
          "Relax and prepare for the upcoming race week",
          "Overnight in Trongsa",
        ],
      },
      {
        day: "06",
        title: "Trongsa – Bumthang",
        activities: [
          "Drive to Bumthang via Yotong La Pass",
          "Bhutan Scenic Cycling Tour registration and rider briefing",
          "Final bike inspection and equipment check",
          "Early rest before race day",
          "Overnight in Bumthang",
        ],
      },
      {
        day: "07",
        title: "Bhutan Scenic Cycling Tour Race",
        activities: [
          "Early morning transfer to the start line",
          "Participate in the Bhutan Scenic Cycling Tour mountain bike race from Bumthang to Thimphu",
          "Race support provided throughout the event",
          "Finish-line celebration upon arrival in Thimphu",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "08",
        title: "Recovery Day in Thimphu",
        activities: [
          "Late breakfast",
          "Optional recovery massage or traditional hot stone bath",
          "Light sightseeing: Buddha Dordenma, National Memorial Chorten, Craft Bazaar, or Centenary Farmers’ Market if open",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "09",
        title: "Thimphu – Paro",
        activities: [
          "Transfer to Paro",
          "Visit Paro Rinpung Dzong",
          "Visit National Museum",
          "Visit Kyichu Lhakhang",
          "Enjoy a relaxed evening in Paro Valley",
          "Overnight in Paro",
        ],
      },
      {
        day: "10",
        title: "Optional Taktsang Hike or Leisure Day",
        activities: [
          "Optional hike to Taktsang Monastery, Tiger’s Nest",
          "Alternatively enjoy light walks, café visits, or traditional hot stone bath",
          "Overnight in Paro",
        ],
      },
      {
        day: "11",
        title: "Departure",
        activities: [
          "Transfer to Paro International Airport for departure",
          "End of tour",
        ],
      },
    ],
  },
  {
    title: "4-Day Dechenphu Tshechu Short Festival Tour",
    duration: "4 Days / 3 Nights",
    dates: "19-22 October 2026 or 20-23 October 2026",
    coverage: "Paro • Thimphu • Paro",
    bestFor: "Short-stay international guests",
    summary:
      "A short Dechenphu Tshechu route with Thimphu cultural sightseeing, the local festival at Dechenphu Lhakhang, Paro transfer, and airport departure.",
    festivals: ["Dechenphu Tshechu", "Thimphu", "Paro", "Short Festival Tour"],
    image: {
      src: "/National Memorial Chorten Thimphu  DOT AA Original Bhutan Travels.jpg",
      alt: "4-day Dechenphu Tshechu tour image",
      label: "4-Day Dechenphu Tshechu Image",
      copyrightName: "Ben Richards",
    },
    days: [
      {
        day: "01",
        title: "Arrival in Paro – Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Drive to Thimphu, approximately 1.5-2 hours",
          "En-route stop at Tachogang Lhakhang bridge if time permits",
          "Visit Buddha Dordenma",
          "Evening walk around Thimphu town",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "02",
        title: "Thimphu Cultural Sightseeing",
        activities: [
          "Visit National Memorial Chorten",
          "Visit Folk Heritage Museum or Simply Bhutan",
          "Visit National Textile Museum",
          "Visit Tashichho Dzong in the evening, subject to access",
          "Optional traditional dress and archery experience",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "03",
        title: "Dechenphu Tshechu – Paro",
        activities: [
          "Morning attend Dechenphu Tshechu at Dechenphu Lhakhang",
          "Experience local religious dances, rituals, and community gathering",
          "After lunch, drive to Paro",
          "Visit Kyichu Lhakhang or Paro Rinpung Dzong if time permits",
          "Overnight in Paro",
        ],
      },
      {
        day: "04",
        title: "Departure from Paro",
        activities: [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan",
        ],
      },
    ],
  },
  {
    title: "5-Day Dechenphu Tshechu with Tiger’s Nest",
    duration: "5 Days / 4 Nights",
    dates: "19-23 October 2026",
    coverage: "Paro • Thimphu • Paro",
    bestFor: "Short cultural festival clients",
    summary:
      "A compact Dechenphu Tshechu itinerary for guests who also want Paro, Tiger’s Nest, and a classic cultural finish.",
    festivals: ["Dechenphu Tshechu", "Tiger’s Nest", "Thimphu", "Paro"],
    image: {
      src: "/Paro Dzong  DOT AA Original Bhutan Travels.jpg",
      alt: "5-day Dechenphu Tshechu with Tiger's Nest image",
      label: "5-Day Dechenphu Tshechu Image",
      copyrightName: "Kevin Pagès / Amazing Aerial Agency",
    },
    days: [
      {
        day: "01",
        title: "Arrival in Paro – Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Drive to Thimphu",
          "Visit Buddha Dordenma",
          "Evening leisure in Thimphu town",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "02",
        title: "Thimphu Sightseeing",
        activities: [
          "Visit National Memorial Chorten",
          "Visit Folk Heritage Museum",
          "Visit National Textile Museum",
          "Visit traditional paper factory",
          "Visit Tashichho Dzong in the evening if open",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "03",
        title: "Dechenphu Tshechu – Paro",
        activities: [
          "Attend Dechenphu Tshechu",
          "Participate as observer in the local festival atmosphere",
          "After lunch, drive to Paro",
          "Visit Paro Rinpung Dzong or Kyichu Lhakhang",
          "Overnight in Paro",
        ],
      },
      {
        day: "04",
        title: "Tiger’s Nest Hike",
        activities: [
          "Hike to Taktsang Monastery",
          "Stop at cafeteria viewpoint",
          "Return to Paro",
          "Optional hot stone bath and farmhouse dinner",
          "Overnight in Paro",
        ],
      },
      {
        day: "05",
        title: "Departure",
        activities: [
          "Breakfast at hotel",
          "Airport transfer",
          "Departure from Bhutan",
        ],
      },
    ],
  },
  {
    title: "5-Day Chhukha Tshechu Land-Entry Festival Tour",
    duration: "5 Days / 4 Nights",
    dates: "18-22 October 2026",
    coverage: "Phuntsholing • Chhukha • Thimphu • Paro / Phuntsholing",
    bestFor: "Indian and regional guests",
    summary:
      "A practical land-entry festival route through Phuntsholing for regional guests, combining Chhukha Tshechu with Thimphu and Paro cultural highlights.",
    festivals: ["Chhukha Tshechu", "Land Entry", "Thimphu", "Paro"],
    image: {
      src: "",
      alt: "5-day Chhukha Tshechu land-entry tour image",
      label: "5-Day Chhukha Tshechu Image",
      copyrightName: "Unseen Himalayas Bhutan",
    },
    days: [
      {
        day: "01",
        title: "Arrival in Phuntsholing",
        activities: [
          "Arrival in Phuntsholing",
          "Meet guide and driver",
          "Complete entry formalities if applicable",
          "Evening visit around Phuntsholing town",
          "Overnight in Phuntsholing",
        ],
      },
      {
        day: "02",
        title: "Phuntsholing – Chhukha Tshechu – Thimphu",
        activities: [
          "Drive towards Chhukha",
          "Attend Chhukha Tshechu",
          "Continue to Thimphu after the festival visit",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "03",
        title: "Thimphu Sightseeing",
        activities: [
          "Visit Buddha Dordenma",
          "Visit Memorial Chorten",
          "Visit Folk Heritage Museum or Textile Museum",
          "Visit Tashichho Dzong in the evening",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "04",
        title: "Thimphu – Paro",
        activities: [
          "Drive to Paro",
          "Visit Paro Rinpung Dzong",
          "Visit Ta Dzong / National Museum",
          "Visit Kyichu Lhakhang",
          "Optional traditional dress and archery activity",
          "Overnight in Paro",
        ],
      },
      {
        day: "05",
        title: "Departure",
        activities: ["Drive back to Phuntsholing for land exit"],
      },
    ],
  },
  {
    title: "7-Day Chhukha Tshechu Land-Entry Festival Tour",
    duration: "7 Days / 6 Nights",
    dates: "18-24 October 2026",
    coverage: "Phuntsholing • Chhukha • Thimphu • Paro • Phuntsholing",
    bestFor: "Regional guests wanting Tiger’s Nest",
    summary:
      "An extended Chhukha Tshechu land-entry route with Thimphu, Paro, Taktsang hike, hot stone bath, farmhouse cultural program, and Phuntsholing exit.",
    festivals: ["Chhukha Tshechu", "Tiger’s Nest", "Farmhouse Culture", "Land Entry"],
    image: {
      src: "/66bf02f4ff8c371f83c79a4f_66bef5aab388dabf85692211_Paro-Taktsang-1.jpeg",
      alt: "7-day Chhukha Tshechu with Tiger's Nest image",
      label: "7-Day Chhukha Tshechu Image",
      copyrightName: "Unseen Himalayas Bhutan",
    },
    days: [
      {
        day: "01",
        title: "Arrival in Phuntsholing",
        activities: [
          "Arrival in Phuntsholing",
          "Meet guide and driver",
          "Complete entry formalities if applicable",
          "Evening visit around Phuntsholing town",
          "Overnight in Phuntsholing",
        ],
      },
      {
        day: "02",
        title: "Phuntsholing – Chhukha Tshechu – Thimphu",
        activities: [
          "Drive towards Chhukha",
          "Attend Chhukha Tshechu",
          "Continue to Thimphu after the festival visit",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "03",
        title: "Thimphu Sightseeing",
        activities: [
          "Visit Buddha Dordenma",
          "Visit Memorial Chorten",
          "Visit Folk Heritage Museum or Textile Museum",
          "Visit Tashichho Dzong in the evening",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "04",
        title: "Thimphu – Paro",
        activities: [
          "Drive to Paro",
          "Visit Paro Rinpung Dzong",
          "Visit Ta Dzong / National Museum",
          "Visit Kyichu Lhakhang",
          "Free time at Paro town",
          "Overnight in Paro",
        ],
      },
      {
        day: "05",
        title: "Taktsang Hike",
        activities: [
          "Hike to Taktsang Monastery",
          "Visit Kyichu Lhakhang",
          "Hot stone bath",
          "Cultural program at farmhouse",
        ],
      },
      {
        day: "06",
        title: "Paro – Phuntsholing",
        activities: [
          "Drive from Paro to Phuntsholing",
          "Overnight stay at Phuntsholing",
        ],
      },
      {
        day: "07",
        title: "Departure from Phuntsholing",
        activities: ["Exit Bhutan"],
      },
    ],
  },
  {
    title: "5-Day Black Necked Crane Festival Short Tour",
    duration: "5 Days / 4 Nights",
    dates: "9-13 November 2026",
    coverage: "Paro • Thimphu • Gangtey/Phobjikha • Paro",
    bestFor: "Short-stay crane festival guests",
    summary:
      "A short November festival tour built around the Black Necked Crane Festival at Gangtey Gonpa in Phobjikha Valley.",
    festivals: [
      "Black Necked Crane Festival",
      "Phobjikha",
      "Gangtey Monastery",
      "Dochula",
    ],
    image: {
      src: "/Phobjikha-valley-by-Alicia-Warner-33.jpg",
      alt: "5-day Black Necked Crane Festival tour image",
      label: "5-Day Black Necked Crane Festival Image",
      copyrightName: "Alicia Warner",
    },
    days: [
      {
        day: "01",
        title: "9 Nov | Arrival in Paro – Thimphu",
        activities: [
          "Arrival at Paro International Airport",
          "Drive to Thimphu",
          "Visit Buddha Dordenma",
          "Evening leisure in Thimphu",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "02",
        title: "10 Nov | Thimphu – Gangtey / Phobjikha",
        activities: [
          "Drive to Phobjikha Valley via Dochula and Wangdue",
          "Visit Gangtey Monastery if time permits",
          "Short walk in Phobjikha Valley",
          "Overnight in Gangtey/Phobjikha",
        ],
      },
      {
        day: "03",
        title: "11 Nov | Black Necked Crane Festival",
        activities: [
          "Full day attend Black Necked Crane Festival at Gangtey Gonpa",
          "Experience local cultural dances, crane-themed performances, and conservation-focused community celebration",
          "Overnight in Gangtey/Phobjikha",
        ],
      },
      {
        day: "04",
        title: "12 Nov | Gangtey – Paro",
        activities: [
          "Drive back to Paro",
          "Stop at Dochula Pass if weather is clear",
          "Evening leisure in Paro",
          "Overnight in Paro",
        ],
      },
      {
        day: "05",
        title: "13 Nov | Departure",
        activities: ["Transfer to Paro International Airport", "Departure"],
      },
    ],
  },
  {
    title: "7-Day Black Necked Crane Festival with Tiger’s Nest",
    duration: "7 Days / 6 Nights",
    dates: "8-14 November 2026",
    coverage: "Paro • Thimphu • Punakha • Gangtey • Paro",
    bestFor: "Strong November international package",
    summary:
      "A complete November cultural festival route with Thimphu, Punakha, Gangtey, Black Necked Crane Festival, Paro, and Tiger’s Nest.",
    festivals: [
      "Black Necked Crane Festival",
      "Punakha",
      "Gangtey",
      "Tiger’s Nest",
    ],
    image: {
      src: "/Phobjikha-valley-by-Alicia-Warner-6.jpg",
      alt: "7-day Black Necked Crane Festival with Tiger's Nest image",
      label: "7-Day Black Necked Crane Festival Image",
      copyrightName: "Alicia Warner",
    },
    days: [
      {
        day: "01",
        title: "8 Nov | Arrival in Paro – Thimphu",
        activities: [
          "Arrival in Paro",
          "Drive to Thimphu",
          "Visit Buddha Dordenma",
          "Evening Thimphu town walk",
          "Overnight in Thimphu",
        ],
      },
      {
        day: "02",
        title: "9 Nov | Thimphu Sightseeing – Punakha",
        activities: [
          "Visit Memorial Chorten",
          "Visit Folk Heritage Museum or Textile Museum",
          "Drive to Punakha via Dochula Pass",
          "Visit Punakha Dzong",
          "Overnight in Punakha",
        ],
      },
      {
        day: "03",
        title: "10 Nov | Punakha – Gangtey / Phobjikha",
        activities: [
          "Visit Chimi Lhakhang",
          "Drive to Phobjikha Valley",
          "Visit Gangtey Monastery",
          "Walk the Gangtey Nature Trail",
          "Overnight in Gangtey/Phobjikha",
        ],
      },
      {
        day: "04",
        title: "11 Nov | Black Necked Crane Festival",
        activities: [
          "Full day attend Black Necked Crane Festival",
          "Experience cultural performances and community celebration",
          "Overnight in Gangtey/Phobjikha",
        ],
      },
      {
        day: "05",
        title: "12 Nov | Gangtey – Paro",
        activities: [
          "Scenic drive back to Paro",
          "Stop at Dochula Pass",
          "Evening leisure in Paro town",
          "Overnight in Paro",
        ],
      },
      {
        day: "06",
        title: "13 Nov | Tiger’s Nest Hike",
        activities: [
          "Hike to Taktsang Monastery",
          "Visit Kyichu Lhakhang",
          "Optional hot stone bath and farmhouse dinner",
          "Overnight in Paro",
        ],
      },
      {
        day: "07",
        title: "14 Nov | Departure",
        activities: ["Breakfast at hotel", "Airport transfer", "Departure"],
      },
    ],
  },
];
