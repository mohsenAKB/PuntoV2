import Image from "next/image";
import React, { FC, JSX } from "react";
import Link from "next/link";
import { IMaterial } from "@/@types/entities/material";
import { ISmallResidentialSpace } from "@/@types/entities/small-residential-space";
import { IStyle } from "@/@types/entities/style";
import { IUsage } from "@/@types/entities/usage";

export interface CarouselItemProps {
  data: IUsage | IStyle | IMaterial | ISmallResidentialSpace;
  entity: string;
  onClick: (id: number) => void;
  isDesigner?: boolean;
  isJob?: boolean;
}

const CarouselItem: FC<CarouselItemProps> = ({
  data,
  entity,
  onClick,
  isDesigner,
  isJob,
}): JSX.Element => {
  return (
    <Link
      href={
        isDesigner
          ? `/designers?${entity}=${data.id}`
          : isJob
          ? `/jobs?${entity}=${data.id}`
          : `/projects?${entity}=${data.id}`
      }
    >
      <article className="carousel-item">
        <div className="carousel-item__link">
          <Image
            src={
              data.cover_url
                ? `${data.cover_url}`
                : "/images/default/error-default-img.jpg"
            }
            width={300}
            height={300}
            className="carousel-item__link--img"
            alt={data.name}
          />
          <h3 className="carousel-item__link--heading">{data.name}</h3>
        </div>
      </article>
    </Link>
  );
};

export default CarouselItem;
