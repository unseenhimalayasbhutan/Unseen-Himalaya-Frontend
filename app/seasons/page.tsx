/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { getFallbackImage } from "../components/imageFallbacks";

type SeasonOverview = {
  name: string;
  months: string;
  description: string;
};

type SeasonDetail = {
  name: string;
  months: string;
  description: string;
  temperature: string;
  rainfall: string;
  highlights: string[];
  activities: string[];
  imageCaption: string;
  imageSrc: string;
  imageAlt: string;
  copyrightName?: string;
};

type ActivitySeason = {
  name: string;
  description: string;
  seasons: string[];
};

type ImageItem = {
  src: string;
  alt: string;
  label: string;
  copyrightName?: string;
};

function ImageSlot({
  src,
  alt,
  label,
  copyrightName = "Unseen Himalayas Bhutan",
}: ImageItem) {
  const resolvedSrc = src.trim() || getFallbackImage(label);

  return (
    <figure className="seasons-pro-image-figure">
      <img
        src={resolvedSrc}
        alt={alt}
        className="seasons-pro-image"
        loading="lazy"
      />

      <figcaption className="seasons-pro-image-credit">
        © {copyrightName}
      </figcaption>
    </figure>
  );
}

export default function SeasonsPage() {
  return (
    <>
      <Header />

      <main className="seasons-pro-page">
        {/* Hero */}
        <section className="seasons-pro-hero">
          <div className="seasons-pro-hero-bg" aria-hidden="true" />

          <div className="container">
            <div className="seasons-pro-hero-grid">
              <div className="seasons-pro-hero-content">
                <div className="seasons-pro-eyebrow">
                  <span>Bhutan Seasons</span>
                </div>

                <h1 className="seasons-pro-hero-title">
                  Every season in Bhutan offers a different kind of beauty.
                </h1>

                <p className="seasons-pro-hero-description">
                  Spring brings flowers and festivals, summer turns the valleys
                  lush and green, autumn offers clear mountain views, and winter
                  brings quiet cultural journeys with crisp Himalayan air.
                </p>

                <div className="seasons-pro-hero-actions">
                  <Link href="/contact" className="seasons-pro-btn-primary">
                    Ask for Season Advice
                  </Link>

                  <Link href="/cultural-tours" className="seasons-pro-btn-secondary">
                    Explore Bhutan Tours
                  </Link>
                </div>

                <div className="seasons-pro-hero-trust">
                  {heroTrust.map((item) => (
                    <div key={item} className="seasons-pro-hero-trust-item">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="seasons-pro-hero-card">
                <div className="seasons-pro-hero-image-wrap">
                  <ImageSlot
                    src={heroImage.src}
                    alt={heroImage.alt}
                    label={heroImage.label}
                    copyrightName={heroImage.copyrightName}
                  />
                </div>

                <div className="seasons-pro-hero-card-content">
                  <p className="seasons-pro-card-kicker">Quick Planning Tip</p>
                  <h2>Choose your season by experience.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="seasons-pro-section seasons-pro-section-white">
          <div className="container">
            <div className="seasons-pro-section-header seasons-pro-section-header-center">
              <span className="seasons-pro-section-line" />
              <span className="seasons-pro-section-label">At a Glance</span>
              <span className="seasons-pro-section-line" />
            </div>

            <h2 className="seasons-pro-section-title seasons-pro-center-title">
              Bhutan&apos;s climate changes beautifully through the year.
            </h2>

            <p className="seasons-pro-section-subtitle">
              Four distinct seasons create different travel moods, landscapes,
              festival opportunities, and activity choices.
            </p>

            <div className="seasons-pro-overview-grid">
              {seasonsOverview.map((season) => (
                <article key={season.name} className="seasons-pro-overview-card">
                  <h3>{season.name}</h3>
                  <span>{season.months}</span>
                  <p>{season.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Image Gallery */}
        <section className="seasons-pro-section seasons-pro-section-warm">
          <div className="container">
            <div className="seasons-pro-section-header seasons-pro-section-header-center">
              <span className="seasons-pro-section-line" />
              <span className="seasons-pro-section-label">
                Seasonal Gallery
              </span>
              <span className="seasons-pro-section-line" />
            </div>

            <h2 className="seasons-pro-section-title seasons-pro-center-title">
              Bhutan through the four seasons.
            </h2>


            <div className="seasons-pro-gallery-grid">
              {seasonGalleryImages.map((image) => (
                <div key={image.label} className="seasons-pro-gallery-card">
                  <ImageSlot
                    src={image.src}
                    alt={image.alt}
                    label={image.label}
                    copyrightName={image.copyrightName}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Season Details */}
        <section className="seasons-pro-section seasons-pro-section-white">
          <div className="container">
            <div className="seasons-pro-section-header seasons-pro-section-header-center">
              <span className="seasons-pro-section-line" />
              <span className="seasons-pro-section-label">
                Season by Season
              </span>
              <span className="seasons-pro-section-line" />
            </div>

            <h2 className="seasons-pro-section-title seasons-pro-center-title">
              Choose the right season for your Bhutan journey.
            </h2>

            <div className="seasons-pro-detail-grid">
              {seasonsDetail.map((season) => (
                <article key={season.name} className="seasons-pro-detail-card">
                  <div className="seasons-pro-detail-image">
                    <ImageSlot
                      src={season.imageSrc}
                      alt={season.imageAlt}
                      label={season.imageCaption}
                      copyrightName={season.copyrightName}
                    />
                  </div>

                  <div className="seasons-pro-detail-content">
                    <div className="seasons-pro-detail-heading">
                      <div>
                        <h3>{season.name}</h3>
                        <p>{season.months}</p>
                      </div>
                    </div>

                    <p>{season.description}</p>

                    <div className="seasons-pro-weather-row">
                      <div>
                        <strong>Temperature</strong>
                        <span>{season.temperature}</span>
                      </div>

                      <div>
                        <strong>Rainfall</strong>
                        <span>{season.rainfall}</span>
                      </div>
                    </div>

                    <div className="seasons-pro-detail-list">
                      {season.highlights.map((item) => (
                        <div key={item}>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="seasons-pro-activity-tags">
                      {season.activities.map((activity) => (
                        <span key={activity}>{activity}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Peak vs Off Season */}
        <section className="seasons-pro-section seasons-pro-section-warm">
          <div className="container">
            <div className="seasons-pro-section-header seasons-pro-section-header-center">
              <span className="seasons-pro-section-line" />
              <span className="seasons-pro-section-label">Planning Tips</span>
              <span className="seasons-pro-section-line" />
            </div>

            <h2 className="seasons-pro-section-title seasons-pro-center-title">
              Peak season or quieter travel season?
            </h2>

            <div className="seasons-pro-planning-image-row">
              {planningImages.map((image) => (
                <div key={image.label} className="seasons-pro-planning-image-card">
                  <ImageSlot
                    src={image.src}
                    alt={image.alt}
                    label={image.label}
                    copyrightName={image.copyrightName}
                  />
                </div>
              ))}
            </div>

            <div className="seasons-pro-compare-grid">
              <article className="seasons-pro-compare-card">
                <h3>Peak Season</h3>
                <p><strong>March-May</strong> and <strong>September-November</strong></p>

                <ul>
                  {peakSeason.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="seasons-pro-compare-card">
                <h3>Shoulder & Off-Season</h3>
                <p><strong>June-August</strong> and <strong>December-February</strong></p>

                <ul>
                  {offSeason.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Activity Calendar */}
        <section className="seasons-pro-feature-dark">
          <div className="container">
            <div className="seasons-pro-section-header seasons-pro-section-header-center">
              <span className="seasons-pro-section-line" />
              <span className="seasons-pro-section-label">Activity Guide</span>
              <span className="seasons-pro-section-line" />
            </div>

            <h2 className="seasons-pro-dark-title">
              Best seasons by travel interest.
            </h2>

            <div className="seasons-pro-activity-image-grid">
              {activityImages.map((image) => (
                <div key={image.label} className="seasons-pro-activity-image-card">
                  <ImageSlot
                    src={image.src}
                    alt={image.alt}
                    label={image.label}
                    copyrightName={image.copyrightName}
                  />
                </div>
              ))}
            </div>

            <div className="seasons-pro-activities-grid">
              {activitySeasons.map((activity) => (
                <article key={activity.name} className="seasons-pro-activity-card">
                  <h3>{activity.name}</h3>
                  <p>{activity.description}</p>

                  <div className="seasons-pro-activity-seasons">
                    {activity.seasons.map((season) => (
                      <span key={season}>{season}</span>
                    ))}
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

/*
  IMAGE SETUP:
  Replace empty src values with your real image paths.

  Example:
  src: "/images/seasons/spring-rhododendron.jpg"

  Copyright example:
  copyrightName: "Unseen Himalayas Bhutan"
  copyrightName: "Passang Tenzin"
*/

const heroImage: ImageItem = {
  src: "/Marcus Westberg Bumthang 202318.jpg",
  alt: "Seasonal landscape in Bhutan",
  label: "Hero Season Image",
  copyrightName: "Marcus Westberg",
};

const seasonGalleryImages: ImageItem[] = [
  {
    src: "/Peach blossoms in front of the stunning Thimphu Dzong.JPG",
    alt: "Spring rhododendron flowers in Bhutan",
    label: "Spring Rhododendrons",
    copyrightName: "Scarlette DG",
  },
  {
    src: "/Bhutan - Moshe Shai - 382.jpg",
    alt: "Green summer valley in Bhutan",
    label: "Summer Valleys",
    copyrightName: "Moshe Shai",
  },
  {
    src: "/Ben-Richards-Tourism-Bhutan-048.jpg",
    alt: "Autumn Himalayan view in Bhutan",
    label: "Autumn Mountain Views",
    copyrightName: "Carissa Nimah",
  },
  {
    src: "/2Snowman Race Climate Conclave.jpg",
    alt: "Winter landscape in Bhutan",
    label: "Winter Landscape",
    copyrightName: "Scarlette DG",
  },
];

const planningImages: ImageItem[] = [
  {
    src: "/DSC02096.jpg",
    alt: "Clear mountain view during peak season in Bhutan",
    label: "Peak Season View",
    copyrightName: "Scarlette DG",
  },
  {
    src: "/By Marcus Westberg _Thimphu_2023_36.jpg",
    alt: "Peaceful off-season valley in Bhutan",
    label: "Quiet Travel Season",
    copyrightName: "Marcus Westberg",
  },
];

const activityImages: ImageItem[] = [
  {
    src: "/Snowman Race48.jpg",
    alt: "Trekking route in Bhutan",
    label: "Trekking Season",
    copyrightName: "Scarlette DG",
  },
  {
    src: "/Thimphu Tshechu by Bassem Nimah88.jpg",
    alt: "Bhutan festival mask dance",
    label: "Festival Season",
    copyrightName: "Carissa Nimah",
  },
  {
    src: "/Phobjikha-valley-by-Alicia-Warner-34.jpg",
    alt: "Black-necked crane in Phobjikha Valley",
    label: "Bird Watching Season",
    copyrightName: "Carissa Nimah",
  },
];

const heroTrust = [
  "Season-based route advice",
  "Festival and trekking planning",
  "Custom itinerary support",
];

const seasonsOverview: SeasonOverview[] = [
  {
    name: "Spring",
    months: "Mar-May",
    description: "Rhododendrons, comfortable weather, festivals, and trekking.",
  },
  {
    name: "Summer",
    months: "Jun-Aug",
    description: "Lush valleys, fewer visitors, green landscapes, and value travel.",
  },
  {
    name: "Autumn",
    months: "Sep-Nov",
    description: "Clear skies, mountain views, festivals, and peak tourist season.",
  },
  {
    name: "Winter",
    months: "Dec-Feb",
    description: "Quiet cultural travel, crisp days, snow views, and bird watching.",
  },
];

const seasonsDetail: SeasonDetail[] = [
  {
    name: "Spring",
    months: "March to May",
    description:
      "Spring is one of the most beautiful times to visit Bhutan. Valleys come alive with rhododendrons, magnolias, and wildflowers, while the weather is comfortable for sightseeing, soft adventure, and many treks.",
    temperature: "Day: 15-25°C | Night: 5-10°C",
    rainfall: "Moderate rainfall, increasing toward May",
    highlights: [
      "Rhododendron forests and spring flowers",
      "Comfortable weather for sightseeing",
      "Popular festival movement",
      "Excellent photography conditions",
    ],
    activities: ["Trekking", "Photography", "Cultural Tours", "Bird Watching", "Rafting"],
    imageCaption: "Spring Image",
    imageSrc: "/Bhutan Flower Show2.jpg",
    imageAlt: "Spring rhododendrons in Bhutan",
    copyrightName: "Scarlette DG",
  },
  {
    name: "Summer",
    months: "June to August",
    description:
      "Summer brings monsoon rain and turns Bhutan into a lush green landscape. While some trekking can be challenging, this is a peaceful time for cultural travel, photography, and travelers who prefer fewer crowds.",
    temperature: "Day: 20-30°C | Night: 15-20°C",
    rainfall: "Higher rainfall, especially in western valleys",
    highlights: [
      "Lush green landscapes and waterfalls",
      "Fewer visitors and quieter sightseeing",
      "Good value for hotels and tours",
      "Ideal for cultural and indoor experiences",
    ],
    activities: ["Cultural Tours", "Museum Visits", "Photography", "Local Experiences", "Rafting"],
    imageCaption: "Summer Image",
    imageSrc: "/Bhutan - Moshe Shai - 652.jpg",
    imageAlt: "Green summer valleys in Bhutan",
    copyrightName: "Moshe Shai",
  },
  {
    name: "Autumn",
    months: "September to November",
    description:
      "Autumn is the most popular travel season in Bhutan. Skies are often clearer, the weather is pleasant, major festivals take place, and mountain views are usually at their best.",
    temperature: "Day: 18-25°C | Night: 5-10°C",
    rainfall: "Minimal rainfall and mostly dry conditions",
    highlights: [
      "Clear Himalayan views",
      "Major festival season",
      "Excellent trekking conditions",
      "Harvest-season scenery",
    ],
    activities: ["Trekking", "Festival Tours", "Photography", "Outdoor Activities", "Rafting"],
    imageCaption: "Autumn Image",
    imageSrc: "/Snowman Race48.jpg",
    imageAlt: "Autumn mountain views in Bhutan",
    copyrightName: "Scarlette DG",
  },
  {
    name: "Winter",
    months: "December to February",
    description:
      "Winter is calm, crisp, and less crowded. High-altitude treks may be limited, but cultural tours, photography, hot stone baths, and black-necked crane viewing can be very rewarding.",
    temperature: "Day: 10-15°C | Night: -5-5°C",
    rainfall: "Dry weather with possible snow at higher elevations",
    highlights: [
      "Snow-capped mountain views",
      "Black-necked cranes in Phobjikha",
      "Fewer visitors and quieter routes",
      "Clear days for photography",
    ],
    activities: ["Bird Watching", "Cultural Tours", "Photography", "Hot Stone Baths", "Rafting"],
    imageCaption: "Winter Image",
    imageSrc: "/Phobjikha-valley-by-Alicia-Warner-34.jpg",
    imageAlt: "Winter mountain landscape in Bhutan",
    copyrightName: "Alicia Warner",
  },
];

const peakSeason = [
  "1. Most popular weather conditions",
  "2. Clearer mountain views",
  "3. Major festivals take place",
  "4. Many trekking routes are suitable",
  "5. Higher demand for hotels and guides",
  "6. Best booked several months in advance",
];

const offSeason = [
  "1. Better value and fewer crowds",
  "2. Lush green landscapes in summer",
  "3. Snow-capped mountain views in winter",
  "4. Some trekking routes may be limited",
  "5. Good for cultural and slower travel",
  "6. Unique experiences like black-necked crane watching",
];

const activitySeasons: ActivitySeason[] = [
  {
    name: "Trekking",
    description: "Best timing for high-altitude and scenic trekking routes.",
    seasons: ["Mar-May", "Sep-Nov"],
  },
  {
    name: "Festivals",
    description: "Experience vibrant Tshechu celebrations and community gatherings.",
    seasons: ["Mar-Apr", "Sep-Oct"],
  },
  {
    name: "Photography",
    description: "Clear light, flowers, valleys, festivals, and mountain views.",
    seasons: ["Mar-May", "Sep-Nov"],
  },
  {
    name: "Bird Watching",
    description: "Ideal timing for black-necked crane viewing and winter birding.",
    seasons: ["Nov-Feb"],
  },
  {
    name: "Mountain Views",
    description: "Clearest Himalayan panoramas and crisp skyline conditions.",
    seasons: ["Sep-Nov", "Mar-Apr"],
  },
  {
    name: "Flower Bloom",
    description: "Rhododendrons, magnolias, and spring wildflowers.",
    seasons: ["Mar-May"],
  },
];
