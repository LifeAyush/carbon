import React, { useEffect, useRef } from "react";
import "./journey.css";
import JourneySlider from "./JourneySlider";

const Journey = () => {
  const cont = useRef(null);
  useEffect(() => {
    const slider = document.querySelectorAll(".journey-slider")[0];
    //console.log(slider)
    const custom = (e) => {
      transform(cont.current);
    };
    const transform = (elem) => {
      const offset = elem.parentElement.offsetTop;
      console.log(offset);
      let percentage = ((window.scrollY - offset) / window.innerHeight) * 100;
      slider.style.transform = `translate3d(${-percentage + 40}vw, 0, 0)`;
    };
    window.addEventListener("scroll", custom);

    return () => {
      window.removeEventListener("scroll", custom);
    };
  }, []);
  return (
    <div className="journey">
      <section className="journey-slider-container" ref={cont}>
        <div className="journey-content">
          <span className="journey-content-subtitle">Your U-turn to</span>
          <span className="journey-content-title">Net Zero Journey</span>
        </div>
        <JourneySlider />
      </section>
    </div>
  );
};

export default Journey;
