import { IColor } from "../color";
import { IMaterial } from "../material";
import { ISmallResidentialSpace } from "../small-residential-space";
import { IUsage } from "../usage";

export interface IMedia {
  attachment_id: number;
  media_url: string;
  categories: IUsage[];
  materials: IMaterial[];
  colors: IColor[];
  small_residential_spaces: ISmallResidentialSpace[];
  is_active: boolean;
}
