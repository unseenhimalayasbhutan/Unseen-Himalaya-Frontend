import { render, screen } from "@testing-library/react";
import { CtaSection } from "@/app/components/CtaSection";
import { siteConfig } from "@/app/siteConfig";

describe("CtaSection", () => {
  it("uses the shared contact details for both primary actions", () => {
    render(<CtaSection />);

    const whatsapp = screen.getByRole("link", { name: /chat on whatsapp/i });
    const email = screen.getByRole("link", { name: /send email/i });

    expect(whatsapp).toHaveAttribute(
      "href",
      expect.stringContaining(siteConfig.contact.whatsappHref),
    );
    expect(email).toHaveAttribute(
      "href",
      expect.stringContaining(siteConfig.contact.emailHref),
    );
  });
});
