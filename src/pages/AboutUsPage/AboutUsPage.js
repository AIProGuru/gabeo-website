import React, { useState, useEffect } from "react";
import "./aboutuspage.scss";
import { Navbar } from "components/Navbar/Navbar";
import { AboutUs } from "components/AboutUs/AboutUs";
import { Team } from "components/Team/Team";
import { Footer } from "components/Footer/Footer";
import { MobileNavbar } from "components/Navbar/MobileNavbar";
const AboutUsPage = () => {
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
    <div className="aboutus-page">
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <AboutUs />
      <div className="team">
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
