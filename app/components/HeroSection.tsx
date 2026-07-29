import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { featuredUpcomingEvent } from "../data/upcomingEvents";

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
          <span className="home-hero-event-alert-kicker">
            {featuredUpcomingEvent.label}
          </span>
          <strong>{featuredUpcomingEvent.title}</strong>
          <span className="home-hero-event-alert-meta">
            <Clock aria-hidden />
            {featuredUpcomingEvent.date}
            <span aria-hidden="true">|</span>
            {featuredUpcomingEvent.location}
          </span>
          <ArrowRight aria-hidden className="home-hero-event-alert-arrow" />
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
          <Link href="/contact" className="home-hero-btn-primary">
            Plan Your Journey
            <ArrowRight aria-hidden />
          </Link>

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
