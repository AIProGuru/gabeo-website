import React from "react";
import "./team.scss";
import Divyang from "../../assets/avatars/divyang.png";
import Diego from "../../assets/avatars/diego.png";
import Nick from "assets/avatars/nick.jpg";
import David_Oppergard from "assets/avatars/david_oppergard.png";
import Rob from "assets/avatars/rob_carter.png";
import Sarah from "assets/avatars/sarah_bezeredi.png";
import Daniel from "assets/avatars/daniel_ward.png";
import Abhinav from "assets/avatars/Abhinav Jindal.png";
import Samer from "assets/avatars/Samer Taleb.jpg";
import Elizabeth from "assets/avatars/Elizabeth McCalley.png";
import Sumanth from "assets/avatars/Sumanth Yamala.png";
import Khurrum from "assets/avatars/Khurrum Shah.png";
import { MemberCards } from "components/MemberCards/MemberCards";
export const Team = () => {
  const teamMembers = {
    vip: [
      {
        image: Divyang,
        name: "Divyang Sheth",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Co-founder & CTO",
        desc: "Bay Area tech leader with 12 years at Google; building platforms as the former Global Head of Cloud Engineering Product and Services.",
      },
      {
        image: Diego,
        name: "Diego Rafael",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Co-founder & CEO",
        desc: "MD with an entrepreneurial background and deep understanding of healthcare technologies. Over 12 years in leadership roles with two exits in distinct sectors.",
      },
      {
        image: Nick,
        name: "Nick Frenette",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Co-founder & CPO",
        desc: "Seasoned product wizard with over 15 years in RCM and health tech, boasting two successful exits and a decade of crafting innovative products at Athena Health.",
      },
    ],
    members: [
      {
        image: David_Oppergard,
        name: "David Oppergard",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Healthcare Executive",
      },
      {
        image: Rob,
        name: "Rob Carter",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "SVP of TOI",
      },
      {
        image: Sarah,
        name: "Sarah Bezeredi",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Chief Quality Officer at Centene",
      },
      {
        image: Daniel,
        name: "Daniel Ward",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "VP of Payments",
      },
      {
        image: Abhinav,
        name: "Abhinav Jindal",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "VP of eClinical Works",
      },
      {
        image: Samer,
        name: "Samer Taleb",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "M&A | Transformation",
      },
      {
        image: Elizabeth,
        name: "Elizabeth McCalley",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "Senior Strategic Advisor",
      },
      {
        image: Sumanth,
        name: "Sumanth Yamala",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "AI Director at Accenture",
      },
      {
        image: Khurrum,
        name: "Khurrum Shah",
        linkedin: "https://www.linkedin.com/in/divyang-sheth/",
        role: "CCO at Oncology Institute",
      },
    ],
  };
  return (
    <div className="team-wrapper">
      <h1>Meet our team</h1>
      <MemberCards members={teamMembers} />
    </div>
  );
};
