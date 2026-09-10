import type { MetadataRoute } from "next";
import {
  culturalShowcasePackages,
  cyclingShowcasePackages,
  festivalShowcasePackages,
  landEntryShowcasePackages,
  photographyShowcasePackages,
} from "./data/packageShowcases";
import { pageSeo } from "./seo";
import { siteConfig } from "./siteConfig";

type SitemapEntry = MetadataRoute.Sitemap[number];

const lastModified = new Date("2026-09-10T00:00:00.000Z");

const highPriorityRoutes = new Set<string>([
  "/",
  "/bhutan-tours",
  "/cultural-tours",
  "/festival-tours",
  "/bhutan-trekkings",
  "/cycling-tours",
  "/land-entry-tours",
  "/optional-tours",
  "/contact",
]);

const yearlyRoutes = new Set<string>([
  "/legal-documents",
  "/privacy-policy",
  "/terms",
]);

const routeImages: Record<string, string[]> = {
  "/": [siteConfig.defaultImage],
  "/about-bhutan": [
    "/village with rice paddy fields  DOT AA Original Bhutan Travels.jpg",
  ],
  "/about-us": ["/logo.png"],
  "/best-time": ["/Marcus Westberg Bumthang 202318.jpg"],
  "/bhutan-tours": ["/ppp-optimized.jpg"],
  "/bhutan-trekkings": ["/High mountain treks.jpg"],
  "/contact": [siteConfig.defaultImage],
  "/cultural-tours": ["/Haa Summer Festival6.jpg"],
  "/cycling-tours": ["/cycling.jpg"],
  "/facts": ["/Takins.jpg"],
  "/festival-calendar": ["/Thimphu Tshechu by Bassem Nimah88.jpg"],
  "/festival-tours": ["/Thimphu festival header2.jpg"],
  "/gnh-philosophies": ["/gnh.jpg"],
  "/land-entry-tours": ["/Phobjikha-valley-by-Alicia-Warner-56.jpg"],
  "/optional-tours": ["/rafting2.jpg"],
  "/places-to-visit": ["/Buddha-Dordenma-Statue-by-Alicia-Warner-16.jpg"],
  "/seasons": ["/Peach blossoms in front of the stunning Thimphu Dzong.JPG"],
  "/sdf": [siteConfig.defaultImage],
  "/upcoming-events": ["/guns-n-roses-concert-tour-brochure.png"],
  "/why-visit": ["/IMG_20231021_170519.jpg"],
};

const packageDetailRoutes = [
  ...getPackageRoutes("/bhutan-tours", photographyShowcasePackages),
  ...getPackageRoutes("/cultural-tours", culturalShowcasePackages),
  ...getPackageRoutes("/land-entry-tours", landEntryShowcasePackages),
  ...getPackageRoutes("/cycling-tours", cyclingShowcasePackages),
  ...getPackageRoutes("/festival-tours", festivalShowcasePackages),
];

function absoluteUrl(path: string) {
  return new URL(path.startsWith("/") ? path : `/${path}`, siteConfig.url).toString();
}

function getChangeFrequency(route: string): SitemapEntry["changeFrequency"] {
  if (route === "/" || route === "/festival-calendar") return "weekly";
  if (yearlyRoutes.has(route)) return "yearly";
  return "monthly";
}

function getPriority(route: string) {
  if (route === "/") return 1;
  if (highPriorityRoutes.has(route)) return 0.9;
  if (packageDetailRoutes.some((entry) => entry.path === route)) return 0.65;
  if (yearlyRoutes.has(route)) return 0.4;
  return 0.7;
}

function getPackageRoutes(
  basePath: string,
  packages: { slug: string; image: { src: string } }[],
) {
  return packages.map((pkg) => ({
    path: `${basePath}/${pkg.slug}`,
    images: pkg.image.src ? [pkg.image.src] : undefined,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", images: routeImages["/"] },
    ...Object.keys(pageSeo)
      .sort()
      .map((path) => ({ path, images: routeImages[path] })),
    ...packageDetailRoutes.sort((first, second) =>
      first.path.localeCompare(second.path),
    ),
  ];

  return routes.map(({ path, images }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: getChangeFrequency(path),
    priority: getPriority(path),
    images: images?.map(absoluteUrl),
  }));
}
