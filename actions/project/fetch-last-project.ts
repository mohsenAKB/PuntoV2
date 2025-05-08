"use server";

import { IProject } from "@/@types/entities/projects/project";
import { IList } from "@/@types/list";
import { API } from "@/constant/api";
import { serverRequest } from "@/utils/server-request/server-request";

export const LastProjectAction = async (): Promise<IProject[] | undefined> => {
  try {
    const result = await serverRequest<IList<IProject[]>>({
      method: "GET",
      url: API.getLatestProjects,
    });

    return result?.data;
  } catch (error) {
    return undefined;
  }
};
