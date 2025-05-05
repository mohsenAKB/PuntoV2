import { AuthLayoutProps } from "@/@types/layout/auth-layout";
import AuthenticationLayout from "@/components/Layout/AuthLayout/AuthLayout";
import { FC, JSX } from "react";

const AuthLayout: FC<AuthLayoutProps> = (props): JSX.Element => {
  const { children, header } = props;

  return <AuthenticationLayout header={header}>{children}</AuthenticationLayout>;
};

export default AuthLayout;
