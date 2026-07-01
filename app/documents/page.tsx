import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  CreditCard,
  FileCheck,
  FileText,
  Globe2,
  Heart,
  IdCard,
  MapPin,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type QuickOverviewItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type NavItem = {
  name: string;
  id: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

export default function DocumentsPage() {
  return (
    <>
      <Header />

      <main className="documents-page">
        {/* Hero */}
        <section className="documents-hero">
          <div className="documents-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="documents-hero-grid">
              <div className="documents-hero-content">
                <div className="documents-eyebrow">
                  <Sparkles aria-hidden />
                  <span>Bhutan Entry Guide</span>
                </div>

                <h1 className="documents-hero-title">
                  Documents, visa guidance, and entry requirements for Bhutan.
                </h1>

                <p className="documents-hero-description">
                  Understand what documents you need before travelling to
                  Bhutan, how the visa process works, what to prepare before
                  arrival, and how we help make the paperwork smooth.
                </p>

                <div className="documents-hero-actions">
                  <Link href="/contact" className="documents-btn-primary">
                    Start Visa Guidance
                    <ArrowRight aria-hidden />
                  </Link>
                  <Link href="/cultural-tours" className="documents-btn-secondary">
                    View Bhutan Tours
                  </Link>
                </div>

                <div className="documents-hero-trust">
                  {heroTrust.map((item) => (
                    <div key={item} className="documents-hero-trust-item">
                      <CheckCircle aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="documents-hero-card">
                <div className="documents-hero-card-icon">
                  <IdCard aria-hidden />
                </div>
                <p className="documents-hero-card-kicker">Before You Travel</p>
                <h2>Prepare early, travel smoothly.</h2>
                <p>
                  A valid passport, clear document copies, travel confirmation,
                  and correct visa guidance help avoid delays before your Bhutan
                  journey.
                </p>
                <div className="documents-hero-card-pills">
                  <span>Passport</span>
                  <span>Visa Clearance</span>
                  <span>Insurance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="documents-quick">
          <div className="container">
            <div className="documents-section-header documents-section-header-center">
              <span className="documents-section-line" />
              <span className="documents-section-label">Quick Overview</span>
              <span className="documents-section-line" />
            </div>

            <h2 className="documents-center-title">
              What travelers usually need before arrival.
            </h2>

            <div className="documents-quick-grid">
              {quickOverview.map((item) => (
                <div key={item.label} className="documents-quick-item">
                  <div className="documents-quick-icon">
                    <item.icon aria-hidden />
                  </div>
                  <div>
                    <p>{item.label}</p>
                    <h3>{item.value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="documents-main">
          <div className="container">
            <div className="documents-layout">
              {/* Sidebar */}
              <aside className="documents-sidebar" aria-label="Documents page navigation">
                <div className="documents-sidebar-card">
                  <div className="documents-sidebar-header">
                    <p>Entry Guide</p>
                    <h2>On This Page</h2>
                  </div>

                  <nav className="documents-sidebar-nav">
                    {navItems.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className="documents-sidebar-link">
                        <span>{item.name}</span>
                        <ChevronRight aria-hidden />
                      </a>
                    ))}
                  </nav>

                  <div className="documents-sidebar-help">
                    <div className="documents-sidebar-help-icon">
                      <ShieldCheck aria-hidden />
                    </div>
                    <h3>Need document help?</h3>
                    <p>
                      Send us your travel dates and nationality, and we will
                      guide you on the correct document process.
                    </p>
                    <Link href="/contact">
                      Contact our visa team
                      <ArrowRight aria-hidden />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="documents-content">
                {/* Visa Requirements */}
                <section id="visa" className="documents-section-card">
                  <div className="documents-card-header">
                    <div className="documents-card-icon">
                      <IdCard aria-hidden />
                    </div>
                    <div>
                      <p>Entry permission and visa support</p>
                      <h2>Visa Requirements</h2>
                    </div>
                  </div>

                  <div className="documents-notice">
                    <AlertCircle aria-hidden />
                    <p>
                      <strong>Important:</strong> Bhutan entry rules and fees can
                      change. The final requirement should always be confirmed
                      before travel based on nationality, route, and current
                      official regulations.
                    </p>
                  </div>

                  <div className="documents-subsection">
                    <h3>Visa Processing</h3>
                    <ul className="documents-check-list">
                      {visaProcessing.map((item) => (
                        <li key={item}>
                          <CheckCircle aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="documents-fee-box">
                    <h3>Fees & Inclusions</h3>
                    <p>
                      Visa fees, Sustainable Development Fee, permits, hotels,
                      meals, guide, transport, and activities should be clearly
                      shown in your quotation before confirmation.
                    </p>

                    <div className="documents-fee-items">
                      {feeNotes.map((item) => (
                        <div key={item.label} className="documents-fee-item">
                          <span>{item.label}</span>
                          <strong>{item.value}</strong>
                        </div>
                      ))}
                    </div>

                    <p className="documents-fee-note">
                      Avoid publishing fixed fee amounts unless they are verified
                      with current official sources.
                    </p>
                  </div>
                </section>

                {/* Passport Requirements */}
                <section id="passport" className="documents-section-card">
                  <div className="documents-card-header">
                    <div className="documents-card-icon">
                      <Globe2 aria-hidden />
                    </div>
                    <div>
                      <p>Passport validity and document quality</p>
                      <h2>Passport Requirements</h2>
                    </div>
                  </div>

                  <ul className="documents-check-list">
                    {passportReqs.map((req) => (
                      <li key={req}>
                        <CheckCircle aria-hidden />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="documents-warning">
                    <AlertCircle aria-hidden />
                    <p>
                      <strong>Passport Validity Alert:</strong> Your passport
                      should normally be valid for at least 6 months from your
                      date of entry. Confirm before booking flights if your
                      passport is close to expiry.
                    </p>
                  </div>
                </section>

                {/* Visa Exemptions */}
                <section id="exemptions" className="documents-section-card">
                  <div className="documents-card-header">
                    <div className="documents-card-icon">
                      <ShieldCheck aria-hidden />
                    </div>
                    <div>
                      <p>Nationality-specific entry notes</p>
                      <h2>Visa Exemptions</h2>
                    </div>
                  </div>

                  <div className="documents-info-grid">
                    {exemptionCards.map((card) => (
                      <article key={card.title} className="documents-info-card">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <ul>
                          {card.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>

                  <div className="documents-soft-note">
                    <AlertCircle aria-hidden />
                    <p>
                      Entry permit and visa exemption rules can differ by
                      nationality and entry route. We will help verify the correct
                      process before your travel date.
                    </p>
                  </div>
                </section>

                {/* Entry Points */}
                <section id="entry-points" className="documents-section-card">
                  <div className="documents-card-header">
                    <div className="documents-card-icon">
                      <MapPin aria-hidden />
                    </div>
                    <div>
                      <p>How travelers usually enter Bhutan</p>
                      <h2>Entry Points to Bhutan</h2>
                    </div>
                  </div>

                  <div className="documents-info-grid">
                    {entryPoints.map((entry) => (
                      <article key={entry.title} className="documents-info-card">
                        <h3>{entry.title}</h3>
                        <p>{entry.description}</p>
                        <ul>
                          {entry.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Application Process */}
                <section id="process" className="documents-section-card">
                  <div className="documents-card-header">
                    <div className="documents-card-icon">
                      <Clock aria-hidden />
                    </div>
                    <div>
                      <p>Step-by-step document flow</p>
                      <h2>Application Process</h2>
                    </div>
                  </div>

                  <div className="documents-process-steps">
                    {processSteps.map((step, index) => (
                      <div key={step.title} className="documents-process-step">
                        <div className="documents-process-number">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* What We Provide */}
                <section id="we-provide" className="documents-provide">
                  <div className="documents-card-header">
                    <div className="documents-card-icon">
                      <Heart aria-hidden />
                    </div>
                    <div>
                      <p>Support from our team</p>
                      <h2>What We Provide</h2>
                    </div>
                  </div>

                  <div className="documents-provide-grid">
                    {weProvide.map((item) => (
                      <div key={item} className="documents-provide-item">
                        <CheckCircle aria-hidden />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="documents-provide-footer">
                    <p>We make the document process clearer and easier.</p>
                    <Link href="/contact" className="documents-inline-link">
                      Start your application guidance
                      <ChevronRight aria-hidden />
                    </Link>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faq" className="documents-section-card">
                  <div className="documents-card-header">
                    <div className="documents-card-icon">
                      <AlertCircle aria-hidden />
                    </div>
                    <div>
                      <p>Common traveler questions</p>
                      <h2>Frequently Asked Questions</h2>
                    </div>
                  </div>

                  <div className="documents-faq-list">
                    {visaFaqs.map((faq) => (
                      <article key={faq.question} className="documents-faq-item">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Checklist */}
                <section id="checklist" className="documents-section-card documents-checklist">
                  <div className="documents-card-header">
                    <div className="documents-card-icon">
                      <FileCheck aria-hidden />
                    </div>
                    <div>
                      <p>Before departure</p>
                      <h2>Travel Checklist</h2>
                    </div>
                  </div>

                  <div className="documents-checklist-grid">
                    {checklist.map((item) => (
                      <div key={item} className="documents-checklist-item">
                        <CheckCircle aria-hidden />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="documents-cta">
          <div className="container">
            <div className="documents-cta-card">
              <div>
                <p className="documents-cta-kicker">Travel prepared</p>
                <h2>Ready to start your Bhutan journey?</h2>
                <p>
                  Let us help you understand the documents, permits, travel
                  confirmation, and timing needed for a smooth arrival in Bhutan.
                </p>
              </div>

              <div className="documents-cta-actions">
                <Link href="/contact" className="documents-btn-primary">
                  Contact Our Visa Team
                  <ArrowRight aria-hidden />
                </Link>
                <Link href="/cultural-tours" className="documents-btn-secondary">
                  Browse Tours
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
  "Passport and visa guidance",
  "Clear document checklist",
  "Support before arrival",
];

const quickOverview: QuickOverviewItem[] = [
  {
    icon: Clock,
    label: "Processing",
    value: "Plan ahead before travel",
  },
  {
    icon: IdCard,
    label: "Passport",
    value: "Usually 6+ months validity",
  },
  {
    icon: FileText,
    label: "Documents",
    value: "Clear copies required",
  },
  {
    icon: CreditCard,
    label: "Fees",
    value: "Confirm current official rates",
  },
];

const navItems: NavItem[] = [
  { name: "Visa Requirements", id: "visa" },
  { name: "Passport Requirements", id: "passport" },
  { name: "Visa Exemptions", id: "exemptions" },
  { name: "Entry Points", id: "entry-points" },
  { name: "Application Process", id: "process" },
  { name: "What We Provide", id: "we-provide" },
  { name: "FAQs", id: "faq" },
  { name: "Checklist", id: "checklist" },
];

const visaProcessing = [
  "Visa or entry clearance should be arranged before travel where required.",
  "Processing time can vary, so documents should be submitted early.",
  "A clear passport copy and travel details are usually needed.",
  "Visa or entry approval documents should be carried when travelling.",
  "Rules may differ depending on nationality and entry point.",
];

const feeNotes = [
  { label: "Visa / Entry Fee", value: "$50" },
  { label: "SDF", value: "$100 per person, per day" },
  { label: "Permits", value: "Depends on route" },
  { label: "Package Inclusions", value: "Shown in quotation" },
];

const passportReqs = [
  "Original passport should normally be valid for at least 6 months from entry date.",
  "Passport should have blank pages for immigration stamps.",
  "Passport must be in good physical condition.",
  "A clear color scan or photo is usually required for processing.",
  "The passport used for application should be the same passport used for travel.",
];

const exemptionCards = [
  {
    title: "Indian Citizens",
    description:
      "Indian nationals usually follow a separate entry permit process rather than a standard tourist visa process.",
    items: [
      "Valid passport or accepted national ID may be required.",
      "Entry permit rules should be verified before travel.",
      "Requirements may vary by entry point.",
    ],
  },
  {
    title: "Bangladeshi & Maldivian Citizens",
    description:
      "Visitors from Bangladesh and the Maldives are eligible for a visa on arrival, making entry to Bhutan more convenient.",
    items: [
      "Carry a valid passport.",
      
      "Check the latest immigration rules and regulations before travel dates.",
    ],
  },
  {
    title: "Other Nationalities",
    description:
      "Most other international travelers usually need visa or entry clearance arranged before arrival.",
    items: [
      "Work with a licensed Bhutan travel operator.",
      "Submit documents early.",
      "Carry printed and digital copies while travelling.",
    ],
  },
];

const entryPoints = [
  {
    title: "By Air",
    description:
      "Paro International Airport is Bhutan's main international air entry point.",
    items: [
      "Air arrival is common for international tourists.",
      "Flight schedules can be affected by weather.",
      "Carry your entry approval documents when checking in.",
    ],
  },
  {
    title: "By Land",
    description:
      "Land entry is possible through selected border points depending on nationality and current rules.",
    items: [
      "Common routes connect through India.",
      "Permit checks happen at the border.",
      "Confirm the correct border process before finalizing plans.",
    ],
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Share Your Travel Details",
    description:
      "Send your travel dates, nationality, passport details, route preference, and number of travelers.",
  },
  {
    title: "Prepare Required Documents",
    description:
      "Provide a clear passport copy, photo if required, flight details, and any additional documents needed.",
  },
  {
    title: "Confirm Your Tour",
    description:
      "Finalize the itinerary, quotation, inclusions, payment terms, and document processing requirements.",
  },
  {
    title: "Receive Entry Guidance",
    description:
      "We guide you on approval documents, what to print, what to carry, and what to show while travelling.",
  },
  {
    title: "Arrive in Bhutan",
    description:
      "Present the required documents at check-in, immigration, or border entry as applicable.",
  },
];

const weProvide = [
  "Document requirement guidance",
  "Visa or entry clearance support where required",
  "Permit guidance for route-specific areas",
  "Pre-arrival document checklist",
  "Travel confirmation assistance",
  "Entry document reminders",
  "comprehensive assistance throughout your journey, ensuring every included service is delivered smoothly and every detail is taken care of.",
  "Emergency contact coordination in Bhutan",
];

const visaFaqs: FAQItem[] = [
  {
    question: "How far in advance should I prepare documents?",
    answer:
      "It is best to prepare documents early, especially during peak season. We recommend starting once your travel dates and route are reasonably clear.",
  },
  {
    question: "Can visa or entry rules change?",
    answer:
      "Yes. Entry rules, fees, and required documents can change. We recommend confirming the latest requirements before final payment and before travel.",
  },
  {
    question: "Do children need separate documents?",
    answer:
      "Yes. Every traveler, including children and infants, needs their own valid travel document and any required entry clearance.",
  },
  {
    question: "Can I enter Bhutan by land?",
    answer:
      "Land entry may be possible depending on nationality, route, and current border rules. Confirm before planning flights or overland transfers.",
  },
  {
    question: "Do I need printed copies?",
    answer:
      "Carry both printed and digital copies of key documents, including passport copy, travel confirmation, insurance, and entry approval if applicable.",
  },
];

const checklist = [
  "Valid passport with sufficient validity",
  "Printed and digital passport copy",
  "Visa or entry approval document if applicable",
  "Travel insurance documents",
  "Flight or land transfer details",
  "Tour confirmation or itinerary",
  "Emergency contact information",
  "Hotel or tour operator contact",
  "Passport photos if requested",
  "Prescription medication documents if needed",
];
