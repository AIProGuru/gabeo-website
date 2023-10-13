import React from "react";
import { ReactComponent as Interface } from "assets/images/interface.svg";
import { ReactComponent as TextLogo } from "assets/images/text+logo.svg";
import "./hero.scss";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <div className="title">
          <h1 style={{ color: "#044BD9" }}>Autonomous revenue recovery</h1>
          <h2>Converting denials into cash with Generative AI</h2>
        </div>
        <div className="content">
          <div className="desc">
            <TextLogo />
          </div>
        </div>
        <div className="buttons">
          <Link to="/contact">Get Started</Link>
          <Link to="/demo">Free demo</Link>
        </div>
      </div>
      <div className="hero-image">
        <Interface className="hero-image-svg" />
      </div>
    </div>
  );
};
