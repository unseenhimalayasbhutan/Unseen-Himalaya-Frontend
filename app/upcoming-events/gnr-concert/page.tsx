import type { Metadata } from "next";
import { featuredUpcomingEvent } from "../../data/upcomingEvents";
import { siteConfig } from "../../siteConfig";
import UpcomingEventsPage from "../page";

export const metadata: Metadata = {
  title: "GNR Concert Tour Package",
  description:
    "Book the Guns N' Roses Guwahati concert escape with coordinated travel from Bhutan, hotel stays, train tickets, transfers, and tour support.",
  alternates: {
    canonical: "/upcoming-events/gnr-concert",
  },
  openGraph: {
    title: `GNR Concert Tour Package | ${siteConfig.name}`,
    description: featuredUpcomingEvent.subtitle,
    url: "/upcoming-events/gnr-concert",
    images: [
      {
        url: featuredUpcomingEvent.brochureImage,
        width: 1200,
        height: 1600,
        alt: featuredUpcomingEvent.title,
      },
    ],
  },
};

export default UpcomingEventsPage;

