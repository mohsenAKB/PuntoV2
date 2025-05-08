import React, { FC, ReactNode } from "react";
import SliderItems from "./SliderItems/SliderItems";
import Link from "next/link";
import BaseTooltip from "../Base/BaseTooltip/BaseTooltip";

export interface SliderItemProps {
  heading: string;
  link: string;
  slides: any;
  href?: any;
  ideas?: any[];
  tooltipDescription?: string;
}

const SliderItem: FC<SliderItemProps> = ({
  heading,
  link,
  slides,
  ideas,
  tooltipDescription,
}): JSX.Element => {
  return (
    <section className="usages-slider">
      <div className="usages-slider__details">
        <span className="usages-slider__details--span">
          <h2 className="usages-slider__details--heading">{heading}</h2>
          <BaseTooltip placement="top" title={tooltipDescription}>
            <img src="/assets/icons/info-circle.svg" alt="" />
          </BaseTooltip>
        </span>
        <Link className="usages-slider__details--link" href={link}>
          مشاهده همه
        </Link>
      </div>
      <SliderItems slides={slides} ideas={ideas} />
    </section>
  );
};

export default SliderItem;
