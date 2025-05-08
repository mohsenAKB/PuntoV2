import PrevButtonIcon from "@/components/Project/ProjectInformation/ProjectGallery/ProjectImgPreview/ImageThumbGallery/PrevButton/PrevButtonIcon/PrevButtonIcon";
import NextArrowIcon from "@/components/UI/Slider/Icons/NextArrowIcon";
import React, { FC } from "react";

interface PrevButtonProps {
  className: string
}

const PrevButton: FC<PrevButtonProps> = ({
  className
}) => {
  return (
    <div className={`${className}-prev swiper-button swiper-button-prev swiper-slider-button custom-navigation__button custom-navigation__button--prev`}>
      <NextArrowIcon />
    </div>
  );
};

export default PrevButton;
