"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Landmark,
  Leaf,
  Mountain,
  Sparkles,
  Star,
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
    icon: Sparkles,
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

export function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="why-section uh-whychoose-section">
      <div className="container">
        <div className="top-heading">
          <div className="mini-text">WHY CHOOSE US</div>

          <h2 className="main-title">
            A Kingdom That Values <span>What Matters</span>
          </h2>

          <p className="description">
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
              readOnly
            />
          ))}

          <div className="why-showcase uh-whychoose-showcase">
            <div className="showcase-left uh-whychoose-preview">
              <div className="showcase-badge">Unseen Himalayas</div>

              <div className="uh-whychoose-preview-panels">
                {features.map((feature, index) => (
                  <article
                    key={feature.title}
                    className={`uh-whychoose-preview-panel uh-whychoose-preview-panel-${
                      index + 1
                    }`}
                  >
                    <h2>{feature.title}</h2>
                    <p>{feature.text}</p>
                  </article>
                ))}
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
                  aria-label={feature.title}
                >
                  <div className="feature-icon">
                    <feature.icon aria-hidden="true" />
                  </div>
                  <div className="feature-title">{feature.title}</div>
                  <div className="feature-text">{feature.text}</div>
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

        <div className="bottom-heading">
          <h2>Travel Beyond the Guidebooks</h2>
          <p>
            Explore hidden stories, sacred valleys, meaningful encounters, and
            unforgettable Himalayan adventures.
          </p>
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
    </section>
  );
}
