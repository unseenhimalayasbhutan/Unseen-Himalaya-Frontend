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
  Sparkles,
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
                <Sparkles aria-hidden="true" />
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
          "What is the difference between booking directly with Unseen Himalaya and booking through an overseas travel agent?",
        answer:
          "Unseen Himalaya is based in Bhutan, so you work directly with the team that coordinates your hotels, guide, transport, route, and local arrangements. Overseas agents usually work through a local Bhutanese operator anyway, so direct booking can make communication faster and planning more transparent.",
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
          "Flights into Bhutan operate through Paro International Airport. Drukair and Bhutan Airlines are the main carriers. We can guide you on suitable routes, flight timing, and arrival planning based on your itinerary.",
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
          "We provide written confirmation, receipts, and clear booking communication. Payment terms are shared before confirmation so you know exactly what is included, what is pending, and when the balance is due.",
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
          "Once approved, the visa clearance is usually shared before travel. You present it for boarding and again on arrival at Paro International Airport, where the visa is verified and stamped.",
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
          "Guests are accompanied by licensed local guides who understand Bhutanese culture, Buddhism, history, etiquette, festivals, and regional differences. We match guides according to the nature of the journey wherever possible.",
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
    id: "health",
    name: "Health & Safety",
    description: "Insurance, altitude, tobacco rules, and safety",
    icon: ShieldCheck,
    faqs: [
      {
        id: "health-0",
        question: "Do I need travel insurance?",
        answer:
          "Yes. Comprehensive travel insurance is strongly recommended and may be required depending on your trip type. It should cover medical care, emergency evacuation, trip cancellation, lost luggage, and trekking if applicable.",
      },
      {
        id: "health-1",
        question: "How is Unseen Himalaya different from other travel agencies?",
        answer:
          "We focus on personalized planning, local knowledge, realistic pacing, respectful cultural access, and responsive on-ground coordination. Our goal is to create a journey that feels authentic, smooth, and carefully handled.",
      },
      {
        id: "health-2",
        question: "Are cigarettes available in Bhutan?",
        answer:
          "Bhutan has strict tobacco rules, and smoking is restricted in public places. Travelers should follow local regulations and declare items where required.",
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
          "Most bookings require a deposit to secure hotels, permits, and planning. The balance is usually due before arrival. Exact payment terms are shared clearly in your quotation.",
      },
    ],
  },
];
