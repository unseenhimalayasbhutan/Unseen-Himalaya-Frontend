import { fireEvent, render, screen } from "@testing-library/react";
import { JourneysSection } from "@/app/components/JourneysSection";
import { TravelInfo } from "@/app/components/TravelInfo";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";

describe("shared interactive controls", () => {
  it("switches the active why-choose-us feature with a real button", () => {
    render(<WhyChooseUs />);

    const button = screen.getByRole("button", { name: "Deeply Rooted" });
    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(document.querySelector("#uh-whychoose-feature-2")).toBeChecked();
  });

  it("switches destinations and tour packages", () => {
    render(<JourneysSection />);

    const destination = document.querySelector(
      ".uh-destination-option-2",
    ) as HTMLButtonElement;
    fireEvent.click(destination);
    expect(destination).toHaveAttribute("aria-pressed", "true");
    expect(document.querySelector("#uh-destination-2")).toBeChecked();

    const tour = screen.getByRole("link", {
      name: /5-day classic western bhutan/i,
    });
    fireEvent.focus(tour);
    expect(tour).toHaveAttribute(
      "href",
      "/cultural-tours#itinerary-5-day-classic-western-bhutan",
    );
    expect(tour).toHaveAttribute("aria-current", "true");
    expect(tour).toHaveTextContent(
      "5-Day Classic Western Bhutan",
    );
    expect(tour).toHaveTextContent(
      "5 Days / 4 Nights",
    );
  });

  it("switches travel-planning steps", () => {
    render(<TravelInfo />);

    const button = screen.getByRole("button", {
      name: /we design your itinerary/i,
    });
    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(document.querySelector("#uh-travel-step-2")).toBeChecked();
  });
});
