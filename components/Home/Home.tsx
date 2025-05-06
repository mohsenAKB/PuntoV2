'use client'
import React, { FC, JSX } from "react";
import IntroHeader from "./IntroHeader/IntroHeader";

export interface IHomeProps {}

const Home: FC<IHomeProps> = (): JSX.Element => {
  return (
    <main>
      <IntroHeader />
    </main>
  );
};

export default Home;
