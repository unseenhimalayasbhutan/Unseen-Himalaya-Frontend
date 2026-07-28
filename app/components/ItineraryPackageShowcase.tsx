"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle,
  ChevronRight,
  Clock,
  Hash,
  MapPin,
  Users,
} from "lucide-react";

import {
  TourImageSlot as ImageSlot,
  TourSectionHeader as SectionHeader,
  type ImageAsset,
} from "./TourPagePrimitives";
import { siteConfig } from "../siteConfig";
import { formatUsd, type TourPriceGroup } from "../data/tourPricing";

export type PackageShowcaseDay = {
  label: string;
  title: string;
  activities: string[];
};

export type PackageShowcaseItem = {
  slug: string;
  title: string;
  duration: string;
  route: string;
  summary: string;
  bestFor: string;
  theme: string;
  image: ImageAsset;
  tags: string[];
  days: PackageShowcaseDay[];
  tourCode?: string;
  pricing?: TourPriceGroup;
};

type ShowcaseTab = "itinerary" | "cost" | "terms" | "more";

type ItineraryPackageShowcaseProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  routeLabel: string;
  packages: PackageShowcaseItem[];
  detailBasePath: string;
  showPrices?: boolean;
};

type ItineraryPackageDetailProps = {
  routeLabel: string;
  item: PackageShowcaseItem;
  packages: PackageShowcaseItem[];
  inclusions: string[];
  exclusions: string[];
  reservationNotes: string[];
  terms: string[];
  detailBasePath: string;
  showPrices?: boolean;
};

const tabs: { id: ShowcaseTab; label: string }[] = [
  { id: "itinerary", label: "Itinerary" },
  { id: "cost", label: "Cost/Inclusions" },
  { id: "terms", label: "Terms & Conditions" },
  { id: "more", label: "More Packages" },
];

export function ItineraryPackageShowcase({
  eyebrow,
  title,
  subtitle,
  routeLabel,
  packages,
  detailBasePath,
  showPrices = true,
}: ItineraryPackageShowcaseProps) {
  return (
    <section className="tour-pro-section tour-pro-section-white uh-package-showcase-section">
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="uh-hb-package-grid" aria-label={`${routeLabel} packages`}>
          {packages.map((pkg) => (
            <article key={pkg.slug} className="uh-hb-package-card">
              <Link
                href={`${detailBasePath}/${pkg.slug}`}
                className="uh-hb-package-media-button"
                aria-label={`View ${pkg.title}`}
              >
                <ImageSlot image={pkg.image} className="uh-hb-package-image" />
                <span className="uh-hb-day-badge">
                  <strong>{getDayCount(pkg.duration)}</strong>
                  <span>Days</span>
                </span>
              </Link>

              <div className="uh-hb-package-body">
                <h3>{pkg.title}</h3>

                <div className="uh-hb-package-footer">
                  {showPrices && pkg.pricing ? (
                    <div className="uh-hb-package-price">
                      <span>Starting From</span>
                      <strong>{formatUsd(pkg.pricing.fourSix)}</strong>
                    </div>
                  ) : (
                    <div className="uh-hb-package-meta">
                      <span>{pkg.duration}</span>
                      <strong>{pkg.theme}</strong>
                    </div>
                  )}

                  <Link
                    href={`${detailBasePath}/${pkg.slug}`}
                    className="uh-hb-view-trip-btn"
                  >
                    View This Trip
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ItineraryPackageDetail({
  routeLabel,
  item,
  packages,
  inclusions,
  exclusions,
  reservationNotes,
  terms,
  detailBasePath,
  showPrices = true,
}: ItineraryPackageDetailProps) {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("itinerary");

  return (
    <section className="tour-pro-section tour-pro-section-white uh-package-showcase-section uh-hb-detail-page-section">
      <div className="container">
        <div className="uh-hb-page-title">
          <span>{routeLabel}</span>
          <h1>{item.title}</h1>
          <p>{item.duration} · {item.route}</p>
        </div>

        <div className="uh-hb-detail-shell">
          <div className="uh-hb-detail-hero">
            <ImageSlot image={item.image} className="uh-hb-detail-image" />
          </div>

          <div className="uh-hb-detail-thumbnail-row">
            <button
              type="button"
              className="uh-hb-detail-thumb is-active"
              aria-label={`${item.title} image selected`}
            >
              <ImageSlot image={item.image} className="uh-hb-thumb-image" />
            </button>
          </div>

          <div className="uh-hb-tabs" role="tablist" aria-label={`${item.title} details`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                className={`uh-hb-tab ${activeTab === tab.id ? "is-active" : ""}`}
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <article className="uh-hb-detail-panel">
            {activeTab === "itinerary" ? (
              <ItineraryTab item={item} routeLabel={routeLabel} />
            ) : null}

            {activeTab === "cost" ? (
              <CostTab
                item={item}
                inclusions={inclusions}
                exclusions={exclusions}
                showPrices={showPrices}
              />
            ) : null}

            {activeTab === "terms" ? (
              <TermsTab reservationNotes={reservationNotes} terms={terms} />
            ) : null}

            {activeTab === "more" ? (
              <MorePackagesTab
                packages={packages}
                activeSlug={item.slug}
                showPrices={showPrices}
                detailBasePath={detailBasePath}
              />
            ) : null}
          </article>
        </div>
      </div>
    </section>
  );
}

function ItineraryTab({
  item,
  routeLabel,
}: {
  item: PackageShowcaseItem;
  routeLabel: string;
}) {
  return (
    <>
      <div className="uh-hb-detail-heading">
        <span>{routeLabel}</span>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
      </div>

      <div className="uh-hb-fact-grid">
        <div>
          <Clock aria-hidden="true" />
          <span>Duration</span>
          <strong>{item.duration}</strong>
        </div>
        <div>
          <MapPin aria-hidden="true" />
          <span>Route</span>
          <strong>{item.route}</strong>
        </div>
        <div>
          <Users aria-hidden="true" />
          <span>Best For</span>
          <strong>{item.bestFor}</strong>
        </div>
        {item.tourCode ? (
          <div>
            <Hash aria-hidden="true" />
            <span>Tour Code</span>
            <strong>{item.tourCode}</strong>
          </div>
        ) : null}
      </div>

      <div className="uh-hb-tag-row">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="uh-hb-day-list">
        {item.days.map((day) => (
          <section key={`${item.slug}-${day.label}-${day.title}`} className="uh-hb-day-card">
            <h4>{day.label}: {day.title}</h4>
            <ul>
              {day.activities.map((activity) => (
                <li key={activity}>
                  <CheckCircle aria-hidden="true" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

function CostTab({
  item,
  inclusions,
  exclusions,
  showPrices,
}: {
  item: PackageShowcaseItem;
  inclusions: string[];
  exclusions: string[];
  showPrices: boolean;
}) {
  return (
    <>
      <div className="uh-hb-detail-heading">
        <span>Cost and inclusions</span>
        <h3>{item.title}</h3>
        {!showPrices ? (
          <p>Pricing for this package will be added after the rates are finalized.</p>
        ) : null}
      </div>

      <div className="uh-hb-price-table-wrap">
          <table className="uh-hb-price-table uh-hb-package-cost-table">
            <caption>
              Package cost for {item.title} {getDayCount(item.duration)}days
            </caption>
          <thead>
            <tr>
              <th>Group Size</th>
              <th>3* Package</th>
              <th>4* Package</th>
              <th>5* Package</th>
            </tr>
          </thead>
          <tbody>
            {getPackageCostRows(item, showPrices).map((row) => (
              <tr key={row.groupSize}>
                <td>{row.groupSize}</td>
                <td>{row.standard}</td>
                <td>
                  For 4* rate,{" "}
                  <a href={getWriteToUsHref(item.title, "4-star")}>
                    write to us
                  </a>
                </td>
                <td>
                  For 5* rate,{" "}
                  <a href={getWriteToUsHref(item.title, "5-star")}>
                    write to us
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="uh-hb-cost-grid">
        <div>
          <h4>Cost Includes</h4>
          <ul>
            {inclusions.map((item) => (
              <li key={item}>
                <CheckCircle aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Cost Excludes</h4>
          <ul>
            {exclusions.map((item) => (
              <li key={item}>
                <ChevronRight aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function TermsTab({
  reservationNotes,
  terms,
}: {
  reservationNotes: string[];
  terms: string[];
}) {
  return (
    <div className="uh-hb-cost-grid">
      <div>
        <h4>Reservation & Cancellation</h4>
        <ul>
          {reservationNotes.map((item) => (
            <li key={item}>
              <CheckCircle aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Terms & Conditions</h4>
        <ul>
          {terms.map((item) => (
            <li key={item}>
              <ChevronRight aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MorePackagesTab({
  packages,
  activeSlug,
  showPrices,
  detailBasePath,
}: {
  packages: PackageShowcaseItem[];
  activeSlug: string;
  showPrices: boolean;
  detailBasePath: string;
}) {
  return (
    <div className="uh-hb-more-grid">
      {packages
        .filter((pkg) => pkg.slug !== activeSlug)
        .map((pkg) => (
          <Link
            key={pkg.slug}
            href={`${detailBasePath}/${pkg.slug}`}
            className="uh-hb-more-card"
          >
            <ImageSlot image={pkg.image} className="uh-hb-more-image" />
            <span>{pkg.duration}</span>
            <strong>{pkg.title}</strong>
            {showPrices && pkg.pricing ? (
              <small>Starting From {formatUsd(pkg.pricing.fourSix)}</small>
            ) : null}
          </Link>
        ))}
    </div>
  );
}

function getDayCount(duration: string) {
  const [days] = duration.match(/\d+/) || ["0"];

  return days.padStart(2, "0");
}

function getPackageCostRows(item: PackageShowcaseItem, showPrices: boolean) {
  const pricing = showPrices ? item.pricing : undefined;

  return [
    {
      groupSize: "1 Person",
      standard: pricing ? formatUsd(pricing.one) : (
        <a href={getWriteToUsHref(item.title, "3-star")}>write to us</a>
      ),
    },
    {
      groupSize: "2-3 Persons",
      standard: pricing ? formatUsd(pricing.twoThree) : (
        <a href={getWriteToUsHref(item.title, "3-star")}>write to us</a>
      ),
    },
    {
      groupSize: "4-6 Persons",
      standard: pricing ? formatUsd(pricing.fourSix) : (
        <a href={getWriteToUsHref(item.title, "3-star")}>write to us</a>
      ),
    },
  ];
}

function getWriteToUsHref(packageTitle: string, packageType: string) {
  const subject = encodeURIComponent(`${packageType} package rate for ${packageTitle}`);

  return `${siteConfig.contact.emailHref}?subject=${subject}`;
}
