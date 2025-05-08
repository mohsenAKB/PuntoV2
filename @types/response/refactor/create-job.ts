import { IDistricts } from "@/@types/entity/refactor/districts";
import { IWorkTypes } from "./work_type";
import { ISalaries } from "./salaries";
import { ICities } from "@/@types/entity/refactor/cities";
import { IProvince } from "@/@types/entity/refactor/province";

export interface ICreateJobResponse {
  id: number;
  name: string;
  work_type: IWorkTypes;
  salary: ISalaries;
  description: string;
  city: ICities;
  district: IDistricts;
  skills: [];
  province: IProvince;
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
    avatar_attachment_id: number;
    cover_url: string;
    cover_attachment_id: number;
  };
  created_at: string;
}
