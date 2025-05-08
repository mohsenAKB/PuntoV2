import React, { FC, ReactNode, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import NextButton from "./NextButton/NextButton";
import PrevButton from "./PrevButton/PrevButton";
import UsagesSliderItem from "./UsagesSliderItem/UsagesSliderItem";
import LastIdeasItem from "./LastIdeasItem/LastIdeasItem";

export interface SliderItemsProps {
  slides: {
    id: number;
    user: ReactNode;
    title: string;
    image: string | null;
  }[];
  ideas: any[];
}

const SliderItems: FC<SliderItemsProps> = ({ slides, ideas }): JSX.Element => {
  const SliderList = slides ? slides : ideas;

  const renderedItems = useMemo(() => {

    return SliderList.map(
      (slide: { id: number; user: ReactNode; title: string }) => (
        <SwiperSlide key={slide.id}>
          {ideas ? (
            <LastIdeasItem ideas={slide} />
          ) : (
            <UsagesSliderItem singleSlide={slide} />
          )}
        </SwiperSlide>
      )
    );
  }, [SliderList]);

  return (
    <div className="usages-slider-items">
      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 5,
          },
          1568: {
            slidesPerView: 5,
          },
          2500: {
            slidesPerView: 12,
          },
        }}
        spaceBetween={16}
        modules={[Navigation]}
        className="usages-slider-items__swiper"
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next.swiper-button-next--usages",
          prevEl: ".swiper-button-prev.swiper-button-prev--usages",
        }}
      >
        {renderedItems}

        <NextButton />
        <PrevButton />
      </Swiper>
    </div>
  );
};

export default SliderItems;
