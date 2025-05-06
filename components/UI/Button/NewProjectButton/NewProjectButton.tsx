import classNames from "classnames";
import Image from "next/image";
import React, { FC, ReactNode } from "react";

export interface NewProjectButtonProps {
  children: ReactNode;
  src?: string;
  ClassName?: string;
  onClick?: () => void;
}

const NewProjectButton: FC<NewProjectButtonProps> = ({
  children,
  src = "",
  ClassName,
  onClick,
}): JSX.Element => {
  return (
    <>
      <div
        className={classNames("new-project__btn__wrapper", ClassName)}
      >
        <button className="new-project__btn" onClick={onClick}>
          {children}
        </button>
        <Image
          className="new-project__btn--icon"
          src={src}
          width={24}
          height={24}
          alt=""
        ></Image>
      </div>
    </>
  );
};

export default NewProjectButton;
