import { AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { serverRequest } from './server-request';
import { getCookies } from 'cookies-next';

export interface ServerRequestResult<R = any> {
  data?: GetServerSidePropsResult<R>;
  error: boolean;
}

export const authServerRequest = async <R = any, D = any>(
  config: AxiosRequestConfig<R>,
  context: GetServerSidePropsContext
): Promise<R | undefined> => {
  const { token } = getCookies({ req: context.req })

  return serverRequest<R, D>({
    ...config,
    url: config.url,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};
