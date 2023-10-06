import React from "react";
import "./partnerships.scss";
import OHSU from "assets/logos/OHSU.png";
import AthenaLogo from "assets/logos/athenahealth_logo.png";
import Scripps from "assets/logos/Scripps_logo.png";
import TOILogo from "assets/logos/TOI_logo.png";
import { ReactComponent as Innovacare } from "assets/logos/Innovacare_logo.svg";

export const Partnerships = () => {
  return (
    <div className="partnerships">
      <h1>POTENTIAL PARTNERSHIPS</h1>
      <div className="logos">
        <div className="logo">
          <img src={AthenaLogo} alt="" />
        </div>
        <div className="logo">
          <img src={OHSU} alt="" />
        </div>
        <div className="logo">
          <img src={Scripps} alt="" />
        </div>
        <div className="logo">
          <img src={TOILogo} alt="" />
        </div>
        <div>
          <Innovacare />
        </div>
      </div>
    </div>
  );
};
