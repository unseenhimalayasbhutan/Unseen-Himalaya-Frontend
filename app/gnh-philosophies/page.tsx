/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { getFallbackImage } from "../components/imageFallbacks";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Heart,
  Landmark,
  Leaf,
  ShieldCheck,
  Smile,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type CreditPosition = "overlay" | "below";

type PageImage = {
  src: string;
  alt: string;
  label: string;
  credit?: string;
  creditHref?: string;
  creditPosition?: CreditPosition;
};

function ImageCredit({
  credit,
  creditHref,
}: {
  credit?: string;
  creditHref?: string;
}) {
  if (!credit) return null;

  const creditText = credit.trim().startsWith("©") ? credit : `© ${credit}`;

  if (creditHref && /^https?:\/\//i.test(creditHref)) {
    return (
      <figcaption className="gnh-pro-image-credit">
        <a href={creditHref} target="_blank" rel="noopener noreferrer">
          {creditText}
        </a>
      </figcaption>
    );
  }

  return <figcaption className="gnh-pro-image-credit">{creditText}</figcaption>;
}

function ImageSlot({ image }: { image: PageImage }) {
  const resolvedSrc = image.src.trim() || getFallbackImage(image.label);
  const creditPosition = image.creditPosition ?? "overlay";

  return (
    <figure className={`gnh-pro-image-slot gnh-pro-credit-${creditPosition}`}>
      <div className="gnh-pro-image-frame">
        <img
          src={resolvedSrc}
          alt={image.alt}
          className="gnh-pro-image"
          loading="lazy"
        />

        {creditPosition === "overlay" && (
          <ImageCredit credit={image.credit} creditHref={image.creditHref} />
        )}
      </div>

      {creditPosition === "below" && (
        <ImageCredit credit={image.credit} creditHref={image.creditHref} />
      )}
    </figure>
  );
}

export default function GNHPhilosophiesPage() {
  return (
    <>
      <Header />

      <main className="gnh-pro-page">
        {/* Hero */}
        <section className="gnh-pro-hero">
          <div className="gnh-pro-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="gnh-pro-hero-grid">
              <div className="gnh-pro-hero-content">
                <div className="gnh-pro-eyebrow">
                  <Sparkles aria-hidden />
                  <span>Gross National Happiness</span>
                </div>

                <h1 className="gnh-pro-hero-title">
                  Bhutan&apos;s philosophy of progress goes beyond wealth.
                </h1>

                <p className="gnh-pro-hero-description">
                  Gross National Happiness, or GNH, is Bhutan&apos;s holistic
                  development philosophy. It values wellbeing, culture,
                  environment, good governance, and balanced progress alongside
                  economic growth.
                </p>

                <div className="gnh-pro-hero-actions">
                  <Link href="/contact" className="gnh-pro-btn-primary">
                    Plan a Meaningful Journey
                    <ArrowRight aria-hidden />
                  </Link>

                  <Link href="/cultural-tours" className="gnh-pro-btn-secondary">
                    Explore Bhutan Tours
                  </Link>
                </div>

                <div className="gnh-pro-hero-trust">
                  {heroTrust.map((item) => (
                    <div key={item} className="gnh-pro-hero-trust-item">
                      <CheckCircle aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gnh-pro-hero-card">
                <div className="gnh-pro-hero-image-wrap">
                  <ImageSlot image={heroImage} />
                </div>

                <div className="gnh-pro-hero-card-content">
                  <p className="gnh-pro-card-kicker">Core Idea</p>
                  <h2>Development should serve human wellbeing.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="gnh-pro-section gnh-pro-section-white">
          <div className="container">
            <div className="gnh-pro-split-grid">
              <div className="gnh-pro-split-content">
                <div className="gnh-pro-section-header">
                  <span className="gnh-pro-section-line" />
                  <span className="gnh-pro-section-label">The Vision</span>
                </div>

                <h2 className="gnh-pro-section-title">
                  Beyond GDP: measuring what matters.
                </h2>

                <p className="gnh-pro-section-text">
                  While many countries measure progress mainly through economic
                  output, Bhutan became known for asking a deeper question:
                  whether development improves people&apos;s wellbeing,
                  strengthens communities, preserves culture, and protects the
                  environment.
                </p>

                <p className="gnh-pro-section-text">
                  GNH does not reject economic growth. Instead, it encourages
                  progress that remains balanced, sustainable, culturally
                  grounded, and meaningful for people&apos;s lives.
                </p>

                <div className="gnh-pro-highlight-list">
                  {visionHighlights.map((item) => (
                    <div key={item} className="gnh-pro-highlight-item">
                      <ChevronRight aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gnh-pro-image-panel">
                <ImageSlot image={introImage} />
              </div>
            </div>
          </div>
        </section>

        {/* Four Pillars */}
        <section className="gnh-pro-section gnh-pro-section-warm">
          <div className="container">
            <div className="gnh-pro-section-header gnh-pro-section-header-center">
              <span className="gnh-pro-section-line" />
              <span className="gnh-pro-section-label">Foundation</span>
              <span className="gnh-pro-section-line" />
            </div>

            <h2 className="gnh-pro-section-title gnh-pro-center-title">
              The four pillars of Gross National Happiness.
            </h2>

            <p className="gnh-pro-section-subtitle">
              These pillars guide Bhutan&apos;s approach to development and help
              keep progress connected to people, culture, and nature.
            </p>

            <div className="gnh-pro-pillars-grid">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="gnh-pro-pillar-card">
                  <div className="gnh-pro-pillar-icon">
                    <pillar.icon aria-hidden />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Nine Domains */}
        <section className="gnh-pro-section gnh-pro-section-white">
          <div className="container">
            <div className="gnh-pro-section-header gnh-pro-section-header-center">
              <span className="gnh-pro-section-line" />
              <span className="gnh-pro-section-label">Measuring Wellbeing</span>
              <span className="gnh-pro-section-line" />
            </div>

            <h2 className="gnh-pro-section-title gnh-pro-center-title">
              The nine domains of GNH.
            </h2>

            <p className="gnh-pro-section-subtitle">
              GNH looks at wellbeing from many angles, not only income or
              economic productivity.
            </p>

            <div className="gnh-pro-domains-grid">
              {domains.map((domain) => (
                <article key={domain.title} className="gnh-pro-domain-card">
                  <div className="gnh-pro-domain-icon">
                    <domain.icon aria-hidden />
                  </div>
                  <div>
                    <h3>{domain.title}</h3>
                    <p>{domain.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GNH in Action */}
        <section className="gnh-pro-feature-dark">
          <div className="container">
            <div className="gnh-pro-section-header gnh-pro-section-header-center">
              <span className="gnh-pro-section-line" />
              <span className="gnh-pro-section-label">Real Impact</span>
              <span className="gnh-pro-section-line" />
            </div>

            <h2 className="gnh-pro-dark-title">GNH in everyday policy and life.</h2>

            <div className="gnh-pro-initiatives-grid">
              {initiatives.map((initiative) => (
                <article key={initiative.title} className="gnh-pro-initiative-card">
                  <h3>{initiative.title}</h3>
                  <p>{initiative.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery */}
       
        {/* Global Impact */}
        <section className="gnh-pro-section gnh-pro-section-white">
          <div className="container">
            <div className="gnh-pro-split-grid gnh-pro-split-grid-reverse">
              <div className="gnh-pro-image-panel">
                <ImageSlot image={globalImage} />
              </div>

              <div className="gnh-pro-split-content">
                <div className="gnh-pro-section-header">
                  <span className="gnh-pro-section-line" />
                  <span className="gnh-pro-section-label">Global Impact</span>
                </div>

                <h2 className="gnh-pro-section-title">
                  A Bhutanese idea that sparked global conversations.
                </h2>

                <p className="gnh-pro-section-text">
                  Bhutan&apos;s GNH philosophy has influenced discussions around
                  wellbeing, sustainable development, happiness, and alternative
                  ways of measuring progress.
                </p>

                <div className="gnh-pro-recognition-list">
                  {recognition.map((item) => (
                    <div key={item} className="gnh-pro-recognition-item">
                      <Award aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* FAQ */}
        <section className="gnh-pro-section gnh-pro-section-white">
          <div className="container">
            <div className="gnh-pro-section-header gnh-pro-section-header-center">
              <span className="gnh-pro-section-line" />
              <span className="gnh-pro-section-label">Common Questions</span>
              <span className="gnh-pro-section-line" />
            </div>

            <h2 className="gnh-pro-section-title gnh-pro-center-title">
              Frequently asked questions.
            </h2>

            <div className="gnh-pro-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.question} className="gnh-pro-faq-card">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

/*
  IMAGE SETUP:
  Replace empty src values below with your real image path later.

  Example:
  src: "/images/gnh/bhutan-community.jpg",
  credit: "Unseen Himalayas Bhutan / Photographer Name",
  creditHref: "https://example.com/photo-source",
  creditPosition: "overlay", // use "below" to show credit under image
*/

const heroImage: PageImage = {
  src: "/gnh.jpg",
  alt: "Bhutan landscape representing Gross National Happiness",
  label: "Hero Image",
  credit: "Unseen Himalayas Bhutan / Photographer Name",
  creditHref: "",
  creditPosition: "overlay",
};

const introImage: PageImage = {
  src: "/Ben-Richards-Tourism-Bhutan-011.jpg",
  alt: "Bhutanese community life or cultural scene",
  label: "GNH / Bhutan Life Image",
  credit: "Carissa Nimah",
  creditHref: "Carissa Nimah",
  creditPosition: "below",
};

const globalImage: PageImage = {
  src: "/Bhutan - Moshe Shai - 502.jpg",
  alt: "Bhutan GNH global impact or wellbeing concept",
  label: "Global Impact Image",
  credit: "Moshe Shai",
  creditHref: "",
  creditPosition: "below",
};

const heroTrust = [
  "Bhutan wellbeing philosophy",
  "Culture and environment focus",
  "Meaningful travel context",
];

const visionHighlights = [
  "Balances material and non-material wellbeing",
  "Connects development with culture and environment",
  "Encourages progress that supports people and communities",
];

const pillars: IconCard[] = [
  {
    icon: Heart,
    title: "Sustainable Development",
    description:
      "Economic progress that supports wellbeing without ignoring culture, community, and environment.",
  },
  {
    icon: ShieldCheck,
    title: "Good Governance",
    description:
      "A focus on responsible decision-making, public service, and trust in institutions.",
  },
  {
    icon: Landmark,
    title: "Cultural Preservation",
    description:
      "Protecting Bhutanese identity through language, architecture, festivals, values, and living traditions.",
  },
  {
    icon: Leaf,
    title: "Environmental Conservation",
    description:
      "Keeping nature central to national identity, policy, and future planning.",
  },
];

const domains: IconCard[] = [
  {
    icon: Smile,
    title: "Psychological Wellbeing",
    description: "Mental balance, life satisfaction, and emotional wellbeing.",
  },
  {
    icon: Clock,
    title: "Time Use",
    description: "Balance between work, rest, family, and personal life.",
  },
  {
    icon: Users,
    title: "Community Vitality",
    description: "Relationships, trust, social support, and community life.",
  },
  {
    icon: Landmark,
    title: "Cultural Diversity",
    description: "Participation in traditions, language, customs, and festivals.",
  },
  {
    icon: ShieldCheck,
    title: "Good Governance",
    description: "Trust, participation, public services, and institutional quality.",
  },
  {
    icon: Heart,
    title: "Health",
    description: "Physical wellbeing, healthcare access, and healthy living.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Knowledge, skills, literacy, and lifelong learning.",
  },
  {
    icon: Leaf,
    title: "Ecological Diversity",
    description: "Environmental quality, awareness, and conservation.",
  },
  {
    icon: Award,
    title: "Living Standards",
    description: "Housing, income, security, and material wellbeing.",
  },
];

const initiatives = [
  {
    title: "Forest Protection",
    description:
      "Nature conservation remains a major part of Bhutan's national identity and policy direction.",
  },
  {
    title: "Cultural Continuity",
    description:
      "Traditional arts, festivals, architecture, dress, and rituals remain visible in everyday life.",
  },
  {
    title: "Public Health Focus",
    description:
      "Wellbeing includes access to health services and attention to quality of life.",
  },
  {
    title: "Education and Values",
    description:
      "Education supports knowledge while also keeping Bhutanese identity and values alive.",
  },
  {
    title: "Mindful Living",
    description:
      "The philosophy encourages balance, community, spiritual grounding, and a slower pace of life.",
  },
  {
    title: "Sustainable Resources",
    description:
      "Bhutan's development story is closely connected with responsible use of natural resources.",
  },
];

const recognition = [
  "Inspired global wellbeing conversations",
  "Connected development with happiness and sustainability",
  "Encouraged broader thinking beyond economic growth",
  "Influenced discussions around wellbeing indicators",
];

const faqs: FAQItem[] = [
  {
    question: "What does Gross National Happiness mean?",
    answer:
      "Gross National Happiness is Bhutan's holistic development philosophy. It values wellbeing, culture, environment, governance, and balanced progress rather than focusing only on economic growth.",
  },
  {
    question: "Is GNH only about being happy?",
    answer:
      "No. GNH is broader than a mood or emotion. It is about conditions that support a meaningful, balanced, and dignified life.",
  },
  {
    question: "Can visitors experience GNH?",
    answer:
      "Yes. Visitors can experience the spirit of GNH through local communities, cultural practices, monastery visits, nature, responsible travel, and Bhutan's slower pace of life.",
  },
  {
    question: "How does GNH affect tourism?",
    answer:
      "Tourism in Bhutan is shaped by the idea that travel should be meaningful, respectful, sustainable, and beneficial to local communities.",
  },
];
