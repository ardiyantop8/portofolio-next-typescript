import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("renders the hero heading", () => {
    render(<Hero />);
    expect(screen.getByText(/Ardiyantoputra/)).toBeInTheDocument();
  });

  it("renders call-to-action buttons", () => {
    render(<Hero />);
    expect(screen.getByText("Lihat Projects")).toBeInTheDocument();
    expect(screen.getByText("Hubungi Saya")).toBeInTheDocument();
  });
});
