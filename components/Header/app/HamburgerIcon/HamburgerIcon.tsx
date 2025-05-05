import classNames from "classnames";
import Image from "next/image";
import React, { FC, JSX, useState } from "react";

export interface HamburgerIconProps {
  ClassName?: string;
  onClick?: () => void;
  src: string;
}

const HamburgerIcon: FC<HamburgerIconProps> = ({
  ClassName,
  onClick,
  src,
}): JSX.Element => {
  return (
    <>
      <Image
        src={src}
        alt=""
        width={24}
        height={24}
        className={classNames("hamburger-icon", ClassName)}
        onClick={onClick}
      ></Image>
    </>
  );
};

export default HamburgerIcon;
