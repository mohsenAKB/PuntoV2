import { AxiosRequestConfig } from "axios";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { serverRequest } from "./server-request";
import { getCookie } from "@/actions/cookie/get-cookie";
import { CookieType } from "@/@types/cookie";
// import { getCookies } from 'cookies-next';

export interface ServerRequestResult<R = any> {
  data?: GetServerSidePropsResult<R>;
  error: boolean;
}

export const authServerRequest = async <R = any, D = any>(
  config: AxiosRequestConfig<R>,
): Promise<R | undefined> => {
  const  token = await getCookie(CookieType.Token);

  return serverRequest<R, D>({
    ...config,
    url: config.url,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};
