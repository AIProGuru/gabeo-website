import React from "react";
import "./vipcard.scss";
import { Link } from "react-router-dom";
export const VIPCard = ({ vip }) => {
  return (
    <div className="vipcard">
      <div className="avatar">
        <img src={vip.image} alt={vip.name} />
      </div>
      <div className="title">
        <div className="name">
          <h1>{vip.name}</h1>
          <p>{vip.role}</p>
        </div>
        <div className="social-link">
          <Link to={vip.linkedin}>
            <img src="/assets/logos/linkedin.svg" />
          </Link>
        </div>
      </div>
      <div className="desc">
        <p>{vip.desc}</p>
      </div>
    </div>
  );
};
