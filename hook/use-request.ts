import { useState, useCallback, useMemo } from 'react';
import { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import RequestInstanceNames from '@/utils/request/types/request-instances.enum';
import { RequestInstanceUtility } from '@/utils/request/instance-utility';
import { RequestInstance } from '@/utils/request/types/request-instance.interface';
import { IList } from '@/@types/list';

export type RequestMethod = Method;

export type OnRequestFailed<R = any, D = any> = (err: AxiosError<R, D>, data?: IList<undefined>) => void;

export interface RequestHookConfigs {
  instanceName?: RequestInstanceNames;
  config?: AxiosRequestConfig;
  onRequestFailed?: OnRequestFailed;
}

interface UseRequestResult<R, D> {
  data: R | null;
  errorData: IList<undefined> | undefined
  error: AxiosError | null;
  loading: boolean;
  get: (url: string, config?: AxiosRequestConfig) => Promise<R | undefined>;
  post: (url: string, data?: D, config?: AxiosRequestConfig) => Promise<R | undefined>;
  put: (url: string, data?: D, config?: AxiosRequestConfig) => Promise<R | undefined>;
  patch: (url: string, data?: D, config?: AxiosRequestConfig) => Promise<R | undefined>;
  del: (url: string, config?: AxiosRequestConfig) => Promise<R | undefined>;
  request: (config: AxiosRequestConfig) => Promise<R | undefined>;
}

const useRequest = <R = any, D = any>(
  requestArgs: RequestHookConfigs = {},
): UseRequestResult<R, D> => {
  const { config: initialConfig, instanceName, onRequestFailed } = requestArgs;

  const requestInstance: RequestInstance =
    RequestInstanceUtility.getInstance().getRequestInstance(instanceName)!;

  const [data, setData] = useState<R | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  const executeRequest = useCallback(
    async (
      method: AxiosRequestConfig['method'],
      url: string,
      data?: D,
      config?: AxiosRequestConfig,
    ): Promise<R | undefined> => {
      setLoading(true);
      try {
        const finalConfig: AxiosRequestConfig = {
          ...initialConfig,
          ...config,
          method,
          url,
          data,
        };

        const response: AxiosResponse<R> = await requestInstance.request(finalConfig);
        setData(response.data);
        setError(null);

        return response.data;
      } catch (err) {

        setError(err as AxiosError);
        setData(null);
        onRequestFailed && onRequestFailed(
          err as AxiosError,
          extractErrorData(err as AxiosError<IList>)
        );
      } finally {
        setLoading(false);
      }
    },
    [initialConfig, requestInstance],
  );

  const get = useCallback(
    async (url: string, config?: AxiosRequestConfig): Promise<R | undefined> => {
      return await executeRequest('GET', url, undefined, config);
    },
    [executeRequest],
  );

  const post = useCallback(
    async (url: string, data?: D, config?: AxiosRequestConfig): Promise<R | undefined> => {
      return await executeRequest('POST', url, data, config);
    },
    [executeRequest],
  );

  const put = useCallback(
    async (url: string, data?: D, config?: AxiosRequestConfig): Promise<R | undefined> => {
      return await executeRequest('PUT', url, data, config);
    },
    [executeRequest],
  );

  const patch = useCallback(
    async (url: string, data?: D, config?: AxiosRequestConfig): Promise<R | undefined> => {
      return await executeRequest('PATCH', url, data, config);
    },
    [executeRequest],
  );

  const del = useCallback(
    async (url: string, config?: AxiosRequestConfig): Promise<R | undefined> => {
      return await executeRequest('DELETE', url, undefined, config);
    },
    [executeRequest],
  );

  const request = useCallback(
    async (config: AxiosRequestConfig): Promise<R | undefined> => {
      return await executeRequest(config.method || 'GET', config.url || '', config.data, config);
    },
    [executeRequest],
  );

  const extractErrorData = (error: AxiosError<IList<undefined>>): IList<undefined> | undefined => {
    return error.response?.data
  }

  const errorData = useMemo<IList<undefined> | undefined>(() => {
    if (!error) return undefined

    return extractErrorData(error as AxiosError<IList>)
  }, [error])

  return {
    data,
    error,
    errorData,
    loading,
    get,
    post,
    put,
    patch,
    del,
    request,
  };
};

export default useRequest;
