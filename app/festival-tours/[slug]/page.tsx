import { notFound } from "next/navigation";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ItineraryPackageDetail } from "../../components/ItineraryPackageShowcase";
import {
  festivalReservationNotes,
  festivalShowcasePackages,
  festivalTerms,
  packageExclusions,
  packageInclusions,
} from "../../data/packageShowcases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return festivalShowcasePackages.map((pkg) => ({ slug: pkg.slug }));
}

export default async function FestivalTourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = festivalShowcasePackages.find((pkg) => pkg.slug === slug);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="tour-pro-page festival-pro-page festival-pro-page-accordion">
        <ItineraryPackageDetail
          routeLabel="Festival Route"
          item={item}
          packages={festivalShowcasePackages}
          inclusions={packageInclusions}
          exclusions={packageExclusions}
          reservationNotes={festivalReservationNotes}
          terms={festivalTerms}
          detailBasePath="/festival-tours"
        />
      </main>
      <Footer />
    </>
  );
}
