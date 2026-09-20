import { notFound } from "next/navigation";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ItineraryPackageDetail } from "../../components/ItineraryPackageShowcase";
import {
  packageExclusions,
  packageInclusions,
  packageReservationNotes,
  photographyPackageTerms,
  photographyShowcasePackages,
} from "../../data/packageShowcases";
import { createPackageMetadata } from "../../seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return photographyShowcasePackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = photographyShowcasePackages.find((pkg) => pkg.slug === slug);

  if (!item) return {};

  return createPackageMetadata({
    item,
    parentPath: "/photography-tour",
    detailBasePath: "/photography-tour",
    routeLabel: "Photography Tour",
  });
}

export default async function PhotographyTourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = photographyShowcasePackages.find((pkg) => pkg.slug === slug);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="tour-pro-page bhutantour-pro-page">
        <ItineraryPackageDetail
          routeLabel="Photography Route"
          item={item}
          packages={photographyShowcasePackages}
          inclusions={packageInclusions}
          exclusions={packageExclusions}
          reservationNotes={packageReservationNotes}
          terms={photographyPackageTerms}
          detailBasePath="/photography-tour"
        />
      </main>
      <Footer />
    </>
  );
}
