/* eslint-disable @next/next/no-img-element */

import { getFallbackImage } from "./imageFallbacks";

const SDF_NOTE =
  "SDF: Foreign nationals pay USD 100 per night per person; Indian nationals pay Nu. 1,200 per night per person.";

export type ImageAsset = {
  src: string;
  alt: string;
  label: string;
  copyrightName?: string;
};

export function TourImageSlot({
  image,
  className = "",
  startingRate,
}: {
  image: ImageAsset;
  className?: string;
  startingRate?: number;
}) {
  const resolvedSrc = image.src.trim() || getFallbackImage(image.label);
  const formattedRate =
    typeof startingRate === "number"
      ? `Starting at Nu. ${startingRate.toLocaleString("en-US")} + 5% GST`
      : "";

  return (
    <figure className={`tour-pro-image-slot has-image ${className}`.trim()}>
      <div className="tour-pro-image-frame">
        <img
          src={resolvedSrc}
          alt={image.alt}
          className="tour-pro-image"
          loading="lazy"
        />
      </div>

      {formattedRate ? (
        <div className="tour-pro-image-rate">
          <strong>{formattedRate}</strong>
          <span className="tour-pro-sdf-note">{SDF_NOTE}</span>
          <span>
            The mentioned price is for a 3-star hotel (Standard Tour). Hotels
            can be upgraded for Premium and Luxury packages.
          </span>
        </div>
      ) : null}

      <figcaption className="tour-pro-image-credit">
        © {image.copyrightName || "Unseen Himalayas Bhutan"}
      </figcaption>
    </figure>
  );
}

export function TourRateNote({ startingRate }: { startingRate?: number }) {
  const formattedRate =
    typeof startingRate === "number"
      ? `Starting at Nu. ${startingRate.toLocaleString("en-US")} + 5% GST`
      : "Rate on request + 5% GST";

  return (
    <div className="tour-pro-route-rate-note">
      <strong>{formattedRate}</strong>
      <p className="tour-pro-sdf-note">{SDF_NOTE}</p>
      <p>
        The mentioned price is for a 3-star hotel (Standard Tour). Hotels can
        be upgraded for Premium and Luxury packages.
      </p>
    </div>
  );
}

export function TourSectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="tour-pro-section-heading">
      <div className="tour-pro-section-label">
        <span />
        {eyebrow}
        <span />
      </div>

      <h2>{title}</h2>

      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
