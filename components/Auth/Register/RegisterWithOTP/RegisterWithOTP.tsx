import AuthenticationButton from "@/components/Shared/Button/AuthenticationButton/AuthenticationButton";
import DividerLine from "@/components/Shared/DividerLine/DividerLine";
import AuthCountdownTimer from "@/components/Shared/layouts/AuthLayout/AuthCountdownTimer/AuthCountdownTimer";
import AuthEditPhoneNumberOrEmail from "@/components/Shared/layouts/AuthLayout/AuthEditPhoneNumberOrEmail/AuthEditPhoneNumberOrEmail";
import AuthSubHeader from "@/components/Shared/layouts/AuthLayout/AuthSubHeader/AuthSubHeader";
import AuthenticationPassCodeInput from "@/components/Shared/PassCodeInput/AuthenticationPassCodeInput/AuthenticationPassCodeInput";
import React, { FC, useMemo } from "react";
import {
  IRegisterWithOTPForm,
  RegisterWithOTPSchemaValidation,
  IRegisterWithOTPSchemaValidation,
} from "./schema-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { URL } from "@/constant/url";
import useLink from "@/hook/use-link";
import useRequest from "@/hook/use-request";
import { IList } from "@/@types/Response/list";
import { IVerifyOtpDataResponse } from "@/@types/Response/refactor/verify-otp";
import { API } from "@/constant/api";
import RequestInstanceNames from "@/utils/request/types/request-instances.enum";
import AuthenticationAlert from "@/components/Shared/Alert/AuthenticationAlert/AuthenticationAlert";

const RegisterWithOTP: FC = (): JSX.Element => {
  const { redirect } = useLink();
  const router = useRouter();
  const request = useRequest<IList<IVerifyOtpDataResponse>>({instanceName:RequestInstanceNames.NewAuth});
  const phoneNumber = router.query["phone-number"];

  const { control, handleSubmit } = useForm<IRegisterWithOTPSchemaValidation>({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(RegisterWithOTPSchemaValidation),
  });
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
  const onSubmit =async (values: IRegisterWithOTPForm): Promise<void> => {
    const reqBody ={
      phone_number:phoneNumber,
      otp:values.otp
    }
    const result =await request.post(API.verifyOtp,reqBody,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('forgetPasswordToken')}`
          }
        })
    if (result?.success) {
      localStorage.setItem("forgetPasswordToken",result.data.auth.access_token)
      redirect(URL.AuthRegisterPersonalInformation);
    }
  };
  return (
    <section className="new-register--otp">
      <div className="new-register--otp__edit">
        <AuthSubHeader>{`کد ورود به شماره ${phoneNumber} ارسال شد.`}</AuthSubHeader>
        <AuthEditPhoneNumberOrEmail href={URL.AuthRegisterStatic} />
      </div>
      <DividerLine />
      <div className="new-register--otp__form">
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
        <span className="new-register--otp__form--countdown">
          <AuthCountdownTimer time={120} />
        </span>
        <AuthenticationButton onClick={handleSubmit(onSubmit)}>
          ثبت نام
        </AuthenticationButton>
      </div>
    </section>
  );
};

export default RegisterWithOTP;
