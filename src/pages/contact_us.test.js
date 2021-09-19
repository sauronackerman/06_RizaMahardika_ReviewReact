import React from "react";
import Contact from "./contact_us";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("mengetes funsional kontak", () => {
  beforeEach(() => {
    render(
      <Router>
        <Contact />
      </Router>
    );
  });
  test("contoh jika input gagal muncul text span alert", () => {
    // const email = screen.getByLabelText(/Email Address/);
    // fireEvent.input(email, {
    //   target: { value: "riza@saja" },
    // });
    // expect(
    //   screen.getByText("Email harus diisi dengan email yang valid")
    // ).toBeInTheDocument();
  });
});
