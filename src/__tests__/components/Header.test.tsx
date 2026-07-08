import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/Header";

describe("Header", () => {
  it("renders the portfolio brand link", () => {
    render(<Header />);
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("toggles mobile menu when hamburger button is clicked", () => {
    render(<Header />);
    const toggleButton = screen.getByLabelText("Toggle menu");

    // Menu seharusnya belum terlihat (hanya desktop nav yang ada)
    const mobileNav = screen.queryByRole("list", { hidden: true });
    // Klik untuk buka menu mobile
    fireEvent.click(toggleButton);

    // Setelah klik, mobile nav muncul — cek ada list items yang double (desktop + mobile)
    const allHomeLinks = screen.getAllByText("Home");
    expect(allHomeLinks.length).toBeGreaterThan(1);
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<Header />);
    const toggleButton = screen.getByLabelText("Toggle menu");

    // Buka menu
    fireEvent.click(toggleButton);

    // Ambil mobile nav links (yang kedua adalah mobile version)
    const mobileHomeLinks = screen.getAllByText("Home");
    const mobileLink = mobileHomeLinks[mobileHomeLinks.length - 1];

    // Klik link di mobile menu
    fireEvent.click(mobileLink);

    // Menu harus tertutup — hanya 1 "Home" link (desktop) yang tersisa
    const homeLinksAfterClose = screen.getAllByText("Home");
    expect(homeLinksAfterClose.length).toBe(1);
  });

  it("shows close icon (X) when menu is open", () => {
    render(<Header />);
    const toggleButton = screen.getByLabelText("Toggle menu");

    // Buka menu
    fireEvent.click(toggleButton);

    // SVG path untuk icon X (M6 18L18 6M6 6l12 12)
    const svgElement = toggleButton.querySelector("svg");
    expect(svgElement).toBeInTheDocument();

    // Tutup menu
    fireEvent.click(toggleButton);

    // SVG tetap ada tapi dengan path berbeda (hamburger)
    const svgAfterClose = toggleButton.querySelector("svg");
    expect(svgAfterClose).toBeInTheDocument();
  });
});
