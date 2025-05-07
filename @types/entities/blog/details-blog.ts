import { ICategoryBlog } from "./category";

export interface detailsBlog {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  thumbnail_url: string;
  cover_url: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  categories: ICategoryBlog[];
}
