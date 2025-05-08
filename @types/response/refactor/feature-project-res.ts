import { IUser } from "@/@types/entity/refactor/user";
import { IMedia } from "@/@types/entity/refactor/media";
import { IStyle } from "@/@types/entity/refactor/style";
import { IUsage } from "@/@types/entity/refactor/usage";
import { ICountry } from "@/@types/entity/refactor/country";
import { IProvince } from "@/@types/entity/refactor/province";
import { ICities } from "@/@types/entity/refactor/cities";

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
