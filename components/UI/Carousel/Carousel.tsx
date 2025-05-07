import React, { FC, JSX } from "react";
import CarouselWrapper from "./CarouselWrapper/CarouselWrapper";
import { IMaterial } from "@/@types/entities/material";
import { ISmallResidentialSpace } from "@/@types/entities/small-residential-space";
import { IStyle } from "@/@types/entities/style";
import { IUsage } from "@/@types/entities/usage";
import TopCard, { TopCardProps } from "../Cards/TopCard/TopCard";


export interface CarouselProps {
  entity: string;
  data: IUsage[] | IStyle[] | IMaterial[] | ISmallResidentialSpace[];
  onClick: (id: number) => void;
  isDesigner?: boolean;
  isJob?: boolean;
}

const Carousel: FC<CarouselProps & TopCardProps> = ({
  anchorText,
  heading,
  link,
  tooltipDescription,
  entity,
  data,
  onClick,
  isDesigner,
  isJob,
}): JSX.Element => {
  return (
    <section className="carousel">
      <TopCard
        anchorText={anchorText}
        heading={heading}
        link={link}
        tooltipDescription={tooltipDescription}
      />
      <CarouselWrapper
        entity={entity}
        data={data}
        onClick={onClick}
        isDesigner={isDesigner}
        isJob={isJob}
      />
    </section>
  );
};

export default Carousel;
