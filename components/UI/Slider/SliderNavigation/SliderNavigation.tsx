import classNames from 'classnames';
import React, { ReactNode, useMemo, useRef } from 'react';
import PreviousArrowIcon from '../Icons/PreviousArrowIcon';
import NextArrowIcon from '../Icons/NextArrowIcon';
import SliderNavigationPageNumber from './SliderNavigationPageNumber/SliderNavigationPageNumber';

interface SliderNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  showPageNumbers?: boolean
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({ currentSlide, totalSlides, onPrevious, onNext, showPageNumbers }) => {


  const pageNumberElement = useMemo<ReactNode>(() => {
    if (showPageNumbers && !isNaN(currentSlide) && totalSlides > 0) {
      return <SliderNavigationPageNumber
        current={currentSlide}
        total={totalSlides}
      />
    }

    return null

  }, [showPageNumbers, currentSlide, totalSlides])

  const onPreviousHandler: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation()
    onPrevious()
  }

  const onNextHandler: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation()
    onNext()
  }



  return (
    <>
      <div className="slider-navigation"
      >
        <span onClick={onPreviousHandler}
          className={classNames(
            { "slider-navigation__item--hide": isNaN(currentSlide) }
          )}
        >
          <PreviousArrowIcon />
        </span>

        <span onClick={onNextHandler}
          className={classNames(
            { "slider-navigation__item--hide": isNaN(currentSlide) }
          )}
        >
          <NextArrowIcon />
        </span>
      </div>

      {pageNumberElement}
    </>
  );
};

export default SliderNavigation;
