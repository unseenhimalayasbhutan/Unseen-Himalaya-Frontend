import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  MessageCircle,
  Plane,
  ShieldCheck,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type FAQCategory = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  faqs: FAQItem[];
};

export default function FAQPage() {
  return (
    <>
      <Header />

      <main className="faq-page uh-faq-page">
        <section className="faq-hero uh-faq-hero">
          <div className="faq-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="faq-hero-content">
              <div className="faq-eyebrow">
                <MessageCircle aria-hidden="true" />
                <span>Travel Help Center</span>
              </div>

              <h1 className="faq-hero-title">
                Everything you need to know before travelling to Bhutan.
              </h1>

              <p className="faq-hero-description">
                Find clear answers about booking, payments, visas, flights,
                guides, safety, and cancellation policies. We keep the process
                simple so you can plan your Bhutan journey with confidence.
              </p>


              

              <div className="faq-hero-trust">
                {heroTrust.map((item) => (
                  <div key={item} className="faq-hero-trust-item">
                    <CheckCircle aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="faq-main uh-faq-main">
          <div className="container">
            <div className="faq-layout">
              <aside className="faq-sidebar" aria-label="FAQ categories">
                <div className="faq-sidebar-card">
                  <div className="faq-sidebar-header">
                    <p>Browse by topic</p>
                    <h2>Categories</h2>
                  </div>

                  <nav className="faq-sidebar-nav">
                    {faqCategories.map((category) => (
                      <a
                        key={category.id}
                        href={`#${category.id}`}
                        className="faq-sidebar-link"
                      >
                        <span className="faq-sidebar-link-icon">
                          <category.icon aria-hidden="true" />
                        </span>
                        <span>
                          <strong>{category.name}</strong>
                          <small>{category.faqs.length} questions</small>
                        </span>
                        <ChevronRight className="faq-sidebar-arrow" aria-hidden="true" />
                      </a>
                    ))}
                  </nav>

                  <div className="faq-sidebar-help">
                    <div className="faq-sidebar-help-icon">
                      <MessageCircle aria-hidden="true" />
                    </div>
                    <h3>Need personalized help?</h3>
                    <p>
                      Tell us your travel dates, group size, and what kind of
                      Bhutan experience you want.
                    </p>
                    <Link href="/contact">
                      Contact our team
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </aside>

              <div className="faq-content">
                {faqCategories.map((category) => (
                  <section key={category.id} id={category.id} className="faq-section">
                    <div className="faq-section-header">
                      <div className="faq-section-icon">
                        <category.icon aria-hidden="true" />
                      </div>
                      <div>
                        <p>{category.description}</p>
                        <h2>{category.name}</h2>
                      </div>
                    </div>

                    <div className="faq-accordion uh-faq-accordion">
                      {category.faqs.map((faq) => (
                        <details
                          key={faq.id}
                          className="faq-item uh-faq-item"
                          open={faq.id === "booking-0"}
                        >
                          <summary className="faq-question uh-faq-question">
                            <span>{faq.question}</span>
                            <ChevronDown className="faq-question-icon" aria-hidden="true" />
                          </summary>

                          <div id={`${faq.id}-answer`} className="faq-answer uh-faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                ))}
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
  "Licensed Bhutan travel support",
  "Clear planning guidance",
  "Local on-ground coordination",
];

const faqCategories: FAQCategory[] = [
  {
    id: "booking",
    name: "Booking & Planning",
    description: "Before you confirm your journey",
    icon: Plane,
    faqs: [
      {
        id: "booking-0",
        question:
          "What is the difference between booking directly with Unseen Himalayas Bhutan and booking through an overseas travel agent?",
        answer:
          "Unseen Himalayas Bhutan is based in Bhutan, so you work directly with the team that coordinates your hotels, guide, transport, route, and local arrangements. Overseas agents usually work through a local Bhutanese operator anyway, so direct booking can make communication faster and planning more transparent.",
      },
      {
        id: "booking-1",
        question: "Can I travel solo or do I need to join a group?",
        answer:
          "Solo travel is possible in Bhutan. We can arrange private tours for solo travelers, couples, families, and small groups. You do not need to join a large group unless you prefer a shared departure.",
      },
      {
        id: "booking-2",
        question: "When is the best time to travel to Bhutan?",
        answer:
          "Spring from March to May and autumn from September to November are the most popular seasons because of clear skies, festivals, and comfortable weather. Summer offers lush green valleys, while winter is quieter and can be excellent for cultural travel and photography.",
      },
      {
        id: "booking-3",
        question: "How do I book flights to Bhutan?",
        answer:
          "You can book flights to Bhutan directly through Drukair or Bhutan Airlines, both operating flights to Paro International Airport (PBH) from regional hubs such as Bangkok, Delhi, Kolkata, Kathmandu, Singapore and other selected cities. If you book your trip with Unseen Himalayas Bhutan, we can help you choose suitable flight connections, coordinate them with your itinerary, and assist with your Bhutan visa and travel arrangements. We recommend confirming flight schedules before booking, as routes and timings may change seasonally.",
      },
    ],
  },
  {
    id: "costs",
    name: "Costs & Payments",
    description: "Rates, SDF, cash, cards, and payment security",
    icon: WalletCards,
    faqs: [
      {
        id: "costs-0",
        question: "What does it cost to visit Bhutan?",
        answer:
          "The total cost depends on the season, hotel category, route, number of travelers, guide and transport needs, activities, and the Sustainable Development Fee. Once we know your travel style and dates, we can prepare a clear package proposal.",
      },
      {
        id: "costs-1",
        question: "What currency should I carry?",
        answer:
          "Bhutanese Ngultrum is the local currency. Indian Rupees are also widely accepted in many places, but high denomination notes can sometimes be limited. USD is useful for exchange. Carry some cash for small purchases, tips, and rural areas.",
      },
      {
        id: "costs-2",
        question: "Can I use credit cards in Bhutan?",
        answer:
          "Cards are accepted in many larger hotels, restaurants, and shops in Thimphu and Paro. Cash is still important outside major towns, at smaller shops, and for personal spending. We recommend carrying a backup amount in cash.",
      },
      {
        id: "costs-3",
        question: "How secure is my advance payment?",
        answer:
          "Your advance payment is handled securely and transparently. Payments are made to Unseen Himalayas Bhutan through our official business payment channels, and we provide confirmation and proper payment records for every deposit received. Your deposit is then used to secure confirmed services such as hotels, transportation, guides, visa processing and applicable government fees. As a licensed Bhutanese tour operator, we maintain clear booking records and keep you updated throughout the confirmation process. We understand that sending money internationally requires trust. We are always available for a video call before payment, and you can independently verify Unseen Himalayas Bhutan through the official Bhutan Tourism Services Portal of the Department of Tourism. We also provide booking confirmations, receipts and supporting documents for your peace of mind.",
      },
    ],
  },
  {
    id: "payments",
    name: "Payments & Fund Transfers",
    description: "Bank transfers, cards, UPI, deposits, receipts, and refunds",
    icon: WalletCards,
    faqs: [
      {
        id: "payments-0",
        question: "How can I pay for my Bhutan tour?",
        answer:
          "We offer secure and convenient payment options for both international and regional travelers. Depending on your country and booking, payment can be made by international bank transfer, credit or debit card, UPI, or INR bank transfer. Once your booking is confirmed, our team will provide the appropriate payment instructions together with your invoice.",
      },
      {
        id: "payments-1",
        question: "How can travelers from India make payment?",
        answer:
          "Guests traveling from India can make payments through UPI or supported Indian payment apps, INR bank transfer, or international credit or debit card. For UPI payments, supported Indian UPI apps may be used with our authorized Bhutan merchant payment facility, depending on your bank and UPI provider. For larger tour payments, we may recommend an INR bank transfer.",
      },
      {
        id: "payments-2",
        question: "Can I pay using Google Pay, PhonePe, BHIM or other UPI apps?",
        answer:
          "Yes. Supported Indian UPI applications may be used for payments to compatible Bhutan merchant QR facilities. International UPI functionality must be supported and enabled by your Indian bank or payment application, and transaction limits and availability may vary. Please contact us before making payment so that we can provide the correct payment instructions.",
      },
      {
        id: "payments-3",
        question: "Can international travelers pay by bank transfer?",
        answer:
          "Yes. International guests can pay by SWIFT or international bank transfer directly to our designated business bank account in Bhutan. We will provide the required beneficiary details, SWIFT/BIC information, payment reference, and other instructions with your invoice. Please include your booking or invoice reference so that we can identify your payment correctly.",
      },
      {
        id: "payments-4",
        question: "Can I pay by credit or debit card?",
        answer:
          "Yes, where available for your booking, international credit and debit card payments can be made through our authorized secure payment facility. Supported cards and payment options may vary depending on the issuing bank, country, and payment gateway. For security, never send your full card number, CVV, PIN, or other sensitive card information by email, WhatsApp, or social media.",
      },
      {
        id: "payments-5",
        question: "Do you accept Visa and Mastercard?",
        answer:
          "Yes, supported Visa and Mastercard credit or debit cards can be used through our authorized payment facility, subject to your card issuer's approval and applicable international transaction settings.",
      },
      {
        id: "payments-6",
        question: "Do you accept American Express?",
        answer:
          "American Express availability depends on the payment facility being used. Please contact us before payment if you specifically wish to use an American Express card, and we will confirm the available options.",
      },
      {
        id: "payments-7",
        question: "Can I use Wise or another international money-transfer service?",
        answer:
          "Certain international transfer services may be able to send supported currencies to Bhutan through international banking networks. Availability varies by country, currency, and service provider, so please contact us before initiating the transfer. We will provide the correct beneficiary bank details for your booking.",
      },
      {
        id: "payments-8",
        question: "Can I pay through PayPal?",
        answer:
          "PayPal is not currently one of our standard payment methods. We recommend using one of our approved payment options, such as international bank transfer or supported credit or debit card payment.",
      },
      {
        id: "payments-9",
        question: "What currencies can I pay in?",
        answer:
          "The available payment currency depends on your country and payment method. Indian travelers may be able to pay in INR, while international travelers may use supported foreign currencies through international bank transfer or card payment. Your quotation or invoice will clearly state the applicable currency and amount payable.",
      },
      {
        id: "payments-10",
        question: "Are there any bank or card processing charges?",
        answer:
          "Banks, card issuers, payment gateways, or intermediary banks may apply transaction, foreign-exchange, or international transfer charges. Any applicable payment instructions will be communicated before payment. When making a bank transfer, please ensure that the amount received is sufficient to settle the amount shown as payable on your invoice.",
      },
      {
        id: "payments-11",
        question: "Is online payment secure?",
        answer:
          "Payments are processed through authorized banking or payment facilities. We do not ask guests to send sensitive card information such as their full card number, CVV, or PIN through WhatsApp, email, or social media. Always use the official payment instructions provided by Unseen Himalayas Bhutan.",
      },
      {
        id: "payments-12",
        question: "How much do I need to pay to confirm my booking?",
        answer:
          "The required deposit depends on the services included in your booking. Your quotation, invoice, or booking confirmation will clearly show the booking deposit required, Sustainable Development Fee where applicable, visa or permit-related payments where applicable, remaining tour balance, and final payment due date. Some government fees and confirmed third-party services may require full advance payment.",
      },
      {
        id: "payments-13",
        question: "When is my booking considered confirmed?",
        answer:
          "A quotation or itinerary alone does not constitute a confirmed booking. Your booking is considered confirmed once the required payment has been received and verified and we have issued your official booking confirmation. Hotel rooms and other services remain subject to availability until they are formally secured.",
      },
      {
        id: "payments-14",
        question: "Will I receive confirmation after making payment?",
        answer:
          "Yes. Once your payment has been received and verified, we will provide an acknowledgement or receipt and update you on the status of your booking. Please retain your payment confirmation or transaction reference until your booking has been fully confirmed.",
      },
      {
        id: "payments-15",
        question: "What should I put as the payment reference?",
        answer:
          "Whenever possible, use the booking reference, invoice number, or traveler name provided by our team. This allows us to identify and reconcile your payment quickly.",
      },
      {
        id: "payments-16",
        question: "Can I make payment in installments?",
        answer:
          "Depending on your booking and travel date, payment may be divided between an initial booking deposit and the remaining balance. Any installment arrangement and payment deadlines will be clearly stated in your quotation, invoice, or booking confirmation.",
      },
      {
        id: "payments-17",
        question: "Can I pay the remaining balance after arriving in Bhutan?",
        answer:
          "No. Certain costs must be settled in advance so that we can confirm hotels, transportation, documentation, permits, and other services. Government-related payments may also need to be completed before travel. If a balance can be paid upon arrival, this will be specifically stated in your booking confirmation.",
      },
      {
        id: "payments-18",
        question: "Can someone else make the payment on my behalf?",
        answer:
          "In some circumstances, yes. However, for payment verification and compliance purposes, we may request information identifying the payer and their relationship to the booking. Please inform us in advance if the payment will be made by someone other than the traveler or the person named on the booking.",
      },
      {
        id: "payments-19",
        question: "How are refunds handled?",
        answer:
          "Refund eligibility depends on our Booking, Cancellation & Refund Policy, the timing of cancellation, and the terms imposed by hotels, airlines, and other service providers. Where a refund is approved, it will normally be processed through an appropriate traceable payment channel. Bank, card, foreign-exchange, or third-party charges may apply where applicable. Please refer to our Terms & Conditions and Cancellation & Refund Policy for complete details.",
      },
      {
        id: "payments-20",
        question: "How do I know that I am paying the correct account?",
        answer:
          "For your security, only make payments using the official instructions issued by Unseen Himalayas Bhutan. If you receive unexpected payment instructions or notice a change in bank details, do not transfer the money immediately. Contact us through our official communication channels and verify the details first. We will never ask you to disclose your banking password, OTP, card PIN, or other confidential banking credentials.",
      },
      {
        id: "payments-21",
        question: "Who should I contact if I have difficulty making a payment?",
        answer:
          "Please contact Unseen Himalayas Bhutan and let us know your country, preferred payment method, and booking reference. Our team will provide the most suitable available payment option and guide you through the process.",
      },
    ],
  },
  {
    id: "visa",
    name: "Visas & Documents",
    description: "Passport, visa process, and required documents",
    icon: FileText,
    faqs: [
      {
        id: "visa-0",
        question: "What documents are required to apply for a Bhutan visa?",
        answer:
          "You normally need a clear passport copy with at least six months validity, a passport-size photo, confirmed travel dates, and flight details. We will guide you on the exact documents required before processing.",
      },
      {
        id: "visa-1",
        question: "How will I receive my visa?",
        answer:
          "Once approved, the visa clearance is usually shared before travel. You present it for boarding and again on arrival at the relevant Bhutan entry point, where it is verified under the current immigration process.",
      },
      {
        id: "visa-2",
        question: "Is the visa fee included in my tour package?",
        answer:
          "This depends on the quotation structure. We clearly show whether visa fees, Sustainable Development Fee, hotels, guide, transport, meals, and activities are included in your proposal.",
      },
    ],
  },
  {
    id: "logistics",
    name: "Travel Logistics",
    description: "Guides, internet, plugs, transport, and delays",
    icon: Globe2,
    faqs: [
      {
        id: "logistics-0",
        question: "What kind of travel guides can I expect?",
        answer:
          "Guests are accompanied by licensed local guides who have a deep understanding of Bhutanese culture, Buddhism, history, etiquette, festivals, and regional differences. Wherever possible, we match guides according to the nature and interests of each journey. Guides fluent in different languages are also available upon request, helping ensure a comfortable and engaging experience for guests from different countries.",
      },
      {
        id: "logistics-1",
        question: "What type of electrical plug is used in Bhutan?",
        answer:
          "Bhutan commonly uses 230V electricity with Type D, Type C, and Type F plugs. A universal travel adapter is recommended.",
      },
      {
        id: "logistics-2",
        question: "Can I access the internet in Bhutan?",
        answer:
          "Most hotels in major towns offer Wi-Fi, and local SIM cards provide mobile data in many areas. Remote valleys and mountain routes may have weaker connections.",
      },
      {
        id: "logistics-3",
        question: "What happens if my flight is delayed or the schedule changes?",
        answer:
          "Paro flights can be affected by weather. We monitor changes and adjust the itinerary where possible. Our team supports you with local coordination so disruption is managed calmly.",
      },
      {
        id: "logistics-4",
        question: "Is tipping expected in Bhutan?",
        answer:
          "Tipping is not mandatory, but it is appreciated for good service. Guests often tip guides, drivers, trekking staff, and porters based on the length and quality of service.",
      },
    ],
  },
  {
    id: "guides-languages",
    name: "Guides & Languages",
    description: "Guide requirements, language requests, and local etiquette",
    icon: MessageCircle,
    faqs: [
      {
        id: "guides-languages-0",
        question: "Do I need a guide to travel in Bhutan?",
        answer:
          "According to current official Bhutan Travel guidance, visitors must be accompanied by a guide while travelling in Bhutan. A guide is also required for visitors entering by land who travel beyond the border towns, for entry to monuments and dzongs, and for treks with an accredited tour operator or guide.",
      },
      {
        id: "guides-languages-1",
        question: "Can I request a guide who speaks my preferred language?",
        answer:
          "Yes. Include your preferred language when enquiring. Availability and any additional charges should be confirmed before you book.",
      },
      {
        id: "guides-languages-2",
        question: "Will English be enough for travelling in Bhutan?",
        answer:
          "English is widely understood in Bhutan. An English-speaking guide can also help you communicate with people who prefer a local language.",
      },
      {
        id: "guides-languages-3",
        question: "Do guide wages differ by language?",
        answer:
          "Yes. Guide fees can vary depending on the language required, as multilingual and specialist-language guides may have different availability and professional rates. English- and Hindi-speaking guides are generally more readily available, while guides fluent in languages such as Chinese, French, German, Japanese, and Spanish may be more limited in availability. We confirm the appropriate guide and applicable fee in advance based on the guest’s language preference, itinerary, and requirements.",
      },
      {
        id: "guides-languages-4",
        question: "Can I request a Hindi-speaking guide in Bhutan?",
        answer:
          "Yes. Mention whether you need the entire tour conducted in Hindi or only occasional assistance, so the appropriate level of language support can be checked.",
      },
      {
        id: "guides-languages-5",
        question: "Is a Chinese-speaking guide request specific enough?",
        answer:
          "No. Specify whether you need Mandarin, Cantonese, or another preferred language, and ask for it to be confirmed in your booking.",
      },
      {
        id: "guides-languages-6",
        question: "Are French, German, Japanese, or Spanish guides available?",
        answer:
          "Specialist-language guides may be possible, but availability must be checked for your travel dates, itinerary, and required level of communication before you confirm your trip.",
      },
      {
        id: "guides-languages-7",
        question: "How early should I request a specialist-language guide?",
        answer:
          "Make the request when you first enquire. There is no single booking deadline that guarantees availability, so confirming early gives you more time to consider alternatives.",
      },
      {
        id: "guides-languages-8",
        question: "Can I request a female guide in Bhutan?",
        answer:
          "You can include this preference in your enquiry. The arrangement will depend on availability and should be confirmed before booking.",
      },
      {
        id: "guides-languages-9",
        question: "Will my guide stay with me all day?",
        answer:
          "Yes. Your itinerary should explain which transfers, sightseeing days, and activities include a guide. Accompaniment during scheduled services does not automatically mean round-the-clock personal assistance.",
      },
      {
        id: "guides-languages-10",
        question: "Can my guide help with etiquette and photography permission?",
        answer:
          "Yes. Ask your guide about appropriate behaviour, photography permissions, and local customs before visiting religious sites or meeting community members.",
      },
    ],
  },
  {
    id: "health",
    name: "Health & Safety",
    description: "Insurance, altitude, tobacco rules, and safety",
    icon: ShieldCheck,
    faqs: [
      {
        id: "health-0",
        question: "Do I need travel insurance?",
        answer:
          "Travel insurance is not currently a general entry requirement for Bhutan, but we strongly recommend comprehensive coverage. Certain activities, suppliers, or specialist trips may have their own insurance requirements.",
      },
      {
        id: "health-1",
        question: "How is Unseen Himalayas Bhutan different from other travel agencies?",
        answer:
          "We focus on personalized planning, local knowledge, realistic pacing, respectful cultural access, and responsive on-ground coordination. Our goal is to create a journey that feels authentic, smooth, and carefully handled. We combine professional planning with genuine Bhutanese hospitality rather than treating a journey as simply a series of bookings and sightseeing stops, the focus is on understanding the guest, taking care of the details and delivering an experience that feels personal from the very beginning. We get a special satisfaction in introducing guests to the country we call home — from its mountains and valleys to its villages, traditions, monasteries, people and peaceful way of life.",
      },
      {
        id: "health-2",
        question: "Are cigarettes available in Bhutan?",
        answer:
          "Yes but Bhutan has strict tobacco rules, and smoking is restricted in public places. Travelers should follow local regulations and declare items where required.",
      },
      {
        id: "health-3",
        question: "Can I buy antiques in Bhutan?",
        answer:
          "Bhutan has strict rules on the export of antiques and cultural objects. Buy from registered shops, keep receipts, and ask for proper certification when needed.",
      },
    ],
  },
  {
    id: "cancellation",
    name: "Cancellations & Refunds",
    description: "Deposits, air tickets, refunds, and date changes",
    icon: Clock,
    faqs: [
      {
        id: "cancellation-0",
        question: "What is the cancellation policy for travel to Bhutan?",
        answer:
          "Cancellation policies depend on your package, hotel rules, airline rules, and how close the cancellation is to arrival. We share the applicable cancellation terms before confirmation.",
      },
      {
        id: "cancellation-1",
        question: "What applies if air tickets are issued and then cancelled?",
        answer:
          "Airline cancellation and refund rules apply once tickets are issued. Some tickets may have strict penalties or limited refund value. Travel insurance is recommended.",
      },
      {
        id: "cancellation-2",
        question: "When should I pay for my tour?",
        answer:
          "All bookings require a 50% deposit to secure hotels, permits, and planning. The balance is usually due before arrival. Exact payment terms are shared clearly in your quotation.100% SDF payment is required in advance to process and secure your visa.",
      },
    ],
  },
];
