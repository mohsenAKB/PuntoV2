import { IProvince } from "@/@types/entity/refactor/province";
import { IWorkTypes } from "./work_type";

export interface IGetJobResponse {
  id: number;
  name: string;
  work_type: IWorkTypes;
  salary: string;
  description: string;
  applicants_count: number;
  province: IProvince;
  city: {
    id: string;
    name: string;
  };
  district: {
    id: string;
    name: string;
  };
  skills: number[];
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
}
