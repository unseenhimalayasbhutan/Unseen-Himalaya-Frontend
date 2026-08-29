"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Camera,
  CheckCircle,
  FileText,
  Map,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

type TravelStep = {
  icon: LucideIcon;
  title: string;
  text: string;
  number: string;
};

const steps: TravelStep[] = [
  {
    icon: MessageCircle,
    title: "Tell Us Your Ideal Trip",
    text: "Share your travel preferences, interests, pace, comfort level, and dream Bhutan experiences.",
    number: "1",
  },
  {
    icon: Map,
    title: "We Design Your Itinerary",
    text: "Our Bhutan experts craft a personalized route with culture, nature, comfort, and hidden gems.",
    number: "2",
  },
  {
    icon: FileText,
    title: "We Handle The Rest",
    text: "Permits, hotels, transport, guides, timing, and local arrangements are managed smoothly.",
    number: "3",
  },
  {
    icon: Camera,
    title: "Enjoy Bhutan",
    text: "Arrive with confidence and experience the Kingdom of Happiness without stress.",
    number: "4",
  },
];

export function TravelInfo() {
  const [activeStep, setActiveStep] = useState(0);
  const selectedStep = steps[activeStep];

  return (
    <section className="travel-info-section uh-travel-section">
      <div className="uh-travel-bg-orb uh-travel-orb-one" aria-hidden="true" />
      <div className="uh-travel-bg-orb uh-travel-orb-two" aria-hidden="true" />

      <div className="container uh-travel-container">
        <div className="uh-travel-heading">
          <div className="uh-travel-kicker section-eyebrow">
            <CheckCircle aria-hidden="true" />
            <span>How It Works</span>
          </div>

          <h2 className="section-title">Traveling to Bhutan, Made Simple</h2>

          <p className="section-description">
            From your first inquiry to your final mountain view, we make every
            step clear, personal, and effortless.
          </p>
        </div>

        <div className="uh-travel-switcher">
          {steps.map((step, index) => (
            <input
              key={step.title}
              id={`uh-travel-step-${index + 1}`}
              className="uh-travel-radio"
              type="radio"
              name="uh-travel-step"
              checked={activeStep === index}
              aria-hidden="true"
              tabIndex={-1}
              readOnly
            />
          ))}

          <div className="uh-travel-layout">
            <div className="uh-travel-panel-wrap">
              {(() => {
                const Icon = selectedStep.icon;
                const progressValue = Math.round(
                  ((activeStep + 1) / steps.length) * 100
                );

                return (
                  <article
                    key={selectedStep.title}
                    id="uh-travel-panel"
                    className={`uh-travel-panel uh-travel-panel-${
                      activeStep + 1
                    } is-active`}
                    aria-live="polite"
                  >
                    <div className="uh-travel-panel-top">
                      <div className="uh-travel-panel-icon">
                        <Icon aria-hidden="true" />
                      </div>

                      <span className="uh-travel-panel-label">
                        Step {selectedStep.number} of {steps.length}
                      </span>
                    </div>

                    <h3>{selectedStep.title}</h3>

                    <p>{selectedStep.text}</p>

                    <div
                      className="uh-travel-progress"
                      role="progressbar"
                      aria-label={`Progress for step ${selectedStep.number}`}
                      aria-valuenow={progressValue}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="uh-travel-progress-fill"
                        style={{ width: `${progressValue}%` }}
                      />
                    </div>

                    <div className="uh-travel-progress-meta">
                      <span>Planning progress</span>
                      <strong>{progressValue}%</strong>
                    </div>
                  </article>
                );
              })()}
            </div>

            <div
              className="uh-travel-step-grid"
              aria-label="Travel planning steps"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <button
                    type="button"
                    key={step.title}
                    className={`uh-travel-step-card uh-travel-step-card-${
                      index + 1
                    }`}
                    onClick={() => setActiveStep(index)}
                    aria-pressed={activeStep === index}
                    aria-controls="uh-travel-panel"
                  >
                    <div className="uh-travel-step-icon">
                      <Icon aria-hidden="true" />
                      <span>{step.number}</span>
                    </div>

                    <div className="uh-travel-step-content">
                      <h3>{step.title}</h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="uh-travel-cta">
          <Link href="/contact" className="uh-travel-btn-primary">
            Plan My Bhutan Trip
            <ArrowRight aria-hidden="true" />
          </Link>

          <Link href="/cultural-tours" className="uh-travel-btn-secondary">
            View Tour Ideas
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
