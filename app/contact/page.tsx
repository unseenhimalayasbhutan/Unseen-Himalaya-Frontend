import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../siteConfig";

type ContactCard = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  href: string;
};

export default function Contact() {
  return (
    <>
      <Header />

      <main className="contact-pro-page">
        <section className="contact-pro-hero">
          <div className="contact-pro-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="contact-pro-hero-grid">
              <div className="contact-pro-hero-content">
                <div className="contact-pro-eyebrow">
                  <Sparkles aria-hidden />
                  <span>Contact Unseen Himalayas Bhutan</span>
                </div>

                <h1 className="contact-pro-hero-title">
                  Let&apos;s start planning your Bhutan journey.
                </h1>

                <p className="contact-pro-hero-description">
                  Tell us your travel dates, number of guests, preferred hotel
                  style, interests, and budget range. Our team will guide you
                  with the right route, season, itinerary, and travel
                  arrangements.
                </p>

                <div className="contact-pro-hero-actions">
                  <a href={contactLinks.whatsapp} className="contact-pro-btn-primary">
                    Chat on WhatsApp
                    <FaWhatsapp aria-hidden />
                  </a>

                  <a href={contactLinks.email} className="contact-pro-btn-secondary">
                    Send Email
                  </a>
                </div>

                <div className="contact-pro-hero-trust">
                  {heroTrust.map((item) => (
                    <div key={item} className="contact-pro-hero-trust-item">
                      <CheckCircle aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-pro-hero-card">
                <div className="contact-pro-hero-card-icon">
                  <MessageCircle aria-hidden />
                </div>

                <p className="contact-pro-card-kicker">Fastest Contact</p>
                <h2>WhatsApp is best for quick travel questions.</h2>
                <p>
                  Send your travel month, number of travelers, and preferred tour
                  style. We will help you understand the best route and next
                  steps.
                </p>

                <a href={contactLinks.whatsapp} className="contact-pro-hero-card-link">
                  Message us now
                  <ArrowRight aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-pro-section contact-pro-section-white">
          <div className="container">
            <div className="contact-pro-section-header contact-pro-section-header-center">
              <span className="contact-pro-section-line" />
              <span className="contact-pro-section-label">Get in Touch</span>
              <span className="contact-pro-section-line" />
            </div>

            <h2 className="contact-pro-section-title contact-pro-center-title">
              Choose the easiest way to reach us.
            </h2>

            <div className="contact-pro-cards-grid">
              {contactCards.map((card) => (
                <a key={card.label} href={card.href} className="contact-pro-card">
                  <div className="contact-pro-card-icon">
                    <card.icon aria-hidden />
                  </div>
                  <span>{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-pro-section contact-pro-section-warm">
          <div className="container">
            <div className="contact-pro-layout">
              <div className="contact-pro-form-card">
                <div className="contact-pro-section-header">
                  <span className="contact-pro-section-line" />
                  <span className="contact-pro-section-label">Trip Inquiry</span>
                </div>

                <h2 className="contact-pro-section-title">
                  Share the basics and we will shape the right route.
                </h2>
                <p>
                  This form helps you prepare the key details before contacting
                  the team and keeps your inquiry focused for a faster reply.
                </p>

                <form className="contact-pro-form" action={contactLinks.email}>
                  <div className="contact-pro-form-grid">
                    <label>
                      Full Name
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                      />
                    </label>

                    <label>
                      Email Address
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                      />
                    </label>

                    <label>
                      Travel Month
                      <input
                        name="travel-month"
                        type="text"
                        placeholder="October 2026"
                      />
                    </label>

                    <label>
                      What kind of Bhutan trip are you interested in?
                      <select name="trip-type" defaultValue="">
                        <option value="" disabled>
                          Select a trip style
                        </option>
                        <option value="cultural">Cultural tour</option>
                        <option value="festival">Festival journey</option>
                        <option value="nature">Nature and soft adventure</option>
                        <option value="trekking">Trekking</option>
                        <option value="luxury">Premium or luxury travel</option>
                        <option value="custom">Custom itinerary</option>
                      </select>
                    </label>
                  </div>

                  <label>
                    Message
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us your group size, duration, interests, route preferences, and any hotel category request."
                    />
                  </label>

                  <button type="submit" className="contact-pro-submit-btn">
                    Submit Inquiry
                    <ArrowRight aria-hidden />
                  </button>

                  <p className="contact-pro-form-note">
                    You can review and edit the message before sending it to
                    Unseen Himalayas Bhutan.
                  </p>
                </form>
              </div>

              <aside className="contact-pro-side">
                <div className="contact-pro-side-card">
                  <h3>For faster replies</h3>
                  <p>
                    Include travel month, number of travellers, preferred
                    duration, entry point, hotel style, and the tour package or
                    experience you liked.
                  </p>
                </div>

                <div className="contact-pro-side-card">
                  <h3>Need urgent help?</h3>
                  <p>
                    WhatsApp is the fastest channel for quick planning questions,
                    availability checks, and time-sensitive travel support.
                  </p>
                  <a href={contactLinks.whatsapp} className="contact-pro-inline-link">
                    Chat on WhatsApp
                    <FaWhatsapp aria-hidden />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="contact-pro-cta">
          <div className="container">
            <div className="contact-pro-cta-card">
              <div>
                <p className="contact-pro-cta-kicker">Ready when you are</p>
                <h2>Send us your Bhutan travel idea today.</h2>
                <p>
                  Whether you need a cultural tour, festival journey, trekking
                  plan, luxury stay, or fully custom itinerary, we will help you
                  shape the right Bhutan experience.
                </p>
              </div>

              <div className="contact-pro-cta-actions">
                <a href={contactLinks.whatsapp} className="contact-pro-btn-primary">
                  WhatsApp Us
                  <FaWhatsapp aria-hidden />
                </a>

                <Link href="/bhutan-tours" className="contact-pro-btn-secondary">
                  View Tours
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

const contactLinks = {
  email: siteConfig.contact.emailHref,
  phone: siteConfig.contact.phoneHref,
  whatsapp: siteConfig.contact.whatsappHref,
};

const heroTrust = [
  "Fast travel consultation",
  "Custom Bhutan itinerary support",
  "WhatsApp, email, and social contact",
];

const contactCards: ContactCard[] = [
  {
    icon: FaWhatsapp as unknown as LucideIcon,
    label: "WhatsApp",
    title: siteConfig.contact.phoneDisplay,
    description: "Best for quick questions and trip planning.",
    href: contactLinks.whatsapp,
  },
  {
    icon: Mail,
    label: "Email",
    title: siteConfig.contact.email,
    description: "Best for detailed tour inquiries and B2B requests.",
    href: contactLinks.email,
  },
  {
    icon: Phone,
    label: "Call",
    title: siteConfig.contact.phoneDisplay,
    description: "Call us during business hours in Bhutan.",
    href: contactLinks.phone,
  },
];
