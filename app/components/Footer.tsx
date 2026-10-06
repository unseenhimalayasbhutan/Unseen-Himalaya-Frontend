import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { siteConfig } from "../siteConfig";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Discover Bhutan", href: "/about-bhutan" },
  { label: "Why Visit Bhutan", href: "/why-visit" },
  { label: "Bhutan Facts", href: "/facts" },
  { label: "Culture and Heritage", href: "/gnh-philosophies" },
  { label: "Seasons in Bhutan", href: "/seasons" },
  { label: "Places to Visit", href: "/places-to-visit" },
  { label: "Cultural & Nature Tours", href: "/cultural-tours" },
  { label: "Photography Tours", href: "/photography-tour" },
  { label: "Festival Tours", href: "/festival-tours" },
  { label: "Cycling Tours", href: "/cycling-tours" },
  { label: "Land-Entry Tours", href: "/land-entry-tours" },
  { label: "Customizable Tours", href: "/optional-tours" },
  { label: "Upcoming Events", href: "/upcoming-events" },
  { label: "Contact", href: "/contact" },
];

const travelLinks = [
  { label: "Plan Your Trip", href: "/best-time" },
  { label: "Visa and Entry", href: "/documents" },
  { label: "SDF and Trip Costs", href: "/sdf" },
  { label: "Currency and Payments", href: "/currency" },
  { label: "Flights and Getting Around", href: "/flights-getting-around" },
  { label: "Festival Calendar", href: "/festival-calendar" },
  { label: "Travel FAQs", href: "/faq" },
  { label: "Legal Documents", href: "/legal-documents" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const socialLinks = [
  {
    icon: FaFacebook,
    href: siteConfig.social.facebook,
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: siteConfig.social.instagram,
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: siteConfig.social.youtube,
    label: "YouTube",
  },
  {
    icon: FaTiktok,
    href: siteConfig.social.tiktok,
    label: "TikTok",
  },
  {
    icon: FaWhatsapp,
    href: siteConfig.contact.whatsappHref,
    label: "WhatsApp",
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      
      <div className="site-footer-main">
        <div className="container">
          <div className="site-footer-grid">
            <div className="site-footer-brand">
              <Link
                href="/"
                className="site-footer-logo"
                aria-label="Unseen Himalayas Bhutan home page"
              >
                <Image
                  src="/logo-transparent.png"
                  alt="Unseen Himalayas Bhutan Logo"
                  width={96}
                  height={96}
                  className="site-footer-logo-image"
                />
              </Link>

              <p>
                Bhutan journeys planned by a licensed local operator, with
                private guides, route advice, document support, and practical
                ground coordination from Thimphu.
              </p>

              <div className="site-footer-social" aria-label="Social media links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`Visit us on ${social.label}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <social.icon aria-hidden />
                  </a>
                ))}
              </div>
            </div>

            <div className="site-footer-col">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer-col">
              <h3>Travel Info</h3>
              <ul>
                {travelLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer-contact">
              <h3>Contact Us</h3>

              <ul>
                <li>
                  <MapPin aria-hidden />
                  <span>Thimphu, Bhutan</span>
                </li>
                <li>
                  <Phone aria-hidden />
                  <span className="site-footer-contact-stack">
                    <a href={siteConfig.contact.phoneHref}>
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <a href={siteConfig.contact.secondaryPhoneHref}>
                      {siteConfig.contact.secondaryPhoneDisplay}
                    </a>
                  </span>
                </li>
                <li>
                  <Mail aria-hidden />
                  <a href={siteConfig.contact.emailHref}>
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>

              <Link href="/contact" className="site-footer-contact-btn">
                Contact Our Team
                <ArrowRight aria-hidden />
              </Link>
            </div>

            <div className="site-footer-certificate">
              <div className="site-footer-certificate-badge">
                <ShieldCheck aria-hidden />
              </div>
              <h3>Certified Operator</h3>
              <p>
                Licensed Bhutan tour operator and Bhutan-based destination
                management company with local guidance and professional travel
                coordination.
              </p>
            </div>
          </div>

          <div className="site-footer-bottom">
            <p>© 2026 Unseen Himalayas Bhutan. All rights reserved.</p>
            <div>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span aria-hidden>•</span>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
