import React from "react";
import "./team.scss";
import { MemberCards } from "components/MemberCards/MemberCards";
export const Team = () => {
  const teamMembers = {
    vip: [
      {
        image: "/assets/avatars/divyang.png",
        name: "Divyang Sheth",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Co-founder & CTO",
        desc: "Bay Area tech leader with 12 years at Google; building platforms as the former Global Head of Cloud Engineering Product and Services.",
      },
      {
        image: "/assets/avatars/diego.png",
        name: "Diego Rafael",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Co-founder & CEO",
        desc: "MD with an entrepreneurial background and deep understanding of healthcare technologies. Over 12 years in leadership roles with two exits in distinct sectors.",
      },
      {
        image: "/assets/avatars/nick.jpg",
        name: "Nick Frenette",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Co-founder & CPO",
        desc: "Seasoned product wizard with over 15 years in RCM and health tech, boasting two successful exits and a decade of crafting innovative products at Athena Health.",
      },
    ],
    members: [
      {
        image: "/assets/avatars/david_oppergard.png",
        name: "David Oppergard",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Healthcare Executive",
      },
      {
        image: "/assets/avatars/rob_carter.png",
        name: "Rob Carter",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "SVP of TOI",
      },
      {
        image: "/assets/avatars/sarah_bezeredi.png",
        name: "Sarah Bezeredi",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Chief Quality Officer at Centene",
      },
      {
        image: "/assets/avatars/daniel_ward.png",
        name: "Daniel Ward",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "VP of Payments",
      },
      {
        image: "/assets/avatars/Abhinav Jindal.png",
        name: "Abhinav Jindal",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "VP of eClinical Works",
      },
      {
        image: "/assets/avatars/Samer Taleb.jpg",
        name: "Samer Taleb",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "M&A | Transformation",
      },
      {
        image: "/assets/avatars/Elizabeth McCalley.png",
        name: "Elizabeth McCalley",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Senior Strategic Advisor",
      },
      {
        image: "/assets/avatars/Sumanth Yamala.png",
        name: "Sumanth Yamala",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "AI Director at Accenture",
      },
      {
        image: "/assets/avatars/Khurrum Shah.png",
        name: "Khurrum Shah",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "CCO at Oncology Institute",
      },
    ],
  };
  return (
    <div className="team-wrapper">
      <div className="title">
        <h1>Meet our team</h1>
      </div>
      <MemberCards members={teamMembers} />
    </div>
  );
};
