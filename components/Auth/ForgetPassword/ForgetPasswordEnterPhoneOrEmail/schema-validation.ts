import { z } from "zod";

const phoneRegex = /^09\d{9}$/; // Validates  phone numbers starting with 09
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IForgetPasswordEnterPhoneOrEmailForm {
  phone_number: string;
}
export const ForgetPasswordEnterPhoneOrEmailSchemaValidation = z.object({
  phone_number: z
    .string()
    .min(1, { message: "وارد کردن ایمیل یا شماره تلفن الزامی است." })
    .refine((value) => phoneRegex.test(value) || emailRegex.test(value), {
      message: "لطفاً شماره تلفن معتبر وارد کنید.",
    }),
});

export type IForgetPasswordEnterPhoneOrEmailSchemaValidation = z.infer<
  typeof ForgetPasswordEnterPhoneOrEmailSchemaValidation
>;
