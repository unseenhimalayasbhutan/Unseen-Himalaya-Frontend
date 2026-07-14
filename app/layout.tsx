import type { Metadata } from "next";
import "./globals.css";
import "./itinerary-alignment.css";
import "./chatbot.css";
import { AiChatbot } from "./components/AiChatbot";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { siteConfig } from "./siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Unseen Himalayas Bhutan | Licensed Bhutan Tour Operator & DMC",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Bhutan tours",
    "Bhutan travel",
    "private Bhutan tours",
    "Bhutan trekking",
    "Bhutan festival tours",
    "Bhutan cultural tours",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Unseen Himalayas Bhutan | Licensed Bhutan Tour Operator & DMC",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: "Bhutan journey with Unseen Himalayas Bhutan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unseen Himalayas Bhutan | Licensed Bhutan Tour Operator & DMC",
    description: siteConfig.description,
    images: [siteConfig.defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${siteConfig.url}/#travelagency`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    logo: new URL("/logo.png", siteConfig.url).toString(),
    description: siteConfig.description,
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "Bhutan",
    },
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&family=Poppins:wght@300;400;500;600&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(travelAgencyJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <AiChatbot />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
