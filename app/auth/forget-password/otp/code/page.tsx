import ForgetPasswordEnterOTP from "@/components/Auth/ForgetPassword/ForgetPasswordEnterOTP/ForgetPasswordEnterOTP";
import AuthLayout from "@/components/Shared/layouts/AuthLayout/AuthLayout";
import React, { FC, JSX } from "react";

const Code: FC = (): JSX.Element => {
  return (
    <AuthLayout header="فراموشی رمز عبور">
      <ForgetPasswordEnterOTP />
    </AuthLayout>
  );
};

export default Code;
