import { IDesignerListItem } from "../user/designer-list";
import { ICategoryBlog } from "./category";

export interface blogsProps {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  thumbnail_url: string;
  cover_url: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  is_featured: boolean;
  categories: ICategoryBlog[];
  user: IDesignerListItem;
  file_url: string;
}
