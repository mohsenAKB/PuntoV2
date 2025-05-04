import { ICompanySize } from "../company-sizes";
import { IDegree } from "../degree";
import { IExpertise } from "../expertises";
import { IProvince } from "../province";
import { IServiceLocation } from "../service-location";
import { ISkill } from "../skill";

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  biography: string;
  avatar_url?: string | null;
  cover_url?: string | null;
  skills: ISkill[];
  expertises: IExpertise[];
  contact_phone_number: number;
  company_name: string;
  role: string;
  company_phone_number: string;
  company_address: string;
  company_website_url: string;
  awards?: string;
  study_field: string;
  rating: number;
  degree?: IDegree;
  province: IProvince;
  service_locations: IServiceLocation[];
  username: string;
  email: string;
  puntoship_id: number;
  has_business_profile: boolean;
  company_size: ICompanySize;
  identity_number: number;
  avatar_attachment_id: number;
  cover_attachment_id: number;
}
