import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CalendarDays,
  Car,
  CheckCircle,
  ChevronRight,
  Hotel,
  Landmark,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Ship,
  ShieldCheck,
  Ticket,
  Users,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Header } from "../components/Header";
import { featuredUpcomingEvent } from "../data/upcomingEvents";
import { siteConfig } from "../siteConfig";

export default function UpcomingEventsPage() {
  const event = featuredUpcomingEvent;
  const sampleImages = [
    "/concert/09_bhutan_thimphu_gate.jpg",
    "/concert/10_brahmaputra_cruise.jpg",
    "/concert/02_stadium_concert_crowd.jpg",
    "/concert/08_outdoor_rock_concert_crowd.jpg",
    "/concert/09_bhutan_thimphu_gate.jpg",
  ];

  return (
    <>
      <Header />

      <main className="upcoming-events-page upcoming-events-poster-page">
        <article className="upcoming-events-poster" aria-labelledby="event-title">
          <section className="upcoming-events-poster-hero">
            <PosterImage
              src={event.heroImage}
              alt={`${event.title} event artwork`}
              className="upcoming-events-poster-hero-image"
              priority
            />
            <div className="upcoming-events-poster-hero-shade" aria-hidden="true" />

            <div className="upcoming-events-poster-hero-copy">
              <span className="upcoming-events-red-label">{event.label}</span>
              <h1 id="event-title">
                Guns N&apos; Roses
                <span>Live in Guwahati</span>
              </h1>

              <div className="upcoming-events-poster-meta" aria-label="Event details">
                <span>
                  <CalendarDays aria-hidden="true" />
                  {event.date}
                </span>
                <span>
                  <MapPin aria-hidden="true" />
                  {event.location}
                </span>
              </div>

              <p>Exclusive concert trip packages from Bhutan</p>

              <div className="upcoming-events-poster-actions">
                <a
                  href="#concert-packages"
                  className="upcoming-events-gold-btn"
                >
                  View Packages
                  <ChevronRight aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.contact.whatsappHref}
                  className="upcoming-events-outline-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </div>
            </div>

          </section>

          <section className="upcoming-events-trust-strip" aria-label="Why travel with us">
            <PosterTrust
              icon={ShieldCheck}
              title="The Legend Returns"
              text="Experience the iconic rock band live with a coordinated Bhutan departure."
            />
            <PosterTrust
              icon={Mountain}
              title="More Than a Concert"
              text="A perfect blend of rock, river moments, temple visit, and smooth travel."
            />
            <PosterTrust
              icon={Award}
              title="Travel With Experts"
              text="Licensed local tour operator support from enquiry to return."
            />
          </section>

          <section id="concert-packages" className="upcoming-events-poster-section">
            <PosterTitle title="Concert Trip Packages" />
            <div className="upcoming-events-package-cards">
              {event.packages.map((tourPackage) => (
                <article
                  key={tourPackage.name}
                  className={
                    tourPackage.badge
                      ? "upcoming-events-tier-card upcoming-events-tier-card-featured"
                      : "upcoming-events-tier-card"
                  }
                >
                  {tourPackage.badge ? (
                    <span className="upcoming-events-tier-badge">{tourPackage.badge}</span>
                  ) : null}
                  <h2>{tourPackage.name}</h2>
                  <strong>{tourPackage.price}</strong>
                  <small className="upcoming-events-tier-price-note">
                    Per person
                  </small>
                  <ul>
                    {tourPackage.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={siteConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book {tourPackage.name.split(" ")[0]}
                  </a>
                </article>
              ))}
            </div>

            <div className="upcoming-events-package-inclusions-panel">
              <h3>All Concert Trip Packages Include</h3>
              <ul>
                {event.packageSectionInclusions.map((item) => (
                  <li key={item}>
                    <CheckCircle aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="upcoming-events-poster-section">
            <PosterTitle title="Tour Highlights & Inclusions" />
            <div className="upcoming-events-icon-row">
              <EventIcon icon={Ticket} label="Same Concert Ticket Category" />
              <EventIcon icon={Hotel} label="2 Nights Phuentsholing + 2 Nights Guwahati" />
              <EventIcon icon={Car} label="Private Transport" />
              <EventIcon icon={Ship} label="Brahmaputra Sunset Cruise" />
              <EventIcon icon={Landmark} label="Kamakhya Temple Visit" />
              <EventIcon icon={Users} label="Expert Tour Manager" />
            </div>
          </section>

          <section id="concert-itinerary" className="upcoming-events-poster-section">
            <PosterTitle title="Sample Itinerary" subtitle={event.duration} />
            <div className="upcoming-events-sample-grid">
              {event.itinerary.map((day, index) => (
                <article key={day.day} className="upcoming-events-sample-card">
                  <span>{day.day}</span>
                  <h3>{day.title}</h3>
                  <p>{day.activities.slice(0, 2).join(" and ")}</p>
                  <PosterImage
                    src={sampleImages[index] ?? event.brochureImage}
                    alt={`${day.title} Guns N' Roses trip artwork`}
                    className="upcoming-events-sample-card-image"
                  />
                </article>
              ))}
            </div>
          </section>

          <section className="upcoming-events-poster-section upcoming-events-compact-details-section">
            <PosterTitle title="Tour Itinerary" subtitle="Detailed Flow" />
            <div className="upcoming-events-detail-itinerary upcoming-events-detail-itinerary-compact">
              {event.itinerary.map((day) => (
                <article key={day.day}>
                  <span>{day.day}</span>
                  <div>
                    <h3>{day.title}</h3>
                    <ul>
                      {day.activities.map((activity) => (
                        <li key={activity}>
                          <CheckCircle aria-hidden="true" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="upcoming-events-poster-section upcoming-events-compact-details-section">
            <PosterTitle title="Inclusions & Exclusions" />
            <div className="upcoming-events-details-grid upcoming-events-details-grid-compact">
              <PosterList title="Package Inclusions" items={event.inclusions} />
              <PosterList title="Package Exclusions" items={event.exclusions} tone="red" />
            </div>
          </section>

          <section className="upcoming-events-poster-section">
            <PosterTitle title="Experience Assam. Feel the Rock." />
            <div className="upcoming-events-experience-strip">
              {event.galleryImages.map((image, index) => (
                <PosterImage
                  key={index}
                  src={image}
                  alt=""
                  className="upcoming-events-experience-image"
                />
              ))}
            </div>
          </section>

          <section className="upcoming-events-ready-panel">
            <span>Ready for the ultimate rock experience?</span>
            <small>Limited seats. Premium experience. Unforgettable memories.</small>

            <div className="upcoming-events-ready-actions">
              <a
                href={siteConfig.contact.whatsappHref}
                className="upcoming-events-gold-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Trip Now
                <ChevronRight aria-hidden="true" />
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                className="upcoming-events-outline-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire Now
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                className="upcoming-events-call-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </section>

          <footer className="upcoming-events-poster-footer">
            <div className="upcoming-events-footer-top">
              <div className="upcoming-events-footer-brand">
                <Link href="/" aria-label="Unseen Himalayas Bhutan home">
                  <Image
                    src="/logo-transparent.png"
                    alt="Unseen Himalayas Bhutan Logo"
                    width={92}
                    height={92}
                  />
                </Link>
                <div>
                  <strong>Unseen Himalayas Bhutan</strong>
                  <span>
                    Licensed Bhutan tour operator and DMC for concert trips,
                    cultural travel, festivals, and tailor-made Himalayan journeys.
                  </span>
                </div>
              </div>

              <div className="upcoming-events-footer-event-card">
                <span>Featured Event</span>
                <strong>Guns N&apos; Roses Guwahati 2026</strong>
                <small>{event.date} / {event.location}</small>
              </div>
            </div>

            <div className="upcoming-events-footer-main">
              <nav aria-label="Upcoming event quick links">
                <strong>Quick Links</strong>
                <Link href="/">Home</Link>
                <Link href="/upcoming-events">Upcoming Events</Link>
                <Link href="/about-bhutan">Bhutan Overview</Link>
                <Link href="/contact">Contact Us</Link>
              </nav>

              <nav aria-label="Popular adventures">
                <strong>Popular Adventures</strong>
                <Link href="/bhutan-tours">Bhutan Tours</Link>
                <Link href="/festival-tours">Festival Tours</Link>
                <Link href="/bhutan-trekkings">Bhutan Trekkings</Link>
                <Link href="/cultural-tours">Cultural Tours</Link>
              </nav>

              <div className="upcoming-events-footer-contact">
                <strong>Contact Us</strong>
                <a href={siteConfig.contact.phoneHref}>
                  <Phone aria-hidden="true" />
                  {siteConfig.contact.phoneDisplay}
                </a>
                <a href={siteConfig.contact.emailHref}>
                  <Mail aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
                <span>
                  <MapPin aria-hidden="true" />
                  Thimphu, Bhutan
                </span>
              </div>

              <div className="upcoming-events-footer-social-wrap">
                <strong>Follow Us</strong>
                <div className="upcoming-events-footer-social" aria-label="Social media links">
                  <a href={siteConfig.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebook aria-hidden="true" />
                  </a>
                  <a href={siteConfig.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram aria-hidden="true" />
                  </a>
                  <a href={siteConfig.social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                    <FaYoutube aria-hidden="true" />
                  </a>
                  <a href={siteConfig.social.tiktok} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                    <FaTiktok aria-hidden="true" />
                  </a>
                  <a href={siteConfig.contact.whatsappHref} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp aria-hidden="true" />
                  </a>
                </div>
                <a
                  href={siteConfig.contact.whatsappHref}
                  className="upcoming-events-footer-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire About This Trip
                  <ChevronRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="upcoming-events-footer-bottom">
              <span>&copy; 2026 Unseen Himalayas Bhutan. All rights reserved.</span>
              <div>
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}

function PosterImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string | null;
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div className={`${className} upcoming-events-image-slot`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          {...(priority ? { priority: true } : { loading: "eager" as const })}
          sizes="(max-width: 900px) calc(100vw - 24px), 1100px"
        />
      ) : null}
    </div>
  );
}

function PosterTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="upcoming-events-panel-title">
      <span aria-hidden="true" />
      <h2>
        {title}
        {subtitle ? <small>{subtitle}</small> : null}
      </h2>
      <span aria-hidden="true" />
    </div>
  );
}

function PosterTrust({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}) {
  return (
    <article>
      <Icon aria-hidden="true" />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
}

function PosterList({
  title,
  items,
  tone = "gold",
}: {
  title: string;
  items: readonly string[];
  tone?: "gold" | "red";
}) {
  return (
    <article className={`upcoming-events-detail-list upcoming-events-detail-list-${tone}`}>
      <h3>{title}</h3>
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

function EventIcon({
  icon: Icon,
  label,
}: {
  icon: typeof CalendarDays;
  label: string;
}) {
  return (
    <div className="upcoming-events-icon-item">
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
