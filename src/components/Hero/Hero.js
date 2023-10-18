import React from "react";
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
            <div className="line"></div>
            <div className="text">
              <img src="/assets/images/rcmGPT.svg" alt="" />
              <h3>Elevate Revenue Management with rcmGPTTM:</h3>
              <h4>
                The premier autonomous platform that recovers revenue by
                seamlessly resubmitting and appealing payer denials.
              </h4>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Link to="/contact">Get Started</Link>
          <Link to="/demo">Free demo</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/images/interface.svg" className="hero-image-svg" />
      </div>
    </div>
  );
};
