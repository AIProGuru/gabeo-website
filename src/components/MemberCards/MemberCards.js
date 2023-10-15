import React from "react";
import "./membercards.scss";
import { useEffect } from "react";
import { VIPCard } from "components/VIPCard/VIPCard";
import { MemberCard } from "components/MemberCard/MemberCard";
export const MemberCards = ({ members }) => {
  useEffect(() => {
    console.log(members);
  }, []);
  const vipRows = [];
  const memberRows = [];
  const membersPerRow = 3;

  for (let i = 0; i < members.vip.length; i += membersPerRow) {
    vipRows.push(members.vip.slice(i, i + membersPerRow));
    console.log(vipRows);
  }
  for (let i = 0; i < members.members.length; i += membersPerRow) {
    memberRows.push(members.members.slice(i, i + membersPerRow));
    console.log(memberRows);
  }

  return (
    <div className="cards">
      {vipRows.map((row, rowIndex) => (
        <div className="row-vip" key={rowIndex}>
          {row.map((vip, vipIndex) => (
            <div className="vip" key={vipIndex}>
              <VIPCard vip={vip} />
            </div>
          ))}
        </div>
      ))}
      {memberRows.map((row, rowIndex) => (
        <div className="row-member" key={rowIndex}>
          {row.map((member, memberIndex) => (
            <div className="member" key={memberIndex}>
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
