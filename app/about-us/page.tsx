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
                  <span>About Unseen Himalayas</span>
                </div>

                <h1 className="about-pro-hero-title">
                  A Bhutan-based destination management company for authentic,
                  seamless, and personalized journeys.
                </h1>

                <p className="about-pro-hero-description">
                  Unseen Himalayas specializes in curated travel experiences
                  across Bhutan. Backed by 4 years of experience in the tourism industry, we bring in in-depth local knowledge and reliable services.We are also committed to
                  showcasing Bhutan&apos;s rich culture, landscapes, spirituality,
                  hospitality, and local way of life through professional travel
                  planning and reliable ground handling.
                </p>

                <div className="about-pro-hero-actions">
                  <Link href="/contact" className="about-pro-btn-primary">
                    Partner With Us
                  </Link>

                  <Link href="/cultural-tours" className="about-pro-btn-secondary">
                    Explore Tours
                  </Link>
                </div>

                <div className="about-pro-hero-trust">
                  {heroTrust.map((item) => (
                    <div key={item} className="about-pro-hero-trust-item">
                      <span className="about-pro-mini-check" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-pro-hero-card">
                
                <p className="about-pro-hero-card-kicker">Our Promise</p>
                <h2>Travel beyond sightseeing.</h2>
                <p>
                  We believe travel should create genuine connections with
                  Bhutan&apos;s people, culture, nature, spirituality, and
                  everyday hospitality.
                </p>
                <div className="about-pro-hero-card-footer">
                  
                  <span aria-hidden="true">4 years of experience in tourism industry</span>
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
                Curated Bhutan travel.
                <span> Professional local support.</span>
              </h2>
              <p>
                Unseen Himalayas is a Bhutan-based destination management
                company specializing in curated travel experiences across
                Bhutan. Our company focuses on creating meaningful travel
                experiences for international travelers, travel partners, and
                travel agents seeking professional ground handling services and
                reliable operational support in Bhutan.
              </p>
              <p>
                From cultural explorations and luxury escapes to customized
                itineraries and immersive local experiences, we strive to
                provide every guest with exceptional service standards and
                memorable journeys.
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
              Complete Bhutan travel services for guests, partners, and travel agents.
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

        {/* Why Partner With Us */}
        <section className="about-pro-section about-pro-section-white">
          <div className="container">
            <div className="about-pro-split-grid">
              <div className="about-pro-split-content">
                <div className="about-pro-section-header">
                  <span className="about-pro-section-line" />
                  <span className="about-pro-section-label">
                    Why Partner With Us
                  </span>
                </div>

                <h2 className="about-pro-section-title">
                  Reliable local expertise with a long-term partnership approach.
                </h2>

                <p className="about-pro-section-text">
                  We support international travelers, travel partners, and travel agents with responsive communication, personalized guest
                  handling, flexible itinerary planning, and strong destination
                  knowledge across Bhutan.
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
                    Partnership Focus
                  </div>
                  <h3>Professional, responsive, and guest-focused.</h3>
                  <p>
                    Our goal is to build long-term and mutually beneficial
                    collaborations while delivering memorable Bhutan experiences
                    for every guest.
                  </p>

                  <div className="about-pro-feature-points">
                    {featurePoints.map((point) => (
                      <div key={point}>
                        <span className="about-pro-mini-check" aria-hidden="true">✓</span>
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
                  Unseen Himalayas company profile.
                </h2>

                <p className="about-pro-section-text">
                  Thank you for considering Unseen Himalayas as your trusted
                  travel partner in Bhutan. We look forward to building a
                  long-term and mutually beneficial collaboration while
                  delivering memorable experiences to travelers visiting Bhutan.
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
                <p className="about-pro-cta-kicker">Partner With Unseen Himalayas</p>
                <h2>Let&apos;s build memorable Bhutan journeys together.</h2>
                <p>
                  Whether you are a traveler, travel partner, or travel agents,
                  our team is ready to support your Bhutan travel requirements
                  with reliable planning and professional ground handling.
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
    number: "GIT",
    label: "Group inclusive tour",
    note: "Group inclusive tour brings traveler for expertly curated, hassel free journeys.",
  },
  {
    number: "DMC",
    label: "Company Type",
    note: "A Bhutan-based destination management company focused on personalized journeys.",
  },
  {
    number: "B2B",
    label: "Travel Partner Support",
    note: "Ground handling and itinerary support for travel partners and travel agents.",
  },
  {
    number: "FIT",
    label: "Private & Group Travel",
    note: "Flexible arrangements for independent travelers, families, groups, and special interests.",
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
    title: "Luxury & Tailor-Made Travel Experiences",
    description:
      "Personalized travel experiences shaped around comfort level, interests, pace, and guest profile.",
  },
  {
    marker: "03",
    title: "FIT & Group Travel Arrangements",
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
      "Professional itinerary planning for travelers, agencies, and travel agents seeking Bhutan expertise.",
  },
];

const partnerReasons: CardItem[] = [
  {
    marker: "01",
    title: "Professional and Responsive Communication",
    description:
      "Clear communication from inquiry to confirmation and throughout the on-ground operation.",
  },
  {
    marker: "02",
    title: "Personalized Guest Handling",
    description:
      "Operational support tailored to traveler profile, partner needs, and service expectations.",
  },
  {
    marker: "03",
    title: "Service Quality Commitment",
    description:
      "A strong commitment to guest satisfaction, reliable coordination, and memorable journeys.",
  },
  {
    marker: "04",
    title: "Flexible Itinerary Planning",
    description:
      "Customized routing based on timing, interests, budget, comfort level, and travel style.",
  },
  {
    marker: "05",
    title: "Reliable Local Expertise",
    description:
      "Destination knowledge, local networks, and practical understanding of how travel works in Bhutan.",
  },
  {
    marker: "06",
    title: "Long-Term Partnership Approach",
    description:
      "A relationship-focused approach for partners and travel agents seeking dependable collaboration.",
  },
];

const featurePoints = [
  "Professional and responsive communication",
  "Personalized guest handling and operational support",
  "Flexible and customized itinerary planning",
  "Reliable local expertise and destination knowledge",
];

const companyInfo: CompanyInfoItem[] = [
  {
    label: "Company Name",
    value: "Unseen Himalayas",
  },
  {
    label: "Business Registration No.",
    value: "50001306",
  },
  {
    label: "Experience in tourism industry",
    value: "4 years ",
  },
  {
    label: "Office Address",
    value: "Theengh's Apartments, Babesa, Thimphu",
  },
  {
    label: "Phone",
    value: "+975 16168893",
  },
  {
    label: "Email",
    value: "Unseenhimalayasbhutan@gmail.com",
  },
];
