import React, { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

export interface ExpandedProps {
  ClassName?: string;
}

const Expanded: FC<ExpandedProps> = ({ ClassName }): JSX.Element => {
  return (
    <div className={classNames("search__header--expanded", ClassName)}>
      <input
        type="text"
        placeholder="جستجو"
        className="search__header--expanded--input"
      />
      <Image
        src="/assets/searchIcon.svg"
        alt=""
        width={20}
        height={20}
        className="search__header--icon--expanded"
      ></Image>
    </div>
  );
};

export default Expanded;
