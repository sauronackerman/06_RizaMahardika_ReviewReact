import React from "react";
import "../style.css";
import logo from "../img/logo-ALTA.png";
import { Link } from "react-router-dom";

const Headernews = () => {
  return (
    <div className="header d-flex flex-column flex-md-row align-items-center bg-white">
      <img src={logo} alt="logo" className="img-logo" />

      <nav className="my-2 my-md-0 mr-md-3 ms-md-auto">
        <Link
          to="/"
          className="p-2 text-color-nav1 text-decoration-none home-text-color"
        >
          HOME
        </Link>
        <Link className="p-2 text-color-nav2 text-decoration-none">ABOUT</Link>
        <Link className="p-2 text-color-nav2 text-decoration-none contact-text">
          EXPERIENCE
        </Link>
        <Link
          to="/contact"
          className="p-2 text-color-nav2 contact-costum text-decoration-none"
        >
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default Headernews;
