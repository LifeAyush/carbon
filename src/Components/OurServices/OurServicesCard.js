import React, { useState } from "react";
import "./ourServices.css";
import ReactCardFlip from "react-card-flip";

const OurServicesCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className="our-services-card" onClick={() => setFlipped(true)}>
        <div className="text-ramp" />
        <div className="hover-mask" />
        <img
          src={data.img}
          alt={data.title}
          className="our-services-card-bg-img"
        />
        <div className="our-services-card-text">{data.title}</div>
      </div>

      <div className="our-services-card-back" onClick={() => setFlipped(false)}>
        <div className="back-mask" />
        <img
          src={data.img}
          alt={data.title}
          className="our-services-card-bg-img"
        />
        <div className="our-services-card-backtext">{data.para}</div>
      </div>
    </ReactCardFlip>
  );
};

export default OurServicesCard;
