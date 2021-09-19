import React from "react";
import Home from "./home";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home testing", () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });
  test("contoh untuk render text yang tampil di halaman", () => {
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
    expect(screen.getByText("Get in touch")).toBeInTheDocument();
  });
  test("contoh test untuk mengetes apakah button sesuai fungsi", () => {
    const buttonToContact = screen.getByText(/Get in touch/);
    const buttonToNews = screen.getByText(/Read News/);
    fireEvent.click(buttonToContact);
    fireEvent.click(buttonToNews);
    expect(buttonToContact).toHaveAttribute("href", "/contact");

    expect(buttonToNews).toHaveAttribute("href", "/news");
  });
  test("mengetes fungsional jam", () => {
    const jam = screen.getByTestId(/jamtest/);
    expect(jam.textContent).toEqual(new Date().toLocaleTimeString());
  });
});
