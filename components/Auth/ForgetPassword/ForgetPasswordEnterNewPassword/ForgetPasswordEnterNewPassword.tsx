import AuthenticationButton from "@/components/Shared/Button/AuthenticationButton/AuthenticationButton";
import DividerLine from "@/components/Shared/DividerLine/DividerLine";
import FormItem from "@/components/Shared/FormItem/FormItem";
import AuthenticationInput from "@/components/Shared/Input/AuthenticationInput/AuthenticationInput";
import AuthSubHeader from "@/components/Shared/layouts/AuthLayout/AuthSubHeader/AuthSubHeader";
import AuthenticationPasswordInput from "@/components/Shared/PasswordInput/AuthenticationPasswordInput/AuthenticationPasswordInput";
import React, { FC, useMemo } from "react";
import {
  IForgetPasswordEnterNewPasswordForm,
  ForgetPasswordEnterNewPasswordSchemaValidation,
  IForgetPasswordEnterNewPasswordSchemaValidation,
} from "./schema-validation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useRequest from "@/hook/use-request";
import { API } from "@/constant/api";
import useLink from "@/hook/use-link";
import { URL } from "@/constant/url";
import RequestInstanceNames from "@/utils/request/types/request-instances.enum";
import AuthenticationAlert from "@/components/Shared/Alert/AuthenticationAlert/AuthenticationAlert";

const ForgetPasswordEnterNewPassword: FC = (): JSX.Element => {
  const request = useRequest({instanceName:RequestInstanceNames.NewAuth})
  const {redirect} =useLink()
  const { control, handleSubmit } =
    useForm<IForgetPasswordEnterNewPasswordSchemaValidation>({
      defaultValues: {
        password: "",
        password_confirmation: "",
      },
      resolver: zodResolver(ForgetPasswordEnterNewPasswordSchemaValidation),
    });

  const onSubmit =async (values: IForgetPasswordEnterNewPasswordForm): Promise<void> => {
    const reqBody = {
      _method:'PUT',
      password:values.password,
      password_confirmation:values.password_confirmation
      
    }
    const result =await request.post(API.updatePassword ,reqBody ,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('forgetPasswordToken')}`
          }
        })
    if (result?.success) {
      redirect(URL.AuthLoginStatic)
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
    <section className="new-forget-password--new-password">
      <AuthSubHeader>رمز عبور جدید خود را وارد نمایید.</AuthSubHeader>
      <DividerLine />
      <div className="new-forget-password--new-password__form">
        {errorHandling}
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
                status={error && "error"}
                {...field}
                placeholder="رمز عبور"
              />
            </FormItem>
          )}
        />
        <Controller
          name="password_confirmation"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormItem
              label="تکرار رمز عبور"
              isRequired={true}
              id="confirm-password"
              message={error?.message}
            >
              <AuthenticationPasswordInput
                status={error && "error"}
                {...field}
                placeholder="تکرار رمز عبور"
              />
            </FormItem>
          )}
        />
      </div>
      <AuthenticationButton onClick={handleSubmit(onSubmit)}>
        ثبت
      </AuthenticationButton>
    </section>
  );
};

export default ForgetPasswordEnterNewPassword;
