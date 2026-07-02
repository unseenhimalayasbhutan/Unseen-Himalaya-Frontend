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
  { label: "About Bhutan", href: "/about-bhutan" },
  { label: "Photography Tours", href: "/bhutan-tours" },
  { label: "Festival Tours", href: "/festival-tours" },
  { label: "Contact", href: "/contact" },
];

const travelLinks = [
  { label: "Documents Required", href: "/documents" },
  { label: "Best Time to Visit", href: "/best-time" },
  { label: "Currency & Payments", href: "/currency" },
  
  { label: "Cultural & Nature Tours", href: "/cultural-tours" },
  { label: "FAQ", href: "/faq" },
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
                Authentic Bhutan journeys crafted by a licensed Bhutan tour
                operator and DMC with local expertise, cultural respect, and
                meaningful experiences beyond the usual guidebook route.
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
                  <a href={siteConfig.contact.phoneHref}>
                    {siteConfig.contact.phoneDisplay}
                  </a>
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
