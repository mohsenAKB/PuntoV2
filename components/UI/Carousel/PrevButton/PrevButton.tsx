import Image from "next/image";
import React, { FC, JSX } from "react";

export interface PrevButtonProps {
  entity: string;
}

const PrevButton: FC<PrevButtonProps> = ({ entity }): JSX.Element => {
  return (
    <div
      className={`swiper-button swiper-button-prev swiper-button-prev--${entity}`}
    >
      <Image
        src="/images/arrowL&R.svg"
        alt="arrow"
        width={25}
        height={25}
        style={{ transform: "Rotate(180deg)", height: "2rem", width: "2rem" }}
      />
    </div>
  );
};

export default PrevButton;
