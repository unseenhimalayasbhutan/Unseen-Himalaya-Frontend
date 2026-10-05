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
    icon: Landmark,
    title: "Licensed Local Operator",
    text: "Plan with a Bhutan-based team that can show its business registration and operator documents.",
  },
  {
    icon: UsersRound,
    title: "Direct Planning",
    text: "Speak with the team arranging your hotels, guide, transport, documents, and daily route details.",
  },
  {
    icon: Compass,
    title: "Flexible Pace",
    text: "Itineraries are adjusted around arrival time, road distance, walking comfort, and what you care about most.",
  },
  {
    icon: Mountain,
    title: "Private Guide & Vehicle",
    text: "Travel with a licensed guide and dedicated vehicle instead of being pushed through a fixed group schedule.",
  },
  {
    icon: HeartHandshake,
    title: "Clear Ground Support",
    text: "Before arrival, we confirm key services and explain documents, payment timing, route limits, and local logistics.",
  },
  {
    icon: Star,
    title: "Better Value Choices",
    text: "We help match hotels, activities, guide language, and route choices to your travel style and budget.",
  },
];

const bottomFeatures: FeatureItem[] = [
  {
    icon: Compass,
    title: "Tell Us Your Pace",
    text: "We ask about dates, arrival time, walking comfort, hotel style, and must-see places before finalizing the route.",
  },
  {
    icon: UsersRound,
    title: "Match the Right Support",
    text: "We align guide language, vehicle size, hotel category, and activity level with the people actually travelling.",
  },
  {
    icon: Mountain,
    title: "Protect Unhurried Time",
    text: "We mark secondary stops as flexible so the main experiences have enough breathing room.",
  },
  {
    icon: Landmark,
    title: "Confirm the Details",
    text: "Written confirmations make inclusions, document steps, payment timing, and local contacts easy to check.",
  },
  {
    icon: Leaf,
    title: "Travel Responsibly",
    text: "Routes are planned with respect for local rules, sacred sites, communities, and Bhutan's environment.",
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
            Bhutan Trips Planned Around <span>Your Pace</span>
          </h2>

          <p className="description section-description">
            We turn standard routes into practical private journeys, with clearer
            planning, realistic days, and local support from enquiry to departure.
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
            <span>Bhutan-Based Planning</span>
          </div>

          <div className="stat-card">
            <strong>Tailor-Made</strong>
            <span>Route Adjustments</span>
          </div>

          <div className="stat-card">
            <strong>4 Years</strong>
            <span>Tourism Experience</span>
          </div>
        </div>

        <div className="center-btn">
          <Link href="/contact" className="discover-btn">
            Plan a Private Bhutan Trip
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="uh-guidebook-feature">
          <div className="uh-guidebook-layout">
            <div className="bottom-heading">
              <h2 className="section-title">How We Personalize the Route</h2>
              <p className="section-description">
                We keep the planning specific: who is travelling, how fast the
                days should move, what matters most, and what should stay flexible.
              </p>
            </div>

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
