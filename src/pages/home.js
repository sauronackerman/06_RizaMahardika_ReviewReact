import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "./img/logo-ALTA.png";
import mathew from "./img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [jam, setJam] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => detik(), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  let detik = () => {
    setJam(new Date());
  };
  return (
    <div>
      <div className="header d-flex flex-column flex-md-row align-items-center bg-white">
        <img src={logo} alt="logo" className="img-logo" />

        <nav className="my-2 my-md-0 mr-md-3 ms-md-auto">
          <Link className="p-2 text-color-nav1 text-decoration-none home-text-color">
            HOME
          </Link>
          <Link className="p-2 text-color-nav2 text-decoration-none">
            ABOUT
          </Link>
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

      <div className="bg-image container-fluid">
        {/* <div style={{ position: "absolute", background: "green" }}> */}

        {/* </div> */}
        <div className="d-flex flex-wrap home-1">
          <section className="image-home">
            <span
              className="py-2 align-items-center"
              style={{
                borderRadius: 10,
                textAlign: "center",
                display: "block",
              }}
            >
              {jam.toLocaleTimeString()}
            </span>
            <img
              className="rounded-circle img-home"
              src={mathew}
              alt="Main Pict"
              width="355px"
              height="355px"
            />
          </section>
          <section className="text-home">
            <p className="p1 fw-bold">Hy, my name is</p>
            <p className="p2">Anne&nbsp;Sullivan</p>
            <p className="p3 fw-bold">I build thing for the web</p>
            <Link
              to="/contact"
              type="button"
              className="btn-costum rounded-pill"
            >
              Get in touch
            </Link>
            <Link
              to="/news"
              type="button"
              style={{ marginLeft: 4 }}
              className="btn-costum rounded-pill"
            >
              Read News
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
