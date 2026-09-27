import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  HandHeart,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type SdfSection = {
  title: string;
  kicker: string;
  body: string;
  points: string[];
};

type SdfRate = {
  traveller: string;
  rate: string;
};

export default function SdfPage() {
  return (
    <>
      <Header />

      <main className="sdf-page">
        <section className="sdf-hero">
          <div className="sdf-hero-bg" aria-hidden="true" />
          <div className="container sdf-hero-grid">
            <div className="sdf-hero-content">
              <div className="tour-pro-eyebrow">
                <Leaf aria-hidden="true" />
                <span>Travel to Bhutan Responsibly</span>
              </div>

              <h1>SDF and Bhutan trip costs</h1>
              <p>
                Your Bhutan budget has several parts: the Sustainable
                Development Fee, any applicable visa fee, flights,
                accommodation, transport, guide services, meals, monument entry,
                activities, and personal spending.
              </p>

              <div className="sdf-hero-actions">
                <Link href="/contact" className="tour-pro-btn-primary">
                  Ask About SDF
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link href="/faq" className="tour-pro-btn-secondary">
                  Read Travel FAQ
                </Link>
              </div>
            </div>

            <aside className="sdf-quick-card">
              <span>Current official snapshot</span>
              <strong>USD 100 per adult per night for most international visitors.</strong>
              <p>
                Rates vary by nationality, age, and eligibility. Children aged
                6-11 receive a 50% concession, children under 6 are exempt, and
                different official categories apply for Indian nationals and
                eligible Bangladeshi visitors.
              </p>
            </aside>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white" id="rates">
          <div className="container sdf-rates-grid">
            <div className="places-section-heading">
              <span>SDF rates by traveller category</span>
              <h2>One government fee, applied by nationality and age.</h2>
              <p>
                The SDF is charged per person, per night. For most international
                visitors, the standard adult rate is USD 100 per night; children
                and eligible regional guests follow concessionary categories.
                Confirm the latest category and rate before quoting or paying.
              </p>
            </div>

            <div className="sdf-rate-card" aria-label="SDF rates in 2026">
              {sdfRates.map((item) => (
                <div key={item.traveller}>
                  <span>{item.traveller}</span>
                  <strong>{item.rate}</strong>
                </div>
              ))}
            </div>

            <div className="sdf-rate-note">
              <p>
                We itemise the SDF separately in quotations and confirm the rate
                applicable to your nationality, ages, route, and travel dates in
                writing before you book.
              </p>
              <a
                href="https://bhutan.travel/faqs"
                target="_blank"
                rel="noreferrer"
              >
                Check the official Bhutan Travel FAQ
              </a>
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <div className="places-section-heading">
              <span>Combined cost guide</span>
              <h2>SDF and Trip Costs also carries the money and fee guidance.</h2>
              <p>
                The former stand-alone money guidance is connected here so
                visitors can understand the full travel budget in one place:
                SDF, visa charges, package inclusions, monument fees, cash,
                cards, digital wallets, tipping, and personal spending.
              </p>
            </div>

            <div className="places-guidance-grid">
              {costGuideLinks.map((item) => (
                <article key={item.title} className="places-guidance-card sdf-theme-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href}>{item.linkLabel}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <div className="places-section-heading">
              <span>What it means</span>
              <h2>The SDF is a contribution to Bhutan&apos;s long-term wellbeing.</h2>
              <p>
                Since Bhutan reopened to international visitors on 23 September
                2022, the country has asked travelers to participate
                meaningfully in its preservation and progress. The fee is framed
                not only as a cost of travel, but as a way to help future guests
                enjoy Bhutan with the same, or better, care and quality.
              </p>
            </div>

            <div className="sdf-pillars-grid">
              {sdfPillars.map((pillar) => (
                <article key={pillar.title} className="sdf-pillar-card">
                  <pillar.icon aria-hidden="true" />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-warm">
          <div className="container sdf-content-grid">
            {sdfSections.map((section) => (
              <article key={section.title} className="sdf-info-card">
                <span>{section.kicker}</span>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>
                      <CheckCircle aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <div className="places-section-heading">
              <span>Development themes</span>
              <h2>Major areas supported through Bhutan&apos;s planning approach</h2>
            </div>

            <div className="places-guidance-grid">
              {sdfThemes.map((theme) => (
                <article key={theme.title} className="places-guidance-card sdf-theme-card">
                  <h3>{theme.title}</h3>
                  <p>{theme.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tour-pro-cta sdf-cta">
          <div className="container">
            <div className="tour-pro-cta-card">
              <div>
                <span>Clear Costs Before You Book</span>
              <h2>We will show the SDF clearly in your Bhutan proposal.</h2>
              <p>
                Share your dates, group size, and route. We will explain what
                  is included, what is paid to the government, what remains
                  separate, and how the fee applies to your travel party.
                </p>
              </div>
              <Link href="/contact" className="tour-pro-btn-primary">
                Request a Quote
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

const sdfPillars = [
  {
    title: "Culture and heritage",
    text: "The SDF helps Bhutan protect living traditions, historic dzongs, sacred spaces, and cultural programmes.",
    icon: HandHeart,
  },
  {
    title: "Environment",
    text: "It supports conservation, forests, wildlife, climate resilience, and Bhutan's careful approach to low-impact tourism.",
    icon: Leaf,
  },
  {
    title: "Public services",
    text: "SDF revenue enters the national system that supports reliable government services, healthcare, education, and infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "Youth opportunity",
    text: "Training, mentorship, skills development, and further education are part of the long-term value Bhutan aims to create.",
    icon: FileText,
  },
];

const sdfRates: SdfRate[] = [
  { traveller: "Adults from countries other than India", rate: "USD 100 per night" },
  { traveller: "Children 6-11 from countries other than India", rate: "USD 50 per night" },
  { traveller: "Children under 6", rate: "No SDF" },
  { traveller: "Indian nationals", rate: "Nu./INR 1,200 per adult per night; Nu./INR 600 for children 6-11" },
  { traveller: "Eligible Bangladeshi visitors", rate: "Reduced category must be checked during application" },
];

const sdfSections: SdfSection[] = [
  {
    kicker: "Use of funds",
    title: "What is the SDF used for?",
    body:
      "The SDF is deposited into Bhutan's Consolidated Account together with other taxes, fees, and levies. Public funds are then used to keep government services operating and to support national development priorities.",
    points: [
      "Stable public services, including salaries, interest payments, and recurring government operations.",
      "Development activities such as schools, free healthcare, youth skilling, forests and wildlife, clean drinking water, infrastructure, and restoration of historic dzongs.",
      "Programmes selected through Bhutan's national planning process and approved public expenditure systems.",
    ],
  },
  {
    kicker: "Transparency",
    title: "How are funds allocated?",
    body:
      "Bhutan's public planning process is designed around accountability, published documents, consultation, and parliamentary approval. The SDF is not handled as a separate private fund; it becomes part of the national public finance system.",
    points: [
      "Government plans, audited financial statements, and public expenditure documents are published for public access.",
      "Five-year plans are prepared through consultation with agencies, local governments, private sector voices, civil society, and other stakeholders.",
      "Gross National Happiness values and cultural priorities are considered when national plans are drafted.",
    ],
  },
  {
    kicker: "Commitments",
    title: "What does Bhutan spend it on?",
    body:
      "The SDF helps Bhutan meet domestic commitments while continuing sustainability work. Tourism is a major revenue source, and visitor contributions help maintain the systems and standards that make travel in Bhutan possible.",
    points: [
      "Public services and development programmes are planned through careful national budgeting.",
      "Revenue helps support Bhutanese citizens while also improving facilities and experiences for visitors.",
      "The approach is holistic rather than limited to isolated projects, because culture, environment, infrastructure, education, and wellbeing are connected.",
    ],
  },
  {
    kicker: "Long view",
    title: "What projects are funded?",
    body:
      "Bhutan works through five-year socio-economic development plans that identify priorities, programmes, and targets. The current planning cycle continues the same national approach: align development with Gross National Happiness and sustainable prosperity.",
    points: [
      "Programmes can touch every sector and region, including local government priorities.",
      "Cross-cutting issues are built into planning so development does not come at the cost of culture, people, or the environment.",
      "SDF contributions help provide resources for a thriving Bhutan for young people now and in the future.",
    ],
  },
];

const costGuideLinks = [
  {
    title: "Currency and payments",
    text:
      "Ngultrum, Indian rupees, card use, ATMs, digital wallets, cash planning, and tipping remain available in the detailed money guide.",
    href: "/currency",
    linkLabel: "Open Money and Payment Guide",
  },
  {
    title: "Monument and museum fees",
    text:
      "Some museums, dzongs, parks, and sacred sites charge admission. Use the dedicated fee table as a working reference and confirm locally.",
    href: "/currency#museum-fees",
    linkLabel: "Open Fee Reference",
  },
  {
    title: "Visa and entry charges",
    text:
      "Visa fees, application timing, and entry documents depend on nationality and current official rules.",
    href: "/documents",
    linkLabel: "Open Visa and Entry",
  },
  {
    title: "Quick cost questions",
    text:
      "Use the FAQ for short answers on SDF, guides, flights, payments, cancellation policies, and planning next steps.",
    href: "/faq",
    linkLabel: "Open Travel FAQs",
  },
];

const sdfThemes = [
  {
    title: "Environment, climate, and poverty",
    text:
      "Bhutan's constitution calls for ecologically balanced development. Planning therefore treats the environment as a foundation for sustainable social and economic progress.",
  },
  {
    title: "Disaster resilience",
    text:
      "Because disaster risk can deepen poverty, prevention and mitigation measures are included wherever possible in development programmes.",
  },
  {
    title: "Gender",
    text:
      "Planning considers gender gaps in areas such as education, employment, representation, and violence prevention, with relevant agencies responsible for action.",
  },
  {
    title: "Vulnerable groups",
    text:
      "Programmes consider youth, children, single parents, older citizens, people with disabilities, and others who need additional support.",
  },
  {
    title: "Sports",
    text:
      "Bhutan recognizes sport as connected to health, youth, community life, culture, tradition, and the natural environment.",
  },
  {
    title: "Nine domains of GNH",
    text:
      "Development programmes are assessed through Bhutan's broader Gross National Happiness lens, including the nine domains that shape national wellbeing.",
  },
  {
    title: "Sustainable Development Goals",
    text:
      "Relevant SDGs, targets, and indicators are integrated into national and local planning where they fit Bhutan's context.",
  },
];
