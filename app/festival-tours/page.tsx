"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  MapPin,
  ShieldCheck,
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
  festivalPackages,
  type FestivalPackage,
} from "../data/festivalPackages";
import { tourExclusions, tourInclusions } from "../data/tourItineraries";

const removedFestivalPackageTitles = new Set([
  "5-Day Chhukha Tshechu Land-Entry Festival Tour",
  "7-Day Chhukha Tshechu Festival Tour",
]);

const visibleFestivalPackages = festivalPackages.filter(
  (pkg) => !removedFestivalPackageTitles.has(pkg.title)
);

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
    () => sortFestivalPackages(visibleFestivalPackages)[0]?.title || ""
  );

  const filteredPackages = useMemo(() => {
    if (activeDuration === "all") {
      return sortFestivalPackages(visibleFestivalPackages);
    }

    return sortFestivalPackages(
      visibleFestivalPackages.filter(
        (pkg) => getFestivalPackageId(pkg.duration) === activeDuration
      )
    );
  }, [activeDuration]);

  const handleDurationChange = (durationId: string) => {
    const nextPackages =
      durationId === "all"
        ? sortFestivalPackages(visibleFestivalPackages)
        : sortFestivalPackages(
            visibleFestivalPackages.filter(
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
                Experience Bhutan&apos;s festival season, sacred tshechus,
                Black Necked Crane celebrations, and Bumthang festival circuits.
              </h1>

              <p>
                Choose updated festival itineraries for Dechenphu, Chhukha,
                Jakar, Jambay Lhakhang Drup, Bumthang, and the Black Necked
                Crane Festival.
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
              title="Choose an updated festival route from the new itinerary library."
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
          className="tour-pro-section tour-pro-section-white uh-bhutan-booking-clarity-section"
        >
          <div className="container">
            <SectionHeader
              eyebrow="Booking Clarity"
              title="Tour inclusions, exclusions, reservation policies, and terms & conditions."
              subtitle="A separate section for the practical details guests and partners should understand before confirming a festival tour."
            />

            <div className="uh-bhutan-booking-clarity-shell">
              <div className="uh-bhutan-booking-clarity-overview">
                <div className="uh-bhutan-booking-clarity-copy">
                  <span>Before confirmation</span>

                  <p>
                    Every itinerary can be customized. This section separates the
                    business details from the day-by-day itinerary so clients can
                    clearly see what is included, what is excluded, and what must
                    be confirmed before travel.
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
                    {festivalReservationNotes.map((item, index) => (
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
  { id: "15", label: "15 Days Tour" },
];

const festivalQuickStats = [
  { value: "Oct-Nov", label: "Festival Season" },
  { value: "4-15", label: "Day Route Options" },
  { value: "8", label: "Curated Packages" },
  { value: "Bumthang", label: "Central Festival Circuit" },
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
  "Festival routing depends on local schedules, road permissions, venue access, and organizer instructions.",
  "Unseen Himalayas Bhutan will provide suitable routing alternatives if a listed service becomes unavailable after confirmation.",
];

const heroImage: ImageAsset = {
  src: "",
  alt: "Bhutan festival hero",
  label: "Festival Hero Image",
  copyrightName: "Unseen Himalayas Bhutan",
};

const heroTrust = [
  "Updated festival routes",
  "October and November tshechu journeys",
  "International and regional guest options",
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
      "Tiger's Nest option",
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
      "A short festival route for international guests who want Thimphu culture, Dechenphu Tshechu, Paro, and optional Tiger's Nest.",
    highlights: [
      "Dechenphu Lhakhang",
      "Thimphu culture",
      "Paro",
      "Tiger's Nest option",
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

