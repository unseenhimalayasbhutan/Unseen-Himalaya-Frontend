import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "../siteConfig";

export function CtaSection() {
  const whatsappMessage =
    "Hello Unseen Himalayas Bhutan, I would like to plan a Bhutan trip. Please help me with a custom itinerary.";

  const emailSubject = "Bhutan Custom Itinerary Request";
  const emailBody =
    "Hello Unseen Himalayas Bhutan,\n\nI would like to plan a Bhutan trip. Please help me with a custom itinerary.\n\nThank you.";

  return (
    <section className="cta-contact-section">
      <div className="cta-contact-overlay" />

      <div className="container">
        <div className="cta-contact-card">
          <div className="cta-contact-content">
            <span className="cta-contact-label">Plan Your Bhutan Journey</span>

            <h2>Connect with us</h2>

          

            <div className="cta-contact-buttons">
              <a
                href={`${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn-whatsapp"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
                <ArrowRight size={18} />
              </a>

              <a
                href={`${siteConfig.contact.emailHref}?subject=${encodeURIComponent(
                  emailSubject
                )}&body=${encodeURIComponent(emailBody)}`}
                className="cta-btn cta-btn-email"
              >
                <Mail size={20} />
                Send Email
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="cta-contact-note">
            <p>Custom itineraries</p>
            <p>Hotel assistance</p>
            <p>Private and group tours</p>
            <p>Private transportation</p>
            <p>Private guide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
