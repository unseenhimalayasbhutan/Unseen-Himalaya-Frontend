import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "./siteConfig";

type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
};

export const pageSeo = {
  "/about-bhutan": {
    title: "About Bhutan",
    description:
      "Learn about Bhutan's culture, landscapes, people, traditions, and unique approach to responsible Himalayan travel.",
    keywords: ["about Bhutan", "Bhutan culture", "Bhutan travel guide"],
  },
  "/about-us": {
    title: "About Unseen Himalayas Bhutan | Licensed Bhutan DMC & Tour Operator",
    description:
      "Meet Unseen Himalayas Bhutan, a licensed Bhutan DMC and tour operator creating personal, responsible, and locally guided journeys.",
    keywords: ["Unseen Himalayas Bhutan", "licensed Bhutan DMC", "Bhutan tour operator", "Bhutan travel company", "local Bhutan experts"],
  },
  "/best-time": {
    title: "Best Time to Visit Bhutan",
    description:
      "Compare Bhutan's seasons, weather, festivals, landscapes, and travel conditions to choose the best month for your trip.",
    keywords: ["best time to visit Bhutan", "Bhutan weather", "Bhutan travel season"],
  },
  "/bhutan-tours": {
    title: "Private Bhutan Tour Packages",
    description:
      "Explore private Bhutan tour packages from short cultural escapes to in-depth journeys through Paro, Thimphu, Punakha, and beyond.",
    keywords: ["Bhutan tour packages", "private Bhutan tours", "Bhutan itinerary"],
  },
  "/bhutan-trekkings": {
    title: "Bhutan Trekking Tours",
    description:
      "Discover guided Bhutan trekking tours through Himalayan valleys, high passes, remote camps, and pristine mountain landscapes.",
    keywords: ["Bhutan trekking", "Bhutan hiking tours", "Himalayan trek Bhutan"],
  },
  "/contact": {
    title: "Contact Unseen Himalayas Bhutan | Licensed Bhutan Tour Operator",
    description:
      "Contact Unseen Himalayas Bhutan to plan a private itinerary, cultural tour, festival journey, trekking adventure, or Bhutan DMC partnership.",
    keywords: ["contact Unseen Himalayas Bhutan", "licensed Bhutan tour operator", "plan Bhutan trip", "Bhutan travel inquiry", "contact Bhutan tour operator"],
  },
  "/cultural-tours": {
    title: "Bhutan Cultural Tours | Private Bhutan Heritage Tours | Unseen Himalayas Bhutan",
    description:
      "Experience Bhutan's monasteries, dzongs, villages, crafts, cuisine, festivals, and living traditions on a private Bhutan heritage tour.",
    keywords: ["Bhutan cultural tours", "private Bhutan heritage tours", "Bhutan culture trip", "Bhutan monastery tour", "Unseen Himalayas Bhutan"],
  },
  "/cycling-tours": {
    title: "Bhutan Cycling Tours",
    description:
      "Explore guided Bhutan cycling tours from short Thimphu and Paro rides to active western Bhutan journeys through Punakha, Phobjikha, and Gangtey.",
    keywords: ["Bhutan cycling tours", "Bhutan bike tours", "cycling in Bhutan"],
  },
  "/currency": {
    title: "Bhutan Currency & Travel Money Guide",
    description:
      "Understand the Bhutanese ngultrum, Indian rupee acceptance, cards, ATMs, tipping, and practical money advice for travelers.",
    keywords: ["Bhutan currency", "Bhutan money", "Bhutan travel costs"],
  },
  "/documents": {
    title: "Bhutan Travel Documents & Visa Guide",
    description:
      "Review the passport, visa, permit, insurance, and booking documents commonly needed for a trip to Bhutan.",
    keywords: ["Bhutan visa", "Bhutan travel documents", "Bhutan permit"],
  },
  "/facts": {
    title: "Bhutan Facts for Travelers",
    description:
      "Discover useful facts about Bhutan's geography, culture, national symbols, environment, society, and Gross National Happiness.",
    keywords: ["Bhutan facts", "facts about Bhutan", "Bhutan national symbols"],
  },
  "/faq": {
    title: "Bhutan Travel FAQ 2026 | Visa, SDF, Guide & Tour Questions",
    description:
      "Get answers about Bhutan visas, costs, flights, guides, packing, connectivity, food, altitude, and trip planning.",
    keywords: ["Bhutan travel FAQ 2026", "Bhutan visa FAQ", "Bhutan SDF", "Bhutan guide requirement", "Bhutan trip questions"],
  },
  "/festival-tours": {
    title: "Bhutan Festival Tours",
    description:
      "Plan a Bhutan festival tour around colorful tshechus, sacred mask dances, monastery celebrations, and local traditions.",
    keywords: ["Bhutan festival tours", "Bhutan tshechu", "Bhutan festival travel"],
  },
  "/festival-calendar": {
    title: "Bhutan Festival Calendar",
    description:
      "Browse Bhutan's festival calendar by month and plan your journey around tshechus, sacred ceremonies, and cultural celebrations.",
    keywords: ["Bhutan festival calendar", "Bhutan festival dates", "Bhutan tshechu calendar"],
  },
  "/gnh-philosophies": {
    title: "Gross National Happiness in Bhutan",
    description:
      "Explore Bhutan's Gross National Happiness philosophy, its pillars, cultural roots, and influence on responsible travel.",
    keywords: ["Gross National Happiness", "Bhutan GNH", "Bhutan philosophy"],
  },
  "/legal-documents": {
    title: "Legal Documents",
    description:
      "View Unseen Himalayas Bhutan legal travel documents, including technical clearance and business license information for Bhutan tour operations.",
    keywords: ["Unseen Himalayas Bhutan legal documents", "Bhutan tour operator license", "Bhutan travel company documents"],
  },
  "/optional-tours": {
    title: "Bhutan Optional Tours & Experiences",
    description:
      "Personalize your Bhutan itinerary with hikes, wellness, food, photography, village visits, and other optional experiences.",
    keywords: ["Bhutan activities", "Bhutan experiences", "Bhutan tour add-ons"],
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "Read how Unseen Himalayas Bhutan handles personal information submitted through our Bhutan travel website and inquiry channels.",
    keywords: ["Unseen Himalayas Bhutan privacy policy"],
  },
  "/seasons": {
    title: "Bhutan Seasons & Weather",
    description:
      "Explore spring, summer, autumn, and winter in Bhutan, including weather patterns, scenery, festivals, and seasonal travel tips.",
    keywords: ["Bhutan seasons", "Bhutan weather by month", "when to visit Bhutan"],
  },
  "/terms": {
    title: "Travel Terms & Conditions",
    description:
      "Review the booking, payment, cancellation, responsibility, and travel terms for journeys arranged by Unseen Himalayas Bhutan.",
    keywords: ["Unseen Himalayas Bhutan terms", "Bhutan tour booking terms"],
  },
  "/why-visit": {
    title: "Why Visit Bhutan",
    description:
      "Discover why travelers choose Bhutan for peaceful landscapes, living culture, Himalayan adventure, spirituality, and meaningful encounters.",
    keywords: ["why visit Bhutan", "Bhutan travel inspiration", "reasons to visit Bhutan"],
  },
} satisfies Record<string, PageSeo>;

export type SeoPath = keyof typeof pageSeo;

export function createPageMetadata(path: SeoPath): Metadata {
  const page = pageSeo[path];
  const fullTitle = page.title.includes(siteConfig.name)
    ? page.title
    : `${page.title} | ${siteConfig.name}`;

  return {
    title: {
      absolute: fullTitle,
    },
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: fullTitle,
      description: page.description,
      images: [
        {
          url: siteConfig.defaultImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [siteConfig.defaultImage],
    },
  };
}

export function createSeoLayout(path: SeoPath) {
  const page = pageSeo[path];

  function SeoLayout({ children }: { children: ReactNode }) {
    const pageUrl = new URL(path, siteConfig.url).toString();
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: page.title,
        description: page.description,
        url: pageUrl,
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.title,
            item: pageUrl,
          },
        ],
      },
    ];

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </>
    );
  }

  SeoLayout.displayName = `${page.title}SeoLayout`;
  return SeoLayout;
}
