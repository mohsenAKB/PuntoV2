import React, { FC, JSX, useMemo, useState } from "react";
import data from "@/constant/header.json";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import NavbarItems from "./NavbarItems/NavbarItems";

export interface NavbarProps {
  ClassName?: string;
}

const Navbar: FC<NavbarProps> = ({ ClassName }): JSX.Element => {

  return (
    <nav className={classNames("navbar__header", ClassName)}>
      <ul className={classNames("navbar__header--list", ClassName)}>
        <NavbarItems />
      </ul>
    </nav>
  );
};

export default Navbar;
