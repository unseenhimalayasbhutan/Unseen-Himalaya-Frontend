import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";

type StatItem = {
  number: string;
  label: string;
  note: string;
};

type CardItem = {
  marker: string;
  title: string;
  description: string;
};

type CompanyInfoItem = {
  label: string;
  value: string;
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-pro-page about-pro-company-page">
        {/* Hero */}
        <section className="about-pro-hero">
          <div className="about-pro-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="about-pro-hero-grid">
              <div className="about-pro-hero-content">
                <div className="about-pro-eyebrow">
                  <span>About Unseen Himalayas Bhutan</span>
                </div>

                <h1 className="about-pro-hero-title">
                  A new Bhutan travel company built to make trips feel personal,
                  not rushed.
                </h1>

                <p className="about-pro-hero-description">
                  Unseen Himalayas Bhutan is a new Bhutanese travel company built on four years of hands-on experience in the tourism industry. We offer thoughtfully designed Bhutan tour packages while giving every guest the freedom to personalize their journey around their interests, preferences, pace, and travel style. Our goal is simple: to make travelling in Bhutan hassle-free, personal, well-organized, and genuinely worth what you pay, with carefully planned experiences and the best possible value for your journey.
                </p>

                <div className="about-pro-hero-actions">
                  <Link href="/contact" className="about-pro-btn-primary">
                    Plan With Us
                  </Link>

                  <Link href="/cultural-tours" className="about-pro-btn-secondary">
                    Explore Tours
                  </Link>
                </div>

                <div className="about-pro-hero-trust">
                  {heroTrust.map((item) => (
                    <div key={item} className="about-pro-hero-trust-item">
                      <span className="about-pro-mini-check" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-pro-hero-card">
                <p className="about-pro-hero-card-kicker">Our Promise</p>
                <h2>Travel beyond sightseeing.</h2>
                <p>
                  We believe a journey through Bhutan should leave space for
                  real conversations, unhurried moments, and the small local
                  details that disappear when an itinerary is packed too tightly.
                </p>
                <div className="about-pro-hero-card-footer">
                  <span aria-hidden="true">4 years of tourism industry experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="about-pro-section about-pro-section-white">
          <div className="container">
            <div className="about-pro-section-header about-pro-section-header-center">
              <span className="about-pro-section-line" />
              <span className="about-pro-section-label">About Us</span>
              <span className="about-pro-section-line" />
            </div>

            <div className="about-pro-intro">
              <h2>
                Thoughtful Bhutan travel.
                <span> Planned around real people.</span>
              </h2>
              <p>
                Unseen Himalayas Bhutan is newly established, but our planning is shaped by four years of hands-on tourism experience in Bhutan. That experience taught us where trips often go wrong: long days with too many stops, unclear inclusions, rushed sightseeing, and packages that look polished on paper but do not match the traveler.
              </p>
              <p>
                We still offer thoughtfully designed tour packages because they make planning easier. The difference is that we treat them as a starting point, not a script. Whether you want culture, festivals, soft adventure, family travel, comfort-focused stays, photography time, or quieter village moments, we adjust the route so the vacation feels like yours.
              </p>
              <p>
                Our goal is to make travelling in Bhutan clear, well-paced, and genuinely enjoyable from the first enquiry to the final day. We focus on practical planning, reliable local support, quality services, and good value, so guests spend less time worrying about arrangements and more time experiencing Bhutan at a human pace.
              </p>
            </div>

            <div className="about-pro-stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="about-pro-stat-card">
                  <div className="about-pro-stat-number">{stat.number}</div>
                  <div className="about-pro-stat-label">{stat.label}</div>
                  <p>{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="about-pro-section about-pro-section-warm">
          <div className="container">
            <div className="about-pro-section-header about-pro-section-header-center">
              <span className="about-pro-section-line" />
              <span className="about-pro-section-label">Our Services</span>
              <span className="about-pro-section-line" />
            </div>

            <h2 className="about-pro-section-title about-pro-center-title">
              Complete Bhutan travel services for private guests, groups, and travel partners.
            </h2>

            <div className="about-pro-assurance-grid">
              {services.map((service) => (
                <div key={service.title} className="about-pro-assurance-card">
                  <div className="about-pro-assurance-icon about-pro-text-icon">
                    {service.marker}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Travel With Us */}
        <section className="about-pro-section about-pro-section-white">
          <div className="container">
            <div className="about-pro-split-grid">
              <div className="about-pro-split-content">
                <div className="about-pro-section-header">
                  <span className="about-pro-section-line" />
                  <span className="about-pro-section-label">
                    Why Travel With Us
                  </span>
                </div>

                <h2 className="about-pro-section-title">
                  Local planning that keeps your vacation from becoming a checklist.
                </h2>

                <p className="about-pro-section-text">
                  We support travelers with responsive communication, flexible
                  itinerary planning, clear ground arrangements, and practical
                  destination knowledge across Bhutan. Our role is to slow the
                  planning down enough to understand what matters to you, then
                  coordinate the trip carefully so each day feels manageable once
                  you arrive.
                </p>

                <div className="about-pro-difference-list">
                  {partnerReasons.map((reason) => (
                    <div key={reason.title} className="about-pro-difference-item">
                      <div className="about-pro-difference-icon about-pro-text-icon">
                        {reason.marker}
                      </div>
                      <div>
                        <h3>{reason.title}</h3>
                        <p>{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-pro-feature-panel">
                <div className="about-pro-feature-panel-inner">
                  <div className="about-pro-feature-badge">
                    Traveler Care
                  </div>
                  <h3>Planned clearly, paced honestly, supported locally.</h3>
                  <p>
                    You work with a Bhutan-based team that understands the road
                    times, seasonal limits, guide coordination, hotel realities,
                    and small choices that make a trip smoother.
                  </p>

                  <div className="about-pro-feature-points">
                    {featurePoints.map((point) => (
                      <div key={point}>
                        <span className="about-pro-mini-check" aria-hidden="true" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="about-pro-section about-pro-section-warm">
          <div className="container">
            <div className="about-pro-process-grid">
              <div>
                <div className="about-pro-section-header">
                  <span className="about-pro-section-line" />
                  <span className="about-pro-section-label">
                    Company Information
                  </span>
                </div>

                <h2 className="about-pro-section-title">
                  Who looks after your trip.
                </h2>

                <p className="about-pro-section-text">
                  Your trip is looked after by a Bhutan-based planning and
                  operations team that handles enquiry support, itinerary design,
                  hotel and transport coordination, guide assignment, document
                  reminders, and on-trip support.
                </p>

                <Link href="/contact" className="about-pro-inline-link">
                  Contact Our Team
                </Link>
              </div>

              <div className="about-pro-process-list">
                {companyInfo.map((item) => (
                  <div key={item.label} className="about-pro-process-item">
                    <div className="about-pro-process-number">
                      {item.label.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3>{item.label}</h3>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

       

        {/* CTA */}
        <section className="about-pro-cta">
          <div className="container">
            <div className="about-pro-cta-card">
              <div>
                <p className="about-pro-cta-kicker">Plan With Unseen Himalayas Bhutan</p>
                <h2>Let&apos;s shape a Bhutan journey around you.</h2>
                <p>
                  Share your dates, travel style, must-see places, and preferred
                  pace. Our team will help turn that into a clear, realistic
                  Bhutan itinerary.
                </p>
              </div>

              <div className="about-pro-cta-actions">
                <Link href="/contact" className="about-pro-btn-primary">
                  Contact Us
                </Link>
                <Link href="/cultural-tours" className="about-pro-btn-secondary">
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

const heroTrust = [
  "Bhutan-based destination management company",
  "Professional ground handling and travel support",
];

const stats: StatItem[] = [
  {
    number: "4",
    label: "Years Experience",
    note: "Hands-on tourism experience behind a newly established Bhutanese travel company.",
  },
  {
    number: "Private",
    label: "Trip Planning",
    note: "Routes are adjusted around interests, comfort level, pace, arrival timing, and travel style.",
  },
  {
    number: "Local",
    label: "Ground Support",
    note: "Bhutan-based coordination for guides, vehicles, hotels, routes, and day-to-day support.",
  },
  {
    number: "Clear",
    label: "Communication",
    note: "Straightforward planning, written confirmations, and practical advice before you travel.",
  },
];

const services: CardItem[] = [
  {
    marker: "01",
    title: "Cultural & Heritage Tours",
    description:
      "Curated journeys through Bhutan's dzongs, monasteries, villages, museums, and living traditions.",
  },
  {
    marker: "02",
    title: "Tailor-Made Travel Experiences",
    description:
      "Personalized travel experiences shaped around comfort level, interests, pace, and guest profile.",
  },
  {
    marker: "03",
    title: "Private & Group Travel Arrangements",
    description:
      "Professional support for private travelers, families, groups, and travel partner requirements.",
  },
  {
    marker: "04",
    title: "Hotel Reservations & Ground Handling",
    description:
      "Reliable coordination for accommodation, routes, logistics, and on-ground travel operations.",
  },
  {
    marker: "05",
    title: "Transportation & Professional Guide Services",
    description:
      "Private transportation and professional guide services for smooth and well-managed journeys.",
  },
  {
    marker: "06",
    title: "Festival & Special Interest Tours",
    description:
      "Festival journeys, cultural events, photography, wellness, spiritual visits, and special-interest routes.",
  },
  {
    marker: "07",
    title: "Hiking & Nature Experiences",
    description:
      "Soft hikes, nature walks, valley experiences, scenic viewpoints, and outdoor Bhutan experiences.",
  },
  {
    marker: "08",
    title: "Travel Consultation & Itinerary Planning",
    description:
      "Professional itinerary planning for travelers and agencies seeking Bhutan expertise.",
  },
];

const partnerReasons: CardItem[] = [
  {
    marker: "01",
    title: "We Listen Before Planning",
    description:
      "Your dates, arrival time, interests, hotel style, walking comfort, and travel rhythm guide the itinerary.",
  },
  {
    marker: "02",
    title: "Realistic Day Pacing",
    description:
      "Long drives, flight timing, opening hours, and energy levels are considered before we promise a day.",
  },
  {
    marker: "03",
    title: "Clear Local Coordination",
    description:
      "We coordinate guides, drivers, hotels, documents, and route details from Bhutan rather than treating them as afterthoughts.",
  },
  {
    marker: "04",
    title: "Flexible Route Choices",
    description:
      "Packages can be adjusted for festivals, culture, nature, photography, family travel, soft adventure, or rest time.",
  },
  {
    marker: "05",
    title: "Practical Bhutan Advice",
    description:
      "We help you understand travel documents, SDF guidance, payment preparation, road time, weather, and site access.",
  },
  {
    marker: "06",
    title: "Support During the Trip",
    description:
      "Your arrangements are followed locally, with support available if timing, weather, or guest needs change.",
  },
];

const featurePoints = [
  "Arrival-time-aware planning",
  "Licensed guide and private vehicle coordination",
  "Hotel, route, and activity support",
  "Clear communication before and during travel",
];

const companyInfo: CompanyInfoItem[] = [
  {
    label: "Company Name",
    value: "Unseen Himalayas Bhutan",
  },
  {
    label: "Business Registration No.",
    value: "50001360",
  },
  {
    label: "Tourism Experience",
    value: "4 years",
  },
  {
    label: "Office Address",
    value: "Theengh Apartments, Babesa, Thimphu",
  },
  {
    label: "Phone",
    value: "+975 16168893 / +975 16192762",
  },
  {
    label: "Email",
    value: "info@theunseenhimalayas.com",
  },
];
