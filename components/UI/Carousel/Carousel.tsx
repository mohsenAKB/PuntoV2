import React, { FC, ReactNode } from "react";
import Items from "./Items/Items";
import Link from "next/link";
import HeadingSection from "../HeadingSection/HeadingSection";

export interface CarouselProps {
  heading: string;
  link: string;
  anchorText: string;
  items: [];
  children: ReactNode;
}

const Carousel: FC<CarouselProps> = ({
  heading,
  link,
  items,
  anchorText,
  children,
}): JSX.Element => {
  return (
    <section className="usages-slider">
      <div className="usages-slider__details">
        <HeadingSection anchorText={anchorText} heading={heading} link={link} />
      </div>
      <Items items={items}>{children}</Items>
    </section>
  );
};

export default Carousel;
