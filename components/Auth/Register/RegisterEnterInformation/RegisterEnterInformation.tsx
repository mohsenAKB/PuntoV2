import AuthenticationButton from "@/components/Shared/Button/AuthenticationButton/AuthenticationButton";
import DividerLine from "@/components/Shared/DividerLine/DividerLine";
import FormItem from "@/components/Shared/FormItem/FormItem";
import FormItemGroup from "@/components/Shared/FormItemGroup/FormItemGroup";
import FormItemGroupInput from "@/components/Shared/FormItemGroup/FormItemGroupInput/FormItemGroupInput";
import AuthenticationInput from "@/components/Shared/Input/AuthenticationInput/AuthenticationInput";
import AuthFooterLink from "@/components/Shared/layouts/AuthLayout/AuthFooterLink/AuthFooterLink";
import AuthSubHeader from "@/components/Shared/layouts/AuthLayout/AuthSubHeader/AuthSubHeader";
import AuthenticationPasswordInput from "@/components/Shared/PasswordInput/AuthenticationPasswordInput/AuthenticationPasswordInput";
import React, { FC, useMemo } from "react";
import {
  IRegisterEnterInformationForm,
  RegisterEnterInformationSchemaValidation,
  IRegisterEnterInformationSchemaValidation,
} from "./schema-validation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useLink from "@/hook/use-link";
import { URL } from "@/constant/url";
import useRequest from "@/hook/use-request";
import { IList } from "@/@types/Response/refactor/list";
import { API } from "@/constant/api";
import { ILoginResponse } from "@/@types/Response/refactor/login-response";
import { ICompanySize } from "@/@types/entity/refactor/company-size";
import { IDegree } from "@/@types/entity/refactor/degree";
import { IExpertise } from "@/@types/entity/refactor/expertises";
import { IProject } from "@/@types/entity/refactor/project";
import { IProvince } from "@/@types/entity/refactor/province";
import { IServiceLocation } from "@/@types/entity/refactor/service_location";
import { ISkill } from "@/@types/entity/refactor/skill";
import { IUserAuthenticationsInformation } from "@/@types/entity/refactor/user";
import useAuth from "@/hook/use-auth";
import AuthenticationAlert from "@/components/Shared/Alert/AuthenticationAlert/AuthenticationAlert";
import RequestInstanceNames from "@/utils/request/types/request-instances.enum";
import useSavePath from "@/hook/refactor/use-save-path";

const RegisterEnterInformation: FC = (): JSX.Element => {
  const { redirect } = useLink();
  const { loginUser } = useAuth();
  const { getSavedPath, clearSavedPath } = useSavePath();

  const request = useRequest<IList<ILoginResponse>>({
    instanceName: RequestInstanceNames.NewAuth,
  });
  const { control, handleSubmit } =
    useForm<IRegisterEnterInformationSchemaValidation>({
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      resolver: zodResolver(RegisterEnterInformationSchemaValidation),
    });

  const onSubmit = async (
    values: IRegisterEnterInformationForm
  ): Promise<void> => {
    const reqBody = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password_confirmation: values.confirmPassword,
      password: values.password,
    };
    const result = await request.post(API.registerUserData, reqBody, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("forgetPasswordToken")}`,
      },
    });
    if (result?.success) {
      const { auth, user_profile } = result.data;
      loginUser({
        ...user_profile!,
        auth: auth!,
      });
      if (getSavedPath()) {
        redirect(getSavedPath() as URL);
        clearSavedPath();
      } else {
        redirect(URL.Profile);
      }
    }
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
    <section className="new-register--info">
      <AuthSubHeader>
        برای ثبت نام، لطفا اطلاعات زیر را وارد کنید.
      </AuthSubHeader>
      <DividerLine />
      <form autoComplete="off" className="new-register--info__form">
        <div className="new-register--info__form--name">
          <FormItemGroup>
            {errorHandling}
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormItemGroupInput>
                  <FormItem
                    label="نام"
                    isRequired={true}
                    id="first-name"
                    message={error?.message}
                  >
                    <AuthenticationInput {...field} />
                  </FormItem>
                </FormItemGroupInput>
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormItemGroupInput>
                  <FormItem
                    label="نام خانوادگی"
                    isRequired={true}
                    id="last-name"
                    message={error?.message}
                  >
                    <AuthenticationInput {...field} />
                  </FormItem>
                </FormItemGroupInput>
              )}
            />
          </FormItemGroup>
        </div>
        <div className="new-register--info__form--email">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <FormItem
                label="ایمیل"
                isRequired={false}
                id="e"
                message={error?.message}
              >
                <AuthenticationInput
                  readOnly
                  onFocus={(e) => e.target.removeAttribute("readonly")}
                  placeholder="abcd@yahoo.com"
                  role="presentation"
                  autoComplete="new-email"
                  {...field}
                />
              </FormItem>
            )}
          />
        </div>
        <div className="new-register--info__form--password">
          <FormItemGroup>
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormItemGroupInput>
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
                </FormItemGroupInput>
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormItemGroupInput>
                  <FormItem
                    label="تکرار رمز عبور"
                    isRequired={true}
                    id="repeat-password"
                    message={error?.message}
                  >
                    <AuthenticationPasswordInput
                      {...field}
                      status={error && "error"}
                      placeholder="رمز عبور"
                    />
                  </FormItem>
                </FormItemGroupInput>
              )}
            />
          </FormItemGroup>
        </div>
      </form>
      <div className="new-register--info__buttons">
        <AuthenticationButton onClick={handleSubmit(onSubmit)}>
          ثبت نام
        </AuthenticationButton>
        <AuthFooterLink
          text="قبلا ثبت نام کرده اید؟"
          linkText="ورود"
          href={URL.AuthLoginStatic}
        />
      </div>
    </section>
  );
};

export default RegisterEnterInformation;
