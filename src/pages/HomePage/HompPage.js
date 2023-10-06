import React from "react";
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

const HompPage = () => {
  return (
    <div>
      <Navbar />
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
