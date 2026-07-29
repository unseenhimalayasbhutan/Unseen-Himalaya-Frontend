import type { Metadata } from "next";
import { featuredUpcomingEvent } from "../data/upcomingEvents";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Upcoming event tours from Unseen Himalayas Bhutan, including the Guns N' Roses Concert at Guwahati package.",
  alternates: {
    canonical: "/upcoming-events",
  },
  openGraph: {
    title: `Upcoming Events | ${siteConfig.name}`,
    description: featuredUpcomingEvent.subtitle,
    url: "/upcoming-events",
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

export default function UpcomingEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
