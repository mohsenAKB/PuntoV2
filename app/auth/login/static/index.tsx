import LoginWithPassword from "@/components/Auth/Login/LoginWithPassword/LoginWithPassword";
import AuthLayout from "@/components/Shared/layouts/AuthLayout/AuthLayout";
import React, { FC } from "react";

const Login: FC = (): JSX.Element => {
  return (
    <AuthLayout header="ورود به پونتو">
      <LoginWithPassword />
    </AuthLayout>
  );
};

export default Login;
