import { detailsBlog } from "@/@types/entities/blog/details-blog";
import { IList } from "@/@types/list";
import { API } from "@/constant/api";
import { serverRequest } from "@/utils/server-request/server-request";

export const commonBlogAction = async (): Promise<
  detailsBlog[] | undefined
> => {
  try {
    const result = await serverRequest<IList<detailsBlog[]>>({
      method: "GET",
      url: API.getBlogsCommon,
    });

    return result?.data;
  } catch (error) {
    return undefined;
  }
};
