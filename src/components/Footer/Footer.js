import React from "react";
import "./footer.scss";
import { ReactComponent as WhiteLogo } from "assets/logos/WhiteLogo.svg";
import { ReactComponent as SocialLinks } from "assets/logos/Social.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <WhiteLogo />
      <p>© 2023 Gabeo.AI. All Rights Reserved. </p>
      <div className="social-links">
        <SocialLinks />
      </div>
    </div>
  );
};
