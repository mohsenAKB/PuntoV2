import AuthenticationButton from "@/components/Shared/Button/AuthenticationButton/AuthenticationButton";
import DividerLine from "@/components/Shared/DividerLine/DividerLine";
import AuthCountdownTimer from "@/components/Shared/layouts/AuthLayout/AuthCountdownTimer/AuthCountdownTimer";
import AuthEditPhoneNumberOrEmail from "@/components/Shared/layouts/AuthLayout/AuthEditPhoneNumberOrEmail/AuthEditPhoneNumberOrEmail";
import AuthSubHeader from "@/components/Shared/layouts/AuthLayout/AuthSubHeader/AuthSubHeader";
import AuthenticationPassCodeInput from "@/components/Shared/PassCodeInput/AuthenticationPassCodeInput/AuthenticationPassCodeInput";
import React, { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IForgetPasswordEnterOTPForm,
  ForgetPasswordEnterOTPSchemaValidation,
  IForgetPasswordEnterOTPSchemaValidation,
} from "./schema-validation";
import { useRouter } from "next/router";
import { URL } from "@/constant/url";
import useLink from "@/hook/use-link";
import useRequest from "@/hook/use-request";
import { API } from "@/constant/api";
import { IList } from "@/@types/Response/list";
import { IVerifyOtpDataResponse } from "@/@types/Response/refactor/verify-otp";
import AuthenticationAlert from "@/components/Shared/Alert/AuthenticationAlert/AuthenticationAlert";
import RequestInstanceNames from "@/utils/request/types/request-instances.enum";

const ForgetPasswordEnterOTP = () => {
  
  const { redirect } = useLink();
  const router = useRouter();
  const request = useRequest<IList<IVerifyOtpDataResponse>>({instanceName:RequestInstanceNames.NewAuth});
  const phoneNumber = router.query["phone-number"];
  const email = router.query["email"];

  const displayText = phoneNumber
    ? `کد ورود به شماره ${phoneNumber} ارسال شد.`
    : `کد ورود به ایمیل ${email} ارسال شد.`;

  const { control, handleSubmit } =
    useForm<IForgetPasswordEnterOTPSchemaValidation>({
      defaultValues: {
        otp: "",
      },
      resolver: zodResolver(ForgetPasswordEnterOTPSchemaValidation),
    });

  const onSubmit =async (values: IForgetPasswordEnterOTPForm): Promise<void> => {
    const reqBody ={
      phone_number:phoneNumber,
      otp:values.otp
    }
    const result =await request.post(API.verifyOtp,reqBody,)
    if (result?.success) {
      localStorage.setItem("forgetPasswordToken",result.data.auth.access_token)
      redirect(URL.AuthForgetPasswordEnterNewPassword);
    }
  };

      const errorText =useMemo(() =>{
          return request.errorData?.messages[0]
        } ,[request.errorData])
        const errorHandling = useMemo<JSX.Element | undefined>(()=>{
          if (errorText) {
            return (
              <AuthenticationAlert  type="error" message={errorText} className="authentication-alert-error"/>
            )
          }
      
      
        },[errorText])
  return (
    <section className="new-forget-password--otp">
      <div className="new-forget-password--otp__edit">
        <AuthSubHeader>{displayText}</AuthSubHeader>
        <AuthEditPhoneNumberOrEmail
          href={URL.AuthForgetPasswordEnterPhoneNumber}
        />
      </div>
      <DividerLine />
      <div className="new-forget-password--otp__form">
      {errorHandling}

        <Controller
          name="otp"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <AuthenticationPassCodeInput
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
        <span className="new-forget-password--otp__form--countdown">
          <AuthCountdownTimer time={120} />
        </span>
        <AuthenticationButton onClick={handleSubmit(onSubmit)}>
          ادامه
        </AuthenticationButton>
      </div>
    </section>
  );
};

export default ForgetPasswordEnterOTP;
