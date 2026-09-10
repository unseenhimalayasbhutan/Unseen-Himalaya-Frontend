import { notFound } from "next/navigation";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ItineraryPackageDetail } from "../../components/ItineraryPackageShowcase";
import {
  landEntryShowcasePackages,
  packageExclusions,
  packageInclusions,
  packageReservationNotes,
  packageTerms,
} from "../../data/packageShowcases";
import { createPackageMetadata } from "../../seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return landEntryShowcasePackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = landEntryShowcasePackages.find((pkg) => pkg.slug === slug);

  if (!item) return {};

  return createPackageMetadata({
    item,
    parentPath: "/land-entry-tours",
    detailBasePath: "/land-entry-tours",
    routeLabel: "Land-Entry Tour",
  });
}

export default async function LandEntryTourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = landEntryShowcasePackages.find((pkg) => pkg.slug === slug);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="tour-pro-page cultural-pro-page cultural-pro-updated-page land-entry-pro-page">
        <ItineraryPackageDetail
          routeLabel="Land-Entry Route"
          item={item}
          packages={landEntryShowcasePackages}
          inclusions={packageInclusions}
          exclusions={packageExclusions}
          reservationNotes={packageReservationNotes}
          terms={packageTerms}
          detailBasePath="/land-entry-tours"
          showInrPrices
        />
      </main>
      <Footer />
    </>
  );
}
