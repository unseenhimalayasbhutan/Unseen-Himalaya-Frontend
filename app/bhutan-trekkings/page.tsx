import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { 
  MountainIcon, 
  MapPinIcon, 
  TrendingUpIcon,
  UsersIcon,
  AwardIcon,
  HeartIcon,
  ChevronRightIcon,
  ActivityIcon,
  CompassIcon,
  SunIcon
} from 'lucide-react';

export default function BhutanTrekkingsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      

      {/* Why Trek Bhutan Section */}
      <section className="trekking-section trekking-section-white">
        <div className="container">
          <div className="trekking-why-grid">
            <div className="trekking-why-content">
              <div className="trekking-section-header">
                <div className="trekking-section-header-line"></div>
                <span className="trekking-section-header-label">Why Trek Bhutan</span>
                <div className="trekking-section-header-line"></div>
              </div>
              <h1 className="trekking-why-title">
                Where the
                <br />
                <span className="trekking-why-title-highlight">Himalayas Whisper</span>
              </h1>
              <p className="trekking-why-text">
                Bhutan offers the world&apos;s most pristine trekking experiences. With 
                untouched forests, ancient monasteries, and peaks that have never 
                been summited, every trail tells a story.
              </p>
              
              <div className="trekking-highlights-grid">
                {highlights.map((highlight, index) => (
                  <div key={index} className="trekking-highlight">
                    <div className="trekking-highlight-icon">
                      <highlight.icon />
                    </div>
                    <div>
                      <div className="trekking-highlight-title">{highlight.title}</div>
                      <div className="trekking-highlight-value">{highlight.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="trekking-why-image">
              <div className="trekking-why-image-box">
                <div className="trekking-why-image-emoji">🏔️</div>
                <div className="trekking-why-image-caption">Trekker at Laverty Pass (4,900m)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treks Section */}
      <section className="trekking-section trekking-section-beige">
        <div className="container">
          <div className="trekking-section-header-center">
            <div className="trekking-section-header-line"></div>
            <span className="trekking-section-header-label">Legendary Trails</span>
            <div className="trekking-section-header-line"></div>
          </div>
          <h2 className="trekking-section-title">Our Signature Treks</h2>
          <p className="trekking-section-subtitle">From the world-famous Snowman Trek to spiritual pilgrimages, choose your adventure.</p>

          <div className="trekking-treks-list">
            {treks.map((trek, index) => (
              <div key={index} className={`trekking-trek-card ${index % 2 === 1 ? 'trekking-trek-card-reverse' : ''}`}>
                <div className="trekking-trek-content">
                  <div className="trekking-trek-meta">
                    <span className="trekking-trek-category">{trek.category}</span>
                    <span className="trekking-trek-duration">{trek.duration}</span>
                    <span className="trekking-trek-difficulty">{trek.difficulty}</span>
                  </div>
                  <h3 className="trekking-trek-name">{trek.name}</h3>
                  <div className="trekking-trek-details">
                    <div className="trekking-trek-detail">
                      <MapPinIcon />
                      <span>{trek.location}</span>
                    </div>
                    <div className="trekking-trek-detail">
                      <TrendingUpIcon />
                      <span>Max Elevation: {trek.maxElevation}</span>
                    </div>
                    <div className="trekking-trek-detail">
                      <ActivityIcon />
                      <span>Distance: {trek.distance}</span>
                    </div>
                  </div>
                  <p className="trekking-trek-description">{trek.description}</p>
                  
                  <div className="trekking-trek-highlights">
                    <h4 className="trekking-trek-highlights-title">Highlights:</h4>
                    <ul className="trekking-trek-highlights-list">
                      {trek.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <ChevronRightIcon />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="trekking-trek-buttons">
                    <Link href={`/contact?trek=${trek.slug}`} className="trekking-trek-btn-primary">
                      Plan This Trek
                      <ChevronRightIcon />
                    </Link>
                    <Link href="/contact" className="trekking-trek-btn-secondary">
                      Inquire Now
                    </Link>
                  </div>
                </div>
                
                <div className="trekking-trek-image">
                  <div className="trekking-trek-image-box">
                    <div className="trekking-trek-image-emoji">{trek.icon}</div>
                    <div className="trekking-trek-image-caption">{trek.imageCaption}</div>
                  </div>
                  {index === 0 && <div className="trekking-trek-image-decoration"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Difficulty Guide */}
      <section className="trekking-section trekking-section-white">
        <div className="container">
          <div className="trekking-section-header-center">
            <div className="trekking-section-header-line"></div>
            <span className="trekking-section-header-label">Find Your Trek</span>
            <div className="trekking-section-header-line"></div>
          </div>
          <h2 className="trekking-section-title">Choose Your Challenge</h2>
          <p className="trekking-section-subtitle">From gentle valley walks to demanding high-altitude expeditions</p>

          <div className="trekking-difficulty-grid">
            {difficultyLevels.map((level, index) => (
              <div key={index} className="trekking-difficulty-card">
                <div className="trekking-difficulty-icon">{level.icon}</div>
                <h3 className="trekking-difficulty-level">{level.level}</h3>
                <p className="trekking-difficulty-description">{level.description}</p>
                <div className="trekking-difficulty-stats">
                  <div className="trekking-difficulty-stat">
                    <span>Duration</span>
                    <strong>{level.duration}</strong>
                  </div>
                  <div className="trekking-difficulty-stat">
                    <span>Max Altitude</span>
                    <strong>{level.altitude}</strong>
                  </div>
                  <div className="trekking-difficulty-stat">
                    <span>Best Season</span>
                    <strong>{level.season}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="trekking-included">
        <div className="container">
          <div className="trekking-included-grid">
            <div>
              <div className="trekking-section-header">
                <div className="trekking-section-header-line"></div>
                <span className="trekking-section-header-label">Premium Experience</span>
                <div className="trekking-section-header-line"></div>
              </div>
              <h2 className="trekking-included-title">
                What&apos;s Included in
                <br />
                <span className="trekking-included-title-highlight">Your Trek</span>
              </h2>
              <p className="trekking-included-text">
                We believe in transparent pricing and exceptional service. Every trek includes:
              </p>
            </div>
            
            <div className="trekking-included-list">
              {inclusions.map((item, index) => (
                <div key={index} className="trekking-included-item">
                  <div className="trekking-included-icon">
                    <item.icon />
                  </div>
                  <div>
                    <h3 className="trekking-included-item-title">{item.title}</h3>
                    <p className="trekking-included-item-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Trek */}
      <section className="trekking-section trekking-section-white">
        <div className="container">
          <div className="trekking-section-header-center">
            <div className="trekking-section-header-line"></div>
            <span className="trekking-section-header-label">Plan Your Adventure</span>
            <div className="trekking-section-header-line"></div>
          </div>
          <h2 className="trekking-section-title">When to Trek in Bhutan</h2>
          <p className="trekking-section-subtitle">Each season offers unique experiences in the Himalayas</p>

          <div className="trekking-seasons-grid">
            {seasons.map((season, index) => (
              <div key={index} className="trekking-season-card">
                <div className="trekking-season-icon">{season.icon}</div>
                <h3 className="trekking-season-name">{season.name}</h3>
                <div className="trekking-season-months">{season.months}</div>
                <p className="trekking-season-description">{season.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="trekking-cta">
        <div className="container">
          <div className="trekking-cta-content">
            <h2 className="trekking-cta-title">Ready for the Adventure of a Lifetime?</h2>
            <p className="trekking-cta-description">
              Limited slots available for 2026 trekking season — secure your place today.
            </p>
            <div className="trekking-cta-buttons">
              <Link href="/contact" className="trekking-cta-btn-primary">
                Inquire About a Trek
                <ChevronRightIcon />
              </Link>
            <Link href="/documents" className="trekking-cta-btn-secondary">
                Download Trekking Guide
              </Link>
            </div>
            <p className="trekking-cta-note">
              ✦ Private treks available for all levels ✦ Group discounts available ✦
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Data Arrays
const highlights = [
  { icon: MountainIcon, title: "Highest Peak", value: "7,326m (Mount Jomolhari)" },
  { icon: TrendingUpIcon, title: "Longest Trek", value: "Snowman Trek (25+ days)" },
  { icon: UsersIcon, title: "Expert Guides", value: "Certified by Tourism Council" },
  { icon: AwardIcon, title: "Safety Record", value: "100% Successful Summits" },
];

const treks = [
  {
    name: "Snowman Trek",
    category: "Legendary Expedition",
    duration: "25-30 Days",
    difficulty: "Extreme",
    location: "Central Bhutan",
    maxElevation: "5,320m (Rinchen Zoe La)",
    distance: "350+ km",
    description: "Often called the 'world's toughest trek,' this epic journey crosses 11 passes over 5,000m and ventures into the remotest corners of Bhutan. A true expedition for experienced trekkers seeking the ultimate Himalayan challenge.",
    highlights: [
      "Cross 11 high mountain passes",
      "Visit remote Lunana villages",
      "Stunning views of Gangkar Puensum",
      "Camp near glacial lakes",
      "Spot rare blue sheep and snow leopards"
    ],
    icon: "❄️",
    imageCaption: "Crossing a high pass on the Snowman Trek",
    slug: "snowman-trek"
  },
  {
    name: "Jomolhari Trek",
    category: "Sacred Mountain Pilgrimage",
    duration: "9-11 Days",
    difficulty: "Moderate to Strenuous",
    location: "Western Bhutan",
    maxElevation: "4,930m (Bhonte La)",
    distance: "90 km",
    description: "Walk in the shadow of the sacred Mount Jomolhari (7,326m), one of the most beautiful mountains in the Himalayas. This classic trek offers spectacular alpine scenery, ancient trade routes, and encounters with nomadic herders.",
    highlights: [
      "Spectacular views of Mount Jomolhari",
      "Visit Jomolhari Temple",
      "Camp in high alpine meadows",
      "Meet Yak herder communities",
      "Visit ancient Drukyel Dzong ruins"
    ],
    icon: "🏔️",
    imageCaption: "Camp with view of Mount Jomolhari",
    slug: "jomolhari-trek"
  },
  {
    name: "Druk Path Trek",
    category: "Classic Himalayan Trek",
    duration: "6-8 Days",
    difficulty: "Moderate",
    location: "Paro to Thimphu",
    maxElevation: "4,220m (Jangothang)",
    distance: "55 km",
    description: "The most popular trek in Bhutan, connecting the two main valleys of Paro and Thimphu. Experience pristine forests, ancient lakes, and breathtaking mountain views in less than a week.",
    highlights: [
      "Hike through blue pine and rhododendron forests",
      "Fish in pristine mountain lakes",
      "Visit ancient monasteries",
      "Spectacular views of Mount Jomolhari",
      "Descend into Thimphu valley"
    ],
    icon: "🌲",
    imageCaption: "Rhododendron forest on Druk Path",
    slug: "druk-path-trek"
  }
];

const difficultyLevels = [
  {
    level: "Easy",
    icon: "🥾",
    description: "Perfect for beginners and families. Gentle terrain, shorter days.",
    duration: "2-4 days",
    altitude: "2,000-3,000m",
    season: "Mar-May, Sep-Nov"
  },
  {
    level: "Moderate",
    icon: "⛰️",
    description: "Some uphill sections, longer days. Good fitness required.",
    duration: "5-10 days",
    altitude: "3,000-4,200m",
    season: "Mar-Jun, Sep-Nov"
  },
  {
    level: "Strenuous",
    icon: "🏔️",
    description: "Challenging terrain, high altitudes. Previous trekking experience needed.",
    duration: "10-20 days",
    altitude: "4,200-5,300m",
    season: "Apr-Oct"
  }
];

const inclusions = [
  { icon: HeartIcon, title: "Expert Guide", description: "Certified English-speaking trekking guide" },
  { icon: UsersIcon, title: "Full Support Team", description: "Cook, assistants, and porters/horses" },
  { icon: SunIcon, title: "Camping Equipment", description: "High-quality tents, sleeping mats, dining tent" },
  { icon: HeartIcon, title: "All Meals", description: "Nutritious meals and snacks throughout trek" },
  { icon: ActivityIcon, title: "Permits & Fees", description: "All national park and trekking permits" },
  { icon: CompassIcon, title: "Safety Gear", description: "First aid kit, oxygen, satellite phone" },
];

const seasons = [
  { name: "Spring", months: "Mar-May", icon: "🌸", description: "Rhododendrons in bloom, clear skies, mild temperatures" },
  { name: "Summer", months: "Jun-Aug", icon: "☔", description: "Lush greenery, fewer trekkers, afternoon showers" },
  { name: "Autumn", months: "Sep-Nov", icon: "🍂", description: "Peak season, crystal clear views, perfect weather" },
  { name: "Winter", months: "Dec-Feb", icon: "❄️", description: "Snow-covered peaks, lower treks only" }
];
