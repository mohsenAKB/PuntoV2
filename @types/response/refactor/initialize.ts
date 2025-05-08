import { ICategory } from "@/@types/entity/refactor/category";
import { IColor } from "@/@types/entity/refactor/colors";
import { ICountry } from "@/@types/entity/refactor/country";
import { IDegree } from "@/@types/entity/refactor/degree";
import { IExpertise } from "@/@types/entity/refactor/expertises";
import { IMaterial } from "@/@types/entity/refactor/material";
import { IProvince } from "@/@types/entity/refactor/province";
import { IServiceLocation } from "@/@types/entity/refactor/service_location";
import { ISkill } from "@/@types/entity/refactor/skill";
import { ISmallResidentialSpace } from "@/@types/entity/refactor/small-residential-space";
import { IStyle } from "@/@types/entity/refactor/style";
import { IUsage } from "@/@types/entity/refactor/usage";
import {
  IUserAuthenticationsInformation,
  IUserWithProjects,
  IUserWithProjectsAndAuthentication,
} from "@/@types/entity/refactor/user";
import { IWorkTypes } from "./work_type";
import { ISalaries } from "./salaries";
import { ICompanySize } from "@/@types/entity/refactor/company-size";

export interface IInitializeResponse {
  colors: IColor[];
  expertises: IExpertise[];
  materials: IMaterial[];
  service_locations: IServiceLocation[];
  skills: ISkill[];
  small_residential_spaces: ISmallResidentialSpace[];
  styles: IStyle[];
  usages: IUsage[];
  user_profile?: IUserWithProjects;
  auth?: IUserAuthenticationsInformation;
  provinces: IProvince[];
  degrees: IDegree[];
  categories: ICategory[];
  work_types: IWorkTypes[];
  salaries: ISalaries[];
  company_sizes: ICompanySize[];
}
