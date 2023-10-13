import React from "react";
import "./proposition.scss";
import PropositionImage from "assets/images/proposition.png";
import { ReactComponent as TopBar } from "assets/images/Top Bar.svg";
import { ReactComponent as Components } from "assets/images/Component 3.svg";
export const Proposition = () => {
  return (
    <div className="proposition">
      <div className="content">
        <div className="title">
          <h1>Value Proposition</h1>
          <p>
            We help healthcare organizations <b>recover revenue from payers</b>{" "}
            using a fully autonomous platform that can resubmit and appeal
            denials in seconds with the use of Generative AI.
          </p>
        </div>
        <div className="images">
          <div className="image">
            <img src={PropositionImage} alt="" />
          </div>
          <div className="gabeoUI">
            <TopBar />
            <Components />
          </div>
        </div>
      </div>
    </div>
  );
};
