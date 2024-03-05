import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-main-flex">
        <p className="hero-para">
          We guide our partners towards net zero emissions, making every
          footprint count for a cleaner, brighter business landscape.
        </p>
        <a href="#next-section">
          <div className="hero-cta">Get Started</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
