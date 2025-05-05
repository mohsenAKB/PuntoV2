import { FrontLayoutProps } from "@/@types/layout/front-layout";
import FrontLayout from "@/components/Layout/FrontLayout/FrontLayout";
import React, { FC } from "react";

const FrontLayoyt: FC<FrontLayoutProps> = ({ children }) => {
  return <FrontLayout>{children}</FrontLayout>;
};

export default FrontLayoyt;
