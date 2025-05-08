import LoginEnterPhoneNumber from "@/components/Auth/Login/LoginWithOTP/LoginEnterPhoneNumber/LoginEnterPhoneNumber";
import AuthenticationLayout from "@/components/Layout/AuthLayout/AuthLayout";
import React, { FC, JSX } from "react";

const PhoneNumber: FC = (): JSX.Element => {
  return (
    <AuthenticationLayout header="ورود به پونتو">
      <LoginEnterPhoneNumber />
    </AuthenticationLayout>
  );
};

export default PhoneNumber;
