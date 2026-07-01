import type { MetadataRoute } from "next";
import { pageSeo } from "./seo";
import { siteConfig } from "./siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["/", ...Object.keys(pageSeo)];

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("tours") ? 0.9 : 0.7,
  }));
}
