import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarDays,
  Car,
  CheckCircle,
  ChevronRight,
  Hotel,
  Landmark,
  Mail,
  MapPin,
  Mountain,
  Route,
  Users,
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

const glanceItems = [
  { label: "Dates", value: "20-26 October 2026" },
  { label: "Duration", value: "7 days / 6 nights" },
  {
    label: "Route",
    value: "Phuentsholing to Thimphu to Punakha to Phobjikha to Paro",
  },
  { label: "Group Requirement", value: "Minimum 12 guests" },
  { label: "Accommodation", value: "Twin sharing, including Phobjikha homestay" },
  { label: "Bangladesh Price", value: "Approximately BDT 48,000 per person" },
  { label: "India Price", value: "INR 36,104 per person" },
] as const;

const reasons = [
  {
    title: "See more of Bhutan in one trip",
    text: "Experience Thimphu, Punakha, Phobjikha Valley, Paro, and the landscapes between them in one scheduled journey.",
  },
  {
    title: "Travel with a guide",
    text: "A certified guide and professional driver help with routes, context, sightseeing, and smooth day-to-day travel.",
  },
  {
    title: "Share the experience",
    text: "A group tour brings travelers together for mountain passes, valley walks, local meals, and the Tiger's Nest hike.",
  },
  {
    title: "Turn someday into a date",
    text: "This October departure gives you a confirmed window, route, and reason to finally plan Bhutan.",
  },
] as const;

const experiences = [
  "Take in mountain views and 108 chortens at Dochula Pass.",
  "Explore Punakha Dzong beside the meeting of two rivers.",
  "Walk through Phobjikha Valley and visit Gangtey Monastery.",
  "Discover local life and landmarks in Thimphu.",
  "Explore Paro Dzong, the National Museum, and Paro town.",
  "Hike to Taktsang Monastery, better known as Tiger's Nest.",
  "Unwind with a complimentary traditional hot stone bath.",
] as const;

const itinerary = [
  {
    day: "Day 1 - 20 October",
    title: "Arrive in Phuentsholing and travel to Thimphu",
    overnight: "Thimphu",
    activities: [
      "Meet the team at the Phuentsholing border and complete entry formalities.",
      "Receive a traditional welcome before the scenic drive to Bhutan's capital.",
      "Stop at Karbandi Monastery along the way.",
      "Settle into Thimphu and enjoy an evening walk through the city and local markets.",
    ],
  },
  {
    day: "Day 2 - 21 October",
    title: "Explore Thimphu",
    overnight: "Thimphu",
    activities: [
      "Visit the Folk Heritage Museum.",
      "Continue to the Buddha Dordenma viewpoint overlooking the valley.",
      "See Motithang Takin Preserve and drive past the National Memorial Chorten.",
      "Explore the Centenary Farmers' Market if open on the day of visit.",
    ],
  },
  {
    day: "Day 3 - 22 October",
    title: "Cross Dochula Pass to Punakha",
    overnight: "Punakha",
    activities: [
      "Leave Thimphu for Punakha via Dochula Pass.",
      "Visit Punakha Dzong and walk across the Punakha Suspension Bridge.",
      "Stop at Lamperi Botanical Garden along the route.",
      "Optional river rafting can be arranged at additional cost.",
    ],
  },
  {
    day: "Day 4 - 23 October",
    title: "Punakha to Phobjikha Valley",
    overnight: "Phobjikha",
    activities: [
      "Visit Chimi Lhakhang and walk through the nearby village area.",
      "Travel into the mountains toward Phobjikha.",
      "Visit Gangtey Monastery, follow the Gangtey Nature Trail, and stop at the Crane Information Centre.",
      "Enjoy a traditional dinner and stay in a local homestay.",
    ],
  },
  {
    day: "Day 5 - 24 October",
    title: "Travel to Paro",
    overnight: "Paro",
    activities: [
      "Enjoy the changing scenery on the drive to Paro.",
      "Visit Rinpung Dzong and the National Museum.",
      "Explore Paro town and its handicraft shops.",
      "Try traditional cultural activities when available.",
    ],
  },
  {
    day: "Day 6 - 25 October",
    title: "Hike to Tiger's Nest",
    overnight: "Paro",
    activities: [
      "Hike to Taktsang Monastery above the Paro Valley.",
      "Stop at the cafeteria viewpoint along the route.",
      "Visit Kyichu Lhakhang later in the day.",
      "Relax with a complimentary traditional hot stone bath.",
    ],
  },
  {
    day: "Day 7 - 26 October",
    title: "Departure",
    overnight: "Departure",
    activities: [
      "After breakfast, travel to the Phuentsholing border.",
      "Depart Bhutan with photographs, stories, and shared memories from the journey.",
    ],
  },
] as const;

const inclusions = [
  "Six nights of accommodation on a twin-sharing basis.",
  "Meals during the tour.",
  "A certified guide.",
  "Transportation with a professional driver.",
  "Border transfers.",
  "Sightseeing listed in the itinerary.",
  "One complimentary hot stone bath.",
  "Sustainable Development Fee (SDF).",
] as const;

const exclusions = [
  "Monument and museum entry fees.",
  "Travel insurance.",
  "Personal expenses.",
  "Tips and gratuities.",
  "Optional river rafting.",
  "Activities or services not listed as included.",
  "Private single room supplement, subject to availability.",
] as const;

const sampleImages = [
  "/Thimphu City Morning Light  DOT AA Original Bhutan Travels.jpg",
  "/Punakha Dzong Twilight  DOT AA Original Bhutan Travels.jpg",
  "/Phobjikha-valley-by-Alicia-Warner-56.jpg",
  "/Paro Dzong  DOT AA Original Bhutan Travels.jpg",
  "/Taktshang topdown  DOT AA Original Bhutan Travels.jpg",
] as const;

export default function EssenceOfBhutanGroupTourPage() {
  return (
    <>
      <Header />

      <main className="upcoming-events-page upcoming-events-poster-page essence-tour-page">
        <article className="upcoming-events-poster" aria-labelledby="essence-title">
          <section className="upcoming-events-poster-hero">
            <div className="upcoming-events-poster-hero-shade" aria-hidden="true" />

            <div className="upcoming-events-poster-hero-copy">
              <span className="upcoming-events-red-label">Group Tour</span>
              <h1 id="essence-title">
                The Essence of Bhutan
                <span>20-26 October 2026</span>
              </h1>

              <div className="upcoming-events-poster-meta" aria-label="Tour details">
                <span>
                  <CalendarDays aria-hidden="true" />
                  7 days / 6 nights
                </span>
                <span>
                  <MapPin aria-hidden="true" />
                  Phuentsholing to Paro
                </span>
              </div>

              <p>
                Cross mountain passes, walk peaceful valleys, explore historic
                dzongs, and hike to Tiger&apos;s Nest.
              </p>

              <div className="upcoming-events-poster-actions">
                <a href="#tour-itinerary" className="upcoming-events-gold-btn">
                  View Itinerary
                  <ChevronRight aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.contact.whatsappHref}
                  className="upcoming-events-outline-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </section>

          <section className="upcoming-events-trust-strip" aria-label="Why join this group tour">
            <PosterTrust
              icon={Mountain}
              title="One Scheduled Departure"
              text="This group journey departs on 20 October 2026, with a minimum of 12 guests."
            />
            <PosterTrust
              icon={Route}
              title="Classic Bhutan Route"
              text="Travel from Phuentsholing through Thimphu, Punakha, Phobjikha, and Paro."
            />
            <PosterTrust
              icon={Users}
              title="Guided Group Travel"
              text="Share the journey with a certified guide, professional driver, and fellow travelers."
            />
          </section>

          <section className="upcoming-events-poster-section">
            <PosterTitle title="Tour at a Glance" />
            <div className="essence-glance-grid">
              {glanceItems.map((item) => (
                <article key={item.label} className="essence-glance-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
            <p className="essence-tour-note">
              The Bangladesh price is an indicative taka conversion. Your
              confirmed quotation will state the final price and payment terms.
              Rates depend on hotel availability and any changes in supplier or
              government charges.
            </p>
          </section>

          <section className="upcoming-events-poster-section">
            <PosterTitle title="Why Join This Journey?" />
            <div className="upcoming-events-package-cards essence-reason-grid">
              {reasons.map((reason) => (
                <article key={reason.title} className="upcoming-events-tier-card essence-reason-card">
                  <h2>{reason.title}</h2>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="upcoming-events-poster-section">
            <PosterTitle title="The Experiences You Will Remember" />
            <div className="upcoming-events-icon-row essence-experience-row">
              <EventIcon icon={Mountain} label={experiences[0]} />
              <EventIcon icon={Landmark} label={experiences[1]} />
              <EventIcon icon={Route} label={experiences[2]} />
              <EventIcon icon={MapPin} label={experiences[3]} />
              <EventIcon icon={Hotel} label={experiences[4]} />
              <EventIcon icon={Car} label={experiences[5]} />
              <EventIcon icon={CheckCircle} label={experiences[6]} />
            </div>
          </section>

          <section className="upcoming-events-poster-section">
            <PosterTitle title="Journey Preview" />
            <div className="upcoming-events-experience-strip">
              {sampleImages.map((image, index) => (
                <PosterImage
                  key={image}
                  src={image}
                  alt={`Essence of Bhutan group tour preview ${index + 1}`}
                  className="upcoming-events-experience-image"
                />
              ))}
            </div>
          </section>

          <section id="tour-itinerary" className="upcoming-events-poster-section upcoming-events-compact-details-section">
            <PosterTitle title="Your Seven-Day Itinerary" />
            <div className="upcoming-events-detail-itinerary upcoming-events-detail-itinerary-compact">
              {itinerary.map((day) => (
                <article key={day.day}>
                  <span>{day.day}</span>
                  <div>
                    <h3>{day.title}</h3>
                    <ul>
                      {day.activities.map((activity) => (
                        <li key={activity}>
                          <CheckCircle aria-hidden="true" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                    <small className="essence-overnight">Overnight: {day.overnight}</small>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="upcoming-events-poster-section upcoming-events-compact-details-section">
            <PosterTitle title="Inclusions & Exclusions" />
            <div className="upcoming-events-details-grid upcoming-events-details-grid-compact">
              <PosterList title="What Your Tour Includes" items={inclusions} />
              <PosterList title="What Is Not Included?" items={exclusions} tone="red" />
            </div>
          </section>

          <section className="upcoming-events-ready-panel">
            <span>Your October journey starts with one enquiry</span>
            <small>
              Tell us whether you are travelling from Bangladesh or India and
              how many people are joining you.
            </small>

            <div className="upcoming-events-ready-actions">
              <a
                href={siteConfig.contact.whatsappHref}
                className="upcoming-events-gold-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask About Availability
                <ChevronRight aria-hidden="true" />
              </a>
              <a href={siteConfig.contact.emailHref} className="upcoming-events-outline-btn">
                <Mail aria-hidden="true" />
                Email Us
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                className="upcoming-events-call-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

function PosterImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string | null;
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div className={`${className} upcoming-events-image-slot`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          {...(priority ? { preload: true } : { loading: "lazy" as const })}
          sizes="(max-width: 900px) calc(100vw - 24px), 1100px"
        />
      ) : null}
    </div>
  );
}

function PosterTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="upcoming-events-panel-title">
      <span aria-hidden="true" />
      <h2>
        {title}
        {subtitle ? <small>{subtitle}</small> : null}
      </h2>
      <span aria-hidden="true" />
    </div>
  );
}

function PosterTrust({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Mountain;
  title: string;
  text: string;
}) {
  return (
    <article>
      <Icon aria-hidden="true" />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
}

function PosterList({
  title,
  items,
  tone = "gold",
}: {
  title: string;
  items: readonly string[];
  tone?: "gold" | "red";
}) {
  return (
    <article className={`upcoming-events-detail-list upcoming-events-detail-list-${tone}`}>
      <h3>{title}</h3>
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

function EventIcon({
  icon: Icon,
  label,
}: {
  icon: typeof CalendarDays;
  label: string;
}) {
  return (
    <div className="upcoming-events-icon-item">
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
