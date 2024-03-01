import React, { useCallback, useEffect, useRef } from "react";
import "./styles.css";
import "./journey.css";
import Carousel from "react-elastic-carousel";
import journey1 from "../../Assets/Images/journey1.png";
import journey2 from "../../Assets/Images/journey2.png";
import journey3 from "../../Assets/Images/journey3.png";

const JourneySlider = () => {
  const wheeling = useRef(false);
  const wheelingTimeout = useRef(false);
  const slider = useRef(null);
  const sliderContainer = useRef(null);
  const currentIndex = useRef(0);
  const IMAGES_LENGTH = 4;

  const getNextCurrentIndex = (index) => {
    if (index === IMAGES_LENGTH) {
      return index;
    }

    return index + 1;
  };

  const getPrevCurrentIndex = (index) => {
    if (index === 0) {
      return index;
    }

    return index - 1;
  };

  const shouldPreventDefault = useCallback(({ isNext }) => {
    if (!isNext && currentIndex.current > 0) {
      return true;
    }

    if (isNext && currentIndex.current < 4) {
      return true;
    }

    return false;
  }, []);

  const scroll = useCallback(
    (e) => {
      const isNext = e.wheelDelta > 0;
      if (shouldPreventDefault({ isNext })) {
        e.preventDefault();
      }
      if (slider === null) return null;

      clearTimeout(wheelingTimeout.current);
      wheelingTimeout.current = setTimeout(function () {
        wheeling.current = false;
      }, 100);

      if (wheeling.current === true) {
        return null;
      }

      if (isNext) {
        slider.current.slideNext();
        currentIndex.current = getNextCurrentIndex(currentIndex.current);
      } else {
        slider.current.slidePrev();
        currentIndex.current = getPrevCurrentIndex(currentIndex.current);
      }
      wheeling.current = true;
    },
    [slider]
  );

  const stopWheeling = useCallback(() => {
    wheeling.current = false;
  }, []);

  useEffect(() => {
    if (!sliderContainer.current) {
      return null;
    }
    const sliderContainerCurrent = sliderContainer.current;
    sliderContainerCurrent.addEventListener("wheel", scroll, true);

    return () => {
      sliderContainerCurrent.removeEventListener("wheel", scroll, false);
    };
  }, [scroll, stopWheeling]);

  return (
    <div ref={sliderContainer} className="tenants-middle">
      <Carousel
        onScroll={scroll}
        itemsToShow={3}
        ref={slider}
        pagination={false}
        showArrows={false}
        infinite
        className="carousel-flex"
      >
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
        <div className="journey-carousel-card-tertiary">
          <img
            src={journey3}
            alt="journey3"
            className="journey-carousel-card-img"
          />
        </div>
        {/* <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
          className="secondary-card"
        /> */}
      </Carousel>
    </div>
  );
};

export default JourneySlider;
