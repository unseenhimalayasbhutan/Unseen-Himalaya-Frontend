import {
  AlertTriangle,
  CalendarDays,
  CheckCircle,
  CreditCard,
  FileText,
  Globe2,
  Hotel,
  Mail,
  Route,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CtaSection } from "../components/CtaSection";
import { siteConfig } from "../siteConfig";

type TermsIcon = typeof FileText;

type TermsSection = {
  id: string;
  icon: TermsIcon;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

type QuickTerm = {
  icon: TermsIcon;
  title: string;
  description: string;
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="legal-pro-page terms-pro-page">
        <section className="legal-pro-section legal-pro-section-white">
          <div className="container">
            <div className="legal-pro-section-heading">
              <div className="legal-pro-section-label">
                <span />
                Terms & Condition
                <span />
              </div>

              <h1>Important terms for website use and tour planning.</h1>

              <p>
                The information below protects both the company and the guest by
                explaining what is general website information and what becomes
                confirmed only after quotation, payment, and written agreement.
              </p>
            </div>
            <div className="legal-pro-overview-grid">
              {quickTerms.map((item) => (
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
          id="terms-details"
          className="legal-pro-section legal-pro-section-warm"
        >
          <div className="container">
            

            <div className="legal-pro-layout">
              <aside className="legal-pro-nav-card" aria-label="Terms sections">
                <span>On this page</span>

                <div>
                  {termsSections.map((section, index) => (
                    <a key={section.id} href={`#${section.id}`}>
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </div>
              </aside>

              <div className="legal-pro-content-list">
                {termsSections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="legal-pro-detail-card"
                  >
                    <div className="legal-pro-detail-head">
                      <div className="legal-pro-detail-icon">
                        <section.icon aria-hidden="true" />
                      </div>

                      <div>
                        <span>
                          {String(index + 1).padStart(2, "0")} / {section.eyebrow}
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

        <section className="legal-pro-section legal-pro-section-white">
          <div className="container">
            <div className="legal-pro-notice-card">
              <div className="legal-pro-notice-icon">
                <AlertTriangle aria-hidden="true" />
              </div>

              <div>
                <span>Important Note</span>
                <h2>Final confirmation is always in writing.</h2>
                <p>
                  Website information is for general planning only. The final
                  confirmed tour arrangement is based on the written quotation,
                  invoice, payment confirmation, supplier availability, and any
                  booking agreement shared by Unseen Himalayas Bhutan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-pro-contact-section">
          <div className="container legal-pro-contact-card">
            <div>
              <span>Questions about these terms?</span>
              <h2>Contact Unseen Himalayas Bhutan before confirming your booking.</h2>
              <p>
                For booking questions, website terms, travel clarification, or
                quotation details, contact us by email.
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

const quickTerms: QuickTerm[] = [
  {
    icon: FileText,
    title: "Website Information",
    description:
      "Tour descriptions, prices, images, dates, and travel information are for general planning and may change.",
  },
  {
    icon: CreditCard,
    title: "Booking & Payment",
    description:
      "Bookings are confirmed only after written confirmation and receipt of the required advance payment.",
  },
  {
    icon: ShieldCheck,
    title: "Guest Responsibility",
    description:
      "Guests are responsible for passports, insurance, personal health, and following local laws and travel instructions.",
  },
];

const termsSections: TermsSection[] = [
  {
    id: "website-use",
    icon: Globe2,
    eyebrow: "Website Use",
    title: "Use of Website Information",
    description:
      "The Unseen Himalayas Bhutan website provides general travel information, itinerary ideas, destination details, and inquiry options for guests interested in visiting Bhutan.",
    points: [
      "Website content is provided for planning and general information only.",
      "Itineraries, prices, hotel categories, travel times, festival dates, entry requirements, and availability may change without prior notice.",
      "The final confirmed service is only the service stated in a written quotation, invoice, booking confirmation, or agreement.",
      "Users must not misuse the website, attempt unauthorized access, copy the website structure, or submit false inquiry information.",
    ],
  },
  {
    id: "quotations-bookings",
    icon: FileText,
    eyebrow: "Quotations",
    title: "Quotations, Inquiries, and Booking Confirmation",
    description:
      "Submitting an inquiry through the website does not automatically create a confirmed booking. A booking is confirmed only after Unseen Himalayas Bhutan confirms availability, issues written terms, and receives the required payment.",
    points: [
      "All quotations are subject to hotel, guide, vehicle, flight, permit, and supplier availability at the time of confirmation.",
      "A quotation may include or exclude SDF, visa fee, meals, entrance fees, domestic flights, taxes, special permits, or optional experiences depending on the final written offer.",
      "Guests should carefully review the itinerary, inclusions, exclusions, payment schedule, cancellation terms, and guest details before confirming.",
      "Any verbal discussion, WhatsApp message, or email exchange becomes binding only when confirmed clearly in writing by Unseen Himalayas Bhutan.",
    ],
  },
  {
    id: "prices-payments",
    icon: CreditCard,
    eyebrow: "Payments",
    title: "Prices, Payments, and Currency",
    description:
      "Tour prices depend on travel dates, number of guests, hotel category, room type, meal plan, route, guide, vehicle, permits, and supplier rates.",
    points: [
      "Rates may change due to seasonality, festival dates, exchange rate changes, supplier revisions, government rules, taxes, or availability.",
      "Booking is usually confirmed after receipt of the required advance payment stated in the quotation.",
      "Final payment must be completed by the deadline stated in the booking confirmation or invoice.",
      "Bank charges, foreign exchange fees, card fees, transfer fees, or payment gateway charges may be the responsibility of the guest unless stated otherwise.",
    ],
  },
  {
    id: "inclusions-exclusions",
    icon: CheckCircle,
    eyebrow: "Services",
    title: "Inclusions and Exclusions",
    description:
      "Only services clearly listed under the confirmed inclusions are included in the tour price. Any item not listed as included should be treated as excluded.",
    points: [
      "Common inclusions may include selected accommodation, licensed guide, private vehicle, airport or border transfers, sightseeing, and selected meals as stated in the quotation.",
      "Common exclusions may include international flights, domestic flights, SDF, visa fee, lunches, dinners, drinks, insurance, personal expenses, tips, optional activities, and emergency costs unless clearly included.",
      "Hotel category, room type, bed type, meal plan, and special requests are subject to availability at confirmation.",
      "Optional experiences such as hot stone bath, farmhouse meals, rafting, biking, premium festival arrangements, or special permits must be confirmed separately.",
    ],
  },
  {
    id: "changes-cancellations",
    icon: CalendarDays,
    eyebrow: "Changes",
    title: "Changes, Cancellations, and Refunds",
    description:
      "Tour changes and cancellations are handled according to the confirmed quotation, supplier rules, government policies, and the timing of the cancellation.",
    points: [
      "Cancellation charges may apply from hotels, airlines, guides, transport providers, government offices, payment gateways, and other suppliers.",
      "Date changes are subject to availability and any price difference charged by suppliers.",
      "No-show, early departure, late arrival, unused meals, missed sightseeing, or unused services may not be refundable.",
      "Unseen Himalayas Bhutan may propose suitable alternatives if a confirmed service becomes unavailable due to circumstances outside its control.",
    ],
  },
  {
    id: "itinerary-travel-conditions",
    icon: Route,
    eyebrow: "Itinerary",
    title: "Itinerary Changes and Travel Conditions",
    description:
      "Bhutan travel involves mountain roads, weather conditions, flight timing, local events, government rules, and operational factors that may affect the final travel schedule.",
    points: [
      "Itinerary timing may change due to weather, road conditions, traffic, flight delays, festival crowd movement, safety concerns, or government instructions.",
      "Driving times shown on the website or itinerary are approximate and may vary depending on road and weather conditions.",
      "Festival dates, venue access, photography rules, seating arrangements, and crowd movement should be reconfirmed before final booking.",
      "The guide or company may adjust the sequence of visits to protect guest safety and improve the travel experience.",
    ],
  },
  {
    id: "guest-responsibilities",
    icon: Users,
    eyebrow: "Guests",
    title: "Guest Responsibilities",
    description:
      "Guests are responsible for providing accurate information, preparing necessary documents, respecting local customs, and following travel guidance during the tour.",
    points: [
      "Guests must provide accurate passport details, arrival information, dietary requirements, rooming details, and any relevant travel needs.",
      "Guests are responsible for valid passports, travel insurance, personal medication, health conditions, and emergency contact information.",
      "Guests must respect Bhutanese laws, temple etiquette, local customs, hotel rules, environmental guidelines, and instructions from the guide.",
      "Unseen Himalayas Bhutan may not be responsible for losses caused by incorrect guest information, invalid documents, personal negligence, or failure to follow guidance.",
    ],
  },
  {
    id: "third-party-suppliers",
    icon: Hotel,
    eyebrow: "Suppliers",
    title: "Hotels, Transport, Flights, and Third-Party Services",
    description:
      "Some services are provided by independent suppliers such as hotels, airlines, restaurants, activity providers, guides, drivers, payment processors, and government offices.",
    points: [
      "Unseen Himalayas Bhutan carefully coordinates suppliers but may not directly control every third-party service, schedule, policy, or operational decision.",
      "Hotel rooms, bed types, views, adjoining rooms, special meals, and upgrades are subject to hotel availability.",
      "Flights, permits, government fees, bank processing, and supplier rules may be governed by the relevant provider’s own terms.",
      "Any complaint related to third-party service should be reported immediately during the tour so the company can assist where possible.",
    ],
  },
  {
    id: "liability",
    icon: Scale,
    eyebrow: "Liability",
    title: "Limitation of Liability",
    description:
      "Unseen Himalayas Bhutan will make reasonable efforts to provide services professionally, but some travel risks and external factors are outside the company’s control.",
    points: [
      "The company is not responsible for losses caused by weather, natural events, road closures, flight delays, government actions, illness, accidents, strikes, supplier failure, or force majeure events beyond reasonable control.",
      "Guests are strongly advised to arrange suitable travel insurance covering medical treatment, cancellation, emergency evacuation, baggage, and personal liability.",
      "The company’s responsibility is limited to services directly confirmed and paid for through Unseen Himalayas Bhutan.",
      "Nothing in these terms is intended to exclude liability where exclusion is not permitted by applicable law.",
    ],
  },
  {
    id: "intellectual-property",
    icon: ShieldCheck,
    eyebrow: "Content",
    title: "Website Content and Intellectual Property",
    description:
      "The text, layout, branding, logo, design, itineraries, images, and website materials belong to Unseen Himalayas Bhutan or are used with permission where applicable.",
    points: [
      "Website content may not be copied, reproduced, republished, sold, or used commercially without written permission.",
      "Travel partners, guests, and website users may share website links for inquiry or planning purposes.",
      "Images, names, route descriptions, and branding should not be presented as another company’s product.",
      "If any image or content credit needs correction, contact Unseen Himalayas Bhutan for review.",
    ],
  },
  {
    id: "privacy-contact",
    icon: Mail,
    eyebrow: "Contact",
    title: "Privacy, Communication, and Contact",
    description:
      "When guests contact Unseen Himalayas Bhutan, they may share personal details required for inquiry handling, quotation preparation, visa guidance, and booking coordination.",
    points: [
      "Personal information shared through forms, email, WhatsApp, or direct communication is used to respond to inquiries and arrange travel services.",
      "Guests should avoid sending unnecessary sensitive information unless required for travel planning or booking.",
      "Questions about bookings, website content, or these terms can be sent to the official contact email.",
      "Unseen Himalayas Bhutan may update these terms from time to time to reflect business, legal, supplier, or operational changes.",
    ],
  },
];
