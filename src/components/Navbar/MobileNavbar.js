import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
export const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {!showMenu && (
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
      )}

      {showMenu && (
        <div className="mobile-menu">
          <div className="menu">
            <ul>
              <li>
                <Link to="/">
                  <img
                    src="/assets/logos/White_Logotype_Horizontal_with_BG.svg"
                    alt=""
                  />
                </Link>
              </li>
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
          <div className="menu-close">
            <img
              src="/assets/icons/close Icon.svg"
              alt=""
              onClick={handleShow}
            />
          </div>
        </div>
      )}
    </>
  );
};
