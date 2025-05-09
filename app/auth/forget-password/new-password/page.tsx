import ForgetPasswordEnterNewPassword from "@/components/Auth/ForgetPassword/ForgetPasswordEnterNewPassword/ForgetPasswordEnterNewPassword";
import AuthLayout from "@/components/Shared/layouts/AuthLayout/AuthLayout";
import React, { FC, JSX } from "react";

const NewPassword: FC = (): JSX.Element => {
  return (
    <AuthLayout header="فراموشی رمز عبور">
      <ForgetPasswordEnterNewPassword />
    </AuthLayout>
  );
};

export default NewPassword;
