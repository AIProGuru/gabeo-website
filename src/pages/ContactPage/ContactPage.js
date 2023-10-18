import { Footer } from "components/Footer/Footer";
import { Navbar } from "components/Navbar/Navbar";
import { MobileNavbar } from "components/Navbar/MobileNavbar";
import React, { useState, useEffect } from "react";
import "./contactpage.scss";
import axios from "axios";
import { environment } from "environment";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [isBot, setIsBot] = useState(true);
  const baseURL = environment.BASE_URL;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !fullName || !role || isBot || !company) {
      alert("Fill up all the form !!!");
      return;
    }
    const user = {
      email,
      full_name: fullName,
      role,
      phone: phoneNumber,
      organization: company,
    };
    axios.post(`${baseURL}/v1/user`, user).then((res) => {
      if (res.data.status === "success") {
        alert("Request sent. We will get in touch with you soon.");
        console.log("success");
      } else {
        alert(res.data.message);
        console.log("message", res.data.message);
      }
    });
  };
  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
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
