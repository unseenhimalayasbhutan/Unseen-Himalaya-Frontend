import { itineraries, type ItineraryRoute } from "./tourItineraries";

type PhotographyItineraryUpdate = Omit<ItineraryRoute, "image" | "startingRate"> &
  Partial<Pick<ItineraryRoute, "image" | "startingRate">>;

export const photographyCollectionSubtitle =
  "Small-group and private Bhutan photography journeys shaped around the best available light, with local access, flexible pacing and responsible visual storytelling.";

export const photographyOperatingPrinciples = [
  {
    title: "Pace shaped around light",
    description:
      "Routes allow early starts and later finishes where useful, balanced with meals, road time, and rest.",
  },
  {
    title: "Respectful access",
    description:
      "Photography inside religious, administrative, community, and ceremony spaces is always subject to local rules and guide instructions.",
  },
  {
    title: "Responsible portraits",
    description:
      "Guests should ask before close portraits, avoid disturbing local activities, and follow guidance around sacred sites and wildlife.",
  },
  {
    title: "Weather-aware planning",
    description:
      "Sunrise, sunset, mountain visibility, festivals, wildlife, and site access depend on weather, season, opening hours, and permissions.",
  },
];

export const photographyStandardDisclaimer =
  "The itinerary may be reordered according to weather, seasonal light, road conditions, opening hours, local events, and access permissions. Sunrise, sunset, mountain views, festivals, wildlife, and specific site access cannot be guaranteed. Photography at religious, administrative, and community sites is subject to local rules and respectful conduct.";

const photographyItineraryUpdates: PhotographyItineraryUpdate[] = [
  {
    slug: "3-day-paro-thimphu-paro",
    name: "3-Day Paro & Thimphu Photography Essentials",
    duration: "3 Days / 2 Nights",
    tourCode: "UH-PT-001",
    route: "Paro • Thimphu • Paro",
    theme: "Short Photography Tour",
    summary:
      "A compact visual introduction to Bhutan, pairing Thimphu's cultural landmarks with the iconic Tiger's Nest hike in Paro.",
    bestFor: "Photographers and visual storytellers with limited time",
    tags: ["Photography", "Tiger's Nest", "Paro", "Thimphu"],
    days: [
      {
        title: "Day 01: Arrival in Paro - Transfer to Thimphu",
        activities: [
          "Arrival at Paro International Airport and traditional khaddar welcome.",
          "Light lunch before photographing the Paro River, valley scenes, and the drive toward Thimphu via Chuzom.",
          "Late-afternoon photography at Buddha Dordenma, timed where possible for soft valley light.",
          "Document daily life around the National Memorial Chorten.",
          "Photograph Tashichho Dzong from exterior viewpoints during golden or blue hour, subject to access rules.",
          "Visit Simply Bhutan or Folk Heritage Museum if time permits.",
          "Short street, market, or handicraft walk for everyday-life frames.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 02: Thimphu - Paro | Tiger's Nest",
        activities: [
          "Early breakfast and drive to the Tiger's Nest trailhead.",
          "Hike to Taktsang Monastery with stops for forest, prayer flags, cliff architecture, and viewpoint compositions.",
          "Final approach to the monastery on foot; access and photography are subject to site rules.",
          "Late lunch in Paro after the hike.",
          "Afternoon visit to Kyichu Lhakhang surroundings for sacred architecture and quiet valley detail shots.",
          "Optional hot stone bath or farmhouse dinner at additional cost.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 03: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Airport transfer with a short final Paro valley photography stop if flight timing allows.",
          "Departure from Bhutan.",
        ],
      },
    ],
  },
  {
    slug: "3-day-paro-paro",
    name: "3-Day Paro Valley Photography Escape",
    duration: "3 Days / 2 Nights",
    tourCode: "UH-PT-002",
    route: "Paro • Paro",
    theme: "Short Photography Tour",
    summary:
      "A no-rush Paro-based photography escape focused on valley landscapes, dzong viewpoints, rural scenes, and Tiger's Nest.",
    bestFor: "Travelers who want a slower short stay in one valley",
    tags: ["Photography", "Paro", "Tiger's Nest", "Rural Life"],
    days: [
      {
        title: "Day 01: Arrival in Paro - Valley Storytelling",
        activities: [
          "Arrival at Paro International Airport, traditional welcome, and hotel check-in.",
          "Lunch and gentle acclimatization before a Paro valley photography session.",
          "Photograph Rinpung Dzong from exterior river and bridge viewpoints.",
          "Visit Ta Dzong exterior and elevated valley viewpoints for wide frames.",
          "Capture rural Paro scenes such as farmhouses, fields, riverside life, and village lanes.",
          "Optional traditional dress, archery, or darts session when available.",
          "Golden-hour or blue-hour walk through Paro town.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 02: Tiger's Nest & Kyichu",
        activities: [
          "Early breakfast and hike to Taktsang Monastery.",
          "Pause for environmental frames along the forested trail, prayer flags, and main cliff viewpoint.",
          "Walk the final ascent to the monastery; photography access is subject to site rules.",
          "Lunch after the hike.",
          "Afternoon visit to Kyichu Lhakhang surroundings and nearby village scenes.",
          "Optional hot stone bath or farmhouse dinner at additional cost.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 03: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Transfer to Paro International Airport.",
          "If flight timing permits, include an early valley stop for final landscape frames.",
        ],
      },
    ],
  },
  {
    slug: "4-day-paro-punakha-paro",
    name: "4-Day Punakha & Paro Photography Journey",
    duration: "4 Days / 3 Nights",
    tourCode: "UH-PT-003",
    route: "Paro • Punakha • Paro",
    theme: "Photography Tour",
    summary:
      "A fast western Bhutan circuit linking Dochula, Punakha's river valley, and the Tiger's Nest hike.",
    bestFor: "Photographers wanting Punakha landscapes in a short trip",
    tags: ["Photography", "Punakha", "Dochula", "Tiger's Nest"],
    days: [
      {
        title: "Day 01: Arrival - Dochula - Punakha",
        activities: [
          "Arrival in Paro and traditional khaddar welcome.",
          "Drive toward Punakha with lunch en route.",
          "Photograph Dochula's chortens, forest atmosphere, and Himalayan panorama when visible.",
          "Descend through changing vegetation toward the warmer Punakha valley.",
          "Capture Sopsokha and Metshina village scenes, rice fields, and local life where appropriate.",
          "Evening Punakha viewpoint or riverside photography as light allows.",
          "Overnight stay in Punakha.",
        ],
      },
      {
        title: "Day 02: Punakha Dawn - Paro",
        activities: [
          "Early photography around Punakha Dzong exterior, the river confluence, and suspension bridge viewpoints.",
          "Breakfast at the hotel.",
          "Hike or walk toward Khamsum Yulley Namgyal Chorten for rice-field and valley perspectives.",
          "Lunch in Punakha.",
          "Additional riverside or village photography before the drive back to Paro.",
          "Evening at leisure in Paro.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 03: Tiger's Nest & Kyichu",
        activities: [
          "Early breakfast and hike to Taktsang Monastery.",
          "Photograph forest, prayer flags, cliffside architecture, and the main viewpoint along the trail.",
          "Final monastery access is on foot and subject to site rules.",
          "Lunch after the hike.",
          "Afternoon visit to Kyichu Lhakhang surroundings for sacred architecture and detail photography.",
          "Optional hot stone bath at additional cost.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 04: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Transfer to Paro International Airport.",
          "Departure from Bhutan.",
        ],
      },
    ],
  },
  {
    slug: "4-day-paro-thimphu-paro",
    name: "4-Day Thimphu & Paro Visual Storytelling Tour",
    duration: "4 Days / 3 Nights",
    tourCode: "UH-PT-004",
    route: "Paro • Thimphu • Paro",
    theme: "Visual Storytelling",
    summary:
      "A short visual storytelling route focused on Thimphu culture, craft, daily life, Paro heritage, and Tiger's Nest.",
    bestFor: "Photographers interested in people, craft, sacred sites, and classic views",
    tags: ["Photography", "Thimphu", "Paro", "Craft"],
    days: [
      {
        title: "Day 01: Arrival - Thimphu Blue Hour",
        activities: [
          "Arrival in Paro, traditional welcome, and transfer to Thimphu.",
          "Photograph river bends, prayer flags, and roadside valley scenes along the way.",
          "Visit Buddha Dordenma in late afternoon when timing allows.",
          "Exterior photography of Tashichho Dzong around golden or blue hour, subject to access.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 02: Thimphu Life & Craft - Paro",
        activities: [
          "Morning photography around the National Memorial Chorten and local daily-life scenes.",
          "Visit a craft, textile, or painting school if open, with photography subject to permission.",
          "Market, handicraft, or street walk for visual storytelling.",
          "Optional archery or darts stop if a local match is available.",
          "Drive to Paro in the afternoon.",
          "Golden-hour Paro town, riverside, or valley photography.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 03: Tiger's Nest & Sacred Paro",
        activities: [
          "Early breakfast and hike to Taktsang Monastery.",
          "Photograph forest atmosphere, prayer flags, cliff formations, and the monastery viewpoint.",
          "Lunch after the hike.",
          "Afternoon visit to Kyichu Lhakhang surroundings and rural Paro lanes.",
          "Optional hot stone bath or farmhouse dinner at additional cost.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 04: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Transfer to Paro International Airport.",
          "Departure from Bhutan.",
        ],
      },
    ],
  },
  {
    slug: "5-day-classic-western-bhutan",
    name: "5-Day Western Bhutan Photography Circuit",
    duration: "5 Days / 4 Nights",
    tourCode: "UH-PT-005",
    route: "Paro • Thimphu • Punakha • Paro",
    theme: "Photography Circuit",
    summary:
      "A balanced western Bhutan photography route through Thimphu culture, Dochula, Punakha landscapes, and Paro's sacred landmarks.",
    bestFor: "Photographers wanting a classic route with more breathing room",
    tags: ["Photography", "Thimphu", "Punakha", "Paro"],
    days: [
      {
        title: "Day 01: Arrival - Thimphu",
        activities: [
          "Arrival in Paro and transfer to Thimphu.",
          "Photograph Paro and Thimphu valley scenes during the drive.",
          "Visit Buddha Dordenma and National Memorial Chorten as timing allows.",
          "Exterior evening photography of Tashichho Dzong, subject to access and light.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 02: Thimphu - Dochula - Punakha",
        activities: [
          "Morning craft, market, or chorten photography in Thimphu.",
          "Drive across Dochula Pass for chorten, forest, and mountain-view photography when visible.",
          "Continue to Punakha through changing valley landscapes.",
          "Evening rural or riverside photography near Punakha.",
          "Overnight stay in Punakha.",
        ],
      },
      {
        title: "Day 03: Punakha Rural Life - Paro",
        activities: [
          "Early photography at Punakha Dzong exterior and the river confluence.",
          "Walk to Khamsum Yulley Namgyal Chorten or nearby rice-field viewpoints.",
          "Photograph Punakha Suspension Bridge and village life where appropriate.",
          "Drive back to Paro in the afternoon.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 04: Tiger's Nest & Kyichu",
        activities: [
          "Early hike to Taktsang Monastery with photography stops along the trail.",
          "Lunch after the hike.",
          "Visit Kyichu Lhakhang surroundings and nearby rural lanes.",
          "Optional hot stone bath or farmhouse dinner at additional cost.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 05: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Transfer to Paro International Airport.",
          "Departure from Bhutan.",
        ],
      },
    ],
  },
  {
    slug: "6-day-punakha-depth",
    name: "6-Day Punakha Valley Photography Journey",
    duration: "6 Days / 5 Nights",
    tourCode: "UH-PT-006",
    route: "Paro • Thimphu • Punakha • Paro",
    theme: "Photography Tour",
    summary:
      "A Punakha-focused photography journey with added time for valleys, dzong viewpoints, rural life, and Paro's Tiger's Nest.",
    bestFor: "Travelers who want Punakha with less rush",
    tags: ["Photography", "Punakha", "Rural Life", "Tiger's Nest"],
    days: [
      {
        title: "Day 01: Arrival - Thimphu",
        activities: [
          "Arrival in Paro and transfer to Thimphu.",
          "Photograph valley scenes, prayer flags, and roadside viewpoints en route.",
          "Late-afternoon Buddha Dordenma or National Memorial Chorten photography depending on timing.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 02: Thimphu - Punakha",
        activities: [
          "Morning Thimphu cultural or market photography.",
          "Drive to Punakha via Dochula Pass for chortens, forest, and mountain views when visible.",
          "Arrive in Punakha and photograph warm-valley rural scenes.",
          "Overnight stay in Punakha.",
        ],
      },
      {
        title: "Day 03: Punakha In Depth",
        activities: [
          "Early session at Punakha Dzong exterior, river confluence, and bridge viewpoints.",
          "Walk or hike toward Khamsum Yulley Namgyal Chorten for rice-field and valley perspectives.",
          "Photograph riverside life, suspension bridge views, and village lanes where appropriate.",
          "Optional slower sunset session around Punakha valley.",
          "Overnight stay in Punakha.",
        ],
      },
      {
        title: "Day 04: Punakha - Paro",
        activities: [
          "Flexible morning photography in Punakha based on light and local conditions.",
          "Drive back to Paro with stops at Dochula or rural viewpoints as weather permits.",
          "Evening Paro town or riverside photography.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 05: Tiger's Nest & Kyichu",
        activities: [
          "Early hike to Taktsang Monastery with stops for forest, prayer flags, cliffs, and monastery viewpoints.",
          "Lunch after the hike.",
          "Afternoon visit to Kyichu Lhakhang surroundings.",
          "Optional hot stone bath or farmhouse dinner at additional cost.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 06: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Transfer to Paro International Airport.",
          "Departure from Bhutan.",
        ],
      },
    ],
  },
  {
    slug: "6-day-thimphu-punakha-paro",
    name: "6-Day Thimphu, Punakha & Paro Photography Classic",
    duration: "6 Days / 5 Nights",
    tourCode: "UH-PT-007",
    route: "Paro • Thimphu • Punakha • Paro",
    theme: "Photography Tour",
    summary:
      "A classic six-day photography route combining Thimphu's culture, Punakha's landscapes, and Paro's sacred highlights.",
    bestFor: "Photographers seeking a balanced western Bhutan route",
    tags: ["Photography", "Thimphu", "Punakha", "Paro"],
    days: [
      {
        title: "Day 01: Arrival - Thimphu",
        activities: [
          "Arrival in Paro and transfer to Thimphu.",
          "Stop for river, bridge, and valley scenes where timing allows.",
          "Late-afternoon Buddha Dordenma or Tashichho Dzong exterior photography, subject to access.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 02: Thimphu Photography Day",
        activities: [
          "Morning daily-life photography around National Memorial Chorten.",
          "Visit a craft, textile, painting, or heritage site if open, with photography subject to permission.",
          "Market, handicraft, or street storytelling walk.",
          "Optional archery or traditional sports stop when available.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 03: Dochula - Punakha",
        activities: [
          "Drive to Punakha via Dochula Pass.",
          "Photograph chortens, forest, and Himalayan views when weather is clear.",
          "Descend to Punakha for warm-valley landscapes and village scenes.",
          "Overnight stay in Punakha.",
        ],
      },
      {
        title: "Day 04: Punakha Rural Landscapes - Paro",
        activities: [
          "Early Punakha Dzong exterior, river confluence, and suspension bridge photography.",
          "Walk through rice fields or village areas with guide support and respectful permission.",
          "Drive back to Paro in the afternoon.",
          "Evening Paro photography if time allows.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 05: Tiger's Nest & Kyichu",
        activities: [
          "Early hike to Taktsang Monastery.",
          "Photograph trail atmosphere, prayer flags, cliff formations, and the monastery viewpoint.",
          "Lunch after the hike.",
          "Visit Kyichu Lhakhang surroundings and nearby rural lanes.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 06: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Transfer to Paro International Airport.",
          "Departure from Bhutan.",
        ],
      },
    ],
  },
  {
    slug: "7-day-bhutan-valley-explorer",
    name: "7-Day Bhutan Valley Photography Explorer",
    duration: "7 Days / 6 Nights",
    tourCode: "UH-PT-008",
    route: "Paro • Thimphu • Punakha • Phobjikha • Paro",
    theme: "Photography Tour",
    summary:
      "A four-valley route for landscape, culture, rural life, and seasonal black-necked crane habitat in Phobjikha.",
    bestFor: "Photographers who want wider valley variety in one week",
    tags: ["Photography", "Phobjikha", "Punakha", "Tiger's Nest"],
    days: [
      {
        title: "Day 01: Arrival - Thimphu",
        activities: [
          "Arrival in Paro and transfer to Thimphu.",
          "Photograph valley scenes and roadside cultural details en route.",
          "Late-afternoon Buddha Dordenma, Memorial Chorten, or Tashichho Dzong exterior as timing allows.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 02: Thimphu - Punakha",
        activities: [
          "Morning cultural or craft photography in Thimphu.",
          "Drive to Punakha via Dochula Pass.",
          "Photograph chortens, forest, and mountain views when visible.",
          "Evening rural or riverside photography in Punakha.",
          "Overnight stay in Punakha.",
        ],
      },
      {
        title: "Day 03: Punakha - Phobjikha",
        activities: [
          "Early Punakha Dzong exterior and river-confluence photography.",
          "Drive toward Phobjikha through forested hills and village landscapes.",
          "Arrive in the glacial valley for wide landscape and settlement frames.",
          "Overnight stay in Phobjikha.",
        ],
      },
      {
        title: "Day 04: Phobjikha Dawn - Paro",
        activities: [
          "Dawn photography in Phobjikha valley, subject to weather and local conditions.",
          "Visit Gangtey Monastery exterior and nearby viewpoints.",
          "Seasonal black-necked crane habitat photography from appropriate distances and approved areas.",
          "Drive back toward Paro with rest and landscape stops.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 05: Paro Heritage & Rural Life",
        activities: [
          "Photograph Rinpung Dzong exterior, Ta Dzong exterior viewpoints, and Paro valley compositions.",
          "Rural Paro walk for farmhouses, fields, and everyday-life details where appropriate.",
          "Optional traditional dress, archery, or darts session when available.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 06: Tiger's Nest",
        activities: [
          "Early hike to Taktsang Monastery.",
          "Photograph forest, prayer flags, cliffside monastery views, and the main viewpoint.",
          "Lunch after the hike.",
          "Afternoon at leisure or optional hot stone bath at additional cost.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 07: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Transfer to Paro International Airport.",
          "Departure from Bhutan.",
        ],
      },
    ],
  },
  {
    slug: "8-day-gangtey-phobjikha",
    name: "8-Day Gangtey & Phobjikha Photography Journey",
    duration: "8 Days / 7 Nights",
    tourCode: "UH-PT-009",
    route: "Paro • Thimphu • Punakha • Gangtey • Paro",
    theme: "Highland Photography",
    summary:
      "A slower highland photography journey with two nights in Gangtey and time for Phobjikha valley light, culture, and landscapes.",
    bestFor: "Photographers who want highland atmosphere and slower field time",
    tags: ["Photography", "Gangtey", "Phobjikha", "Highland"],
    days: [
      {
        title: "Day 01: Arrival - Thimphu",
        activities: [
          "Arrival in Paro and transfer to Thimphu.",
          "Photography stops along the valley road as timing allows.",
          "Late-afternoon Thimphu viewpoint, chorten, or dzong exterior photography.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 02: Thimphu Visual Culture",
        activities: [
          "Photograph morning life around National Memorial Chorten.",
          "Visit cultural, craft, textile, or heritage sites subject to opening hours and photography permission.",
          "Market or handicraft walk for environmental portraits and detail frames.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 03: Thimphu - Punakha",
        activities: [
          "Drive over Dochula Pass for chorten, forest, and mountain-view photography when visible.",
          "Continue to Punakha through warmer valleys.",
          "Evening rural or riverside photography in Punakha.",
          "Overnight stay in Punakha.",
        ],
      },
      {
        title: "Day 04: Punakha - Gangtey",
        activities: [
          "Early Punakha Dzong exterior, river confluence, and suspension bridge photography.",
          "Drive toward Gangtey and Phobjikha through changing forest and mountain landscapes.",
          "Arrive for late-afternoon highland valley photography.",
          "Overnight stay in Gangtey or Phobjikha.",
        ],
      },
      {
        title: "Day 05: Phobjikha Photography Day",
        activities: [
          "Dawn landscape photography in Phobjikha valley, subject to weather.",
          "Visit Gangtey Monastery exterior and surrounding viewpoints.",
          "Walk through approved valley areas for rural life, forest edge, and wide landscape frames.",
          "Seasonal black-necked crane habitat photography from respectful distances.",
          "Overnight stay in Gangtey or Phobjikha.",
        ],
      },
      {
        title: "Day 06: Gangtey - Paro",
        activities: [
          "Flexible morning photography based on light and valley conditions.",
          "Drive back to Paro with landscape and rest stops en route.",
          "Evening Paro town or riverside photography if timing allows.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 07: Tiger's Nest & Kyichu",
        activities: [
          "Early hike to Taktsang Monastery.",
          "Photograph trail atmosphere, cliff architecture, prayer flags, and the main viewpoint.",
          "Lunch after the hike.",
          "Visit Kyichu Lhakhang surroundings or nearby rural lanes.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 08: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Transfer to Paro International Airport.",
          "Departure from Bhutan.",
        ],
      },
    ],
  },
  {
    slug: "8-day-punakha-phobjikha-depth",
    name: "8-Day Punakha & Phobjikha Photography In-Depth",
    duration: "8 Days / 7 Nights",
    tourCode: "UH-PT-010",
    route: "Paro • Thimphu • Punakha • Phobjikha • Paro",
    theme: "In-Depth Photography",
    summary:
      "An in-depth western and central valley photography journey with extra time in Punakha and Phobjikha before returning to Paro.",
    bestFor: "Photographers wanting slower rhythm, rural landscapes, and highland valley time",
    tags: ["Photography", "Punakha", "Phobjikha", "In-Depth"],
    days: [
      {
        title: "Day 01: Arrival - Thimphu",
        activities: [
          "Arrival in Paro and transfer to Thimphu.",
          "Photograph roadside valley scenes and cultural details during the drive.",
          "Late-afternoon Buddha Dordenma, Memorial Chorten, or dzong exterior photography as timing allows.",
          "Overnight stay in Thimphu.",
        ],
      },
      {
        title: "Day 02: Thimphu - Punakha",
        activities: [
          "Morning Thimphu cultural, craft, market, or chorten photography.",
          "Drive via Dochula Pass for chorten, forest, and mountain-view frames when visible.",
          "Descend to Punakha and photograph warmer valley landscapes.",
          "Overnight stay in Punakha.",
        ],
      },
      {
        title: "Day 03: Punakha Photography Day",
        activities: [
          "Early Punakha Dzong exterior, river confluence, and bridge photography.",
          "Walk or hike toward Khamsum Yulley Namgyal Chorten for valley and rice-field perspectives.",
          "Photograph village life, farm scenes, and suspension bridge views with respectful permission.",
          "Optional late-afternoon or sunset session in Punakha valley.",
          "Overnight stay in Punakha.",
        ],
      },
      {
        title: "Day 04: Punakha - Phobjikha",
        activities: [
          "Flexible morning photography in Punakha based on light and conditions.",
          "Drive toward Phobjikha through forested hills and village viewpoints.",
          "Arrive for highland valley photography in late afternoon.",
          "Overnight stay in Phobjikha.",
        ],
      },
      {
        title: "Day 05: Phobjikha - Paro",
        activities: [
          "Dawn photography in Phobjikha valley, subject to weather.",
          "Visit Gangtey Monastery exterior and approved valley viewpoints.",
          "Seasonal black-necked crane habitat photography from appropriate distances.",
          "Drive back toward Paro with landscape stops en route.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 06: Paro Heritage & Valley Light",
        activities: [
          "Photograph Rinpung Dzong exterior, Ta Dzong exterior viewpoints, bridges, and Paro valley compositions.",
          "Rural Paro walk for farmhouses, fields, and everyday-life details where appropriate.",
          "Optional traditional dress, archery, darts, or farmhouse experience when available.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 07: Tiger's Nest",
        activities: [
          "Early hike to Taktsang Monastery.",
          "Photograph forest trail atmosphere, prayer flags, cliff formations, and the monastery viewpoint.",
          "Lunch after the hike.",
          "Afternoon at leisure or optional hot stone bath at additional cost.",
          "Overnight stay in Paro.",
        ],
      },
      {
        title: "Day 08: Departure",
        activities: [
          "Breakfast at the hotel.",
          "Transfer to Paro International Airport.",
          "Departure from Bhutan.",
        ],
      },
    ],
  },
];

const baseRoutesBySlug = new Map(itineraries.map((route) => [route.slug, route]));

export const photographyItineraries: ItineraryRoute[] = photographyItineraryUpdates.map(
  (update) => {
    const baseRoute = baseRoutesBySlug.get(update.slug);

    if (!baseRoute) {
      throw new Error(`Missing base itinerary for photography route ${update.slug}`);
    }

    return {
      ...baseRoute,
      ...update,
      image: update.image || baseRoute.image,
      startingRate: update.startingRate ?? baseRoute.startingRate,
    };
  }
);
