import {
  CheckCircle,
  FileText,
  Lock,
  Mail,
  Megaphone,
  Share2,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CtaSection } from "../components/CtaSection";
import { siteConfig } from "../siteConfig";

type PrivacyIcon = typeof FileText;

type PrivacySection = {
  id: string;
  icon: PrivacyIcon;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

type PrivacyHighlight = {
  icon: PrivacyIcon;
  title: string;
  description: string;
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="legal-pro-page policies-pro-page">
        <section className="legal-pro-section legal-pro-section-white policies-pro-overview-section">
          <div className="legal-pro-section-heading">
            <div className="legal-pro-section-label">
              <span />
              Privacy Policy
              <span />
            </div>

            <h1>How we handle traveller and inquiry information.</h1>

            <p>
              This page explains how Unseen Himalayas Bhutan uses information
              submitted through our website, email, WhatsApp, forms, quotation
              process, and booking administration. Booking terms, payment rules,
              cancellations, and refunds are handled separately on the{" "}
              <Link href="/terms">Booking Terms & Conditions</Link> page.
            </p>
          </div>

          <div className="container">
            <div className="legal-pro-overview-grid policies-pro-overview-grid">
              {privacyHighlights.map((item) => (
                <article key={item.title} className="legal-pro-overview-card">
                  <div className="legal-pro-overview-icon">
                    <item.icon aria-hidden="true" />
                  </div>

                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="privacy-details"
          className="legal-pro-section legal-pro-section-warm policies-pro-details-section"
        >
          <div className="container">
            <div className="legal-pro-layout policies-pro-layout">
              <aside
                className="legal-pro-nav-card policies-pro-nav-card"
                aria-label="Privacy policy sections"
              >
                <span>On this page</span>

                <div>
                  {privacySections.map((section, index) => (
                    <a key={section.id} href={`#${section.id}`}>
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </div>
              </aside>

              <div className="legal-pro-content-list policies-pro-content-list">
                {privacySections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="legal-pro-detail-card policies-pro-detail-card"
                  >
                    <div className="legal-pro-detail-head">
                      <div className="legal-pro-detail-icon">
                        <section.icon aria-hidden="true" />
                      </div>

                      <div>
                        <span>
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {section.eyebrow}
                        </span>

                        <h2>{section.title}</h2>
                      </div>
                    </div>

                    <p>{section.description}</p>

                    <ul>
                      {section.points.map((point) => (
                        <li key={point}>
                          <CheckCircle aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="legal-pro-section legal-pro-section-white policies-pro-summary-section">
          <div className="container">
            <div className="policies-pro-summary-card">
              <div>
                <span>Privacy Summary</span>
                <h2>Booking consent is not automatic marketing consent.</h2>
                <p>
                  We use traveller information to answer inquiries, prepare
                  quotations, support visa/permit guidance, coordinate booked
                  services, communicate during travel, and meet legal or
                  operational requirements. We do not sell personal information
                  to unauthorised third parties.
                </p>
              </div>

              <div className="policies-pro-summary-stats">
                <div>
                  <strong>{privacySections.length}</strong>
                  <span>Privacy sections</span>
                </div>

                <div>
                  <strong>No</strong>
                  <span>Automatic marketing consent</span>
                </div>

                <div>
                  <strong>Written</strong>
                  <span>Photo/video permission</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-pro-contact-section policies-pro-contact-section">
          <div className="container legal-pro-contact-card">
            <div>
              <span>Privacy requests</span>
              <h2>Contact Unseen Himalayas Bhutan about your information.</h2>
              <p>
                Privacy, data, communication, correction, or marketing questions
                may be sent to the official company email.
              </p>
            </div>

            <a href={siteConfig.contact.emailHref} className="legal-pro-btn-primary">
              <Mail aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

const privacyHighlights: PrivacyHighlight[] = [
  {
    icon: UserCheck,
    title: "Travel Administration",
    description:
      "Information is used to respond to inquiries, prepare quotations, and coordinate confirmed travel services.",
  },
  {
    icon: Share2,
    title: "Service Sharing",
    description:
      "Details may be shared with hotels, guides, drivers, airlines, government offices, payment processors, or suppliers where needed.",
  },
  {
    icon: Megaphone,
    title: "Separate Consent",
    description:
      "Booking a tour does not automatically approve marketing messages or identifiable guest photo/video use.",
  },
];

const privacySections: PrivacySection[] = [
  {
    id: "information-collected",
    icon: FileText,
    eyebrow: "Information",
    title: "Information We May Collect",
    description:
      "We collect only the information reasonably needed to respond to travel inquiries, prepare quotations, support booking administration, and deliver confirmed services.",
    points: [
      "Contact details such as name, email address, phone or WhatsApp number, country of residence, and preferred communication channel.",
      "Travel details such as dates, group size, nationality, arrival and departure points, itinerary interests, hotel preferences, rooming needs, and budget or service category.",
      "Traveller details needed for booking support, such as passport names, passport or permit information, dates of birth, flight details, dietary requirements, health or mobility needs, and emergency contacts.",
      "Website or communication details such as messages sent through forms, email, WhatsApp, chatbot interactions, and ordinary technical information generated by website use.",
    ],
  },
  {
    id: "how-we-use",
    icon: UserCheck,
    eyebrow: "Use",
    title: "How We Use Information",
    description:
      "Personal information is used for inquiry handling, quotation preparation, booking coordination, visa or permit guidance, legal compliance, service delivery, and guest support.",
    points: [
      "To answer questions, recommend suitable routes, prepare personalised itineraries, and issue quotations or invoices.",
      "To coordinate services with guides, drivers, hotels, restaurants, airlines, activity providers, government offices, and other relevant suppliers.",
      "To provide pre-arrival updates, during-tour assistance, emergency support, booking records, receipts, and post-travel follow-up.",
      "To investigate service issues, process refunds or overpayments, preserve booking records, meet legal requirements, and protect the Company, guests, staff, and suppliers from misuse or fraud.",
    ],
  },
  {
    id: "sharing",
    icon: Share2,
    eyebrow: "Sharing",
    title: "When Information May Be Shared",
    description:
      "We share information only where reasonably required for travel planning, booking administration, service delivery, legal compliance, payment handling, or guest support.",
    points: [
      "Information may be shared with hotels, guides, drivers, airlines, restaurants, activity providers, payment processors, government offices, or suppliers where needed for the requested or confirmed service.",
      "Passport, nationality, flight, visa, permit, and rooming details may be shared only where necessary for travel arrangements or official processes.",
      "Information may be shared with professional advisers, authorities, or dispute-resolution bodies where legally required or reasonably necessary to protect legitimate rights.",
      "We do not sell personal information to unauthorised third parties.",
    ],
  },
  {
    id: "marketing-photos",
    icon: Megaphone,
    eyebrow: "Consent",
    title: "Marketing, Photos, and Videos",
    description:
      "Booking a tour is not automatic consent to marketing or commercial use of identifiable traveller images.",
    points: [
      "We may send booking-related communications without separate marketing consent because they are needed for inquiry handling, quotation, booking, or travel administration.",
      "Promotional newsletters, campaign messages, or marketing follow-ups are sent only where allowed by applicable law and communication preferences.",
      "Identifiable guest photographs or videos will not be used for marketing without separate permission.",
      "Travellers may ask us to stop non-essential marketing communication through the official contact email.",
    ],
  },
  {
    id: "security-retention",
    icon: Lock,
    eyebrow: "Protection",
    title: "Security and Record Retention",
    description:
      "We take reasonable steps to protect personal information and keep appropriate booking records.",
    points: [
      "Booking records may include quotation versions, invoices, terms versions, acceptance or payment evidence, receipts, amendments, and relevant correspondence.",
      "Records are retained for business, tax, legal, operational, dispute-resolution, and audit purposes where appropriate.",
      "Access to traveller information is limited to people or service providers who reasonably need it for travel administration or support.",
      "No online or electronic system can be guaranteed completely secure, so travellers should avoid sending unnecessary sensitive information unless it is needed for travel planning or booking.",
    ],
  },
  {
    id: "traveller-rights",
    icon: ShieldCheck,
    eyebrow: "Rights",
    title: "Traveller Choices and Requests",
    description:
      "Travellers may contact us about their personal information, communication preferences, or correction needs.",
    points: [
      "Travellers may request correction of inaccurate contact, passport, travel, rooming, dietary, or other booking information.",
      "Travellers may ask questions about how their information is used or shared for a booking.",
      "Some information may need to be retained where required for legal, tax, accounting, supplier, dispute, or booking-record reasons.",
      "Privacy/data requests may be sent to info@theunseenhimalayas.com.",
    ],
  },
  {
    id: "website-links",
    icon: FileText,
    eyebrow: "Website",
    title: "Website Accuracy and Third-Party Links",
    description:
      "Our website may include general travel information, images, route descriptions, third-party links, and service references.",
    points: [
      "Website descriptions, photographs, travel times, festival dates, prices, hotel information, and third-party links are provided in good faith and may change.",
      "Third-party websites are controlled by their operators and may have their own privacy practices.",
      "The confirmed quotation and booking confirmation prevail for a specific booking.",
      "Questions about website content or privacy can be sent to the official company email.",
    ],
  },
];
