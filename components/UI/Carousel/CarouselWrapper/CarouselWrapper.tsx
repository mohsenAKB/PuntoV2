import React, { FC, JSX, ReactNode, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import CarouselItem from "../CarouselItem/CarouselItem";
import { CarouselProps } from "../Carousel";
import NextButton from "../NextButton/NextButton";
import PrevButton from "../PrevButton/PrevButton";
import { IMaterial } from "@/@types/entities/material";
import { ISmallResidentialSpace } from "@/@types/entities/small-residential-space";
import { IStyle } from "@/@types/entities/style";
import { IUsage } from "@/@types/entities/usage";

export interface CarouselWrapperProps extends CarouselProps {
  data: IUsage[] | IStyle[] | IMaterial[] | ISmallResidentialSpace[];
  isDesigner?: boolean;
  isJob?: boolean;
}

const CarouselWrapper: FC<CarouselWrapperProps> = ({
  entity,
  data,
  onClick,
  isDesigner,
  isJob,
}): JSX.Element => {
  const uniqueClass = `${entity}`;
  const renderedItems = useMemo(() => {
    if (Array.isArray(data)) {
      return data.map((card: IUsage) => (
        <SwiperSlide key={card.id}>
          <CarouselItem
            key={card.id}
            data={card}
            entity={entity}
            onClick={onClick}
            isDesigner={isDesigner}
            isJob={isJob}
          />
        </SwiperSlide>
      ));
    } else {
      return null;
    }
  }, [data, entity, onClick]);

  return (
    <div className={`${entity}-slider-items`}>
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
        modules={[Navigation, Scrollbar]}
        loop
        className={`${entity}-slider-items__swiper ${uniqueClass}`}
        navigation={{
          enabled: true,
          prevEl: `.swiper-button-prev.swiper-button-prev--${entity}`,
          nextEl: `.swiper-button-next.swiper-button-next--${entity}`,
        }}
      >
        {renderedItems}
      </Swiper>

      <NextButton entity={entity} />
      <PrevButton entity={entity} />
    </div>
  );
};

export default CarouselWrapper;
