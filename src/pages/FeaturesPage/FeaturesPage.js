import React from "react";
import "./featurespage.scss";
import { Navbar } from "components/Navbar/Navbar";
import { Overview } from "components/Overview/Overview";
import { Footer } from "components/Footer/Footer";
import { PlatformOverview } from "components/PlatformOverview/PlatformOverview";
const FeaturesPage = () => {
  return (
    <div className="features">
      <Navbar />
      <div className="overview-wrapper">
        <Overview />
      </div>
      <PlatformOverview />
    </div>
  );
};

export default FeaturesPage;
