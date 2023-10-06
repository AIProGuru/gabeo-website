import React from "react";
import "./membercard.scss";
import { Link } from "react-router-dom";
export const MemberCard = ({ member }) => {
  return (
    <div className="membercard">
      <div className="avatar">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="content">
        <h1>{member.name}</h1>
        <p>{member.role}</p>

        <Link to={member.linkedin}>
          <p>{member.linkedin}</p>
        </Link>
      </div>
    </div>
  );
};
