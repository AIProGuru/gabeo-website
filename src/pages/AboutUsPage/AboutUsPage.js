import React from "react";
import "./aboutuspage.scss";
import { Navbar } from "components/Navbar/Navbar";
import { AboutUs } from "components/AboutUs/AboutUs";
import { Team } from "components/Team/Team";
import { Footer } from "components/Footer/Footer";
const AboutUsPage = () => {
  return (
    <div className="aboutus-page">
      <Navbar />
      <AboutUs />
      <div className="team">
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
