"use client";

import AuthenticationButton from "@/components/Shared/Button/AuthenticationButton/AuthenticationButton";
import DividerLine from "@/components/Shared/DividerLine/DividerLine";
import FormItem from "@/components/Shared/FormItem/FormItem";
import AuthenticationInput from "@/components/Shared/Input/AuthenticationInput/AuthenticationInput";
import AuthSubHeader from "@/components/Shared/layouts/AuthLayout/AuthSubHeader/AuthSubHeader";
import React, { FC, JSX, useMemo } from "react";
import {
  IForgetPasswordEnterPhoneOrEmailForm,
  ForgetPasswordEnterPhoneOrEmailSchemaValidation,
  IForgetPasswordEnterPhoneOrEmailSchemaValidation,
} from "./schema-validation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useLink from "@/hook/use-link";
import { URL } from "@/constant/url";
import useRequest from "@/hook/use-request";
import { API } from "@/constant/api";
import AuthenticationAlert from "@/components/Shared/Alert/AuthenticationAlert/AuthenticationAlert";
import RequestInstanceNames from "@/utils/request/types/request-instances.enum";

const ForgetPasswordEnterPhoneOrEmail: FC = (): JSX.Element => {
  const { redirect } = useLink();
  const request = useRequest({ instanceName: RequestInstanceNames.NewAuth });
  const { control, handleSubmit } =
    useForm<IForgetPasswordEnterPhoneOrEmailSchemaValidation>({
      defaultValues: {
        phone_number: "",
      },
      resolver: zodResolver(ForgetPasswordEnterPhoneOrEmailSchemaValidation),
    });

  const onSubmit = async (
    values: IForgetPasswordEnterPhoneOrEmailForm
  ): Promise<void> => {
    const { phone_number } = values;
    const isPhoneNumber = /^\d+$/.test(phone_number);
    const otpCheckCodeUrl = isPhoneNumber
      ? `${
          URL.AuthForgetPasswordOtpEnterCode
        }?phone-number=${encodeURIComponent(phone_number)}`
      : `${URL.AuthForgetPasswordOtpEnterCode}?email=${encodeURIComponent(
          phone_number
        )}`;
    const result = await request.post(API.EnterPhoneOtp, values);
    console.log(result, "result");

    redirect(otpCheckCodeUrl);
  };
  const errorText = useMemo(() => {
    return request.errorData?.messages[0];
  }, [request.errorData]);
  const errorHandling = useMemo<JSX.Element | undefined>(() => {
    if (errorText) {
      return (
        <AuthenticationAlert
          type="error"
          message={errorText}
          className="authentication-alert-error"
        />
      );
    }
  }, [errorText]);
  return (
    <section className="new-forget-password--phone-email">
      <AuthSubHeader>
        برای بازیابی رمز عبور لطفا شماره تلفن خود را وارد نمایید.
      </AuthSubHeader>
      <DividerLine />
      <div className="new-forget-password--phone-email__form">
        {errorHandling}
        <Controller
          name="phone_number"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormItem
              label="شماره تلفن  "
              isRequired={true}
              id="phone-number"
              message={error?.message}
            >
              <AuthenticationInput placeholder="09123456789" {...field} />
            </FormItem>
          )}
        />

        <AuthenticationButton onClick={handleSubmit(onSubmit)}>
          ارسال کد
        </AuthenticationButton>
      </div>
    </section>
  );
};

export default ForgetPasswordEnterPhoneOrEmail;
