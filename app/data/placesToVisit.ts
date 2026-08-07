export type DestinationAttraction = {
  title: string;
  tags: string[];
  time: string;
  level: string;
  priority: string;
  location: string;
  summary: string;
  note?: string;
  image?: string;
  alt?: string;
};

type DestinationFact = {
  label: string;
  value: string;
};

type DestinationEvent = {
  name: string;
  date: string;
  note: string;
};

type DestinationFaq = {
  question: string;
  answer: string;
};

export type DestinationChapter = {
  id: string;
  name: string;
  shortName: string;
  kicker: string;
  intro: string;
  bestFor: string;
  heroImage: string;
  heroAlt: string;
  facts: DestinationFact[];
  attractions: DestinationAttraction[];
  stayPlanning: string[];
  seasonality: string;
  events: DestinationEvent[];
  faqs: DestinationFaq[];
};

const thimphuBase =
  "/Thimphu_2026_Web_Optimized_Images/Thimphu_2026_Website_Photo_Pack/Thimphu";
const paroBase = "/Paro_2026_Web_Optimized_Images/Paro";
const punakhaBase = "/Punakha_Website_Photos_2026";
const haaBase = "/Haa_2026_Web_Optimized_Images";
const phobjikhaBase =
  "/Wangdue_Gangtey_Phobjikha_2026_Web_Optimized_Images/Web_Optimized/Gangtey_Phobjikha";
const wangdueBase =
  "/Wangdue_Gangtey_Phobjikha_2026_Web_Optimized_Images/Web_Optimized/Wangdue_Phodrang";

export const globalVisitorNotes = [
  {
    title: "Certified guide requirement",
    text:
      "Bhutan's Department of Tourism states that visitors are required to be accompanied by a certified guide; guides are also required for monument and dzong entry.",
  },
  {
    title: "Fees and opening hours",
    text:
      "Some monuments charge admission and others do not. Site schedules, religious events and official functions take priority, so fees and hours should remain editable and be verified before each season.",
  },
  {
    title: "Religious etiquette",
    text:
      "Smart clothing covering shoulders and knees is appropriate. Visitors should not touch sacred objects or photograph people without permission.",
  },
  {
    title: "Hikes, treks and photography",
    text:
      "All treks require accredited guiding support. Day hikes should be adjusted for weather, altitude and trail conditions. Drone use requires advance permission, and interior photography may be restricted.",
  },
];

export const destinationChapters: DestinationChapter[] = [
  {
    id: "thimphu",
    name: "Thimphu",
    shortName: "Thimphu",
    kicker:
      "Bhutan's capital: living culture, sacred landmarks, art and accessible mountain hikes",
    intro:
      "Thimphu is Bhutan's political and cultural capital, but it remains unusually intimate for a national capital. Government offices, monasteries, markets, museums, art schools and forest trails occupy the same narrow valley. The destination is best understood through living Buddhist practice, national institutions, traditional crafts, contemporary city life and immediate access to the surrounding mountains.",
    bestFor: "Culture, art, crafts, local life and short hikes",
    heroImage: `${thimphuBase}/19_Thimphu_City_Panorama.jpg`,
    heroAlt: "Thimphu city panorama from the surrounding hills",
    facts: [
      { label: "Ideal stay", value: "2-3 nights" },
      { label: "Best for", value: "Culture, art, crafts, local life and short hikes" },
      { label: "Character", value: "Urban Bhutan with immediate access to nature" },
      { label: "Suggested pace", value: "3-4 major sites per day or one hike plus city time" },
      { label: "Altitude", value: "Central Thimphu is around 2,300 m; hikes rise much higher" },
    ],
    attractions: [
      {
        title: "Buddha Dordenma & Kuenselphodrang",
        tags: ["Landmark", "Spiritual", "Viewpoint"],
        time: "45-90 min",
        level: "Easy",
        priority: "Must Visit",
        location: "Kuenselphodrang, Thimphu",
        summary:
          "The monumental 54-metre Buddha Dordenma overlooks Thimphu from Kuenselphodrang Nature Park. The statue contains more than 125,000 smaller Buddha images and combines a major sacred site with one of the capital's broadest valley panoramas.",
        note: "Morning or late afternoon is especially attractive for photography; keep prayer areas quiet.",
        image: `${thimphuBase}/01_Buddha_Dordenma.jpg`,
      },
      {
        title: "Tashichho Dzong",
        tags: ["Dzong", "Architecture", "Government", "Religion"],
        time: "45-75 min",
        level: "Easy",
        priority: "Must Visit",
        location: "Thimphu",
        summary:
          "Thimphu's great riverside fortress houses important government offices and major monastic institutions. Its huge white walls, golden roofs, ceremonial courtyards and painted timberwork make it one of the capital's defining architectural experiences.",
        note: "Visitor access can change during official functions, security restrictions and religious events.",
        image: `${thimphuBase}/02_Tashichho_Dzong.jpg`,
      },
      {
        title: "National Memorial Chorten",
        tags: ["Spiritual", "Local Life"],
        time: "30-45 min",
        level: "Easy",
        priority: "Must Visit",
        location: "Central Thimphu",
        summary:
          "Built in 1974 in memory of Bhutan's Third King, the chorten is one of the best places to observe Buddhism as part of everyday urban life. Local residents circumambulate, spin prayer wheels and make offerings throughout the day.",
        note: "Walk clockwise and follow local guidance around sacred spaces.",
        image: `${thimphuBase}/03_National_Memorial_Chorten.jpg`,
      },
      {
        title: "Motithang Takin Preserve",
        tags: ["Wildlife", "Nature", "Family"],
        time: "30-60 min",
        level: "Easy",
        priority: "Highly Recommended",
        location: "Motithang, Thimphu",
        summary:
          "A forested preserve above the city where visitors can see the takin, Bhutan's unusual national animal, in a semi-natural hillside setting. It works particularly well for families and travellers interested in wildlife.",
        note: "Animal visibility varies; never promise staged sightings.",
        image: `${thimphuBase}/04_Motithang_Takin_Preserve.jpg`,
      },
      {
        title: "Changangkha Lhakhang",
        tags: ["Temple", "Spiritual", "Viewpoint"],
        time: "30-45 min",
        level: "Easy",
        priority: "Highly Recommended",
        location: "Ridge above Thimphu",
        summary:
          "An old temple on a ridge above central Thimphu, traditionally associated with blessings and auspicious names for newborn children. The location also provides attractive views across the city.",
        note: "This is an active temple; ask before photographing worshippers.",
      },
      {
        title: "Simtokha Dzong",
        tags: ["Dzong", "History", "Architecture"],
        time: "30-45 min",
        level: "Easy",
        priority: "Highly Recommended",
        location: "South of Thimphu",
        summary:
          "Dating to 1629, Simtokha is regarded as Bhutan's oldest surviving dzong and is closely associated with Zhabdrung Ngawang Namgyal. It is useful for visitors who want deeper context before seeing larger fortress-monasteries elsewhere.",
        note: "Interior access depends on institutional activity.",
        image: `${thimphuBase}/06_Simtokha_Dzong.jpg`,
      },
      {
        title: "Royal Textile Academy / National Textile Museum",
        tags: ["Museum", "Textiles", "Art"],
        time: "45-90 min",
        level: "Easy",
        priority: "Culture Essential",
        location: "Thimphu",
        summary:
          "A strong introduction to Bhutan's sophisticated weaving traditions, ceremonial textiles, regional techniques and the craftsmanship behind the gho and kira.",
        note: "Exhibitions and operating arrangements can change.",
        image: `${thimphuBase}/07_Royal_Textile_Academy.jpg`,
      },
      {
        title: "Folk Heritage Museum",
        tags: ["Museum", "Traditional Life"],
        time: "45-60 min",
        level: "Easy",
        priority: "Recommended",
        location: "Thimphu",
        summary:
          "A restored traditional-house museum interpreting domestic architecture, household tools, agriculture, foodways and rural life. It helps urban-based visitors understand the context behind Bhutanese village culture.",
      },
      {
        title: "Bhutan Postal Museum & General Post Office",
        tags: ["Museum", "Design", "Souvenir"],
        time: "30-60 min",
        level: "Easy",
        priority: "Recommended",
        location: "Thimphu",
        summary:
          "An unusual museum exploring Bhutan's postal history and inventive stamp designs. Personalised photo-stamp services are often available and make this one of Thimphu's most distinctive souvenir experiences.",
        note: "Check museum hours and service-counter hours separately.",
      },
      {
        title: "Jungshi Handmade Paper Factory",
        tags: ["Craft", "Workshop", "Shopping"],
        time: "30-45 min",
        level: "Easy",
        priority: "Recommended",
        location: "Thimphu",
        summary:
          "See traditional Deh-sho paper produced from plant fibres and browse locally made notebooks, cards and decorative paper. This works well as a living-craft stop rather than a conventional museum.",
        image: `${thimphuBase}/08_Jungshi_Handmade_Paper_Factory.jpg`,
      },
      {
        title: "National Institute for Zorig Chusum",
        tags: ["Education", "Traditional Arts"],
        time: "45-60 min",
        level: "Easy",
        priority: "Special Interest",
        location: "Thimphu",
        summary:
          "A working institute where students train in Bhutan's traditional arts including painting, carving, sculpture, embroidery, tailoring and weaving.",
        note: "Do not advertise guaranteed classroom access; it remains a working educational institution.",
        image: "/zorig chusum 4.jpg",
      },
      {
        title: "Choki Traditional Art School, Kabesa",
        tags: ["Education", "Community", "Craft"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Special Interest",
        location: "Kabesa, north of Thimphu",
        summary:
          "A community-oriented art school north of the city where traditional craft education can be experienced with advance arrangement.",
        note: "Advance notice is recommended and visits follow the academic calendar.",
      },
      {
        title: "VAST Bhutan / Contemporary Art Spaces",
        tags: ["Contemporary Art", "Gallery"],
        time: "30-60 min",
        level: "Easy",
        priority: "Special Interest",
        location: "Thimphu",
        summary:
          "A useful counterpoint to heritage sightseeing, showing how Bhutanese artists engage with modern identity, social change and traditional visual language.",
      },
      {
        title: "National Library and Archives of Bhutan",
        tags: ["Library", "Manuscripts", "History"],
        time: "30-60 min",
        level: "Easy",
        priority: "Special Interest",
        location: "Thimphu",
        summary:
          "A national repository for Buddhist texts, manuscripts, woodblock traditions, books, photographs and Bhutan's documentary heritage.",
        image: `${thimphuBase}/14_National_Library_of_Bhutan.jpg`,
      },
      {
        title: "Simply Bhutan",
        tags: ["Interactive Culture", "Family"],
        time: "60-90 min",
        level: "Easy",
        priority: "Optional",
        location: "Thimphu",
        summary:
          "A curated visitor experience introducing architecture, archery, food, crafts and cultural traditions in an accessible format.",
        note: "Describe it as an interactive cultural attraction, not an untouched historic village.",
        image: `${thimphuBase}/16_Simply_Bhutan_Unsplash.jpg`,
      },
      {
        title: "Clock Tower Square",
        tags: ["City Life", "Cafes", "Walking"],
        time: "30-120 min",
        level: "Easy",
        priority: "Recommended",
        location: "Central Thimphu",
        summary:
          "A central pedestrian square surrounded by cafes, shops, restaurants and everyday city life. It is particularly useful for free time in the late afternoon or evening.",
        image: `${thimphuBase}/18_Clock_Tower_Square.jpg`,
      },
      {
        title: "Authentic Bhutanese Craft Bazaar",
        tags: ["Shopping", "Handicrafts"],
        time: "30-60 min",
        level: "Easy",
        priority: "Recommended",
        location: "Thimphu",
        summary:
          "A long row of traditional-style stalls selling textiles, wooden crafts, jewellery, artwork and souvenirs.",
        note: "Encourage visitors to ask where products were made; not every low-cost souvenir is locally produced.",
        image: `${thimphuBase}/13_Authentic_Bhutanese_Craft_Bazaar.jpg`,
      },
      {
        title: "Centenary Farmers' Market & Kaja Throm",
        tags: ["Market", "Food", "Local Life"],
        time: "45-90 min",
        level: "Easy",
        priority: "Recommended",
        location: "Thimphu",
        summary:
          "A lively riverside market area for vegetables, chillies, cheese, grains, fruit and other ingredients used in Bhutanese cooking.",
        note: "Activity varies by day and season; ask before photographing individual vendors.",
        image: `${thimphuBase}/09_Centenary_Farmers_Market.jpg`,
      },
      {
        title: "Changlimithang Stadium & Archery Ground",
        tags: ["Sport", "Local Culture"],
        time: "30-90 min",
        level: "Easy",
        priority: "When Active",
        location: "Thimphu",
        summary:
          "A chance to see Bhutan's national sport in a real competition or practice environment when archery is taking place.",
        note: "Never promise a match and keep visitors well outside shooting lanes.",
        image: `${thimphuBase}/10_Changlimithang_Stadium.jpg`,
      },
      {
        title: "Changyul Park",
        tags: ["Park", "Riverside", "Family"],
        time: "30-60 min",
        level: "Easy",
        priority: "Optional",
        location: "Thimphu",
        summary:
          "A relaxed riverside green space for walking, family time or a break between structured sightseeing stops.",
      },
      {
        title: "Pangri Zampa Monastery",
        tags: ["Monastery", "Astrology", "History"],
        time: "45-60 min",
        level: "Easy",
        priority: "Hidden Gem",
        location: "Near Thimphu",
        summary:
          "A quieter monastic complex associated with Bhutanese astrology, calendar traditions and religious scholarship.",
        note: "Access should be arranged around institutional activity.",
      },
      {
        title: "Zilukha Nunnery / Drubthob Goemba",
        tags: ["Nunnery", "Spiritual"],
        time: "30-60 min",
        level: "Easy",
        priority: "Hidden Gem",
        location: "Above Thimphu",
        summary:
          "An active nunnery above the city offering a respectful introduction to women's monastic life.",
        note: "Do not photograph residents or prayer sessions without permission.",
      },
      {
        title: "Dechen Phodrang Monastery",
        tags: ["Monastic School", "History"],
        time: "30-60 min",
        level: "Easy",
        priority: "Special Interest",
        location: "North of Thimphu",
        summary:
          "A historic monastic school north of Thimphu, best suited to visitors interested in Buddhist education and religious institutions.",
        note: "Do not promise classroom access or interaction with students.",
        image: `${thimphuBase}/11_Dechen_Phodrang_Monastery.jpg`,
      },
      {
        title: "Sangaygang to Wangditse Hike",
        tags: ["Hike", "Forest", "Monastery"],
        time: "2-4 hrs",
        level: "Easy-Moderate",
        priority: "Recommended Hike",
        location: "Above Thimphu",
        summary:
          "A convenient ridge walk above Thimphu through forest to Wangditse Lhakhang, with views toward the valley and Tashichho Dzong.",
        image: "/Druk-Wangditse-Lhakhang.jpg",
      },
      {
        title: "Changangkha to Buddha Dordenma Trail",
        tags: ["Hike", "City Views"],
        time: "1.5-3 hrs",
        level: "Easy-Moderate",
        priority: "Recommended Hike",
        location: "Thimphu Valley",
        summary:
          "A short cross-valley trail that turns the Buddha Dordenma visit into a walking experience rather than a simple drive-up stop.",
      },
      {
        title: "Tango Monastery Hike",
        tags: ["Hike", "Monastery", "Forest"],
        time: "3-5 hrs",
        level: "Moderate",
        priority: "Highly Recommended Hike",
        location: "North of Thimphu",
        summary:
          "A steady forest climb to one of the important monastic centres north of Thimphu, combining exercise, nature and religious atmosphere.",
        image: `${thimphuBase}/12_Tango_Monastery.jpg`,
      },
      {
        title: "Cheri / Chagri Monastery Hike",
        tags: ["Hike", "Historic Monastery", "Nature"],
        time: "3-5 hrs",
        level: "Moderate",
        priority: "Highly Recommended Hike",
        location: "Dodena, Thimphu",
        summary:
          "A rewarding climb near Dodena to a monastery established in the early 17th century by Zhabdrung Ngawang Namgyal.",
        image: `${thimphuBase}/17_Cheri_Chagri_Monastery.jpg`,
      },
      {
        title: "Pumola Hike",
        tags: ["Hike", "Hidden Gem", "Spiritual"],
        time: "3-4 hrs",
        level: "Moderate",
        priority: "Hidden Gem",
        location: "Above Thimphu",
        summary:
          "A quieter forest hike promoted locally as an off-the-beaten-path option above the capital.",
      },
      {
        title: "Phajoding Monastery Hike",
        tags: ["Hike", "High Altitude", "Monastery"],
        time: "6-8 hrs",
        level: "Moderate-Strenuous",
        priority: "Advanced Day Hike",
        location: "Above Thimphu",
        summary:
          "A substantial climb to a monastic landscape around 3,600 metres, with broad views above the capital.",
        note: "Altitude and weather matter; this is not equivalent to Thimphu's short ridge walks.",
      },
      {
        title: "Dodedrak Monastery Hike",
        tags: ["Hike", "Monastery", "Lesser Visited"],
        time: "4-6 hrs",
        level: "Moderate-Strenuous",
        priority: "Special Interest",
        location: "Above Thimphu",
        summary:
          "A quieter spiritual hike through forest to an active monastic community above Thimphu.",
        note: "Guide-led planning is recommended; treat it as a religious visit, not casual sightseeing.",
      },
      {
        title: "Dochula Pass & 108 Druk Wangyal Chortens",
        tags: ["Mountain Pass", "Viewpoint", "Spiritual"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Route Essential",
        location: "Between Thimphu and Punakha",
        summary:
          "A high pass between Thimphu and Punakha with 108 chortens, prayer flags and, on clear days, expansive Himalayan panoramas.",
        image: `${thimphuBase}/15_Dochula_Pass_108_Chortens.jpg`,
      },
      {
        title: "Royal Botanical Park, Lamperi",
        tags: ["Nature", "Botany", "Birding"],
        time: "1-3 hrs",
        level: "Easy",
        priority: "Nature Extension",
        location: "Lamperi, near Dochula",
        summary:
          "A forest and botanical stop near Dochula, especially attractive for birding, short walks and seasonal rhododendrons.",
        note: "The 2026 Rhododendron Festival remained TBC in the official tentative calendar.",
      },
    ],
    stayPlanning: [
      "1 day: Memorial Chorten - Buddha Dordenma - Textile Museum - Tashichho Dzong - Clock Tower evening.",
      "2 days: Add Tango or Cheri hike, then market, craft bazaar or contemporary art.",
      "3 days: Add deeper craft and education visits, Postal Museum, local food and archery when available.",
    ],
    seasonality:
      "Spring and autumn are excellent for comfortable sightseeing and hiking. Winter often brings clearer mountain views and crisp evenings. Summer is lush and atmospheric but can bring rain, cloud and occasional road disruption.",
    events: [
      { name: "Thimphu Drubchen", date: "17 September 2026", note: "Tentative; reconfirm before booking." },
      { name: "Thimphu Tshechu", date: "21-23 September 2026", note: "Tentative; reconfirm before booking." },
      { name: "Jhomolhari Mountain Festival", date: "14-15 October 2026", note: "Tentative; reconfirm before booking." },
      { name: "Dechenphu Tshechu", date: "21 October 2026", note: "Tentative; reconfirm before booking." },
      { name: "Druk Wangyel Tshechu at Dochula", date: "13 December 2026", note: "Tentative; reconfirm before booking." },
      { name: "Rhododendron Festival at Lamperi", date: "TBC", note: "Do not hard-code until confirmed." },
    ],
    faqs: [
      { question: "How many days should I spend in Thimphu?", answer: "Two nights covers the major highlights; three nights allows a monastery hike and slower city experiences." },
      { question: "Is Thimphu walkable?", answer: "Central Thimphu is walkable, but major sights are spread across hillsides and the valley, so a vehicle is useful." },
      { question: "Do I need a guide?", answer: "Bhutan's Department of Tourism states that visitors are required to be accompanied by a certified guide, and guides are required for monument and dzong entry." },
      { question: "What is the best short hike?", answer: "Sangaygang-Wangditse is gentle; Tango or Cheri provide a stronger half-day experience; Phajoding is significantly harder." },
    ],
  },
  {
    id: "paro",
    name: "Paro",
    shortName: "Paro",
    kicker: "Sacred cliffs, ancient temples, fortress architecture and Bhutan's most iconic hike",
    intro:
      "Paro combines Bhutan's international gateway with one of the country's most culturally significant valleys. Tiger's Nest is the headline attraction, but Paro also supports several days of travel through ancient temples, dzongs, museum collections, villages, farmhouses, high mountain passes and lesser-known sacred hikes.",
    bestFor: "Iconic sights, history, hiking, villages and photography",
    heroImage: `${paroBase}/01_Tigers_Nest_Paro_Taktsang.jpg`,
    heroAlt: "Paro Taktsang Tiger's Nest Monastery on a cliff",
    facts: [
      { label: "Ideal stay", value: "2-4 nights" },
      { label: "Best for", value: "Iconic sights, history, hiking, villages and photography" },
      { label: "Character", value: "Historic agricultural valley and international gateway" },
      { label: "Suggested pace", value: "One major hike day plus one or two sightseeing days" },
      { label: "Altitude", value: "Paro town ~2,200 m; Taktsang ~3,120 m; Chele La near 4,000 m" },
    ],
    attractions: [
      {
        title: "Paro Taktsang - Tiger's Nest Monastery",
        tags: ["Monastery", "Hike", "Iconic Landmark"],
        time: "5-7 hrs",
        level: "Moderate-Challenging",
        priority: "Absolute Must Visit",
        location: "Upper Paro Valley",
        summary:
          "Bhutan's most recognisable sacred site, dramatically built into a cliff above the upper Paro Valley. The hike itself is part of the experience, climbing through forest to classic viewpoints before the final approach to the monastery.",
        note: "Allow most of the day; walking time varies with fitness, altitude, weather and rest stops.",
        image: `${paroBase}/01_Tigers_Nest_Paro_Taktsang.jpg`,
      },
      {
        title: "Rinpung Dzong - Paro Dzong",
        tags: ["Dzong", "Architecture", "History"],
        time: "45-90 min",
        level: "Easy",
        priority: "Must Visit",
        location: "Paro",
        summary:
          "A major fortress-monastery above the Paro Chhu and one of Bhutan's finest dzong ensembles. Its courtyards, timberwork and dramatic approach via the river create strong historical context.",
        note: "Bhutanese dzongs are on the UNESCO Tentative List; do not label Rinpung Dzong an inscribed World Heritage Site.",
        image: `${paroBase}/02_Rinpung_Dzong.jpg`,
      },
      {
        title: "National Museum of Bhutan - Ta Dzong",
        tags: ["Museum", "History", "Art"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Must Visit",
        location: "Above Rinpung Dzong, Paro",
        summary:
          "Bhutan's national museum, located above Rinpung Dzong in the historic watchtower complex. Collections cover religion, history, art, natural heritage and material culture.",
        note: "Official 2026 information lists 9 a.m.-5 p.m. daily except government/local holidays; last admission 4 p.m.; tourist fee Nu. 500. Photography is not permitted inside.",
        image: `${paroBase}/03_National_Museum_Ta_Dzong.jpg`,
      },
      {
        title: "Kyichu Lhakhang",
        tags: ["Ancient Temple", "Spiritual"],
        time: "30-60 min",
        level: "Easy",
        priority: "Must Visit",
        location: "Paro",
        summary:
          "One of Bhutan's oldest and most revered temples, traditionally linked to the 7th-century Tibetan king Songtsen Gampo. Its age and living religious importance make it essential for understanding early Buddhism in Bhutan.",
        note: "Follow local rules on photography and interior access.",
        image: `${paroBase}/04_Kyichu_Lhakhang.jpg`,
      },
      {
        title: "Nemi Zam",
        tags: ["Bridge", "Architecture", "Photography"],
        time: "15-30 min",
        level: "Easy",
        priority: "Recommended",
        location: "Below Rinpung Dzong, Paro",
        summary:
          "The traditional covered bridge below Rinpung Dzong, creating one of Paro's most photogenic approaches and an excellent transition between the town and fortress.",
        image: `${paroBase}/05_Nemi_Zam_Bridge.jpg`,
      },
      {
        title: "Drukgyel Dzong",
        tags: ["Dzong", "History", "Architecture"],
        time: "30-60 min",
        level: "Easy",
        priority: "Highly Recommended",
        location: "Upper Paro Valley",
        summary:
          "A strategic upper-valley fortress restored after the 1951 fire, with strong historic associations and mountain scenery.",
        note: "Confirm current interior access before promising entry.",
        image: `${paroBase}/06_Drukgyel_Dzong.jpg`,
      },
      {
        title: "Dungtse Lhakhang",
        tags: ["Temple", "Murals", "Architecture"],
        time: "30-45 min",
        level: "Easy",
        priority: "Recommended",
        location: "Paro",
        summary:
          "A distinctive chorten-shaped temple linked to Thangtong Gyalpo and known for important religious murals.",
        image: `${paroBase}/07_Dungtse_Lhakhang.jpg`,
      },
      {
        title: "Druk Choeding Temple",
        tags: ["Temple", "Local History"],
        time: "20-40 min",
        level: "Easy",
        priority: "Optional",
        location: "Paro town",
        summary:
          "A historic temple near Paro town that adds depth for travellers spending more than one sightseeing day in the valley.",
      },
      {
        title: "Jangsarbu Lhakhang",
        tags: ["Temple", "Hidden Gem"],
        time: "20-40 min",
        level: "Easy",
        priority: "Hidden Gem",
        location: "Near Rinpung Dzong, Paro",
        summary:
          "A smaller sacred site near the Rinpung Dzong area, suited to visitors exploring Paro's less prominent religious heritage.",
      },
      {
        title: "Ugyen Pelri Palace - Exterior View",
        tags: ["Royal Heritage", "Architecture"],
        time: "10-20 min",
        level: "Easy",
        priority: "Exterior Only",
        location: "Paro",
        summary:
          "A graceful private palace compound inspired by Zangto Pelri, the celestial paradise associated with Guru Rinpoche.",
        note: "Do not advertise interior access; respect privacy and security.",
      },
      {
        title: "Paro Old Town & Main Street",
        tags: ["Town", "Cafes", "Shopping"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Recommended",
        location: "Paro town",
        summary:
          "A compact walking area of cafes, restaurants, handicraft shops and traditional-style buildings, especially pleasant in the late afternoon or evening.",
        image: `${paroBase}/08_Paro_Town_and_Valley.jpg`,
      },
      {
        title: "Traditional Bhutanese Farmhouse Experience",
        tags: ["Local Culture", "Food", "Village"],
        time: "1-3 hrs",
        level: "Easy",
        priority: "Highly Recommended",
        location: "Paro Valley",
        summary:
          "A chance to understand rural household life through architecture, local food, tea, farming routines and host interaction.",
        note: "Use genuine host families and distinguish daytime visits from approved overnight homestays.",
        image: `${paroBase}/11_Traditional_Bhutanese_Farmhouse.jpg`,
      },
      {
        title: "Traditional Hot-Stone Bath",
        tags: ["Wellness", "Culture"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Recommended Add-On",
        location: "Paro",
        summary:
          "A Bhutanese bathing tradition using heated river stones, often enjoyed after the Tiger's Nest hike.",
        note: "Present as a bookable experience; quality and style vary by farmhouse or hotel.",
      },
      {
        title: "Paro Valley Rice-Field Walk",
        tags: ["Village", "Walking", "Photography"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Recommended",
        location: "Paro Valley",
        summary:
          "A slow walk among farmhouses, fields, irrigation channels and village lanes across the broad Paro Valley.",
        image: `${paroBase}/09_Paro_Valley.jpg`,
      },
      {
        title: "Paro Valley & Airport Viewpoint",
        tags: ["Viewpoint", "Aviation", "Photography"],
        time: "15-30 min",
        level: "Easy",
        priority: "Optional",
        location: "Paro",
        summary:
          "Elevated roadside views over Bhutan's international airport, the Paro Chhu and surrounding farmland.",
        note: "Aircraft sightings depend on the flight schedule and weather.",
        image: `${paroBase}/10_Paro_International_Airport.jpg`,
      },
      {
        title: "Zuri Lhakhang Hike",
        tags: ["Hike", "Temple", "Valley Views"],
        time: "2-3 hrs",
        level: "Easy-Moderate",
        priority: "Recommended Hike",
        location: "Paro",
        summary:
          "A manageable hillside walk with broad views over Paro, suitable for travellers wanting activity without a full-day climb.",
      },
      {
        title: "Dzongdrakha Goenpa",
        tags: ["Cliffside Temple", "Hidden Gem"],
        time: "1-2 hrs",
        level: "Easy-Moderate",
        priority: "Hidden Gem",
        location: "Bondey area, Paro",
        summary:
          "A dramatic cliffside religious complex above the Bondey area, with a long sacred history and far fewer visitors than Tiger's Nest.",
        note: "Avoid reducing it to the marketing nickname Mini Tiger's Nest.",
        image: `${paroBase}/15_Dzongdrakha_Goenpa.jpg`,
      },
      {
        title: "Drakarpo",
        tags: ["Sacred Site", "Hike", "Pilgrimage"],
        time: "2-4 hrs",
        level: "Moderate",
        priority: "Special Interest",
        location: "Paro",
        summary:
          "A sacred hillside area associated with Guru Rinpoche, meditation caves and religious rock formations.",
      },
      {
        title: "Kila Goenpa",
        tags: ["Nunnery", "Hike", "High-Altitude Landscape"],
        time: "3-5 hrs",
        level: "Moderate",
        priority: "Recommended",
        location: "Near Chele La",
        summary:
          "A high mountain nunnery near the Chele La area, combining forest, prayer flags and women's monastic heritage.",
      },
      {
        title: "Bumdrak",
        tags: ["Trek", "Camping", "Sacred Site"],
        time: "Overnight / 2 days",
        level: "Challenging",
        priority: "Adventure Highlight",
        location: "Above Paro",
        summary:
          "A compact high-altitude trekking experience above Tiger's Nest, often descending through the wider Taktsang sacred landscape.",
        note: "Requires accredited trekking support, warm equipment and altitude awareness.",
      },
      {
        title: "Chumphu Ney",
        tags: ["Pilgrimage", "Full-Day Hike"],
        time: "Full day",
        level: "Challenging",
        priority: "Special Interest",
        location: "Paro",
        summary:
          "A demanding sacred hike known for caves, pilgrimage landmarks and the revered floating-statue tradition.",
      },
      {
        title: "Taktsang Zangtopelri",
        tags: ["Sacred Site", "Pilgrimage Extension"],
        time: "Variable",
        level: "Moderate-Challenging",
        priority: "Extended Taktsang Area",
        location: "Taktsang mountain landscape",
        summary:
          "One of the lesser-visited sacred sites within the wider Taktsang mountain landscape, best for pilgrims and repeat visitors.",
      },
      {
        title: "Taktsang Yoelselgang",
        tags: ["Sacred Site", "Pilgrimage"],
        time: "Variable",
        level: "Moderate-Challenging",
        priority: "Pilgrimage Extension",
        location: "Taktsang mountain landscape",
        summary:
          "A lesser-visited monastic site within the broader Taktsang pilgrimage landscape.",
      },
      {
        title: "Chele La Pass",
        tags: ["Mountain Pass", "Scenic Drive", "Photography"],
        time: "Half day",
        level: "Easy; High Altitude",
        priority: "Highly Recommended",
        location: "Between Paro and Haa",
        summary:
          "A high road pass near 4,000 metres with prayer flags, alpine scenery and possible Himalayan views.",
        note: "Avoid unsupported claims such as Bhutan's highest motorable pass; weather can change rapidly.",
        image: `${paroBase}/12_Chele_La_Pass.jpg`,
      },
      {
        title: "Chele La to Kila Goenpa Hike",
        tags: ["Hike", "Nunnery", "Mountain Scenery"],
        time: "3-5 hrs",
        level: "Moderate",
        priority: "Recommended",
        location: "Chele La area",
        summary:
          "A scenic high-altitude walk that turns a Chele La drive into a fuller nature-and-culture experience.",
      },
      {
        title: "Haa Valley Day Excursion via Chele La",
        tags: ["Day Trip", "Scenic Drive", "Culture"],
        time: "Full day",
        level: "Easy-Moderate",
        priority: "Recommended Extension",
        location: "Paro to Haa",
        summary:
          "Cross Chele La into Haa for a full-day contrast to Paro's busier sightseeing circuit.",
        note: "An overnight Haa stay is better when the itinerary allows.",
        image: `${paroBase}/14_Haa_Valley_Day_Excursion.jpg`,
      },
      {
        title: "Tamchog Goenpa & Iron-Bridge Heritage",
        tags: ["Temple", "Heritage", "Route Stop"],
        time: "30-60 min",
        level: "Easy",
        priority: "Recommended En Route",
        location: "Paro-Thimphu route",
        summary:
          "A historic temple associated with Thangtong Gyalpo and Bhutan's iron-chain bridge tradition, located between Paro and Thimphu.",
        image: `${paroBase}/13_Tamchog_Tachog_Traditional_Bridge.jpg`,
      },
    ],
    stayPlanning: [
      "1 day: National Museum - Rinpung Dzong - Nemi Zam - Kyichu Lhakhang - Paro town.",
      "2 days: Add a dedicated Tiger's Nest day followed by farmhouse dinner or hot-stone bath.",
      "3 days: Add Drukgyel Dzong, Dzongdrakha or Chele La and a village walk.",
      "4 days: Add Haa, Kila Goenpa, Bumdrak or a specialist pilgrimage route.",
    ],
    seasonality:
      "Spring and autumn are excellent for hiking and festivals. Winter is cold but often clear. Summer is lush and green, though rain and cloud can extend walking times.",
    events: [
      { name: "Paro Tshechu", date: "29 March-2 April 2026", note: "Thongdrel on final day; tentative and should be reconfirmed." },
    ],
    faqs: [
      { question: "How long should I allow for Tiger's Nest?", answer: "Plan most of the day; five to seven hours is a realistic range for many visitors including breaks and monastery time." },
      { question: "How many nights are ideal in Paro?", answer: "Two nights is the practical minimum; three nights creates a much better pace." },
      { question: "Is the National Museum open daily?", answer: "Official 2026 information lists 9 a.m.-5 p.m. daily except government/local holidays, with last admission at 4 p.m." },
      { question: "Can I visit Ugyen Pelri Palace?", answer: "Treat it as an exterior or viewpoint feature; it is not a standard public walk-in attraction." },
    ],
  },
  {
    id: "punakha",
    name: "Punakha",
    shortName: "Punakha",
    kicker:
      "Rivers, royal history, fertile valleys, village walks and Bhutan's celebrated riverside dzong",
    intro:
      "Punakha is lower, warmer and more fertile than Thimphu and Paro. Punakha Dzong is the centrepiece, but the destination becomes far richer through village walks, river activities, the Khamsum hike, nunnery viewpoints, rural communities, hot springs and seasonal festivals.",
    bestFor: "Dzongs, rivers, village walks, rafting and warmer weather",
    heroImage: `${punakhaBase}/01_Punakha_Dzong.jpg`,
    heroAlt: "Punakha Dzong in the Punakha Valley",
    facts: [
      { label: "Ideal stay", value: "2-3 nights" },
      { label: "Best for", value: "Dzongs, rivers, village walks, rafting and warmer weather" },
      { label: "Character", value: "Fertile subtropical valley with royal and religious history" },
      { label: "Suggested pace", value: "One cultural day plus one hike/adventure or village day" },
      { label: "Altitude", value: "Much of the main valley lies roughly around 1,200-1,400 m" },
    ],
    attractions: [
      {
        title: "Punakha Dzong",
        tags: ["Dzong", "History", "Architecture"],
        time: "1-1.5 hrs",
        level: "Easy",
        priority: "Absolute Must Visit",
        location: "Punakha",
        summary:
          "One of Bhutan's most majestic fortresses, built in 1637-38 at the confluence of the Pho Chhu and Mo Chhu rivers. It remains central to Bhutanese religious, political and royal history and is the winter residence of the Central Monastic Body.",
        note: "Official and religious activity can affect access.",
        image: `${punakhaBase}/01_Punakha_Dzong.jpg`,
      },
      {
        title: "Punakha Suspension Bridge",
        tags: ["Bridge", "River", "Photography"],
        time: "30-60 min",
        level: "Easy",
        priority: "Highly Recommended",
        location: "Punakha",
        summary:
          "A roughly 230-metre pedestrian suspension bridge high above the Pho Chhu, lined with prayer flags and broad valley views.",
        note: "Guests uncomfortable with heights should be warned that the bridge moves slightly.",
        image: `${punakhaBase}/02_Punakha_Suspension_Bridge.jpg`,
      },
      {
        title: "Chimi Lhakhang",
        tags: ["Temple", "Pilgrimage", "Village Walk"],
        time: "1-1.5 hrs",
        level: "Easy",
        priority: "Must Visit",
        location: "Lobesa / Sopsokha",
        summary:
          "The fertility temple associated with Drukpa Kunley, reached through the fields and villages around Lobesa and Sopsokha. The walk is as valuable as the temple because it brings visitors through an active agricultural landscape.",
        note: "Explain its symbolism respectfully rather than as novelty.",
        image: `${punakhaBase}/03_Chimi_Lhakhang.jpg`,
      },
      {
        title: "Khamsum Yulley Namgyal Chorten",
        tags: ["Chorten", "Hike", "Viewpoint"],
        time: "2-3 hrs",
        level: "Moderate",
        priority: "Highly Recommended",
        location: "Punakha",
        summary:
          "A hilltop chorten reached by crossing the Mo Chhu and climbing through fields and forest, with wide views along the valley.",
        note: "The climb can feel hot in warm months; mornings are preferable.",
        image: `${punakhaBase}/04_Khamsum_Yulley_Namgyal_Chorten.jpg`,
      },
      {
        title: "Sangchhen Dorji Lhuendrup Nunnery",
        tags: ["Nunnery", "Viewpoint", "Spiritual"],
        time: "45-75 min",
        level: "Easy",
        priority: "Recommended",
        location: "Punakha-Wangdue valley",
        summary:
          "A peaceful ridge-top nunnery above the Punakha-Wangdue valley with broad views and an active women's monastic community.",
        image: `${punakhaBase}/06_Sangchen_Dorji_Lhendrup_Nunnery.jpg`,
      },
      {
        title: "Mo Chhu River Rafting",
        tags: ["Rafting", "Nature", "Family Adventure"],
        time: "2-3 hrs",
        level: "Easy-Moderate",
        priority: "Highly Recommended",
        location: "Mo Chhu, Punakha",
        summary:
          "A generally gentler rafting experience through cultivated valley scenery, suitable for many first-time rafters.",
        note: "Water level and operator route choice determine actual difficulty.",
        image: `${punakhaBase}/07_River_Rafting_Punakha.jpg`,
      },
      {
        title: "Pho Chhu Rafting & Kayaking",
        tags: ["Rafting", "Kayaking", "Adventure"],
        time: "2-4 hrs",
        level: "Moderate",
        priority: "Adventure Option",
        location: "Pho Chhu, Punakha",
        summary:
          "A more energetic river option with stronger rapids and excellent perspectives on Punakha's river landscape.",
        note: "Use licensed operators and proper safety equipment.",
        image: `${punakhaBase}/10_Pho_Chhu_River.jpg`,
      },
      {
        title: "Sopsokha Village & Rice-Field Walk",
        tags: ["Village", "Agriculture", "Photography"],
        time: "45-90 min",
        level: "Easy",
        priority: "Recommended",
        location: "Sopsokha",
        summary:
          "A photogenic farming landscape forming the classic approach to Chimi Lhakhang and a good place to slow down rather than rush directly to the temple.",
        image: `${punakhaBase}/13_Rice_Terraces_Sopsokha.jpg`,
      },
      {
        title: "Lobesa",
        tags: ["Town", "Route Stop", "Local Life"],
        time: "30-90 min",
        level: "Easy",
        priority: "Useful Context",
        location: "Punakha-Wangdue valley",
        summary:
          "A small commercial centre near Chimi Lhakhang and the main road junction through the Punakha-Wangdue valley.",
        image: `${punakhaBase}/09_Lobesa_Valley_Landscape.jpg`,
      },
      {
        title: "Nalanda Buddhist Institute",
        tags: ["Monastic Institute", "Spiritual", "Views"],
        time: "1-2 hrs",
        level: "Moderate Access",
        priority: "Special Interest",
        location: "Above Punakha Valley",
        summary:
          "A quieter monastic educational setting above the valley, appropriate for visitors interested in Buddhist study and monastic life.",
        note: "Arrange in advance; do not promise classroom access.",
        image: `${punakhaBase}/12_Nalanda_Buddhist_Institute.jpg`,
      },
      {
        title: "Talo Village & Monastic Heritage",
        tags: ["Village", "Temple", "Culture"],
        time: "2-4 hrs",
        level: "Easy-Moderate",
        priority: "Hidden Gem",
        location: "Talo, Punakha",
        summary:
          "A ridge-top community known for traditional houses, gardens, religious heritage and broad views over Punakha.",
      },
      {
        title: "Nobgang Village",
        tags: ["Village", "Rural Heritage"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Hidden Gem",
        location: "Near Talo, Punakha",
        summary:
          "A traditional village near Talo that works well as part of a slow rural circuit and provides a different perspective on Punakha beyond its most visited monuments.",
      },
      {
        title: "Ritsha Village & Punakha Farmland",
        tags: ["Village", "Agriculture", "Photography"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Hidden Gem",
        location: "Punakha",
        summary:
          "A farming landscape that helps explain Punakha's fertile rice-growing identity and seasonal agricultural life.",
      },
      {
        title: "Punakha Cantilever Bridge & Dzong Approach",
        tags: ["Bridge", "Architecture", "Photography"],
        time: "15-30 min",
        level: "Easy",
        priority: "Recommended",
        location: "Punakha Dzong approach",
        summary:
          "The traditional-style enclosed bridge approach creates one of the strongest visual transitions into Punakha Dzong.",
        image: `${punakhaBase}/14_Punakha_Cantilever_Bridge.jpg`,
      },
      {
        title: "Koma Tshachu",
        tags: ["Hot Spring", "Rural Nature"],
        time: "Half day+",
        level: "Moderate Access",
        priority: "Special Interest",
        location: "Punakha district",
        summary:
          "One of the hot springs identified by Punakha Dzongkhag, suited to rural wellness itineraries with enough time for variable access.",
      },
      {
        title: "Chhubu Tshachu",
        tags: ["Hot Spring", "Rural Nature"],
        time: "Half day+",
        level: "Moderate Access",
        priority: "Special Interest",
        location: "Punakha district",
        summary:
          "A lesser-known traditional hot-spring area in the wider district, best for repeat visitors and slow travel.",
      },
      {
        title: "Punakha Winter Trek",
        tags: ["Trek", "Villages", "Forest"],
        time: "3 days",
        level: "Moderate",
        priority: "Trekking Option",
        location: "Punakha",
        summary:
          "A lower-altitude multi-day trek through villages, forest and agricultural landscapes, generally suited to cooler, drier months.",
        note: "All treks require an accredited guide or tour operator.",
      },
      {
        title: "Punakha Dromchoe & Punakha Tshechu",
        tags: ["Festival", "Culture", "History"],
        time: "24 Feb-1 Mar 2026",
        level: "Easy Viewing",
        priority: "Seasonal Highlight",
        location: "Punakha Dzong",
        summary:
          "A major festival sequence at Punakha Dzong combining historic ritual, sacred dance and community gathering.",
        note: "Official tentative 2026 dates: Dromchoe 24-26 February; Tshechu 27 February-1 March.",
      },
      {
        title: "Talo Tshechu",
        tags: ["Festival", "Village Culture"],
        time: "26-28 Mar 2026",
        level: "Easy Viewing",
        priority: "Seasonal Hidden Gem",
        location: "Talo Gonpa",
        summary:
          "A smaller festival at Talo Gonpa offering a more intimate village setting.",
      },
      {
        title: "Punakha Astro-Tourism / Night-Sky Experiences",
        tags: ["Emerging Experience", "Stargazing"],
        time: "Evening",
        level: "Easy",
        priority: "Emerging 2026 Product",
        location: "Punakha rural areas",
        summary:
          "A new tourism direction highlighted by Punakha in January 2026, combining stargazing, celestial storytelling and low-light rural landscapes.",
        note: "Present as an emerging, provider-dependent experience rather than a guaranteed daily attraction.",
      },
    ],
    stayPlanning: [
      "1 day: Punakha Dzong - Suspension Bridge - Chimi Lhakhang / Sopsokha.",
      "2 days: Add Khamsum Yulley hike and nunnery or rafting.",
      "3 days: Add Talo/Nobgang, Nalanda, rural hot spring or a slower photography day.",
    ],
    seasonality:
      "Winter is mild by Bhutanese standards. Spring brings jacaranda and warmer fields. Summer is intensely green and agricultural but wetter. Autumn is excellent for walking and harvest landscapes.",
    events: [
      { name: "Punakha Dromchoe", date: "24-26 February 2026", note: "Tentative; reconfirm before booking." },
      { name: "Punakha Tshechu", date: "27 February-1 March 2026", note: "Tentative; reconfirm before booking." },
      { name: "Talo Tshechu", date: "26-28 March 2026", note: "Tentative; reconfirm before booking." },
    ],
    faqs: [
      { question: "How many nights are best in Punakha?", answer: "Two nights suits most first visits; three nights allows a village circuit, rafting or longer hike." },
      { question: "Is Punakha warmer than Thimphu and Paro?", answer: "Yes. The main valley is much lower and generally warmer." },
      { question: "Which rafting river is easier?", answer: "The Mo Chhu is generally promoted as gentler, while the Pho Chhu offers stronger rapids; actual conditions depend on water levels." },
      { question: "When are jacaranda blossoms visible?", answer: "Spring is the period most associated with the violet jacaranda display, but exact bloom timing varies each year." },
    ],
  },
  {
    id: "wangdue-phodrang",
    name: "Wangdue Phodrang",
    shortName: "Wangdue",
    kicker:
      "Restored fortress heritage, river valleys, rural villages and the gateway toward central Bhutan",
    intro:
      "Wangdue is often hurried through between Punakha and Phobjikha, yet the district deserves its own identity. The restored dzong anchors the main valley, Rinchengang offers a distinctive village landscape, and deeper rural areas such as Khotokha and Adha-Rukha support community, nature and low-volume travel.",
    bestFor: "Dzong architecture, villages, route photography and homestays",
    heroImage: `${wangdueBase}/01_Wangdue_Phodrang_Dzong_2024.jpg`,
    heroAlt: "Wangdue Phodrang Dzong on a ridge",
    facts: [
      { label: "Ideal stay", value: "1 night in main Wangdue; longer for rural areas" },
      { label: "Best for", value: "Dzong architecture, villages, route photography and homestays" },
      { label: "Character", value: "Transition zone between western valleys and central Bhutan" },
      { label: "Suggested pace", value: "Pair the dzong with one village or use Wangdue as a rural gateway" },
      { label: "Altitude", value: "Varies widely from warm river valleys to high mountain passes" },
    ],
    attractions: [
      {
        title: "Wangdue Phodrang Dzong",
        tags: ["Dzong", "History", "Architecture"],
        time: "45-75 min",
        level: "Easy",
        priority: "Must Visit",
        location: "Wangdue Phodrang",
        summary:
          "The great fortress overlooking the Punatsang Chhu corridor, reconstructed after the devastating 2012 fire. Its ridge-top position explains its historic strategic importance and makes it the architectural anchor of the district.",
        note: "It remains an active administrative and religious institution.",
        image: `${wangdueBase}/01_Wangdue_Phodrang_Dzong_2024.jpg`,
      },
      {
        title: "Rinchengang Village",
        tags: ["Village", "Traditional Architecture", "Walking"],
        time: "1-2 hrs",
        level: "Moderate Walking",
        priority: "Highly Recommended",
        location: "Facing Wangdue Dzong",
        summary:
          "A compact traditional village facing the dzong, known for tightly clustered stone-and-timber houses and steep lanes.",
        note: "Respect privacy; it is a living community.",
      },
      {
        title: "Adha & Rukha Villages",
        tags: ["Village", "Homestay", "Rural Culture"],
        time: "Full day / overnight",
        level: "Moderate Logistics",
        priority: "Community Experience",
        location: "Rural Wangdue",
        summary:
          "Remote farming villages promoted by the district for homestays, local stories, food and insight into rural life.",
        note: "Autumn is often preferable; summer can bring leeches, insects and wetter access.",
      },
      {
        title: "Khotokha Valley",
        tags: ["Valley", "Nature", "Rural Landscape"],
        time: "Half day / overnight",
        level: "Moderate",
        priority: "Hidden Gem",
        location: "Wangdue Phodrang",
        summary:
          "A quiet highland valley associated with rural settlements, religious sites and seasonal black-necked crane habitat.",
      },
      {
        title: "Dolung Goenpa",
        tags: ["Monastery", "Pilgrimage", "Highland Views"],
        time: "1-2 hrs",
        level: "Moderate Access",
        priority: "Special Interest",
        location: "Khotokha area",
        summary:
          "A historic monastery around 2,770 metres in the Khotokha area, associated with important religious figures and the annual Dolung Mani.",
      },
      {
        title: "Pele La Pass",
        tags: ["Mountain Pass", "Scenic Drive"],
        time: "30-60 min",
        level: "Easy; High Altitude",
        priority: "Recommended Route Stop",
        location: "Toward central Bhutan",
        summary:
          "A high road pass marking the transition toward central Bhutan, with prayer flags, alpine weather and changing mountain vegetation.",
        image: `${wangdueBase}/04_Pele_La_Pass.jpg`,
      },
      {
        title: "Nobding",
        tags: ["Town", "Route Stop", "Local Life"],
        time: "30-60 min",
        level: "Easy",
        priority: "Route Context",
        location: "Wangdue highway",
        summary:
          "A small settlement on the eastward highway useful for breaks and understanding the long overland journey toward central Bhutan.",
        image: `${wangdueBase}/02_Nobding_Village.jpg`,
      },
      {
        title: "Chazam & Punatsang Chhu Valley Views",
        tags: ["Scenery", "River", "Photography"],
        time: "15-45 min",
        level: "Easy",
        priority: "Scenic Stop",
        location: "Punatsang Chhu corridor",
        summary:
          "Bridges, river landscapes and road viewpoints along the Punatsang Chhu corridor provide useful scenic pauses between formal sightseeing stops.",
        image: `${wangdueBase}/03_Chazam_Village_Landscape.jpg`,
      },
      {
        title: "Village Homestay Experiences",
        tags: ["Homestay", "Food", "Rural Life"],
        time: "Evening / overnight",
        level: "Easy",
        priority: "Recommended Slow Travel",
        location: "Wangdue rural valleys",
        summary:
          "Community-led stays that help distribute tourism beyond the best-known sites and connect visitors with food, agriculture and household life.",
      },
      {
        title: "Wangdue Tshechu",
        tags: ["Festival", "Culture"],
        time: "19-21 Sep 2026",
        level: "Easy Viewing",
        priority: "Seasonal Highlight",
        location: "Wangdue Phodrang",
        summary:
          "Wangdue's principal annual tshechu, with sacred dances and community gathering.",
        note: "Official 2026 dates are tentative and should be reconfirmed.",
      },
      {
        title: "Samtengang / Short Trekking Routes",
        tags: ["Trek", "Villages", "Nature"],
        time: "2-4 days",
        level: "Moderate",
        priority: "Trekking Option",
        location: "Wangdue-Punakha region",
        summary:
          "Lower-altitude trekking through forest, villages and agricultural landscapes in the Wangdue-Punakha region.",
        note: "All treks require accredited guiding support.",
      },
    ],
    stayPlanning: [
      "Half day: Wangdue Dzong - Rinchengang - river valley viewpoints.",
      "1 day: Add village walk, local lunch and Punatsang Chhu scenery.",
      "2+ days: Use the extra time for Khotokha, Dolung Goenpa, Adha-Rukha or homestays.",
    ],
    seasonality:
      "Spring and autumn are excellent for village walks and road travel. Winter is clear but colder on high passes. Summer is intensely green, with wetter rural trails.",
    events: [
      { name: "Wangdue Tshechu", date: "19-21 September 2026", note: "Tentative; reconfirm before booking." },
    ],
    faqs: [
      { question: "Is Wangdue the same as Punakha?", answer: "No. They are neighbouring but separate districts with distinct sites." },
      { question: "Is Wangdue only a transit stop?", answer: "No. The restored dzong, Rinchengang and rural valleys justify dedicated time." },
      { question: "When is Wangdue Tshechu in 2026?", answer: "The official tentative calendar lists 19-21 September 2026." },
    ],
  },
  {
    id: "gangtey-phobjikha",
    name: "Gangtey & Phobjikha",
    shortName: "Gangtey & Phobjikha",
    kicker:
      "High-altitude wetlands, black-necked cranes, monastery heritage and an outstanding nature trail",
    intro:
      "Gangtey and Phobjikha combine a monastic ridge with a broad high-altitude wetland valley. The region is one of Bhutan's strongest nature-and-culture destinations because conservation is visible in the landscape itself. Cranes dominate winter travel, but the valley remains rewarding year-round through walking, farms, monastery heritage and highland scenery.",
    bestFor: "Nature, cranes, monasteries, hikes, homestays and photography",
    heroImage: `${phobjikhaBase}/08_Gangtey_Nature_Trail_Panorama.jpg`,
    heroAlt: "Gangtey and Phobjikha valley landscape",
    facts: [
      { label: "Ideal stay", value: "2 nights" },
      { label: "Best for", value: "Nature, cranes, monasteries, hikes, homestays and photography" },
      { label: "Character", value: "Quiet high-altitude conservation landscape" },
      { label: "Suggested pace", value: "One monastery/nature-trail day plus one wildlife or hiking day" },
      { label: "Altitude", value: "Roughly 2,900-3,200 m; noticeably colder than Punakha" },
    ],
    attractions: [
      {
        title: "Gangtey Monastery - Gangteng Goenpa",
        tags: ["Monastery", "History", "Spiritual"],
        time: "1-1.5 hrs",
        level: "Easy",
        priority: "Must Visit",
        location: "Gangtey",
        summary:
          "A major Nyingma monastery and principal seat of the Pema Lingpa tradition overlooking Phobjikha Valley. The ridge-top setting gives cultural context before visitors descend into the wetland landscape.",
        note: "Access can change around teachings, rituals and festivals.",
        image: `${phobjikhaBase}/06_Gangtey_Monastery_Front.jpg`,
      },
      {
        title: "Phobjikha Valley",
        tags: ["Glacial Valley", "Nature", "Landscape"],
        time: "Half day to multi-day",
        level: "Easy",
        priority: "Absolute Must Visit",
        location: "Phobjikha",
        summary:
          "A broad high-altitude wetland valley known for open landscapes, traditional farms and wintering black-necked cranes. Its conservation story is as important as the scenery.",
        note: "The wetlands are ecologically sensitive; stay on roads, trails and viewing areas.",
        image: `${phobjikhaBase}/10_Phobjikha_Wetland.jpg`,
      },
      {
        title: "Black-Necked Crane Information Centre",
        tags: ["Conservation", "Wildlife", "Education"],
        time: "45-75 min",
        level: "Easy",
        priority: "Highly Recommended",
        location: "Phobjikha",
        summary:
          "A conservation-focused visitor stop explaining crane migration, wetland habitat and the valley's ecological importance.",
        note: "Crane sightings remain seasonal and cannot be guaranteed.",
        image: `${phobjikhaBase}/14_Black_Necked_Crane_Conservation_Karma.jpg`,
      },
      {
        title: "Gangtey Nature Trail",
        tags: ["Nature Trail", "Villages", "Wetlands"],
        time: "1.5-2 hrs",
        level: "Easy-Moderate",
        priority: "Must-Do Walk",
        location: "Gangtey to Khewang",
        summary:
          "A gentle trail from the Gangtey area through blue-pine forest, meadows and village landscapes toward Khewang. It is one of the best ways to experience the valley at human pace.",
        note: "The district describes a route of about 90 minutes, but photography and birding often extend the walk.",
        image: `${phobjikhaBase}/08_Gangtey_Nature_Trail_Panorama.jpg`,
      },
      {
        title: "Khewang Lhakhang",
        tags: ["Temple", "Village", "Nature Trail"],
        time: "30-45 min",
        level: "Easy",
        priority: "Recommended",
        location: "Khewang",
        summary:
          "A traditional temple in the lower valley that works naturally as part of the Gangtey Nature Trail.",
        image: `${phobjikhaBase}/07_Khewang_Lhakhang.jpg`,
      },
      {
        title: "Black-Necked Crane Viewing",
        tags: ["Wildlife", "Birding", "Conservation"],
        time: "1-3 hrs",
        level: "Easy",
        priority: "Seasonal Highlight",
        location: "Phobjikha wetlands",
        summary:
          "Observe black-necked cranes in their winter habitat, generally from around mid-October into February.",
        note: "Use binoculars or telescopes and maintain distance from the wetlands.",
        image: `${phobjikhaBase}/12_Black_Necked_Cranes_Bhutan_2026.jpg`,
      },
      {
        title: "Black-Necked Crane Festival",
        tags: ["Festival", "Conservation", "Community"],
        time: "11 Nov 2026",
        level: "Easy Viewing",
        priority: "Seasonal Highlight",
        location: "Gangtey Gonpa",
        summary:
          "An annual community festival at Gangtey Gonpa celebrating the arrival and conservation of the cranes.",
        note: "The official tentative 2026 calendar lists 11 November.",
        image: `${phobjikhaBase}/13_Black_Necked_Crane_Festival.jpg`,
      },
      {
        title: "Phobjikha Village & Farmhouse Experience",
        tags: ["Village", "Homestay", "Food"],
        time: "2 hrs to overnight",
        level: "Easy",
        priority: "Highly Recommended",
        location: "Phobjikha",
        summary:
          "A host-led way to experience highland food, farms, homes and the slower rhythm of the valley.",
        image: `${phobjikhaBase}/11_Phobjikha_Village.jpg`,
      },
      {
        title: "Longtey Hike",
        tags: ["Hike", "Forest", "Valley Views"],
        time: "3-5 hrs",
        level: "Moderate",
        priority: "Recommended Hike",
        location: "Gangtey-Phobjikha area",
        summary:
          "A scenic forest and highland hike with elevated views across the Gangtey-Phobjikha landscape.",
      },
      {
        title: "Gangtey Trek",
        tags: ["Trek", "Villages", "Forest"],
        time: "4 days",
        level: "Moderate",
        priority: "Trekking Option",
        location: "Wider Gangtey region",
        summary:
          "An established multi-day route through the wider region, focusing on forest and cultural landscapes rather than extreme altitude.",
        note: "Bhutan Travel lists spring and autumn among the main operating seasons.",
      },
      {
        title: "Lawala / High Pass Approaches",
        tags: ["Mountain Pass", "Scenic Drive"],
        time: "20-45 min",
        level: "Easy; High Altitude",
        priority: "Scenic Stop",
        location: "Approach to Phobjikha",
        summary:
          "High-road viewpoints and prayer-flagged approaches that create a strong sense of transition into the valley.",
        image: `${phobjikhaBase}/05_Lawala_Pass.jpg`,
      },
      {
        title: "Phobjikha Wetlands",
        tags: ["Wetland", "Ecology", "Photography"],
        time: "30-90 min",
        level: "Easy",
        priority: "Conservation Priority",
        location: "Phobjikha",
        summary:
          "The ecological heart of the valley, supporting crane habitat, grazing systems and a distinctive high-altitude landscape.",
        image: `${phobjikhaBase}/09_Phobjikha_Crane_Habitat.jpg`,
      },
      {
        title: "Gangtey Tshechu",
        tags: ["Festival", "Religion", "Culture"],
        time: "24-26 Sep 2026",
        level: "Easy Viewing",
        priority: "Seasonal Highlight",
        location: "Gangtey Gonpa",
        summary:
          "A major monastic festival at Gangtey Gonpa, with a Thongdrel scheduled on the final day in the tentative 2026 calendar.",
      },
      {
        title: "Winter Phobjikha",
        tags: ["Seasonal Landscape", "Snow", "Photography"],
        time: "Flexible",
        level: "Easy",
        priority: "Seasonal Experience",
        location: "Phobjikha",
        summary:
          "A quieter, colder version of the valley with cranes, frost, possible snow and an austere highland atmosphere.",
        image: `${phobjikhaBase}/15_Phobjikha_Winter_Landscape.jpg`,
      },
    ],
    stayPlanning: [
      "1 day: Gangtey Monastery - Nature Trail - Khewang - wetland viewpoints.",
      "2 days: Add Crane Information Centre, seasonal crane viewing and a village or farmhouse experience.",
      "3 days: Add Longtey hike or deeper rural exploration.",
    ],
    seasonality:
      "Autumn is crisp and beautiful and cranes begin arriving around mid-October. Winter is the main crane season and may bring snow. Spring is good for walking. Summer is vivid green but wetter.",
    events: [
      { name: "Gangtey Tshechu", date: "24-26 September 2026", note: "Thongdrel on final day; tentative and should be reconfirmed." },
      { name: "Black-Necked Crane Festival", date: "11 November 2026", note: "Tentative; reconfirm before booking." },
    ],
    faqs: [
      { question: "When can I see black-necked cranes?", answer: "The district states they generally arrive around mid-October and remain into February, though timing varies." },
      { question: "How many nights should I stay?", answer: "Two nights is ideal for a balanced experience." },
      { question: "Is Phobjikha very cold?", answer: "Yes, especially in winter; it is high, open and substantially colder than Punakha." },
      { question: "When is the Crane Festival in 2026?", answer: "The official tentative calendar lists 11 November 2026." },
    ],
  },
  {
    id: "haa",
    name: "Haa",
    shortName: "Haa",
    kicker: "A quieter western valley of sacred temples, villages, high passes and community-based experiences",
    intro:
      "Haa is one of the best choices for travellers seeking western Bhutan with fewer visitors. Lhakhang Karpo and Nagpo anchor the valley's sacred identity, while village walks, local food, homestays, cycling and highland traditions give the destination its strongest personality.",
    bestFor: "Slow travel, villages, sacred sites, food, cycling and quieter landscapes",
    heroImage: `${haaBase}/01_Haa_Valley_Panorama.jpg`,
    heroAlt: "Haa Valley panorama",
    facts: [
      { label: "Ideal stay", value: "1-2 nights" },
      { label: "Best for", value: "Slow travel, villages, sacred sites, food, cycling and quieter landscapes" },
      { label: "Character", value: "Low-volume western valley with strong community identity" },
      { label: "Suggested pace", value: "One temple/town day plus one village, cycling or hiking day" },
      { label: "Altitude", value: "High valley; Chele La rises close to 4,000 m" },
    ],
    attractions: [
      {
        title: "Haa Valley",
        tags: ["Valley", "Nature", "Culture"],
        time: "Half day to multi-day",
        level: "Easy",
        priority: "Destination Highlight",
        location: "Haa",
        summary:
          "One of western Bhutan's quieter valleys, combining traditional settlements, fields, sacred sites and forested highlands. Its strength is the slower rhythm rather than a single blockbuster attraction.",
        note: "An overnight stay gives a much stronger experience than a rushed day trip.",
        image: `${haaBase}/01_Haa_Valley_Panorama.jpg`,
      },
      {
        title: "Lhakhang Karpo - White Temple",
        tags: ["Temple", "Spiritual", "Heritage"],
        time: "45-60 min",
        level: "Easy",
        priority: "Must Visit",
        location: "Haa",
        summary:
          "Haa's iconic White Temple and one of the valley's principal sacred landmarks, deeply embedded in local religious identity.",
        note: "The complex remains religiously active.",
        image: `${haaBase}/02_Lhakhang_Karpo_White_Temple.jpg`,
      },
      {
        title: "Lhakhang Nagpo - Black Temple",
        tags: ["Temple", "Spiritual", "Heritage"],
        time: "30-45 min",
        level: "Easy",
        priority: "Must Visit",
        location: "Haa",
        summary:
          "The Black Temple, paired in local tradition with Lhakhang Karpo and deeply embedded in Haa's sacred landscape.",
        note: "Explain the religious and legendary context rather than treating the colour names as branding.",
        image: `${haaBase}/03_Lhakhang_Nagpo_Black_Temple.jpg`,
      },
      {
        title: "Wangchuck Lo Dzong / Haa Dzong - Exterior Context",
        tags: ["Dzong", "History", "Military Heritage"],
        time: "15-30 min",
        level: "Easy",
        priority: "Exterior / Contextual",
        location: "Haa",
        summary:
          "A historic dzong complex whose current functions mean it should be presented primarily through exterior and historical context.",
        note: "Do not promise unrestricted entry or photography.",
        image: `${haaBase}/04_Wangchuck_Lo_Dzong_Haa_Dzong.jpg`,
      },
      {
        title: "Haa Town",
        tags: ["Town", "Local Life", "Walking"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Recommended",
        location: "Haa",
        summary:
          "A small valley town where walking, cafes, shops and traditional buildings provide a slower local experience.",
        image: `${haaBase}/07_Haa_Town_Street.jpg`,
      },
      {
        title: "Katsho Village",
        tags: ["Village", "Culture", "Walking"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Hidden Gem",
        location: "Haa",
        summary:
          "A traditional village landscape near Haa's sacred sites, suitable for slow walks and architectural photography.",
      },
      {
        title: "Yangthang Village",
        tags: ["Village", "Rural Landscape"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Hidden Gem",
        location: "Haa",
        summary:
          "A quiet rural experience of farmhouses, cultivated land and local life beyond the standard Haa landmarks.",
        image: `${haaBase}/06_Haa_Town_and_Valley.jpg`,
      },
      {
        title: "Bali Lhakhang",
        tags: ["Temple", "Ancient Tradition"],
        time: "30-45 min",
        level: "Easy",
        priority: "Special Interest",
        location: "Haa",
        summary:
          "A community temple whose local history is associated with the early spread of Buddhism and a revered Maitreya image.",
      },
      {
        title: "Lungkha Lhakhang",
        tags: ["Temple", "Local Legend"],
        time: "30-45 min",
        level: "Easy",
        priority: "Special Interest",
        location: "Haa",
        summary:
          "A small local temple described by Haa Dzongkhag as more than two centuries old, with history preserved through community tradition.",
      },
      {
        title: "Juneydrak Hermitage",
        tags: ["Hermitage", "Hike", "Spiritual"],
        time: "2-4 hrs",
        level: "Moderate",
        priority: "Hidden Spiritual Experience",
        location: "Haa",
        summary:
          "A secluded hillside religious experience combining forest walking and a quieter atmosphere.",
        note: "Trail and access should be confirmed with a Haa-based guide.",
      },
      {
        title: "Haa Farmhouse / Approved Homestay",
        tags: ["Homestay", "Food", "Community"],
        time: "Evening / overnight",
        level: "Easy",
        priority: "Highly Recommended",
        location: "Haa",
        summary:
          "A local stay combining home-cooked food, traditional architecture and insight into agricultural routines.",
        note: "Use Department of Tourism-approved accommodation and set realistic comfort expectations.",
      },
      {
        title: "Haa River & Valley Walks",
        tags: ["Walking", "Landscape", "Photography"],
        time: "1-3 hrs",
        level: "Easy",
        priority: "Recommended",
        location: "Haa",
        summary:
          "Gentle walks linking town, fields, bridges, river sections and villages, ideal for low-impact exploration.",
        image: `${haaBase}/09_Haa_Valley_River_View.jpg`,
      },
      {
        title: "Chele La Pass from Haa",
        tags: ["Mountain Pass", "Scenic Drive", "Photography"],
        time: "1-2 hrs",
        level: "Easy; High Altitude",
        priority: "Highly Recommended",
        location: "Between Haa and Paro",
        summary:
          "The dramatic high pass linking Haa and Paro, with prayer flags and alpine scenery near 4,000 metres.",
        note: "Snow, wind, cloud and ice can change conditions quickly.",
        image: `${haaBase}/08_Chele_La_Pass.jpg`,
      },
      {
        title: "Cycling in Haa Valley",
        tags: ["Cycling", "Adventure", "Rural Landscape"],
        time: "2 hrs to full day",
        level: "Moderate",
        priority: "Active Experience",
        location: "Haa Valley",
        summary:
          "Quiet roads, fields and villages make Haa one of Bhutan's attractive areas for recreational cycling.",
      },
      {
        title: "Haa Tshechu",
        tags: ["Festival", "Religion", "Culture"],
        time: "19-21 Oct 2026",
        level: "Easy Viewing",
        priority: "Seasonal Highlight",
        location: "Lhakhang Karpo, Haa",
        summary:
          "Haa's main tshechu at Lhakhang Karpo, offering sacred dance and community gathering in a smaller valley setting.",
        note: "The official 2026 calendar is tentative.",
      },
      {
        title: "Haa Summer Festival / Seasonal Cultural Events",
        tags: ["Festival", "Food", "Highland Culture"],
        time: "Seasonal",
        level: "Easy Viewing",
        priority: "Seasonal Experience",
        location: "Haa",
        summary:
          "A seasonal celebration of Haa's food, culture and highland lifestyle when scheduled.",
        note: "Do not confuse it with the October Haa Tshechu; confirm annual dates.",
        image: "/Haa Summer Festival6.jpg",
      },
      {
        title: "Haapi Hoentoe & Haa Food Experiences",
        tags: ["Food", "Culinary Culture"],
        time: "1-2 hrs",
        level: "Easy",
        priority: "Signature Local Experience",
        location: "Haa",
        summary:
          "Taste Haa's distinctive buckwheat dumplings and other local dishes through a farmhouse meal or cooking experience.",
      },
      {
        title: "Ap Chundu Cultural Traditions",
        tags: ["Living Tradition", "Local Deity Culture"],
        time: "Special arrangement",
        level: "Context-Dependent",
        priority: "Special Interest",
        location: "Haa",
        summary:
          "Community-led interpretation of Haa's strong traditions associated with Ap Chundu and the relationship between sacred landscape and local identity.",
        note: "Do not stage sacred rituals or promise restricted ceremonies.",
      },
      {
        title: "Haa Nomadic & Highland Heritage",
        tags: ["Culture", "Highland Life"],
        time: "Half day / variable programme",
        level: "Variable",
        priority: "Emerging Experience",
        location: "Haa highlands",
        summary:
          "An emerging tourism theme around herding, highland routes, food and seasonal livelihoods, best delivered through real local hosts.",
      },
      {
        title: "Haa-Paro / Saga La Area Trekking Routes",
        tags: ["Trekking", "Forest", "High Pass"],
        time: "1-3 days",
        level: "Moderate-Challenging",
        priority: "Adventure Option",
        location: "Haa-Paro mountain landscapes",
        summary:
          "Short trekking routes connecting the Haa and Paro mountain landscapes through forest and high passes.",
        note: "Exact routing, camping and trail conditions should be confirmed with an accredited operator.",
      },
    ],
    stayPlanning: [
      "Day trip: Chele La - Lhakhang Karpo - Lhakhang Nagpo - Haa town - return.",
      "1 night: Add farmhouse/homestay, local dinner and morning valley walk.",
      "2 nights: Add cycling, Juneydrak, highland experience or deeper village programme.",
    ],
    seasonality:
      "Spring and autumn are comfortable for walking and valley views. Summer is lush but wetter. Winter is quiet and atmospheric, while Chele La can receive snow or ice.",
    events: [
      { name: "Haa Tshechu", date: "19-21 October 2026", note: "Tentative; reconfirm before booking." },
      { name: "Haa Summer Festival / seasonal cultural event", date: "Confirm annually", note: "Do not hard-code an unverified date." },
    ],
    faqs: [
      { question: "Is Haa worth staying overnight?", answer: "Yes. A day trip shows the main temples, but an overnight stay allows food, villages and the quiet evening atmosphere." },
      { question: "How do I reach Haa from Paro?", answer: "The classic scenic route crosses Chele La, weather permitting." },
      { question: "When is Haa Tshechu in 2026?", answer: "The official tentative calendar lists 19-21 October 2026 at Lhakhang Karpo." },
      { question: "What local food should visitors try?", answer: "Haapi Hoentoe, a buckwheat dumpling associated with Haa, is one of the valley's signature dishes." },
    ],
  },
];
