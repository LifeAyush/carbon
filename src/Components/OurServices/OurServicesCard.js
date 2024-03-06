import React, { useState, useEffect } from "react";
import "./ourServices.css";

const OurServicesCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFlipped(false);
    }, 3000);
  }, [flipped]);

  return (
    <section className="service-card">
      <section className="service-card-inner">
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

        <div
          className="our-services-card-back"
          onClick={() => setFlipped(false)}
        >
          <div className="back-mask" />
          <img
            src={data.img}
            alt={data.title}
            className="our-services-card-bg-img"
          />
          <div className="our-services-card-backtext">{data.para}</div>
        </div>
      </section>
    </section>
  );
};

export default OurServicesCard;
