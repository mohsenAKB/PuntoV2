import { AxiosRequestConfig } from "axios";
import { getCookies } from "cookies-next";
import { GetServerSidePropsContext } from "next";

export const getRequestConfigs = (context?: GetServerSidePropsContext): AxiosRequestConfig => {

  const { token } = getCookies({ req: context?.req })

  const configs: AxiosRequestConfig = {
    headers: token
      ? {
        Authorization: `bearer ${token}`
      }
      : undefined
  }

  return configs
}