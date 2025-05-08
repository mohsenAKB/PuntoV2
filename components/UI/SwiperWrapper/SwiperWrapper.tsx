import React, { FC, ReactNode, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import NextButton from "./NextButton/NextButton";
import PrevButton from "./PrevButton/PrevButton";

export interface SwiperWrapperProps {
  items: any[];
  children: (item: any) => ReactNode;
}

const SwiperWrapper: FC<SwiperWrapperProps> = ({
  items,
  children,
}): JSX.Element => {
  const Items = useMemo(() => {
    return items.map((item) => (
      <SwiperSlide key={item.id}>{children(item)}</SwiperSlide>
    ));
  }, [items, children]);

  return (
    <div className="usages-slider-items items">
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
            slidesPerView: 7,
          },
          1568: {
            slidesPerView: 4,
          },
          2500: {
            slidesPerView: 12,
          },
        }}
        spaceBetween={16}
        modules={[Navigation]}
        className="usages-slider-items__swiper"
        loop
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next.swiper-button-next--usages",
          prevEl: ".swiper-button-prev.swiper-button-prev--usages",
        }}
      >
        {Items}

        <NextButton />
        <PrevButton />
      </Swiper>
    </div>
  );
};

export default SwiperWrapper;
