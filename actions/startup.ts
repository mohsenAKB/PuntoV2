"use server";

import { IList } from "@/@types/list";
import { IStartupRes } from "@/@types/response/startupRes";
import { API } from "@/constant/api";
import { authServerRequest } from "@/utils/server-request/auth-server-request";

export const startupAction = async (): Promise<IStartupRes | undefined> => {
  try {
    const result = await authServerRequest<IList<IStartupRes>>({
      method: "GET",
      url: API.getInitializeConfigs,
    });

    return result?.data;
  } catch (error) {
    return undefined;
  }
};
