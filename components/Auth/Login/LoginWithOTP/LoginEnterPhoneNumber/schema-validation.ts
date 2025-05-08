import { z } from "zod";

export interface ILoginEnterPhoneNumberForm {
  phoneNumber: string;
}
export const LoginEnterPhoneNumberSchemaValidation = z.object({
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\d+$/, { message: "شماره تلفن باید فقط شامل اعداد باشد" })
    .min(11, { message: "شماره تلفن صحیح را وارد نمایید." }),
});

export type ILoginEnterPhoneNumberSchemaValidation = z.infer<
  typeof LoginEnterPhoneNumberSchemaValidation
>;
