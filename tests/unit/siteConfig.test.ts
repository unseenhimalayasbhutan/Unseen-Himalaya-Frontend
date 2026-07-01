import { siteConfig } from "@/app/siteConfig";

describe("siteConfig", () => {
  it("keeps public contact links normalized and placeholder-free", () => {
    expect(siteConfig.contact.emailHref).toBe(
      `mailto:${siteConfig.contact.email}`,
    );
    expect(siteConfig.contact.phoneHref).toBe(
      `tel:+${siteConfig.contact.whatsappNumber}`,
    );
    expect(siteConfig.contact.whatsappHref).toBe(
      `https://wa.me/${siteConfig.contact.whatsappNumber}`,
    );
    expect(new URL(siteConfig.url).protocol).toBe("https:");
    expect(siteConfig.description.length).toBeGreaterThan(80);

    expect(JSON.stringify(siteConfig)).not.toMatch(/x{3,}|example|placeholder/i);
  });
});
