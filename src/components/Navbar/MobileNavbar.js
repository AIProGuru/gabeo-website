import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/logos/Logo.svg";
import { ReactComponent as Icon } from "assets/icons/Menu icon.svg";
export const MobileNavbar = () => {
  const handleShow = () => {
    alert("asdfasdf");
  };
  return (
    <div className="mobile-navbar">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="btn">
        <Icon onClick={handleShow} />
      </div>
    </div>
  );
};
