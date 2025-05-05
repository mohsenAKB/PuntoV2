"use client";

import { store } from "@/redux/store";
import { FC, JSX, ReactNode } from "react";
import { Provider } from "react-redux";

interface StoreProviderProps {
  children?: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
