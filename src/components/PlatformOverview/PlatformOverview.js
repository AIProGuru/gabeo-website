import React from "react";
import "./platformoverview.scss";
import { Footer } from "components/Footer/Footer";
export const PlatformOverview = () => {
  return (
    <div className="platform-overview">
      <div className="title-content">
        <h1>Platform Overview</h1>
        <div className="content">
          <img
            src="/assets/images/platform-overview.svg"
            className="platform-img"
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};
