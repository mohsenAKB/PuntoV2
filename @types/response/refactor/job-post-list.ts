import { ICities } from "@/@types/entity/refactor/cities";
import { IWorkTypes } from "./work_type";
import { IDistricts } from "@/@types/entity/refactor/districts";
import { ISkill } from "@/@types/entity/refactor/skill";
import { IProvince } from "@/@types/entity/refactor/province";
import { ISalaries } from "./salaries";

export interface IGetJobResponse {
  id: number;
  name: string;
  work_type: IWorkTypes;
  salary: ISalaries ;
  description: string;
  city: ICities;
  province?: IProvince;
  district: IDistricts;
  skills: ISkill[];
  publish_status: {
    id: string;
    name: string;
  };
  user: {
    id: number;
    company_name: string;
    company_phone_number: string;
    company_website_url: string;
    company_address: string;
    company_size: string;
    avatar_url: string;
    avatar_attachment_id: string;
    cover_url: string;
    cover_attachment_id: string;
  };
  created_at: string;

  is_applied: boolean;
}
