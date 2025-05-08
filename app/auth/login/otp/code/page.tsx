import LoginEnterCode from "@/components/Auth/Login/LoginWithOTP/LoginEnterCode/LoginEnterCode";
import AuthLayout from "@/components/Shared/layouts/AuthLayout/AuthLayout";
import React, { FC, JSX } from "react";

const Code: FC = (): JSX.Element => {
  return (
    // <AuthLayout header="ورود به پونتو">
    <LoginEnterCode />
    // </AuthLayout>
  );
};

export default Code;
