import { z } from "zod";

export interface IRegisterWithPhoneNumberForm {
  phoneNumber: string;
}
export const RegisterWithPhoneNumberSchemaValidation = z.object({
  phoneNumber: z
    .string()
    .trim()
    // .regex(/^\d+$/, { message: "شماره تلفن باید فقط شامل اعداد باشد" })
    .min(11, { message: "شماره تلفن صحیح را وارد نمایید." }),
});

export type IRegisterWithPhoneNumberSchemaValidation = z.infer<
  typeof RegisterWithPhoneNumberSchemaValidation
>;
