"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle, Clock, MapPin, Sparkles } from "lucide-react";

type Destination = {
  image: string;
  title: string;
  text: string;
  highlight: string;
};

type TourPackage = {
  slug: string;
  image: string;
  tag: string;
  title: string;
  text: string;
  price: string;
  startingRate: number;
  duration: string;
  route: string;
  ideal: string;
};

const destinations: Destination[] = [
  {
    image: "/Buddha-Dordenma-Statue-by-Alicia-Warner-16.jpg",
    title: "Thimphu",
    text: "Explore Bhutan’s capital city, ancient monasteries, museums, markets, and modern Bhutanese life.",
    highlight: "Capital culture • Museums • Cafés • Monasteries",
  },
  {
    image: "/By Marcus Westberg _ Paro _ 2023_18.jpg",
    title: "Paro",
    text: "Visit the iconic Tiger’s Nest Monastery, beautiful valleys, sacred temples, and traditional villages.",
    highlight: "Tiger’s Nest • Valley views • Temples • Heritage",
  },
  {
    image: "/Haa by Marcus Westberg26.jpg",
    title: "Haa",
    text: "Discover a peaceful hidden valley known for its untouched landscapes, village life, and quiet mountain charm.",
    highlight: "Hidden valley • Slow travel • Local life • Mountain air",
  },
  {
    image: "/Punakha by Marcus Westberg29.jpg",
    title: "Punakha",
    text: "Experience the majestic Punakha Dzong, river valleys, suspension bridges, and warm scenic countryside.",
    highlight: "Dzong beauty • River valleys • Bridges • Scenic countryside",
  },
  {
    image: "/Phobjikha-valley-by-Alicia-Warner-56.jpg",
    title: "Gangtey",
    text: "Journey to the beautiful Phobjikha Valley, home to peaceful landscapes and the black-necked cranes.",
    highlight: "Phobjikha • Cranes • Nature • Serenity",
  },
];

const packages: TourPackage[] = [
  {
    slug: "3-day-paro-thimphu-paro",
    image: "/By Marcus Westberg _ Paro _ 2023_18.jpg",
    tag: "Short Escape",
    title: "3-Day Paro & Thimphu Essentials",
    text: "For travelers with limited time who still want Thimphu highlights and Tiger’s Nest.",
    price: "Nu. 25,910",
    startingRate: 25910,
    duration: "3 Days / 2 Nights",
    route: "Paro • Thimphu • Paro",
    ideal: "Short-stay travelers",
  },
  {
    slug: "5-day-classic-western-bhutan",
    image: "/Punakha by Marcus Westberg30.jpg",
    tag: "Classic Route",
    title: "5-Day Classic Western Bhutan",
    text: "A strong first-time route with Thimphu, Punakha, Dochula, Paro, and Tiger’s Nest.",
    price: "Nu. 44,859",
    startingRate: 44859,
    duration: "5 Days / 4 Nights",
    route: "Paro • Thimphu • Punakha • Paro",
    ideal: "First-time Bhutan travelers",
  },
  {
    slug: "8-day-punakha-phobjikha-depth",
    image: "/Phobjikha-valley-by-Alicia-Warner-56.jpg",
    tag: "Deeper Journey",
    title: "8-Day Punakha & Phobjikha In-Depth",
    text: "A fuller route with additional Punakha sightseeing and a scenic Phobjikha extension.",
    price: "Nu. 69,936",
    startingRate: 69936,
    duration: "8 Days / 7 Nights",
    route: "Paro • Thimphu • Punakha • Phobjikha • Paro",
    ideal: "Nature, culture, and slow discovery",
  },
];

const getImageSrc = (src: string): string => {
  if (!src) return "";
  if (src.startsWith("http")) return src;

  return src;
};

export function JourneysSection() {
  const [activeDestination, setActiveDestination] = useState(0);
  const [activePackage, setActivePackage] = useState(0);

  return (
    <section className="journey-section uh-journeys-section">
      <div className="uh-journeys-bg-orb uh-journeys-orb-one" aria-hidden="true" />
      <div className="uh-journeys-bg-orb uh-journeys-orb-two" aria-hidden="true" />

      <div className="journey-container uh-journeys-container">
        <div className="uh-journeys-heading">
          <div className="uh-journeys-kicker">
            <Sparkles aria-hidden="true" />
            <span>Destinations & Journeys</span>
          </div>

          <h2>Journeys Designed Around You</h2>

          <p>
            Discover handcrafted Bhutan travel experiences through Thimphu,
            Paro, Haa, Punakha, Gangtey, and other beautiful Himalayan
            destinations.
          </p>
        </div>

        <div className="uh-destination-switcher">
          {destinations.map((destination, index) => (
            <input
              key={destination.title}
              id={`uh-destination-${index + 1}`}
              className="uh-destination-radio"
              type="radio"
              name="uh-destination"
              checked={activeDestination === index}
              readOnly
            />
          ))}

          <div className="uh-destination-layout">
            <div className="uh-destination-preview-panels">
              {destinations.map((destination, index) => (
                <article
                  key={destination.title}
                  className={`uh-destination-preview uh-destination-preview-${
                    index + 1
                  }`}
                >
                  <div className="uh-destination-preview-media">
                    <Image
                      src={getImageSrc(destination.image)}
                      alt={`${destination.title} Bhutan`}
                      fill
                      sizes="(max-width: 960px) 100vw, 58vw"
                      className="uh-journey-image"
                    />
                  </div>

                  <div className="uh-destination-preview-badge">
                    Featured Destination
                  </div>

                  <div className="uh-destination-preview-content">
                    <span>Explore Bhutan</span>

                    <h3>{destination.title}</h3>

                    <p>{destination.text}</p>

                    <div className="uh-destination-preview-meta">
                      <MapPin aria-hidden="true" />
                      <strong>{destination.highlight}</strong>
                    </div>

                    <Link href="/cultural-tours" className="uh-journeys-link-btn">
                      Explore Destination
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div
              className="uh-destination-options"
              aria-label="Bhutan destinations"
            >
              {destinations.map((destination, index) => (
                <button
                  type="button"
                  key={destination.title}
                  className={`uh-destination-option uh-destination-option-${
                    index + 1
                  }`}
                  onClick={() => setActiveDestination(index)}
                  aria-pressed={activeDestination === index}
                >
                  <div className="uh-destination-option-thumb">
                    <Image
                      src={getImageSrc(destination.image)}
                      alt={`${destination.title} Bhutan`}
                      fill
                      sizes="112px"
                      className="uh-journey-image"
                    />
                  </div>

                  <div className="uh-destination-option-content">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{destination.title}</h3>
                    <p>{destination.text}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="uh-journeys-action-row">
          <Link href="/bhutan-tours" className="uh-journeys-btn-primary">
            Explore Destinations
            <ArrowRight aria-hidden="true" />
          </Link>

          <Link href="/optional-tours" className="uh-journeys-btn-secondary">
            Customize My Trip
          </Link>
        </div>

        <div className="uh-packages-heading">
          <div className="uh-journeys-kicker">
            <CheckCircle aria-hidden="true" />
            <span>Itinerary Library</span>
          </div>

          <h2>Ready Bhutan itineraries from short escapes to deeper journeys</h2>

          <p>
            Selected routes from the itinerary library, designed for guests who
            want clear duration, route, and travel-style options before enquiring.
          </p>
        </div>

        <div className="uh-package-switcher">
          {packages.map((pkg, index) => (
            <input
              key={pkg.title}
              id={`uh-package-${index + 1}`}
              className="uh-package-radio"
              type="radio"
              name="uh-package"
              checked={activePackage === index}
              readOnly
            />
          ))}

          <div className="uh-package-layout">
            <div className="uh-package-grid" aria-label="Curated Bhutan tours">
              {packages.map((pkg, index) => (
                <Link
                  key={pkg.title}
                  className={`uh-package-card uh-package-card-${index + 1}`}
                  href={`/cultural-tours#itinerary-${pkg.slug}`}
                  onMouseEnter={() => setActivePackage(index)}
                  onFocus={() => setActivePackage(index)}
                  aria-current={activePackage === index ? "true" : undefined}
                >
                  <div className="uh-package-card-image">
                    <Image
                      src={getImageSrc(pkg.image)}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 960px) 100vw, 33vw"
                      className="uh-journey-image"
                    />

                    <div className="uh-package-tag">{pkg.tag}</div>
                  </div>

                  <div className="tour-pro-image-rate uh-package-card-rate">
                    <strong>
                      Starting at Nu. {pkg.startingRate.toLocaleString("en-US")} + 5% GST
                    </strong>
                    <span>
                      The mentioned price is for a 3-star hotel (Standard Tour).
                      Hotels can be upgraded for Premium and Luxury packages.
                    </span>
                  </div>

                  <div className="uh-package-card-content">
                    <h3>{pkg.title}</h3>

                    <p>{pkg.text}</p>

                    <div className="uh-package-card-meta">
                      <span>
                        <Clock aria-hidden="true" />
                        {pkg.duration}
                      </span>

                      <span>
                        <MapPin aria-hidden="true" />
                        {pkg.route}
                      </span>

                      <span>{pkg.ideal}</span>
                    </div>

                    <div className="uh-package-card-footer">
                      <span>
                        View Itinerary
                        <ArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="uh-package-preview-panels">
              <article className="uh-package-preview is-active">
                <div className="uh-package-preview-text">
                  <span>Selected itinerary</span>
                  <h3>{packages[activePackage].title}</h3>
                  <p>{packages[activePackage].text}</p>
                </div>

                <div className="uh-package-preview-meta">
                  <div>
                    <small>Duration</small>
                    <strong>{packages[activePackage].duration}</strong>
                  </div>
                  <div>
                    <small>Route</small>
                    <strong>{packages[activePackage].route}</strong>
                  </div>
                  <Link
                    href={`/cultural-tours#itinerary-${packages[activePackage].slug}`}
                    className="uh-package-preview-btn"
                  >
                    Enquire
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
