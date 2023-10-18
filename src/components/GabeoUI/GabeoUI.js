import React from "react";
import "./gabeoui.scss";

export const GabeoUI = () => {
  return (
    <div className="gabeo-ui">
      <div className="tool-bar">
        <div className="logo">
          <img src="/assets/logos/Tab-bg.svg" alt="" className="logo-bg" />
          <img src="/assets/logos/Logo.svg" width="100%" className="logo-svg" />
        </div>
        <div className="buttons">
          <img src="/assets/icons/tab.svg" />
          <img src="/assets/icons/min.svg" />
          <img src="/assets/icons/max.svg" />
          <img src="/assets/icons/close.svg" />
        </div>
      </div>
      <div className="main-ui">
        <div className="header">
          <h3>Hi, I am Gabeo,</h3>
          <h4>your virtual assistant for Providence Health Revenue Cycle!</h4>
        </div>
        <div className="suggestions">
          <h2>Suggestions</h2>
          <p>Launch Dashboard</p>
        </div>
        <div className="chatbox">
          <h3>How can I help with your claims management?</h3>
          <p>
            Powered by: <strong>Gabeo.ai</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
