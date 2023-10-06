import React from "react";
import "./platformoverview.scss";
import { ReactComponent as Overview } from "assets/images/platform-overview.svg";
import { Footer } from "components/Footer/Footer";
export const PlatformOverview = () => {
  return (
    <div className="platform-overview">
      <div className="title-content">
        <h1>Platform Overview</h1>
        <div className="content">
          <Overview />
          <Footer />
        </div>
      </div>
    </div>
  );
};
