import Link from "next/link";
import {
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  Hash,
  MapPin,
  Music,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { featuredUpcomingEvent } from "../data/upcomingEvents";

export default function UpcomingEventsPage() {
  const event = featuredUpcomingEvent;

  return (
    <>
      <Header />

      <main className="upcoming-events-page">
        <section className="upcoming-events-hero">
          <div className="upcoming-events-hero-backdrop" aria-hidden="true" />

          <div className="container upcoming-events-hero-grid">
            <div className="upcoming-events-hero-content">
              <div className="upcoming-events-eyebrow" aria-label={event.label}>
                <Music aria-hidden="true" />
                <span>{event.label}</span>
              </div>

              <h1>
                Bhutan to Guns N&apos; Roses Concert in Guwahati.
              </h1>

              <p>
                A polished 5-day group escape from Bhutan with coordinated
                transport, hotel stays, Brahmaputra River moments, Kamakhya
                Temple, and a concert night built around Guns N&apos; Roses.
              </p>

              <div className="upcoming-events-actions">
                <Link href="/contact" className="tour-pro-btn-primary">
                  Reserve Your Seat
                  <ChevronRight aria-hidden="true" />
                </Link>

                <a href="#concert-itinerary" className="tour-pro-btn-secondary">
                  View Itinerary
                </a>
              </div>
            </div>

          </div>
        </section>

        <section className="upcoming-events-booking-strip" aria-label="Event essentials">
          <div className="container upcoming-events-facts">
            <EventFact icon={CalendarDays} label="Concert Date" value={event.date} />
            <EventFact icon={MapPin} label="Location" value={event.location} />
            <EventFact icon={Clock} label="Duration" value={event.duration} />
            <EventFact icon={Hash} label="Price" value={event.price} detail={event.priceNote} />
          </div>
        </section>

        <section className="upcoming-events-overview-section">
          <div className="container upcoming-events-overview-grid">
            <div className="upcoming-events-overview-copy">
              <div className="tour-pro-section-heading upcoming-events-heading-left upcoming-events-heading-tight">
                <span className="tour-pro-section-label">
                  <span>Concert Package</span>
                </span>
                <h2>Designed for a smooth concert escape from Bhutan.</h2>
                <p>
                  The package balances practical travel planning with the energy
                  of a live concert trip: group coordination, accommodation,
                  train travel, Guwahati touring, and river experiences.
                </p>
              </div>

              <div className="upcoming-events-highlight-grid">
                {event.highlights.map((highlight) => (
                  <div key={highlight} className="upcoming-events-highlight-card">
                    <CheckCircle aria-hidden="true" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="upcoming-events-flow-card" aria-label="Package flow">
              <span>Package Flow</span>
              <ol>
                <li>Bhutan group departure and Phuentsholing briefing</li>
                <li>Train transfer to Guwahati and river evening</li>
                <li>Kamakhya Temple, Ropeway, and concert night</li>
                <li>Return by train and transfer back to Thimphu</li>
              </ol>
            </aside>
          </div>
        </section>

        <section
          id="concert-itinerary"
          className="upcoming-events-itinerary-section"
        >
          <div className="container">
            <div className="tour-pro-section-heading upcoming-events-heading">
              <span className="tour-pro-section-label">
                <span>Tour Itinerary</span>
              </span>
              <h2>5 days / 4 nights built around concert night.</h2>
              <p>
                Day 3 includes Kamakhya Temple, Brahmaputra Ropeway with ticket
                at own cost, and the Guns N&apos; Roses live concert.
              </p>
            </div>

            <div className="upcoming-events-itinerary-layout">
              <div className="upcoming-events-timeline">
                {event.itinerary.map((day) => (
                  <article key={day.day} className="upcoming-events-day">
                    <div className="upcoming-events-day-label">{day.day}</div>
                    <div className="upcoming-events-day-content">
                      <h3>{day.title}</h3>
                      <ul>
                        {day.activities.map((activity) => (
                          <li key={activity}>
                            <CheckCircle aria-hidden="true" />
                            <span>
                              {activity.includes("Ropeway") ? (
                                <strong>{activity}</strong>
                              ) : (
                                activity
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="upcoming-events-itinerary-note" aria-label="Important trip notes">
                <span>Important Notes</span>
                <h3>Concert-first routing with clear own-cost items.</h3>
                <p>
                  The itinerary order may adjust slightly based on transport
                  schedule, concert timing, hotel availability, and local
                  operating conditions.
                </p>
                <ul>
                  <li>Breakfast is included during Guwahati stay only.</li>
                  <li>Brahmaputra Ropeway ticket is at own cost.</li>
                  <li>Flight tickets are available on request.</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <div className="tour-pro-section-heading upcoming-events-heading">
              <span className="tour-pro-section-label">
                <span>Package Details</span>
              </span>
              <h2>What is included and what remains at own cost.</h2>
              <p>
                Concert ticket, train travel, coordination, accommodation, and
                the Brahmaputra Sunset Cruise are included as listed below.
              </p>
            </div>

            <div className="upcoming-events-package-grid">
              <PackageList title="Package Inclusions" items={event.inclusions} />
              <PackageList title="Package Exclusions" items={event.exclusions} />
            </div>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

function EventFact({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="upcoming-events-fact-card">
      <Icon aria-hidden="true" />
      <span>{label}</span>
      <strong>{value}</strong>
      {detail ? <small>{detail}</small> : null}
    </div>
  );
}

function PackageList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <article className="upcoming-events-package-card">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
