"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown, ChevronRight, Clock, Globe2, Menu, X } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { siteConfig } from "../siteConfig";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Adventures",
    href: "#",
    submenu: [
      {
        label: "Cultural & Nature Tours",
        href: "/cultural-tours",
        description: "Immerse in Bhutanese culture",
      },
      //{
        // label: "Bhutan Trekkings",
        // href: "/bhutan-trekkings",
       // description: "Hike through the Himalayas",
     // },
      {
        label: "Festival Tours",
        href: "/festival-tours",
        description: "Experience Bhutan's vibrant festivals",
      },
      {
        label: "Photography Tours",
        href: "/bhutan-tours",
        description: "Scenic routes for photographers",
      },
      
      {
        label: "Customizable Tours",
        href: "/optional-tours",
        description: "Design your own adventure",
      },
    ],
  },
  {
    label: "Bhutan Overview",
    href: "#",
    submenu: [
      {
        label: "About Bhutan",
        href: "/about-bhutan",
        description: "Land of the Thunder Dragon",
      },
      {
        label: "Seasons",
        href: "/seasons",
        description: "Best time to visit",
      },
      {
        label: "GNH Philosophies",
        href: "/gnh-philosophies",
        description: "Gross National Happiness",
      },
      {
        label: "Facts About Bhutan",
        href: "/facts",
        description: "Interesting insights",
      },
      {
        label: "Why Visit Bhutan",
        href: "/why-visit",
        description: "Unique experiences await",
      },
    ],
  },
  {
    label: "Travelling to Bhutan",
    href: "#",
    submenu: [
      {
        label: "Documents Required",
        href: "/documents",
        description: "Visa and passport info",
      },
      {
        label: "Currency and Payments",
        href: "/currency",
        description: "Money matters",
      },
      {
        label: "Best Time to Travel",
        href: "/best-time",
        description: "Plan your visit",
      },
      {
        label: "Festival Calendar",
        href: "/festival-calendar",
        description: "Plan around Bhutan festival dates",
      },
      {
        label: "FAQ",
        href: "/faq",
        description: "Frequently asked questions",
      },
    ],
  },
    {
    label: "Company",
    href: "#",
    submenu: [
      {
        label: "About Us",
        href: "/about-us",
        description: "Learn more about Unseen Himalayas",
      },
      {
        label: "Contact Us",
        href: "/contact",
        description: "Get in touch with our team",
      },
      {
        label: "Policy",
        href: "/privacy-policy",
        description: "How we protect your information",
      },
      {
        label: "Terms & Conditions",
        href: "/terms",
        description: "Our booking and service terms",
      },
     
    ],
  },
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

const translationLanguages = [
  { code: "", label: "English" },
  { code: "zh-CN", label: "Mandarin Chinese" },
  { code: "ja", label: "Japanese" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "ar", label: "Arabic" },
];

type GoogleTranslateOptions = {
  pageLanguage: string;
  includedLanguages: string;
  autoDisplay: boolean;
};

type GoogleTranslateElementConstructor = new (
  options: GoogleTranslateOptions,
  elementId: string,
) => void;

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: GoogleTranslateElementConstructor;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

function getSubmenuId(label: string) {
  return `mobile-submenu-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function getBhutanTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Thimphu",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function readGoogleTranslateCookie() {
  if (typeof document === "undefined") return "";

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith("googtrans="));
  const value = cookie?.split("=")[1] || "";
  const languageCode = decodeURIComponent(value).split("/").pop() || "";

  return translationLanguages.some((language) => language.code === languageCode)
    ? languageCode
    : "";
}

function setGoogleTranslateCookie(languageCode: string) {
  const cookieValue = languageCode ? `/en/${languageCode}` : "";
  const maxAge = languageCode ? 60 * 60 * 24 * 365 : 0;
  const encodedValue = encodeURIComponent(cookieValue);

  document.cookie = `googtrans=${encodedValue}; path=/; max-age=${maxAge}; SameSite=Lax`;

  const hostname = window.location.hostname;
  if (hostname.includes(".")) {
    document.cookie = `googtrans=${encodedValue}; path=/; domain=.${hostname}; max-age=${maxAge}; SameSite=Lax`;
  }
}

function applyGoogleTranslate(languageCode: string) {
  const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");

  if (!combo) return false;

  combo.value = languageCode;
  combo.dispatchEvent(new Event("change", { bubbles: true }));

  return true;
}

function getTranslateProxyUrl(languageCode: string) {
  return `https://translate.google.com/translate?sl=en&tl=${encodeURIComponent(
    languageCode,
  )}&u=${encodeURIComponent(window.location.href)}`;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(
    null
  );
  const [desktopOpenSubmenu, setDesktopOpenSubmenu] = useState<string | null>(
    null
  );
  const [bstTime, setBstTime] = useState("BST --:--:--");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isTranslatorReady, setIsTranslatorReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Do not lock the body scroll on mobile.
  // This keeps the header/menu scrolling naturally with the page content.

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
        setMobileOpenSubmenu(null);
      } else {
        setDesktopOpenSubmenu(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setMobileOpenSubmenu(null);
        setDesktopOpenSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const updateBhutanTime = () => {
      setBstTime(`BST ${getBhutanTime()}`);
    };

    updateBhutanTime();
    const intervalId = window.setInterval(updateBhutanTime, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const languagePreferenceId = window.setTimeout(() => {
      setSelectedLanguage(readGoogleTranslateCookie());
    }, 0);

    window.googleTranslateElementInit = () => {
      const TranslateElement = window.google?.translate?.TranslateElement;
      const translateHost = document.getElementById("google_translate_element");

      if (!TranslateElement || !translateHost || translateHost.childElementCount) {
        setIsTranslatorReady(true);
        return;
      }

      new TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "zh-CN,ja,fr,es,ar",
          autoDisplay: false,
        },
        "google_translate_element",
      );

      setIsTranslatorReady(true);
    };

    return () => {
      window.clearTimeout(languagePreferenceId);
      window.googleTranslateElementInit = undefined;
    };
  }, []);

  useEffect(() => {
    if (!isTranslatorReady || !selectedLanguage) return;

    const timeoutId = window.setTimeout(() => {
      applyGoogleTranslate(selectedLanguage);
    }, 400);

    return () => window.clearTimeout(timeoutId);
  }, [isTranslatorReady, selectedLanguage]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileOpenSubmenu(null);
    setDesktopOpenSubmenu(null);
  };

  const toggleMobileMenu = () => {
    if (isMenuOpen) {
      setMobileOpenSubmenu(null);
    }
    setIsMenuOpen((current) => !current);
  };

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setGoogleTranslateCookie(languageCode);

    if (!languageCode) {
      window.location.reload();
      return;
    }

    if (!applyGoogleTranslate(languageCode)) {
      window.setTimeout(() => {
        if (!applyGoogleTranslate(languageCode)) {
          window.location.href = getTranslateProxyUrl(languageCode);
        }
      }, 500);
    }
  };

  return (
    <>
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onReady={() => window.googleTranslateElementInit?.()}
      />

      <header className={`site-header ${isScrolled ? "site-header-scrolled" : ""}`}>
        <div className="top-bar" role="note">
          <div className="top-bar-inner">
            <span className="top-bar-logo-frame" aria-hidden="true">
              <Image
                src="/rgob-logo.png"
                alt=""
                width={28}
                height={28}
                className="top-bar-logo"
                priority
              />
            </span>

            <p className="top-bar-text">
              <span className="top-bar-text-strong">
                Certified & licensed tour operator
              </span>
              <span className="top-bar-text-divider" aria-hidden="true">
                •
              </span>
              <span>
                Department of Tourism, Royal Government of Bhutan
              </span>
            </p>

            <div className="top-bar-tools">
              <div className="bst-clock" aria-label="Bhutan Standard Time">
                <Clock aria-hidden="true" />
                <span suppressHydrationWarning>{bstTime}</span>
              </div>

              <label className="language-selector">
                <span className="language-selector-label">
                  <Globe2 aria-hidden="true" />
                  Translate
                </span>
                <select
                  value={selectedLanguage}
                  onChange={(event) => handleLanguageChange(event.target.value)}
                  aria-label="Translate this website"
                >
                  {translationLanguages.map((language) => (
                    <option key={language.label} value={language.code}>
                      {language.label}
                    </option>
                  ))}
                </select>
              </label>

              <span
                id="google_translate_element"
                className="google-translate-host"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <nav
          className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="logo"
            aria-label="Unseen Himalayas home page"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo-transparent.png"
              alt="Unseen Himalayas Logo"
              width={70}
              height={70}
              priority
              className="logo-image"
            />
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`nav-item ${
                  desktopOpenSubmenu === link.label ? "open" : ""
                }`}
                onMouseLeave={() => setDesktopOpenSubmenu(null)}
              >
                {link.submenu ? (
                  <>
                    <button
                      type="button"
                      className="dropdown-btn"
                      aria-haspopup="true"
                      aria-expanded={desktopOpenSubmenu === link.label}
                      onClick={() =>
                        setDesktopOpenSubmenu((current) =>
                          current === link.label ? null : link.label
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown className="dropdown-chevron" aria-hidden />
                    </button>

                    <div className="dropdown-menu">
                      <div className="dropdown-inner">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="dropdown-item"
                            onClick={() => setDesktopOpenSubmenu(null)}
                          >
                            <div>
                              <div className="dropdown-item-title">
                                {item.label}
                              </div>
                              <div className="dropdown-item-description">
                                {item.description}
                              </div>
                            </div>
                            <ChevronRight
                              className="dropdown-item-icon"
                              aria-hidden
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="nav-link"
                    onClick={() => setDesktopOpenSubmenu(null)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="desktop-social-icons" aria-label="Social media links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
                className="desktop-social-icon"
                aria-label={`Visit us on ${social.label}`}
                title={social.label}
              >
                <social.icon aria-hidden />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <button
          type="button"
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        />
      )}

      <aside
        id="mobile-navigation"
        className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-header">
          <Link
            href="/"
            className="mobile-menu-logo"
            aria-label="Unseen Himalayas home page"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo-transparent.png"
              alt="Unseen Himalayas Logo"
              width={64}
              height={64}
              className="mobile-logo-image"
            />
          </Link>

          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X aria-hidden />
          </button>
        </div>

        <div className="mobile-menu-inner">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => {
              const isSubmenuOpen = mobileOpenSubmenu === link.label;
              const submenuId = getSubmenuId(link.label);

              return (
                <li key={link.label} className="mobile-nav-item">
                  {link.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileOpenSubmenu(isSubmenuOpen ? null : link.label)
                        }
                        className="mobile-dropdown-btn"
                        aria-expanded={isSubmenuOpen}
                        aria-controls={submenuId}
                      >
                        <span>{link.label}</span>
                        <ChevronRight
                          className={`mobile-chevron ${
                            isSubmenuOpen ? "rotated" : ""
                          }`}
                          aria-hidden
                        />
                      </button>

                      <div
                        id={submenuId}
                        className={`mobile-submenu ${
                          isSubmenuOpen ? "open" : ""
                        }`}
                      >
                        <div className="mobile-submenu-inner">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="mobile-submenu-item"
                              onClick={closeMobileMenu}
                            >
                              <div className="mobile-submenu-item-title">
                                {item.label}
                              </div>
                              <div className="mobile-submenu-item-description">
                                {item.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mobile-social-section">
            <h4 className="mobile-social-title">Follow Us</h4>
            <div className="mobile-social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mobile-social-icon"
                  aria-label={`Visit us on ${social.label}`}
                >
                  <social.icon aria-hidden />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
