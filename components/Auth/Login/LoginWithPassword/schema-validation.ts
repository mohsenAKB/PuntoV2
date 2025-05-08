import { z } from "zod";

export interface ILoginWithPasswordForm {
  phoneNumber: string;
  password: string;
}
export const LoginWithPasswordSchemaValidation = z.object({
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\d+$/, { message: "شماره تلفن باید فقط شامل اعداد باشد" })
    .min(11, { message: "شماره تلفن صحیح را وارد نمایید." }),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل 8 کراکتر داشته باشد." }),
});

export type ILoginWithPasswordSchemaValidation = z.infer<
  typeof LoginWithPasswordSchemaValidation
>;
