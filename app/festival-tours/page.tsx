"use client";

import Link from "next/link";
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
  festivalPackages,
} from "../data/festivalPackages";
import { getB2cUsdPrice } from "../data/tourPricing";
import { sortPackages } from "../data/packageShowcases";

const removedFestivalPackageTitles = new Set([
  "5-Day Chhukha Tshechu Land-Entry Festival Tour",
  "7-Day Chhukha Tshechu Festival Tour",
]);

const visibleFestivalPackages = festivalPackages.filter(
  (pkg) => !removedFestivalPackageTitles.has(pkg.title)
);

const festivalShowcasePackages: PackageShowcaseItem[] =
  visibleFestivalPackages.map((pkg) => {
    const slug = pkg.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    return {
      slug,
      title: pkg.title,
      duration: pkg.duration,
      route: pkg.coverage,
      summary: pkg.summary,
      bestFor: pkg.bestFor,
      theme: pkg.dates,
      image: pkg.image,
      tags: pkg.festivals,
      tourCode: pkg.tourCode,
      pricing: getB2cUsdPrice(pkg.tourCode),
      days: pkg.days.map((day) => ({
        label: `Day ${day.day}`,
        title: day.title,
        activities: day.activities,
      })),
    };
  });

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

export default function FestivalToursPage() {
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

        <ItineraryPackageShowcase
          eyebrow="Festival Tour Packages"
          title="Choose a Bhutan festival journey."
          subtitle="Browse packages in a simple card grid, then open the itinerary, cost/inclusions, terms, and more package options in the detail tabs."
          routeLabel="Festival Route"
          packages={sortPackages(festivalShowcasePackages)}
          detailBasePath="/festival-tours"
        />

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

const festivalQuickStats = [
  { value: "Oct-Nov", label: "Festival Season" },
  { value: "4-15", label: "Day Route Options" },
  { value: "8", label: "Curated Packages" },
  { value: "Bumthang", label: "Central Festival Circuit" },
];

const heroImage: ImageAsset = {
  src: "/Thimphu festival header2.jpg",
  alt: "Crowds gathered for a Bhutan festival celebration",
  label: "Bhutan Festival Hero Image",
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
      src: "/Wangdue_Gangtey_Phobjikha_2026_Web_Optimized_Images/Web_Optimized/Gangtey_Phobjikha/13_Black_Necked_Crane_Festival.jpg",
      alt: "Black Necked Crane Festival gathering at Gangtey Gonpa",
      label: "Black Necked Crane Festival Image",
      copyrightName: "Shruti D.",
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

