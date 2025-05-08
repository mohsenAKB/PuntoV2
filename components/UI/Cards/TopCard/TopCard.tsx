import Link from "next/link";
import React, { FC } from "react";
import BaseTooltip from "../../Base/BaseTooltip/BaseTooltip";
import { CarouselProps } from "@/components/Carousel/Carousel";
export interface TopCardProps {
  heading: string;
  anchorText: string;
  link: string;
  tooltipDescription?: string;
}

const TopCard: FC<TopCardProps> = ({
  heading,
  anchorText,
  link,
  tooltipDescription,
}): JSX.Element => {
  return (
    <div className="top-card">
      <div style={{ display: "flex", gap: "2rem" }}>
        <h2 className="top-card__heading"> {heading}</h2>
        <BaseTooltip placement="top" title={tooltipDescription}>
          <img src="/assets/icons/info-circle.svg" alt="" />
        </BaseTooltip>
      </div>

      <Link href={link} className="top-card__link">
        {anchorText}
      </Link>
    </div>
  );
};

export default TopCard;
