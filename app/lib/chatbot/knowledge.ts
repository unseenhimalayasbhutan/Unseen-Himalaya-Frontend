import { cyclingItineraries } from "../../data/cyclingItineraries";
import { festivalPackages } from "../../data/festivalPackages";
import { landEntryItineraries } from "../../data/landEntryItineraries";
import { photographyItineraries } from "../../data/photographyItineraries";
import { destinationChapters, globalVisitorNotes } from "../../data/placesToVisit";
import { upcomingEvents } from "../../data/upcomingEvents";
import {
  customizableItems,
  itineraries,
  reservationAndCancellation,
  termsAndConditions,
  tourExclusions,
  tourInclusions,
} from "../../data/tourItineraries";
import { siteConfig } from "../../siteConfig";
import type { KnowledgeRecord } from "./types";
import {
  cleanText,
  formatRate,
  parseDuration,
  splitRouteDestinations,
} from "./text";

const INDEX_DATE = "2026-08-19";
const hiddenFestivalPackageTitles = new Set([
  "5-Day Chhukha Tshechu Land-Entry Festival Tour",
  "7-Day Chhukha Tshechu Festival Tour",
]);

type StandardTour = (typeof itineraries)[number];

export function buildKnowledgeRecords(): KnowledgeRecord[] {
  const records: KnowledgeRecord[] = [
    buildStaticRecord({
      id: "site-overview",
      title: `${siteConfig.name} overview`,
      sourceUrl: "/",
      contentType: "company",
      summary:
        "Licensed Bhutan-based destination management company offering private tours and custom travel arrangements.",
      content: [
        siteConfig.description,
        `Company contact: email ${siteConfig.contact.email}, phone and WhatsApp ${siteConfig.contact.phoneDisplayAll}.`,
        "The team supports private Bhutan tours, cultural journeys, festival tours, hotel reservations, guides, transportation, tailor-made travel experiences, B2B travel-agent inquiries, and custom itineraries.",
      ].join(" "),
    }),
    buildStaticRecord({
      id: "contact-handoff",
      title: "Contact and human handoff",
      sourceUrl: "/contact",
      contentType: "contact",
      summary: "WhatsApp, email, and phone contact details for travel inquiries.",
      content: [
        `WhatsApp and phone: ${siteConfig.contact.phoneDisplayAll}.`,
        `Email: ${siteConfig.contact.email}.`,
        "WhatsApp is best for quick travel questions. Email is best for detailed tour inquiries and B2B requests.",
        "Travellers should share travel dates, number of guests, preferred hotel style, interests, and budget range for a customised itinerary or quotation.",
      ].join(" "),
    }),
    buildStaticRecord({
      id: "tour-inclusions-exclusions",
      title: "Tour inclusions, exclusions, and SDF notes",
      sourceUrl: "/photography-tour",
      contentType: "policy",
      summary: "Common inclusions and exclusions for package quotations.",
      content: [
        `Inclusions: ${tourInclusions.join("; ")}.`,
        `Exclusions: ${tourExclusions.join("; ")}.`,
        "Displayed package rates are B2C starting rates in USD for a 3-star hotel Standard Tour. Hotels can be upgraded for Premium and Luxury packages. SDF is excluded unless a final quotation says otherwise. Website price notes state that foreign nationals pay SDF of USD 100 per night per person and Indian nationals pay Nu. 1,200 per night per person.",
      ].join(" "),
      requiresVerification: true,
    }),
    buildStaticRecord({
      id: "booking-terms",
      title: "Booking, reservation, and cancellation terms",
      sourceUrl: "/terms",
      contentType: "policy",
      summary: "Booking confirmation, payment, cancellation, and date-change notes.",
      content: [...reservationAndCancellation, ...termsAndConditions].join(" "),
      requiresVerification: true,
    }),
    buildStaticRecord({
      id: "customisation-options",
      title: "Custom itinerary options",
      sourceUrl: "/contact",
      contentType: "planning",
      summary: "Hotel, meal, activity, vehicle, and special-interest customisation options.",
      content: customizableItems
        .map((item) => `${item.title}: ${item.description}`)
        .join(" "),
    }),
    buildStaticRecord({
      id: "visa-sdf-verification",
      title: "Visa and Sustainable Development Fee verification",
      sourceUrl: "/faq",
      contentType: "travel-info",
      summary: "Visa and SDF information should be verified before quoting or booking.",
      content:
        "Website price notes state that foreign nationals pay SDF of USD 100 per night per person and Indian nationals pay Nu. 1,200 per night per person. Visa and SDF rules are government-regulated, so exact government rules, SDF rates, border procedures, visa requirements, monument fees, and flight schedules must be reconfirmed before booking. The chatbot must not invent SDF amounts or visa rules beyond the public website note.",
      requiresVerification: true,
    }),
    buildStaticRecord({
      id: "best-time-festivals",
      title: "Best time to visit and festival planning",
      sourceUrl: "/best-time",
      contentType: "travel-info",
      summary:
        "Travel dates, festival dates, weather, and hotel availability require confirmation.",
      content:
        "Bhutan can be planned around culture, nature, festivals, photography, soft adventure, and seasonal preferences. Festival dates, weather-dependent activities, road conditions, and hotel availability should always be reconfirmed before booking.",
      requiresVerification: true,
    }),
    ...websiteInformationRecords.map(buildStaticRecord),
  ];

  return [
    ...records,
    buildVisitorGuidanceRecord(),
    ...destinationChapters.map(buildDestinationRecord),
    ...photographyItineraries.map((route) =>
      buildTourRecord(route, "photography-tour", "/photography-tour")
    ),
    ...landEntryItineraries.map((route) =>
      buildTourRecord(route, "land-entry-tour", "/land-entry-tours", {
        entryPoint: "Phuentsholing",
        exitPoint: "Phuentsholing",
      })
    ),
    ...cyclingItineraries.map((route) =>
      buildTourRecord(route, "cycling-tour", "/cycling-tours", {
        interests: ["cycling", "active travel", "culture"],
      })
    ),
    ...festivalPackages
      .filter((pkg) => !hiddenFestivalPackageTitles.has(pkg.title))
      .map((pkg) => {
        const duration = parseDuration(pkg.duration);
        const destinations = splitRouteDestinations(pkg.coverage);
        const content = [
          `${pkg.title}.`,
          `${pkg.tourCode ? `Tour code: ${pkg.tourCode}.` : ""}`,
          `Duration: ${pkg.duration}.`,
          `Route: ${cleanText(pkg.coverage)}.`,
          `Festival dates: ${cleanText(pkg.dates)}.`,
          `Best for: ${cleanText(pkg.bestFor)}.`,
          cleanText(pkg.summary),
          `${formatRate(pkg.startingRate, pkg.tourCode)}.`,
          `Festivals and interests: ${pkg.festivals.map(cleanText).join(", ")}.`,
          pkg.days
            .map(
              (day) =>
                `Day ${day.day}: ${cleanText(day.title)}. ${day.activities.map(cleanText).join("; ")}.`
            )
            .join(" "),
        ].join(" ");

        return {
          id: `festival-tour:${slugify(pkg.title)}`,
          title: cleanText(pkg.title),
          content,
          summary: cleanText(pkg.summary),
          sourceUrl: `${siteConfig.url}/festival-tours`,
          contentType: "festival-tour",
          tourCode: pkg.tourCode,
          startingRate: pkg.startingRate,
          tourCategory: "festival",
          ...duration,
          destinations,
          entryPoint: destinations[0] || "Paro",
          exitPoint: destinations[destinations.length - 1] || "Paro",
          interests: [...pkg.festivals.map(cleanText), "festival", "culture"],
          travelSeason: inferTravelSeason(`${pkg.dates} ${pkg.summary}`),
          festivalName: pkg.festivals[0],
          lastUpdated: INDEX_DATE,
          requiresVerification: true,
        } satisfies KnowledgeRecord;
      }),
    ...upcomingEvents.map(buildUpcomingEventRecord),
  ];
}

const websiteInformationRecords: Array<
  Omit<KnowledgeRecord, "lastUpdated" | "requiresVerification"> &
    Partial<Pick<KnowledgeRecord, "requiresVerification">>
> = [
  {
    id: "about-bhutan-country-profile",
    title: "About Bhutan country profile",
    sourceUrl: "/about-bhutan",
    contentType: "travel-info",
    summary:
      "Bhutan is a Himalayan Buddhist kingdom known for culture, forests, dzongs, community life, cuisine, and Gross National Happiness.",
    content: [
      "Bhutan is a small Himalayan kingdom between India and Tibet/China with an area of about 38,394 km2, 20 dzongkhags, Dzongkha as the national language, and a constitutional commitment to keep at least 60% forest cover.",
      "The website describes subtropical, temperate, and alpine zones; forests, flowers, medicinal plants, wildlife including snow leopards and black-necked cranes; Buddhist daily practice; communities, dialects, and identity.",
      "Food and daily culture include red rice, buckwheat, maize, yak cheese, cow cheese, chillies, ema datshi, meat soups, curries, farmhouse meals, ngaja, suja, ara, local beer, doma, hospitality, and ceremonial offerings.",
      "Travel context includes Paro as the international gateway, Drukair and Bhutan Airlines for air services, domestic airports, mountain aviation, and land entry subject to current rules.",
    ].join(" "),
    requiresVerification: true,
  },
  {
    id: "about-us-company-founders",
    title: "Unseen Himalayas Bhutan company and founders",
    sourceUrl: "/about-us",
    contentType: "company",
    summary:
      "Unseen Himalayas Bhutan is a Bhutan-based travel company founded by Passang Tenzin Tamang and Mamick Pradhan.",
    content: [
      "Unseen Himalayas Bhutan is a Bhutan-based destination management company focused on private trip planning, professional ground handling, realistic route pacing, direct communication, written quotations, and local support before and during travel.",
      "Founder and Managing Director Passang Tenzin Tamang is a Bhutanese entrepreneur and travel enthusiast with around four years of hands-on tourism industry experience in Bhutan. His background includes group operations, hotels, transport, guides, travel logistics, and full journey coordination.",
      "Co-Founder Mamick Pradhan is a software developer and traveler who brings technology, organization, efficiency, and a people-focused planning perspective to the company.",
      "Company registration number 50001360. Office address: Theengh Apartments, Babesa, Thimphu. Phone and WhatsApp: +975 16168893 / +975 16192762. Email: info@theunseenhimalayas.com.",
    ].join(" "),
  },
  {
    id: "why-visit-bhutan",
    title: "Why visit Bhutan",
    sourceUrl: "/why-visit",
    contentType: "travel-info",
    summary:
      "Bhutan is positioned as a destination for peaceful atmosphere, living Buddhist culture, nature, human connection, and slower meaningful travel.",
    content: [
      "Reasons to visit Bhutan include a peaceful atmosphere, living spiritual culture, nature with purpose, human connection, Himalayan scenery, rare wildlife and birdlife, distinctive identity, and a slower kind of luxury.",
      "The website highlights culture seekers, nature lovers, soft adventurers, and spiritual travelers. Signature moments include first sight of Tiger's Nest, prayer flags on a mountain pass, festival masks and sacred dances, and a quiet farmhouse meal.",
      "Sustainable travel themes include respect for nature, local value, cultural sensitivity, better pacing, meaningful local meals, and a respectful tourism model.",
    ].join(" "),
  },
  {
    id: "gross-national-happiness",
    title: "Gross National Happiness philosophy",
    sourceUrl: "/gnh-philosophies",
    contentType: "travel-info",
    summary:
      "Gross National Happiness links Bhutan's development philosophy with culture, environment, governance, wellbeing, and tourism.",
    content: [
      "Gross National Happiness is Bhutan's development philosophy. The website explains that GNH asks a deeper question than economic output alone and connects progress with wellbeing, balance, culture, environment, and governance.",
      "The four pillars are sustainable development, good governance, cultural preservation, and environmental conservation.",
      "The nine domains include psychological wellbeing, time use, community vitality, cultural diversity, good governance, health, education, ecological diversity, and living standards.",
      "For visitors, GNH can be experienced through slower pacing, living culture, community life, forests, monasteries, and thoughtful route planning rather than rushed sightseeing.",
    ].join(" "),
  },
  {
    id: "best-time-seasonal-guide",
    title: "Best time to visit Bhutan",
    sourceUrl: "/best-time",
    contentType: "travel-info",
    summary:
      "Spring and autumn are peak seasons, summer is green and quieter, and winter is good for clear cultural travel and crane viewing.",
    content: [
      "Spring, March to May, brings flowers, festivals, trekking, photography, wildlife viewing, comfortable weather, and good mountain views.",
      "Summer, June to August, brings monsoon rain, lush green landscapes, fewer visitors, better value, and cultural sightseeing, though high-altitude trekking can be limited.",
      "Autumn, September to November, is one of Bhutan's most popular seasons with clearer skies, pleasant weather, major festivals, mountain views, trekking, and outdoor photography.",
      "Winter, December to February, is calm, clear, and less crowded. It suits cultural tours, photography, bird watching, black-necked cranes in Phobjikha, hot stone baths, and valley-based travel, though mornings and evenings can be cold.",
      "October is often considered one of the best overall months. Trekking is generally strongest in spring and autumn. Festival dates must be reconfirmed each year.",
    ].join(" "),
    travelSeason: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    requiresVerification: true,
  },
  {
    id: "sdf-trip-costs",
    title: "Sustainable Development Fee and trip costs",
    sourceUrl: "/sdf",
    contentType: "travel-info",
    summary:
      "The SDF page explains published SDF rates, what the fee supports, and which costs need verification.",
    content: [
      "Website SDF rates state: adults from countries other than India pay USD 100 per night; children aged 6-11 from countries other than India pay USD 50 per night; children under 6 pay no SDF; Indian nationals pay Nu./INR 1,200 per adult per night and Nu./INR 600 for children aged 6-11.",
      "Eligible Bangladeshi visitor categories and other reduced categories must be checked during application.",
      "SDF supports culture and heritage, environment, public services, youth opportunity, development priorities, healthcare, education, forests, wildlife, clean drinking water, infrastructure, and restoration of historic dzongs through Bhutan's public finance and planning systems.",
      "Visa fees, monument fees, flights, current government rules, and nationality-specific entry charges must be verified before booking.",
    ].join(" "),
    requiresVerification: true,
  },
  {
    id: "visa-documents-entry",
    title: "Visa, permits, and entry documents",
    sourceUrl: "/documents",
    contentType: "travel-info",
    summary:
      "Entry documents depend on nationality; travellers should prepare passport or ID details and confirm current official rules.",
    content: [
      "The documents page guides travellers to share travel details, prepare required documents, confirm the tour, receive entry guidance, and arrive in Bhutan with correct paperwork.",
      "Indian citizens have a different entry-document process from most international visitors and may use accepted Indian identity documents under current rules. Bangladeshi and Maldivian citizens may have separate categories. Other nationalities usually need passport and visa processing.",
      "By air, Paro is the main international gateway. By land, entry is possible at designated border points subject to immigration process, current rules, and route planning.",
      "Children may need separate documents. Printed and digital copies are useful. Visa or entry rules can change, so the team must verify requirements by nationality and travel date.",
    ].join(" "),
    requiresVerification: true,
  },
  {
    id: "flights-getting-around",
    title: "Flights and getting around Bhutan",
    sourceUrl: "/flights-getting-around",
    contentType: "travel-info",
    summary:
      "Bhutan travel requires realistic flight, land-entry, road, guide, and route planning.",
    content: [
      "Drukair and Bhutan Airlines operate international services to Bhutan. Air services, airports, and schedules should be checked on current official airline channels before booking.",
      "Mountain weather can affect flight operations, so travellers should allow sensible connection time around arrival and departure days.",
      "Overland entry is possible at designated border points, subject to immigration process, correct crossing, nationality documents, and planned onward transport.",
      "Road distances can underestimate travel time on mountain roads. Private vehicle and driver arrangements can be included. Domestic flights may help on longer routes, subject to schedules.",
      "A guide is required for monuments and dzongs under current guidance, and treks require accredited guide or operator support. Short trips can focus on Paro and Thimphu; Punakha, Phobjikha, Haa, or central Bhutan need more time.",
    ].join(" "),
    requiresVerification: true,
  },
  {
    id: "currency-payments-fees",
    title: "Currency, payments, ATMs, tipping, and monument fees",
    sourceUrl: "/currency",
    contentType: "travel-info",
    summary:
      "Bhutan uses Ngultrum, INR is linked 1:1, cash remains useful, and monument fees should be verified.",
    content: [
      "Bhutanese Ngultrum is commonly written as Nu. BTN and INR are linked 1:1. Common banknotes include Nu. 5, 10, 20, 50, 100, 500, and 1000.",
      "INR is commonly accepted in many shops and towns, but BTN is smoother for daily use and change may be given in Bhutanese Ngultrum. Damaged notes or some denominations may not be accepted.",
      "ATMs are available in major towns such as Thimphu, Paro, Punakha, and Phuentsholing, but international card access, withdrawal limits, fees, connectivity, and cash availability can vary.",
      "Cards are useful in Thimphu and Paro, especially at larger hotels and shops, while cash is preferred in smaller towns and rural areas.",
      "For digital wallets or alternative payments, confirm merchant acceptance first and keep cash and a working card backup. Tips are best given in cash where possible.",
      "The website lists working monument and museum fee references including Tiger's Nest, National Museum, Punakha Dzong, Tashichho Dzong, Buddha Dordenma, Kyichu Lhakhang, Chimi Lhakhang, and others, but fees and opening hours must be confirmed locally.",
    ].join(" "),
    requiresVerification: true,
  },
  {
    id: "optional-experiences-add-ons",
    title: "Optional tours and add-on experiences",
    sourceUrl: "/optional-tours",
    contentType: "planning",
    summary:
      "Optional add-ons include cultural, local-life, nature, adventure, wellness, comfort, and luxury experiences.",
    content: [
      "Optional experiences can be added after choosing a base tour, selecting experiences, choosing comfort level, and confirming availability, feasibility, inclusions, and price.",
      "Cultural and local-life add-ons include farmhouse dinner, Bhutanese astrology session, cooking Bhutanese dishes, traditional dress and archery, and arts and crafts workshops.",
      "Nature and soft-adventure add-ons include Wangditse hike, tree planting, Gangtey Nature Trail, Lungchutse short hike, Punakha rafting, cycling, and zipline.",
      "Wellness, comfort, and luxury add-ons include hot stone bath, private helicopter tour, premium vehicle upgrade, and hotel category upgrade.",
      "Short 3-day escapes are best for one or two light add-ons. Five-day classic routes can fit cooking, hikes, rafting, crafts, tree planting, and hotel upgrades. Seven to eight day deeper journeys are best for Phobjikha nature trails, rural experiences, and helicopter requests.",
    ].join(" "),
    requiresVerification: true,
  },
  {
    id: "festival-calendar-planning",
    title: "Bhutan festival calendar planning",
    sourceUrl: "/festival-calendar",
    contentType: "travel-info",
    summary:
      "The festival calendar lists major Bhutanese festivals by month and should be reconfirmed before booking.",
    content: [
      "The website festival calendar includes major cultural events such as Punakha Drubchen, Punakha Tsechu, Talo Tsechu, Paro Tsechu, Rhododendron Festival, Ura Yakchoe, Haa Summer Festival, Thimphu Drubchen, Wangdue Tsechu, Thimphu Tsechu, Gangtey Tsechu, Jakar Tsechu, Dechenphug Tsechu, Jambay Lhakhang Drup, Black Necked Crane Festival, Nalakhar Tshechu, Druk Wangyel Tsechu, and Bhutan National Day.",
      "Festival travel depends on annual date confirmation, hotel availability, road timing, guide availability, and crowd levels. Spring and autumn carry many major festivals, while the Black Necked Crane Festival is tied to Phobjikha's crane season.",
    ].join(" "),
    travelSeason: [
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    requiresVerification: true,
  },
  {
    id: "faq-guides-payments-health",
    title: "Common Bhutan travel FAQs",
    sourceUrl: "/faq",
    contentType: "faq",
    summary:
      "The FAQ covers booking, payments, visas, guides, logistics, health, safety, cancellations, and refunds.",
    content: [
      "FAQ topics include booking and planning, travel costs, payments and fund transfers, visas and documents, travel logistics, guides and languages, health and safety, cancellations, and refunds.",
      "Travellers can travel solo on a private trip or arrange a group. Best travel time depends on goals such as festivals, weather, nature, photography, trekking, or quieter travel.",
      "Payment methods can include bank transfer and other arranged methods depending on traveller location and current company instructions. Travellers should verify the correct company account before payment and use clear payment references.",
      "Guide language requests, Hindi-speaking guides, specialist-language guides, and female guide requests should be made early and confirmed. English is generally useful for travelling in Bhutan.",
      "Travel insurance is recommended. Flight delays, road changes, weather, and schedule changes should be handled with flexibility. Cancellations and refunds follow the booking terms and supplier rules.",
    ].join(" "),
    requiresVerification: true,
  },
  {
    id: "legal-documents-trust",
    title: "Legal documents and company verification",
    sourceUrl: "/legal-documents",
    contentType: "company",
    summary:
      "The legal documents page links the company's technical clearance and business license for traveller review.",
    content:
      "The legal documents page provides company documents for independent review before booking, including Technical Clearance and Business License. Travellers can review official company details alongside the terms and privacy policy.",
  },
  {
    id: "privacy-policy",
    title: "Privacy policy",
    sourceUrl: "/privacy-policy",
    contentType: "policy",
    summary:
      "The privacy policy explains travel administration, service sharing, consent, security, retention, traveller choices, and website accuracy.",
    content: [
      "The privacy policy says information may be collected for travel administration, trip planning, visa or permit support, communication, quotations, booking, and service coordination.",
      "Information may be shared with service providers where needed for travel arrangements. Marketing, photos, and videos require separate consent where applicable.",
      "The policy covers security and record retention, traveller choices and requests, website accuracy, and third-party links.",
    ].join(" "),
  },
];

function buildVisitorGuidanceRecord(): KnowledgeRecord {
  return buildStaticRecord({
    id: "places-visitor-guidance",
    title: "Visitor guidance for places to visit",
    sourceUrl: "/places-to-visit",
    contentType: "travel-info",
    summary:
      "Certified guides, site fees, etiquette, hiking conditions, trekking support, and photography restrictions should be planned carefully.",
    content: globalVisitorNotes
      .map((note) => `${cleanText(note.title)}: ${cleanText(note.text)}`)
      .join(" "),
    requiresVerification: true,
  });
}

function buildDestinationRecord(
  chapter: (typeof destinationChapters)[number]
): KnowledgeRecord {
  const attractionText = chapter.attractions
    .map((attraction) =>
      [
        `${cleanText(attraction.title)} in ${cleanText(attraction.location)}.`,
        `Tags: ${attraction.tags.map(cleanText).join(", ")}.`,
        `Suggested time: ${cleanText(attraction.time)}.`,
        `Level: ${cleanText(attraction.level)}.`,
        `Priority: ${cleanText(attraction.priority)}.`,
        cleanText(attraction.summary),
        attraction.note ? `Note: ${cleanText(attraction.note)}.` : "",
      ]
        .filter(Boolean)
        .join(" ")
    )
    .join(" ");
  const faqText = chapter.faqs
    .map((faq) => `${cleanText(faq.question)} ${cleanText(faq.answer)}`)
    .join(" ");
  const content = [
    `${cleanText(chapter.name)}.`,
    cleanText(chapter.kicker),
    cleanText(chapter.intro),
    `Best for: ${cleanText(chapter.bestFor)}.`,
    `Facts: ${chapter.facts
      .map((fact) => `${cleanText(fact.label)} ${cleanText(fact.value)}`)
      .join("; ")}.`,
    `Stay planning: ${chapter.stayPlanning.map(cleanText).join("; ")}.`,
    `Seasonality: ${cleanText(chapter.seasonality)}.`,
    `Events: ${chapter.events
      .map((event) => `${cleanText(event.name)} ${cleanText(event.date)} ${cleanText(event.note)}`)
      .join("; ")}.`,
    `Attractions: ${attractionText}`,
    `FAQs: ${faqText}`,
  ].join(" ");

  return {
    id: `destination:${chapter.id}`,
    title: `${cleanText(chapter.name)} places to visit`,
    content,
    summary: `${cleanText(chapter.name)} is best for ${cleanText(chapter.bestFor)}. ${cleanText(
      chapter.intro
    )}`,
    sourceUrl: `${siteConfig.url}/places-to-visit#${chapter.id}`,
    contentType: "destination",
    tourCategory: "places-to-visit",
    destinations: [
      ...new Set(
        [chapter.name, chapter.shortName, ...splitRouteDestinations(chapter.name)]
          .map(cleanText)
          .filter(Boolean)
      ),
    ],
    interests: inferInterests(content),
    travelSeason: inferTravelSeason(content),
    lastUpdated: INDEX_DATE,
    requiresVerification: true,
  };
}

function buildTourRecord(
  route: StandardTour,
  contentType: string,
  sourcePath: string,
  overrides: Partial<KnowledgeRecord> = {}
): KnowledgeRecord {
  const duration = parseDuration(route.duration);
  const destinations = splitRouteDestinations(route.route);
  const displayTourCode = overrides.tourCode || route.tourCode;
  const interests = inferInterests(
    `${route.name} ${route.theme} ${route.summary} ${route.bestFor} ${route.tags.join(" ")}`
  );
  const content = [
    `${cleanText(route.name)}.`,
    `${displayTourCode ? `Tour code: ${displayTourCode}.` : ""}`,
    `Duration: ${cleanText(route.duration)}.`,
    `Route: ${cleanText(route.route)}.`,
    `Theme: ${cleanText(route.theme)}.`,
    `Best for: ${cleanText(route.bestFor)}.`,
    cleanText(route.summary),
    `${formatRate(route.startingRate, displayTourCode)}.`,
    `Tags: ${route.tags.map(cleanText).join(", ")}.`,
    route.days
      .map((day) => `${cleanText(day.title)}. ${day.activities.map(cleanText).join("; ")}.`)
      .join(" "),
  ].join(" ");

  return {
    id: `${contentType}:${route.slug}`,
    title: cleanText(route.name),
    content,
    summary: cleanText(route.summary),
    sourceUrl: `${siteConfig.url}${sourcePath}`,
    contentType,
    tourCode: displayTourCode,
    startingRate: route.startingRate,
    tourCategory: route.theme,
    ...duration,
    destinations,
    entryPoint: destinations[0] || overrides.entryPoint || "Paro",
    exitPoint: destinations[destinations.length - 1] || overrides.exitPoint || "Paro",
    interests: [...new Set([...(overrides.interests || []), ...interests])],
    travelSeason: inferTravelSeason(route.summary),
    lastUpdated: INDEX_DATE,
    requiresVerification: false,
    ...overrides,
  };
}

function buildUpcomingEventRecord(event: (typeof upcomingEvents)[number]): KnowledgeRecord {
  const itineraryText = event.itinerary
    .map(
      (day) =>
        `${cleanText(day.day)}: ${cleanText(day.title)}. ${day.activities
          .map(cleanText)
          .join("; ")}.`
    )
    .join(" ");

  const packageText = event.packages
    .map(
      (pkg) =>
        `${cleanText(pkg.name)}: ${cleanText(pkg.price)}. ${pkg.features
          .map(cleanText)
          .join("; ")}.`
    )
    .join(" ");

  const content = [
    `${cleanText(event.title)}.`,
    `${cleanText(event.subtitle)}.`,
    `Date: ${cleanText(event.date)}.`,
    `Location: ${cleanText(event.location)}.`,
    `Duration: ${cleanText(event.duration)}.`,
    `Starting price: ${cleanText(event.price)} ${cleanText(event.priceNote)}.`,
    `Packages: ${packageText}`,
    `Package inclusions: ${event.packageSectionInclusions.map(cleanText).join("; ")}.`,
    `Tour highlights: ${event.highlights.map(cleanText).join("; ")}.`,
    `Detailed inclusions: ${event.inclusions.map(cleanText).join("; ")}.`,
    `Exclusions: ${event.exclusions.map(cleanText).join("; ")}.`,
    `Itinerary: ${itineraryText}`,
  ].join(" ");

  return {
    id: `upcoming-event:${event.slug}`,
    title: cleanText(event.title),
    content,
    summary: `${cleanText(event.duration)} concert escape from Bhutan to ${cleanText(
      event.location
    )}, starting at ${cleanText(event.price)} ${cleanText(event.priceNote)}.`,
    sourceUrl: `${siteConfig.url}/upcoming-events/gnr-concert`,
    contentType: "upcoming-event",
    startingRate: Number(cleanText(event.price).replace(/[^\d]/g, "")) || undefined,
    tourCategory: "event",
    durationDays: 5,
    durationNights: 4,
    destinations: ["Phuentsholing", "Guwahati", "Thimphu"],
    entryPoint: "Thimphu",
    exitPoint: "Thimphu",
    interests: ["concert", "guns n' roses", "guwahati", "assam", "event", "music"],
    lastUpdated: INDEX_DATE,
    requiresVerification: true,
  };
}

function buildStaticRecord(
  record: Omit<KnowledgeRecord, "lastUpdated" | "requiresVerification"> &
    Partial<Pick<KnowledgeRecord, "requiresVerification">>
): KnowledgeRecord {
  return {
    ...record,
    sourceUrl: record.sourceUrl.startsWith("http")
      ? record.sourceUrl
      : `${siteConfig.url}${record.sourceUrl}`,
    lastUpdated: INDEX_DATE,
    requiresVerification: record.requiresVerification || false,
  };
}

function inferInterests(text: string) {
  const lowerText = cleanText(text).toLowerCase();
  const interests = [
    ["culture", "cultural", "dzong", "museum", "heritage", "temple"],
    ["festival", "festival", "tshechu", "drup"],
    ["photography", "photo", "photography", "view", "sunrise"],
    ["nature", "nature", "valley", "crane", "forest", "bird"],
    ["birdwatching", "bird", "crane"],
    ["cycling", "cycling", "bike"],
    ["luxury", "luxury", "premium"],
    ["family", "family", "children"],
    ["honeymoon", "honeymoon", "romantic"],
    ["soft adventure", "hike", "rafting", "trail", "active"],
  ];

  return interests
    .filter(([, ...terms]) => terms.some((term) => lowerText.includes(term)))
    .map(([interest]) => interest);
}

function inferTravelSeason(text: string) {
  const lowerText = cleanText(text).toLowerCase();
  return [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ].filter((month) => lowerText.includes(month));
}

function slugify(value: string) {
  return cleanText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
