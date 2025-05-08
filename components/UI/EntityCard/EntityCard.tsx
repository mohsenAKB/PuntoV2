import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode, useMemo } from "react";

export interface EntityCardProps {
  title: string;
  imageSource?: string | null;
  onClick?: () => void
  customContent?: ReactNode
  className?: string
}
const EntityCard: FC<EntityCardProps> = ({
  customContent,
  imageSource,
  onClick,
  title,
  className
}): JSX.Element => {

  const imageOrPreviewSource = useMemo<string>(() => {

    if (!imageSource) return "/assets/pic/Alternative.svg"

    return imageSource

  }, [imageSource])

  return (
    <div
      className={classNames(
        "entity-card",
        className
      )}
      onClick={onClick}>
      <Link href="#" className="entity-card__link">
        <Image
          fill
          src={imageOrPreviewSource}
          className="entity-card__link--img"
          alt={title}
        />

        <div className="entity-card__link--heading">
          <h3>{title}</h3>

          {customContent}
        </div>
      </Link>
    </div>
  );
};

export default EntityCard;
