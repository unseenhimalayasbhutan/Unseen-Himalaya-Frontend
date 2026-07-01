"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Compass,
  MapPin,
  Mountain,
  Sparkles,
  Star,
} from "lucide-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";

type FestivalEvent = {
  date: string;
  title: string;
  location: string;
  description: string;
};

type FestivalMonth = {
  month: string;
  season: string;
  intro: string;
  events: FestivalEvent[];
};

export default function FestivalCalendarPage() {
  const [activeMonth, setActiveMonth] = useState(festivalMonths[0]?.month || "");

  const selectedMonth =
    festivalMonths.find((month) => month.month === activeMonth) ||
    festivalMonths[0];

  const totalEvents = festivalMonths.reduce(
    (total, month) => total + month.events.length,
    0
  );

  const busiestMonth = festivalMonths.reduce((current, month) =>
    month.events.length > current.events.length ? month : current
  );

  return (
    <>
      <Header />

      <main className="festival-calendar-page festival-calendar-redesign-page">
        <section className="festival-calendar-redesign-hero">
          <div className="festival-calendar-redesign-hero-bg" aria-hidden="true" />

          <div className="container festival-calendar-redesign-hero-grid">
            <div className="festival-calendar-redesign-hero-content">
              <div className="festival-calendar-redesign-eyebrow">
                <Sparkles aria-hidden="true" />
                <span>Bhutan Festival Calendar</span>
              </div>

              <h1>Plan your Bhutan journey around sacred festivals.</h1>

              <p>
                Explore Bhutan’s major tsechus, cultural celebrations, sacred
                ceremonies, national holidays, nature festivals, and seasonal
                highlights from spring to winter.
              </p>

              <div className="festival-calendar-redesign-hero-actions">
                <a href="#festival-calendar" className="festival-calendar-redesign-btn-primary">
                  Explore Calendar
                  <ArrowRight aria-hidden="true" />
                </a>

                <Link href="/contact" className="festival-calendar-redesign-btn-secondary">
                  Plan Festival Tour
                </Link>
              </div>
            </div>

            <aside className="festival-calendar-redesign-hero-card">
              <span>Festival Planning</span>
              <strong>{totalEvents}+ listed events</strong>
              <p>
                Use this calendar as a planning guide. Festival dates and access
                can change, so final tour timing should always be reconfirmed
                before booking.
              </p>

              <div className="festival-calendar-redesign-hero-card-list">
                <div>
                  <CheckCircle aria-hidden="true" />
                  <span>Best for cultural and photography tours</span>
                </div>

                <div>
                  <CheckCircle aria-hidden="true" />
                  <span>{busiestMonth.month} has the highest listed festival activity</span>
                </div>

                <div>
                  <CheckCircle aria-hidden="true" />
                  <span>Designed for realistic tour planning</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="festival-calendar-redesign-stats-section">
          <div className="container">
            <div className="festival-calendar-redesign-stats-grid">
              <div>
                <CalendarDays aria-hidden="true" />
                <strong>{festivalMonths.length}</strong>
                <span>Festival Months</span>
              </div>

              <div>
                <Star aria-hidden="true" />
                <strong>{totalEvents}+</strong>
                <span>Listed Events</span>
              </div>

              <div>
                <Mountain aria-hidden="true" />
                <strong>{busiestMonth.month}</strong>
                <span>Peak Festival Month</span>
              </div>

              <div>
                <Compass aria-hidden="true" />
                <strong>Culture</strong>
                <span>Main Travel Theme</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="festival-calendar"
          className="festival-calendar-redesign-section"
        >
          <div className="container">
            <div className="festival-calendar-redesign-section-heading">
              <span>Festival Calendar</span>
              <h2>Select a month, then explore the festival details.</h2>
              <p>
                Browse by travel month to see the major festivals, cultural
                gatherings, sacred ceremonies, and special events that can shape
                a Bhutan itinerary.
              </p>
            </div>

            <div className="festival-calendar-redesign-shell">
              <div className="festival-calendar-redesign-month-tabs" aria-label="Festival month selector">
                {festivalMonths.map((month) => {
                  const isActive = selectedMonth.month === month.month;

                  return (
                    <button
                      key={month.month}
                      type="button"
                      onClick={() => setActiveMonth(month.month)}
                      className={`festival-calendar-redesign-month-tab ${
                        isActive ? "is-active" : ""
                      }`}
                      aria-pressed={isActive}
                    >
                      <span>{month.month}</span>
                      <strong>{month.events.length}</strong>
                    </button>
                  );
                })}
              </div>

              <article className="festival-calendar-redesign-feature-panel">
                <div className="festival-calendar-redesign-feature-copy">
                  <span>{selectedMonth.season}</span>
                  <h3>{selectedMonth.month} Festival Highlights</h3>
                  <p>{selectedMonth.intro}</p>
                </div>

                <div className="festival-calendar-redesign-feature-count">
                  <CalendarDays aria-hidden="true" />
                  <strong>{selectedMonth.events.length}</strong>
                  <span>
                    {selectedMonth.events.length === 1 ? "Event" : "Events"}
                  </span>
                </div>
              </article>

              <div className="festival-calendar-redesign-feature-events">
                {selectedMonth.events.map((event) => (
                  <article
                    key={`${selectedMonth.month}-${event.title}`}
                    className="festival-calendar-redesign-feature-event"
                  >
                    <div className="festival-calendar-redesign-event-date">
                      <span>{event.date}</span>
                    </div>

                    <div className="festival-calendar-redesign-event-copy">
                      <h4>{event.title}</h4>

                      <div>
                        <MapPin aria-hidden="true" />
                        <span>{event.location}</span>
                      </div>

                      <p>{event.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="festival-calendar-redesign-section festival-calendar-redesign-all-section">
          <div className="container">
            <div className="festival-calendar-redesign-section-heading">
              <span>Full Calendar</span>
              <h2>All listed festivals by month.</h2>
              <p>
                A complete month-by-month view for quick comparison when planning
                festival tours, route options, hotel bookings, and guest timing.
              </p>
            </div>

            <div className="festival-calendar-redesign-grid">
              {festivalMonths.map((month) => (
                <article key={month.month} className="festival-month-card festival-calendar-redesign-month-card">
                  <div className="festival-month-card-head">
                    <div>
                      <span>{month.season}</span>
                      <h3>{month.month}</h3>
                    </div>

                    <div className="festival-month-count">
                      <CalendarDays aria-hidden="true" />
                      <strong>{month.events.length}</strong>
                    </div>
                  </div>

                  <p className="festival-month-intro">{month.intro}</p>

                  <div className="festival-event-list">
                    {month.events.map((event) => (
                      <div key={`${month.month}-${event.title}`} className="festival-event-card">
                        <div className="festival-event-date">
                          <span>{event.date}</span>
                        </div>

                        <div className="festival-event-copy">
                          <h4>{event.title}</h4>

                          <div className="festival-event-location">
                            <MapPin aria-hidden="true" />
                            <span>{event.location}</span>
                          </div>

                          <p>{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="festival-calendar-redesign-cta">
          <div className="container festival-calendar-redesign-cta-card">
            <div>
              <span>Festival Tour Planning</span>
              <h2>Want to build a realistic itinerary around festival dates?</h2>
              <p>
                Share the month, guest profile, hotel category, and preferred
                route. We will recommend a doable Bhutan festival tour around the
                best dates and locations.
              </p>
            </div>

            <Link href="/contact" className="festival-calendar-redesign-btn-primary">
              Customize Festival Tour
              <ChevronRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

const festivalMonths: FestivalMonth[] = [
  {
    month: "March",
    season: "Spring begins",
    intro:
      "Valleys awaken after winter and Bhutan’s festival season begins with sacred dances, prayers, and cultural gatherings.",
    events: [
      {
        date: "March 5–7",
        title: "Festival of Mahakali",
        location: "Trongsa Dzong",
        description:
          "A distinct festival honouring Bhutan’s guardian deity Pelden Lhamo, also known as Mahakali.",
      },
      {
        date: "March 6–8",
        title: "Punakha Drubchen",
        location: "Punakha",
        description:
          "A powerful historical festival showcasing mythical narratives connected to the construction of Punakha Dzong.",
      },
      {
        date: "March 9–11",
        title: "Punakha Tsechu",
        location: "Punakha",
        description:
          "A major festival featuring masked dances, local celebration, and the unfurling of the sacred Guru Rinpoche thongdrol.",
      },
      {
        date: "March 14",
        title: "Tharpaling Thongdrol",
        location: "Chumi, Bumthang",
        description:
          "A sacred unfurling ceremony of a holy applique silk scroll, believed to bring blessings and good karma.",
      },
      {
        date: "March 15–17",
        title: "Tangsibi Mani",
        location: "Ura, Bumthang",
        description:
          "A village festival at Tangsibi Tashiling Lhakhang with origins linked to the treasure discoverer Sherab Mebar.",
      },
    ],
  },
  {
    month: "April",
    season: "Peak spring",
    intro:
      "Bhutan becomes colourful with blooming forests, spring festivals, and intimate village celebrations.",
    events: [
      {
        date: "April 5–7",
        title: "Talo Tsechu",
        location: "Punakha",
        description:
          "An intimate three-day festival with masked and Atsara dances around Talo Monastery.",
      },
      {
        date: "April 5–7",
        title: "Gasa Tsechu",
        location: "Gasa",
        description:
          "A unique highland festival celebrating the distinct culture, songs, and dances of Gasa communities.",
      },
      {
        date: "April 8–12",
        title: "Paro Tsechu",
        location: "Paro",
        description:
          "One of Bhutan’s most famous festivals, known for sacred dances, colourful dress, and the Paro Dzong setting.",
      },
      {
        date: "April 22–24",
        title: "Rhododendron Festival",
        location: "Dochula, Thimphu",
        description:
          "A nature-focused festival celebrating Bhutan’s rhododendron species and spring mountain landscapes.",
      },
    ],
  },
  {
    month: "May",
    season: "Late spring",
    intro:
      "Warm weather, lush valleys, and spiritual gatherings make May ideal for culture and nature travel.",
    events: [
      {
        date: "May 2",
        title: "Birth Anniversary of the Third Druk Gyalpo",
        location: "Nationwide",
        description:
          "A national holiday honouring His Majesty Jigme Dorji Wangchuck and his contribution to Bhutan’s modernisation.",
      },
      {
        date: "May 7–9",
        title: "Domkhar Tsechu",
        location: "Domkhar, Bumthang",
        description:
          "A historic village festival with sacred masked dances and scroll unfurling on the final day.",
      },
      {
        date: "May 9–13",
        title: "Ura Yakchoe",
        location: "Ura, Bumthang",
        description:
          "A unique festival in eastern Bumthang focused on the escorting and invocation of a sacred Buddhist deity.",
      },
    ],
  },
  {
    month: "June",
    season: "Green transition",
    intro:
      "June marks the shift toward summer, with sacred holidays and nature-focused celebrations.",
    events: [
      {
        date: "June 2",
        title: "Social Forestry Day",
        location: "Nationwide",
        description:
          "A national day encouraging tree planting and environmental care, linked to Bhutan’s conservation values.",
      },
      {
        date: "June 11",
        title: "Lord Buddha’s Parinirvana",
        location: "Nationwide",
        description:
          "A sacred Buddhist holiday marked by pilgrimages, temple visits, ceremonies, and blessings.",
      },
    ],
  },
  {
    month: "July",
    season: "Summer culture",
    intro:
      "Summer brings sacred temple festivals, lush valleys, and regional celebrations.",
    events: [
      {
        date: "July 3–5",
        title: "Nimalung Tsechu",
        location: "Bumthang",
        description:
          "A three-day festival of cham dances, highlighted by the unfurling of the Guru Tshengye Thongdrol.",
      },
      {
        date: "July 5",
        title: "Kurjey Tsechu",
        location: "Kurjey, Bumthang",
        description:
          "A one-day temple festival honouring Guru Rinpoche with tantric dances and ceremonies.",
      },
      {
        date: "July 5",
        title: "Birth Anniversary of Guru Rinpoche",
        location: "Nationwide",
        description:
          "A sacred day celebrated across Bhutan to honour Guru Rinpoche, one of the country’s most revered religious figures.",
      },
      {
        date: "Dates not final",
        title: "Haa Summer Festival",
        location: "Haa",
        description:
          "A lively festival celebrating Haa Valley’s cuisine, nomadic culture, traditional sports, village life, and local performances.",
      },
    ],
  },
  {
    month: "August",
    season: "Lush summer",
    intro:
      "Bhutan’s valleys are deep green in August, with food festivals, forests, waterfalls, and river adventures.",
    events: [
      {
        date: "August 15–16",
        title: "Mushroom Festival",
        location: "Genekha, Thimphu",
        description:
          "A local festival featuring mushroom foraging, cultural performances, and mushroom cooking experiences.",
      },
      {
        date: "August 15–16",
        title: "Matsutake Festival",
        location: "Ura, Bumthang",
        description:
          "A food and nature festival celebrating the prized matsutake mushroom with picking excursions and cultural programs.",
      },
    ],
  },
  {
    month: "September",
    season: "Autumn opening",
    intro:
      "Cooler weather arrives and Bhutan’s autumn festival season begins with major cultural events.",
    events: [
      {
        date: "September 6",
        title: "Tour of the Dragon",
        location: "Bhutan",
        description:
          "A legendary cycling race across Bhutan, known as one of the world’s toughest one-day mountain bike races.",
      },
      {
        date: "September 24",
        title: "Blessed Rainy Day",
        location: "Nationwide",
        description:
          "A traditional holiday marking the end of the rains, when sacred water is used for cleansing and blessings.",
      },
      {
        date: "September 28",
        title: "Thimphu Drubchen",
        location: "Thimphu",
        description:
          "Consecration ceremonies leading into Thimphu’s biggest festival, the Thimphu Tsechu.",
      },
      {
        date: "September 30–October 2",
        title: "Wangdue Tsechu",
        location: "Wangdue",
        description:
          "A three-day festival known for the Raksha Mangcham, the Dance of the Ox.",
      },
    ],
  },
  {
    month: "October",
    season: "Peak autumn",
    intro:
      "October is one of Bhutan’s richest festival months, with major tsechus, mountain festivals, and colourful valley celebrations.",
    events: [
      {
        date: "October 2–4",
        title: "Tamsing Phala Choepa",
        location: "Bumthang",
        description:
          "A three-day Bumthang festival linked to the dances of the treasure discoverer Pema Lingpa.",
      },
      {
        date: "October 2–4",
        title: "Thimphu Tsechu",
        location: "Thimphu",
        description:
          "The capital’s biggest festival, held at Tashichho Dzong with sacred dances, songs, and ceremonies.",
      },
      {
        date: "October 5–7",
        title: "Gangtey Tsechu",
        location: "Gangtey",
        description:
          "A scenic festival at Gangtey Goempa featuring masked dances, cultural performances, and tantric ceremonies.",
      },
      {
        date: "October 7–8",
        title: "Thangbi Mewang",
        location: "Bumthang",
        description:
          "A fire purification festival where attendees leap over flames for blessings and protection.",
      },
      {
        date: "October 14–15",
        title: "Jhomolhari Mountain Festival",
        location: "Jhomolhari Base Camp",
        description:
          "A remote mountain festival reached by trekking, celebrating highland culture and Himalayan landscapes.",
      },
      {
        date: "October 29–31",
        title: "Jakar Tsechu",
        location: "Jakar, Bumthang",
        description:
          "A colourful festival at Jakar Dzong with dances and performances from the monastic body and local communities.",
      },
      {
        date: "October 31",
        title: "Dechenphug Tsechu",
        location: "Thimphu",
        description:
          "A special annual opening and festival at Dechenphug, a sacred temple near Thimphu.",
      },
    ],
  },
  {
    month: "November",
    season: "Late autumn",
    intro:
      "November brings royal holidays, iconic crane celebrations, and some of Bhutan’s most meaningful cultural events.",
    events: [
      {
        date: "November 1",
        title: "Coronation Anniversary of His Majesty the King",
        location: "Nationwide",
        description:
          "A national commemoration of His Majesty the King’s coronation in 2008.",
      },
      {
        date: "November 5–8",
        title: "Jambay Lhakhang Drup",
        location: "Bumthang",
        description:
          "A famous festival at one of Bhutan’s oldest temples, known for fire dances and purification rituals.",
      },
      {
        date: "November 6–8",
        title: "Prakhar Duchhoed",
        location: "Chumi, Bumthang",
        description:
          "A local festival with dances and songs connected to the temple’s unique origin story.",
      },
      {
        date: "November 11",
        title: "Black Necked Crane Festival",
        location: "Gangtey, Phobjikha",
        description:
          "A conservation-focused festival celebrating the arrival of black-necked cranes in Phobjikha Valley.",
      },
      {
        date: "November 11",
        title: "Birth Anniversary of the 4th Druk Gyalpo",
        location: "Nationwide",
        description:
          "A national celebration honouring His Majesty Jigme Singye Wangchuck, the Fourth King of Bhutan.",
      },
    ],
  },
  {
    month: "December",
    season: "Winter festivals",
    intro:
      "December closes the festival year with sacred Bumthang events, Dochula celebrations, and Bhutan’s National Day.",
    events: [
      {
        date: "December 4",
        title: "Jambay Lhakhang Singye Cham",
        location: "Bumthang",
        description:
          "A unique festival focused on the Singye Cham, or Lion Dance, believed to cleanse negative karma.",
      },
      {
        date: "December 4–6",
        title: "Nalakhar Tshechu",
        location: "Nalakhar, Bumthang",
        description:
          "A village festival at Nga Lhakhang, symbolising prosperity, harvest blessings, and community wellbeing.",
      },
      {
        date: "December 13",
        title: "Druk Wangyel Tsechu",
        location: "Dochula, Thimphu",
        description:
          "A unique festival organised by the Royal Family and performed by the Royal Bhutan Army.",
      },
      {
        date: "December 17",
        title: "Bhutan National Day",
        location: "Nationwide",
        description:
          "Bhutan’s National Day commemorating the coronation of Ugyen Wangchuk in 1907.",
      },
    ],
  },
];

