import NextArrowIcon from "@/components/UI/Slider/Icons/NextArrowIcon";
import PreviousArrowIcon from "@/components/UI/Slider/Icons/PreviousArrowIcon";
import React, { FC } from "react";

interface NextButtonProps {
  className: string
}

const NextButton: FC<NextButtonProps> = ({
  className
}) => {
  return (
    <div className={`${className}-next swiper-button swiper-button-next swiper-slider-button custom-navigation__button custom-navigation__button--next`}>
      <PreviousArrowIcon />
    </div>
  );
};

export default NextButton;
