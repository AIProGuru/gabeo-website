import React from "react";
import "./aboutus.scss";

export const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="text">
        <h1>About us</h1>
        <p>
          We help healthcare organizations process unlimited claims at a
          fraction of the cost by leveraging GenAi with a fully autonomous
          denials management platform that delivers results in seconds.
        </p>
      </div>
      <img src="/assets/images/Aboutus.png" alt="" width="600px" />
    </div>
  );
};
