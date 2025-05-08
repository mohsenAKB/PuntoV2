import { AuthLayoutProps } from "@/@types/layout/auth-layout";
import { FC, JSX } from "react";

const AuthLayout: FC<AuthLayoutProps> = ({ children }): JSX.Element => {

  return <>{children}</>
};

export default AuthLayout;
