"use client";

import { URL } from "@/constant/url";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";

interface UserLinkResult {
  redirect: (url: URL | string) => void;
  getQueryParams: <T = object>(query?: ReadonlyURLSearchParams) => T;
}

const useLink = (): UserLinkResult => {
  const router = useRouter();
  const params = useSearchParams();

  const redirect = (url: URL | string): void => {
    // redirect(URL.AuthLoginOtpEnterCode + "?phone-number=213123123")
    router.push(url);
  };

  const getQueryParams = <T = object>(query?: ReadonlyURLSearchParams): T => {
    const queryParams = new URLSearchParams(query || params); // or pass a query string
    return Object.fromEntries(queryParams.entries()) as T;
  };

  return {
    getQueryParams,
    redirect,
  };
};

export default useLink;
