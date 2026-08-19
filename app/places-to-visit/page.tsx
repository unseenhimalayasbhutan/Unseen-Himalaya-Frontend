import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Compass,
  MapPin,
  Mountain,
} from "lucide-react";

import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { destinationChapters, globalVisitorNotes } from "../data/placesToVisit";
import type { DestinationAttraction } from "../data/placesToVisit";

export default function PlacesToVisitPage() {
  return (
    <>
      <Header />

      <main className="places-page">
        <section className="places-hero">
          <div className="places-hero-bg" aria-hidden="true" />
          <div className="container places-hero-grid">
            <div className="places-hero-content">
              <div className="tour-pro-eyebrow">
                <Compass aria-hidden="true" />
                <span>Bhutan Destination Guide</span>
              </div>

              <h1>Places to Visit in Bhutan</h1>
              <p>
                Western Bhutan destination guide for Thimphu, Paro, Punakha,
                Wangdue Phodrang, Gangtey and Phobjikha, and Haa, built from
                the 2026 destination notes with access-aware visitor guidance
                and real destination imagery.
              </p>

              <div className="places-hero-actions">
                <Link href="/contact" className="tour-pro-btn-primary">
                  Plan My Bhutan Route
                  <ArrowRight aria-hidden="true" />
                </Link>
                <a href="#destinations" className="tour-pro-btn-secondary">
                  Explore Destinations
                </a>
              </div>
            </div>

            <aside className="places-hero-card" aria-label="Guide highlights">
              <span>Inside this guide</span>
              <strong>Six destination chapters with attraction directories, planning notes, events, and FAQs.</strong>
              <p>
                Operational details such as fees, access, roads, opening hours,
                and festival dates should still be reconfirmed before marketing
                or booking.
              </p>
            </aside>
          </div>
        </section>

        <section id="destinations" className="tour-pro-section tour-pro-section-white places-filter-section">
          <div className="container">
            <div className="places-section-heading">
              <span>Destinations Included</span>
              <h2>Start with the valley, then choose the experiences that fit your route.</h2>
            </div>

            <div className="places-destination-nav" aria-label="Destination links">
              {destinationChapters.map((destination) => (
                <a key={destination.id} href={`#${destination.id}`}>
                  <strong>{destination.name}</strong>
                  <span>{destination.bestFor}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-warm">
          <div className="container">
            <div className="places-section-heading">
              <span>Global 2026 Visitor Notes</span>
              <h2>Set expectations before visitors choose attractions.</h2>
            </div>

            <div className="places-guidance-grid">
              {globalVisitorNotes.map((note) => (
                <article key={note.title} className="places-guidance-card">
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {destinationChapters.map((destination, index) => (
          <section
            key={destination.id}
            id={destination.id}
            className={`tour-pro-section ${
              index % 2 === 0 ? "tour-pro-section-white" : "tour-pro-section-warm"
            } uh-package-showcase-section places-destination-section`}
          >
            <div className="container">
              <div className="places-destination-hero">
                <div className="places-destination-copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{destination.name}</h2>
                  <p className="places-destination-kicker">{destination.kicker}</p>
                  <p>{destination.intro}</p>
                </div>

                <div className="places-destination-image">
                  <Image
                    src={destination.heroImage}
                    alt={destination.heroAlt}
                    fill
                    sizes="(max-width: 860px) 100vw, 42vw"
                  />
                </div>
              </div>

              <div className="places-at-glance-grid">
                {destination.facts.map((fact) => (
                  <div key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>

              <div className="places-group">
                <div className="places-group-heading">
                  <span>Featured Experiences</span>
                  <h3>Best places and experiences in {destination.shortName}</h3>
                  <p>
                    Each experience includes imagery, location, tags,
                    recommended time, difficulty, priority, summary, and visitor
                    notes for practical route planning.
                  </p>
                </div>

                <div className="uh-hb-package-grid places-card-grid">
                  {destination.attractions.map((attraction, attractionIndex) => (
                    <PlaceCard
                      key={attraction.title}
                      attraction={attraction}
                      index={attractionIndex + 1}
                    />
                  ))}
                </div>
              </div>

              <div className="places-destination-bottom">
                <article className="places-info-panel">
                  <span>Suggested Stay Planning</span>
                  <h2>How to pace {destination.shortName}</h2>
                  <ul className="places-check-list">
                    {destination.stayPlanning.map((item) => (
                      <li key={item}>
                        <Clock aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="places-info-panel">
                  <span>Seasonal Planning</span>
                  <h2>When it works best</h2>
                  <p>{destination.seasonality}</p>
                  <div className="places-event-list">
                    {destination.events.map((event) => (
                      <div key={event.name}>
                        <strong>{event.name}</strong>
                        <span>{event.date}</span>
                        <small>{event.note}</small>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <div className="places-faq-strip">
                {destination.faqs.map((faq) => (
                  <article key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="tour-pro-cta places-cta">
          <div className="container">
            <div className="tour-pro-cta-card">
              <div>
                <span>Build Your Bhutan Route</span>
                <h2>Want these places arranged into a realistic itinerary?</h2>
                <p>
                  Tell us your travel dates, pace, interests, and hotel style.
                  We will suggest the right mix of icons, hidden gems, hikes,
                  cultural sites, and downtime.
                </p>
              </div>
              <Link href="/contact" className="tour-pro-btn-primary">
                Start Planning
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

function PlaceCard({
  attraction,
  index,
}: {
  attraction: DestinationAttraction;
  index: number;
}) {
  const hasImage = Boolean(attraction.image);

  return (
    <article className="uh-hb-package-card places-card">
      <div
        className={`places-card-media ${hasImage ? "" : "places-card-media-placeholder"}`}
        aria-hidden={hasImage ? undefined : true}
      >
        {attraction.image ? (
          <Image
            src={attraction.image}
            alt={attraction.alt ?? `${attraction.title} in Bhutan`}
            fill
            sizes="(max-width: 620px) 100vw, (max-width: 1180px) 50vw, 33vw"
          />
        ) : null}
        <span className="uh-hb-day-badge places-number-badge">
          <strong>{String(index).padStart(2, "0")}</strong>
          <span>Place</span>
        </span>
        <div>
          <MapPin aria-hidden="true" />
          <span>{hasImage ? attraction.location : "Photo coming soon"}</span>
        </div>
      </div>

      <div className="uh-hb-package-body places-card-body">
        <div className="places-card-kicker">{attraction.tags.join(" | ")}</div>
        <h3>{attraction.title}</h3>
        <p>{attraction.summary}</p>

        <div className="places-card-meta">
          <span>
            <Clock aria-hidden="true" />
            {attraction.time}
          </span>
          <span>
            <Mountain aria-hidden="true" />
            {attraction.level}
          </span>
          <span>{attraction.priority}</span>
        </div>

        {attraction.note ? (
          <details className="places-card-details">
            <summary>Visitor note</summary>
            <ul>
              <li>{attraction.note}</li>
            </ul>
          </details>
        ) : null}
      </div>
    </article>
  );
}
