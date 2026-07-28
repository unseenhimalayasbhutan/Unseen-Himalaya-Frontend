import { notFound } from "next/navigation";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ItineraryPackageDetail } from "../../components/ItineraryPackageShowcase";
import {
  packageExclusions,
  packageInclusions,
  packageReservationNotes,
  packageTerms,
  photographyShowcasePackages,
} from "../../data/packageShowcases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return photographyShowcasePackages.map((pkg) => ({ slug: pkg.slug }));
}

export default async function BhutanTourDetailPage({ params }: PageProps) {
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
          terms={packageTerms}
          detailBasePath="/bhutan-tours"
        />
      </main>
      <Footer />
    </>
  );
}
