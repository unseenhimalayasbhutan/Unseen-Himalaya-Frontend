/* eslint-disable @next/next/no-img-element */

import { getFallbackImage } from "./imageFallbacks";

export type ImageAsset = {
  src: string;
  alt: string;
  label: string;
  copyrightName?: string;
};

export function TourImageSlot({
  image,
  className = "",
}: {
  image: ImageAsset;
  className?: string;
}) {
  const resolvedSrc = image.src.trim() || getFallbackImage(image.label);

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

      <figcaption className="tour-pro-image-credit">
        © {image.copyrightName || "Unseen Himalayas"}
      </figcaption>
    </figure>
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
