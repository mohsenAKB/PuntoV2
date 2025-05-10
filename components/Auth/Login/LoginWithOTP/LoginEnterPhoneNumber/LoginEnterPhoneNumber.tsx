'use client';

import AuthenticationButton from "@/components/Shared/Button/AuthenticationButton/AuthenticationButton";
import AuthenticationSecondaryButton from "@/components/Shared/Button/AuthenticationSecondaryButton/AuthenticationSecondaryButton";
import DividerLine from "@/components/Shared/DividerLine/DividerLine";
import FormItem from "@/components/Shared/FormItem/FormItem";
import AuthenticationInput from "@/components/Shared/Input/AuthenticationInput/AuthenticationInput";
import AuthFooterLink from "@/components/Shared/layouts/AuthLayout/AuthFooterLink/AuthFooterLink";
import AuthSubHeader from "@/components/Shared/layouts/AuthLayout/AuthSubHeader/AuthSubHeader";
import React, { FC, JSX, useMemo } from "react";
import {
  ILoginEnterPhoneNumberForm,
  ILoginEnterPhoneNumberSchemaValidation,
  LoginEnterPhoneNumberSchemaValidation,
} from "./schema-validation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { URL } from "@/constant/url";
import useLink from "@/hook/use-link";
import useRequest from "@/hook/use-request";
import { API } from "@/constant/api";
import { ILoginBody } from "@/@types/Request/login-body";
import { SendOtpSchemaResponse } from "@/@types/response/refactor/send-otp";
import { ILoginSendOtpPhoneNumberRequest } from "@/@types/Request/Auth/login-send-otp-phone-number";
import AuthenticationAlert from "@/components/Shared/Alert/AuthenticationAlert/AuthenticationAlert";
import RequestInstanceNames from "@/utils/request/types/request-instances.enum";

const LoginEnterPhoneNumber: FC = (): JSX.Element => {
  const { redirect } = useLink();
  const { post, errorData } = useRequest<SendOtpSchemaResponse<ILoginBody>, ILoginSendOtpPhoneNumberRequest>({ instanceName: RequestInstanceNames.NewAuth })

  const errorText = useMemo(() => {
    return errorData?.messages[0]
  }, [errorData])
  const { control, handleSubmit } =
    useForm<ILoginEnterPhoneNumberSchemaValidation>({
      defaultValues: {
        phoneNumber: "",
      },
      resolver: zodResolver(LoginEnterPhoneNumberSchemaValidation),
    });

  const onSubmit = async (
    values: ILoginEnterPhoneNumberForm
  ): Promise<void> => {
    const { phoneNumber } = values;

    const result = await post(API.EnterPhoneOtp, {
      phone_number: phoneNumber,
    });

    if (result) {
      const expiresIn = result.data.expires_in;
      // redirect to verify otp page
      const otpCheckCodeUrl = `${URL.AuthLoginOtpEnterCode}?phone-number=${phoneNumber}&expire=${expiresIn}`;

      redirect(otpCheckCodeUrl);
    }
  };

  const handleLoginWithPassword = (): void => {
    redirect(URL.AuthLoginStatic);
  };

  const errorHandling = useMemo<JSX.Element | undefined>(() => {
    if (errorText) {
      return (
        <AuthenticationAlert type="error" message={errorText} />
      )
    }


  }, [errorText])
  return (
    <section className="new-login--phone">
      <AuthSubHeader>شماره تلفن خود را وارد کنید.</AuthSubHeader>
      <DividerLine />
      <div className="new-login--phone__form">
        {errorHandling}
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormItem
              label="شماره تلفن"
              isRequired={true}
              id="phone-number"
              message={error?.message}
            >
              <AuthenticationInput
                placeholder="09123456789"
                {...field}
                status={error && "error"}
              />
            </FormItem>
          )}
        />
        <div className="new-login--phone__buttons">
          <div className="new-login--phone__action-buttons">
            <AuthenticationButton onClick={handleSubmit(onSubmit)}>
              ارسال کد
            </AuthenticationButton>
            <AuthenticationSecondaryButton onClick={handleLoginWithPassword}>
              ورود با رمز عبور
            </AuthenticationSecondaryButton>
          </div>
          <AuthFooterLink
            text="حساب کاربری ندارید؟"
            linkText="ثبت نام"
            href={URL.AuthRegisterStatic}
          ></AuthFooterLink>
        </div>
      </div>

    </section>
  );
};

export default LoginEnterPhoneNumber;
