import { z } from "zod";

export interface IForgetPasswordEnterOTPForm {
  otp: string;
}
export const ForgetPasswordEnterOTPSchemaValidation = z.object({
  otp: z.string().min(5, { message: "کد ورود الزامی است." }),
});

export type IForgetPasswordEnterOTPSchemaValidation = z.infer<
  typeof ForgetPasswordEnterOTPSchemaValidation
>;
