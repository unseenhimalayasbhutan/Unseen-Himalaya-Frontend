import type { Metadata } from "next";
import {
  CalendarDays,
  Clock,
  Hotel,
  Mail,
  MapPin,
  Route,
  Users,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  TourDetailTemplate,
  type TourDetailFact,
  type TourDetailHighlight,
  type TourDetailInfo,
  type TourDetailItineraryDay,
  type TourDetailPrice,
} from "../../components/TourDetailTemplate";
import { siteConfig } from "../../siteConfig";

export const metadata: Metadata = {
  title: "Essence of Bhutan Group Tour",
  description:
    "Join the Essence of Bhutan Group Tour from 20-26 October 2026, a 7-day journey through Thimphu, Punakha, Phobjikha, Paro, and Tiger's Nest.",
  alternates: {
    canonical: "/upcoming-events/essence-of-bhutan-group-tour",
  },
  openGraph: {
    title: `Essence of Bhutan Group Tour | ${siteConfig.name}`,
    description:
      "A scheduled 7-day Bhutan group departure from 20-26 October 2026 with Thimphu, Punakha, Phobjikha, Paro, and Tiger's Nest.",
    url: "/upcoming-events/essence-of-bhutan-group-tour",
    images: [
      {
        url: "/66bf02f4ff8c371f83c79a4f_66bef5aab388dabf85692211_Paro-Taktsang-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Tiger's Nest monastery in Bhutan",
      },
    ],
  },
};

const heroImage = {
  src: "/66bf02f4ff8c371f83c79a4f_66bef5aab388dabf85692211_Paro-Taktsang-1.jpeg",
  alt: "Tiger's Nest monastery and prayer flags in Bhutan",
};

const routeText = "Phuentsholing - Thimphu - Punakha - Phobjikha - Paro";

const facts: readonly TourDetailFact[] = [
  { icon: CalendarDays, label: "Departure", value: "20 October 2026" },
  { icon: Clock, label: "Duration", value: "7 Days / 6 Nights" },
  { icon: Route, label: "Route", value: "Phuentsholing - Paro" },
  { icon: Users, label: "Group", value: "Minimum 12 guests" },
  { icon: Hotel, label: "Accommodation", value: "Twin sharing + Phobjikha homestay" },
  { icon: MapPin, label: "Travel Style", value: "Guided group journey" },
] as const;

const prices: readonly TourDetailPrice[] = [
  {
    market: "India",
    amount: "INR 36,104 per person",
    note: "Published India-market group tour rate.",
  },
  {
    market: "Bangladesh",
    amount: "Approx. BDT 48,000 per person",
    note: "Approximate Bangladesh-market group tour rate.",
  },
] as const;

const whyItems: readonly TourDetailHighlight[] = [
  {
    title: "Explore Bhutan Together",
    text: "Travel through several of Bhutan's most beautiful valleys with a small scheduled group.",
  },
  {
    title: "Guided From Start to Finish",
    text: "A certified guide and professional driver support the journey from arrival to departure.",
  },
  {
    title: "Fixed Departure, Easy Planning",
    text: "One confirmed route, a clear travel window and a simple enquiry path for joining.",
  },
] as const;

const highlights: readonly TourDetailHighlight[] = [
  {
    image: { src: "/Dochula by Marcus Westberg71.jpg", alt: "Dochula Pass in Bhutan" },
    title: "Dochula Pass",
    text: "Panoramic Himalayan views and 108 chortens.",
  },
  {
    image: {
      src: "/Punakha Dzong Twilight  DOT AA Original Bhutan Travels.jpg",
      alt: "Punakha Dzong beside the river",
    },
    title: "Punakha Dzong",
    text: "A masterpiece of Bhutanese architecture.",
  },
  {
    image: {
      src: "/Phobjikha-valley-by-Alicia-Warner-56.jpg",
      alt: "Phobjikha Valley landscape",
    },
    title: "Phobjikha Valley",
    text: "A serene glacial valley and black-necked crane habitat.",
  },
  {
    image: {
      src: "/Paro Dzong  DOT AA Original Bhutan Travels.jpg",
      alt: "Paro Dzong in Bhutan",
    },
    title: "Paro",
    text: "Dzongs, museums and valley views in Bhutan's western heartland.",
  },
  {
    image: {
      src: "/Paro_2026_Web_Optimized_Images/Paro/01_Tigers_Nest_Paro_Taktsang.jpg",
      alt: "Tiger's Nest monastery above Paro Valley",
    },
    title: "Tiger's Nest",
    text: "An unforgettable hike to Bhutan's most iconic sacred monastery.",
  },
  {
    image: { src: "/IMG_20231021_170519.jpg", alt: "Traditional Bhutan hot stone bath" },
    title: "Hot Stone Bath",
    text: "A complimentary traditional Bhutanese wellness experience.",
  },
] as const;

const itinerary: readonly TourDetailItineraryDay[] = [
  {
    day: "01",
    image: {
      src: "/Punakha Dzong Twilight  DOT AA Original Bhutan Travels.jpg",
      alt: "Bhutan dzong and riverside valley",
    },
    title: "Arrival in Phuentsholing",
    text: "Arrive in Phuentsholing and transfer to your hotel. Evening at leisure to relax and prepare for the journey ahead.",
    details: [
      "Meet the team at Phuentsholing and complete entry formalities.",
      "Transfer to the hotel for check-in and a short tour briefing.",
      "Evening free for rest, border-town exploration, or last-minute preparation.",
    ],
    overnight: "Phuentsholing",
  },
  {
    day: "02",
    image: {
      src: "/Thimphu City Morning Light  DOT AA Original Bhutan Travels.jpg",
      alt: "Thimphu city in morning light",
    },
    title: "Phuentsholing to Thimphu",
    text: "Drive to Thimphu. Explore key attractions in Bhutan's capital city.",
    details: [
      "Begin the scenic drive from Phuentsholing to Thimphu through forested valleys and mountain roads.",
      "Stop for viewpoints, tea breaks, and photo moments along the route.",
      "Arrive in Thimphu and visit selected city highlights as time permits.",
    ],
    overnight: "Thimphu",
  },
  {
    day: "03",
    image: {
      src: "/Punakha_Website_Photos_2026/01_Punakha_Dzong.jpg",
      alt: "Punakha Dzong in Bhutan",
    },
    title: "Thimphu to Punakha",
    text: "Drive to Punakha via Dochula Pass. Visit Punakha Dzong.",
    details: [
      "Travel across Dochula Pass, known for its 108 chortens and Himalayan views on clear days.",
      "Continue down to the warmer Punakha Valley.",
      "Visit Punakha Dzong, one of Bhutan's most important and beautiful fortress-monasteries.",
    ],
    overnight: "Punakha",
  },
  {
    day: "04",
    image: {
      src: "/Phobjikha-valley-by-Alicia-Warner-56.jpg",
      alt: "Phobjikha Valley in Bhutan",
    },
    title: "Punakha to Phobjikha",
    text: "Drive to Phobjikha Valley. Explore the valley and visit Gangtey Monastery.",
    details: [
      "Leave Punakha for the glacial valley of Phobjikha, home to black-necked cranes in season.",
      "Visit Gangtey Monastery, a major spiritual landmark overlooking the valley.",
      "Enjoy gentle valley exploration and time to take in the rural landscape.",
    ],
    overnight: "Phobjikha",
  },
  {
    day: "05",
    image: {
      src: "/Paro Dzong  DOT AA Original Bhutan Travels.jpg",
      alt: "Paro Dzong and valley",
    },
    title: "Phobjikha to Paro",
    text: "Drive to Paro. En route, enjoy scenic views and stop at key landmarks.",
    details: [
      "Drive from Phobjikha toward Paro with scenic stops along the way.",
      "Revisit changing mountain scenery as the route passes valleys, villages, and rivers.",
      "Arrive in Paro and settle in for the final two nights of the journey.",
    ],
    overnight: "Paro",
  },
  {
    day: "06",
    image: {
      src: "/Paro_2026_Web_Optimized_Images/Paro/01_Tigers_Nest_Paro_Taktsang.jpg",
      alt: "Tiger's Nest monastery in Paro",
    },
    title: "Paro Sightseeing",
    text: "Visit Paro Dzong, National Museum and hike to the iconic Tiger's Nest Monastery.",
    details: [
      "Hike to Taktsang Monastery, Bhutan's iconic Tiger's Nest, perched above the Paro Valley.",
      "Visit Paro Dzong and the National Museum for cultural and historical context.",
      "End the day with a complimentary traditional hot stone bath experience.",
    ],
    overnight: "Paro",
  },
  {
    day: "07",
    image: heroImage,
    title: "Departure",
    text: "Transfer to the airport or onward border point with unforgettable memories of Bhutan.",
    details: [
      "Enjoy breakfast and check out from the hotel.",
      "Transfer to Paro Airport or continue to the onward border point, depending on your departure plan.",
      "Depart with photographs, stories, and shared memories from the journey.",
    ],
    overnight: "Departure",
  },
] as const;

const inclusions = [
  "All accommodation in 3-star hotels (twin sharing)",
  "All meals (breakfast, lunch and dinner)",
  "Experienced English-speaking guide",
  "All transfers and sightseeing as per itinerary",
  "Entry fees to monuments and attractions",
  "Complimentary traditional hot stone bath",
] as const;

const exclusions = [
  "International and domestic airfare",
  "Bhutan visa fee",
  "Travel insurance",
  "Personal expenses (shopping, beverages, etc.)",
  "Tips for guide and driver",
  "Any services not mentioned in inclusions",
] as const;

const importantInfo: readonly TourDetailInfo[] = [
  {
    title: "Payment",
    body: "A confirmed booking and payment schedule will be shared during enquiry based on rooming, guest count and final travel arrangements.",
  },
  {
    title: "Cancellation",
    body: "Cancellation terms are confirmed before payment so guests understand applicable timelines, refunds and supplier conditions.",
  },
  {
    title: "Hotels",
    body: "The package is based on 3-star accommodation on twin sharing, with a Phobjikha homestay-style experience where applicable.",
  },
  {
    title: "SDF",
    body: "Any Sustainable Development Fee rules applicable to your nationality and travel dates will be confirmed before booking.",
  },
  {
    title: "Travel Documents",
    body: "Guests should carry valid travel documents required for Bhutan entry, along with any personal insurance documents.",
  },
  {
    title: "Single Supplement",
    body: "Single-room requests can be quoted separately depending on availability and the confirmed hotel plan.",
  },
] as const;

export default function EssenceOfBhutanGroupTourPage() {
  return (
    <>
      <Header />
      <TourDetailTemplate
        eyebrow="Group Departure"
        title="Essence of Bhutan"
        date="20 - 26 October 2026"
        meta={`7 Days / 6 Nights | ${routeText}`}
        description="Join a scheduled 7-day group journey through Bhutan's western valleys, sacred landmarks and mountain landscapes, with guided travel from Phuentsholing to Paro."
        heroImage={heroImage}
        actions={[
          { href: "#itinerary", label: "View Itinerary", variant: "secondary" },
          {
            href: siteConfig.contact.whatsappHref,
            label: "Enquire Now",
            icon: FaWhatsapp,
            external: true,
          },
        ]}
        facts={facts}
        prices={prices}
        priceNote="Price is based on the scheduled group departure conditions and twin-sharing accommodation. Final quotation confirms rooming, inclusions and any applicable supplements."
        whyItems={whyItems}
        highlights={highlights}
        itinerary={itinerary}
        inclusions={inclusions}
        exclusions={exclusions}
        importantInfo={importantInfo}
        finalCta={{
          eyebrow: "Interested in this journey?",
          title: "Tell us your travel dates and preferences.",
          text: "Our Bhutan-based team will help you confirm availability, rooming and the next step for this October group departure.",
          image: {
            src: "/Phobjikha-valley-by-Alicia-Warner-75.jpg",
            alt: "Bhutan mountain valley",
          },
          actions: [
            {
              href: siteConfig.contact.whatsappHref,
              label: "WhatsApp Us",
              icon: FaWhatsapp,
              external: true,
            },
            {
              href: siteConfig.contact.emailHref,
              label: "Email Us",
              icon: Mail,
              variant: "secondary",
            },
          ],
        }}
      />
      <Footer />
    </>
  );
}
