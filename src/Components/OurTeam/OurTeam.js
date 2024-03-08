import React from "react";
import "./ourTeam.css";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  const teamData = [
    {
      id: 1,
      image: "/Images/Team/team1.png",
      name: "Vineet Sagar",
      title1: "Co-Founder",
      title2: "CEO",
      links: [
        "https://www.facebook.com",
        "https://www.linkedin.com",
        "https://www.instagram.com",
        "https://www.twitter.com",
      ],
    },
    {
      id: 2,
      image: "/Images/Team/team2.png",
      name: "Mr. PK Sinha",
      title1: "Board Chairman",
      title2: "Non-Executive Director",
      links: [
        "https://www.facebook.com",
        "https://www.linkedin.com",
        "https://www.instagram.com",
        "https://www.twitter.com",
      ],
    },
    {
      id: 3,
      image: "/Images/Team/team3.png",
      name: "Rakesh Sarin",
      title1: "Co-Founder",
      title2: "Director",
      links: [
        "https://www.facebook.com",
        "https://www.linkedin.com",
        "https://www.instagram.com",
        "https://www.twitter.com",
      ],
    },
    {
      id: 4,
      image: "/Images/Team/team4.png",
      name: "Dr. RK Malhotra",
      title1: "Co-Founder",
      title2: "Director",
      links: [
        "https://www.facebook.com",
        "https://www.linkedin.com",
        "https://www.instagram.com",
        "https://www.twitter.com",
      ],
    },
    {
      id: 5,
      image: "/Images/Team/team5.png",
      name: "Prof. KK Pant",
      title1: "Advisory Board",
      title2: "",
      links: [
        "https://www.facebook.com",
        "https://www.linkedin.com",
        "https://www.instagram.com",
        "https://www.twitter.com",
      ],
    },
  ];
  return (
    <div className="our-team">
      <div className="our-team-text-flex">
        <div className="ott-title">OUR TEam</div>
        <div className="ott-hr" />
        <div className="ott-subtitle">
          Meet the minds behind the movement for a sustainable future. Our
          passionate team founders with collaborating Advisory board Members
          bring decades of experience to drive positive change.
        </div>
      </div>
      <div className="team-flex">
        {teamData.map((data) => {
          return <TeamCard data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default OurTeam;
