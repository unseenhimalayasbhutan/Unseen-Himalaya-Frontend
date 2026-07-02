"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Compass,
  Globe2,
  Heart,
  Landmark,
  Leaf,
  MapPin,
  Mountain,
  ShieldCheck,
  Sparkles,
  Sprout,
  TreePine,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { getFallbackImage } from "../components/imageFallbacks";

type ImageAsset = { src: string; alt: string; label: string; copyrightName?: string };
type StatItem = { icon: LucideIcon; value: string; label: string };
type StoryCard = { icon: LucideIcon; title: string; description: string };
type TabItem = {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  image: ImageAsset;
};
type DetailCard = { icon: LucideIcon; kicker: string; title: string; description: string; details: string[] };
type SymbolItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  points: string[];
  image: ImageAsset;
};
type TimelineFact = { period: string; title: string; description: string };
type SimpleFact = { title: string; description: string };

function ImageSlot({ image, className = "" }: { image: ImageAsset; className?: string }) {
  const resolvedSrc = image.src.trim() || getFallbackImage(image.label);
  return (
    <figure className={`tour-pro-image-slot has-image ${className}`.trim()}>
      <div className="tour-pro-image-frame">
        <img src={resolvedSrc} alt={image.alt} className="tour-pro-image" loading="lazy" />
      </div>
      <figcaption className="tour-pro-image-credit">© {image.copyrightName || "Unseen Himalayas Bhutan"}</figcaption>
    </figure>
  );
}

export default function FactsPage() {
  const [activeFact, setActiveFact] = useState(featureFacts[0]?.id || "druk-yul");
  const [activeSymbol, setActiveSymbol] = useState(nationalSymbols[0]?.id || "takin");
  const selectedFact = featureFacts.find((item) => item.id === activeFact) || featureFacts[0];
  const selectedSymbol = nationalSymbols.find((item) => item.id === activeSymbol) || nationalSymbols[0];

  return (
    <>
      <Header />
      <main className="tour-pro-page facts-redesign-page">
        <section className="tour-pro-hero facts-redesign-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />
          <div className="container tour-pro-hero-grid facts-redesign-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow"><Sparkles aria-hidden="true" /><span>Facts About Bhutan</span></div>
              <h1>Interesting facts that make Bhutan unlike anywhere else.</h1>
              <p>Bhutan is shaped by sacred mountains, protected forests, living Buddhist culture, peaceful democratic transition, Paro’s dramatic mountain airport, and a development philosophy that places wellbeing at the centre.</p>
              <div className="tour-pro-hero-actions">
                <Link href="/contact" className="tour-pro-btn-primary">Plan Your Bhutan Trip <ArrowRight aria-hidden="true" /></Link>
                <Link href="/cultural-tours" className="tour-pro-btn-secondary">Explore Tours</Link>
              </div>
              <div className="tour-pro-trust-row">
                {heroTrust.map((item) => <div key={item} className="tour-pro-trust-item"><CheckCircle aria-hidden="true" /><span>{item}</span></div>)}
              </div>
            </div>
            <div className="tour-pro-hero-card facts-redesign-hero-card">
              <ImageSlot image={heroImage} className="tour-pro-hero-image" />
              <div className="facts-redesign-hero-note"><span>Quick Insight</span><strong>A small kingdom with a powerful identity.</strong><p>Culture, environment, spirituality, architecture, food, democracy, and national values are woven into daily life.</p></div>
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container"><div className="tour-pro-stats-grid facts-redesign-stats-grid">{quickStats.map((stat) => <div key={stat.label} className="tour-pro-stat-card"><stat.icon aria-hidden="true" /><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div>
        </section>

        <section className="tour-pro-section tour-pro-section-warm facts-redesign-governance-section">
          <div className="container">
            <SectionHeader eyebrow="Governance & Democracy" title="Bhutan is a democratic constitutional monarchy built through a peaceful royal transition." subtitle="Bhutan’s democracy is unique because it was not born through revolution. The monarchy deliberately guided the country toward elected government, a written constitution, and parliamentary democracy." />
            <div className="facts-redesign-story-grid facts-redesign-governance-grid">
              {governanceFacts.map((fact, index) => <article key={fact.title} className="facts-redesign-story-card facts-redesign-detail-card"><div className="facts-redesign-story-icon"><fact.icon aria-hidden="true" /></div><span className="facts-redesign-card-kicker">{String(index + 1).padStart(2, "0")} / {fact.kicker}</span><h3>{fact.title}</h3><p>{fact.description}</p><div className="facts-redesign-point-list facts-redesign-card-points">{fact.details.map((detail) => <div key={detail} className="facts-redesign-point"><CheckCircle aria-hidden="true" /><span>{detail}</span></div>)}</div></article>)}
            </div>
          </div>
        </section>

        <section id="interactive-bhutan-facts" className="tour-pro-section tour-pro-section-white facts-redesign-philosophy-section">
          <div className="container">
            <SectionHeader eyebrow="Interactive Bhutan Facts" title="Explore the stories behind Bhutan’s most fascinating facts."  />
            <TabbedPanel items={featureFacts} activeId={activeFact} onChange={setActiveFact} selected={selectedFact} />
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-warm facts-redesign-gallery-section">
          <div className="container">
            <SectionHeader eyebrow="Bhutan Gallery" title="A visual glimpse into Bhutan’s identity."  />
            <div className="facts-redesign-gallery-grid">{galleryImages.map((image) => <article key={image.label} className="facts-redesign-gallery-card"><ImageSlot image={image} /><strong>{image.label}</strong></article>)}</div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white facts-redesign-nature-section">
          <div className="container">
            <SectionHeader eyebrow="Geography & Nature" title="A kingdom shaped by mountains, forests, rivers, and valleys." subtitle="Bhutan’s small size hides dramatic variety: subtropical foothills, fertile valleys, high passes, alpine meadows, sacred peaks, and wildlife-rich forests." />
            <div className="facts-redesign-image-row">{natureImages.map((image) => <div key={image.label} className="facts-redesign-image-card"><ImageSlot image={image} /></div>)}</div>
            <div className="facts-redesign-story-grid facts-redesign-nature-grid">{geographyFacts.map((fact) => <article key={fact.title} className="facts-redesign-story-card"><div className="facts-redesign-story-icon"><fact.icon aria-hidden="true" /></div><h3>{fact.title}</h3><p>{fact.description}</p></article>)}</div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-warm facts-redesign-airport-section">
          <div className="container">
            <SectionHeader eyebrow="Paro International Airport" title="One of the world’s most memorable airport arrivals." subtitle="Paro International Airport is Bhutan’s main international gateway and one of the first impressions many visitors have of the kingdom." />
            <div className="facts-redesign-airport-layout">
              <div className="facts-redesign-airport-media"><ImageSlot image={paroAirportImage} /></div>
              <div className="facts-redesign-airport-content"><div className="facts-redesign-airport-feature-card"><div className="facts-redesign-panel-kicker">Gateway to Bhutan</div><h3>Why Paro Airport feels different</h3><p>Unlike large urban airports, Paro International Airport is part of the landscape itself. The mountain setting, valley approach, and short transfer to cultural sites make the arrival feel like the first chapter of the tour.</p></div><div className="facts-redesign-airport-detail-grid">{paroAirportFacts.map((fact, index) => <article key={fact.title} className="facts-redesign-airport-card"><span>{String(index + 1).padStart(2, "0")}</span><div><small>{fact.kicker}</small><h4>{fact.title}</h4><p>{fact.description}</p></div></article>)}</div></div>
            </div>
          </div>
        </section>

        <section id="national-symbols" className="tour-pro-section tour-pro-section-white facts-redesign-symbols-section">
          <div className="container">
            <SectionHeader eyebrow="National Symbols" title="Symbols that carry Bhutan’s identity." subtitle="National Symbols now use the same professional tab-panel interaction: choose a symbol and view its meaning, image, and cultural notes." />
            <SymbolPanel items={nationalSymbols} activeId={activeSymbol} onChange={setActiveSymbol} selected={selectedSymbol} />
          </div>
        </section>

        <section className="facts-redesign-dark-section">
          <div className="container">
            <SectionHeader eyebrow="Culture & Tradition" title="Living heritage in everyday life." subtitle="" tone="dark" />
            <div className="facts-redesign-culture-image-grid">{cultureImages.map((image) => <div key={image.label} className="facts-redesign-culture-image-card"><ImageSlot image={image} /></div>)}</div>
            <div className="facts-redesign-dark-grid">{cultureFacts.map((fact, index) => <article key={fact.title} className="facts-redesign-dark-card"><div className="facts-redesign-neutral-number">{String(index + 1).padStart(2, "0")}</div><h3>{fact.title}</h3><p>{fact.description}</p></article>)}</div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white facts-redesign-timeline-section">
          <div className="container">
            <SectionHeader eyebrow="Moments & Milestones" title="Key moments that shaped Bhutan’s spiritual, political, and modern identity." subtitle="A simplified timeline for travelers who want to understand Bhutan before they arrive." />
            <div className="facts-redesign-timeline-list">{timelineFacts.map((item) => <article key={`${item.period}-${item.title}`} className="facts-redesign-timeline-item"><div className="facts-redesign-timeline-period">{item.period}</div><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-warm facts-redesign-gmc-section">
          <div className="container">
            <SectionHeader eyebrow="Gelephu Mindfulness City" title="GMC is Bhutan’s new vision for mindful growth, innovation, and opportunity." subtitle="Gelephu Mindfulness City adds a future-facing chapter to Bhutan’s story: a country known for tradition and nature also planning a mindful, innovative city for the future." />
            <div className="facts-redesign-gmc-layout"><div className="facts-redesign-gmc-visual"><ImageSlot image={gmcImage} /></div><div className="facts-redesign-gmc-grid">{gmcFacts.map((fact, index) => <article key={fact.title} className="facts-redesign-gmc-card"><div className="facts-redesign-neutral-number">{String(index + 1).padStart(2, "0")}</div><span>{fact.kicker}</span><h3>{fact.title}</h3><p>{fact.description}</p><div className="facts-redesign-point-list">{fact.details.map((detail) => <div key={detail} className="facts-redesign-point"><CheckCircle aria-hidden="true" /><span>{detail}</span></div>)}</div></article>)}</div></div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white facts-redesign-split-section">
          <div className="container facts-redesign-split-grid">
            <div className="facts-redesign-split-content"><SectionHeader eyebrow="Bhutan Identity" title="Tradition is not preserved behind glass. It is part of daily life." subtitle="" align="left" /><p>Bhutan’s identity is visible in its dzongs, monasteries, national dress, festivals, architecture, food, language, prayer flags, and community rituals.</p><div className="facts-redesign-highlight-list">{identityHighlights.map((item) => <div key={item} className="facts-redesign-highlight-item"><ChevronRight aria-hidden="true" /><span>{item}</span></div>)}</div></div>
            <div className="facts-redesign-image-panel"><ImageSlot image={identityImage} /></div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-warm"><div className="container"><SectionHeader eyebrow="Distinctive Facts" title="Things travelers often find surprising." subtitle="" /><div className="facts-redesign-card-grid">{recordFacts.map((fact, index) => <article key={fact.title} className="facts-redesign-number-card"><div className="facts-redesign-neutral-number">{String(index + 1).padStart(2, "0")}</div><h3>{fact.title}</h3><p>{fact.description}</p></article>)}</div></div></section>
        <section className="tour-pro-section tour-pro-section-white"><div className="container"><SectionHeader eyebrow="Fun Facts" title="Small details that make Bhutan memorable." subtitle="" /><div className="facts-redesign-card-grid facts-redesign-fun-grid">{funFacts.map((fact, index) => <article key={fact.title} className="facts-redesign-number-card"><div className="facts-redesign-neutral-number">{String(index + 1).padStart(2, "0")}</div><h3>{fact.title}</h3><p>{fact.description}</p></article>)}</div></div></section>

        <section className="tour-pro-section tour-pro-section-warm facts-redesign-split-section"><div className="container facts-redesign-split-grid facts-redesign-split-grid-reverse"><div className="facts-redesign-image-panel"><ImageSlot image={foodImage} /></div><div className="facts-redesign-split-content"><SectionHeader eyebrow="Culinary Facts" title="Bhutanese cuisine is bold, warm, and memorable." subtitle="" align="left" /><p>Bhutanese food is known for chilies, cheese, red rice, hearty flavors, and simple meals that reflect mountain life and local produce.</p><div className="facts-redesign-food-list">{foodFacts.map((fact, index) => <article key={fact.title} className="facts-redesign-food-item"><div className="facts-redesign-neutral-number">{String(index + 1).padStart(2, "0")}</div><div><h3>{fact.title}</h3><p>{fact.description}</p></div></article>)}</div></div></div></section>

      </main>
      <CtaSection />
      <Footer />
    </>
  );
}

function TabbedPanel({ items, activeId, onChange, selected }: { items: TabItem[]; activeId: string; onChange: (id: string) => void; selected: TabItem }) {
  return <div className="facts-redesign-philosophy-layout"><div className="facts-redesign-philosophy-tabs" aria-label="Interactive Bhutan fact topics">{items.map((item, index) => { const isActive = activeId === item.id; return <button key={item.id} type="button" className={`facts-redesign-philosophy-tab ${isActive ? "is-active" : ""}`} onClick={() => onChange(item.id)} aria-pressed={isActive}><span className="facts-redesign-philosophy-number">{String(index + 1).padStart(2, "0")}</span><span className="facts-redesign-philosophy-tab-content"><item.icon aria-hidden="true" /><strong>{item.title}</strong><small>{item.eyebrow}</small></span></button>; })}</div><article className="facts-redesign-philosophy-panel"><div className="facts-redesign-philosophy-content"><div className="facts-redesign-panel-kicker">{selected.eyebrow}</div><h3>{selected.title}</h3><p>{selected.description}</p><div className="facts-redesign-point-list">{selected.points.map((point) => <div key={point} className="facts-redesign-point"><CheckCircle aria-hidden="true" /><span>{point}</span></div>)}</div></div><aside className="facts-redesign-philosophy-image"><ImageSlot image={selected.image} /></aside></article></div>;
}

function SymbolPanel({ items, activeId, onChange, selected }: { items: SymbolItem[]; activeId: string; onChange: (id: string) => void; selected: SymbolItem }) {
  return <div className="facts-redesign-philosophy-layout facts-redesign-symbols-layout"><div className="facts-redesign-philosophy-tabs" aria-label="Bhutan national symbols">{items.map((item, index) => { const isActive = activeId === item.id; return <button key={item.id} type="button" className={`facts-redesign-philosophy-tab ${isActive ? "is-active" : ""}`} onClick={() => onChange(item.id)} aria-pressed={isActive}><span className="facts-redesign-philosophy-number">{String(index + 1).padStart(2, "0")}</span><span className="facts-redesign-philosophy-tab-content"><item.icon aria-hidden="true" /><strong>{item.title}</strong><small>{item.value}</small></span></button>; })}</div><article className="facts-redesign-philosophy-panel"><div className="facts-redesign-philosophy-content"><div className="facts-redesign-panel-kicker">{selected.title}</div><h3>{selected.value}</h3><p>{selected.description}</p><div className="facts-redesign-point-list">{selected.points.map((point) => <div key={point} className="facts-redesign-point"><CheckCircle aria-hidden="true" /><span>{point}</span></div>)}</div></div><aside className="facts-redesign-philosophy-image"><ImageSlot image={selected.image} /></aside></article></div>;
}

function SectionHeader({ eyebrow, title, subtitle, align = "center", tone = "light" }: { eyebrow: string; title: string; subtitle?: string; align?: "left" | "center"; tone?: "light" | "dark" }) {
  return <div className={`tour-pro-section-heading facts-redesign-section-heading facts-redesign-section-heading-${align} facts-redesign-section-heading-${tone}`}><div className="tour-pro-section-label"><span />{eyebrow}<span /></div><h2>{title}</h2>{subtitle ? <p>{subtitle}</p> : null}</div>;
}

const heroImage: ImageAsset = { src: "/By Marcus Westberg _Thimphu_2023_44.jpg", alt: "Scenic Bhutan landscape", label: "Hero Bhutan Image", copyrightName: "Carissa Nimah" };
const identityImage: ImageAsset = { src: "/Paro Dzong lit twilight  DOT AA Original Bhutan Travels.jpg", alt: "Bhutanese dzong, monastery, or cultural scene", label: "Culture / Dzong Image", copyrightName: "Teo Chin Leong" };
const foodImage: ImageAsset = { src: "/Bumdeling 090723 by Amp Sripimanwat-140.jpg", alt: "Traditional Bhutanese food", label: "Food Image", copyrightName: "Carissa Nimah" };
const paroAirportImage: ImageAsset = { src: "/air_paro.png", alt: "Paro International Airport and mountain valley approach", label: "Paro International Airport Image", copyrightName: "Unseen Himalayas Bhutan" };
const gmcImage: ImageAsset = { src: "/aaa.png", alt: "Gelephu Mindfulness City vision and southern Bhutan landscape", label: "Gelephu Mindfulness City Image", copyrightName: "Unseen Himalayas Bhutan" };

const heroTrust = ["Democracy and royal transition", "Paro Airport gateway", "Culture, nature, and GNH"];
const quickStats: StatItem[] = [
  { icon: Leaf, value: "70%+", label: "Forest Coverage" },
  { icon: TreePine, value: "60%", label: "Constitutional Forest Minimum" },
  { icon: ShieldCheck, value: "2008", label: "Democratic Constitutional Monarchy" },
  { icon: Users, value: "2", label: "Houses of Parliament" },
  { icon: MapPin, value: "1", label: "International Airport at Paro" },
  { icon: Globe2, value: "38,394 km²", label: "Total Area" },
  { icon: Heart, value: "GNH", label: "Wellbeing Philosophy" },
  { icon: Compass, value: "GMC", label: "Gelephu Mindfulness City Vision" },
];

const governanceFacts: DetailCard[] = [
  { icon: ShieldCheck, kicker: "System of Government", title: "Democratic Constitutional Monarchy", description: "Bhutan is a democratic constitutional monarchy: the Druk Gyalpo is the Head of State, while elected representatives form the government through parliamentary elections.", details: ["The Constitution defines the modern democratic framework.", "The Prime Minister and government are formed through elected political leadership.", "The system balances monarchy, parliament, law, and public participation."] },
  { icon: Users, kicker: "Parliament", title: "Bicameral parliamentary democracy", description: "Bhutan’s Parliament has two houses: the National Council and the National Assembly, with elected representatives playing a central role in lawmaking and national debate.", details: ["The National Assembly is the lower house and is party-based.", "The National Council is the upper house and acts as a house of review.", "Parliament connects national policy with the voices of districts and voters."] },
  { icon: Heart, kicker: "Unique Transition", title: "Democracy was handed to the people", description: "One of Bhutan’s most remarkable political facts is that democracy was encouraged by the monarchy itself, rather than forced by unrest or revolution.", details: ["The Fourth King guided decentralization and democratic reforms.", "The transition culminated in the Constitution and parliamentary elections.", "This peaceful handover is a major part of Bhutan’s modern identity."] },
  { icon: Landmark, kicker: "Local Governance", title: "Citizens vote from national to local levels", description: "Democracy in Bhutan is not only national. Local governments, districts, gewogs, and communities also form part of Bhutan’s democratic governance structure.", details: ["Citizens participate through regular elections and civic processes.", "Local leaders help connect national plans with village-level needs.", "The democratic culture continues to mature with each election cycle."] },
];

const featureFacts: TabItem[] = [
  { id: "druk-yul", icon: Sparkles, eyebrow: "Name & Identity", title: "Bhutan is Druk Yul, the Land of the Thunder Dragon.", description: "Bhutan is known locally as Druk Yul. The dragon is not only decorative; it represents the spiritual and cultural identity of the kingdom.", points: ["Druk means thunder dragon in Bhutanese cultural context.", "The dragon appears on Bhutan’s national flag.", "Bhutanese people are often referred to as Drukpa.", "The name reflects Bhutan’s identity as a Himalayan Buddhist kingdom."], image: { src: "/Khoma 130723 by Amp Sripimanwat-33.jpg", alt: "Dragon symbol or Bhutan flag image", label: "Dragon / Flag Image", copyrightName: "Carissa Nimah" } },
  { id: "gnh", icon: Heart, eyebrow: "National Philosophy", title: "Bhutan is famous for Gross National Happiness.", description: "Gross National Happiness is Bhutan’s internationally known development philosophy. It reminds travelers that progress can include culture, environment, good governance, and wellbeing.", points: ["GNH is one of Bhutan’s strongest global identities.", "It connects development with wellbeing and balance.", "Travelers often feel this slower, more mindful rhythm while visiting.", "It gives Bhutan a destination story beyond ordinary sightseeing."], image: { src: "/Ben-Richards-Tourism-Bhutan-041.jpg", alt: "Bhutan community wellbeing image", label: "GNH / Community Image", copyrightName: "Carissa Nimah" } },
  { id: "forests", icon: Leaf, eyebrow: "Conservation", title: "Bhutan protects forests as part of its national character.", description: "Bhutan is known for conservation values, high forest coverage, protected areas, and a constitutional commitment to keep at least 60% of the country under forest cover.", points: ["More than 70% of Bhutan is forested.", "The Constitution requires at least 60% forest cover.", "Nature is connected with culture, spirituality, and daily life.", "This is why Bhutan is seen as a carbon-conscious destination."], image: { src: "/Taktshang topdown  DOT AA Original Bhutan Travels.jpg", alt: "Bhutan forest and protected landscape image", label: "Forest / Conservation Image", copyrightName: "Agnieszka Wieczorek / Amazing Aerial Agency" } },
  { id: "sacred-peaks", icon: Mountain, eyebrow: "Sacred Peaks", title: "Bhutan is home to one of the world’s highest unclimbed mountains.", description: "Gangkhar Puensum is Bhutan’s highest peak and is widely known as the world’s highest unclimbed mountain. Bhutan’s sacred mountain traditions make the story especially meaningful.", points: ["The mountain rises above 7,500 meters.", "Bhutan closed high peaks to climbing for spiritual reasons.", "The fact reflects Bhutan’s respect for sacred landscapes.", "Mountains are viewed with reverence, not conquest."], image: { src: "/6Snowman Race Climate Conclave.jpg", alt: "Gangkhar Puensum or high Himalayan peak image", label: "Sacred Mountain Image", copyrightName: "Scarlette DG" } },
  { id: "archery", icon: Compass, eyebrow: "Sport & Community", title: "Archery is Bhutan’s national sport.", description: "Archery in Bhutan is more than target shooting. It is social, musical, playful, competitive, and often full of friendly teasing between teams.", points: ["Traditional matches are community events.", "Singing and celebration are part of the atmosphere.", "Modern compound bows and traditional bows are both seen.", "Guests can experience archery as a cultural activity."], image: { src: "/archery.jpg", alt: "Bhutanese archery match image", label: "Archery Image", copyrightName: "Carissa Nimah" } },
  { id: "food", icon: Sprout, eyebrow: "Food Culture", title: "In Bhutan, chilies are treated like a vegetable.", description: "Many visitors expect chilies to be used only as spice, but in Bhutan they are central ingredients. Ema Datshi, made with chilies and cheese, is a beloved national dish.", points: ["Ema means chili and Datshi means cheese.", "Red rice, butter tea, and datshi dishes are common.", "Food is closely tied to hospitality and mountain life.", "A Bhutanese meal often becomes a memorable travel moment."], image: { src: "/Haa by Marcus Westberg12.jpg", alt: "Bhutanese chilies and Ema Datshi image", label: "Food / Chili Image", copyrightName: "Carissa Nimah" } },
];

const galleryImages: ImageAsset[] = [
  { src: "/thedronebook-TourismBoardBhutan-200A6604.jpg", alt: "Tiger's Nest Monastery in Bhutan", label: "Tiger's Nest Monastery", copyrightName: "Carissa Nimah" },
  { src: "/Punakha by Marcus Westberg19.jpg", alt: "Bhutanese dzong architecture", label: "Dzong Architecture", copyrightName: "Carissa Nimah" },
  { src: "/MarcusWestbergBhutanHiRes-38.jpg", alt: "Prayer flags in Bhutan", label: "Prayer Flags", copyrightName: "Scarlette DG" },
  { src: "/Thimphu Tshechu by Bassem Nimah86.jpg", alt: "Bhutan festival mask dance", label: "Festival Mask Dance", copyrightName: "Carissa Nimah" },
  { src: "/Marcus Westberg Dochula Pass 2023_11.jpg", alt: "Himalayan mountain view in Bhutan", label: "Himalayan Views", copyrightName: "Carissa Nimah" },
  { src: "/Chimi-Lhakhang-and-village-selects-day1-Alicia-Warner-4.jpg", alt: "Traditional Bhutanese village", label: "Village Life", copyrightName: "Alicia Warner" },
];
const natureImages: ImageAsset[] = [
  { src: "/Haa by Marcus Westberg26.jpg", alt: "Forest landscape in Bhutan", label: "Protected Forests", copyrightName: "Carissa Nimah" },
  { src: "/17Snowman Race Climate Conclave.jpg", alt: "High mountain pass in Bhutan", label: "High Passes", copyrightName: "Scarlette DG" },
  { src: "/Khoma 130723 by Amp Sripimanwat-131.jpg", alt: "Mountain valley in Bhutan", label: "Mountain Valleys", copyrightName: "Carissa Nimah" },
];
const geographyFacts: StoryCard[] = [
  { icon: Mountain, title: "High Himalayan Peaks", description: "Bhutan is home to dramatic Himalayan peaks, high passes, deep valleys, and scenic mountain routes." },
  { icon: TreePine, title: "Protected Forests", description: "Forests are central to Bhutan’s identity, environment, and commitment to conservation." },
  { icon: Leaf, title: "Carbon-Conscious Nation", description: "Bhutan is widely known for strong environmental values and for absorbing more carbon than it emits." },
  { icon: Globe2, title: "Diverse Landscapes", description: "The country ranges from subtropical valleys to alpine regions, creating rich biodiversity and varied travel experiences." },
];
const paroAirportFacts: DetailCard[] = [
  { icon: MapPin, kicker: "Gateway", title: "Bhutan’s main international arrival point", description: "Paro International Airport is the airport through which most international visitors enter Bhutan, making the Paro Valley the first chapter of many Bhutan journeys.", details: [] },
  { icon: Mountain, kicker: "Mountain Approach", title: "A scenic and technically demanding landing", description: "The airport sits in a narrow Himalayan valley, so flights are closely connected to mountain weather, visibility, and daylight operating conditions.", details: [] },
  { icon: Compass, kicker: "Travel Planning", title: "Convenient for Paro and Thimphu itineraries", description: "Paro Airport is close to Paro town and connected by road to Thimphu, which is why most Bhutan itineraries begin or end with Paro and Tiger’s Nest.", details: [] },
];
const nationalSymbols: SymbolItem[] = [
  { id: "takin", icon: Mountain, title: "National Animal", value: "Takin", description: "The takin is a rare and unusual Himalayan animal linked with Bhutanese folklore and mountain ecology.", points: ["A unique-looking Himalayan animal strongly associated with Bhutan.", "Connected with Bhutanese folklore and mountain ecology.", "Often introduced at the Takin Preserve in Thimphu.", "A memorable symbol because it feels unlike ordinary national animals."], image: { src: "/Takins.jpg", alt: "Bhutan takin image", label: "Takin Image", copyrightName: "Carissa Nimah" } },
  { id: "raven", icon: Sparkles, title: "National Bird", value: "Raven", description: "The raven is connected with Bhutan’s protective deities and royal symbolism.", points: ["Associated with protective spiritual symbolism.", "Connected with Bhutan’s monarchy through the Raven Crown.", "Links spiritual belief and state identity.", "A powerful symbol for explaining Bhutan’s sacred worldview."], image: { src: "/raven.jpg", alt: "Raven or Raven Crown image", label: "Raven Image", copyrightName: "Unseen Himalayas Bhutan" } },
  { id: "blue-poppy", icon: Leaf, title: "National Flower", value: "Blue Poppy", description: "The blue poppy is a rare Himalayan flower associated with high mountain environments.", points: ["Linked with high-altitude Himalayan environments.", "A reminder of fragile mountain biodiversity.", "Represents rarity, natural elegance, and conservation value.", "Useful for travelers interested in flora and soft nature experiences."], image: { src: "/MarcusWestbergBhutanHiRes-10.jpg", alt: "Blue poppy flower image", label: "Blue Poppy Image", copyrightName: "Scarlette DG" } },
  { id: "cypress", icon: TreePine, title: "National Tree", value: "Cypress", description: "The cypress is associated with religious places and rugged landscapes.", points: ["Often seen near sacred places and mountain landscapes.", "Associated with strength and spiritual presence.", "Connects Bhutan’s natural and religious identity.", "A quiet but important symbol of Bhutanese landscape character."], image: { src: "/Haa by Marcus Westberg30.jpg", alt: "Bhutan cypress tree image", label: "Cypress Image", copyrightName: "Carissa Nimah" } },
  { id: "archery-symbol", icon: Compass, title: "National Sport", value: "Archery", description: "Archery brings communities together through competition, song, laughter, and celebration.", points: ["A social event as much as a sport.", "Often includes songs, jokes, cheering, and community gathering.", "Traditional and modern bow styles are both seen.", "A strong optional add-on for culture-focused itineraries."], image: { src: "/Trashi Yangtse 090723 by Amp Sripimanwat-219.jpg", alt: "Bhutan archery image", label: "Archery Symbol Image", copyrightName: "Carissa Nimah" } },
  { id: "butterfly", icon: Sprout, title: "National Butterfly", value: "Ludlow's Bhutan Glory", description: "This rare butterfly adds another beautiful layer to Bhutan’s biodiversity story.", points: ["A rare butterfly connected with Bhutan’s biodiversity identity.", "Especially meaningful for nature lovers and specialist travelers.", "Adds a delicate conservation story beyond large wildlife.", "Shows Bhutan’s ecological richness from forests to insects."], image: { src: "/Bhutan Flower Show5.jpg", alt: "Ludlow's Bhutan Glory butterfly image", label: "National Butterfly Image", copyrightName: "Scarlette DG" } },
];
const cultureImages: ImageAsset[] = [
  { src: "/By Marcus Westberg 14.jpg", alt: "Bhutanese traditional dress", label: "Traditional Dress", copyrightName: "Marcus Westberg" },
  { src: "/Trashi Yangtse 090723 by Amp Sripimanwat-222.jpg", alt: "Bhutanese archery", label: "National Sport", copyrightName: "Carissa Nimah" },
  { src: "/Ben-Richards-Tourism-Bhutan-014.jpg", alt: "Bhutanese monastery ceremony", label: "Living Heritage", copyrightName: "Ben Richards" },
];
const cultureFacts: SimpleFact[] = [
  { title: "Traditional Dress", description: "The Gho and Kira remain important symbols of Bhutanese identity and are worn proudly in formal and daily settings." },
  { title: "Dzongs", description: "These fortress-monasteries are among Bhutan’s most iconic architectural and spiritual landmarks." },
  { title: "Mask Dances", description: "Sacred Cham dances are performed during festivals and carry deep religious and cultural meaning." },
  { title: "Archery", description: "Archery is Bhutan’s national sport and is often enjoyed with music, friendly rivalry, and community spirit." },
];
const timelineFacts: TimelineFact[] = [
  { period: "8th Century", title: "Guru Rinpoche’s sacred legacy", description: "Many sacred sites in Bhutan are connected with Guru Rinpoche, including the famous Tiger’s Nest story in Paro." },
  { period: "1616", title: "Zhabdrung Ngawang Namgyal arrives in Bhutan", description: "Zhabdrung Ngawang Namgyal laid the foundation for Bhutan’s unified religious, political, and cultural identity." },
  { period: "1907", title: "Beginning of the Wangchuck monarchy", description: "The Wangchuck dynasty began Bhutan’s hereditary monarchy, creating a stable national foundation for the country’s modern story." },
  { period: "1953", title: "National Assembly established", description: "The creation of the National Assembly was an important early step in modern governance and public participation." },
  { period: "1972", title: "Gross National Happiness becomes Bhutan’s guiding idea", description: "The Fourth King’s development philosophy helped Bhutan become globally known for valuing wellbeing, culture, environment, and good governance." },
  { period: "1999", title: "Television and internet introduced", description: "Bhutan entered the television and internet era relatively late, making its modern transition especially memorable." },
  { period: "2006", title: "The Fourth King abdicates in favour of the Fifth King", description: "The voluntary abdication became part of Bhutan’s peaceful transition story and prepared the country for a new democratic era." },
  { period: "2007-2008", title: "First parliamentary elections", description: "Bhutan held its first National Council and National Assembly elections, giving citizens direct participation in the country’s new democratic system." },
  { period: "2008", title: "Constitution adopted and democracy begins", description: "Bhutan became a democratic constitutional monarchy, combining the monarchy’s constitutional role with elected parliamentary government." },
  { period: "2023", title: "Gelephu Mindfulness City announced", description: "His Majesty The King presented GMC as a future-facing national vision linking mindful development, sustainability, opportunity, and Bhutanese values." },
];
const gmcFacts: DetailCard[] = [
  { icon: Compass, kicker: "National Vision", title: "A mindful economic hub", description: "GMC is envisioned as a new model of development connecting prosperity with mindfulness, culture, sustainability, and national resilience.", details: ["Rooted in Bhutanese values and GNH principles.", "Designed to balance economic growth with environmental stewardship.", "Aims to create opportunity while protecting Bhutan’s identity."] },
  { icon: MapPin, kicker: "Location", title: "Southern Bhutan gateway", description: "Located in southern Bhutan near the India border, GMC is positioned as a strategic gateway linking Bhutan with wider regional opportunities.", details: ["Gelephu’s location gives it regional connectivity potential.", "The vision includes business, innovation, wellness, and sustainable urban design.", "It represents Bhutan’s future-facing development chapter."] },
  { icon: Heart, kicker: "Tourism Relevance", title: "A future story travelers will ask about", description: "For visitors, GMC adds a modern dimension to Bhutan’s story: tradition and nature alongside a mindful, innovative city for the future.", details: ["A meaningful experience about Bhutan's unique development philosophy and Gross National Happiness.", "Explores how Bhutan measures progress beyond economic growth.", "Illustrates the country's efforts to embrace modern development while staying rooted in its cultural heritage."] },
];
const identityHighlights = ["Prayer flags on bridges, mountain passes, and ridgelines", "Dzongs and monasteries that remain active community spaces", "Traditional dress worn during work, school, festivals, and ceremonies", "Festivals where faith, dance, music, and community come together", "Architecture that reflects Bhutanese identity across towns and valleys", "A national identity built around Druk Yul, the Land of the Thunder Dragon", "A development story connected with Gross National Happiness"];
const recordFacts: SimpleFact[] = [
  { title: "Television Arrived Late", description: "Bhutan introduced television relatively late compared with many countries, helping preserve its slower cultural rhythm for longer." },
  { title: "Strict Tobacco Controls", description: "Bhutan is known for strong tobacco restrictions and public-health-focused policies." },
  { title: "Environmental Priority", description: "Bhutan places unusual emphasis on conservation, forest protection, and careful development." },
  { title: "Gross National Happiness", description: "Bhutan is famous for Gross National Happiness, which values wellbeing beyond economic growth alone." },
  { title: "Highest Unclimbed Peak", description: "Gangkhar Puensum is widely known as the highest unclimbed mountain in the world." },
  { title: "No Traffic Lights in Thimphu", description: "Thimphu is often noted for its human traffic police instead of conventional traffic lights." },
];
const funFacts: SimpleFact[] = [
  { title: "Hydropower Matters", description: "Clean hydropower is an important part of Bhutan’s economy and regional energy relationship." },
  { title: "Traditional Architecture", description: "Buildings often follow Bhutanese architectural principles, giving towns and valleys a distinct visual identity." },
  { title: "Chilies Are a Main Ingredient", description: "In Bhutan, chilies are often treated like a vegetable, not just a spice." },
  { title: "Black-Necked Cranes", description: "Phobjikha Valley is famous for black-necked cranes, which arrive in winter and are deeply respected locally." },
  { title: "Prayer Wheels", description: "Prayer wheels are spun clockwise as an act of devotion, carrying mantras and blessings through movement." },
  { title: "Suspension Bridges", description: "Bhutan’s long suspension bridges connect valleys, villages, monasteries, and riverbanks with dramatic views." },
];
const foodFacts: SimpleFact[] = [
  { title: "Bold Chili Flavor", description: "Bhutanese food is known for heat, warmth, and strong chili-based flavors." },
  { title: "Ema Datshi", description: "Ema Datshi, made with chilies and cheese, is one of Bhutan’s most iconic dishes." },
  { title: "Red Rice", description: "Bhutanese red rice is a local staple and is often served with traditional meals." },
  { title: "Butter Tea", description: "Suja is a traditional salty butter tea, commonly enjoyed in Bhutanese homes and highland areas." },
  { title: "Kewa Datshi", description: "A comforting potato and cheese dish that is popular with visitors who prefer milder flavors." },
  { title: "Momos", description: "Dumplings are widely enjoyed in Bhutan and are served with spicy ezay chili condiment." },
];
