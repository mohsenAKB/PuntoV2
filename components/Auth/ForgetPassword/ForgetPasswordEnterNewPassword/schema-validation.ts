import { z } from "zod";

export interface IForgetPasswordEnterNewPasswordForm {
  password: string;
  password_confirmation: string;
}
export const ForgetPasswordEnterNewPasswordSchemaValidation = z
  .object({
    password: z
      .string()
      .min(8, { message: "رمز عبور باید حداقل 8 کراکتر داشته باشد." }),
      password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "رمز عبور و تکرار رمز عبور یکسان نیستند.",
    path: ["confirmPassword"],
  });

export type IForgetPasswordEnterNewPasswordSchemaValidation = z.infer<
  typeof ForgetPasswordEnterNewPasswordSchemaValidation
>;
