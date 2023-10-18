import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
export const MobileNavbar = () => {
  const handleShow = () => {
    alert("asdfasdf");
  };
  return (
    <div className="mobile-navbar">
      <div className="logo">
        <Link to="/">
          <img src="/assets/logos/Logo.svg" />
        </Link>
      </div>
      <div className="btn">
        <img src="/assets/icons/Menu icon.svg" onClick={handleShow} />
      </div>
    </div>
  );
};
