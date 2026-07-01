import { fireEvent, render, screen, within } from "@testing-library/react";
import { Header } from "@/app/components/Header";

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
});
