import type { ImageAsset } from "../components/TourPagePrimitives";

export type FestivalTourDay = {
  day: string;
  title: string;
  activities: string[];
};

export type FestivalPackage = {
  title: string;
  duration: string;
  dates: string;
  coverage: string;
  bestFor: string;
  summary: string;
  festivals: string[];
  image: ImageAsset;
  days: FestivalTourDay[];
};

export const festivalPackages: FestivalPackage[] = [
  {
    "title": "5-Day Black Necked Crane Festival Tour",
    "duration": "5 Days / 4 Nights",
    "dates": "11 November 2026 festival period",
    "coverage": "Paro - Thimphu - Gangtey / Phobjikha - Paro",
    "bestFor": "Short conservation festival trip",
    "summary": "A compact Black Necked Crane Festival route through Thimphu, Phobjikha Valley, Gangtey Gonpa, and Paro.",
    "festivals": [
      "Black Necked Crane Festival",
      "Gangtey Gonpa",
      "Phobjikha Valley",
      "Conservation Festival"
    ],
    "image": {
      "src": "/Phobjikha-valley-by-Alicia-Warner-6.jpg",
      "alt": "5-Day Black Necked Crane Festival Tour image",
      "label": "5-Day Black Necked Crane Festival Tour Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Paro - Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge",
          "Visit Buddha Dordenma viewpoint",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "02",
        "title": "Thimphu - Drive to Gangtey / Phobjikha",
        "activities": [
          "Scenic drive to Phobjikha Valley via Dochula Pass & Wangdue",
          "Stop at Dochula Pass (108 chortens & Himalayan views)",
          "Visit Gangtey Monastery (Gangtey Gompa) if time permits",
          "Short nature walk in Phobjikha Valley",
          "Overnight stay in Gangtey / Phobjikha (2,900 m)"
        ]
      },
      {
        "day": "03",
        "title": "Black Necked Crane Festival",
        "activities": [
          "Full-day visit to Black Necked Crane Festival at Gangtey Gonpa",
          "Experience local cultural dances, crane-themed performances & conservation-focused community celebration",
          "Explore Phobjikha Valley (black-necked crane habitat)",
          "Overnight stay in Gangtey / Phobjikha (2,900 m)"
        ]
      },
      {
        "day": "04",
        "title": "Gangtey / Phobjikha - Drive to Paro",
        "activities": [
          "Scenic drive back to Paro via Wangdue, Dochula Pass & Chuzom",
          "Stop at Dochula Pass if weather is clear",
          "Leisure evening in Paro town",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "05",
        "title": "Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "title": "7-Day Black Necked Crane Festival Tour",
    "duration": "7 Days / 6 Nights",
    "dates": "11 November 2026 festival period",
    "coverage": "Paro - Thimphu - Punakha - Gangtey / Phobjikha - Paro",
    "bestFor": "Conservation festival with Punakha",
    "summary": "A richer Black Necked Crane Festival itinerary with Thimphu, Punakha, Phobjikha, Gangtey, Paro, and Tiger's Nest.",
    "festivals": [
      "Black Necked Crane Festival",
      "Punakha",
      "Gangtey",
      "Tiger's Nest"
    ],
    "image": {
      "src": "/Phobjikha-valley-by-Alicia-Warner-34.jpg",
      "alt": "7-Day Black Necked Crane Festival Tour image",
      "label": "7-Day Black Necked Crane Festival Tour Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Paro - Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge",
          "Visit Buddha Dordenma viewpoint",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "02",
        "title": "Thimphu Sightseeing - Drive to Punakha",
        "activities": [
          "Drive past National Memorial Chorten",
          "Explore Simply Bhutan or Folk Heritage Museum",
          "Scenic drive to Punakha via Dochula Pass",
          "Stop at Dochula Pass (108 chortens & Himalayan views)",
          "Visit Punakha Dzong (river confluence fortress)",
          "Visit Suspension Bridge(Longest in Bhutan)",
          "River Rafting in the Punakha River(Additional Cost)",
          "Overnight stay in Punakha (1,350 m)"
        ]
      },
      {
        "day": "03",
        "title": "Punakha - Drive to Gangtey / Phobjikha",
        "activities": [
          "Visit Chimi Lhakhang (Fertility Temple)",
          "Gentle village walk through Sopsokha / Metshina village",
          "Scenic drive to Phobjikha Valley via Wangdue",
          "Visit Gangtey Monastery (Gangtey Gompa)",
          "Walk Gangtey Nature Trail",
          "Overnight stay in Gangtey / Phobjikha (2,900 m)"
        ]
      },
      {
        "day": "04",
        "title": "Black Necked Crane Festival",
        "activities": [
          "Full-day visit to Black Necked Crane Festival at Gangtey Gonpa",
          "Experience cultural performances, local community gathering & crane conservation celebration",
          "Overnight stay in Gangtey / Phobjikha (2,900 m)"
        ]
      },
      {
        "day": "05",
        "title": "Gangtey / Phobjikha - Drive to Paro",
        "activities": [
          "Scenic drive back to Paro via Wangdue, Dochula Pass & Chuzom",
          "Stop at Dochula Pass (weather permitting)",
          "Leisure evening in Paro town",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "06",
        "title": "Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger's Nest)",
          "Visit Kyichu Lhakhang (one of Bhutan's oldest temples)",
          "Optional hot stone bath & farmhouse dinner (additional cost)",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "07",
        "title": "Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan with memories of the Himalayas"
        ]
      }
    ]
  },
  {
    "title": "15-Day Bumthang Festival Circuit",
    "duration": "15 Days / 14 Nights",
    "dates": "Bumthang festival dates to be reconfirmed",
    "coverage": "Paro - Thimphu - Punakha - Trongsa - Bumthang - Gangtey / Punakha - Paro",
    "bestFor": "In-depth central Bhutan festivals",
    "summary": "A comprehensive central Bhutan festival circuit built around Jakar Tshechu, Jambay Lhakhang Drup, Traakar Duchhoed, Bumthang cultural days, and western Bhutan highlights.",
    "festivals": [
      "Jakar Tshechu",
      "Jambay Lhakhang Drup",
      "Traakar Duchhoed",
      "Bumthang"
    ],
    "image": {
      "src": "/Marcus Westberg Bumthang 202318.jpg",
      "alt": "15-Day Bumthang Festival Circuit image",
      "label": "15-Day Bumthang Festival Circuit Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Paro - Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge",
          "Visit Buddha Dordenma viewpoint",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "02",
        "title": "Thimphu Sightseeing",
        "activities": [
          "Drive past National Memorial Chorten",
          "Explore Folk Heritage Museum (traditional Bhutanese lifestyle)",
          "Visit Buddha Dordenma (largest sitting Buddha Statue in the world)",
          "Visit Tashichho Dzong (main administrative fortress)",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "03",
        "title": "Thimphu - Drive to Punakha",
        "activities": [
          "Scenic drive to Punakha via Dochula Pass",
          "Stop at Dochula Pass (108 chortens & Himalayan views)",
          "Visit Punakha Dzong (river confluence fortress)",
          "Walk across Punakha Suspension Bridge",
          "River Rafting on the Punakha River.(Additional Cost)",
          "Overnight stay in Punakha (1,350 m)"
        ]
      },
      {
        "day": "04",
        "title": "Punakha - Drive to Trongsa",
        "activities": [
          "Visit Chimi Lhakhang (Fertility Temple)",
          "Gentle village walk through Sopsokha / Metshina village",
          "Scenic drive to Trongsa via central Bhutan landscapes",
          "Overnight stay in Trongsa (2,200 m)"
        ]
      },
      {
        "day": "05",
        "title": "Trongsa - Drive to Bumthang / Jakar Tshechu",
        "activities": [
          "Scenic drive to Bumthang via Yotongla Pass",
          "Attend final day of Jakar Tshechu if timing permits",
          "Evening leisure in Jakar town",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "06",
        "title": "Bumthang Cultural Valley",
        "activities": [
          "Visit Jakar Dzong (Bumthang valley fortress)",
          "Visit Kurjey Lhakhang (sacred Guru Rinpoche site)",
          "Visit Jambay Lhakhang (one of Bhutan's oldest temples)",
          "Visit Tamshing Lhakhang (historic temple of Pema Lingpa)",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "07",
        "title": "Bumthang Hidden Valley Day",
        "activities": [
          "Explore Tang Valley or Ura Valley",
          "Visit traditional villages and local homes",
          "Experience village life, local landscapes & cultural heritage",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "08",
        "title": "Bumthang Cultural Immersion",
        "activities": [
          "Slow cultural day in Bumthang Valley",
          "Visit local market and weaving areas",
          "Village walk with farmhouse experience",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "09",
        "title": "Bumthang Preparation Day",
        "activities": [
          "Visit nearby temples around Bumthang Valley",
          "Prepare for Jambay Lhakhang Drup festival experience",
          "Leisure time for photography and cultural exploration",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "10",
        "title": "Jambay Lhakhang Drup",
        "activities": [
          "Attend Jambay Lhakhang Drup festival",
          "Festival photography and cultural observation",
          "Experience sacred mask dances, rituals & community gathering",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "11",
        "title": "Jambay Lhakhang Drup & Traakar Duchhoed",
        "activities": [
          "Attend Jambay Lhakhang Drup festival",
          "Visit Traakar Duchhoed festival if schedule allows",
          "Experience overlapping Bumthang festival traditions",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "12",
        "title": "Bumthang Festival Day",
        "activities": [
          "Full-day festival experience in Bumthang",
          "Observe religious dances, local rituals & community celebrations",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "13",
        "title": "Final Festival Morning - Drive to Trongsa",
        "activities": [
          "Morning festival visit in Bumthang",
          "Scenic drive back to Trongsa after festival experience",
          "Overnight stay in Trongsa (2,200 m)"
        ]
      },
      {
        "day": "14",
        "title": "Trongsa - Drive to Gangtey / Punakha",
        "activities": [
          "Scenic drive west via Pelela Pass",
          "Optional Gangtey Valley stop if routing allows",
          "Overnight stay in Gangtey / Punakha"
        ]
      },
      {
        "day": "15",
        "title": "Gangtey / Punakha - Drive to Paro / Departure",
        "activities": [
          "Scenic drive to Paro via Dochula Pass & Chuzom",
          "Transfer to Paro International Airport subject to flight timing",
          "Optional Paro overnight extension for Tiger's Nest hike",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "title": "5-Day Chhukha Tshechu Land-Entry Festival Tour",
    "duration": "5 Days / 4 Nights",
    "dates": "19-21 October 2026 festival period",
    "coverage": "Phuntsholing - Chhukha - Thimphu - Paro / Phuntsholing",
    "bestFor": "Indian and regional guests",
    "summary": "A practical land-entry festival route for regional guests, combining Chhukha Tshechu with Thimphu and Paro cultural highlights.",
    "festivals": [
      "Chhukha Tshechu",
      "Land Entry",
      "Thimphu",
      "Paro"
    ],
    "image": {
      "src": "/ChhukhaTshechu.jpg",
      "alt": "5-Day Chhukha Tshechu Land-Entry Festival Tour image",
      "label": "5-Day Chhukha Tshechu Land-Entry Festival Tour Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Phuntsholing",
        "activities": [
          "Arrival in Phuntsholing",
          "Meet & greet with guide and driver",
          "Complete entry formalities if applicable",
          "Evening visit around Phuntsholing town",
          "Overnight stay in Phuntsholing (300 m)"
        ]
      },
      {
        "day": "02",
        "title": "Phuntsholing - Chhukha Tshechu - Drive to Thimphu",
        "activities": [
          "Scenic drive towards Chhukha",
          "Attend Chhukha Tshechu festival",
          "Experience local mask dances, rituals & community gathering",
          "Continue drive to Thimphu after the festival visit",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "03",
        "title": "Thimphu Sightseeing",
        "activities": [
          "Visit Buddha Dordenma viewpoint",
          "Drive past National Memorial Chorten",
          "Explore Folk Heritage Museum or Simply Bhutan.",
          "Visit Tashichho Dzong (evening visit)",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "04",
        "title": "Thimphu - Drive to Paro",
        "activities": [
          "Scenic drive to Paro via Chuzom",
          "Visit Rinpung Dzong (Paro Dzong)",
          "Visit Ta Dzong - National Museum",
          "Visit Kyichu Lhakhang (one of Bhutan's oldest temples)",
          "Visit Chelela Pass(3,988m)",
          "Outdoor cultural activities (traditional dress, archery, darts)",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "05",
        "title": "Departure from Paro / Phuntsholing",
        "activities": [
          "Breakfast at hotel",
          "Scenic drive back to Phuntsholing for land exit",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "title": "7-Day Chhukha Tshechu Festival Tour",
    "duration": "7 Days / 6 Nights",
    "dates": "19-21 October 2026 festival period",
    "coverage": "Phuntsholing - Chhukha - Thimphu - Paro - Phuntsholing",
    "bestFor": "Regional guests wanting Paro depth",
    "summary": "A longer Chhukha Tshechu land-entry route with time for Thimphu, Paro sightseeing, Tiger's Nest, farmhouse options, and Phuntsholing exit.",
    "festivals": [
      "Chhukha Tshechu",
      "Paro",
      "Tiger's Nest",
      "Phuntsholing"
    ],
    "image": {
      "src": "/ChhukhaTshechu.jpg",
      "alt": "7-Day Chhukha Tshechu Festival Tour image",
      "label": "7-Day Chhukha Tshechu Festival Tour Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Phuntsholing",
        "activities": [
          "Arrival in Phuntsholing",
          "Meet & greet with guide and driver",
          "Complete entry formalities if applicable",
          "Evening visit around Phuntsholing town",
          "Overnight stay in Phuntsholing (300 m)"
        ]
      },
      {
        "day": "02",
        "title": "Phuntsholing - Chhukha Tshechu - Drive to Thimphu",
        "activities": [
          "Scenic drive towards Chhukha",
          "Attend Chhukha Tshechu festival",
          "Experience local mask dances, rituals & community gathering",
          "Continue drive to Thimphu after the festival visit",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "03",
        "title": "Thimphu Sightseeing",
        "activities": [
          "Visit Buddha Dordenma viewpoint",
          "Drive past National Memorial Chorten",
          "Explore Folk Heritage Museum or Simply Bhutan",
          "Visit Tashichho Dzong (evening visit)",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "04",
        "title": "Thimphu - Drive to Paro",
        "activities": [
          "Scenic drive to Paro via Chuzom",
          "Visit Rinpung Dzong (Paro Dzong)",
          "Visit Ta Dzong - National Museum",
          "Visit Kyichu Lhakhang (one of Bhutan's oldest temples)",
          "Explore Chelela Pass(3988m)",
          "Free time in Paro town & handicraft shops",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "05",
        "title": "Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger's Nest)",
          "Visit Kyichu Lhakhang (one of Bhutan's oldest temples)",
          "Optional hot stone bath at farmhouse(Additional Cost)",
          "Cultural program at farmhouse(Additional Cost)",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "06",
        "title": "Paro - Drive to Phuntsholing",
        "activities": [
          "Scenic drive from Paro to Phuntsholing via Chuzom & Gedu",
          "Leisure evening in Phuntsholing town",
          "Overnight stay in Phuntsholing (300 m)"
        ]
      },
      {
        "day": "07",
        "title": "Departure from Phuntsholing",
        "activities": [
          "Breakfast at hotel",
          "Complete exit formalities if applicable",
          "Exit Bhutan via Phuntsholing"
        ]
      }
    ]
  },
  {
    "title": "4-Day Dechenphu Tshechu Short Festival Tour",
    "duration": "4 Days / 3 Nights",
    "dates": "21 October 2026 festival period",
    "coverage": "Paro - Thimphu - Paro",
    "bestFor": "Short-stay international guests",
    "summary": "A short Dechenphu Tshechu route with Thimphu cultural sightseeing, the local festival at Dechenphu Lhakhang, and a Paro finish.",
    "festivals": [
      "Dechenphu Tshechu",
      "Thimphu",
      "Paro",
      "Short Festival Tour"
    ],
    "image": {
      "src": "/DechenphuTshechu.jpg",
      "alt": "4-Day Dechenphu Tshechu Short Festival Tour image",
      "label": "4-Day Dechenphu Tshechu Short Festival Tour Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Paro - Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge",
          "Visit Buddha Dordenma viewpoint",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "02",
        "title": "Thimphu Cultural Sightseeing",
        "activities": [
          "Drive past National Memorial Chorten",
          "Explore Folk Heritage Museum or Simply Bhutan",
          "Visit National Textile Museum (weaving heritage & textiles)",
          "Visit Tashichho Dzong (evening visit)",
          "Outdoor cultural activities (traditional dress, archery, darts)",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "03",
        "title": "Dechenphu Tshechu - Drive to Paro",
        "activities": [
          "Morning visit to Dechenphu Tshechu at Dechenphu Lhakhang",
          "Experience local religious dances, rituals & community gathering",
          "After lunch, scenic drive to Paro",
          "Visit Kyichu Lhakhang or Rinpung Dzong.",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "04",
        "title": "Departure from Paro",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "title": "5-Day Dechenphu Tshechu with Tiger's Nest",
    "duration": "5 Days / 4 Nights",
    "dates": "21 October 2026 festival period",
    "coverage": "Paro - Thimphu - Paro",
    "bestFor": "Short cultural festival clients",
    "summary": "A compact Dechenphu Tshechu itinerary for guests who also want Paro, Tiger's Nest, and a classic cultural finish.",
    "festivals": [
      "Dechenphu Tshechu",
      "Tiger's Nest",
      "Thimphu",
      "Paro"
    ],
    "image": {
      "src": "/Paro Dzong  DOT AA Original Bhutan Travels.jpg",
      "alt": "5-Day Dechenphu Tshechu with Tiger's Nest image",
      "label": "5-Day Dechenphu Tshechu with Tiger's Nest Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Paro - Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge",
          "Visit Buddha Dordenma viewpoint",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "02",
        "title": "Thimphu Sightseeing",
        "activities": [
          "Drive past National Memorial Chorten",
          "Explore Folk Heritage Museum (traditional Bhutanese lifestyle)",
          "Visit National Textile Museum (weaving heritage & textiles)",
          "Visit traditional paper factory",
          "Visit Tashichho Dzong (evening visit)",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "03",
        "title": "Dechenphu Tshechu - Drive to Paro",
        "activities": [
          "Morning visit to Dechenphu Tshechu at Dechenphu Lhakhang",
          "Experience local religious dances, rituals & community gathering",
          "After lunch, scenic drive to Paro",
          "Visit Kyichu Lhakhang or Rinpung Dzong",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "04",
        "title": "Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger's Nest)",
          "Stop at cafeteria viewpoint",
          "Optional hot stone bath & farmhouse dinner (additional cost)",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "05",
        "title": "Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "title": "7-Day Jakar Tshechu Festival Tour with Domestic Flight",
    "duration": "7 Days / 6 Nights",
    "dates": "Jakar Tshechu dates to be reconfirmed",
    "coverage": "Paro - Thimphu - Bumthang - Paro",
    "bestFor": "Central Bhutan by domestic flight",
    "summary": "A flight-assisted Jakar Tshechu route that keeps the central Bhutan festival experience compact while including Paro and Tiger's Nest.",
    "festivals": [
      "Jakar Tshechu",
      "Bumthang",
      "Domestic Flight",
      "Tiger's Nest"
    ],
    "image": {
      "src": "/Marcus Westberg Bumthang 202318.jpg",
      "alt": "7-Day Jakar Tshechu Festival Tour with Domestic Flight image",
      "label": "7-Day Jakar Tshechu Festival Tour with Domestic Flight Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Paro - Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge (time permitting)",
          "Visit Buddha Dordenma viewpoint",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "02",
        "title": "Thimphu - Fly to Bumthang / Jakar Tshechu",
        "activities": [
          "Morning transfer for domestic flight to Bumthang (subject to schedule)",
          "Arrival in Bumthang and transfer to hotel",
          "Attend Jakar Tshechu if timing allows",
          "Visit Jakar Dzong area",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "03",
        "title": "Jakar Tshechu",
        "activities": [
          "Full-day visit to Jakar Tshechu festival",
          "Experience mask dances, rituals & local festival gathering",
          "Visit nearby temples if time permits",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "04",
        "title": "Bumthang Cultural Valley Tour",
        "activities": [
          "Morning festival visit at Jakar Tshechu",
          "Visit Kurjey Lhakhang (sacred Guru Rinpoche site)",
          "Visit Jambay Lhakhang (one of Bhutan's oldest temples)",
          "Visit Tamshing Lhakhang (historic temple of Pema Lingpa)",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "05",
        "title": "Bumthang - Fly to Paro",
        "activities": [
          "Morning festival visit if flight timing allows",
          "Domestic flight back to Paro (subject to schedule)",
          "Check-in at hotel in Paro",
          "Leisure evening in Paro town",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "06",
        "title": "Paro Sightseeing",
        "activities": [
          "Hike to Taktsang Monastery (Tiger's Nest)",
          "Visit Kyichu Lhakhang (one of Bhutan's oldest temples)",
          "Optional hot stone bath & farmhouse dinner (additional cost)",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "07",
        "title": "Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "title": "9-Day Jakar Tshechu Festival Tour via Trongsa",
    "duration": "9 Days / 8 Nights",
    "dates": "Jakar Tshechu dates to be reconfirmed",
    "coverage": "Paro - Thimphu - Punakha - Trongsa - Bumthang - Gangtey / Punakha - Paro",
    "bestFor": "Overland central Bhutan festival route",
    "summary": "An overland Jakar Tshechu journey through Punakha, Trongsa, Bumthang, and Paro, with an optional Tiger's Nest extension.",
    "festivals": [
      "Jakar Tshechu",
      "Trongsa",
      "Bumthang",
      "Overland Route"
    ],
    "image": {
      "src": "/By Marcus Westberg 14.jpg",
      "alt": "9-Day Jakar Tshechu Festival Tour via Trongsa image",
      "label": "9-Day Jakar Tshechu Festival Tour via Trongsa Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Paro - Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge (time permitting)",
          "Visit Buddha Dordenma viewpoint",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "02",
        "title": "Thimphu - Drive to Punakha",
        "activities": [
          "Drive past National Memorial Chorten",
          "Scenic drive to Punakha via Dochula Pass",
          "Stop at Dochula Pass (108 chortens & Himalayan views)",
          "Visit Punakha Dzong (river confluence fortress)",
          "Overnight stay in Punakha (1,350 m)"
        ]
      },
      {
        "day": "03",
        "title": "Punakha - Drive to Trongsa",
        "activities": [
          "Long scenic drive to Trongsa via Pelela Pass",
          "Stop at Pelela Pass for mountain views",
          "Visit Trongsa Dzong viewpoint if time permits",
          "Overnight stay in Trongsa (2,200 m)"
        ]
      },
      {
        "day": "04",
        "title": "Trongsa - Drive to Bumthang / Jakar Tshechu",
        "activities": [
          "Scenic drive to Bumthang via central Bhutan landscapes",
          "Attend Jakar Tshechu in the afternoon if timing allows",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "05",
        "title": "Jakar Tshechu",
        "activities": [
          "Full-day visit to Jakar Tshechu festival",
          "Experience mask dances, rituals & local festival gathering",
          "Visit local temples and Jakar town in the evening",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "06",
        "title": "Jakar Tshechu / Bumthang Cultural Tour",
        "activities": [
          "Morning festival visit at Jakar Tshechu",
          "Visit Kurjey Lhakhang, Jambay Lhakhang & Tamshing Lhakhang",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "07",
        "title": "Bumthang - Drive to Gangtey / Punakha",
        "activities": [
          "Scenic drive back west via central Bhutan landscapes",
          "Overnight stay in Gangtey / Punakha depending on routing and hotel availability"
        ]
      },
      {
        "day": "08",
        "title": "Gangtey / Punakha - Drive to Paro",
        "activities": [
          "Scenic drive to Paro via Dochula Pass & Chuzom",
          "Visit Rinpung Dzong (Paro Dzong) if time permits",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "09",
        "title": "Departure / Tiger's Nest Extension",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport for departure",
          "Optional extension for Taktsang Monastery (Tiger's Nest) hike",
          "Departure from Bhutan"
        ]
      }
    ]
  },
  {
    "title": "9-Day Jambay Lhakhang Drup Festival Tour",
    "duration": "9 Days / 8 Nights",
    "dates": "Jambay Lhakhang Drup dates to be reconfirmed",
    "coverage": "Paro - Thimphu - Trongsa - Bumthang - Punakha / Gangtey - Paro",
    "bestFor": "Bumthang festival immersion",
    "summary": "A focused Bumthang festival route for Jambay Lhakhang Drup and Traakar Duchhoed, with central Bhutan overland travel and Paro departure.",
    "festivals": [
      "Jambay Lhakhang Drup",
      "Traakar Duchhoed",
      "Bumthang",
      "Trongsa"
    ],
    "image": {
      "src": "/Marcus Westberg Bumthang 202318.jpg",
      "alt": "9-Day Jambay Lhakhang Drup Festival Tour image",
      "label": "9-Day Jambay Lhakhang Drup Festival Tour Image",
      "copyrightName": "Unseen Himalayas Bhutan"
    },
    "days": [
      {
        "day": "01",
        "title": "Arrival in Paro - Transfer to Thimphu",
        "activities": [
          "Arrival at Paro International Airport",
          "Traditional welcome with khaddar",
          "Scenic drive to Thimphu (approx. 1.5 hrs)",
          "Drive along Paro River via Chuzom",
          "En-route stop at Tachogang Lhakhang & suspension bridge (time permitting)",
          "Visit Buddha Dordenma viewpoint",
          "Leisure walk in Thimphu city & local markets",
          "Overnight stay in Thimphu (2,400 m)"
        ]
      },
      {
        "day": "02",
        "title": "Thimphu - Drive to Trongsa",
        "activities": [
          "Early scenic drive to Trongsa via Dochula Pass & Pelela Pass",
          "Scenic drive through central Bhutan landscapes",
          "Overnight stay in Trongsa (2,200 m)"
        ]
      },
      {
        "day": "03",
        "title": "Trongsa - Drive to Bumthang / Jambay Lhakhang Drup",
        "activities": [
          "Visit Trongsa Dzong viewpoint if time permits",
          "Scenic drive to Bumthang",
          "Attend opening day of Jambay Lhakhang Drup depending on arrival time",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "04",
        "title": "Jambay Lhakhang Drup & Traakar Duchhoed",
        "activities": [
          "Morning visit to Jambay Lhakhang Drup festival",
          "Afternoon visit to Traakar Duchhoed subject to timing and local schedule",
          "Experience overlapping Bumthang festival traditions",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "05",
        "title": "Bumthang Festival Day",
        "activities": [
          "Full-day festival experience in Bumthang",
          "Visit Kurjey Lhakhang or Tamshing Lhakhang if time allows",
          "Overnight stay in Bumthang (2,600 m)"
        ]
      },
      {
        "day": "06",
        "title": "Final Festival Morning - Drive to Trongsa",
        "activities": [
          "Morning festival visit in Bumthang",
          "After lunch, scenic drive to Trongsa",
          "Overnight stay in Trongsa (2,200 m)"
        ]
      },
      {
        "day": "07",
        "title": "Trongsa - Drive to Punakha / Gangtey",
        "activities": [
          "Scenic drive west via Pelela Pass",
          "Overnight stay in Punakha / Gangtey depending on routing and hotel availability"
        ]
      },
      {
        "day": "08",
        "title": "Punakha / Gangtey - Drive to Paro",
        "activities": [
          "Scenic drive to Paro via Dochula Pass & Chuzom",
          "Visit Rinpung Dzong (Paro Dzong) or Kyichu Lhakhang",
          "Overnight stay in Paro (2,200 m)"
        ]
      },
      {
        "day": "09",
        "title": "Departure",
        "activities": [
          "Breakfast at hotel",
          "Transfer to Paro International Airport",
          "Departure from Bhutan"
        ]
      }
    ]
  }
];

