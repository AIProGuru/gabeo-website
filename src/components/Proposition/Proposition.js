import React from "react";
import "./proposition.scss";
import { GabeoUI } from "components/GabeoUI/GabeoUI";
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
            <img src="/assets/images/proposition.png" alt="" />
          </div>
          <div className="gabeoUI">
            <GabeoUI />
          </div>
        </div>
      </div>
    </div>
  );
};
