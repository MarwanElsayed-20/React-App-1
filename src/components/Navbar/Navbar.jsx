import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(0);

  let changeScroll = () => {
    let position = window.scrollY;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          scroll === 0 && "py-4"
        } fixed-top `}
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-brand text-uppercase text-white fw-bold fs-2"
          >
            start framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase fw-bold">
              <li className="nav-item me-3 rounded-3">
                <NavLink
                  to="/about"
                  className="nav-link text-white rounded-3"
                  aria-current="page"
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item me-3 rounded-3">
                <NavLink
                  to="/portfolio"
                  className="nav-link text-white rounded-3"
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3 rounded-3">
                <NavLink
                  to="/contact"
                  className="nav-link text-white rounded-3"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
