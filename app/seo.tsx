import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "./siteConfig";

type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
};

type PackageSeoItem = {
  slug: string;
  title: string;
  duration: string;
  route: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
};

export const pageSeo = {
  "/about-bhutan": {
    title: "About Bhutan | Culture, Nature and Travel Inspiration",
    description:
      "Meet Bhutan through its Himalayan landscapes, living culture and thoughtful approach to travel. Find the journey that fits you.",
    keywords: ["about Bhutan", "Bhutan culture", "Bhutan travel inspiration"],
  },
  "/about-us": {
    title: "About Unseen Himalayas Bhutan | Licensed Bhutan DMC & Tour Operator",
    description:
      "Meet Unseen Himalayas Bhutan, a licensed Bhutan DMC and tour operator creating personal, responsible, and locally guided journeys.",
    keywords: ["Unseen Himalayas Bhutan", "licensed Bhutan DMC", "Bhutan tour operator", "Bhutan travel company", "local Bhutan experts"],
  },
  "/best-time": {
    title: "Plan Your Bhutan Trip",
    description:
      "Choose when to visit Bhutan, how long to stay and which valleys to explore with local help planning a trip at your own pace.",
    keywords: ["plan Bhutan trip", "best time to visit Bhutan", "Bhutan travel season"],
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
  "/land-entry-tours": {
    title: "Bhutan Land-Entry Tours",
    description:
      "Explore Bhutan tour itineraries for travelers entering by land through Phuentsholing, with routes through Thimphu, Punakha, Gangtey, and Paro.",
    keywords: [
      "Bhutan land entry tours",
      "Phuentsholing entry Bhutan tour",
      "Bhutan overland itinerary",
    ],
  },
  "/currency": {
    title: "Bhutan Money and Payment Guide",
    description:
      "Understand the Bhutanese ngultrum, Indian rupee acceptance, cards, cash, digital wallets, tipping, and practical money advice for travelers.",
    keywords: ["Bhutan currency", "Bhutan money", "Bhutan payment guide"],
  },
  "/documents": {
    title: "Bhutan Visa and Entry Requirements",
    description:
      "Understand Bhutan visas, Indian visitor permits, passport documents and entry steps before travelling to Bhutan.",
    keywords: ["Bhutan visa", "Bhutan entry requirements", "Bhutan permit"],
  },
  "/facts": {
    title: "Bhutan Facts for Travelers",
    description:
      "Discover useful facts about Bhutan's geography, culture, national symbols, environment, society, and Gross National Happiness.",
    keywords: ["Bhutan facts", "facts about Bhutan", "Bhutan national symbols"],
  },
  "/faq": {
    title: "Bhutan Travel FAQs | Visa, SDF, Flights and Planning",
    description:
      "Get answers about Bhutan visas, costs, flights, guides, packing, connectivity, food, altitude, and trip planning.",
    keywords: ["Bhutan travel FAQ", "Bhutan visa FAQ", "Bhutan SDF", "Bhutan guide requirement", "Bhutan trip questions"],
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
  "/flights-getting-around": {
    title: "Flights to Bhutan and Local Transport",
    description:
      "Plan your flight or land entry and understand transport within Bhutan, including weather, mountain-road travel and local guide arrangements.",
    keywords: ["flights to Bhutan", "Bhutan transport", "getting around Bhutan"],
  },
  "/gnh-philosophies": {
    title: "Bhutanese Culture, History and Gross National Happiness",
    description:
      "Explore Bhutan's living traditions, Wangchuck monarchy, food, national identity and Gross National Happiness.",
    keywords: ["Gross National Happiness", "Bhutan GNH", "Bhutan culture"],
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
  "/photography-tour": {
    title: "Bhutan Photography Tours | Private Photo Journeys",
    description:
      "Explore Bhutan photography tours shaped around the best available light, local access, flexible pacing, and responsible visual storytelling.",
    keywords: [
      "Bhutan photography tours",
      "Bhutan photo tour",
      "Tiger's Nest photography tour",
      "Bhutan photography itinerary",
    ],
  },
  "/upcoming-events": {
    title: "Upcoming Bhutan Event Tours",
    description:
      "Explore upcoming Bhutan event tours, special departures, concert add-ons, festival journeys, and limited-date travel packages.",
    keywords: [
      "Bhutan upcoming events",
      "Bhutan event tours",
      "Bhutan special departures",
      "Bhutan festival packages",
    ],
  },
  "/upcoming-events/gnr-concert": {
    title: "GNR Concert Tour Package",
    description:
      "Book the Guns N' Roses Guwahati concert escape with coordinated travel from Bhutan, hotel stays, train tickets, transfers, and tour support.",
    keywords: [
      "GNR concert Bhutan package",
      "Guns N' Roses Guwahati tour",
      "Bhutan concert trip",
      "upcoming Bhutan events",
    ],
  },
  "/upcoming-events/essence-of-bhutan-group-tour": {
    title: "Essence of Bhutan Group Tour",
    description:
      "Join the 20-26 October 2026 Essence of Bhutan Group Tour through Thimphu, Punakha, Phobjikha, Paro, and Tiger's Nest.",
    keywords: [
      "Essence of Bhutan Group Tour",
      "Bhutan group tour October 2026",
      "Bhutan scheduled departure",
      "Phuentsholing Bhutan tour",
    ],
  },
  "/places-to-visit": {
    title: "Places to Visit in Bhutan | Valleys and Route Ideas",
    description:
      "Compare Paro, Thimphu, Punakha, Wangdue, Phobjikha and Haa to choose the right Bhutan itinerary.",
    keywords: [
      "places to visit in Bhutan",
      "places to visit in Thimphu",
      "places to visit in Paro",
      "Bhutan attractions",
      "Bhutan sightseeing",
      "Bhutan travel guide",
    ],
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "Read how Unseen Himalayas Bhutan handles traveller, inquiry, booking, communication, and website information.",
    keywords: ["Unseen Himalayas Bhutan privacy policy"],
  },
  "/sdf": {
    title: "Bhutan SDF and Travel Costs",
    description:
      "See how the Sustainable Development Fee, visa charges, tours and personal spending affect your Bhutan travel budget.",
    keywords: [
      "Bhutan SDF",
      "Sustainable Development Fee Bhutan",
      "Bhutan travel cost",
      "Bhutan tourism fee",
    ],
  },
  "/seasons": {
    title: "Bhutan Seasons & Weather",
    description:
      "Explore spring, summer, autumn, and winter in Bhutan, including weather patterns, scenery, festivals, and seasonal travel tips.",
    keywords: ["Bhutan seasons", "Bhutan weather by month", "when to visit Bhutan"],
  },
  "/terms": {
    title: "Booking Terms & Conditions",
    description:
      "Review Unseen Himalayas Bhutan booking terms, payment policy, cancellation schedule, refund formula, responsibilities, and dispute process.",
    keywords: ["Unseen Himalayas Bhutan terms", "Bhutan tour booking terms", "Bhutan tour payment policy"],
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

export function createPackageMetadata({
  item,
  parentPath,
  detailBasePath,
  routeLabel,
}: {
  item: PackageSeoItem;
  parentPath: SeoPath;
  detailBasePath: string;
  routeLabel: string;
}): Metadata {
  const path = `${detailBasePath}/${item.slug}`;
  const parentPage = pageSeo[parentPath];
  const title = `${item.title} | ${siteConfig.name}`;
  const description = [
    item.summary,
    `This ${item.duration.toLowerCase()} ${routeLabel.toLowerCase()} follows ${item.route}.`,
  ].join(" ");
  const image = item.image.src || siteConfig.defaultImage;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [
      item.title,
      `${routeLabel} Bhutan`,
      parentPage.title,
      "private Bhutan itinerary",
      "Bhutan tour package",
    ],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: item.image.alt || item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
