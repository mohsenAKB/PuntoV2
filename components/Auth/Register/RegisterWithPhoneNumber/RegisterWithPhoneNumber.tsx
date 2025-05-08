import AuthenticationButton from "@/components/Shared/Button/AuthenticationButton/AuthenticationButton";
import DividerLine from "@/components/Shared/DividerLine/DividerLine";
import FormItem from "@/components/Shared/FormItem/FormItem";
import AuthenticationInput from "@/components/Shared/Input/AuthenticationInput/AuthenticationInput";
import AuthFooterLink from "@/components/Shared/layouts/AuthLayout/AuthFooterLink/AuthFooterLink";
import AuthSubHeader from "@/components/Shared/layouts/AuthLayout/AuthSubHeader/AuthSubHeader";
import React, { FC, useMemo } from "react";
import {
  IRegisterWithPhoneNumberForm,
  RegisterWithPhoneNumberSchemaValidation,
  IRegisterWithPhoneNumberSchemaValidation,
} from "./schema-validation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { URL } from "@/constant/url";
import useLink from "@/hook/use-link";
import useRequest from "@/hook/use-request";
import { API } from "@/constant/api";
import { IList } from "@/@types/Response/list";
import { IUserAuthenticationsInformation } from "@/@types/entity/refactor/user";
import AuthenticationAlert from "@/components/Shared/Alert/AuthenticationAlert/AuthenticationAlert";
import RequestInstanceNames from "@/utils/request/types/request-instances.enum";

const RegisterWithPhoneNumber: FC = (): JSX.Element => {
  const { redirect } = useLink();
  const request = useRequest<IList<IUserAuthenticationsInformation>>({instanceName:RequestInstanceNames.NewAuth})
  const { control, handleSubmit } =
    useForm<IRegisterWithPhoneNumberSchemaValidation>({
      defaultValues: {
        phoneNumber: "",
      },
      resolver: zodResolver(RegisterWithPhoneNumberSchemaValidation),
    });

  const onSubmit =async (values: IRegisterWithPhoneNumberForm): Promise<void> => {
    const { phoneNumber } = values;
    const reqBody = {
      phone_number:values.phoneNumber
    }
    const otpCheckCodeUrl = `${URL.AuthRegisterOtpEnterCode}?phone-number=${phoneNumber}`;
    const result = await request.post(API.loginSendOtp, reqBody)
    if (result?.success) {
      redirect(otpCheckCodeUrl);
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
    <section className="new-register--phone-number">
      <AuthSubHeader>
        برای ثبت نام، لطفا اطلاعات زیر را وارد کنید.
      </AuthSubHeader>
      <DividerLine />
      <div className="new-register--phone-number__form">
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
        <AuthenticationButton onClick={handleSubmit(onSubmit)}>
          ثبت نام
        </AuthenticationButton>
      </div>
      <AuthFooterLink
        text="قبلا ثبت نام کرده اید؟"
        linkText="ورود"
        href={URL.AuthLoginStatic}
      />
    </section>
  );
};

export default RegisterWithPhoneNumber;
