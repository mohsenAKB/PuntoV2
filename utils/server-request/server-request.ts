// 'use server';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const serverRequest = async <R = any, D = any>(
  config: AxiosRequestConfig<R>,
): Promise<R | undefined> => {
  try {
    const { data } = await axios.request<D, AxiosResponse<R>>({
      baseURL: process.env.NEXT_PUBLIC_REFACTOR_SERVER_URL!,
      url: config.url,
      ...config
    });

    return data

  } catch (error) {
    console.log(error)

    return undefined
  }
};
