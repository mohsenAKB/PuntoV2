"use client";

import { AuthRequestInstance } from "@/utils/request/instances/auth-request-instance";
import { DefaultRequestInstance } from "@/utils/request/instances/default-request-instance";
import { RequestInstanceUtility } from "@/utils/request/instance-utility";
import { AxiosError, AxiosResponse } from "axios";
import { FC, JSX, ReactNode, useEffect, useState } from "react";
import { OptionalAuthRequestInstance } from "@/utils/request/instances/optional-auth-request-instance copy";
import { toast } from "react-toastify";
import { NewAuthRequestInstance } from "@/utils/request/instances/new-auth-request-instance";
import { CookieType } from "@/@types/cookie";
import { getCookie } from "@/actions/cookie/get-cookie";

interface RequestProviderProps {
  children?: ReactNode;
}
const RequestProvider: FC<RequestProviderProps> = ({
  children,
}): JSX.Element => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const handleSuccessResponse = (
    response: AxiosResponse<ResponseSuccessMessage>
  ): AxiosResponse<ResponseSuccessMessage> => {

    if (response && response.data.messages) {
      response.data.messages.forEach((msg: string) =>
        toast.success(msg, {
          position: toast.POSITION.TOP_RIGHT,
        })

      );
    }

    return response
  };

  const handleErrorResponse = (
    error: AxiosError<ResponseError>
  ): Promise<void> => {
    const errorResponse = error?.response?.data;

    if (errorResponse && errorResponse.messages) {
      errorResponse.messages.forEach((msg: string) =>
        toast.error(msg, {
          position: toast.POSITION.TOP_RIGHT,
        })

      );
    } else {
      toast.error(" لطفا مجدد تلاش کنید", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    return Promise.reject(error);
  };

  const initializeAuthRequestInstance = (): void => {
    const authInstance = AuthRequestInstance.getInstance({
      baseURL: process.env.NEXT_PUBLIC_REFACTOR_SERVER_URL,
    });

    authInstance.instance.interceptors.request.use(
      async (config) => {
        const token = await getCookie(CookieType.Token)
        config.headers["Authorization"] = `Bearer ${token}`;

        return config;
      },
      (e) => {
        throw e;
      }
    );

    authInstance.instance.interceptors.response.use(
      handleSuccessResponse,
      handleErrorResponse
    );

    RequestInstanceUtility.getInstance().addInstance(authInstance);
  };

  const initializeOptionalAuthRequestInstance = (): void => {

    const optionalAuthInstance = OptionalAuthRequestInstance.getInstance({
      baseURL: process.env.NEXT_PUBLIC_REFACTOR_SERVER_URL,
    });

    optionalAuthInstance.instance.interceptors.request.use(
      async (config) => {
        const token = await getCookie("token")
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
      },
      (e) => {
        throw e;
      }
    );

    optionalAuthInstance.instance.interceptors.response.use(
      handleSuccessResponse,
      handleErrorResponse
    );

    RequestInstanceUtility.getInstance().addInstance(optionalAuthInstance);
  };

  const initializeDefaultRequestInstance = (): void => {
    const defaultInstance = DefaultRequestInstance.getInstance({
      baseURL: process.env.NEXT_PUBLIC_REFACTOR_SERVER_URL,
    });

    defaultInstance.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (e) => {
        throw e;
      }
    );

    defaultInstance.instance.interceptors.response.use(
      handleSuccessResponse,
      handleErrorResponse
    );

    RequestInstanceUtility.getInstance().addInstance(defaultInstance);
  };
  const initializeNewInstanceRequestInstance = (): void => {
    const NewInstanceRequestInstance = NewAuthRequestInstance.getInstance({
      baseURL: process.env.NEXT_PUBLIC_REFACTOR_SERVER_URL,
    });

    NewInstanceRequestInstance.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (e) => {
        throw e;
      }
    );

    NewInstanceRequestInstance.instance.interceptors.response.use(
      handleSuccessResponse,
    );

    RequestInstanceUtility.getInstance().addInstance(NewInstanceRequestInstance);
  };

  const initializeRequestInstance = (): void => {
    if (isInitialized) return;

    initializeAuthRequestInstance();
    initializeDefaultRequestInstance();
    initializeOptionalAuthRequestInstance();
    initializeNewInstanceRequestInstance()
    setIsInitialized(true)
  };

  useEffect(initializeRequestInstance, [])

  return <>{children}</>;
};

export default RequestProvider;
