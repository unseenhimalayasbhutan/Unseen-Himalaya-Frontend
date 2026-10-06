import type { ElementType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, XCircle } from "lucide-react";

type TourImage = {
  src: string;
  alt: string;
};

export type TourDetailAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "text";
  icon?: ElementType;
  external?: boolean;
};

export type TourDetailFact = {
  label: string;
  value: string;
  icon?: ElementType;
};

export type TourDetailHighlight = {
  title: string;
  text: string;
  image?: TourImage;
};

export type TourDetailPrice = {
  market: string;
  amount: string;
  note?: string;
};

export type TourDetailItineraryDay = {
  day: string;
  title: string;
  text: string;
  details?: readonly string[];
  overnight?: string;
  image?: TourImage;
};

export type TourDetailInfo = {
  title: string;
  body: ReactNode;
};

type TourDetailTemplateProps = {
  eyebrow: string;
  title: string;
  date?: string;
  meta: string;
  description: string;
  heroImage: TourImage;
  actions: readonly TourDetailAction[];
  facts: readonly TourDetailFact[];
  prices: readonly TourDetailPrice[];
  priceNote?: string;
  whyItems: readonly TourDetailHighlight[];
  highlights: readonly TourDetailHighlight[];
  itinerary: readonly TourDetailItineraryDay[];
  inclusions: readonly string[];
  exclusions: readonly string[];
  importantInfo?: readonly TourDetailInfo[];
  finalCta: {
    eyebrow: string;
    title: string;
    text: string;
    image: TourImage;
    actions: readonly TourDetailAction[];
  };
};

export function TourDetailTemplate({
  eyebrow,
  title,
  date,
  meta,
  description,
  heroImage,
  actions,
  facts,
  prices,
  priceNote,
  whyItems,
  highlights,
  itinerary,
  inclusions,
  exclusions,
  importantInfo = [],
  finalCta,
}: TourDetailTemplateProps) {
  return (
    <main className="tour-detail-page">
      <section className="tour-detail-hero" aria-labelledby="tour-detail-title">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          preload
          sizes="100vw"
          className="tour-detail-hero-image"
        />
        <div className="tour-detail-hero-overlay" aria-hidden="true" />

        <div className="container tour-detail-hero-content">
          <nav className="tour-detail-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight aria-hidden="true" />
            <Link href="/upcoming-events">Upcoming Events</Link>
            <ChevronRight aria-hidden="true" />
            <span>{title}</span>
          </nav>

          <span className="tour-detail-eyebrow">{eyebrow}</span>
          <h1 id="tour-detail-title">{title}</h1>
          {date ? <strong className="tour-detail-date">{date}</strong> : null}
          <p className="tour-detail-meta">{meta}</p>
          <p className="tour-detail-intro">{description}</p>

          <ActionRow actions={actions} />
        </div>
      </section>

      <TourDetailSection
        eyebrow="Tour at a Glance"
        title="Key Journey Details"
        description="A concise overview of the departure, route, accommodation and travel style."
      >
        <div className="tour-detail-facts-grid">
          {facts.map((fact) => {
            const Icon = fact.icon;

            return (
              <article key={fact.label} className="tour-detail-fact-card">
                {Icon ? <Icon aria-hidden="true" /> : null}
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            );
          })}
        </div>
      </TourDetailSection>

      <TourDetailSection
        eyebrow="Price"
        title="Scheduled Group Tour Cost"
        description="Current published pricing is preserved exactly and shown by market."
        tone="warm"
      >
        <div className="tour-detail-pricing-grid">
          {prices.map((price) => (
            <article key={price.market} className="tour-detail-price-card">
              <span>{price.market}</span>
              <strong>{price.amount}</strong>
              {price.note ? <p>{price.note}</p> : null}
            </article>
          ))}
        </div>
        {priceNote ? <p className="tour-detail-price-note">{priceNote}</p> : null}
      </TourDetailSection>

      <TourDetailSection
        eyebrow="Why This Journey"
        title="Designed for an Easy Group Departure"
        description="The page now uses the same concise card rhythm as the wider tour system."
      >
        <div className="tour-detail-card-grid tour-detail-card-grid-three">
          {whyItems.map((item) => (
            <article key={item.title} className="tour-detail-text-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </TourDetailSection>

      <TourDetailSection
        eyebrow="Journey Highlights"
        title="Experiences Along the Way"
        description="From mountain passes to Tiger's Nest, discover the places and moments included in your journey."
        tone="warm"
      >
        <div className="tour-detail-card-grid tour-detail-highlight-grid">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="tour-detail-highlight-card">
              {highlight.image ? (
                <div className="tour-detail-card-image">
                  <Image
                    src={highlight.image.src}
                    alt={highlight.image.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>
              ) : null}
              <div>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </div>
            </article>
          ))}
        </div>
      </TourDetailSection>

      <TourDetailSection
        eyebrow="Itinerary"
        title="Seven-Day Bhutan Route"
        description="The journey follows one standard itinerary presentation, matching the tour-detail system."
        id="itinerary"
      >
        <div className="tour-detail-itinerary-list">
          {itinerary.map((day) => (
            <article key={`${day.day}-${day.title}`} className="tour-detail-day-card">
              <div className="tour-detail-day-number">
                <span>Day</span>
                <strong>{day.day}</strong>
              </div>
              {day.image ? (
                <div className="tour-detail-day-image">
                  <Image
                    src={day.image.src}
                    alt={day.image.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 220px"
                  />
                </div>
              ) : null}
              <div className="tour-detail-day-copy">
                <h3>{day.title}</h3>
                <p>{day.text}</p>
                {day.details?.length ? (
                  <ul>
                    {day.details.map((detail) => (
                      <li key={detail}>
                        <CheckCircle aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {day.overnight ? <small>Overnight: {day.overnight}</small> : null}
              </div>
            </article>
          ))}
        </div>
      </TourDetailSection>

      <TourDetailSection
        eyebrow="Inclusions & Exclusions"
        title="What Is Included"
        description="A consistent two-column list for cost inclusions and exclusions."
        tone="warm"
      >
        <div className="tour-detail-list-grid">
          <Checklist title="Included" icon={CheckCircle} items={inclusions} />
          <Checklist title="Not Included" icon={XCircle} items={exclusions} />
        </div>
      </TourDetailSection>

      {importantInfo.length ? (
        <TourDetailSection
          eyebrow="Important Information"
          title="Before You Book"
          description="Key practical notes for this scheduled group tour."
        >
          <div className="tour-detail-info-list">
            {importantInfo.map((item, index) => (
              <details key={item.title} className="tour-detail-info-item" open={index === 0}>
                <summary>{item.title}</summary>
                <div>{item.body}</div>
              </details>
            ))}
          </div>
        </TourDetailSection>
      ) : null}

      <section className="tour-detail-final-cta" aria-labelledby="tour-detail-final-title">
        <Image
          src={finalCta.image.src}
          alt={finalCta.image.alt}
          fill
          sizes="100vw"
          className="tour-detail-final-image"
        />
        <div className="tour-detail-final-overlay" aria-hidden="true" />
        <div className="container tour-detail-final-content">
          <span className="tour-detail-eyebrow">{finalCta.eyebrow}</span>
          <h2 id="tour-detail-final-title">{finalCta.title}</h2>
          <p>{finalCta.text}</p>
          <ActionRow actions={finalCta.actions} />
        </div>
      </section>
    </main>
  );
}

function TourDetailSection({
  eyebrow,
  title,
  description,
  tone = "clean",
  id,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "clean" | "warm";
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`tour-detail-section tour-detail-section-${tone}`.trim()}
    >
      <div className="container">
        <div className="tour-detail-section-heading">
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function ActionRow({ actions }: { actions: readonly TourDetailAction[] }) {
  return (
    <div className="tour-detail-actions">
      {actions.map((action) => {
        const Icon = action.icon;
        const className = `tour-detail-btn tour-detail-btn-${action.variant || "primary"}`;
        const content = (
          <>
            {Icon ? <Icon aria-hidden="true" /> : null}
            <span>{action.label}</span>
            {action.variant !== "text" ? <ChevronRight aria-hidden="true" /> : null}
          </>
        );

        if (action.external) {
          return (
            <a
              key={`${action.href}-${action.label}`}
              href={action.href}
              className={className}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          );
        }

        if (action.href.startsWith("mailto:") || action.href.startsWith("tel:")) {
          return (
            <a key={`${action.href}-${action.label}`} href={action.href} className={className}>
              {content}
            </a>
          );
        }

        return (
          <Link key={`${action.href}-${action.label}`} href={action.href} className={className}>
            {content}
          </Link>
        );
      })}
    </div>
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
    <article className="tour-detail-checklist">
      <h3>
        <Icon aria-hidden="true" />
        {title}
      </h3>
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
