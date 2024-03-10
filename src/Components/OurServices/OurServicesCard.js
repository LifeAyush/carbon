import React from "react";
import "./ourServices.css";

const OurServicesCard = ({ data }) => {
  return (
    <section className="service-card">
      <section className="service-card-inner">
        <div className="our-services-card">
          <div className="text-ramp" />
          <div className="hover-mask" />
          <img
            src={data.img}
            alt={data.title}
            className="our-services-card-bg-img"
          />
          <div className="our-services-card-text">{data.title}</div>
        </div>

        <div className="our-services-card-back">
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
