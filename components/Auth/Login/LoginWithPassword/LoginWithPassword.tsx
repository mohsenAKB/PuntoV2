import AuthenticationButton from "@/components/Shared/Button/AuthenticationButton/AuthenticationButton";
import AuthenticationSecondaryButton from "@/components/Shared/Button/AuthenticationSecondaryButton/AuthenticationSecondaryButton";
import DividerLine from "@/components/Shared/DividerLine/DividerLine";
import FormItem from "@/components/Shared/FormItem/FormItem";
import AuthenticationInput from "@/components/Shared/Input/AuthenticationInput/AuthenticationInput";
import AuthFooterLink from "@/components/Shared/layouts/AuthLayout/AuthFooterLink/AuthFooterLink";
import AuthSubHeader from "@/components/Shared/layouts/AuthLayout/AuthSubHeader/AuthSubHeader";
import AuthenticationPasswordInput from "@/components/Shared/PasswordInput/AuthenticationPasswordInput/AuthenticationPasswordInput";
import RememberMe from "@/components/Shared/RememberMe/RememberMe";
import Link from "next/link";
import React, { FC, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ILoginWithPasswordForm,
  ILoginWithPasswordSchemaValidation,
  LoginWithPasswordSchemaValidation,
} from "./schema-validation";
import { URL } from "@/constant/url";
import useLink from "@/hook/use-link";
import useAuth from "@/hook/use-auth";
import useRequest from "@/hook/use-request";
import { ILoginBody } from "@/@types/Request/login-body";
import { ILoginResponse } from "@/@types/Response/refactor/login-response";
import { IList } from "@/@types/Response/list";
import { ILoginWithPasswordPhoneNumberRequest } from "@/@types/Request/Auth/login-with-password-phone-number";
import { API } from "@/constant/api";
import AuthenticationAlert from "@/components/Shared/Alert/AuthenticationAlert/AuthenticationAlert";
import RequestInstanceNames from "@/utils/request/types/request-instances.enum";
import useSavePath from "@/hook/refactor/use-save-path";

const LoginWithPassword: FC = (): JSX.Element => {
  const { loginUser } = useAuth();
  const { getSavedPath, clearSavedPath } = useSavePath();

  const verifyLoginWithPasswordRequest = useRequest<
    IList<ILoginResponse>,
    ILoginWithPasswordPhoneNumberRequest
  >({ instanceName: RequestInstanceNames.NewAuth });
  const errorText = useMemo(() => {
    return verifyLoginWithPasswordRequest.errorData?.messages[0];
  }, [verifyLoginWithPasswordRequest.errorData]);
  const { redirect } = useLink();
  const { control, handleSubmit } = useForm<ILoginWithPasswordSchemaValidation>(
    {
      defaultValues: {
        phoneNumber: "",
        password: "",
      },
      resolver: zodResolver(LoginWithPasswordSchemaValidation),
    }
  );

  const onSubmit = async (values: ILoginWithPasswordForm): Promise<void> => {
    const { phoneNumber, password } = values;

    const result = await verifyLoginWithPasswordRequest.post(
      API.loginWithPassword,
      {
        phone_number: phoneNumber,
        password: password,
      }
    );

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

  const handleLoginWithOtp = (): void => {
    redirect(URL.AuthLoginOtpEnterPhoneNumber);
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

  return (
    <section className="new-login--password">
      <AuthSubHeader>شماره تلفن و رمز عبور خود را وارد کنید.</AuthSubHeader>
      <DividerLine />
      <div className="new-login--password__form">
        <div className="new-login--password__inputs">
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
                  {...field}
                  placeholder="09123456789"
                  status={error && "error"}
                />
              </FormItem>
            )}
          />
          <div className="new-login--password__password-items">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormItem
                  label="رمز عبور"
                  isRequired={true}
                  id="password"
                  message={error?.message}
                >
                  <AuthenticationPasswordInput
                    {...field}
                    status={error && "error"}
                    placeholder="رمز عبور"
                  />
                </FormItem>
              )}
            />
            <Link
              href={URL.AuthForgetPasswordEnterPhoneNumber}
              className="new-login--password__forget-password"
            >
              رمز عبور خود را فراموش کرده اید؟
            </Link>
          </div>
        </div>
        <RememberMe />
        <div className="new-login--password__buttons">
          <div className="new-login--password__action-buttons">
            <AuthenticationButton onClick={handleSubmit(onSubmit)}>
              ورود
            </AuthenticationButton>
            <AuthenticationSecondaryButton onClick={handleLoginWithOtp}>
              ورود با رمز یکبار مصرف
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

export default LoginWithPassword;
