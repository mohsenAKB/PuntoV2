import { ICountry } from "../country";
import { IMedia } from "../media/media";
import { IProvince } from "../province";
import { IStyle } from "../style";
import { IUsage } from "../usage";
import { IUser } from "../user/user";
import { ProjectStatus } from "./project-status";

export interface IProject {
  id: number;
  name: string;
  fa_description: null;
  en_description: null;
  cover_url: string;
  cover_attachment_id?: number;
  publish_status: ProjectStatus;
  is_featured: boolean;
  is_archived: boolean;
  launch_date: null;
  usages: IUsage[];
  styles: IStyle[];
  country?: ICountry;
  province?: IProvince;
  city: string;
  media: IMedia[];
  user: IUser;
  dimensions?: number;
  views_count: number;
}
