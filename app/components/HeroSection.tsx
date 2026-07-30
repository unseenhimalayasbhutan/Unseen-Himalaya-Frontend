import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { featuredUpcomingEvent } from "../data/upcomingEvents";
import { siteConfig } from "../siteConfig";

export function HeroSection() {
  return (
    <section className="hero home-hero">
      <div className="hero-overlay home-hero-overlay" aria-hidden="true" />

      <div className="home-hero-pattern" aria-hidden="true" />

      <div className="home-hero-content">
        <Link
          href="/upcoming-events"
          className="home-hero-event-alert"
          aria-label={`View details for ${featuredUpcomingEvent.title}`}
        >
          <span className="home-hero-event-alert-media">
            {featuredUpcomingEvent.notificationImage ? (
              <Image
                src={featuredUpcomingEvent.notificationImage}
                alt=""
                fill
                priority
                unoptimized
                sizes="(max-width: 760px) calc(100vw - 32px), 760px"
              />
            ) : null}
          </span>

          <span className="home-hero-event-alert-shade" aria-hidden="true" />

          <span className="home-hero-event-alert-copy">
            <span className="home-hero-event-alert-kicker">
              {featuredUpcomingEvent.label}
            </span>
            <strong>
              Guns N&apos; Roses
              <span>Live in Guwahati</span>
            </strong>
            <span className="home-hero-event-alert-meta">
              <span>
                <CalendarDays aria-hidden />
                {featuredUpcomingEvent.date}
              </span>
              <span>
                <MapPin aria-hidden />
                {featuredUpcomingEvent.location}
              </span>
            </span>
          </span>

          <span className="home-hero-event-alert-arrow">
            <ArrowRight aria-hidden />
          </span>
        </Link>

        <h1>
          Unseen Himalayas Bhutan
          <span>Licensed Bhutan Tour Operator &amp; DMC</span>
        </h1>

        <p>
          Thoughtfully crafted Bhutan journeys led by local experts, designed
          around culture, hidden valleys, sacred monasteries, and meaningful
          Himalayan experiences.
        </p>

        <div className="home-hero-buttons">
          <a
            href={siteConfig.contact.whatsappHref}
            className="home-hero-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plan Your Journey
            <ArrowRight aria-hidden />
          </a>

          <Link href="/about-bhutan" className="home-hero-btn-secondary">
            Learn About Bhutan
          </Link>
        </div>

        <div className="home-hero-trust">
          <div className="home-hero-trust-item">
            <CheckCircle aria-hidden />
            <span>Licensed Local Operator</span>
          </div>

          <div className="home-hero-trust-item">
            <MapPin aria-hidden />
            <span>Bhutan-Based Experts</span>
          </div>

          <div className="home-hero-trust-item">
            <ShieldCheck aria-hidden />
            <span>Private Tailor-Made Trips</span>
          </div>
        </div>
      </div>
    </section>
  );
}
