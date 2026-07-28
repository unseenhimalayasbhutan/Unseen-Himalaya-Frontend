import { notFound } from "next/navigation";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ItineraryPackageDetail } from "../../components/ItineraryPackageShowcase";
import {
  culturalShowcasePackages,
  packageExclusions,
  packageInclusions,
  packageReservationNotes,
  packageTerms,
} from "../../data/packageShowcases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return culturalShowcasePackages.map((pkg) => ({ slug: pkg.slug }));
}

export default async function CulturalTourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = culturalShowcasePackages.find((pkg) => pkg.slug === slug);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="tour-pro-page cultural-pro-page cultural-pro-updated-page">
        <ItineraryPackageDetail
          routeLabel="Cultural Route"
          item={item}
          packages={culturalShowcasePackages}
          inclusions={packageInclusions}
          exclusions={packageExclusions}
          reservationNotes={packageReservationNotes}
          terms={packageTerms}
          detailBasePath="/cultural-tours"
        />
      </main>
      <Footer />
    </>
  );
}
