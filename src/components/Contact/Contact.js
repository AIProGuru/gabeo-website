import React from "react";
import "./contact.scss";
import { Footer } from "components/Footer/Footer";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="content">
        <h1>Contact us</h1>
        <p>
          We value your input and are here to assist you. Whether you have
          inquiries, feedback, or are interested in exploring potential
          collaborations, please don't hesitate to reach out. Our dedicated team
          is ready to provide you with the information you need.
        </p>
        <Link to="/contact">Get Started</Link>
      </div>
      <Footer />
    </div>
  );
};
