"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Landmark,
  Leaf,
  Mountain,
  Star,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const features: FeatureItem[] = [
  {
    icon: Leaf,
    title: "Sustainably Crafted",
    text: "Our carefully curated experiences respect Bhutan's natural beauty.",
  },
  {
    icon: Landmark,
    title: "Deeply Rooted",
    text: "Our local guides share authentic stories, traditions, and local wisdom.",
  },
  {
    icon: Compass,
    title: "Culturally Immersive",
    text: "Connect deeply with Bhutanese culture, festivals, monasteries, and communities.",
  },
  {
    icon: Mountain,
    title: "Peaceful Exploration",
    text: "Discover serene landscapes, sacred valleys, and mindful travel experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Meaningful Travel",
    text: "Every journey leaves a positive impact on people, culture, and nature.",
  },
  {
    icon: Star,
    title: "Memories That Live",
    text: "Every path creates moments worth remembering for a lifetime.",
  },
];

const bottomFeatures: FeatureItem[] = [
  {
    icon: Compass,
    title: "Curated Journeys",
    text: "Personalized travel experiences designed for every explorer.",
  },
  {
    icon: UsersRound,
    title: "Local Experts",
    text: "Friendly Bhutan specialists with authentic knowledge and passion.",
  },
  {
    icon: Mountain,
    title: "Hidden Experiences",
    text: "Venture beyond the ordinary into Bhutan's hidden gems.",
  },
  {
    icon: Landmark,
    title: "Comfortable Stays",
    text: "Stay in handpicked accommodations with warm hospitality.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    text: "Travel responsibly while preserving Bhutan's environment.",
  },
];

const guidebookImages = [
  {
    src: "/MarcusWestbergBhutanHiRes-38.jpg",
    alt: "Bhutan mountain valley and monastery experience",
  },
  {
    src: "/Phobjikha-valley-by-Alicia-Warner-56.jpg",
    alt: "Phobjikha Valley hidden Bhutan landscape",
  },
];

export function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(0);
  const selectedFeature = features[activeFeature];

  return (
    <section className="why-section uh-whychoose-section">
      <div className="container">
        <div className="top-heading">
          <div className="mini-text section-eyebrow">WHY CHOOSE US</div>

          <h2 className="main-title section-title">
            A Kingdom That Values <span>What Matters</span>
          </h2>

          <p className="description section-description">
            Experience authentic Himalayan journeys crafted with sustainability,
            culture, comfort, and mindful travel at the heart of every adventure.
          </p>
        </div>

        <div className="uh-whychoose-switcher">
          {features.map((feature, index) => (
            <input
              key={feature.title}
              id={`uh-whychoose-feature-${index + 1}`}
              className="uh-whychoose-radio"
              type="radio"
              name="uh-whychoose-feature"
              checked={activeFeature === index}
              aria-hidden="true"
              tabIndex={-1}
              readOnly
            />
          ))}

          <div className="why-showcase uh-whychoose-showcase">
            <div className="showcase-left uh-whychoose-preview">
              <div className="showcase-badge">Unseen Himalayas Bhutan</div>

              <div className="uh-whychoose-preview-panels">
                <article
                  key={selectedFeature.title}
                  id="uh-whychoose-preview"
                  className={`uh-whychoose-preview-panel uh-whychoose-preview-panel-${
                    activeFeature + 1
                  } is-active`}
                  aria-live="polite"
                >
                  <h2>{selectedFeature.title}</h2>
                  <p>{selectedFeature.text}</p>
                </article>
              </div>

              <div className="feature-indicators uh-whychoose-indicators">
                {features.map((feature, index) => (
                  <button
                    type="button"
                    key={feature.title}
                    className={`indicator uh-whychoose-indicator uh-whychoose-indicator-${
                      index + 1
                    }`}
                    onClick={() => setActiveFeature(index)}
                    aria-pressed={activeFeature === index}
                    aria-controls="uh-whychoose-preview"
                    aria-label={`Show ${feature.title}`}
                  />
                ))}
              </div>
            </div>

            <div className="features-grid uh-whychoose-features-grid">
              {features.map((feature, index) => (
                <button
                  type="button"
                  key={feature.title}
                  className={`feature-card uh-whychoose-feature-card uh-whychoose-feature-card-${
                    index + 1
                  }`}
                  onClick={() => setActiveFeature(index)}
                  aria-pressed={activeFeature === index}
                  aria-controls="uh-whychoose-preview"
                >
                  <div className="feature-icon">
                    <feature.icon aria-hidden="true" />
                  </div>
                  <div className="feature-title">{feature.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <strong>100%</strong>
            <span>Local Expertise</span>
          </div>

          <div className="stat-card">
            <strong>Tailor-Made</strong>
            <span>Private Journeys</span>
          </div>

          <div className="stat-card">
            <strong>Hidden</strong>
            <span>Bhutan Experiences</span>
          </div>
        </div>

        <div className="center-btn">
          <Link href="/bhutan-tours" className="discover-btn">
            Explore Photography Tours
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="uh-guidebook-editorial">
          <div className="bottom-heading">
            <h2 className="section-title">Travel Beyond the Guidebooks</h2>
            <p className="section-description">
              Explore hidden stories, sacred valleys, meaningful encounters, and
              unforgettable Himalayan adventures.
            </p>
          </div>

          <div className="uh-guidebook-layout">
            <div className="uh-guidebook-media" aria-hidden="true">
              {guidebookImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`uh-guidebook-image uh-guidebook-image-${
                    index + 1
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 36vw"
                  />
                </div>
              ))}
            </div>

            <div className="bottom-grid">
              {bottomFeatures.map((feature) => (
                <div key={feature.title} className="bottom-card">
                  <div className="bottom-icon">
                    <feature.icon aria-hidden="true" />
                  </div>

                  <div>
                    <div className="bottom-title">{feature.title}</div>
                    <div className="bottom-text">{feature.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
