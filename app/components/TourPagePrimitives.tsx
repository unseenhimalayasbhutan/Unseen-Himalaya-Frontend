import Image from "next/image";
import { getFallbackImage } from "./imageFallbacks";
import { ImageCredit, SectionHeading } from "./DesignSystem";

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
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px",
}: {
  image: ImageAsset;
  className?: string;
  startingRate?: number;
  sizes?: string;
}) {
  const resolvedSrc = image.src.trim() || getFallbackImage(image.label);
  const formattedRate =
    typeof startingRate === "number"
      ? `Starting from Nu. ${startingRate.toLocaleString("en-US")}`
      : "";

  return (
    <figure className={`tour-pro-image-slot has-image ${className}`.trim()}>
      <div className="tour-pro-image-frame">
        <Image
          src={resolvedSrc}
          alt={image.alt}
          fill
          sizes={sizes}
          className="tour-pro-image"
          loading="lazy"
          decoding="async"
        />
        <ImageCredit className="tour-pro-image-credit">
          © {image.copyrightName || "Unseen Himalayas Bhutan"}
        </ImageCredit>
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
    </figure>
  );
}

export function TourRateNote({ startingRate }: { startingRate?: number }) {
  const formattedRate =
    typeof startingRate === "number"
      ? `Starting from Nu. ${startingRate.toLocaleString("en-US")}`
      : "Rate on request";

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
    <SectionHeading
      eyebrow={eyebrow}
      title={title}
      description={subtitle}
      divider
      className="tour-pro-section-heading"
    />
  );
}
