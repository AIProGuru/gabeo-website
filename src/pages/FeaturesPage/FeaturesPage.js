import React, { useState, useEffect } from "react";
import "./featurespage.scss";
import { Navbar } from "components/Navbar/Navbar";
import { Overview } from "components/Overview/Overview";
import { Footer } from "components/Footer/Footer";
import { PlatformOverview } from "components/PlatformOverview/PlatformOverview";
import { MobileNavbar } from "components/Navbar/MobileNavbar";
const FeaturesPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 900);
  };

  // Add an event listener to handle window resize
  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []); // Empty dependency array to run this effect only once
  return (
    <div className="features">
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <div className="overview-wrapper">
        <Overview />
      </div>
      <PlatformOverview />
    </div>
  );
};

export default FeaturesPage;
