import { IAuth } from "../entities/auth/auth";
import { ICategories } from "../entities/category";
import { IColor } from "../entities/color";
import { ICompanySize } from "../entities/company-sizes";
import { IDegree } from "../entities/degree";
import { IExpertise } from "../entities/expertises";
import { IMaterial } from "../entities/material";
import { IProvince } from "../entities/province";
import { ISalary } from "../entities/salary";
import { IServiceLocation } from "../entities/service-location";
import { ISkill } from "../entities/skill";
import { ISmallResidentialSpace } from "../entities/small-residential-space";
import { IStyle } from "../entities/style";
import { Itag } from "../entities/tag";
import { IUsage } from "../entities/usage";
import { IUserProfile } from "../entities/user-profile";
import { IWorkTypes } from "../entities/work_types";

export interface IStartupRes {
  usages: IUsage[];
  styles: IStyle[];
  small_residential_spaces: ISmallResidentialSpace[];
  materials: IMaterial[];
  expertises: IExpertise[];
  colors: IColor[];
  tags: Itag[];
  service_locations: IServiceLocation[];
  skills: ISkill[];
  provinces: IProvince[];
  degrees: IDegree[];
  categories: ICategories[];
  work_types: IWorkTypes[];
  salaries: ISalary[];
  company_sizes: ICompanySize[];
  user_profile: IUserProfile;
  auth: IAuth;
}
