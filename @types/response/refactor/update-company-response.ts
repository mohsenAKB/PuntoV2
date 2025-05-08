import { ICompanySize } from "@/@types/entity/refactor/company-size";
import { IDegree } from "@/@types/entity/refactor/degree";
import { IExpertise } from "@/@types/entity/refactor/expertises";
import { IProject } from "@/@types/entity/refactor/project";
import { IServiceLocation } from "@/@types/entity/refactor/service_location";
import { ISkill } from "@/@types/entity/refactor/skill";

export interface IUpdateCompanyResponse {
  data: {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    username: string;
    puntoship_id: number;
    has_business_profile: boolean;
    company_name: string;
    company_phone_number: string;
    company_website_url: string;
    company_address: string;
    company_size: ICompanySize;
    role: string;
    contact_phone_number: string;
    identity_number: number | null;
    biography: string;
    awards: null;
    study_field: null;
    degree: IDegree;
    province: string;
    avatar_url: string;
    avatar_attachment_id: number;
    cover_url: string;
    cover_attachment_id: number;
    deactivated_at: null;
    profile_approved_at: "2024-10-12T22:48:45.000000Z";
    skills: ISkill[];
    expertises: IExpertise[];
    service_locations: IServiceLocation;
    projects: IProject[];
  };
}
