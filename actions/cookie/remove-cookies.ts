"use server";

import { cookies } from "next/headers";

export const removeCookie = async (key: string): Promise<void> => {
  (await cookies()).delete(key);
};
