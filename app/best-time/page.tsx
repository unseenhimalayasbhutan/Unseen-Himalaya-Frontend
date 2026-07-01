import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";

type SeasonOverview = {
  name: string;
  months: string;
  summary: string;
};

type NavItem = {
  name: string;
  id: string;
};

type SeasonDetail = {
  name: string;
  months: string;
  description: string;
  weather: string[];
  bestFor: string[];
  tags: string[];
};

type MonthlyGuideItem = {
  name: string;
  rating: number;
  badges: string[];
  description: string;
};

type ActivityTiming = {
  name: string;
  description: string;
  seasons: string[];
};


type TimeFaq = {
  question: string;
  answer: string;
};

export default function BestTimePage() {
  return (
    <>
      <Header />

      <main className="besttime-page">
        {/* Hero */}
        <section className="besttime-hero">
          <div className="besttime-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="besttime-hero-grid">
              <div className="besttime-hero-content">
                <div className="besttime-eyebrow">
                  <span>Bhutan Travel Seasons</span>
                </div>

                <h1 className="besttime-hero-title">
                  The best time to visit Bhutan depends on what you want to
                  experience.
                </h1>

                <p className="besttime-hero-description">
                  Spring and autumn are ideal for clear skies, festivals, and
                  trekking. Winter is peaceful and beautiful for cultural travel,
                  while summer offers lush valleys, fewer crowds, and excellent
                  value.
                </p>

                <div className="besttime-hero-actions">
                  <Link href="/contact" className="besttime-btn-primary">
                    Ask for Travel Advice
                  </Link>
                  <Link href="/cultural-tours" className="besttime-btn-secondary">
                    View Bhutan Tours
                  </Link>
                </div>

                <div className="besttime-hero-trust">
                  {heroTrust.map((item) => (
                    <div key={item} className="besttime-hero-trust-item">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="besttime-hero-card">
                <p className="besttime-hero-card-kicker">Quick Answer</p>
                <h2>Best overall months</h2>
                <p>
                  March to May and September to November are the most popular
                  months for first-time travelers because the weather is
                  comfortable and the views are usually clearer.
                </p>
                <div className="besttime-hero-card-months">
                  <span>Mar-May</span>
                  <span>Sep-Nov</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Season Overview */}
        <section className="besttime-quick">
          <div className="container">
            <div className="besttime-section-header besttime-section-header-center">
              <span className="besttime-section-line" />
              <span className="besttime-section-label">Season Overview</span>
              <span className="besttime-section-line" />
            </div>

            <h2 className="besttime-center-title">
              Bhutan changes beautifully through the year.
            </h2>

            <div className="besttime-seasons-grid">
              {seasonsOverview.map((season) => (
                <div key={season.name} className="besttime-season-card">
                  <h3>{season.name}</h3>
                  <p className="besttime-season-months">{season.months}</p>
                  <p className="besttime-season-summary">{season.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="besttime-main">
          <div className="container">
            <div className="besttime-layout">
              {/* Sidebar Navigation */}
              <aside className="besttime-sidebar" aria-label="Best time page navigation">
                <div className="besttime-sidebar-card">
                  <div className="besttime-sidebar-header">
                    <p>Travel Guide</p>
                    <h2>On This Page</h2>
                  </div>

                  <nav className="besttime-sidebar-nav">
                    {navItems.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className="besttime-sidebar-link">
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="besttime-sidebar-help">
                    <h3>Need help choosing dates?</h3>
                    <p>
                      Tell us your interests and we will suggest the most suitable
                      season, route, and itinerary pace.
                    </p>
                    <Link href="/contact">
                      Contact our travel experts
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="besttime-content">
                {/* Seasonal Breakdown */}
                <section id="seasons" className="besttime-section-card">
                  <div className="besttime-card-header">
                    <div>
                      <p>Weather and experience by season</p>
                      <h2>Seasonal Breakdown</h2>
                    </div>
                  </div>

                  <div className="besttime-seasons-detail">
                    {seasonsDetail.map((season) => (
                      <article key={season.name} className="besttime-season-detail-item">
                        <div className="besttime-season-detail-header">
                          <div>
                            <h3>{season.name}</h3>
                            <p>{season.months}</p>
                          </div>
                        </div>

                        <p className="besttime-season-detail-description">
                          {season.description}
                        </p>

                        <div className="besttime-season-detail-grid">
                          <div className="besttime-season-detail-box">
                            <h4>Weather</h4>
                            <ul>
                              {season.weather.map((item) => (
                                <li key={item}>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="besttime-season-detail-box">
                            <h4>Best For</h4>
                            <ul>
                              {season.bestFor.map((item) => (
                                <li key={item}>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="besttime-season-tags">
                          {season.tags.map((tag) => (
                            <span key={tag} className="besttime-season-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Monthly Guide */}
                <section id="monthly" className="besttime-section-card">
                  <div className="besttime-card-header">
                    <div>
                      <p>Month-by-month planning view</p>
                      <h2>Monthly Travel Guide</h2>
                    </div>
                  </div>

                  <div className="besttime-monthly-list">
                    {monthlyGuide.map((month) => (
                      <article key={month.name} className="besttime-monthly-item">
                        <div className="besttime-monthly-content">
                          <div className="besttime-monthly-heading">
                            <h3>{month.name}</h3>
                            <div className="besttime-monthly-stars" aria-label={`${month.rating} out of 5 rating`}>
                              {/* Stars removed */}
                            </div>
                          </div>

                          <div className="besttime-monthly-badges">
                            {month.badges.map((badge) => (
                              <span key={badge}>{badge}</span>
                            ))}
                          </div>

                          <p>{month.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* By Activity */}
                <section id="by-activity" className="besttime-section-card">
                  <div className="besttime-card-header">
                    <div>
                      <p>Choose dates based on travel style</p>
                      <h2>Best Time by Activity</h2>
                    </div>
                  </div>

                  <div className="besttime-activities-grid">
                    {activitiesTiming.map((activity) => (
                      <article key={activity.name} className="besttime-activity-card">
                        <div>
                          <h3>{activity.name}</h3>
                          <p>{activity.description}</p>
                          <div className="besttime-activity-seasons">
                            {activity.seasons.map((season) => (
                              <span key={season}>{season}</span>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Peak vs Shoulder Season */}
                <section id="comparison" className="besttime-section-card">
                  <div className="besttime-card-header">
                    <div>
                      <p>Price, crowd level, and planning differences</p>
                      <h2>Peak vs. Shoulder Season</h2>
                    </div>
                  </div>

                  <div className="besttime-comparison-grid">
                    <article className="besttime-comparison-card">
                      <div className="besttime-comparison-header">
                        <div>
                          <h3>Peak Season</h3>
                          <p>Mar-May, Sep-Nov</p>
                        </div>
                      </div>

                      <ul>
                        {peakSeason.map((item) => (
                          <li key={item}>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>

                    <article className="besttime-comparison-card">
                      <div className="besttime-comparison-header">
                        <div>
                          <h3>Shoulder / Low Season</h3>
                          <p>Jun-Aug, Dec-Feb</p>
                        </div>
                      </div>

                      <ul>
                        {shoulderSeason.map((item) => (
                          <li key={item}>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </section>

           
                

                {/* FAQs */}
                <section id="faq" className="besttime-section-card">
                  <div className="besttime-card-header">
                    <div>
                      <p>Quick answers for planning</p>
                      <h2>Frequently Asked Questions</h2>
                    </div>
                  </div>

                  <div className="besttime-faq-list">
                    {timeFaqs.map((faq) => (
                      <article key={faq.question} className="besttime-faq-item">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="besttime-cta">
          <div className="container">
            <div className="besttime-cta-card">
              <div>
                <p className="besttime-cta-kicker">Plan with confidence</p>
                <h2>Ready to choose the perfect season for Bhutan?</h2>
                <p>
                  Share your travel dates, interests, preferred hotel category,
                  and travel style. We will recommend the best season, route,
                  and itinerary flow for your journey.
                </p>
              </div>

              <div className="besttime-cta-actions">
                <Link href="/contact" className="besttime-btn-primary">
                  Contact Our Experts
                </Link>
                <Link href="/cultural-tours" className="besttime-btn-secondary">
                  View Seasonal Tours
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
  "Season advice by activity",
  "Festival and weather planning",
  "Custom Bhutan itinerary support",
];

const seasonsOverview: SeasonOverview[] = [
  {
    name: "Spring",
    months: "Mar-May",
    summary: "Flowers, festivals, trekking, and comfortable weather.",
  },
  {
    name: "Summer",
    months: "Jun-Aug",
    summary: "Green landscapes, fewer visitors, and better value.",
  },
  {
    name: "Autumn",
    months: "Sep-Nov",
    summary: "Clear skies, mountain views, trekking, and major festivals.",
  },
  {
    name: "Winter",
    months: "Dec-Feb",
    summary: "Quiet cultural travel, cranes, clear days, and cozy evenings.",
  },
];

const navItems: NavItem[] = [
  { name: "Seasonal Breakdown", id: "seasons" },
  { name: "Monthly Guide", id: "monthly" },
  { name: "By Activity", id: "by-activity" },
  { name: "Peak vs Shoulder", id: "comparison" },
  { name: "Regional Weather", id: "weather" },
  { name: "Festival Calendar", id: "festivals" },
  { name: "Packing Tips", id: "packing" },
  { name: "FAQs", id: "faq" },
];

const seasonsDetail: SeasonDetail[] = [
  {
    name: "Spring",
    months: "March - May",
    description:
      "Spring is one of the most beautiful times to visit Bhutan. Valleys come alive with rhododendrons, magnolias, and wildflowers, while the weather remains comfortable for sightseeing, soft adventure, and many treks.",
    weather: [
      "Day: 15-25°C",
      "Night: 5-10°C",
      "Moderate rainfall",
      "Good mountain views",
    ],
    bestFor: ["Trekking", "Photography", "Festivals", "Wildlife viewing"],
    tags: ["Peak Season", "Rhododendron Blooms", "Paro Tshechu", "Trekking"],
  },
  {
    name: "Summer",
    months: "June - August",
    description:
      "Summer brings monsoon rain and turns Bhutan into a lush green landscape. It is less ideal for high-altitude trekking but excellent for cultural tours, quiet travel, photography, and travelers who prefer fewer crowds.",
    weather: [
      "Day: 20-30°C",
      "Night: 15-20°C",
      "Higher rainfall",
      "Lush landscapes",
    ],
    bestFor: ["Cultural Tours", "Museums", "Budget Travel", "Photography"],
    tags: ["Low Season", "Best Value", "Fewer Crowds", "Green Valleys"],
  },
  {
    name: "Autumn",
    months: "September - November",
    description:
      "Autumn is Bhutan's most popular travel season. Skies are often clear, the weather is pleasant, and the Himalayan views are usually at their best. Major festivals and trekking routes make this a favorite for first-time visitors.",
    weather: [
      "Day: 18-25°C",
      "Night: 5-10°C",
      "Minimal rainfall",
      "Clear skies",
    ],
    bestFor: ["Trekking", "Festivals", "Mountain Views", "Outdoor Activities"],
    tags: ["Peak Season", "Best Weather", "Clear Views", "Thimphu Tshechu"],
  },
  {
    name: "Winter",
    months: "December - February",
    description:
      "Winter is calm, clear, and less crowded. High-altitude treks may be limited, but cultural tours, photography, bird watching, hot stone baths, and valley-based travel can be very rewarding.",
    weather: [
      "Day: 10-15°C",
      "Night: -5-5°C",
      "Dry weather",
      "Snow-capped peaks",
    ],
    bestFor: ["Bird Watching", "Cultural Tours", "Photography", "Hot Stone Baths"],
    tags: ["Low Season", "Birding", "Snow Views", "Peaceful Travel"],
  },
];

const monthlyGuide: MonthlyGuideItem[] = [
  {
    name: "January",
    rating: 3,
    badges: ["Bird Watching", "Cultural Tours", "Cycling"],
    description:
      "Cold but clear. Excellent for black-necked crane viewing in Phobjikha Valley.",
  },
  {
    name: "February",
    rating: 3,
    badges: ["Bird Watching", "Winter Festivals", "Cycling"],
    description:
      "Still cool but gradually warming. Good for quiet cultural routes and winter landscapes.",
  },
  {
    name: "March",
    rating: 5,
    badges: ["Trekking", "Festivals", "Blooms", "Cycling"],
    description:
      "Spring begins with flowers, clearer weather, and popular festival movement.",
  },
  {
    name: "April",
    rating: 5,
    badges: ["Trekking", "Photography", "Blooms", "Cycling"],
    description: "Peak spring beauty with comfortable weather for most activities.",
  },
  {
    name: "May",
    rating: 4,
    badges: ["Trekking", "Wildflowers", "Cycling"],
    description:
      "Still excellent, with warmer valleys and greenery before the monsoon period.",
  },
  {
    name: "June",
    rating: 3,
    badges: ["Cultural Tours", "Value Travel", "Cycling"],
    description:
      "Monsoon begins. Great for lush scenery and fewer tourists.",
  },
  {
    name: "July",
    rating: 2,
    badges: ["Cultural Tours", "Green Valleys", "Cycling"],
    description:
      "Rain is more frequent, but cultural sightseeing remains possible.",
  },
  {
    name: "August",
    rating: 2,
    badges: ["Lush Landscapes", "Quiet Travel", "Cycling"],
    description:
      "Rain continues, but the countryside is at its greenest and most peaceful.",
  },
  {
    name: "September",
    rating: 5,
    badges: ["Trekking", "Festivals", "Clear Views", "Cycling"],
    description:
      "Autumn begins with improving weather and excellent travel conditions.",
  },
  {
    name: "October",
    rating: 5,
    badges: ["Trekking", "Photography", "Festivals", "Cycling"],
    description:
      "One of the best months for clear mountain views and cultural experiences.",
  },
  {
    name: "November",
    rating: 5,
    badges: ["Trekking", "Crane Viewing", "Cycling"],
    description:
      "Clear, crisp weather and the arrival of black-necked cranes.",
  },
  {
    name: "December",
    rating: 4,
    badges: ["Bird Watching", "Cultural Tours", "Cycling"],
    description:
      "Winter begins with bright days, quiet routes, and peaceful cultural travel.",
  },
];

const activitiesTiming: ActivityTiming[] = [
  {
    name: "Trekking",
    description: "Best conditions for high-altitude and scenic treks.",
    seasons: ["Mar-May", "Sep-Nov"],
  },
  {
    name: "Festivals",
    description: "Major Tshechu celebrations and cultural events.",
    seasons: ["Mar-Apr", "Sep-Oct"],
  },
  {
    name: "Photography",
    description: "Best light, landscapes, and clear mountain views.",
    seasons: ["Mar-May", "Sep-Nov"],
  },
  {
    name: "Bird Watching",
    description: "Excellent timing for black-necked cranes.",
    seasons: ["Nov-Feb"],
  },
  {
    name: "Mountain Views",
    description: "Clearest Himalayan panoramas.",
    seasons: ["Sep-Nov", "Mar-Apr"],
  },
  {
    name: "Flower Bloom",
    description: "Rhododendrons, magnolias, and wildflowers.",
    seasons: ["Mar-May"],
  },
  {
  name: "Cycling",
  description: "Ride through Bhutan's scenic mountain roads, traditional villages, and high mountain passes with excellent cycling conditions throughout the year.",
  seasons: ["Jan-Dec"],
},
  {
    name: "Cultural Tours",
    description: "Monasteries, dzongs, villages, and museums.",
    seasons: ["Year-round"],
  },
];

const peakSeason = [
  "Best weather conditions with clearer skies",
  "Excellent Himalayan mountain views",
  "Major festivals in popular valleys",
  "Many trekking routes are suitable",
  "Ideal for outdoor photography",
  "Higher demand for hotels and guides",
  "Best booked several months in advance",
];

const shoulderSeason = [
  "Better value and more hotel flexibility",
  "Fewer visitors and quieter sightseeing",
  "Lush green landscapes during summer",
  "Snow-capped mountain views in winter",
  "Unique bird watching and seasonal experiences",
  "Some treks may be limited by rain or snow",
  "Often easier for shorter-notice planning",
];



const timeFaqs: TimeFaq[] = [
  {
    question: "What is the best overall month to visit Bhutan?",
    answer:
      "October is often considered one of the best months because skies are usually clear, temperatures are comfortable, and the mountain views can be excellent.",
  },
  {
    question: "Can I visit Bhutan during monsoon season?",
    answer:
      "Yes. Trekking may be limited, but cultural tours are still possible. You will also find greener landscapes, fewer visitors, and better value.",
  },
  {
    question: "Is winter too cold for tourism?",
    answer:
      "No. Winter can be very rewarding for cultural travel, photography, bird watching, and quiet sightseeing. Pack warm clothing for mornings and evenings.",
  },
  {
    question: "When are the major festivals held?",
    answer:
      "Many major Tshechu festivals take place in spring and autumn, especially around March-April and September-October.",
  },
  {
    question: "When is the best time for trekking?",
    answer:
      "Spring and autumn are generally best for trekking because the weather is more stable and temperatures are moderate.",
  },
];
