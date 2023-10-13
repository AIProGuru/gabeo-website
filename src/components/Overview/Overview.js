import React, { useState, useEffect } from "react";
import "./overview.scss";
import { ReactComponent as Denied } from "assets/images/denied.svg";
import Accessary from "assets/images/223 1.png";
import { ReactComponent as Process } from "assets/images/Frame 427319478.svg";
import { ReactComponent as Appeal } from "assets/images/appeal.svg";
import { ReactComponent as Arrow } from "assets/images/Line 100.svg";
import Provider from "assets/images/Provider.png";
import { ReactComponent as RcmGPT } from "assets/images/rcmGPT.svg";
import Money from "assets/images/money.png";
import { ReactComponent as PaidInFull } from "assets/images/PaidInFull.svg";
import Payer from "assets/images/Payer.png";
import { ReactComponent as BigArrow } from "assets/images/Line 37.svg";
import Image1 from "assets/images/img.png";
import { ReactComponent as DownArrow } from "assets/images/Line 102.svg";
import { ReactComponent as Image2 } from "assets/images/Frame 427319498.svg";
import Image3 from "assets/images/img3.png";
export const Overview = () => {
  const [isMobile, setIsMobile] = useState(true);
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
              <Denied />
              <img src={Accessary} alt="" />
            </div>
            <div className="main-process">
              <Process />
            </div>
            <div className="appeal">
              <Appeal />
            </div>
          </div>
          <div className="description">
            <p style={{ width: "191px" }}>
              <strong>Autonomously selects denied claims</strong> for processing
            </p>
            <Arrow />
            <p style={{ width: "337px" }}>
              <strong>Autonomously identifies denial</strong> reason,
              establishes the best resolution path based on POS, collects
              necessary docs, draft payer forms & appeal letters
            </p>
            <Arrow />
            <p style={{ width: "230px" }}>
              <strong>Autonomously resubmits and appeals</strong> corrected
              claim to payer - AR collection
            </p>
          </div>
          <div className="figures">
            <div className="provider">
              <img src={Provider} alt="" />
            </div>
            <div className="rcmGPT">
              <RcmGPT />
            </div>
            <div className="payer">
              <div className="gadgets">
                <img src={Money} alt="" />
                <PaidInFull />
              </div>
              <img src={Payer} alt="" />
            </div>
          </div>
          <BigArrow />
          <div className="overview-footer">
            <h3>(0) zero FTE touches</h3>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="mobile-process">
          <div>
            <img src={Image1} alt="" />
          </div>
          <DownArrow />
          <Image2 />
          <DownArrow />
          <div>
            <img src={Image3} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};
