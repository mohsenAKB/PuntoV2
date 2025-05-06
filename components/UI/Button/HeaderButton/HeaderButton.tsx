import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

export interface HeaderButtonProps {
  children: ReactNode;
  src?: string ;
  ClassName?: string;
  onClick?: () => void;
}

const HeaderButton: FC<HeaderButtonProps> = ({
  children,
  src = "",
  ClassName,
  onClick,
}): JSX.Element => {
  return (
    <>
      <div className={classNames("header__btn__wrapper", ClassName)}>
        <button className="header__btn" onClick={onClick}>
          {children}
        </button>
        {src && (
          <Image
            className="header__btn--icon"
            src={src}
            width={24}
            height={24}
            alt=""
          ></Image>
        )}
      </div>
    </>
  );
};

export default HeaderButton;
