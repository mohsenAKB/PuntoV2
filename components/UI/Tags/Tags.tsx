import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";

export interface TagsProps {
  className?: string;
  blackType: boolean;
  tag: {};
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
      {tag.title}
    </span>
  );
};

export default Tags;
