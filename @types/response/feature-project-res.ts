import { ICities } from "../entities/city";
import { ICountry } from "../entities/country";
import { IMedia } from "../entities/media/media";
import { IProvince } from "../entities/province";
import { IStyle } from "../entities/style";
import { IUsage } from "../entities/usage";
import { IUser } from "../entities/user/user";


export interface IGetFeaturedProjects {
  id: number;
  name: string;
  fa_description: string;
  en_description: string;
  cover_url: string;
  cover_attachment_id: number;
  views_count: number;
  publish_status: string;
  is_featured: boolean;
  is_archived: boolean;
  launch_date: string;
  dimensions: string;
  usages: IUsage[];
  styles: IStyle[];
  country: ICountry;
  province: IProvince;
  city: ICities;
  media: IMedia;
  user: IUser;
}
