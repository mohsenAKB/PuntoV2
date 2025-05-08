import { message } from "antd";
import { z } from "zod";

export interface IRegisterEnterInformationForm {
  firstName: string;
  lastName: string;
  email?: string;
  password: string;
  confirmPassword: string;
}
export const RegisterEnterInformationSchemaValidation = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "نام خود را وارد کنید." })
      .max(50, { message: "نام خود را وارد کنید." }),
    lastName: z
      .string()
      .min(2, {
        message: "نام خانوادگی خود را وارد کنید.",
      })
      .max(50, {
        message: "نام خانوادگی خود را وارد کنید.",
      }),
    email: z
      .string()
      .email({ message: "یک ایمیل معتبر وارد کنید." })
      .optional()
      .or(z.literal("")),
    password: z.string().min(8, { message: "حداقل 8 حرف الزامی است." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمزها یکسان نیستند.",
    path: ["confirmPassword"],
  });

export type IRegisterEnterInformationSchemaValidation = z.infer<
  typeof RegisterEnterInformationSchemaValidation
>;
