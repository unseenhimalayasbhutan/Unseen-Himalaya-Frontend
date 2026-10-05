import type { Metadata } from "next";
import type { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  Download,
  Hotel,
  Mail,
  Route,
  Tag,
  Users,
  XCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
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

const heroImage =
  "/66bf02f4ff8c371f83c79a4f_66bef5aab388dabf85692211_Paro-Taktsang-1.jpeg";

const overviewImage = "/Punakha Dzong Twilight  DOT AA Original Bhutan Travels.jpg";

const glanceItems = [
  { icon: CalendarDays, label: "Dates", value: "20 - 26 October 2026" },
  { icon: Clock, label: "Duration", value: "7 Days / 6 Nights" },
  {
    icon: Route,
    label: "Route",
    value: "Phuentsholing - Thimphu - Punakha - Phobjikha - Paro",
  },
  { icon: Users, label: "Group Size", value: "Minimum 12 participants" },
  { icon: Tag, label: "Tour Code", value: "TUH-EOB-1026" },
  { icon: Hotel, label: "Accommodation", value: "3-star hotels (twin sharing)" },
  { icon: Tag, label: "India Price", value: "INR 36,104 per person" },
  { icon: Tag, label: "Bangladesh Price", value: "BDT 48,000 per person" },
] as const;

const highlights = [
  {
    image: "/Dochula by Marcus Westberg71.jpg",
    title: "Dochula Pass",
    text: "Panoramic Himalayan views and 108 chortens",
  },
  {
    image: "/Punakha Dzong Twilight  DOT AA Original Bhutan Travels.jpg",
    title: "Punakha Dzong",
    text: "A masterpiece of Bhutanese architecture",
  },
  {
    image: "/Phobjikha-valley-by-Alicia-Warner-56.jpg",
    title: "Phobjikha Valley",
    text: "A serene glacial valley and black-necked crane habitat",
  },
  {
    image:
      "/Wangdue_Gangtey_Phobjikha_2026_Web_Optimized_Images/Web_Optimized/Gangtey_Phobjikha/06_Gangtey_Monastery_Front.jpg",
    title: "Gangtey Monastery",
    text: "A spiritual centre in the heart of Phobjikha Valley",
  },
  {
    image: "/Paro Dzong  DOT AA Original Bhutan Travels.jpg",
    title: "Paro Dzong & Museum",
    text: "Rich history and cultural heritage",
  },
  {
    image:
      "/Paro_2026_Web_Optimized_Images/Paro/01_Tigers_Nest_Paro_Taktsang.jpg",
    title: "Tiger's Nest Hike",
    text: "An unforgettable hike to a sacred monastery",
  },
  {
    image: "/IMG_20231021_170519.jpg",
    title: "Complimentary Hot Stone Bath",
    text: "A traditional Bhutanese wellness experience",
  },
] as const;

const journeyImages = [
  {
    image: "/National Memorial Chorten Thimphu  DOT AA Original Bhutan Travels.jpg",
    alt: "National Memorial Chorten in Thimphu",
  },
  {
    image:
      "/Paro_2026_Web_Optimized_Images/Paro/03_National_Museum_Ta_Dzong.jpg",
    alt: "National Museum of Bhutan",
  },
  {
    image: "/Phobjikha-valley-by-Alicia-Warner-34.jpg",
    alt: "Phobjikha Valley landscape",
  },
  {
    image: "/Punakha_Website_Photos_2026/04_Khamsum_Yulley_Namgyal_Chorten.jpg",
    alt: "Bhutanese temple and riverside landscape",
  },
] as const;

const itinerary = [
  {
    day: "01",
    image: "/Punakha Dzong Twilight  DOT AA Original Bhutan Travels.jpg",
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
    image: "/Thimphu City Morning Light  DOT AA Original Bhutan Travels.jpg",
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
    image: "/Punakha_Website_Photos_2026/01_Punakha_Dzong.jpg",
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
    image: "/Phobjikha-valley-by-Alicia-Warner-56.jpg",
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
    image: "/Paro Dzong  DOT AA Original Bhutan Travels.jpg",
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
    image:
      "/Paro_2026_Web_Optimized_Images/Paro/01_Tigers_Nest_Paro_Taktsang.jpg",
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

export default function EssenceOfBhutanGroupTourPage() {
  return (
    <>
      <Header />

      <main className="essence-landing-page">
        <section className="essence-hero" aria-labelledby="essence-title">
          <Image
            src={heroImage}
            alt="Tiger's Nest monastery and prayer flags in Bhutan"
            fill
            preload
            sizes="100vw"
            className="essence-hero-image"
          />
          <div className="essence-hero-overlay" aria-hidden="true" />

          <div className="essence-shell essence-hero-content">
            <nav className="essence-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight aria-hidden="true" />
              <Link href="/upcoming-events">Upcoming Events</Link>
              <ChevronRight aria-hidden="true" />
              <span>The Essence of Bhutan</span>
            </nav>

            <span className="essence-eyebrow">Group Tour</span>
            <h1 id="essence-title">The Essence of Bhutan</h1>
            <strong className="essence-hero-date">20 - 26 October 2026</strong>
            <p className="essence-hero-meta">
              7 Days / 6 Nights <span aria-hidden="true">-</span> Phuentsholing{" "}
              <span aria-hidden="true">-</span> Thimphu{" "}
              <span aria-hidden="true">-</span> Punakha{" "}
              <span aria-hidden="true">-</span> Phobjikha{" "}
              <span aria-hidden="true">-</span> Paro
            </p>

            <div className="essence-actions">
              <a
                href={siteConfig.contact.whatsappHref}
                className="essence-btn essence-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire Now
                <ChevronRight aria-hidden="true" />
              </a>
              <a href="#itinerary" className="essence-btn essence-btn-secondary">
                <Download aria-hidden="true" />
                Download Itinerary
              </a>
            </div>
          </div>
        </section>

        <section className="essence-section essence-overview-section">
          <div className="essence-shell essence-overview-grid">
            <div className="essence-copy-block">
              <SectionTitle title="Tour Overview" />
              <p>
                Join our small group tour, The Essence of Bhutan, a carefully
                curated 7-day journey that takes you through Bhutan&apos;s most
                iconic destinations. From the bustling town of Phuentsholing to
                the serene valleys of Phobjikha and the cultural heart of Paro,
                this journey offers the perfect blend of culture, nature and
                authentic Bhutanese experiences.
              </p>
              <p>
                Travel with like-minded explorers, experience Bhutan&apos;s warm
                hospitality, visit sacred monasteries and dzongs, and take in
                breathtaking Himalayan landscapes, all in one unforgettable
                journey.
              </p>
            </div>

            <figure className="essence-overview-card">
              <Image
                src={overviewImage}
                alt="Punakha Dzong beside the river and mountains"
                fill
                sizes="(max-width: 900px) 100vw, 460px"
              />
              <figcaption>
                Iconic landmarks, serene valleys and authentic experiences
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="essence-section essence-glance-section">
          <div className="essence-shell essence-bordered-panel">
            <SectionTitle title="Tour at a Glance" />
            <div className="essence-glance-grid">
              {glanceItems.map((item) => (
                <InfoCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="essence-section">
          <div className="essence-shell">
            <div className="essence-section-head">
              <SectionTitle title="Highlights & Experiences" />
              <span>A journey through Bhutan&apos;s most iconic places</span>
            </div>

            <div className="essence-highlight-grid">
              {highlights.map((highlight) => (
                <article key={highlight.title} className="essence-highlight-card">
                  <div className="essence-highlight-image">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      sizes="(max-width: 900px) 50vw, 160px"
                    />
                  </div>
                  <h2>{highlight.title}</h2>
                  <p>{highlight.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="essence-section essence-gallery-section">
          <div className="essence-shell">
            <SectionTitle title="A Glimpse of the Journey" />
            <div className="essence-gallery-grid">
              {journeyImages.map((item) => (
                <div key={item.image} className="essence-gallery-image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 50vw, 280px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="itinerary" className="essence-section essence-itinerary-section">
          <div className="essence-shell">
            <SectionTitle title="Seven-Day Itinerary" />
            <div className="essence-itinerary-list">
              {itinerary.map((day) => (
                <article key={day.day} className="essence-itinerary-row">
                  <div className="essence-day-mark">
                    <span>Day</span>
                    <strong>{day.day}</strong>
                  </div>
                  <div className="essence-itinerary-thumb">
                    <Image
                      src={day.image}
                      alt={day.title}
                      fill
                      sizes="(max-width: 720px) 110px, 170px"
                    />
                  </div>
                  <div className="essence-itinerary-copy">
                    <h2>{day.title}</h2>
                    <p>{day.text}</p>
                    <ul>
                      {day.details.map((detail) => (
                        <li key={detail}>
                          <CheckCircle aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <small>Overnight: {day.overnight}</small>
                  </div>
                  <ChevronRight aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="essence-section essence-lists-section">
          <div className="essence-shell essence-list-grid">
            <Checklist title="Inclusions" icon={CheckCircle} items={inclusions} />
            <Checklist title="Exclusions" icon={XCircle} items={exclusions} />
          </div>
        </section>

        <section className="essence-final-cta">
          <Image
            src="/Phobjikha-valley-by-Alicia-Warner-75.jpg"
            alt="Bhutan mountain valley"
            fill
            sizes="100vw"
          />
          <div className="essence-final-overlay" aria-hidden="true" />
          <div className="essence-shell essence-final-content">
            <span className="essence-eyebrow">Ready to join?</span>
            <h2>Your October journey starts with one enquiry.</h2>
            <p>Limited spots available for this group departure.</p>

            <div className="essence-actions">
              <a
                href={siteConfig.contact.whatsappHref}
                className="essence-btn essence-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Availability
                <ChevronRight aria-hidden="true" />
              </a>
              <a href={siteConfig.contact.emailHref} className="essence-btn essence-btn-secondary">
                <Mail aria-hidden="true" />
                Email Us
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                className="essence-btn essence-btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="essence-title">
      <h2>{title}</h2>
      <span aria-hidden="true" />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: ElementType;
  label: string;
  value: string;
}) {
  return (
    <article className="essence-info-card">
      <Icon aria-hidden="true" />
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </article>
  );
}

function Checklist({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: ElementType;
  items: readonly string[];
}) {
  return (
    <article className="essence-checklist">
      <h2>
        <Icon aria-hidden="true" />
        {title}
      </h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
