import type { MetadataRoute } from "next";
import { siteConfig } from "./siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/Sitemap: https://www.theunseenhimalayas.com/sitemap.xml",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
