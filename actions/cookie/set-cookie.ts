"use server";

import { CookieType } from "@/@types/cookie";
import { cookies } from "next/headers";

export const setCookie = async (
  key: CookieType,
  value: string
): Promise<void> => {
  (await cookies()).set(key, value, { httpOnly: true });
};
