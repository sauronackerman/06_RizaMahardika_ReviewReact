import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { News } from "./news";

describe("News testing", () => {
  beforeEach(() => {
    render(
      <Router>
        <News />
      </Router>
    );
  });
  test("tes button jika diklik muncul news", () => {
    const buttonNews = screen.getByText(/Get News/);
    fireEvent.click(buttonNews);
    expect(screen.getAllByTestId(/newslist/)).toBeInTheDocument();
  });
  test("mengetes jumlah news yang dirilis harus 10", () => {
    const buttonNews = screen.getByText(/Get News/);
    fireEvent.click(buttonNews);
    expect(screen.getAllByTestId(/jumlahnews/)).toHaveLength(10);
  });
});
