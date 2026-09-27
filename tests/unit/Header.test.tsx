import { fireEvent, render, screen, within } from "@testing-library/react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

const staticPublicRoutes = [
  "/",
  "/about-bhutan",
  "/about-us",
  "/best-time",
  "/bhutan-tours",
  "/contact",
  "/cultural-tours",
  "/currency",
  "/cycling-tours",
  "/documents",
  "/facts",
  "/faq",
  "/festival-calendar",
  "/festival-tours",
  "/flights-getting-around",
  "/gnh-philosophies",
  "/land-entry-tours",
  "/legal-documents",
  "/optional-tours",
  "/photography-tour",
  "/places-to-visit",
  "/privacy-policy",
  "/sdf",
  "/seasons",
  "/terms",
  "/upcoming-events",
  "/why-visit",
] as const;

describe("Header", () => {
  it("opens a keyboard-accessible mobile navigation and submenu", () => {
    render(<Header />);

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    const mobileNavigation = document.querySelector("#mobile-navigation");
    expect(mobileNavigation).toHaveAttribute("aria-hidden", "false");

    const overviewButton = within(mobileNavigation as HTMLElement).getByRole(
      "button",
      { name: "Bhutan Overview" },
    );

    fireEvent.click(overviewButton);

    expect(overviewButton).toHaveAttribute("aria-expanded", "true");
    expect(
      mobileNavigation?.querySelector('a[href="/about-bhutan"]'),
    ).toBeInTheDocument();
  });

  it("surfaces every static public content page in the shared navigation", () => {
    render(
      <>
        <Header />
        <Footer />
      </>,
    );

    for (const route of staticPublicRoutes) {
      expect(
        document.querySelector(`a[href="${route}"]`),
      ).toBeInTheDocument();
    }
  });
});
