import { FC, ReactNode, useMemo } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { CustomSliderItemProps } from "./CustomSliderItem/CustomSliderItem";
import NextButton from "./CustomNavigation/NextButton/NextButton";
import PrevButton from "./CustomNavigation/PrevButton/PrevButton";
import { Navigation } from "swiper/modules";
import { SwiperModule } from "swiper/types";
import "swiper/css/navigation";
import classNames from "classnames";

interface CustomSliderProps extends SwiperProps {
  items?: CustomSliderItemProps[];
  hasCustomNavigation?: boolean;
  className: string;
}

const CustomSlider: FC<CustomSliderProps> = (props): JSX.Element => {
  const { items, hasCustomNavigation, className, modules } = props;

  const itemsElement = useMemo<JSX.Element[]>(() => {
    if (!items) return [];

    return items.map((item) => (
      <SwiperSlide key={item.title}>{item.children}</SwiperSlide>
    ));
  }, []);

  const CustomNavigationItems = useMemo<ReactNode>(() => {
    if (hasCustomNavigation) {
      return (
        <>
          <NextButton className={className} />
          <PrevButton className={className} />
        </>
      );
    }
  }, [hasCustomNavigation, className]);

  const navigationProps = useMemo<SwiperProps["navigation"]>(() => {
    if (hasCustomNavigation) {
      return {
        enabled: true,
        nextEl: `.${className}-next`,
        prevEl: `.${className}-prev`,
      };
    }
  }, [hasCustomNavigation, className]);

  const customModules = useMemo<SwiperModule[] | undefined>(() => {
    let customModules: SwiperModule[] = [];

    if (hasCustomNavigation) {
      customModules.push(Navigation);
    }

    if (modules) {
      customModules.push(...modules);
    }

    return customModules;
  }, [modules, hasCustomNavigation]);

  return (
    <Swiper
      {...props}
      modules={customModules}
      navigation={navigationProps}
      className={classNames("custom-slider", className)}
    >
      {itemsElement}

      {CustomNavigationItems}
    </Swiper>
  );
};

export default CustomSlider;
