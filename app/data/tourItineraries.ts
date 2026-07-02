export type ImageAsset = {
  src: string;
  alt: string;
  label: string;
  copyrightName?: string;
};

export type ItineraryDay = {
  title: string;
  activities: string[];
};

export type ItineraryRoute = {
  slug: string;
  name: string;
  duration: string;
  route: string;
  theme: string;
  summary: string;
  bestFor: string;
  image: ImageAsset;
  tags: string[];
  days: ItineraryDay[];
};

export type CustomizableItem = {
  title: string;
  description: string;
};

export type DurationFilter = {
  id: string;
  label: string;
};

export const durationFilters: DurationFilter[] = [
  { id: "all", label: "All" },
  { id: "3days", label: "3 Days Tour" },
  { id: "4days", label: "4 Days Tour" },
  { id: "5days", label: "5 Days Tour" },
  { id: "6days", label: "6 Days Tour" },
  { id: "7days", label: "7 Days Tour" },
  { id: "8days", label: "8 Days Tour" },
];

export const customizableItems: CustomizableItem[] = [
  {
    title: "Hotel Category",
    description:
      "Standard, premium, luxury, or mixed-category stays based on the client budget.",
  },
  {
    title: "Meal Plan",
    description:
      "CP, MAP, AP, farmhouse dinner, picnic lunch, and local restaurant experiences.",
  },
  {
    title: "Activity Level",
    description:
      "Gentle sightseeing, soft hikes, full-day trails, rafting, biking, or nature walks.",
  },
  {
    title: "Special Interest",
    description:
      "Culture, festivals, photography, wellness, birding, food, textiles, or spiritual sites.",
  },
  {
    title: "Vehicle Style",
    description:
      "Comfortable private vehicle, premium SUV upgrade, or larger group transport.",
  },
  {
    title: "Custom Itinerary",
    description:
      "Create a personalized itinerary designed around your passions, preferences and travel style.",
  },
  
];

export const tourInclusions = [
  "Accommodation in selected hotel category",
  "Private licensed Bhutanese guide during the entire tour",
  "Private vehicle with professional driver for sightseeing and transfers",
  "Airport or border pickup and drop-off",
  "Sightseeing as per the confirmed itinerary",
  "Daily meals at selected hotels/restaurants",
  "Visa and SDF guidance for international guests",
  "Monument entry fees",
  "Complimentary bottled water",
];

export const tourExclusions = [
  "International or domestic flights (Available on request)",
  "Sustainable Development Fee",
  "Visa fee",
  "Meals at restaurants outside our selected arrangements, alcoholic beverages, and personal expenses",
  "Travel insurance, medical expenses, and emergency evacuation",
  "Optional activities such as hot stone bath, rafting, or special farmhouse meals",
  "Tips for guide, driver, hotel staff, and porters",
  "Any service not mentioned under inclusions",
];

export const reservationAndCancellation = [
  
  "Booking is confirmed only after written confirmation and receipt of 50% advance payment.",
  "Final payment should be completed before 2 weeks of arrival.",
  "Cancellation charges depend on hotel, airline, government, and service-provider policies.",
  "Date changes are subject to availability and any supplier price difference.",
  "No-show, early departure, or unused services may not be refundable.",
];

export const termsAndConditions = [
  "The final quotation will confirm whether SDF, visa fee, meals, entrance fees, and taxes are included or excluded.",
  "Rates may change during peak season, festival dates, or supplier rate revisions.",
  "Itinerary timing may change due to weather, road conditions, government rules, flight delays, or guest safety.",
  "Guests are responsible for valid passports, travel insurance, and personal medication.",
  "Hotel room category and bed type are subject to availability at confirmation.",
  "Unseen Himalayas Bhutan will provide suitable alternatives if a listed service becomes unavailable after confirmation.",
];

export const itineraries: ItineraryRoute[] = [
  {
    "slug": "3-day-paro-thimphu-paro",
    "name": "3-Day Paro & Thimphu Essentials",
    "duration": "3 Days / 2 Nights",
    "route": "Paro • Thimphu • Paro",
    "theme": "Short Cultural Tour",
    "summary": "For travelers with limited time who still want Thimphu highlights and Tiger’s Nest.",
    "bestFor": "Short-stay travelers",
    "image": {
      "src": "",
      "alt": "3-Day Paro & Thimphu Essentials image",
      "label": "3-Day Paro & Thimphu Essentials Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "tags": [
      "Tiger’s Nest",
      "Thimphu",
      "Paro",
      "Archery"
    ],
    "days": [
      {
        "title": "Day 01: Arrival in Paro-Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Transfer to Thimphu and Sightseeing",
          "Visit Buddha Dordenma",
          "Visit National Memorial Chorten",
          "Visit Tashi Choed Dzong",
          "Visit Simply Bhutan or Folk Heritage Museum",
          "Outdoor cultural activities (traditional dress, archery, darts)",
          "Explore Thimphu Town & handicraft shops",
          "Overnight stay in Thimphu (2,200 m)"
        ]
      },
      {
        "title": "Day 02: Thimphu to Paro",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Visit Kyichu Lhakhang",
          "Optional Hot stone bath & farmhouse dinner (additional cost)",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 03: Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "slug": "3-day-paro-paro",
    "name": "3-Day Paro Valley Short Escape",
    "duration": "3 Days / 2 Nights",
    "route": "Paro • Paro",
    "theme": "Short Paro Tour",
    "summary": "A compact Paro-based journey focused on dzongs, museums, Tiger’s Nest, and local culture.",
    "bestFor": "Short-stay travelers",
    "image": {
      "src": "/02 - Paro-11.jpg",
      "alt": "3-Day Paro Valley Short Escape image",
      "label": "3-Day Paro Valley Short Escape Image",
      "copyrightName": "Kezang Choden"
    },
    "tags": [
      "Tiger’s Nest",
      "Paro",
      "Archery"
    ],
    "days": [
      {
        "title": "Day 01: Arrival in Paro",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Transfer to hotel and leisure time",
          "Visit Rinpung Dzong (Paro Dzong)",
          "Visit Ta Dzong – National Museum",
          "Outdoor cultural activities (traditional dress, archery, darts)",
          "Explore Paro Town & handicraft shops",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "title": "Day 02: Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Visit Kyichu Lhakhang",
          "Optional Hot stone bath & farmhouse dinner (additional cost)",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 03: Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "slug": "4-day-paro-punakha-paro",
    "name": "4-Day Punakha Quick Journey",
    "duration": "4 Days / 3 Nights",
    "route": "Paro • Punakha • Paro",
    "theme": "Scenic Valley Tour",
    "summary": "A fast-paced route for travelers who want Punakha Dzong, valley views, and Tiger’s Nest.",
    "bestFor": "Short-stay travelers",
    "image": {
      "src": "/Punakha by Marcus Westberg55.jpg",
      "alt": "4-Day Punakha Quick Journey image",
      "label": "4-Day Punakha Quick Journey Image",
      "copyrightName": "Carissa Nimah"
    },
    "tags": [
      "Tiger’s Nest",
      "Punakha",
      "Paro"
    ],
    "days": [
      {
        "title": "Day 01: Arrival at Paro – Drive to Punakha",
        "activities": [
          "Arrival at Paro International Airport",
          "Meet and greet with guide and driver",
          "Scenic drive to Punakha via Dochula Pass",
          "Stop at Dochula Pass for Himalayan views",
          "Optional short nature hike to Lungchutse",
          "Visit Chimmi Lhakhang (Temple of the Divine Madman)",
          "Check-in at hotel in Punakha",
          "Overnight stay in Punakha"
        ]
      },
      {
        "title": "Day 02: Punakha Sightseeing – Drive to Paro",
        "activities": [
          "Visit Punakha Dzong",
          "Short hike to Khamsum Yulley Namgyel Chorten",
          "Walk through paddy fields and valley viewpoints",
          "Visit Wolokha Nunnery",
          "Optional rafting on Punakha River",
          "Drive to Paro",
          "Check-in at hotel",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 03: Paro – Tiger’s Nest Hike",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Stop at cafeteria viewpoint",
          "Visit Kyichu Lhakhang",
          "Explore Paro town & shopping",
          "Optional hot stone bath & farmhouse dinner",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 04: Departure from Paro",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "slug": "4-day-paro-thimphu-paro",
    "name": "4-Day Thimphu & Paro Cultural Intro",
    "duration": "4 Days / 3 Nights",
    "route": "Paro • Thimphu • Paro",
    "theme": "Cultural Introduction",
    "summary": "A balanced short itinerary combining Thimphu culture, Paro heritage, and Tiger’s Nest.",
    "bestFor": "Short-stay travelers",
    "image": {
      "src": "/Paro Dzong  DOT AA Original Bhutan Travels.jpg",
      "alt": "4-Day Thimphu & Paro Cultural Intro image",
      "label": "4-Day Thimphu & Paro Cultural Intro Image",
      "copyrightName": "Kevin Pagès / Amazing Aerial Agency"
    },
    "tags": [
      "Tiger’s Nest",
      "Thimphu",
      "Paro",
      "Archery"
    ],
    "days": [
      {
        "title": "Day 01: Arrival in Paro – Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge",
          "Visit Tashichho Dzong (evening visit, subject to access)",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "title": "Day 02: Thimphu Sightseeing – Transfer to Paro",
        "activities": [
          "Visit Buddha Dordenma viewpoint",
          "Drive past National Memorial Chorten",
          "Scenic drive via Dochula Pass (108 chortens & Himalayan views)",
          "Visit Rinpung Dzong (Paro Dzong)",
          "Visit Ta Dzong – National Museum",
          "Outdoor cultural activities (traditional dress, archery, darts)",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "title": "Day 03: Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Visit Kyichu Lhakhang",
          "Free time in Paro town & shopping",
          "Optional hot stone bath & farmhouse dinner (additional cost)",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 04: Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from the Kingdom of Bhutan"
        ]
      }
    ]
  },
  {
    "slug": "5-day-classic-western-bhutan",
    "name": "5-Day Classic Western Bhutan",
    "duration": "5 Days / 4 Nights",
    "route": "Paro • Thimphu • Punakha • Paro",
    "theme": "Classic Western Bhutan",
    "summary": "A strong first-time route with Thimphu, Punakha, Dochula, Paro, and Tiger’s Nest.",
    "bestFor": "First-time Bhutan travelers",
    "image": {
      "src": "/Big Buddha with Thimphu City behind x DOT AA Original Bhutan Travels.jpg",
      "alt": "5-Day Classic Western Bhutan image",
      "label": "5-Day Classic Western Bhutan Image",
      "copyrightName": "Kuenzang"
    },
    "tags": [
      "Tiger’s Nest",
      "Punakha",
      "Thimphu",
      "Paro",
      "Archery"
    ],
    "days": [
      {
        "title": "Day 01: Arrival in Paro – Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge",
          "Visit Tashichho Dzong (evening visit, subject to access)",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "title": "Day 02: Thimphu Sightseeing – Drive to Punakha",
        "activities": [
          "Visit Buddha Dordenma viewpoint",
          "Drive past National Memorial Chorten",
          "Scenic drive to Punakha via Dochula Pass",
          "Stop at Dochula Pass (108 chortens & Himalayan views)",
          "Visit Lamperi Botanical Garden",
          "Visit Punakha Dzong",
          "Walk across Punakha Suspension Bridge",
          "Overnight stay in Punakha (1,350 m)"
        ]
      },
      {
        "title": "Day 03: Punakha – Drive to Paro",
        "activities": [
          "Drive back to Paro via Dochula Pass & Chuzom",
          "Visit Chimmi Lhakhang (Fertility Temple)",
          "Gentle village walk through Mesina village",
          "Visit Rinpung Dzong (Paro Dzong)",
          "Visit Ta Dzong – National Museum",
          "Outdoor cultural activities (traditional dress, archery, darts)",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "title": "Day 04: Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Visit Kyichu Lhakhang",
          "Free time in Paro town & shopping",
          "Optional hot stone bath & farmhouse dinner (additional cost)",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 05: Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from the Kingdom of Bhutan"
        ]
      }
    ]
  },
  {
    "slug": "6-day-punakha-depth",
    "name": "6-Day Punakha Culture & Valley Journey",
    "duration": "6 Days / 5 Nights",
    "route": "Paro • Thimphu • Punakha • Paro",
    "theme": "Punakha Focus",
    "summary": "A deeper Punakha-focused route with rural activities, dzongs, hikes, and Paro highlights.",
    "bestFor": "First-time Bhutan travelers",
    "image": {
      "src": "/Punakha by Marcus Westberg27.jpg",
      "alt": "6-Day Punakha Culture & Valley Journey image",
      "label": "6-Day Punakha Culture & Valley Journey Image",
      "copyrightName": "Carissa Nimah"
    },
    "tags": [
      "Tiger’s Nest",
      "Punakha",
      "Thimphu",
      "Paro"
    ],
    "days": [
      {
        "title": "Day 01: Arrival in Paro – Drive to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Meet & greet with guide",
          "Scenic drive to Thimphu (approx. 1 hr)",
          "Hotel check-in",
          "Lunch at hotel or local restaurant (guest preference)",
          "Thimphu sightseeing (prioritized by interest), including:",
          "School of Buddhist Astrology",
          "Farmers Market",
          "Traditional Medicine Institute",
          "Crafts Market",
          "National Memorial Chorten",
          "Takin Preserve",
          "Tashichho Dzong (Thimphu Dzong)",
          "Evening walk in Thimphu town",
          "Dinner at local restaurant",
          "Optional nightlife / local beer & whisky tasting",
          "Overnight stay in Thimphu"
        ]
      },
      {
        "title": "Day 02: Thimphu – Punakha",
        "activities": [
          "Breakfast at hotel",
          "Visit Buddha Dordenma Statue",
          "Drive to Punakha via Dochula Pass (approx. 2 hrs)",
          "Stop at Dochula Pass – 108 Chortens & Himalayan views",
          "Optional short nature hike (subject to interest)",
          "Visit Chimmi Lhakhang (Fertility Temple)",
          "Village walk through Sopsokha / Metshina",
          "Overnight stay in Punakha"
        ]
      },
      {
        "title": "Day 03: Punakha Sightseeing",
        "activities": [
          "Short hike to Khamsum Yulley Namgyal Chorten",
          "Visit Punakha Dzong",
          "Walk across Punakha Suspension Bridge",
          "Optional farmhouse lunch & rural activities",
          "Optional Jiligang Day Hike (Punakha Dzong to Khamsum Chorten – full day)",
          "Overnight stay in Punakha"
        ]
      },
      {
        "title": "Day 04: Punakha – Paro",
        "activities": [
          "Drive from Punakha to Paro via Thimphu",
          "Optional stop in Thimphu for missed sightseeing",
          "Explore Paro Valley",
          "Visit Rinpung Dzong (Paro Dzong)",
          "Visit Drukgyal Dzong ruins",
          "Leisure time in Paro",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 05: Paro – Tiger’s Nest Hike",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Stop at cafeteria viewpoint",
          "Visit Kyichu Lhakhang",
          "Evening at leisure in Paro",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 06: Departure from Paro",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "slug": "6-day-thimphu-punakha-paro",
    "name": "6-Day Thimphu, Punakha & Paro Classic",
    "duration": "6 Days / 5 Nights",
    "route": "Paro • Thimphu • Punakha • Paro",
    "theme": "Classic Culture",
    "summary": "A comfortable classic itinerary with museums, markets, Punakha Dzong, and Tiger’s Nest.",
    "bestFor": "First-time Bhutan travelers",
    "image": {
      "src": "/National Memorial Chorten North Side facing south  DOT AA Original Bhutan Travels.jpg",
      "alt": "6-Day Thimphu, Punakha & Paro Classic image",
      "label": "6-Day Thimphu, Punakha & Paro Classic Image",
      "copyrightName": "Michael Chlebek / Amazing Aerial Agency"
    },
    "tags": [
      "Tiger’s Nest",
      "Punakha",
      "Thimphu",
      "Paro",
      "Archery"
    ],
    "days": [
      {
        "title": "Day 01: Arrival in Paro – Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "En route stop at Tachogang Lhakhang (optional)",
          "Visit Tashichho Dzong (time permitting)",
          "Evening leisure walk in Thimphu city (optional)",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "title": "Day 02: Thimphu Sightseeing",
        "activities": [
          "Visit School of Arts & Crafts",
          "Visit Folk Heritage Museum",
          "Visit National Textile Museum",
          "Visit Buddha Dordenma viewpoint",
          "Visit National Memorial Chorten",
          "Visit Weekend Market (Wed–Mon)",
          "Visit Changlimithang Archery Ground (if match available)",
          "Overnight stay in Thimphu"
        ]
      },
      {
        "title": "Day 03: Thimphu – Punakha",
        "activities": [
          "Drive to Punakha via Dochula Pass",
          "Stop at Dochula Pass (Himalayan views & 108 chortens)",
          "Visit Lamperi Botanical Garden (seasonal)",
          "Visit Punakha Dzong",
          "Visit Punakha Suspension Bridge",
          "Visit Sangchhen Dorji Lhuendrup Nunnery",
          "Overnight stay in Punakha (1,350 m)"
        ]
      },
      {
        "title": "Day 04: Punakha – Paro",
        "activities": [
          "Drive to Paro via Dochula Pass",
          "Visit Chimi Lhakhang (Fertility Temple)",
          "Visit Rinpung Dzong (Paro Dzong)",
          "Visit Ta Dzong – National Museum",
          "Experience traditional dress & archery activity",
          "Explore Paro town & handicraft shops",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "title": "Day 05: Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Visit Kyichu Lhakhang",
          "Optional hot stone bath & farmhouse dinner (extra cost)",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 06: Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "slug": "7-day-bhutan-valley-explorer",
    "name": "7-Day Bhutan Valley Explorer",
    "duration": "7 Days / 6 Nights",
    "route": "Paro • Thimphu • Punakha • Phobjikha • Paro",
    "theme": "Nature & Culture",
    "summary": "A rewarding route adding Phobjikha/Gangtey and black-necked crane landscapes.",
    "bestFor": "First-time Bhutan travelers",
    "image": {
      "src": "/Dochula by Marcus Westberg71.jpg",
      "alt": "7-Day Bhutan Valley Explorer image",
      "label": "7-Day Bhutan Valley Explorer Image",
      "copyrightName": "Carissa Nimah"
    },
    "tags": [
      "Tiger’s Nest",
      "Punakha",
      "Phobjikha",
      "Gangtey",
      "Thimphu"
    ],
    "days": [
      {
        "title": "Day 01: Arrival in Paro – Transfer to Thimphu (1.5 hrs)",
        "activities": [
          "Arrival at Paro International Airport",
          "Meet & greet by HBT representative with khaddar welcome",
          "Drive to Thimphu via Paro River and Chuzom junction",
          "Scenic drive through Bondey, Shaba, Isina villages",
          "En route stop at Tachogang Lhakhang (optional walk)",
          "Visit Tashichho Dzong (time permitting)",
          "Evening Thimphu city walk (optional)",
          "Overnight stay in Thimphu (2,400m)"
        ]
      },
      {
        "title": "Day 02: Thimphu Sightseeing",
        "activities": [
          "Visit Folk Heritage Museum",
          "Visit National Textile Museum",
          "Visit Buddha Dordenma viewpoint",
          "Visit National Memorial Chorten",
          "Visit Simtokha Dzong (oldest fortress)",
          "Visit Paper Factory (traditional handmade paper)",
          "Visit Centenary Farmers’ Market (Wed–Mon, closed Tuesday)",
          "Visit Changlimithang Archery Ground (live match if available)",
          "Overnight stay in Thimphu"
        ]
      },
      {
        "title": "Day 03: Thimphu – Punakha (3 hrs drive)",
        "activities": [
          "Drive via Dochula Pass (108 chortens & Himalayan views)",
          "Stop at Lamperi Botanical Garden (seasonal rhododendrons & birds)",
          "Visit Punakha Dzong (river confluence fortress)",
          "Visit Punakha Suspension Bridge",
          "Overnight stay in Punakha (1,350m)"
        ]
      },
      {
        "title": "Day 04: Punakha – Phobjikha (Gangtey)",
        "activities": [
          "Visit Chimi Lhakhang (fertility temple, village hike)",
          "Drive via Wangdue & scenic mountain landscapes",
          "Arrive Phobjikha Valley (black-necked crane region)",
          "Visit Gangtey Monastery (Gangtey Gompa)",
          "Walk Gangtey Nature Trail",
          "Visit Crane Information Center (RSPN)",
          "Farmhouse visit with traditional dinner",
          "Overnight stay in Phobjikha (2,900m)"
        ]
      },
      {
        "title": "Day 05: Phobjikha – Paro (5 hrs drive)",
        "activities": [
          "Scenic drive back via Pelela, Wangdue & Dochula Pass",
          "Visit Paro Dzong (Rinpung Dzong)",
          "Visit Ta Dzong – National Museum",
          "Traditional dress experience (Gho/Kira) & archery activity",
          "Explore Paro town & handicraft shops",
          "Overnight stay in Paro (2,200m)"
        ]
      },
      {
        "title": "Day 06: Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Visit Kyichu Lhakhang (one of Bhutan’s oldest temples)",
          "Optional hot stone bath & farmhouse dinner (extra cost)",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 07: Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan with memories of the Himalayas"
        ]
      }
    ]
  },
  {
    "slug": "8-day-gangtey-phobjikha",
    "name": "8-Day Gangtey & Phobjikha Journey",
    "duration": "8 Days / 7 Nights",
    "route": "Paro • Thimphu • Punakha • Gangtey • Paro",
    "theme": "Gangtey Focus",
    "summary": "An extended route with more time in Gangtey and Phobjikha Valley.",
    "bestFor": "First-time Bhutan travelers",
    "image": {
      "src": "/Phobjikha-valley-by-Alicia-Warner-33.jpg",
      "alt": "8-Day Gangtey & Phobjikha Journey image",
      "label": "8-Day Gangtey & Phobjikha Journey Image",
      "copyrightName": "Alicia Warner"
    },
    "tags": [
      "Tiger’s Nest",
      "Punakha",
      "Phobjikha",
      "Gangtey",
      "Thimphu"
    ],
    "days": [
      {
        "title": "Day 01: Arrive Paro – Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Meet & greet with guide and traditional khaddar welcome",
          "Drive to Thimphu (approx. 1.5 hrs)",
          "En route visit Takin viewpoint (Bhutan’s national animal)",
          "Check-in to hotel and leisure time",
          "Overnight stay in Thimphu"
        ]
      },
      {
        "title": "Day 02: Thimphu Sightseeing",
        "activities": [
          "Visit Folk Heritage Museum",
          "Visit National Textile Museum",
          "Visit Tashichho Dzong (main administrative fortress)",
          "Visit National Memorial Chorten",
          "Visit Paper Factory (traditional handmade paper)",
          "Visit Simtokha Dzong (oldest fortress in Bhutan)",
          "Visit Centenary Farmers’ Market (weekend market)",
          "Overnight stay in Thimphu"
        ]
      },
      {
        "title": "Day 03: Thimphu – Punakha",
        "activities": [
          "Drive to Punakha via Dochula Pass",
          "Stop at Dochula Pass (108 chortens & Himalayan views)",
          "Visit Punakha Dzong (river confluence fortress)",
          "Visit Khamsum Yulley Namgyal Chorten (scenic hike)",
          "Overnight stay in Punakha"
        ]
      },
      {
        "title": "Day 04: Punakha – Gangtey",
        "activities": [
          "Visit Chimi Lhakhang (fertility temple, village walk)",
          "Brief stop at Wangdue Phodrang town & Dzong view",
          "Drive to Gangtey / Phobjikha Valley",
          "Overnight stay in Gangtey"
        ]
      },
      {
        "title": "Day 05: Gangtey Sightseeing",
        "activities": [
          "Explore Phobjikha Valley (black-necked crane habitat)",
          "Visit Gangtey Monastery (17th century)",
          "Nature walk in Phobjikha valley",
          "Overnight stay in Gangtey"
        ]
      },
      {
        "title": "Day 06: Gangtey – Paro",
        "activities": [
          "Drive to Paro via scenic western & central Bhutan landscapes",
          "Check-in to hotel in Paro",
          "Leisure evening in Paro town (optional)",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 07: Paro Sightseeing – Tiger’s Nest Hike",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Cafeteria viewpoint stop (scenic break point)",
          "Visit Kyichu Lhakhang (oldest temple in Bhutan)",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 08: Departure from Paro",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan with memories of the Himalayas"
        ]
      }
    ]
  },
  {
    "slug": "8-day-punakha-phobjikha-depth",
    "name": "8-Day Punakha & Phobjikha In-Depth",
    "duration": "8 Days / 7 Nights",
    "route": "Paro • Thimphu • Punakha • Phobjikha • Paro",
    "theme": "In-Depth Western Bhutan",
    "summary": "A fuller route with additional Punakha sightseeing and a scenic Phobjikha extension.",
    "bestFor": "First-time Bhutan travelers",
    "image": {
      "src": "/Phobjikha-valley-by-Alicia-Warner-6.jpg",
      "alt": "8-Day Punakha & Phobjikha In-Depth image",
      "label": "8-Day Punakha & Phobjikha In-Depth Image",
      "copyrightName": "Alicia Warner"
    },
    "tags": [
      "Tiger’s Nest",
      "Punakha",
      "Phobjikha",
      "Gangtey",
      "Thimphu"
    ],
    "days": [
      {
        "title": "Day 01: Arrival in Paro – Transfer to Thimphu (1.5 hrs)",
        "activities": [
          "Arrival at Paro International Airport",
          "Meet & greet by HBT representative with khaddar welcome",
          "Drive to Thimphu via Paro River and Chuzom",
          "Scenic route through Bondey, Shaba, Isina villages",
          "En route stop at Tachogang Lhakhang (optional walk)",
          "Visit Tashichho Dzong (time permitting)",
          "Evening Thimphu city walk (optional)",
          "Overnight stay in Thimphu (2,400m)"
        ]
      },
      {
        "title": "Day 02: Thimphu Sightseeing",
        "activities": [
          "Visit School of Arts & Crafts",
          "Visit Folk Heritage Museum",
          "Visit National Textile Museum",
          "Visit Buddha Dordenma viewpoint",
          "Visit National Memorial Chorten",
          "Visit Simtokha Dzong (oldest fortress in Bhutan)",
          "Visit Centenary Farmers’ Market (Wed–Mon, closed Tuesday)",
          "Visit Changlimithang Archery Ground (live match if available)",
          "Overnight stay in Thimphu"
        ]
      },
      {
        "title": "Day 03: Thimphu – Punakha (3 hrs drive)",
        "activities": [
          "Drive via Dochula Pass (108 chortens & Himalayan views)",
          "Stop at Lamperi Botanical Garden (seasonal rhododendrons & birds)",
          "Visit Chimi Lhakhang (fertility temple, village hike)",
          "Visit Punakha Dzong (river confluence fortress)",
          "Overnight stay in Punakha (1,350m)"
        ]
      },
      {
        "title": "Day 04: Punakha Sightseeing",
        "activities": [
          "Hike to Khamsum Yulley Namgyal Chorten (45 mins uphill)",
          "Visit Punakha Suspension Bridge",
          "Visit Sangchhen Dorji Lhuendrup Nunnery",
          "Leisure time in Punakha Valley",
          "Overnight stay in Punakha"
        ]
      },
      {
        "title": "Day 05: Punakha – Phobjikha (3 hrs drive)",
        "activities": [
          "Scenic drive via Wangdue, Pelela Pass & forested landscapes",
          "Visit Gangtey Monastery (Gangtey Gompa)",
          "Walk Gangtey Nature Trail",
          "Visit Crane Information Center (RSPN)",
          "Farmhouse visit with local dinner experience",
          "Overnight stay in Phobjikha (2,900m)"
        ]
      },
      {
        "title": "Day 06: Phobjikha – Paro (5 hrs drive)",
        "activities": [
          "Scenic drive back via Wangdue, Dochula & Chuzom",
          "Visit Paro Dzong (Rinpung Dzong)",
          "Visit Ta Dzong – National Museum",
          "Traditional dress (Gho/Kira) & archery experience",
          "Explore Paro town & handicraft shops",
          "Overnight stay in Paro (2,200m)"
        ]
      },
      {
        "title": "Day 07: Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger’s Nest)",
          "Visit Kyichu Lhakhang (ancient sacred temple)",
          "Optional hot stone bath & farmhouse dinner (extra cost)",
          "Overnight stay in Paro"
        ]
      },
      {
        "title": "Day 08: Departure from Bhutan",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure with memories of Bhutan"
        ]
      }
    ]
  }
];
