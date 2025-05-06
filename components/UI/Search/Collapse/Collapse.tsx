import React, { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

export interface CollapseProps {
  ClassName?: string;
}

const Collapse: FC<CollapseProps> = ({ ClassName }): JSX.Element => {
  return (
    <div className={classNames("search__header", ClassName)}>
      <input
        type="text"
        placeholder="جستجو"
        className="search__header--input"
      />
      <Image
        src="/assets/searchIcon.svg"
        alt=""
        width={20}
        height={20}
        className="search__header--icon"
      ></Image>
    </div>
  );
};

export default Collapse;
