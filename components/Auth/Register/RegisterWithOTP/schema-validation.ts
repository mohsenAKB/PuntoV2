import { z } from "zod";

export interface IRegisterWithOTPForm {
  otp: string;
}
export const RegisterWithOTPSchemaValidation = z.object({
  otp: z.string().min(5, { message: "کد ورود الزامی است." }),
});

export type IRegisterWithOTPSchemaValidation = z.infer<
  typeof RegisterWithOTPSchemaValidation
>;
