import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Compass,
  MapPin,
  Plane,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type TravelCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

export default function FlightsGettingAroundPage() {
  return (
    <>
      <Header />

      <main className="tour-pro-page">
        <section className="tour-pro-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />
          <div className="container tour-pro-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow">
                <Plane aria-hidden="true" />
                <span>Flights and Getting Around</span>
              </div>

              <h1>Flights to Bhutan and local transport.</h1>
              <p>
                Plan your flight or land entry and understand transport within
                Bhutan. Schedules, routes, baggage rules, border procedures, and
                mountain-road timings can change, so build your itinerary around
                confirmed connections.
              </p>

              <div className="tour-pro-hero-actions">
                <Link href="/contact" className="tour-pro-btn-primary">
                  Ask About Arrival Routes
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link href="/documents" className="tour-pro-btn-secondary">
                  Check Visa and Entry
                </Link>
              </div>
            </div>

            <aside className="tour-pro-hero-card">
              <div className="tour-pro-hero-card-content">
                <p className="tour-pro-card-kicker">Planning note</p>
                <h2>Leave room for weather and mountain roads.</h2>
                <p>
                  Bhutan&apos;s flight operations and road journeys are closely tied
                  to terrain and weather. Sensible connection time and a
                  realistic route make the trip smoother.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <div className="places-section-heading">
              <span>Arrival options</span>
              <h2>Choose the entry route that fits your dates and itinerary.</h2>
              <p>
                Drukair and Bhutan Airlines operate international services to
                Bhutan. Compare current routes, prices, baggage rules, and
                arrival airports through official airline channels before
                finalising travel dates.
              </p>
            </div>

            <div className="places-guidance-grid">
              {travelCards.map((card) => (
                <article key={card.title} className="places-guidance-card">
                  <card.icon aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <ul className="places-check-list">
                    {card.points.map((point) => (
                      <li key={point}>
                        <CheckCircle aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-warm">
          <div className="container">
            <div className="places-section-heading">
              <span>What we can arrange</span>
              <h2>Arrival planning should match the full journey.</h2>
              <p>
                Tell us your starting city, travel dates, preferred entry route,
                group size, and route interests. We can coordinate the itinerary
                around available services and explain which flight bookings,
                transfers, guide services, and transport costs are included in
                your proposal.
              </p>
            </div>

            <div className="tour-pro-cta-card">
              <div>
                <span>Plan the route before you book</span>
                <h2>Share your departure city and travel dates.</h2>
                <p>
                  We will help you compare practical arrival options, avoid
                  rushed connections, and plan onward travel through Bhutan at a
                  comfortable pace.
                </p>
              </div>
              <Link href="/contact" className="tour-pro-btn-primary">
                Plan My Arrival
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

const travelCards: TravelCard[] = [
  {
    icon: Plane,
    title: "Flying to Bhutan",
    description:
      "Air services and airports should be checked on current official airline channels before booking.",
    points: [
      "Drukair and Bhutan Airlines operate international services.",
      "Mountain weather can affect flight operations.",
      "Allow sensible connection time around arrival and departure days.",
    ],
  },
  {
    icon: MapPin,
    title: "Entering by land",
    description:
      "Overland entry is possible at designated border points, subject to the applicable immigration process.",
    points: [
      "Confirm the correct crossing for your route.",
      "Carry the documents required for your nationality.",
      "Plan onward transport before finalising the crossing.",
    ],
  },
  {
    icon: Route,
    title: "Travelling within Bhutan",
    description:
      "Distances on a map can underestimate travel time on mountain roads.",
    points: [
      "Private vehicle and driver arrangements can be included.",
      "Domestic flights may help on longer routes, subject to schedules.",
      "Build in flexibility for weather, roadworks, and scenic stops.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Guides and local access",
    description:
      "Guidance requirements can depend on activity, place, and entry route.",
    points: [
      "A guide is required for monuments and dzongs under current guidance.",
      "Treks require accredited guide or operator support.",
      "We will explain what guided services are included in your proposal.",
    ],
  },
  {
    icon: Clock,
    title: "Timing and delays",
    description:
      "Bhutan journeys work best when the schedule has enough room to breathe.",
    points: [
      "Avoid tight same-day international connections where possible.",
      "Use realistic drive times between valleys.",
      "Keep arrival and departure days lighter when flights are involved.",
    ],
  },
  {
    icon: Compass,
    title: "Route planning",
    description:
      "The best route depends on how long you have and what you want to experience.",
    points: [
      "Short trips can focus on Paro and Thimphu.",
      "Add Punakha, Phobjikha, Haa, or central Bhutan with more time.",
      "Choose fewer valleys for a more comfortable pace.",
    ],
  },
];
