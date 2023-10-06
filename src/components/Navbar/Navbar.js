import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/logos/Logo.svg";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <Logo />
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
        <Link to="/start"> Get Started </Link>
      </div>
    </div>
  );
};
