"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { getFallbackImage } from "../components/imageFallbacks";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Feather,
  Flag,
  Heart,
  Landmark,
  Leaf,
  MapPin,
  Mountain,
  Route,
  ShieldCheck,
  Smile,
  Sparkles,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

type CreditPosition = "overlay" | "below";

type ImageAsset = {
  src: string;
  alt: string;
  label: string;
  credit?: string;
  creditHref?: string;
  creditPosition?: CreditPosition;
};

type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type StatItem = {
  value: string;
  label: string;
};

type SustainablePoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type VisitReason = {
  icon: string;
  title: string;
  kicker: string;
  description: string;
  highlights: string[];
  image: ImageAsset;
};

type TravelStyle = {
  icon: string;
  title: string;
  bestFor: string;
  description: string;
  routeIdea: string;
  experiences: string[];
  image: ImageAsset;
};

type SignatureMoment = {
  number: string;
  title: string;
  description: string;
  image: ImageAsset;
};

function ImageCredit({ image }: { image: ImageAsset }) {
  const credit = image.credit?.trim();
  const creditHref = image.creditHref?.trim();

  if (!credit) return null;

  if (creditHref && /^https?:\/\//i.test(creditHref)) {
    return (
      <a
        href={creditHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open copyright source for ${image.label}`}
      >
        © {credit}
      </a>
    );
  }

  return <>© {credit}</>;
}

function ImageSlot({
  image,
  className = "",
}: {
  image: ImageAsset;
  className?: string;
}) {
  const resolvedSrc = image.src.trim() || getFallbackImage(image.label);
  const hasCredit = Boolean(image.credit?.trim());
  const creditPosition = image.creditPosition ?? "overlay";

  return (
    <figure
      className={[
        "whyvisit-pro-image-slot",
        "whyvisit-pro-image-slot-has-image",
        creditPosition === "below" ? "whyvisit-pro-image-credit-below-mode" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="whyvisit-pro-image-frame">
        <img
          src={resolvedSrc}
          alt={image.alt}
          className="whyvisit-pro-image"
          loading="lazy"
        />

        {hasCredit && creditPosition === "overlay" && (
          <figcaption className="whyvisit-pro-image-credit whyvisit-pro-image-credit-overlay">
            <ImageCredit image={image} />
          </figcaption>
        )}
      </div>

      {hasCredit && creditPosition === "below" && (
        <figcaption className="whyvisit-pro-image-credit whyvisit-pro-image-credit-below">
          <ImageCredit image={image} />
        </figcaption>
      )}
    </figure>
  );
}

export default function WhyVisitBhutanPage() {
  const [activeReason, setActiveReason] = useState(0);
  const [activeStyle, setActiveStyle] = useState(0);
  const [activeMoment, setActiveMoment] = useState(0);

  return (
    <>
      <Header />

      <main className="whyvisit-pro-page">
        {/* Hero */}
        <section className="whyvisit-pro-hero">
          <div className="whyvisit-pro-hero-bg" aria-hidden="true" />

          <div className="container">
            <div className="whyvisit-pro-hero-grid">
              <div className="whyvisit-pro-hero-content">
                <div className="whyvisit-pro-eyebrow">
                  <Sparkles aria-hidden />
                  <span>Why Visit Bhutan</span>
                </div>

                <h1 className="whyvisit-pro-hero-title">
                  Bhutan is not just a destination. It is a different way of
                  experiencing the world.
                </h1>

                <p className="whyvisit-pro-hero-description">
                  From sacred monasteries and living traditions to quiet valleys,
                  mountain landscapes, warm people, and a deeply respectful pace
                  of travel, Bhutan offers a journey that feels meaningful long
                  after you return home.
                </p>

                <div className="whyvisit-pro-hero-actions">
                  <Link href="/contact" className="whyvisit-pro-btn-primary">
                    Start Planning
                    <ArrowRight aria-hidden />
                  </Link>

                  <Link href="/cultural-tours" className="whyvisit-pro-btn-secondary">
                    Explore Bhutan Tours
                  </Link>
                </div>

                <div className="whyvisit-pro-hero-trust">
                  {heroTrust.map((item) => (
                    <div key={item} className="whyvisit-pro-hero-trust-item">
                      <CheckCircle aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="whyvisit-pro-hero-card">
                <div className="whyvisit-pro-hero-image-wrap">
                  <ImageSlot image={heroImage} />
                </div>

                <div className="whyvisit-pro-hero-card-content">
                  <p className="whyvisit-pro-card-kicker">Signature Feeling</p>
                  <h2>A journey shaped by culture, nature, and calm.</h2>
                  <p>
                    Bhutan is ideal for travelers who want more than sightseeing:
                    deeper culture, slower routes, meaningful moments, and a
                    genuine Himalayan atmosphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="whyvisit-pro-quick-strip">
          <div className="container">
            <div className="whyvisit-pro-quick-grid">
              {quickStats.map((stat) => (
                <div key={stat.label} className="whyvisit-pro-quick-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Explorer */}
        <section className="whyvisit-pro-section whyvisit-pro-section-white whyvisit-pro-explorer-section">
          <div className="container">
            <div className="whyvisit-pro-section-header whyvisit-pro-section-header-center">
              <span className="whyvisit-pro-section-line" />
              <span className="whyvisit-pro-section-label">Bhutan Experience Explorer</span>
              <span className="whyvisit-pro-section-line" />
            </div>

            <h2 className="whyvisit-pro-section-title whyvisit-pro-center-title">
              Why Bhutan feels different from ordinary travel.
            </h2>

            <p className="whyvisit-pro-section-subtitle">
              Click through the cards to see what makes Bhutan a rare Himalayan
              journey: not only what you see, but how the country makes you feel.
            </p>

            <div className="uh-whyvisit-reason-switcher">
              {visitReasons.map((reason, index) => (
                <input
                  key={reason.title}
                  id={`uh-whyvisit-reason-${index + 1}`}
                  className="uh-whyvisit-reason-radio"
                  type="radio"
                  name="uh-whyvisit-reason"
                  checked={activeReason === index}
                  readOnly
                />
              ))}

              <div className="whyvisit-pro-explorer-grid uh-whyvisit-reason-layout">
                <div className="whyvisit-pro-explorer-panel uh-whyvisit-reason-panel-stack">
                  {visitReasons.map((reason, index) => (
                    <article
                      key={reason.title}
                      className={`uh-whyvisit-reason-panel uh-whyvisit-reason-panel-${index + 1}`}
                    >
                      <ImageSlot
                        image={reason.image}
                        className="whyvisit-pro-explorer-image"
                      />

                      <div className="whyvisit-pro-explorer-content">
                        <span>{reason.kicker}</span>
                        <h3>{reason.title}</h3>
                        <p>{reason.description}</p>

                        <div className="whyvisit-pro-explorer-tags">
                          {reason.highlights.map((item) => (
                            <small key={item}>{item}</small>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="whyvisit-pro-explorer-tabs uh-whyvisit-reason-tabs">
                  {visitReasons.map((reason, index) => (
                    <button
                      type="button"
                      key={reason.title}
                      className={`whyvisit-pro-explorer-tab uh-whyvisit-reason-tab uh-whyvisit-reason-tab-${index + 1}`}
                      onClick={() => setActiveReason(index)}
                      aria-pressed={activeReason === index}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{reason.title}</strong>
                        <small>{reason.kicker}</small>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Reasons */}
        <section className="whyvisit-pro-section whyvisit-pro-section-warm">
          <div className="container">
            <div className="whyvisit-pro-section-header whyvisit-pro-section-header-center">
              <span className="whyvisit-pro-section-line" />
              <span className="whyvisit-pro-section-label">Top Reasons</span>
              <span className="whyvisit-pro-section-line" />
            </div>

            <h2 className="whyvisit-pro-section-title whyvisit-pro-center-title">
              What makes Bhutan extraordinary.
            </h2>

            <p className="whyvisit-pro-section-subtitle">
              Bhutan offers a rare combination of living culture, protected
              landscapes, spiritual depth, soft adventure, thoughtful tourism,
              and warm local hospitality.
            </p>

            <div className="whyvisit-pro-reasons-grid">
              {topReasons.map((reason) => (
                <article key={reason.title} className="whyvisit-pro-reason-card">
                  <div className="whyvisit-pro-reason-icon">
                    <reason.icon aria-hidden />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Style Selector */}
        <section className="whyvisit-pro-section whyvisit-pro-section-white whyvisit-pro-style-section">
          <div className="container">
            <div className="whyvisit-pro-section-header whyvisit-pro-section-header-center">
              <span className="whyvisit-pro-section-line" />
              <span className="whyvisit-pro-section-label">Choose Your Travel Style</span>
              <span className="whyvisit-pro-section-line" />
            </div>

            <h2 className="whyvisit-pro-section-title whyvisit-pro-center-title">
              Bhutan can be shaped around the kind of traveler you are.
            </h2>

            <div className="uh-whyvisit-style-switcher">
              {travelStyles.map((style, index) => (
                <input
                  key={style.title}
                  id={`uh-whyvisit-style-${index + 1}`}
                  className="uh-whyvisit-style-radio"
                  type="radio"
                  name="uh-whyvisit-style"
                  checked={activeStyle === index}
                  readOnly
                />
              ))}

              <div className="whyvisit-pro-style-grid uh-whyvisit-style-layout">
                <div className="whyvisit-pro-style-buttons uh-whyvisit-style-buttons">
                  {travelStyles.map((style, index) => (
                    <button
                      type="button"
                      key={style.title}
                      className={`whyvisit-pro-style-button uh-whyvisit-style-button uh-whyvisit-style-button-${index + 1}`}
                      onClick={() => setActiveStyle(index)}
                      aria-pressed={activeStyle === index}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{style.title}</strong>
                        <small>{style.bestFor}</small>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="uh-whyvisit-style-card-stack">
                  {travelStyles.map((style, index) => (
                    <article
                      key={style.title}
                      className={`whyvisit-pro-style-card uh-whyvisit-style-card uh-whyvisit-style-card-${index + 1}`}
                    >
                      <div className="whyvisit-pro-style-media">
                        <ImageSlot image={style.image} />
                      </div>

                      <div className="whyvisit-pro-style-content">
                        <span className="whyvisit-pro-style-kicker">
                          {style.bestFor}
                        </span>
                        <h3>{style.title}</h3>
                        <p>{style.description}</p>

                        <div className="whyvisit-pro-route-box">
                          <Route aria-hidden />
                          <span>{style.routeIdea}</span>
                        </div>

                        <div className="whyvisit-pro-style-list">
                          {style.experiences.map((item) => (
                            <div key={item}>
                              <ChevronRight aria-hidden />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

       
        {/* Way of Life */}
        <section className="whyvisit-pro-section whyvisit-pro-section-white">
          <div className="container">
            <div className="whyvisit-pro-split-grid">
              <div className="whyvisit-pro-split-content">
                <div className="whyvisit-pro-section-header">
                  <span className="whyvisit-pro-section-line" />
                  <span className="whyvisit-pro-section-label">Way of Life</span>
                </div>

                <h2 className="whyvisit-pro-section-title">
                  A culture where happiness, respect, and community still matter.
                </h2>

                <p className="whyvisit-pro-section-text">
                  Bhutan&apos;s idea of progress is deeply connected to wellbeing,
                  culture, environment, and community. Travelers often feel this
                  in small moments: a quiet conversation, a temple visit, a local
                  meal, or the peaceful rhythm of mountain life.
                </p>

                <p className="whyvisit-pro-section-text">
                  This is why many visitors describe Bhutan as a place that feels
                  calm, sincere, and deeply human. The journey is not only about
                  reaching the next attraction; it is also about noticing the
                  atmosphere between places.
                </p>

                <div className="whyvisit-pro-stat-grid">
                  {wayOfLifeStats.map((stat) => (
                    <div key={stat.label} className="whyvisit-pro-stat-card">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="whyvisit-pro-image-panel">
                <ImageSlot image={wayOfLifeImage} />
              </div>
            </div>
          </div>
        </section>

        

        {/* Signature Moments */}
        <section className="whyvisit-pro-section whyvisit-pro-section-white whyvisit-pro-moments-section">
          <div className="container">
            <div className="whyvisit-pro-section-header whyvisit-pro-section-header-center">
              <span className="whyvisit-pro-section-line" />
              <span className="whyvisit-pro-section-label">Signature Moments</span>
              <span className="whyvisit-pro-section-line" />
            </div>

            <h2 className="whyvisit-pro-section-title whyvisit-pro-center-title">
              The little moments guests remember most.
            </h2>

            <div className="uh-whyvisit-moment-switcher">
              {signatureMoments.map((moment, index) => (
                <input
                  key={moment.title}
                  id={`uh-whyvisit-moment-${index + 1}`}
                  className="uh-whyvisit-moment-radio"
                  type="radio"
                  name="uh-whyvisit-moment"
                  checked={activeMoment === index}
                  readOnly
                />
              ))}

              <div className="whyvisit-pro-moments-grid uh-whyvisit-moment-layout">
                <div className="whyvisit-pro-moment-preview uh-whyvisit-moment-preview-stack">
                  {signatureMoments.map((moment, index) => (
                    <article
                      key={moment.title}
                      className={`uh-whyvisit-moment-panel uh-whyvisit-moment-panel-${index + 1}`}
                    >
                      <ImageSlot image={moment.image} />
                      <div className="whyvisit-pro-moment-preview-content">
                        <span>{moment.number}</span>
                        <h3>{moment.title}</h3>
                        <p>{moment.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="whyvisit-pro-moment-list uh-whyvisit-moment-list">
                  {signatureMoments.map((moment, index) => (
                    <button
                      type="button"
                      key={moment.title}
                      className={`whyvisit-pro-moment-button uh-whyvisit-moment-button uh-whyvisit-moment-button-${index + 1}`}
                      onClick={() => setActiveMoment(index)}
                      aria-pressed={activeMoment === index}
                    >
                      <span>{moment.number}</span>
                      <div>
                        <strong>{moment.title}</strong>
                        <small>{moment.description}</small>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Split */}
        <section className="whyvisit-pro-section whyvisit-pro-section-warm">
          <div className="container">
            <div className="whyvisit-pro-split-grid whyvisit-pro-split-grid-reverse">
              <div className="whyvisit-pro-image-panel">
                <ImageSlot image={cultureImage} />
              </div>

              <div className="whyvisit-pro-split-content">
                <div className="whyvisit-pro-section-header">
                  <span className="whyvisit-pro-section-line" />
                  <span className="whyvisit-pro-section-label">Living Culture</span>
                </div>

                <h2 className="whyvisit-pro-section-title">
                  Culture that is alive, visible, and deeply respected.
                </h2>

                <p className="whyvisit-pro-section-text">
                  In Bhutan, heritage is not only displayed for visitors. It is
                  part of daily life: clothing, architecture, festivals, prayer
                  flags, monasteries, family rituals, and community values.
                </p>

                <div className="whyvisit-pro-cultural-list">
                  {culturalHighlights.map((item) => (
                    <div key={item} className="whyvisit-pro-cultural-item">
                      <ChevronRight aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Travel */}
        <section className="whyvisit-pro-responsible">
          <div className="container">
            <div className="whyvisit-pro-responsible-content">
              <div className="whyvisit-pro-section-header whyvisit-pro-section-header-center">
                <span className="whyvisit-pro-section-line" />
                <span className="whyvisit-pro-section-label">
                  Responsible Travel
                </span>
                <span className="whyvisit-pro-section-line" />
              </div>

              <h2>Travel that supports the place you came to see.</h2>
              <p>
                A well-planned Bhutan journey should respect culture, support
                local services, protect the guest experience, and encourage
                mindful movement through sacred and natural spaces.
              </p>
            </div>

            <div className="whyvisit-pro-sustainable-grid">
              {sustainablePoints.map((point) => (
                <article key={point.title} className="whyvisit-pro-sustainable-card">
                  <div className="whyvisit-pro-sustainable-icon">
                    <point.icon aria-hidden />
                  </div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
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
  Replace any empty src value below with your real image path later.

  Example with clickable copyright link:
  image: {
    src: "/images/why-visit/tigers-nest.jpg",
    alt: "Tiger's Nest Monastery in Bhutan",
    label: "Tiger's Nest Image",
    credit: "Unseen Himalayas Bhutan / Photographer Name",
    creditHref: "https://example.com/photo-source",
    creditPosition: "overlay",
  }

  Use creditPosition: "below" when you want the copyright text below the image.
*/

const heroImage: ImageAsset = {
  src: "/IMG_20231021_170519.jpg",
  alt: "Scenic Bhutan landscape",
  label: "Hero Image",
  credit: "",
  creditHref: "",
  creditPosition: "overlay",
};

const wayOfLifeImage: ImageAsset = {
  src: "MarcusWestbergBhutanHiRes-6.jpg",
  alt: "Bhutanese way of life",
  label: "Way of Life Image",
  credit: "Scarlette DG",
  creditHref: "Scarlette DG",
  creditPosition: "below",
};

const cultureImage: ImageAsset = {
  src: "/parofest4.jpg",
  alt: "Bhutan cultural festival or monastery",
  label: "Culture Image",
  credit: "Scarlette DG",
  creditHref: "Scarlette DG",
  creditPosition: "overlay",
};

const heroTrust = [
  "Culture-rich journeys",
  "Peaceful Himalayan landscapes",
  "Local insight and careful planning",
];

const quickStats: StatItem[] = [
  { value: "70%+", label: "Forest coverage" },
  { value: "GNH", label: "Wellbeing philosophy" },
  { value: "USD 100", label: "Current SDF per night" },
  { value: "20", label: "Dzongkhags to explore" },
];

const visitReasons: VisitReason[] = [
  {
    icon: "🕊️",
    title: "Peaceful Atmosphere",
    kicker: "Calm travel rhythm",
    description:
      "Bhutan feels peaceful because the experience is not rushed. Scenic drives, temple visits, local meals, and valley walks allow guests to slow down and notice the country deeply.",
    highlights: ["Slow travel", "Mountain calm", "Less rushed itineraries"],
    image: {
      src: "/2022-10-01 11.35.59.jpg",
      alt: "Peaceful Bhutan valley",
      label: "Peaceful Valley Image",
      credit: "Scarlette DG",
      creditHref: "Scarlette DG",
      creditPosition: "overlay",
    },
  },
  {
    icon: "🏯",
    title: "Living Spiritual Culture",
    kicker: "Monasteries and rituals",
    description:
      "Buddhist culture is visible through prayer flags, butter lamps, dzongs, monks, festivals, stupas, and everyday gestures of respect.",
    highlights: ["Dzongs", "Prayer flags", "Temple etiquette"],
    image: {
      src: "/MarcusBhutan2023_HR111.jpg",
      alt: "Bhutan monastery and prayer flags",
      label: "Spiritual Culture Image",
      credit: "Carissa Nimah",
      creditHref: "Carissa Nimah",
      creditPosition: "overlay",
    },
  },
  {
    icon: "🌲",
    title: "Nature With Purpose",
    kicker: "Forests and conservation",
    description:
      "Bhutan protects its forests and landscapes as part of national identity. For travelers, this creates a journey filled with fresh air, forests, rivers, birds, and mountain scenery.",
    highlights: ["Protected forests", "Carbon-conscious", "Biodiversity"],
    image: {
      src: "/MarcusBhutan2023_HR113.jpg",
      alt: "Bhutan forest landscape",
      label: "Protected Nature Image",
      credit: "Carissa Nimah",
      creditHref: "Carissa Nimah",
      creditPosition: "overlay",
    },
  },
  {
    icon: "🤝",
    title: "Human Connection",
    kicker: "Warm local encounters",
    description:
      "Many visitors remember the people most: guides, drivers, hosts, monks, farmers, artisans, and families who make Bhutan feel personal rather than commercial.",
    highlights: ["Local guides", "Village life", "Hospitality"],
    image: {
      src: "/Dochula by Marcus Westberg69.jpg",
      alt: "Bhutanese local hospitality",
      label: "Local Connection Image",
      credit: "Carissa Nimah",
      creditHref: "Carissa Nimah",
      creditPosition: "below",
    },
  },
];

const topReasons: IconCard[] = [
  {
    icon: Smile,
    title: "A Different Travel Philosophy",
    description:
      "Bhutan is known for valuing wellbeing, culture, environment, and balanced development through the idea of Gross National Happiness.",
  },
  {
    icon: Leaf,
    title: "Nature With Purpose",
    description:
      "Protected valleys, forests, rivers, and mountain landscapes make Bhutan feel calm, clean, and deeply refreshing.",
  },
  {
    icon: Landmark,
    title: "Living Buddhist Culture",
    description:
      "Monasteries, dzongs, prayer flags, festivals, and daily rituals are still part of Bhutanese life, not just tourist displays.",
  },
  {
    icon: Mountain,
    title: "Himalayan Scenery",
    description:
      "From dramatic cliffs to peaceful valleys and high passes, Bhutan offers landscapes that feel both powerful and intimate.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and Welcoming",
    description:
      "Travelers often value Bhutan for its calm atmosphere, warm hospitality, careful planning, and respectful pace.",
  },
  {
    icon: Award,
    title: "Distinctive Identity",
    description:
      "Architecture, dress, language, food, festivals, and customs give Bhutan a strong and memorable character.",
  },
  {
    icon: Feather,
    title: "Rare Wildlife & Birdlife",
    description:
      "Bhutan is known for black-necked cranes, takin, rich birdlife, alpine species, and protected habitats across different elevations.",
  },
  {
    icon: Clock,
    title: "A Slower Kind of Luxury",
    description:
      "The real luxury of Bhutan is time: space to breathe, fewer distractions, thoughtful service, and meaningful experiences.",
  },
  {
    icon: BookOpen,
    title: "Stories Behind Every Place",
    description:
      "Every valley, temple, bridge, mountain pass, and monastery has legends, spiritual meaning, or local history worth discovering.",
  },
];

const travelStyles: TravelStyle[] = [
  {
    icon: "🏯",
    title: "Culture Seeker",
    bestFor: "Best for heritage lovers",
    description:
      "A culture-focused Bhutan trip is ideal for guests who want monasteries, dzongs, festivals, village life, crafts, architecture, and local stories.",
    routeIdea: "Thimphu • Punakha • Paro with optional festival timing",
    experiences: [
      "Visit active dzongs and monasteries",
      "Learn basic temple etiquette",
      "Explore traditional arts, crafts, and local markets",
      "Add a Tshechu festival when dates match",
    ],
    image: {
      src: "/Phobjika by Matt Dutile1.jpg",
      alt: "Bhutan cultural journey",
      label: "Culture Travel Style Image",
      credit: "Carissa Nimah",
      creditHref: "Carissa Nimah",
      creditPosition: "overlay",
    },
  },
  {
    icon: "🌲",
    title: "Nature Lover",
    bestFor: "Best for landscapes and calm",
    description:
      "A nature-focused journey highlights Bhutan's valleys, forests, rivers, passes, birds, mountain views, and peaceful countryside routes.",
    routeIdea: "Paro • Haa • Punakha • Gangtey / Phobjikha",
    experiences: [
      "Scenic drives through high mountain passes",
      "Valley walks and photography stops",
      "Black-necked crane landscapes in season",
      "Nature lodges and quiet village stays",
    ],
    image: {
      src: "/Dochula by Marcus Westberg63.jpg",
      alt: "Bhutan nature journey",
      label: "Nature Travel Style Image",
      credit: "Carissa Nimah",
      creditHref: "Carissa Nimah",
      creditPosition: "overlay",
    },
  },
  {
    icon: "🥾",
    title: "Soft Adventurer",
    bestFor: "Best for active travelers",
    description:
      "Bhutan is excellent for guests who want activity without turning the entire trip into a hard expedition.",
    routeIdea: "Paro hikes • Dochula • Punakha trails • optional Haa extension",
    experiences: [
      "Tiger's Nest hike with proper pacing",
      "Short nature trails and village walks",
      "Suspension bridges and river valleys",
      "Optional biking, rafting, or longer hikes",
    ],
    image: {
      src: "/Dochula by Marcus Westberg62.jpg",
      alt: "Bhutan hiking and soft adventure",
      label: "Soft Adventure Image",
      credit: "Carissa Nimah",
      creditHref: "Carissa Nimah",
      creditPosition: "overlay",
    },
  },
  {
    icon: "🧘",
    title: "Spiritual Traveler",
    bestFor: "Best for reflection and meaning",
    description:
      "A spiritual Bhutan trip focuses on monasteries, meditation spaces, sacred valleys, prayer rituals, and peaceful pacing.",
    routeIdea: "Thimphu • Punakha • Phobjikha • Paro",
    experiences: [
      "Quiet monastery visits",
      "Butter lamp offerings where appropriate",
      "Mindful valley stays and slow mornings",
      "Learning the meaning behind sacred sites",
    ],
    image: {
      src: "/Ben-Richards-Tourism-Bhutan-066.jpg",
      alt: "Bhutan spiritual journey",
      label: "Spiritual Travel Style Image",
      credit: "Carissa Nimah",
      creditHref: "Carissa Nimah",
      creditPosition: "below",
    },
  },
];

const wayOfLifeStats: StatItem[] = [
  { value: "GNH ", label: "Wellbeing philosophy" },
  { value: "Local ", label: "Community-centered life" },
  { value: "Sacred ", label: "Monasteries and traditions" },
  { value: "Calm ", label: "Slow and mindful travel" },
];

const signatureMoments: SignatureMoment[] = [
  {
    number: "01",
    title: "First sight of Tiger's Nest",
    description:
      "The cliffside monastery appears through the trees, turning the hike into a moment of anticipation and wonder.",
    image: {
      src: "/thedronebook-TourismBoardBhutan-200A6604.jpg",
      alt: "Tiger's Nest Monastery Bhutan",
      label: "Tiger's Nest Moment Image",
      credit: "www.thedronebook.com",
      creditHref: "www.thedronebook.com",
      creditPosition: "overlay",
    },
  },
  {
    number: "02",
    title: "Prayer flags on a mountain pass",
    description:
      "High passes like Dochula show Bhutan's spiritual atmosphere through wind, flags, clouds, and mountain views.",
    image: {
      src: "/Ben-Richards-Tourism-Bhutan-017.jpg",
      alt: "Bhutan prayer flags on a mountain pass",
      label: "Prayer Flags Moment Image",
      credit: "Carissa Nimah",
      creditHref: "Carissa Nimah",
      creditPosition: "overlay",
    },
  },
  {
    number: "03",
    title: "Festival masks and sacred dances",
    description:
      "A Tshechu festival brings together community, music, color, devotion, and centuries-old Buddhist symbolism.",
    image: {
      src: "/Gentle eyes behind a wrathful mask.jpg",
      alt: "Bhutan festival mask dance",
      label: "Festival Moment Image",
      credit: "Scarlette DG",
      creditHref: "Scarlette DG",
      creditPosition: "below",
    },
  },
  {
    number: "04",
    title: "A quiet farmhouse meal",
    description:
      "Simple hospitality, local food, and warm conversation often become some of the most personal memories of Bhutan.",
    image: {
      src: "/Homestay 3.jpg",
      alt: "Bhutan farmhouse meal",
      label: "Farmhouse Meal Moment Image",
      credit: "Carissa Nimah",
      creditHref: "Carissa Nimah",
      creditPosition: "overlay",
    },
  },
];

const culturalHighlights = [
  "Monks in crimson robes walking through monastery courtyards",
  "Prayer flags fluttering across mountain passes",
  "Traditional dress worn with pride in everyday life",
  "Butter lamps glowing inside sacred temples",
  "Festivals where faith, community, music, and dance come together",
  "Traditional houses, dzongs, and painted details that make each valley feel distinct",
  "Archery matches with singing, cheering, and friendly competition",
];

const sustainablePoints: SustainablePoint[] = [
  {
    icon: Leaf,
    title: "Respect for Nature",
    description:
      "We encourage routes and travel behavior that respect Bhutan's forests, valleys, rivers, wildlife, and mountain spaces.",
  },
  {
    icon: Users,
    title: "Local Value",
    description:
      "A thoughtful itinerary supports local guides, drivers, hotels, restaurants, artisans, farmers, and community-based experiences.",
  },
  {
    icon: Heart,
    title: "Cultural Sensitivity",
    description:
      "Guests are guided with care around monastery etiquette, photography, dress, festivals, and local customs.",
  },
  {
    icon: MapPin,
    title: "Better Pacing",
    description:
      "Bhutan's mountain roads reward realistic timing, scenic stops, and a route that does not rush guests from place to place.",
  },
  {
    icon: Utensils,
    title: "Meaningful Local Meals",
    description:
      "Food experiences can support small restaurants, farms, farmhouse hosts, and authentic local hospitality.",
  },
  {
    icon: Flag,
    title: "Respectful Tourism Model",
    description:
      "Bhutan's tourism approach is designed to protect culture, nature, and the quality of the visitor experience.",
  },
];
