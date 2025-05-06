"use client";
import React, { FC, JSX } from "react";
import Introduction from "./Introduction/Introduction";
import Search from "./Search/Search";

export interface IntroHeaderProps {}

const IntroHeader: FC<IntroHeaderProps> = (): JSX.Element => {
  return (
    <section className="intro-header">
      <div className="intro-header__right">
        <Introduction />
        <Search />
      </div>

      <div className="intro-header__left"></div>
    </section>
  );
};

export default IntroHeader;
