'use server';

import { authServerRequest } from '@/utils/server-request/auth-server-request';

export const startupAction = async (): Promise<StartupResponse | undefined> => {
  try {
    const { data } = await authServerRequest<StartupResponse>({
      method: 'GET',
      url: API.startup,
    });

    return data;
  } catch (error) {
    return undefined;
  }
};
