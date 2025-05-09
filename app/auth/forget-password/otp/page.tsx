import ForgetPasswordEnterPhoneOrEmail from "@/components/Auth/ForgetPassword/ForgetPasswordEnterPhoneOrEmail/ForgetPasswordEnterPhoneOrEmail";
import AuthLayout from "@/components/Shared/layouts/AuthLayout/AuthLayout";
import React from "react";

const PhoneNumber = () => {
  return (
    <AuthLayout header="فراموشی رمز عبور">
      <ForgetPasswordEnterPhoneOrEmail />
    </AuthLayout>
  );
};

export default PhoneNumber;
