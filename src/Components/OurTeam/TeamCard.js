import React from "react";
import facebook from "../../Assets/Images/facebook.svg";
import linkedIn from "../../Assets/Images/linkedIn.svg";
import instagram from "../../Assets/Images/instagram.svg";
import twitter from "../../Assets/Images/twitter.svg";

const TeamCard = ({ data }) => {
  return (
    <div className="teamcard">
      <div
        className="team-card-main"
        style={{
          background: `url(${data.image})`,
        }}
      >
        <div className="team-card-flex">
          <div className="team-card-title">{data.name}</div>
          <div className="team-card-title-flex">
            <div className="team-card-sub-title">{data.title1}</div>
            <div className="team-card-sub-title">{data.title2}</div>
          </div>
          <div className="team-card-links">
            <a href={data.links[0]} target="_blank">
              <img src={facebook} alt="Facebook" className="team-card-icon" />
            </a>
            <a href={data.links[1]} target="_blank">
              <img src={linkedIn} alt="LinkedIn" className="team-card-icon" />
            </a>
            <a href={data.links[2]} target="_blank">
              <img src={instagram} alt="Instagram" className="team-card-icon" />
            </a>
            <a href={data.links[3]} target="_blank">
              <img src={twitter} alt="Twitter" className="team-card-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
