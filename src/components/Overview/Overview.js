import React, { useState, useEffect } from "react";
import "./overview.scss";
export const Overview = () => {
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
    <div className="overview">
      <h1>Introducing rcmGPTtrademark: </h1>
      <h5>
        Redefining Claims Recovery – Swifter, More Affordable, and with Peerless
        Accuracy
      </h5>
      <p>Gabeo Denial management process</p>
      {!isMobile && (
        <div>
          <div className="process">
            <div className="denied">
              <img src="/assets/images/denied.svg" />
              <img src="/assets/images/223 1.png" alt="" />
            </div>
            <div className="main-process">
              <img src="/assets/images/Frame 427319478.svg" />
            </div>
            <div className="appeal">
              <img src="/assets/images/appeal.svg" />
            </div>
          </div>
          <div className="description">
            <p style={{ width: "191px" }}>
              <strong>Autonomously selects denied claims</strong> for processing
            </p>
            <img src="/assets/images/Line 100.svg" />
            <p style={{ width: "337px" }}>
              <strong>Autonomously identifies denial</strong> reason,
              establishes the best resolution path based on POS, collects
              necessary docs, draft payer forms & appeal letters
            </p>
            <img src="/assets/images/Line 100.svg" />
            <p style={{ width: "230px" }}>
              <strong>Autonomously resubmits and appeals</strong> corrected
              claim to payer - AR collection
            </p>
          </div>
          <div className="figures">
            <div className="provider">
              <img src="/assets/images/Provider.png" alt="" />
            </div>
            <div className="rcmGPT">
              <img src="/assets/images/rcmGPT.svg" />
            </div>
            <div className="payer">
              <div className="gadgets">
                <img src="/assets/images/money.png" alt="" />
                <img src="/assets/images/PaidInFull.svg" />
              </div>
              <img src="/assets/images/Payer.png" alt="" />
            </div>
          </div>
          <img src="/assets/images/Line 37.svg" width="100%" />
          <div className="overview-footer">
            <h3>(0) zero FTE touches</h3>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="mobile-process">
          <div>
            <img src="/assets/images/img.png" alt="" />
          </div>
          <img src="/assets/images/Line 102.svg" height="80px" />
          <img src="/assets/images/Frame 427319498.svg" />
          <img src="/assets/images/Line 102.svg" height="80px" />
          <div>
            <img src="/assets/images/img3.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};
