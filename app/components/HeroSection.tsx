import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck, MapPin } from "lucide-react";
import { siteConfig } from "../siteConfig";

export function HeroSection() {
  return (
    <section className="hero home-hero">
      <div className="hero-overlay home-hero-overlay" aria-hidden="true" />

      <div className="home-hero-pattern" aria-hidden="true" />

      <div className="home-hero-content">
        <Link
          href="/upcoming-events"
          className="home-hero-gnr-link"
          aria-label="View Guns N' Roses concert trip packages"
        >
          <Image
            src="/cover/GnR.png"
            alt="Guns N' Roses Live in Guwahati concert trip"
            fill
            priority
            sizes="(max-width: 760px) calc(100vw - 32px), 520px"
          />
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
