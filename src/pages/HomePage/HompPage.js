import React, { useState, useEffect } from "react";
import "./homepage.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "components/Hero/Hero";
import { Partnerships } from "components/Partnerships/Partnerships";
import { Overview } from "components/Overview/Overview";
import { Footer } from "components/Footer/Footer";
import { Contact } from "components/Contact/Contact";
import { Principle } from "components/Principle/Principle";
import { Proposition } from "components/Proposition/Proposition";
import { Team } from "components/Team/Team";
import { MobileNavbar } from "components/Navbar/MobileNavbar";

const HompPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 900);
  };

  // Add an event listener to handle window resize
  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []); // Empty dependency array to run this effect only once
  return (
    <div>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Hero />
      <Partnerships />
      <Overview />
      <Proposition />
      <div className="team">
        <Team />
      </div>
      <Principle />
      <Contact />
    </div>
  );
};

export default HompPage;
