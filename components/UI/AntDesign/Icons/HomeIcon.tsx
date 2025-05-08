import Image from "next/image";
import React, { FC } from "react";

const HomeIcon: FC = (): JSX.Element => {
  return (
    <Image
      src="/images/icons/home.svg"
      alt="Home Icon"
      width={100}
      height={100}
    >
      HomeIcon
    </Image>
  );
};

export default HomeIcon;
