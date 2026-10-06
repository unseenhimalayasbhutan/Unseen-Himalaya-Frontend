/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Compass,
  Globe2,
  Heart,
  Landmark,
  Leaf,
  MapPin,
  Mountain,
  Plane,
  UtensilsCrossed,
  Users,
  type LucideIcon,
} from "lucide-react";

import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { getFallbackImage } from "../components/imageFallbacks";

type ImageAsset = {
  src: string;
  alt: string;
  label: string;
  copyrightName?: string;
};

type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
};

type InfoCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

type RegionItem = {
  title: string;
  elevation: string;
  description: string;
};

type DetailSection = {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

type FoodBlock = {
  title: string;
  description: string;
  items: string[];
};

function ImageSlot({
  image,
  className = "",
  loading = "lazy",
}: {
  image: ImageAsset;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  const resolvedSrc = image.src.trim() || getFallbackImage(image.label);

  return (
    <figure className={`about-bhutan-image ${className}`.trim()}>
      <img src={resolvedSrc} alt={image.alt} loading={loading} />
      <figcaption>Copyright {image.copyrightName || "Unseen Himalayas Bhutan"}</figcaption>
    </figure>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`about-bhutan-section-head about-bhutan-section-head-${align}`}>
      <div className="about-bhutan-label">
        <span />
        {eyebrow}
        <span />
      </div>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

export default function AboutBhutanPage() {
  return (
    <>
      <Header />

      <main className="about-bhutan-page">
        <section className="about-bhutan-hero">
          <div className="container about-bhutan-hero-grid">
            <div className="about-bhutan-hero-copy">
              <div className="about-bhutan-label about-bhutan-label-left">
                <Compass aria-hidden="true" />
                <strong>Bhutan Overview</strong>
              </div>

              <h1>About Bhutan: culture, nature, and travel inspiration.</h1>

              <p>
                Bhutan, known in Dzongkha as Druk Yul, the Land of the Thunder
                Dragon, is a Himalayan kingdom between India and China where
                mountain valleys, forests, monasteries, and communities invite
                travellers to slow down and pay attention to place.
              </p>

              <div className="about-bhutan-hero-actions">
                <Link href="/contact" className="about-bhutan-btn-primary">
                  Plan Your Bhutan Trip
                  <ArrowRight aria-hidden="true" />
                </Link>
                <a href="#bhutan-overview" className="about-bhutan-btn-secondary">
                  Explore Bhutan
                </a>
              </div>

              <div className="about-bhutan-trust-row" aria-label="Bhutan highlights">
                {heroTrust.map((item) => (
                  <span key={item}>
                    <CheckCircle aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="about-bhutan-hero-media" aria-label="Bhutan overview image">
              <ImageSlot image={heroImage} loading="eager" />
              <div className="about-bhutan-hero-fact">
                <span>Kingdom of Bhutan</span>
                <strong>Culture, nature, spirituality, and thoughtful travel.</strong>
              </div>
            </aside>
          </div>
        </section>

        <section className="about-bhutan-stats-band" aria-label="Quick Bhutan facts">
          <div className="container about-bhutan-stats-grid">
            {quickStats.map((stat) => (
              <article key={stat.label} className="about-bhutan-stat-card">
                <stat.icon aria-hidden="true" />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="bhutan-overview" className="about-bhutan-section about-bhutan-section-warm">
          <div className="container">
            <SectionHeader
              eyebrow="Bhutan in Brief"
              title="A small kingdom with a powerful national identity."
              subtitle="Bhutan is known for Himalayan landscapes, living culture, protected forests, and a development philosophy rooted in wellbeing."
            />

            <div className="about-bhutan-overview-grid">
              {overviewCards.map((card) => (
                <article key={card.title} className="about-bhutan-overview-card">
                  <div className="about-bhutan-icon">
                    <card.icon aria-hidden="true" />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-bhutan-section about-bhutan-section-white">
          <div className="container about-bhutan-flag-layout">
            <div>
              <SectionHeader
                eyebrow="National Flag"
                title="A symbol of monarchy, faith, purity, and prosperity."
                subtitle="The Bhutanese flag is divided diagonally with a white dragon across the center. Its colors express the balance of secular leadership, spiritual heritage, loyalty, and national wellbeing."
                align="left"
              />

              <div className="about-bhutan-feature-list">
                {flagMeanings.map((item) => (
                  <article key={item.title} className="about-bhutan-feature-row">
                    <CheckCircle aria-hidden="true" />
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="about-bhutan-flag-card">
              <div className="about-bhutan-flag-visual" aria-hidden="true">
                <span>Druk</span>
              </div>
              <div>
                <span>The Thunder Dragon</span>
                <h3>Protective strength and national unity.</h3>
                <p>
                  The dragon&apos;s open mouth represents protective strength, while
                  the jewels in its claws symbolize prosperity, wealth, and
                  perfection. White represents purity, loyalty, and unity among
                  Bhutan&apos;s diverse people.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="about-bhutan-section about-bhutan-section-warm">
          <div className="container">
            <SectionHeader
              eyebrow="A Brief History"
              title="From sacred temples to a modern constitutional monarchy."
              subtitle="Bhutan's history is shaped by Buddhism, valley kingdoms, national unification, the Wangchuck dynasty, and the country's transition to constitutional democracy."
            />

            <div className="about-bhutan-timeline">
              {historyTimeline.map((item) => (
                <article key={`${item.period}-${item.title}`} className="about-bhutan-timeline-card">
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-bhutan-section about-bhutan-section-white">
          <div className="container">
            <SectionHeader
              eyebrow="Nature, People & Daily Life"
              title="The deeper layers that make Bhutan unique."
              subtitle="Bhutan is rich in forests, wildlife, languages, food, faith, crafts, customs, and mountain travel experiences, with local variation from valley to valley."
            />

            <div className="about-bhutan-detail-grid">
              {detailSections.map((section) => (
                <article key={section.id} className="about-bhutan-detail-card">
                  <div className="about-bhutan-detail-head">
                    <div className="about-bhutan-icon">
                      <section.icon aria-hidden="true" />
                    </div>
                    <div>
                      <span>{section.eyebrow}</span>
                      <h3>{section.title}</h3>
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-bhutan-section about-bhutan-section-split">
          <div className="container about-bhutan-landscape-layout">
            <div>
              <SectionHeader
                eyebrow="Landscapes & Flora"
                title="From subtropical foothills to alpine highlands."
                subtitle="Bhutan's dramatic altitude range creates extraordinary ecological diversity, from tropical lowland forests to temperate valleys and high alpine zones above the tree line."
                align="left"
              />

              <div className="about-bhutan-region-list">
                {regions.map((region) => (
                  <article key={region.title} className="about-bhutan-region-card">
                    <h3>{region.title}</h3>
                    <span>{region.elevation}</span>
                    <p>{region.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <ImageSlot image={geographyImage} className="about-bhutan-tall-image" />
          </div>
        </section>

        <section className="about-bhutan-section about-bhutan-section-warm">
          <div className="container">
            <SectionHeader
              eyebrow="Cuisine"
              title="Spice, red rice, cheese, tea, and local hospitality."
              subtitle="Bhutanese food is simple, hearty, spicy, and strongly connected to farming, altitude, family meals, and social customs."
            />

            <div className="about-bhutan-food-grid">
              {foodBlocks.map((block) => (
                <article key={block.title} className="about-bhutan-food-card">
                  <UtensilsCrossed aria-hidden="true" />
                  <h3>{block.title}</h3>
                  <p>{block.description}</p>
                  <div>
                    {block.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-bhutan-section about-bhutan-section-white">
          <div className="container about-bhutan-arrival-layout">
            <div>
              <SectionHeader
                eyebrow="Flying to Bhutan"
              title="Arriving in the Kingdom in the Clouds is part of the experience."
                subtitle="Flying into Bhutan offers views of Himalayan peaks, forested valleys, glacier-fed rivers, and traditional architecture. Flight routes, schedules, and arrival airports should be checked before finalising dates."
                align="left"
              />

              <div className="about-bhutan-feature-list">
                {flightNotes.map((item) => (
                  <article key={item.title} className="about-bhutan-feature-row">
                    <Plane aria-hidden="true" />
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="about-bhutan-altitude-note">
              <span>Altitude Note</span>
              <h3>Comfort and preparation</h3>
              <p>
                Classic cultural routes usually move between roughly 1,200m and
                3,100m, with higher passes and hikes possible on some days.
                Travel at a comfortable pace, hydrate well, and speak with a
                medical professional before travel if you have heart, lung,
                pregnancy, or previous altitude concerns.
              </p>
            </aside>
          </div>
        </section>

        <section className="about-bhutan-section about-bhutan-section-warm">
          <div className="container">
            <SectionHeader
              eyebrow="Combined Overview"
              title="The older Bhutan overview content is still here."
              subtitle="Discover Bhutan now gathers the introduction, useful facts, reasons to visit, culture notes, seasons, and destination choices into one clearer overview path."
            />

            <div className="about-bhutan-overview-grid">
              {overviewGuideLinks.map((item) => (
                <article key={item.title} className="about-bhutan-overview-card">
                  <div className="about-bhutan-icon">
                    <item.icon aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={item.href}>{item.linkLabel}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-bhutan-section about-bhutan-section-gallery">
          <div className="container">
            <SectionHeader
              eyebrow="Bhutan Through Images"
              title="A visual glimpse of the kingdom."
              subtitle="Festivals, dzongs, valleys, monasteries, and mountain light are part of the Bhutan travel experience."
            />

            <div className="about-bhutan-gallery-grid">
              {galleryImages.map((image) => (
                <article key={image.label} className="about-bhutan-gallery-card">
                  <ImageSlot image={image} />
                  <strong>{image.label}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

const heroImage: ImageAsset = {
  src: "/village with rice paddy fields  DOT AA Original Bhutan Travels.jpg",
  alt: "Scenic village and rice fields in Bhutan",
  label: "Hero Bhutan Image",
  copyrightName: "Kuenzang",
};

const geographyImage: ImageAsset = {
  src: "/Thimphu City Morning Light  DOT AA Original Bhutan Travels.jpg",
  alt: "Bhutan mountains, valleys, and forest landscape",
  label: "Geography Image",
  copyrightName: "Kevin Pages / Amazing Aerial Agency",
};

const galleryImages: ImageAsset[] = [
  {
    src: "/Thimphu festival header2.jpg",
    alt: "Bhutanese festival and mask dance",
    label: "Festivals & Mask Dances",
    copyrightName: "Scarlette DG",
  },
  {
    src: "/National Memorial Chorten Thimphu  DOT AA Original Bhutan Travels.jpg",
    alt: "Traditional Bhutanese architecture and chorten",
    label: "Sacred Architecture",
    copyrightName: "Ben Richards",
  },
  {
    src: "/Big Buddha from Northside  DOT AA Original Bhutan Travels.jpg",
    alt: "Buddha Dordenma and Bhutanese valley landscape",
    label: "Buddha Dordenma",
    copyrightName: "Kuenzang",
  },
  {
    src: "/Punakha Dzong Twilight  DOT AA Original Bhutan Travels.jpg",
    alt: "Punakha Dzong at twilight",
    label: "Punakha Dzong",
    copyrightName: "Kevin Pages / Amazing Aerial Agency",
  },
];

const heroTrust = [
  "Druk Yul, the Land of the Thunder Dragon",
  "20 districts with Thimphu as capital",
  "Culture, nature, spirituality, food, and history",
];

const quickStats: StatItem[] = [
  { icon: MapPin, value: "38,394 km2", label: "Total Area" },
  { icon: Landmark, value: "20", label: "Dzongkhags" },
  { icon: Users, value: "Dzongkha", label: "National Language" },
  { icon: Leaf, value: "60%+", label: "Constitutional Forest Minimum" },
];

const overviewCards: InfoCard[] = [
  {
    icon: Globe2,
    title: "Name & Identity",
    description:
      "Bhutan is often linked to the Sanskrit Bhota-anta, meaning the end or edge of Tibet. In Dzongkha, the country is Druk Yul, the Land of the Thunder Dragon.",
  },
  {
    icon: Mountain,
    title: "Geography & Neighbours",
    description:
      "Bhutan sits in the eastern Himalayas, bordered by China to the north and India to the west, south, and east. Its valleys and roads change markedly by altitude and weather.",
  },
  {
    icon: Landmark,
    title: "Capital & Districts",
    description:
      "The kingdom is divided into 20 dzongkhags, or districts, with Thimphu as the capital and main administrative, cultural, and economic center.",
  },
  {
    icon: Users,
    title: "People & Languages",
    description:
      "Dzongkha is the national language, English is widely used in education and tourism, and many regional languages and local traditions remain alive.",
  },
];

const overviewGuideLinks = [
  {
    icon: Compass,
    title: "Why visit Bhutan",
    description:
      "The travel-inspiration content remains available for guests choosing between culture, nature, soft adventure, and slower journeys.",
    href: "/why-visit",
    linkLabel: "Open Why Visit Bhutan",
  },
  {
    icon: CheckCircle,
    title: "Bhutan facts",
    description:
      "Quick national facts, symbols, environment notes, and memorable details are still available for visitors who want a concise reference.",
    href: "/facts",
    linkLabel: "Open Bhutan Facts",
  },
  {
    icon: Heart,
    title: "Culture and GNH",
    description:
      "History, monarchy, food, living traditions, and Gross National Happiness are combined under Culture and Heritage.",
    href: "/gnh-philosophies",
    linkLabel: "Open Culture and Heritage",
  },
  {
    icon: MapPin,
    title: "Valleys and route ideas",
    description:
      "Destination content is organized around Paro, Thimphu, Punakha, Wangdue, Phobjikha, and Haa to help visitors choose a route.",
    href: "/places-to-visit",
    linkLabel: "Open Places to Visit",
  },
];

const flagMeanings = [
  {
    title: "Yellow",
    description:
      "The upper yellow half represents the secular authority of the King and Bhutan's royal tradition.",
  },
  {
    title: "Orange",
    description:
      "The lower orange half represents Bhutan's spiritual heritage and Mahayana Buddhist practice.",
  },
  {
    title: "White Dragon",
    description:
      "The dragon represents purity, loyalty, national identity, and the protective strength of Bhutan's guardian deities.",
  },
  {
    title: "Jewels",
    description:
      "The jewels held by the dragon symbolize prosperity, wealth, perfection, and the wellbeing of the kingdom.",
  },
];

const historyTimeline: TimelineItem[] = [
  {
    period: "7th Century",
    title: "First Buddhist temples",
    description:
      "Bhutan's recorded Buddhist history begins with temples such as Kyichu Lhakhang in Paro and Jambey Lhakhang in Bumthang.",
  },
  {
    period: "8th Century",
    title: "Guru Rinpoche's spiritual legacy",
    description:
      "Padmasambhava, known locally as Guru Rinpoche, introduced Tantric Buddhism and became one of Bhutan's most revered spiritual figures.",
  },
  {
    period: "17th Century",
    title: "Zhabdrung unifies Bhutan",
    description:
      "Zhabdrung Ngawang Namgyal unified warring valleys into Druk Yul and built dzongs for religious and administrative life.",
  },
  {
    period: "1907",
    title: "Birth of the hereditary monarchy",
    description:
      "Ugyen Wangchuck was unanimously chosen as Bhutan's first hereditary king by leading monks, officials, and influential families.",
  },
  {
    period: "1971",
    title: "Bhutan joins the United Nations",
    description:
      "Under the Third King, Bhutan began modern reforms and development planning and joined the United Nations.",
  },
  {
    period: "2006",
    title: "The Fifth King begins his reign",
    description:
      "Jigme Khesar Namgyel Wangchuck became Bhutan's fifth king, continuing the country's modern transition.",
  },
  {
    period: "2008",
    title: "Constitutional democracy",
    description:
      "Bhutan adopted its constitution and held parliamentary elections, becoming a democratic constitutional monarchy.",
  },
];

const regions: RegionItem[] = [
  {
    title: "Subtropical Zone",
    elevation: "Approx. 150-2,000m",
    description:
      "Warm southern and lower valley areas with tropical vegetation, lowland hardwood forests, rivers, and rich wildlife habitats.",
  },
  {
    title: "Temperate Zone",
    elevation: "Approx. 2,000-4,000m",
    description:
      "Conifer forests, broadleaf forests, rice valleys, orchards, blue pine, mixed conifer, upland hardwood, and major cultural towns.",
  },
  {
    title: "Alpine Zone",
    elevation: "Approx. 4,000m+",
    description:
      "High mountain landscapes above the main forest line, with alpine terrain, high passes, yak herder areas, and snow-capped Himalayan peaks.",
  },
];

const detailSections: DetailSection[] = [
  {
    id: "flora",
    icon: Leaf,
    eyebrow: "Flora",
    title: "Forests, flowers, and medicinal plants",
    description:
      "Because Bhutan rises from subtropical foothills to alpine highlands, its plant life is exceptionally diverse.",
    points: [
      "Forest types include fir, mixed conifer, blue pine, chir pine, broadleaf-conifer, upland hardwood, lowland hardwood, and tropical lowland forests.",
      "Bhutan has about 300 species of medicinal plants and around 52 species of rhododendrons.",
      "Visitors may see magnolia, juniper, orchids, gentian, giant rhubarb, oak, pine, and the blue poppy.",
    ],
  },
  {
    id: "fauna",
    icon: Mountain,
    eyebrow: "Fauna",
    title: "Wildlife from snow leopards to black-necked cranes",
    description:
      "Bhutan's forests, rivers, valleys, and high mountains support rare mammals and important bird habitats.",
    points: [
      "High-altitude species include snow leopard, red panda, blue sheep, musk deer, Himalayan black bear, and langur.",
      "Southern forests support clouded leopard, elephant, water buffalo, swamp deer, one-horned rhinoceros, and golden langur.",
      "Phobjikha and Bomdeling are important winter habitats for the endangered black-necked crane.",
    ],
  },
  {
    id: "religion",
    icon: Landmark,
    eyebrow: "Religion",
    title: "A spiritual country in daily practice",
    description:
      "Religion is woven into Bhutanese identity, public life, family life, festivals, architecture, and everyday routines.",
    points: [
      "Buddhist temples, monasteries, prayer flags, prayer wheels, and chortens are visible across the country.",
      "Buddhism was introduced in the 7th century and strengthened by Guru Rinpoche in the 8th century.",
      "Hinduism, older animistic beliefs, nature worship, omens, and local rituals also form part of Bhutan's spiritual landscape.",
    ],
  },
  {
    id: "demographics",
    icon: Users,
    eyebrow: "People",
    title: "Communities, dialects, and identity",
    description:
      "Bhutan's people are culturally and linguistically diverse, shaped by geography, valleys, migration, and history.",
    points: [
      "The Ngalops are associated mainly with western Bhutan and the Dzongkha-speaking cultural world.",
      "The Sharchops are associated mainly with eastern Bhutan and strong Nyingmapa Buddhist influences.",
      "English is widely used in education, while many regional dialects remain alive.",
    ],
  },
  {
    id: "gnh",
    icon: Heart,
    eyebrow: "Wellbeing",
    title: "Gross National Happiness",
    description:
      "Bhutan's development story is guided by a policy framework that values wellbeing alongside economic progress.",
    points: [
      "Gross National Happiness connects development with sustainable socioeconomic progress, environmental conservation, cultural preservation, and good governance.",
      "The framework also considers nine areas of wellbeing, including health, education, community, time use, and living standards.",
      "Visitors experience this through slower travel, community encounters, protected landscapes, and meaningful interpretation.",
      "GNH is a policy approach and travel context, not a promise that every person is always happy.",
    ],
  },
  {
    id: "western-central-bhutan",
    icon: Compass,
    eyebrow: "Regions",
    title: "Western and Central Bhutan",
    description:
      "Bhutan's valleys have distinct identities, languages, landscapes, and ways of life.",
    points: [
      "Western Bhutan includes rice paddies, orchards, Dzongkha-speaking communities, and major cultural centers.",
      "Haa's climate is especially suited to livestock raising.",
      "The Black Mountains traditionally mark the boundary between western and central Bhutan.",
    ],
  },
];

const foodBlocks: FoodBlock[] = [
  {
    title: "Staple Foods",
    description:
      "Bhutanese meals are filling, local, and often spicy, with rice, buckwheat, maize, dairy, and chillies playing a major role.",
    items: ["Red rice", "Buckwheat", "Maize", "Yak cheese", "Cow cheese", "Chillies"],
  },
  {
    title: "Signature Dishes",
    description:
      "Ema datshi, a chilli-and-cheese dish, is one of the most recognizable Bhutanese foods.",
    items: ["Ema datshi", "Meat soups", "Curries", "Dried chillies", "Farmhouse meals"],
  },
  {
    title: "Tea & Local Drinks",
    description:
      "Tea and local drinks are part of hospitality, ceremonies, and social gatherings across Bhutan.",
    items: ["Ngaja", "Suja", "Ara", "Red Panda beer", "Druk Lager", "Local spirits"],
  },
  {
    title: "Social Customs",
    description:
      "Doma, or betel nut with leaf, is traditionally offered as a gesture of greeting and social connection.",
    items: ["Doma", "Hospitality", "Ceremonial offering", "Community gatherings"],
  },
];

const flightNotes = [
  {
    title: "International Gateway",
    description:
      "Paro remains the best-known international gateway, while official Bhutan travel guidance also lists Gelephu among the country's international airports.",
  },
  {
    title: "Airlines",
    description:
      "Drukair and Bhutan Airlines operate international services to Bhutan. Compare current routes, prices, baggage rules, and arrival airports on official airline channels.",
  },
  {
    title: "Domestic Airports",
    description:
      "Domestic airports can support longer routes to central, eastern, and southern Bhutan, subject to schedules, weather, and operational availability.",
  },
  {
    title: "Mountain Aviation",
    description:
      "Because of Bhutan's terrain, flights are specialized and pilots require training for Paro's unique conditions.",
  },
  {
    title: "Enter Bhutan by Land",
    description:
      "Travelers can also enter Bhutan through official land entry points at Phuentsholing, Gelephu, and Samdrup Jongkhar.",
  },
];
