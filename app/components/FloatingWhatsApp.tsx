import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../siteConfig";

export function FloatingWhatsApp() {
  const whatsappMessage =
    "Hello Unseen Himalayas Bhutan, I would like to plan a Bhutan trip. Please help me with a custom itinerary.";
  const whatsappHref = `${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappHref}
      className="floating-whatsapp-cta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Unseen Himalayas Bhutan on WhatsApp"
    >
      <FaWhatsapp aria-hidden />
      <span>WhatsApp</span>
    </a>
  );
}
