import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { siteConfig } from "../siteConfig";

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

type FounderItem = {
  name: string;
  role: string;
  initials: string;
  paragraphs: string[];
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

        {/* Our Story */}
        <section className="about-pro-section about-pro-section-warm">
          <div className="container">
            <div className="about-pro-split-grid">
              <div>
                <div className="about-pro-section-header">
                  <span className="about-pro-section-line" />
                  <span className="about-pro-section-label">Our Story</span>
                </div>

                <h2 className="about-pro-section-title">
                  Built from hands-on tourism work and a friendship behind the company.
                </h2>
              </div>

              <div className="about-pro-story-copy">
                <p>
                  Unseen Himalayas Bhutan was established to combine professional
                  travel planning with genuine Bhutanese hospitality. The company
                  grew from practical experience handling hotels, vehicles,
                  guides, guest timing, route changes, and the small operational
                  details that make a Bhutan trip feel smooth.
                </p>
                <p>
                  Passang and Mamick started the company with the belief that a
                  Bhutan journey should be personal, reliable, and easy to plan.
                  Guests can begin with a ready-made itinerary, then shape it
                  around their own interests, pace, comfort level, and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Founders */}
        <section className="about-pro-section about-pro-section-white">
          <div className="container">
            <div className="about-pro-section-header about-pro-section-header-center">
              <span className="about-pro-section-line" />
              <span className="about-pro-section-label">Meet the Founders</span>
              <span className="about-pro-section-line" />
            </div>

            <h2 className="about-pro-section-title about-pro-center-title">
              The people planning and supporting your Bhutan journey.
            </h2>

            <div className="about-pro-founders-grid">
              {founders.map((founder) => (
                <article key={founder.name} className="about-pro-founder-card">
                  <div className="about-pro-founder-photo" aria-label={`${founder.name} portrait frame`}>
                    <span>{founder.initials}</span>
                    <small>Unseen Himalayas Bhutan</small>
                  </div>

                  <div className="about-pro-founder-copy">
                    <p className="about-pro-founder-role">{founder.role}</p>
                    <h3>{founder.name}</h3>
                    {founder.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How We Plan */}
        <section className="about-pro-section about-pro-section-warm">
          <div className="container">
            <div className="about-pro-section-header about-pro-section-header-center">
              <span className="about-pro-section-line" />
              <span className="about-pro-section-label">How We Plan Your Journey</span>
              <span className="about-pro-section-line" />
            </div>

            <h2 className="about-pro-section-title about-pro-center-title">
              A clear planning process from first enquiry to on-trip support.
            </h2>

            <div className="about-pro-assurance-grid">
              {planningSteps.map((service) => (
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

        {/* Book With Confidence */}
        <section className="about-pro-section about-pro-section-white">
          <div className="container">
            <div className="about-pro-section-header about-pro-section-header-center">
              <span className="about-pro-section-line" />
              <span className="about-pro-section-label">Book With Confidence</span>
              <span className="about-pro-section-line" />
            </div>

            <h2 className="about-pro-section-title about-pro-center-title">
              Practical trust signals for international and regional travelers.
            </h2>

            <div className="about-pro-trust-grid">
              {trustItems.map((item) => (
                <div key={item.title} className="about-pro-trust-card">
                  <span>{item.marker}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="about-pro-verification-panel">
              <div>
                <h3>Licensed & registered in Bhutan</h3>
                <p>
                  Business Registration No. 50001360. Office at Theengh
                  Apartments, Babesa, Thimphu. Written quotations, pro forma
                  invoices, booking terms, and privacy policy are available
                  before confirmation.
                </p>
              </div>

              <div className="about-pro-verification-actions">
                <Link href="/legal-documents" className="about-pro-btn-secondary">
                  View Legal Documents
                </Link>
                <a href={siteConfig.contact.emailHref} className="about-pro-btn-secondary">
                  {siteConfig.contact.email}
                </a>
                <a href={siteConfig.contact.whatsappHref} className="about-pro-btn-primary">
                  WhatsApp Our Team
                </a>
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

const founders: FounderItem[] = [
  {
    name: "Passang Tenzin Tamang",
    role: "Founder & Managing Director, Unseen Himalayas Bhutan",
    initials: "PT",
    paragraphs: [
      "Passang Tenzin Tamang is a 27-year-old Bhutanese entrepreneur and travel enthusiast with around four years of hands-on experience in Bhutan's tourism industry.",
      "Before founding Unseen Himalayas Bhutan, Passang worked with different travel agents and tour operators across Bhutan, gaining practical experience in planning, coordinating and managing journeys for travelers from different countries and backgrounds.",
      "His work involved handling group operations, arranging hotels, transport and guides, coordinating travel logistics, and making sure every journey was managed smoothly from arrival to departure.",
      "Those years of working directly with guests gave him a clear understanding of what makes a Bhutan journey truly enjoyable. A well-designed itinerary is important, but so are the details behind it: choosing the right hotels, allowing comfortable travel times, working with reliable service providers, understanding each guest's interests, and being available when plans need to be adjusted.",
      "Through Unseen Himalayas Bhutan, his approach remains simple: plan carefully, support every journey from start to finish, and make travelling through Bhutan as seamless and enjoyable as possible.",
    ],
  },
  {
    name: "Mamick Pradhan",
    role: "Co-Founder, Unseen Himalayas Bhutan",
    initials: "MP",
    paragraphs: [
      "Mamick Pradhan is a software developer by profession and a naturally curious traveler who has always enjoyed meeting new people, exploring unfamiliar places and learning through different cultures and experiences.",
      "His interest in travel has always been closely connected to people. For him, travelling is not only about visiting new destinations, but also about the connections made along the way and the experiences that stay with you long after the journey ends.",
      "As Co-Founder of Unseen Himalayas Bhutan, Mamick brings a different perspective to the company by combining his technology background with his interest in travel and people.",
      "His experience as a software developer contributes to the company's focus on organization, efficiency and creating a smoother experience for travelers from the moment they begin planning their trip.",
      "Together with Passang, he helped establish Unseen Himalayas Bhutan with the idea of creating a travel company that feels personal, reliable and easy to work with.",
    ],
  },
];

const planningSteps: CardItem[] = [
  {
    marker: "01",
    title: "Understand Your Trip",
    description:
      "We begin with your dates, group size, arrival point, interests, hotel preference, pace, and budget.",
  },
  {
    marker: "02",
    title: "Shape the Route",
    description:
      "Ready-made itineraries are adjusted around culture, nature, festivals, photography, family travel, or rest time.",
  },
  {
    marker: "03",
    title: "Confirm the Details",
    description:
      "Hotels, transport, guide arrangements, inclusions, exclusions, SDF, visa information, and payment terms are clarified in writing.",
  },
  {
    marker: "04",
    title: "Coordinate Locally",
    description:
      "Our Bhutan-based team coordinates the ground operation with local partners before and during the journey.",
  },
  {
    marker: "05",
    title: "Support Changes",
    description:
      "If weather, road timing, festival access, or guest needs change, we help adjust the plan practically.",
  },
  {
    marker: "06",
    title: "Follow Through",
    description:
      "Guests receive direct communication and support from planning through arrival, travel days, and departure.",
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

const trustItems: CardItem[] = [
  {
    marker: "01",
    title: "Licensed Bhutan Tour Operator",
    description:
      "Company details and official documents are available for independent review before booking.",
  },
  {
    marker: "02",
    title: "Local Bhutan-Based Team",
    description:
      "Planning and ground coordination are handled from Bhutan, close to the guides, hotels, vehicles, and routes.",
  },
  {
    marker: "03",
    title: "Direct Communication",
    description:
      "Travelers can reach the team by domain email, phone, WhatsApp, and video call when needed.",
  },
  {
    marker: "04",
    title: "Written Quotations",
    description:
      "Trip costs, inclusions, exclusions, booking policy, and payment schedule are documented before confirmation.",
  },
  {
    marker: "05",
    title: "Support Before and During Travel",
    description:
      "The team remains available for document reminders, route questions, arrival timing, and on-trip coordination.",
  },
  {
    marker: "06",
    title: "Clear Policies",
    description:
      "Terms and conditions, privacy policy, and legal documents are linked from the site for easier review.",
  },
];
