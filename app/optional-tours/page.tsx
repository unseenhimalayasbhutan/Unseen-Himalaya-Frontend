"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRightIcon,
  MapPinIcon,
  PlusCircleIcon,
  SettingsIcon,
  Wand2Icon,
} from "lucide-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import {
  TourImageSlot as ImageSlot,
  TourSectionHeader as SectionHeader,
  type ImageAsset,
} from "../components/TourPagePrimitives";

type AddOnItem = {
  id: string;
  name: string;
  duration: string;
  price: string;
  location: string;
  bestWith: string;
  description: string;
  image: ImageAsset;
};

type AddOnCategory = {
  id: string;
  title: string;
  description: string;
  items: AddOnItem[];
};

type StepItem = {
  title: string;
  description: string;
};

type RecommendedCombo = {
  name: string;
  route: string;
  description: string;
};

export default function OptionalToursPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);

  const allAddOns = categories.flatMap((category) => category.items);

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ||
    categories[0];

  const selectedAddOns = allAddOns.filter((item) =>
    selectedAddOnIds.includes(item.id)
  );

  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds((current) =>
      current.includes(id)
        ? current.filter((selectedId) => selectedId !== id)
        : [...current, id]
    );
  };

  return (
    <>
      <Header />

      <main className="tour-pro-page optional-pro-page">
        <section className="tour-pro-hero">
          <div className="tour-pro-hero-bg" aria-hidden="true" />

          <div className="container tour-pro-hero-grid">
            <div className="tour-pro-hero-content">
              <div className="tour-pro-eyebrow">
                <Wand2Icon aria-hidden="true" />
                <span>Optional Tours & Add-ons</span>
              </div>

              <h1>
                Customize any Bhutan itinerary with the experiences you
                care about the most.
              </h1>

              <p>
                Personalize every journey with a selection of cultural highlights, immersive experiences, wellness offerings, culinary experiences, transportation upgrades, and exceptional stays.
              </p>

              <div className="tour-pro-hero-actions">
                <Link href="/contact" className="tour-pro-btn-primary">
                  Build My Custom Tour <ChevronRightIcon aria-hidden="true" />
                </Link>

                <a href="#add-ons" className="tour-pro-btn-secondary">
                  Explore Add-ons
                </a>
              </div>

              
            </div>

            <div className="tour-pro-hero-card">
              <ImageSlot image={heroImage} className="tour-pro-hero-image" />
            </div>
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <SectionHeader
              eyebrow="How It Works"
              title="A simple way to build a personalized Bhutan itinerary."
              subtitle="Start with a base itinerary, choose add-ons, select hotel category, then finalize the pace and route."
            />

            <div className="uh-optional-step-grid">
              {steps.map((step, index) => (
                <article key={step.title} className="uh-optional-step-card">
                  <div className="uh-optional-step-marker">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="add-ons"
          className="tour-pro-section tour-pro-section-warm uh-optional-addons-section uh-addon-redesign-section"
        >
          <div className="container">
            <SectionHeader
              eyebrow="Choose Your Add-ons"
              title="Upgrade the journey with meaningful Bhutan experiences."
              subtitle="Choose cultural, nature, wellness, and premium add-ons. Each selected experience appears in the custom itinerary summary."
            />

            <div className="uh-addon-experience-shell">
              <aside
                className="uh-addon-category-rail"
                aria-label="Optional tour add-on categories"
              >
                <div className="uh-addon-rail-intro">
                  <span>Experience Menu</span>
                  <h3>Choose by travel style</h3>
                  <p>
                    Select one category at a time, then add experiences that
                    match the guest profile, travel dates, and route.
                  </p>
                </div>

                <div className="uh-addon-category-buttons">
                  {categories.map((category, index) => {
                    const isActive = activeCategory.id === category.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        className={`uh-addon-category-button ${
                          isActive ? "is-active" : ""
                        }`}
                        onClick={() => setActiveCategoryId(category.id)}
                        aria-pressed={isActive}
                      >
                        <span className="uh-addon-category-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="uh-addon-category-copy">
                          <strong>{category.title}</strong>
                          <small>{category.description}</small>
                        </span>

                        <span className="uh-addon-category-count">
                          {category.items.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              <div className="uh-addon-experience-content">
                <div className="uh-addon-panel-hero">
                  <div>
                    <span className="uh-addon-panel-kicker">
                      {activeCategory.title}
                    </span>

                    <h3>{activeCategory.description}</h3>

                    <p>
                      Add these experiences to a suitable Bhutan route after
                      checking travel time, season, availability, and your
                      comfort level.
                    </p>
                  </div>

                  
                </div>

                <div className="uh-addon-experience-grid">
                  {activeCategory.items.map((item) => {
                    const isSelected = selectedAddOnIds.includes(item.id);

                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`uh-addon-experience-card ${
                          isSelected ? "is-selected" : ""
                        }`}
                        onClick={() => toggleAddOn(item.id)}
                        aria-pressed={isSelected}
                      >
                        <div className="uh-addon-experience-media">
                          <ImageSlot image={item.image} />

                          <span className="uh-addon-duration-pill">
                            {item.duration}
                          </span>
                        </div>

                        <div className="uh-addon-experience-body">
                          <div className="uh-addon-experience-meta">
                            <span>{item.location}</span>
                            <strong>{item.price}</strong>
                          </div>

                          <h4>{item.name}</h4>

                          <p>{item.description}</p>

                          <div className="uh-addon-experience-footer">
                            <span>{item.bestWith}</span>

                            <strong>
                              {isSelected ? "Added" : "Add to tour"}
                            </strong>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

           
          </div>
        </section>

        <section className="tour-pro-section tour-pro-section-white">
          <div className="container">
            <SectionHeader
              eyebrow="Relevant Base Routes"
              title="Add-ons work best when attached to the right itinerary length."
              subtitle=""
            />

            <div className="uh-optional-route-grid">
              {recommendedCombos.map((combo, index) => (
                <article key={combo.name} className="uh-optional-route-card">
                  <div className="uh-optional-route-marker">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{combo.name}</h3>

                  <p>{combo.description}</p>

                  <div className="tour-pro-route-meta">
                    <MapPinIcon aria-hidden="true" />
                    <span>{combo.route}</span>
                  </div>
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
  src: "/Phobjika by Matt Dutile1.jpg",
  alt: "Customized Bhutan tour image",
  label: "Optional Tours Hero Image",
  copyrightName: "Carissa Nimah",
};



const steps: StepItem[] = [
  {
    title: "Choose Base Tour",
    description: "Start from one of your 3, 4, 5, 6, 7, or 8 day routes.",
  },
  {
    title: "Add Experiences",
    description:
      "Select cultural, nature, wellness, food, responsible travel, and premium experiences.",
  },
  {
    title: "Select Comfort Level",
    description:
      "Match hotels, meals, vehicles, and pacing to the client profile.",
  },
  {
    title: "Finalize & Quote",
    description:
      "Confirm availability, feasibility, inclusions, and price.",
  },
];

const categories: AddOnCategory[] = [
  {
    id: "cultural",
    title: "Cultural & Local Life",
    description: "Deepen the cultural value of any itinerary.",
    items: [
      {
        id: "farmhouse-dinner",
        name: "Farmhouse Dinner",
        duration: "Evening",
        price: "On request",
        location: "Paro / Punakha",
        bestWith: "Best after sightseeing",
        description:
          "Step into a traditional Bhutanese farmhouse and experience warm rural hospitality, savor a home-cooked local meal prepared with fresh ingredients, and enjoy an optional tasting of Ara, Bhutan's traditional distilled spirit. This authentic cultural experience offers a glimpse into the daily life, customs, and culinary heritage of Bhutanese families.",
        image: {
          src: "/Phobjikha-valley-by-Alicia-Warner-75.jpg",
          alt: "Farmhouse dinner",
          label: "Farmhouse Dinner Image",
          copyrightName: "Alicia Warner",
        },
      },
      {
        id: "bhutanese-astrology",
        name: "Bhutanese Astrology Session",
        duration: "45-60 mins",
        price: "On request",
        location: "Thimphu / Paro",
        bestWith: "Best for cultural guests",
        description:
          "Introduce guests to Bhutanese astrology, auspicious dates, birth-year elements, and traditional belief systems with a local expert astrologer.",
        image: {
          src: "/_SCH1491.jpg",
          alt: "Bhutanese astrology session",
          label: "Bhutanese Astrology Image",
          copyrightName: "Scarlette DG",
        },
      },
      {
        id: "bhutanese-cooking-class",
        name: "Cook Bhutanese Dishes",
        duration: "2-3 hours",
        price: "On request",
        location: "Paro / Thimphu",
        bestWith: "Best for food lovers",
        description:
          "Join an interactive Bhutanese cooking experience where guests learn the secrets of traditional cuisine under the guidance of local cooks. Prepare iconic dishes such as Ema Datshi (chili and cheese stew), red rice, handmade momos, and a selection of seasonal local specialties while gaining insight into Bhutan's rich culinary traditions.",
        image: {
          src: "/Khoma 130723 by Amp Sripimanwat-95.jpg",
          alt: "Cooking Bhutanese dishes",
          label: "Bhutanese Cooking Class Image",
          copyrightName: "Carissa Nimah",
        },
      },
      {
        id: "traditional-dress-archery",
        name: "Traditional Dress & Archery",
        duration: "1-2 hours",
        price: "On request",
        location: "Paro / Thimphu",
        bestWith: "Best for first-time guests",
        description: "Step into Bhutanese culture by dressing in the traditional Gho or Kira, the national attire of Bhutan. Complete the experience with a friendly game of traditional archery or khuru (darts), offering a fun and authentic introduction to the country's customs, heritage, and national sport. Guests will witness celebrations erupt with traditional singing, dancing, and cheers, creating a vibrant and joyful spectacle that reflects Bhutan's strong sense of community and cultural pride.",
        image: {
          src: "/05-Archery-2016.jpg",
          alt: "Traditional dress and archery",
          label: "Dress & Archery Image",
          copyrightName: "Carissa Nimah",
        },
      },
      {
        id: "arts-crafts-workshop",
        name: "Arts & Crafts Workshop",
        duration: "2-3 hours",
        price: "On request",
        location: "Thimphu / Paro",
        bestWith: "Best for creative guests",
        description:
          "Explore the intricate art of Thangka painting, witness the skill and precision of traditional weaving, learn the centuries-old process of handmade paper-making, or engage with local artisans practicing other traditional crafts. Through demonstrations, hands-on activities, and interactions with master craftsmen, this experience offers a fascinating insight into the creativity, craftsmanship, and cultural traditions that have been preserved and passed down through generations in Bhutan.",
        image: {
          src: "/zorig chusum 4.jpg",
          alt: "Bhutan craft workshop",
          label: "Craft Workshop Image",
          copyrightName: "Scarlette DG",
        },
      },
    ],
  },
  {
    id: "nature",
    title: "Nature & Soft Adventure",
    description: "For active guests and scenic-route travelers.",
    items: [
      {
        id: "wangditse-hike",
        name: "Wangditse Hike",
        duration: "2-3 hours",
        price: "On request",
        location: "Thimphu",
        bestWith: "Best for soft adventure",
        description:
          "A gentle scenic hike above Thimphu with forest trails, valley views, and a quieter pace than the main city sightseeing route.",
        image: {
          src: "/Druk-Wangditse-Lhakhang.jpg",
          alt: "Wangditse hike in Thimphu",
          label: "Wangditse Hike Image",
          copyrightName: "",
        },
      },
      {
        id: "plant-a-tree",
        name: "Planting a Tree",
        duration: "45-90 mins",
        price: "On request",
        location: "Route dependent",
        bestWith: "Best for responsible travel",
        description:
          "A meaningful responsible-travel activity where guests contribute to Bhutan’s natural environment with a guided tree-planting experience.",
        image: {
          src: "/Tree-Planting-3-1024x683.jpg",
          alt: "Planting a tree in Bhutan",
          label: "Planting a Tree Image",
          copyrightName: "",
        },
      },
      
      {
        id: "gangtey-nature-trail",
        name: "Gangtey Nature Trail",
        duration: "2 hours",
        price: "On request",
        location: "Phobjikha",
        bestWith: "Best on 7-8 day routes",
        description:
          "Gentle walk through Phobjikha Valley and crane habitat landscapes.",
        image: {
          src: "/Phobjika by Matt Dutile16.jpg",
          alt: "Gangtey nature trail",
          label: "Nature Trail Image",
          copyrightName: "Carissa Nimah",
        },
      },
      {
        id: "lungchutse-short-hike",
        name: "Lungchutse Short Hike",
        duration: "Half day",
        price: "On request",
        location: "Dochula",
        bestWith: "Best in clear weather",
        description:
          "Optional nature hike near Dochula when weather and timing allow.",
        image: {
          src: "Lungchutse-Hike-NK-Image5.jpg",
          alt: "Lungchutse hike",
          label: "Lungchutse Hike Image",
          copyrightName: "",
        },
      },

      {
        id: "punakha-rafting",
        name: "Punakha Rafting",
        duration: "1 hours",
        price: "On request",
        location: "Punakha",
        bestWith: "Best on 5+ day routes",
        description: "Optional rafting experience on the Punakha river system.",
        image: {
          src: "/rafting2.jpg",
          alt: "Punakha rafting",
          label: "Rafting Image",
          copyrightName: "Scarlette DG",
        },
      },

        {
  id: "paro-cycling",
  name: "Cycling",
  duration: "1-3 hours",
  price: "On request",
  location: "",
  bestWith: "Best on 4+ day routes",
  description: "A scenic cycling experience on road through mountains, Valley, passing traditional villages, rice fields, riverside roads, and beautiful Himalayan landscapes.",
  image: {
    src: "/p5pb29093445.jpg",
    alt: "Cycling in Bhutan",
    label: "Cycling Image",
    copyrightName: "U",
  },
},
{
  id: "paro-zipline",
  name: "Zipline",
  duration: "",
  price: "On request",
  location: "Lam Pelri, Royal Botanical Park",
  bestWith: "Best on 4+ day routes",
  description: "An exciting outdoor zipline experience in Paro, ideal for travelers looking to add a light adventure activity to their cultural Bhutan journey.",
  image: {
    src: "/zip.jpg",
    alt: "Zipline activity in Lam Pelri",
    label: "Zipline Image",
    copyrightName: "Unseen Himalayas",
  },
},

    ],
  },
  {
    id: "wellness-luxury",
    title: "Wellness, Comfort & Luxury",
    description: "Add relaxation, comfort, and premium access.",
    items: [
      {
        id: "hot-stone-bath",
        name: "Hot Stone Bath",
        duration: "Evening",
        price: "On request",
        location: "Paro / Punakha",
        bestWith: "Best after hikes",
        description:
          "Traditional herbal hot stone bath after Tiger’s Nest or a long drive.",
        image: {
          src: "/IMG_9291.jpg",
          alt: "Hot stone bath",
          label: "Hot Stone Bath Image",
          copyrightName: "",
        },
      },
      {
        id: "private-helicopter-tour",
        name: "Private Helicopter Tour",
        duration: "Custom timing",
        price: "On request",
        location: "Route dependent",
        bestWith: "Best for luxury guests",
        description:
          "Premium helicopter experience for scenic aerial views or special routing, subject to availability, weather, permits, and operational clearance.",
        image: {
          src: "/air.png",
          alt: "Private helicopter tour in Bhutan",
          label: "Private Helicopter Tour Image",
          copyrightName: "",
        },
      },
      {
        id: "premium-vehicle-upgrade",
        name: "Premium Vehicle Upgrade",
        duration: "Full tour",
        price: "On request",
        location: "All routes",
        bestWith: "Best for private tours",
        description:
          "Upgrade to a more comfortable vehicle for private tours and premium guests.",
        image: {
          src: "aa.png",
          alt: "Premium vehicle",
          label: "Premium Vehicle Image",
          copyrightName: "Unseen Himalayas",
        },
      },
      {
        id: "hotel-category-upgrade",
        name: "Hotel Category Upgrade",
        duration: "Per night",
        price: "On request",
        location: "All routes",
        bestWith: "Best for comfort upgrades",
        description:
          "Move from standard to premium, luxury, or mixed-category accommodation.",
        image: {
          src: "/luxury.jpg",
          alt: "Hotel upgrade",
          label: "Hotel Upgrade Image",
          copyrightName: "Scarlette DG",
        },
      },
    ],
  },
];

const recommendedCombos: RecommendedCombo[] = [
  {
    name: "3-Day Short Escape",
    route: "Paro or Thimphu-Paro",
    description:
      "Best for one or two light add-ons such as Bhutanese astrology, hot stone bath, traditional dress, or farmhouse dinner.",
  },
  {
    name: "5-Day Classic Route",
    route: "Paro • Thimphu • Punakha • Paro",
    description:
      "Flexible enough for cooking Bhutanese dishes, Wangditse Hike, tree planting, rafting, crafts, and upgraded hotels.",
  },
  {
    name: "7-8 Day Deeper Journey",
    route: "Paro • Thimphu • Punakha • Gangtey • Paro",
    description:
      "Best for Phobjikha nature trails, rural experiences, and requests such as helicopter options.",
  },
];
