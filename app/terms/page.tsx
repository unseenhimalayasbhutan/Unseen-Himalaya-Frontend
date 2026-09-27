import {
  AlertTriangle,
  CalendarDays,
  CheckCircle,
  CreditCard,
  FileText,
  Globe2,
  Hotel,
  Mail,
  Plane,
  RefreshCcw,
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

type ScheduleRow = {
  label: string;
  value: string;
  note: string;
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
                Booking Terms & Conditions
                <span />
              </div>

              <h1>Booking terms, payment policy, cancellations, and refunds.</h1>

              <p>
                Version 3.0, effective 20 September 2026. These terms apply to
                direct business-to-consumer bookings with Unseen Himalayas,
                using the customer-facing name Unseen Himalayas Bhutan.
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

        <section className="legal-pro-section legal-pro-section-white">
          <div className="container">
            <div className="legal-pro-notice-card">
              <div className="legal-pro-notice-icon">
                <AlertTriangle aria-hidden="true" />
              </div>

              <div>
                <span>Important</span>
                <h2>A quotation is not a confirmed reservation.</h2>
                <p>
                  A booking becomes confirmed only after the applicable payment
                  has cleared, required information has been supplied, material
                  supplier availability has been checked, and written booking
                  confirmation has been issued. Payment may also constitute
                  acceptance when the quotation and these terms were supplied
                  before payment.
                </p>
              </div>
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
                  <a href="#schedule-a">
                    <strong>A</strong>
                    <span>Payment Schedule</span>
                  </a>
                  <a href="#schedule-b">
                    <strong>B</strong>
                    <span>Cancellation Schedule</span>
                  </a>
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

                <section id="schedule-a" className="legal-pro-detail-card">
                  <div className="legal-pro-detail-head">
                    <div className="legal-pro-detail-icon">
                      <CreditCard aria-hidden="true" />
                    </div>
                    <div>
                      <span>Schedule A</span>
                      <h2>Payment Policy</h2>
                    </div>
                  </div>

                  <p>
                    These are the standard rules for direct B2C bookings. A
                    clearly stated special payment schedule in a confirmed
                    quotation prevails for that booking.
                  </p>

                  <ul>
                    {paymentSchedule.map((row) => (
                      <li key={row.label}>
                        <CheckCircle aria-hidden="true" />
                        <span>
                          <strong>{row.label}:</strong> {row.value} {row.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="schedule-b" className="legal-pro-detail-card">
                  <div className="legal-pro-detail-head">
                    <div className="legal-pro-detail-icon">
                      <CalendarDays aria-hidden="true" />
                    </div>
                    <div>
                      <span>Schedule B</span>
                      <h2>Cancellation & Refund Policy</h2>
                    </div>
                  </div>

                  <p>
                    The percentages below apply to private/FIT Land-Tour Package
                    Amounts unless a stricter special condition was clearly
                    disclosed for a specific booking or service.
                  </p>

                  <ul>
                    {cancellationSchedule.map((row) => (
                      <li key={row.label}>
                        <CheckCircle aria-hidden="true" />
                        <span>
                          <strong>{row.label}:</strong> {row.value} {row.note}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p>
                    Example: if the land-tour package is USD 4,000, a separate
                    disclosed non-refundable flight is USD 500, total paid is USD
                    4,500, and written cancellation is received 20 days before
                    arrival, the land-tour charge is 75% of USD 4,000, or USD
                    3,000. The flight remains non-refundable at USD 500. Refund:
                    USD 4,500 - USD 3,000 - USD 500 = USD 1,000.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-pro-contact-section">
          <div className="container legal-pro-contact-card">
            <div>
              <span>Official contacts</span>
              <h2>Contact Unseen Himalayas Bhutan before confirming your booking.</h2>
              <p>
                Business Licence No. 50001360. Business address: Theengh
                Apartments, Babesa, Thimphu, Bhutan. Office hours: 11:00 AM-6:00
                PM Bhutan Time, with 24/7 during-tour emergency assistance
                through assigned travel contacts.
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
    title: "Direct Traveller Terms",
    description:
      "These terms govern direct B2C bookings. B2B travel agents and commercial partners may receive separate written terms.",
  },
  {
    icon: CreditCard,
    title: "Clear Payment Rules",
    description:
      "Standard private/FIT bookings use a 50% land-tour deposit and 50% balance no later than 30 days before arrival.",
  },
  {
    icon: RefreshCcw,
    title: "Defined Refund Formula",
    description:
      "Refunds are calculated from payments received minus applicable land-tour charges, permitted third-party costs, and unrecovered remittance charges.",
  },
];

const termsSections: TermsSection[] = [
  {
    id: "definitions-documents",
    icon: FileText,
    eyebrow: "Definitions",
    title: "Definitions and Order of Documents",
    description:
      "These terms define the Company, traveller roles, land-tour package amount, affected land-tour value, third-party costs, business days, and written communications.",
    points: [
      "Company, we, us, or our means Unseen Himalayas, using the customer-facing name Unseen Himalayas Bhutan.",
      "Land-Tour Package Amount excludes separately itemised SDF, visa or permit fees, air tickets, travel insurance, payment charges, and items governed by separate rules.",
      "Affected Land-Tour Value means only the portion of the confirmed Land-Tour Package Amount directly cancelled or materially reduced.",
      "If booking documents conflict, the order is special accepted conditions, confirmed quotation and invoice, these terms and schedules, then general website information.",
    ],
  },
  {
    id: "booking-confirmation",
    icon: ShieldCheck,
    eyebrow: "Confirmation",
    title: "Booking, Acceptance, and Confirmation",
    description:
      "Quotations are prepared from traveller details, requested dates, group size, hotels, rooming, meals, transport, itinerary, and services. They are subject to validity and supplier availability.",
    points: [
      "Preferred acceptance is written approval followed by payment; payment also accepts the quotation and terms when both were supplied before payment.",
      "The Company verifies cleared funds and material supplier availability before issuing written booking confirmation.",
      "If a material service cannot be confirmed after payment, the traveller may accept a reasonable alternative or receive a refund of the affected payment.",
      "Travellers must provide complete and accurate passport names, nationality, dates of birth, travel dates, flight details, and other required information.",
    ],
  },
  {
    id: "prices-inclusions",
    icon: CheckCircle,
    eyebrow: "Prices",
    title: "Price, Inclusions, and Price Changes",
    description:
      "Only services expressly stated as included in the confirmed quotation form part of the package.",
    points: [
      "SDF, visa or permit fees, monument fees, meals, air tickets, activities, and other items are included only where the quotation says so.",
      "Before confirmation, prices may change because of availability, supplier rates, exchange rates, taxes, festival surcharges, or government charges.",
      "After confirmation, the Company will not arbitrarily increase the confirmed price, but genuine new mandatory government or statutory charges may be passed through.",
      "Complimentary services have no cash redemption value and may be substituted where practicable if weather, safety, government restrictions, operations, or availability prevent delivery.",
    ],
  },
  {
    id: "payment-policy",
    icon: CreditCard,
    eyebrow: "Payments",
    title: "Payment Policy",
    description:
      "Payment is received only when cleared funds reach an authorised Company account or approved processor.",
    points: [
      "For standard private/FIT land tours, 50% of the Land-Tour Package Amount is due to secure the booking and the remaining 50% is due no later than 30 calendar days before arrival.",
      "For bookings made within 30 days of arrival, 100% of the Land-Tour Package Amount is due before confirmation unless otherwise agreed in writing.",
      "Government fees, including SDF and applicable visa or permit fees, and air tickets are payable 100% when required to process or secure them.",
      "Payments must be made only to official invoice details; the Company will never request a password, PIN, OTP, or online-banking login credential.",
    ],
  },
  {
    id: "traveller-changes",
    icon: Route,
    eyebrow: "Changes",
    title: "Traveller-Requested Changes and Rescheduling",
    description:
      "Changes to dates, hotels, room types, itineraries, flights, activities, or other confirmed arrangements are subject to availability.",
    points: [
      "The traveller bears actual supplier amendment fees, fare differences, and price differences caused by the requested change.",
      "Date-change requests should normally be made at least 45 days before arrival; premium hotels, festivals, groups, villas, flights, and special services may require 60-90 days notice or may be non-transferable.",
      "Successfully transferred services are not treated as cancelled, but supplier amendment charges, non-transferable components, and new-date price differences remain payable.",
      "A reduction in group size may increase the per-person price for continuing travellers because shared fixed costs are spread across fewer people.",
    ],
  },
  {
    id: "cancellations-refunds",
    icon: RefreshCcw,
    eyebrow: "Refunds",
    title: "Traveller Cancellation and Refunds",
    description:
      "Cancellation must be sent in writing to the Company email or monitored WhatsApp. Timing is measured in calendar days using Bhutan Time from the scheduled tour commencement or arrival date.",
    points: [
      "The standard Company cancellation percentages apply to the Affected Land-Tour Value, not automatically to SDF, visa or permit charges, air tickets, or separately governed third-party amounts.",
      "The same cost will never be deducted twice; additional non-refundable third-party costs may be deducted only when actual, non-refundable, separately itemised or disclosed, and not already represented by the land-tour cancellation charge.",
      "Refund = payments received for the affected booking minus Company cancellation charge minus permitted additional non-refundable third-party costs minus actual non-recoverable refund or remittance charges minus amounts already refunded or credited.",
      "No refund is ordinarily payable for no-show, voluntary early departure, missed transfer caused by the traveller, or voluntarily unused service after commencement, except where required by law or caused by Company failure.",
    ],
  },
  {
    id: "refund-processing",
    icon: CalendarDays,
    eyebrow: "Processing",
    title: "Refund Processing Standards",
    description:
      "Refunds and overpayments are normally returned to the original payer and original payment source after reasonable verification.",
    points: [
      "A complete refund request will be acknowledged within 3 business days.",
      "The Company will provide a calculation or meaningful status update within 10 business days.",
      "A Company-controlled approved refund will be initiated within 14 business days after the refund amount is determined.",
      "Supplier or government-controlled recoverable amounts will be remitted within 7 business days after the Company receives or is credited with them, with updates at least every 30 days while pending.",
    ],
  },
  {
    id: "company-changes",
    icon: Plane,
    eyebrow: "Operations",
    title: "Changes or Cancellation by the Company",
    description:
      "Weather, roads, flight schedules, religious events, government instructions, attraction closures, and similar circumstances may require reasonable changes.",
    points: [
      "The Company will seek to preserve the overall character and service level of the confirmed journey and communicate material changes as soon as reasonably practicable.",
      "A traveller may reject a materially different substitute, such as a significant hotel downgrade, removal of a core booked service, substantial duration reduction, or major route change.",
      "If the Company cancels the entire tour before commencement for a reason within its reasonable control, the traveller may choose a reasonable substitute or a refund of amounts paid for services cancelled by the Company.",
      "Where cancellation is caused by the Company’s own operational error and a Company-arranged supplier retains a non-refundable amount, the Company bears that supplier loss subject to non-excludable law.",
    ],
  },
  {
    id: "force-majeure",
    icon: Globe2,
    eyebrow: "Force Majeure",
    title: "Force Majeure and Extraordinary Circumstances",
    description:
      "Extraordinary circumstances may include severe weather, natural disaster, landslide, road or border closure, epidemic, strike, civil disturbance, government action, major transport disruption, or comparable events outside reasonable control.",
    points: [
      "Where the journey becomes impossible, unlawful, or materially unsafe before commencement, the first remedy is reasonable rescheduling.",
      "Transferred services are not treated as cancelled; non-transferable components follow applicable supplier, government, refund, or cancellation rules.",
      "A disclosed non-refundable planning or administration fee of Nu. 2,000 per booking may be retained where the work has already been performed and the fee was disclosed before booking.",
      "Extra accommodation, transport, flights, meals, or emergency services caused by circumstances outside the Company’s control are not automatically included in the original package price.",
    ],
  },
  {
    id: "sdf-visa-air",
    icon: FileText,
    eyebrow: "Government",
    title: "SDF, Visa/Permit, and Air-Ticket Rules",
    description:
      "SDF is a Government of Bhutan charge and is separate from the Company’s land-tour cancellation percentage.",
    points: [
      "Where the Company paid SDF on the traveller’s behalf, it will request any available refund and pass on the amount actually received, less any government or bank deduction actually applied.",
      "Visa or permit approval is decided by the relevant authority and cannot be guaranteed by the Company.",
      "Traveller document error, ineligibility, voluntary withdrawal, authority delay, or Company administrative error are handled according to the specific cause and applicable supplier/government rules.",
      "Airline fare rules, change or cancellation conditions, baggage rules, and refund restrictions apply to tickets issued by the airline and remain separate from the land-tour cancellation schedule.",
    ],
  },
  {
    id: "suppliers",
    icon: Hotel,
    eyebrow: "Suppliers",
    title: "Accommodation, Guides, Transport, and Third-Party Suppliers",
    description:
      "Hotels remain subject to availability until confirmed, and independent suppliers may apply their own terms.",
    points: [
      "If a confirmed hotel becomes unavailable for reasons outside the Company’s reasonable control, the Company will arrange a reasonable comparable alternative where possible.",
      "Licensed guides, drivers, and appropriate vehicles are arranged according to the confirmed itinerary and group requirements.",
      "A named guide, driver, or vehicle is not guaranteed unless expressly agreed in writing.",
      "The Company exercises reasonable care in selecting and coordinating suppliers and remains responsible for its own negligence, misrepresentation, booking error, or coordination error.",
    ],
  },
  {
    id: "traveller-responsibilities",
    icon: Users,
    eyebrow: "Travellers",
    title: "Traveller Responsibilities, Insurance, Safety, and Conduct",
    description:
      "Travellers are responsible for valid passports, transit visas, permits, documents, health disclosures, personal property, and respectful conduct.",
    points: [
      "Comprehensive travel insurance is strongly recommended for normal tours, including cancellation, medical treatment, emergency evacuation, baggage, flight disruption, and planned activities.",
      "Travellers should disclose material medical, mobility, dietary, or accessibility requirements that may affect arrangements.",
      "Travellers must follow reasonable instructions of guides, drivers, hotels, activity providers, and competent authorities.",
      "Immediate restriction or termination may occur for violence, credible threats, serious unlawful conduct, harassment, intoxication creating danger, deliberate damage, or substantial safety risk.",
    ],
  },
  {
    id: "emergency-complaints",
    icon: Mail,
    eyebrow: "Support",
    title: "Emergency Assistance and Complaints",
    description:
      "During travel in Bhutan, the Company provides 24/7 emergency assistance through the assigned guide, driver, and Company managing directors listed in final travel documents.",
    points: [
      "Service problems should be reported immediately to the guide and/or Company so there is a fair opportunity to investigate and rectify the issue while the traveller is in Bhutan.",
      "If unresolved during travel, a written complaint should preferably be submitted within 14 days after tour completion with relevant details and evidence.",
      "The Company will acknowledge a written complaint within 3 business days and provide a substantive response or meaningful status update within 14 business days, or within 21 business days for complex cases with an explanation.",
      "Escalation may be requested to Managing Director Passang Tenzin Tamang using the subject Formal Complaint - Escalation.",
    ],
  },
  {
    id: "liability",
    icon: Scale,
    eyebrow: "Liability",
    title: "Liability",
    description:
      "Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited.",
    points: [
      "Subject to non-excludable law, the Company is responsible for direct loss proven to result from its own breach of contract, negligence, misrepresentation, or material booking/coordination error.",
      "To the extent permitted by law, the Company is not liable for indirect or consequential loss, loss of business or profit, or loss caused by the traveller, independent supplier actions outside Company control, or extraordinary circumstances outside reasonable control.",
      "To the extent permitted by law, liability for purely financial direct loss from an affected Company-controlled service is capped at the amount actually paid to the Company for that affected service.",
      "The cap does not apply where law requires a higher remedy or where liability cannot lawfully be capped.",
    ],
  },
  {
    id: "privacy-marketing-ip",
    icon: ShieldCheck,
    eyebrow: "Privacy",
    title: "Privacy, Marketing, Website Content, and Intellectual Property",
    description:
      "Personal information is handled under the Privacy Policy. Booking consent is not automatic consent to marketing.",
    points: [
      "Booking a tour does not automatically authorise commercial use of an identifiable traveller’s photographs or videos.",
      "Official email, invoice, booking confirmation, and recognised Company channels may be used for booking administration and contractual communications.",
      "Website descriptions, photographs, travel times, festival dates, prices, hotel information, and third-party links are provided in good faith and may change.",
      "The Company’s original itineraries, photographs, written content, logo, branding, brochures, layouts, and design material may not be copied, republished, sold, commercially reused, or presented as another business’s product without permission.",
    ],
  },
  {
    id: "governing-law",
    icon: Globe2,
    eyebrow: "Law",
    title: "Governing Law, Dispute Resolution, and General Terms",
    description:
      "These terms and direct bookings are governed by the applicable laws of the Kingdom of Bhutan, subject to mandatory consumer protections or other rights that legally apply.",
    points: [
      "The parties will first attempt good-faith direct resolution through the complaint and escalation process.",
      "The parties may then agree to mediation or another lawful alternative dispute-resolution process.",
      "If unresolved, proceedings may be brought before a court of competent jurisdiction in Bhutan without restricting any mandatory right the traveller has to use another forum under applicable law.",
      "If a provision is invalid or unenforceable, the remaining provisions continue to apply to the extent permitted by law.",
    ],
  },
];

const paymentSchedule: ScheduleRow[] = [
  {
    label: "Standard private/FIT journey",
    value:
      "50% at booking and 50% no later than 30 days before arrival.",
    note: "Applies to the Land-Tour Package Amount only.",
  },
  {
    label: "Booking made within 30 days of arrival",
    value:
      "100% before confirmation unless another arrangement is expressly agreed in writing.",
    note: "Applies to the Land-Tour Package Amount.",
  },
  {
    label: "SDF, visa/permit fees, and air tickets",
    value: "100% when required to process or secure the relevant service.",
    note: "Separate government or airline rules apply.",
  },
  {
    label: "Luxury, festival, group, trekking, charter, or special booking",
    value:
      "Higher deposit, earlier balance, or full advance payment may apply.",
    note: "Only where disclosed in the confirmed quotation or special condition.",
  },
  {
    label: "Charges and short payments",
    value:
      "Sender bank, intermediary bank, card, payment-provider, and foreign-exchange charges are normally borne by the traveller.",
    note: "Any material shortfall remains payable unless waived in writing.",
  },
];

const cancellationSchedule: ScheduleRow[] = [
  {
    label: "31 days or more before arrival",
    value: "0% Company cancellation charge; 100% land-tour refund before permitted separate deductions.",
    note: "Government fees, air tickets, and separately governed third-party items follow their own rules.",
  },
  {
    label: "Exactly 30 days before arrival",
    value: "25% of affected land-tour value; 75% land-tour refund before permitted separate deductions.",
    note: "No double deduction.",
  },
  {
    label: "15-29 days before arrival",
    value: "75% of affected land-tour value; 25% land-tour refund before permitted separate deductions.",
    note: "No double deduction.",
  },
  {
    label: "8-14 days before arrival",
    value: "100% of affected land-tour value; 0% land-tour refund.",
    note: "Separate government and airline items follow their own rules.",
  },
  {
    label: "0-7 days before arrival or no-show",
    value: "100% of affected land-tour value; 0% land-tour refund.",
    note: "Unused services after commencement are ordinarily non-refundable.",
  },
];
