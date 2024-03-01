import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import "./journey.css";
import Carousel from "react-elastic-carousel";

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
        <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
          className="primary-card"
        />
        <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
          className="secondary-card"
        />
        <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
          className="secondary-card"
        />
        <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
          className="secondary-card"
        />
      </Carousel>
    </div>
  );
};

export default JourneySlider;
