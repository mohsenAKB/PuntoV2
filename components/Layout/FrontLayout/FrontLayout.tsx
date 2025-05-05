import { FrontLayoutProps } from "@/@types/layout/front-layout";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { FC, JSX } from "react";

const FrontLayout: FC<FrontLayoutProps> = ({ children }): JSX.Element => {
  return (
    <main>
      <Header></Header>
      {children}
      <Footer></Footer>
    </main>
  );
};

export default FrontLayout;
