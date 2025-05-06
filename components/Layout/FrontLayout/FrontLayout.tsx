import { FrontLayoutProps } from "@/@types/layout/front-layout";
import Footer from "@/components/Footer/Footer";
import DefaultHeader from "@/components/Header/app/Default/DefaultHeader";
import Header from "@/components/Header/Header";
import React, { FC, JSX } from "react";

const FrontLayout: FC<FrontLayoutProps> = ({ children }): JSX.Element => {
  return (
    <main>
      <Header>
        <DefaultHeader />
      </Header>
      {children}
      <Footer></Footer>
    </main>
  );
};

export default FrontLayout;
