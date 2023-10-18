import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/assets/logos/Logo.svg" />
        </Link>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/features">FEATURES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className="btn">
        <Link to="/contact"> Get Started </Link>
      </div>
    </div>
  );
};
