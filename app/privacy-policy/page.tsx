import {
  AlertTriangle,
  CalendarDays,
  CheckCircle,
  CreditCard,
  FileText,
  Globe2,
  Mail,
  Plane,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CtaSection } from "../components/CtaSection";
import { siteConfig } from "../siteConfig";

type PolicySection = {
  id: string;
  icon: typeof FileText;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

type PolicyHighlight = {
  icon: typeof FileText;
  title: string;
  description: string;
};

export default function PoliciesPage() {
  return (
    <>
      <Header />

      <main className="legal-pro-page policies-pro-page">
        
        <section className="legal-pro-section legal-pro-section-white policies-pro-overview-section">
          <div className="legal-pro-section-heading">
              <div className="legal-pro-section-label">
                <span />
                Policy Details
                <span />
              </div>

              <h1>Important booking policies for Bhutan travel.</h1>

              <p>
                These policies are designed to help guests understand booking
                confirmation, payments, cancellations, refunds, safety, privacy,
                and responsible conduct before confirming a tour.
              </p>
            </div>
          <div className="container">
            <div className="legal-pro-overview-grid policies-pro-overview-grid">
              {policyHighlights.map((item) => (
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
          id="booking-policies"
          className="legal-pro-section legal-pro-section-warm policies-pro-details-section"
        >
          <div className="container">
            

            <div className="legal-pro-layout policies-pro-layout">
              <aside className="legal-pro-nav-card policies-pro-nav-card" aria-label="Policy sections">
                <span>On this page</span>

                <div>
                  {policySections.map((section, index) => (
                    <a key={section.id} href={`#${section.id}`}>
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </div>
              </aside>

              <div className="legal-pro-content-list policies-pro-content-list">
                {policySections.map((section, index) => (
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
                <span>Policy Summary</span>
                <h2>Bookings are confirmed in writing, not by inquiry alone.</h2>
                <p>
                  A tour is confirmed only after written confirmation and receipt
                  of the required deposit or full payment. Final terms may vary
                  depending on hotels, airlines, government rules, supplier
                  policies, travel dates, and the confirmed quotation.
                </p>
              </div>

              <div className="policies-pro-summary-stats">
                <div>
                  <strong>{policySections.length}</strong>
                  <span>Policies</span>
                </div>

                <div>
                  <strong>14</strong>
                  <span>Days complaint window</span>
                </div>

                <div>
                  <strong>60</strong>
                  <span>Days cancellation mark</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-pro-contact-section policies-pro-contact-section">
          <div className="container legal-pro-contact-card">
            <div>
              <span>Need clarification?</span>
              <h2>Ask us before confirming your booking.</h2>
              <p>
                For booking policy questions, payment schedules, cancellation
                clarification, or supplier-specific terms, contact Unseen
                Himalayas by email.
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

const policyHighlights: PolicyHighlight[] = [
  {
    icon: CreditCard,
    title: "Payment Clarity",
    description:
      "Payment schedules and deadlines are shared before confirmation, including deposit or full-payment requirements.",
  },
  {
    icon: CalendarDays,
    title: "Cancellation Rules",
    description:
      "Cancellation fees depend on timing, supplier policies, confirmed services, and the written booking terms.",
  },
  {
    icon: ShieldCheck,
    title: "Guest Protection",
    description:
      "Guests are encouraged to arrange travel insurance and share health, safety, and special travel requirements early.",
  },
];

const policySections: PolicySection[] = [
  {
    id: "booking-policy",
    icon: FileText,
    eyebrow: "Reservations",
    title: "Booking Policy",
    description:
      "All reservations are subject to availability and written confirmation by Unseen Himalayas Bhutan.",
    points: [
      "A booking is considered confirmed only after receipt of the required deposit or full payment.",
      "Submitting an inquiry, requesting an itinerary, or receiving a quotation does not automatically confirm a booking.",
      "Guests are responsible for ensuring that names, passport details, travel dates, arrival points, hotel preferences, rooming details, and other booking information are accurate.",
      "Final services, inclusions, exclusions, payment terms, and supplier conditions are confirmed in the written quotation or booking confirmation.",
    ],
  },
  {
    id: "payment-policy",
    icon: CreditCard,
    eyebrow: "Payments",
    title: "Payment Policy",
    description:
      "Payment requirements depend on the confirmed itinerary, travel dates, supplier terms, and services included in the quotation.",
    points: [
      "Payment schedules will be communicated at the time of booking.",
      "Full payment must be received before travel unless otherwise agreed in writing.",
      "Bank charges, transfer fees, payment gateway charges, and currency conversion fees are the responsibility of the guest unless stated otherwise.",
      "Failure to complete payment by the agreed deadline may result in cancellation, release of hotel rooms, or changes to the confirmed services.",
    ],
  },
  {
    id: "cancellation-policy",
    icon: CalendarDays,
    eyebrow: "Cancellation",
    title: "Cancellation Policy",
    description:
      "Cancellation charges may apply depending on when the cancellation is made and which services have already been confirmed.",
    points: [
      "Cancellations made 60 days or more before arrival may be subject to charges of up to 50% of the total booking value.",
      "Cancellations made less than 60 days before arrival may be subject to charges of up to 100% of the total booking value.",
      "Additional hotel, airline, guide, transport, permit, payment, or supplier cancellation fees may apply.",
      "Cancellation terms may differ during peak season, festival dates, special events, luxury hotel bookings, group bookings, or services with strict supplier policies.",
    ],
  },
  {
    id: "refund-policy",
    icon: RefreshCcw,
    eyebrow: "Refunds",
    title: "Refund Policy",
    description:
      "Refunds, where applicable, are processed after deducting relevant charges and supplier penalties.",
    points: [
      "Approved refunds will be processed after deducting applicable cancellation charges, supplier penalties, banking fees, payment charges, and administrative costs.",
      "No refunds will be provided for unused services, no-shows, missed transfers, late arrivals, early departures, unused meals, or voluntary itinerary changes by the guest.",
      "Refund processing time may depend on banks, payment channels, suppliers, and documentation requirements.",
      "Any refund approval must be confirmed in writing by Unseen Himalayas Bhutan.",
    ],
  },
  {
    id: "child-policy",
    icon: Users,
    eyebrow: "Children",
    title: "Child Policy",
    description:
      "Children are welcome on suitable itineraries but must be accompanied and supervised by responsible adults.",
    points: [
      "Children must be accompanied by a parent, legal guardian, or responsible adult throughout the tour.",
      "Child rates, room sharing, extra beds, meals, attraction access, and transport arrangements vary by supplier.",
      "Age-based discounts or child rates will be advised at the time of booking where applicable.",
      "Parents or guardians are responsible for the safety, behaviour, health needs, and travel documents of children in their care.",
    ],
  },
  {
    id: "travel-insurance-policy",
    icon: ShieldCheck,
    eyebrow: "Insurance",
    title: "Travel Insurance Policy",
    description:
      "Comprehensive travel insurance is strongly recommended for all travelers visiting Bhutan.",
    points: [
      "Travel insurance should cover medical emergencies, evacuation, trip cancellation, baggage loss, flight disruption, personal liability, and emergency assistance.",
      "Guests should ensure their insurance covers the activities included in their itinerary, such as hiking, high-altitude travel, rafting, biking, or soft adventure experiences.",
      "Unseen Himalayas Bhutan is not responsible for losses that could reasonably be covered by travel insurance.",
      "Guests may be asked to provide insurance details for certain journeys, activities, or remote travel routes.",
    ],
  },
  {
    id: "health-safety-policy",
    icon: AlertTriangle,
    eyebrow: "Safety",
    title: "Health & Safety Policy",
    description:
      "Guest safety is important, especially because Bhutan travel may involve mountain roads, altitude changes, hikes, weather variation, and remote areas.",
    points: [
      "Guests are responsible for ensuring they are medically fit to travel.",
      "Guests must disclose relevant medical conditions, allergies, mobility concerns, dietary requirements, or special assistance needs before departure.",
      "Guests should carry personal medication, prescriptions, and any required medical documentation.",
      "Unseen Himalayas Bhutan may adjust itinerary pacing, activities, or routing if safety, weather, road conditions, health concerns, or operational issues require changes.",
    ],
  },
  {
    id: "itinerary-change-policy",
    icon: Plane,
    eyebrow: "Itinerary",
    title: "Itinerary Change Policy",
    description:
      "Bhutan travel may require operational adjustments due to weather, roads, festivals, flights, safety, government rules, or supplier availability.",
    points: [
      "Unseen Himalayas Bhutan reserves the right to modify itineraries, accommodations, transportation, guides, and activities when necessary.",
      "Changes may be made due to weather conditions, road conditions, operational requirements, safety concerns, government directives, supplier issues, or circumstances beyond reasonable control.",
      "Where possible, suitable alternatives will be arranged to maintain the overall quality and purpose of the journey.",
      "Guests will be informed of major changes as soon as reasonably possible.",
    ],
  },
  {
    id: "force-majeure-policy",
    icon: Globe2,
    eyebrow: "Force Majeure",
    title: "Force Majeure Policy",
    description:
      "Some events are beyond the reasonable control of Unseen Himalayas Bhutan and may affect travel plans.",
    points: [
      "Unseen Himalayas Bhutan shall not be liable for delays, interruptions, cancellations, losses, or additional costs caused by force majeure events.",
      "Force majeure may include natural disasters, severe weather, pandemics, government restrictions, political unrest, road closures, transportation disruption, flight disruption, strikes, or other events beyond reasonable control.",
      "If such events occur, the company will make reasonable efforts to assist guests and suggest alternatives where possible.",
      "Additional costs caused by force majeure events may be the responsibility of the guest unless covered by supplier policies or insurance.",
    ],
  },
  {
    id: "privacy-policy",
    icon: Mail,
    eyebrow: "Privacy",
    title: "Privacy Policy",
    description:
      "Personal information collected during the inquiry and booking process is used to arrange and deliver travel services.",
    points: [
      "Personal information may be used for travel arrangements, communication, quotation preparation, visa support, legal compliance, and service delivery.",
      "Information may need to be shared with hotels, guides, drivers, airlines, government offices, payment processors, or suppliers where required for travel arrangements.",
      "Personal information will not be sold to unauthorized third parties.",
      "Guests should avoid sharing unnecessary sensitive information unless it is relevant to travel planning or service delivery.",
    ],
  },
  {
    id: "complaint-resolution-policy",
    icon: Scale,
    eyebrow: "Complaints",
    title: "Complaint Resolution Policy",
    description:
      "Unseen Himalayas Bhutan aims to resolve concerns quickly and fairly when they are reported in a timely manner.",
    points: [
      "Complaints should be reported immediately during the tour whenever possible so the guide or office can assist while the guest is still traveling.",
      "Written complaints must be submitted within 14 days of tour completion for review and resolution.",
      "Guests should provide clear details, dates, supporting evidence, and relevant communication records where applicable.",
      "Issues not reported during the tour may be more difficult to investigate or resolve after completion.",
    ],
  },
  {
    id: "responsible-travel-policy",
    icon: Globe2,
    eyebrow: "Responsible Travel",
    title: "Responsible Travel Policy",
    description:
      "Guests are expected to travel respectfully and follow Bhutanese culture, environmental values, community standards, and the law of the country.",
    points: [
      "Guests are encouraged to respect Bhutanese culture, traditions, local communities, wildlife, sacred sites, heritage places, and the natural environment.",
      "Guests must follow temple etiquette, local customs, dress expectations, photography rules, waste guidelines, and guide instructions.",
      "Conduct that negatively impacts local communities, wildlife, heritage sites, religious places, the environment, or the law of the country will not be tolerated.",
      "Unseen Himalayas Bhutan may take appropriate action if guest behaviour risks safety, legal compliance, community respect, or the quality of the travel experience.",
    ],
  },
];
