"use client";

import type { ReactNode } from "react";
import { CalendarDays, CheckCircle, ChevronRight, ShieldCheck } from "lucide-react";

import { TourSectionHeader as SectionHeader } from "./TourPagePrimitives";
import {
  reservationAndCancellation,
  termsAndConditions,
  tourExclusions,
  tourInclusions,
} from "../data/tourItineraries";

type BookingClaritySectionProps = {
  id?: string;
  subtitle: string;
};

export function BookingClaritySection({
  id,
  subtitle,
}: BookingClaritySectionProps) {
  return (
    <section
      id={id}
      className="tour-pro-section tour-pro-section-white uh-bhutan-booking-clarity-section"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Booking Clarity"
          title="Tour inclusions, exclusions, reservation policies, and terms & conditions."
          subtitle={subtitle}
        />

        <div className="uh-bhutan-booking-clarity-shell">
          <div className="uh-bhutan-booking-clarity-overview">
            <div className="uh-bhutan-booking-clarity-copy">
              <span>Before confirmation</span>

              <p>
                Every itinerary can be customized. This section separates the
                business details from the day-by-day itinerary so clients can
                clearly see what is included, what is excluded, and what must be
                confirmed before travel.
              </p>
            </div>
          </div>

          <div className="uh-bhutan-booking-clarity-grid">
            <BookingClarityCard
              label="Included Services"
              title="Tour Inclusions"
              items={tourInclusions}
              icon={<CheckCircle aria-hidden="true" />}
              primary
            />

            <BookingClarityCard
              label="Not Included"
              title="Important Exclusions"
              items={tourExclusions}
              icon={<ChevronRight aria-hidden="true" />}
            />

            <BookingClarityCard
              label="Booking Process"
              title="Reservation & Cancellation"
              items={reservationAndCancellation}
              icon={<CalendarDays aria-hidden="true" />}
            />

            <BookingClarityCard
              label="Terms to Confirm"
              title="Terms & Conditions"
              items={termsAndConditions}
              icon={<ShieldCheck aria-hidden="true" />}
              dark
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingClarityCard({
  label,
  title,
  items,
  icon,
  primary = false,
  dark = false,
}: {
  label: string;
  title: string;
  items: string[];
  icon: ReactNode;
  primary?: boolean;
  dark?: boolean;
}) {
  return (
    <article
      className={`uh-bhutan-booking-clarity-card ${
        primary ? "uh-bhutan-booking-clarity-card-primary" : ""
      } ${dark ? "uh-bhutan-booking-clarity-card-dark" : ""}`}
    >
      <div className="uh-bhutan-booking-clarity-card-head">
        <div className="uh-bhutan-booking-clarity-icon">{icon}</div>

        <div>
          <span>{label}</span>
          <h4>{title}</h4>
        </div>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={item}>
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
