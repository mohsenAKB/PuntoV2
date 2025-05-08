import { IColor } from "@/@types/entity/refactor/colors";
import { IDegree } from "@/@types/entity/refactor/degree";
import { IExpertise } from "@/@types/entity/refactor/expertises";
import { IMaterial } from "@/@types/entity/refactor/material";
import { IProject } from "@/@types/entity/refactor/project";
import { IProvince } from "@/@types/entity/refactor/province";
import { IServiceLocation } from "@/@types/entity/refactor/service_location";
import { ISkill } from "@/@types/entity/refactor/skill";
import { ISmallResidentialSpace } from "@/@types/entity/refactor/small-residential-space";
import { IStyle } from "@/@types/entity/refactor/style";
import { IUsage } from "@/@types/entity/refactor/usage";

export interface IVerifyOtpDataResponse {
  usages: IUsage[];
  styles: IStyle[];
  small_residential_spaces: ISmallResidentialSpace[];
  materials: IMaterial[];
  expertises: IExpertise[];
  colors: IColor[];
  service_locations: IServiceLocation[];
  skills: ISkill[];
  user_profile: {
    id: number;
    first_name: string;
    last_name: string;
    biography: string;
    avatar_url?: string | null;
    cover_url?: string | null;
    skills: ISkill[];
    expertises: IExpertise[];
    company_name: string;
    role: string;
    contact_phone_number: string;
    address: string;
    website_url: string;
    awards?: string;
    study_field: string;
    rating: number;
    degree?: IDegree;
    province: IProvince;
    service_locations: IServiceLocation[];
    projects: IProject[];
  };

  auth: {
    access_token: string;
    token_type: string;
    expires_in: number;
  };
}
