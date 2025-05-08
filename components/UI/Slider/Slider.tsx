import React, { useState, useEffect, FC, useRef } from 'react';
import SliderNavigation from './SliderNavigation/SliderNavigation';
import { SliderProps } from './types';
import Slide from './Slide/Slide';
import classnames from "classnames";

const Slider: FC<SliderProps> = ({ slides, autoPlay = false, autoPlayInterval = 3000, showPageNumbers, className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMouseEnter = useRef<boolean>(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (autoPlay) {
      interval = setInterval(() => {
        isMouseEnter.current || setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, autoPlayInterval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, autoPlayInterval, slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const setMouseEnter = (): void => {
    isMouseEnter.current = true
  }

  const setMouseLeave = (): void => {
    isMouseEnter.current = false
  }

  return (
    <div
      className={classnames("slider", className)}
      onMouseEnter={setMouseEnter}
      onMouseLeave={setMouseLeave}>
      <div
        className="slide-container"
        style={{ transform: `translateX(${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </div>
      <SliderNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        showPageNumbers={showPageNumbers}
      />
    </div>
  );
};

export default Slider;
