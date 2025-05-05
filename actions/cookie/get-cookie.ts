'use server'
import { cookies } from "next/headers";

export const getCookie = async (key: string): Promise<string | null> => {
  const cookie = (await cookies()).get(key)?.value;

  if (!cookie) {
    return null;
  }
  return cookie;
};
