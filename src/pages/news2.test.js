import React from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { News } from "./news";

jest.mock("axios");

describe("News testing", () => {
  test("tes jumlah berita", async () => {
    const news = [
      { publishedAt: "1", title: "test1" },
      { publishedAt: "2", title: "test2" },
      { publishedAt: "3", title: "test3" },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { articles: news } })
    );

    render(
      <Router>
        <News />
      </Router>
    );
    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(3);
  });

  test("tes jika gagal", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(
      <Router>
        <News />
      </Router>
    );

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const items = await screen.findByText(/404 Error/);

    expect(items).toBeInTheDocument();
  });
});
