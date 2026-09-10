import { notFound } from "next/navigation";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ItineraryPackageDetail } from "../../components/ItineraryPackageShowcase";
import {
  cyclingShowcasePackages,
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
  return cyclingShowcasePackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = cyclingShowcasePackages.find((pkg) => pkg.slug === slug);

  if (!item) return {};

  return createPackageMetadata({
    item,
    parentPath: "/cycling-tours",
    detailBasePath: "/cycling-tours",
    routeLabel: "Cycling Tour",
  });
}

export default async function CyclingTourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = cyclingShowcasePackages.find((pkg) => pkg.slug === slug);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="tour-pro-page cultural-pro-page cultural-pro-updated-page">
        <ItineraryPackageDetail
          routeLabel="Cycling Route"
          item={item}
          packages={cyclingShowcasePackages}
          inclusions={packageInclusions}
          exclusions={packageExclusions}
          reservationNotes={packageReservationNotes}
          terms={packageTerms}
          detailBasePath="/cycling-tours"
          showPrices={false}
        />
      </main>
      <Footer />
    </>
  );
}
