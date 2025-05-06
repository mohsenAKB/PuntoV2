import { Itag } from "@/@types/entities/tag";
import classNames from "classnames";
import React, { FC, JSX } from "react";

export interface TagsProps {
  className?: string;
  blackType: boolean;
  tag: Itag;
  onClick?: () => void;
}

const Tags: FC<TagsProps> = ({
  className,
  blackType,
  tag,
  onClick,
}): JSX.Element => {
  return (
    <span
      onClick={onClick}
      className={classNames(
        "tag",
        { "black-type": blackType, "blue-type": !blackType },
        className
      )}
    >
      {tag.name}
    </span>
  );
};

export default Tags;
