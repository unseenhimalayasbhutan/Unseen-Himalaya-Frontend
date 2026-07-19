import type { MetadataRoute } from "next";
import { pageSeo } from "./seo";
import { siteConfig } from "./siteConfig";

type IndexedPath = "/" | keyof typeof pageSeo;
type SitemapEntry = MetadataRoute.Sitemap[number];

const lastModified = new Date("2026-07-19T00:00:00.000Z");

const highPriorityRoutes = new Set<IndexedPath>([
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

const yearlyRoutes = new Set<IndexedPath>([
  "/legal-documents",
  "/privacy-policy",
  "/terms",
]);

const routeImages: Partial<Record<IndexedPath, string[]>> = {
  "/": [siteConfig.defaultImage],
  "/about-bhutan": [
    "/village with rice paddy fields  DOT AA Original Bhutan Travels.jpg",
  ],
  "/about-us": ["/logo.png"],
  "/best-time": ["/Marcus Westberg Bumthang 202318.jpg"],
  "/bhutan-tours": ["/ppp.png"],
  "/bhutan-trekkings": ["/High mountain treks.jpg"],
  "/contact": ["/cover2.png"],
  "/cultural-tours": ["/Haa Summer Festival6.jpg"],
  "/cycling-tours": ["/cycling.jpg"],
  "/facts": ["/Takins.jpg"],
  "/festival-calendar": ["/Thimphu Tshechu by Bassem Nimah88.jpg"],
  "/festival-tours": ["/Thimphu festival header2.jpg"],
  "/gnh-philosophies": ["/gnh.jpg"],
  "/land-entry-tours": ["/Phobjikha-valley-by-Alicia-Warner-56.jpg"],
  "/optional-tours": ["/rafting2.jpg"],
  "/seasons": ["/Peach blossoms in front of the stunning Thimphu Dzong.JPG"],
  "/why-visit": ["/IMG_20231021_170519.jpg"],
};

function absoluteUrl(path: string) {
  return new URL(path.startsWith("/") ? path : `/${path}`, siteConfig.url).toString();
}

function getChangeFrequency(route: IndexedPath): SitemapEntry["changeFrequency"] {
  if (route === "/" || route === "/festival-calendar") return "weekly";
  if (yearlyRoutes.has(route)) return "yearly";
  return "monthly";
}

function getPriority(route: IndexedPath) {
  if (route === "/") return 1;
  if (highPriorityRoutes.has(route)) return 0.9;
  if (yearlyRoutes.has(route)) return 0.4;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...Object.keys(pageSeo).sort()] as IndexedPath[];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
    images: routeImages[route]?.map(absoluteUrl),
  }));
}
