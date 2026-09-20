import { redirect } from "next/navigation";

import { photographyShowcasePackages } from "../../data/packageShowcases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return photographyShowcasePackages.map((pkg) => ({ slug: pkg.slug }));
}

export default async function BhutanTourDetailRedirectPage({ params }: PageProps) {
  const { slug } = await params;

  redirect(`/photography-tour/${slug}`);
}
