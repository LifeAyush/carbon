import React from "react";
import "./journey.css";
import journey1 from "../../Assets/Images/journey1.png";
import journey2 from "../../Assets/Images/journey2.png";
import journey3 from "../../Assets/Images/journey3.png";
import JourneySlider from "./JourneySlider";

const Journey = () => {
  return (
    <div className="journey">
      <div className="journey-content">
        <span className="journey-content-subtitle">Your U-turn to</span>
        <span className="journey-content-title">Net Zero Journey</span>
      </div>
      <JourneySlider />
      {/* <div className="journey-carousel">
        <div className="journey-carousel-card-primary-border">
          <div className="journey-carousel-card-primary">
            <img
              src={journey1}
              alt="journey1"
              className="journey-carousel-card-img"
            />
            <div className="journey-carousel-card-mask" />
            <div className="journey-carousel-card-para">
              We fuel green initiatives for individuals and businesses,
              accelerating their path to Net Zero.
            </div>
          </div>
        </div>
        <div className="journey-carousel-card-secondary">
          <img
            src={journey2}
            alt="journey2"
            className="journey-carousel-card-img"
          />
        </div>
        <div className="journey-carousel-card-tertiary">
          <img
            src={journey3}
            alt="journey3"
            className="journey-carousel-card-img"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Journey;
