import { permanentRedirect } from "next/navigation";

import {
  culturalShowcasePackages,
  photographyShowcasePackages,
} from "../../data/packageShowcases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const slugs = new Set([
    ...culturalShowcasePackages.map((pkg) => pkg.slug),
    ...photographyShowcasePackages.map((pkg) => pkg.slug),
  ]);

  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function BhutanTourDetailRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  const isCulturalPackage = culturalShowcasePackages.some((pkg) => pkg.slug === slug);
  const isPhotographyPackage = photographyShowcasePackages.some((pkg) => pkg.slug === slug);

  if (isCulturalPackage) {
    permanentRedirect(`/cultural-tours/${slug}`);
  }

  if (isPhotographyPackage) {
    permanentRedirect(`/photography-tour/${slug}`);
  }

  permanentRedirect("/cultural-tours");
}
