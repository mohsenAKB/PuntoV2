import AuthenticationButton from "@/components/Shared/Button/AuthenticationButton/AuthenticationButton";
import DividerLine from "@/components/Shared/DividerLine/DividerLine";
import AuthCountdownTimer from "@/components/Shared/layouts/AuthLayout/AuthCountdownTimer/AuthCountdownTimer";
import AuthEditPhoneNumberOrEmail from "@/components/Shared/layouts/AuthLayout/AuthEditPhoneNumberOrEmail/AuthEditPhoneNumberOrEmail";
import AuthSubHeader from "@/components/Shared/layouts/AuthLayout/AuthSubHeader/AuthSubHeader";
import AuthenticationPassCodeInput from "@/components/Shared/PassCodeInput/AuthenticationPassCodeInput/AuthenticationPassCodeInput";
import React, { FC, useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ILoginEnterCodeForm,
  ILoginEnterCodeSchemaValidation,
  LoginEnterCodeSchemaValidation,
} from "./schema-validation";
import { useRouter } from "next/router";
import { URL } from "@/constant/url";
import { useSearchParams } from "next/navigation";
import useRequest from "@/hook/use-request";
import { IVerifyOtpBody } from "@/@types/Request/verify-body";
import { SendOtpBody } from "@/@types/Request/send-otp-body";
import { SendOtpSchemaResponse } from "@/@types/Response/refactor/send-otp";
import { API } from "@/constant/api";
import { ILoginVerifyOtpPhoneNumberRequest } from "@/@types/Request/Auth/login-verify-otp-phone-number";
import { IList } from "@/@types/Response/list";
import { ILoginResponse } from "@/@types/Response/refactor/login-response";
import useAuth from "@/hook/use-auth";
import useLink from "@/hook/use-link";
import { ILoginBody } from "@/@types/Request/login-body";
import { ILoginSendOtpPhoneNumberRequest } from "@/@types/Request/Auth/login-send-otp-phone-number";
import RequestInstanceNames from "@/utils/request/types/request-instances.enum";
import AuthenticationAlert from "@/components/Shared/Alert/AuthenticationAlert/AuthenticationAlert";
import useSavePath from "@/hook/refactor/use-save-path";

const LoginEnterCode: FC = (): JSX.Element => {
  const [expiresIn, setExpiresIn] = useState<number | null>(null);

  const router = useRouter();
  const { loginUser } = useAuth();
  const { redirect } = useLink();
  const { getSavedPath, clearSavedPath } = useSavePath();
  console.log(getSavedPath, "getSavedPath");

  const verifyOtpRequest = useRequest<
    IList<ILoginResponse>,
    ILoginVerifyOtpPhoneNumberRequest
  >({ instanceName: RequestInstanceNames.NewAuth });
  const resendOtpRequest = useRequest<
    SendOtpSchemaResponse<ILoginBody>,
    ILoginSendOtpPhoneNumberRequest
  >({ instanceName: RequestInstanceNames.NewAuth });

  const { control, handleSubmit } = useForm<ILoginEnterCodeSchemaValidation>({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(LoginEnterCodeSchemaValidation),
  });

  const errorText = useMemo(() => {
    return verifyOtpRequest.errorData?.messages[0];
  }, [verifyOtpRequest.errorData]);

  const phoneNumber = useMemo<number>(() => {
    return +(router.query["phone-number"] as string);
  }, [router]);

  const onSubmit = async (values: ILoginEnterCodeForm): Promise<void> => {
    const { otp } = values;

    const result = await verifyOtpRequest.post(API.verifyOtp, {
      phone_number: phoneNumber,
      otp: +otp,
    });

    if (result) {
      const { auth, user_profile } = result.data;

      loginUser({
        ...user_profile!,
        auth: auth!,
      });
      if (getSavedPath()) {
        redirect(getSavedPath() as URL);
        clearSavedPath();
      } else {
        redirect(URL.Home);
      }
    }
  };

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

  const onResendOtp = async (): Promise<void> => {
    const result = await resendOtpRequest.post(API.EnterPhoneOtp, {
      phone_number: phoneNumber.toString(),
    });

    if (result) {
      setExpiresIn(+result.data.expires_in);
    }
  };

  const setInitialExpiresIn = (): void => {
    setExpiresIn(Number(router.query["expire"] as string) || 0);
  };

  useEffect(setInitialExpiresIn, [router]);

  return (
    <section className="new-login--otp">
      <div className="new-login--otp__edit">
        <AuthSubHeader>{`کد ورود به شماره ${phoneNumber} ارسال شد.`}</AuthSubHeader>
        <AuthEditPhoneNumberOrEmail href={URL.AuthLoginOtpEnterPhoneNumber} />
      </div>
      <DividerLine />
      <div className="new-login--otp__form">
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
        <span className="new-login--otp__form--countdown">
          {expiresIn !== null && (
            <AuthCountdownTimer time={expiresIn} onResend={onResendOtp} />
          )}
        </span>
        <AuthenticationButton onClick={handleSubmit(onSubmit)}>
          ورود
        </AuthenticationButton>
      </div>
    </section>
  );
};

export default LoginEnterCode;
