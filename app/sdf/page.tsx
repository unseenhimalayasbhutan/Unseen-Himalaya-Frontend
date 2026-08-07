import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  HandHeart,
  Leaf,
  ShieldCheck,
  Sparkles,
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
                <Sparkles aria-hidden="true" />
                <span>Travel to Bhutan Responsibly</span>
              </div>

              <h1>SDF - Sustainable Development Fee</h1>
              <p>
                Bhutan asks every visitor to help protect the kingdom's culture,
                environment, public services, infrastructure, and future
                opportunities. The SDF is part of that national commitment.
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
                Children aged 6 to under 12 receive a 50% concession, children
                under 6 are exempt, and Indian nationals follow the official
                Nu./INR rate. We reconfirm applicable rules for your dates.
              </p>
            </aside>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <div className="places-section-heading">
              <span>What it means</span>
              <h2>The SDF is a contribution to Bhutan's long-term wellbeing.</h2>
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
              <h2>Major areas supported through Bhutan's planning approach</h2>
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
                  is included, what is paid to the government, and how the fee
                  applies to your travel party.
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
