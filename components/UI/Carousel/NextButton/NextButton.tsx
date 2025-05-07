import React, { FC, JSX } from "react";
import Image from "next/image";

export interface NextButtonProps {
  entity: string;
}

const NextButton: FC<NextButtonProps> = ({ entity }): JSX.Element => {
  return (
    <div
      className={`swiper-button swiper-button-next swiper-button-next--${entity}`}
    >
      <Image
        src="/images/arrowL&R.svg"
        alt="arrow"
        width={25}
        height={25}
        style={{ height: "2rem", width: "2rem" }}
      />
    </div>
  );
};

export default NextButton;
