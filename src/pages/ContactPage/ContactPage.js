import { Footer } from "components/Footer/Footer";
import { Navbar } from "components/Navbar/Navbar";
import React, { useState } from "react";
import "./contactpage.scss";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [isBot, setIsBot] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-content">
          <h1>Request a free Demo!</h1>
          <form onSubmit={handleSubmit} className="custom-form">
            <div className="row">
              <div className="input-unit">
                <label>FULL NAME</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                ></input>
              </div>
              <div className="input-unit">
                <label>ROLE & POSITION</label>
                <input
                  type="text"
                  placeholder="Enter role & position"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="input-unit">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="input-unit">
                <label>PHONE NUMBER</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="input-unit">
                <label>COMPANY NAME OR ORGANIZATION</label>
                <input
                  type="text"
                  placeholder="Enter company name or organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="bot-check">
                <input
                  type="checkbox"
                  value={!isBot}
                  onChange={(e) => setIsBot(!isBot)}
                ></input>
                <p>Confirm that you are not bot</p>
              </div>
            </div>
            <div className="row">
              <button type="submit">Get Started</button>
            </div>
          </form>
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
