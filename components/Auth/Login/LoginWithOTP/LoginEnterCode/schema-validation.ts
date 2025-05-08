import { z } from "zod";

export interface ILoginEnterCodeForm {
  otp: string;
}
export const LoginEnterCodeSchemaValidation = z.object({
  otp: z.string().min(5, { message: "کد ورود الزامی است." }),
});

export type ILoginEnterCodeSchemaValidation = z.infer<
  typeof LoginEnterCodeSchemaValidation
>;
