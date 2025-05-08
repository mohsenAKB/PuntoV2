import { IWorkTypes } from "@/@types/Response/refactor/work_type";

export interface ICreateJobReq {
  name: string;
  work_type: IWorkTypes;
  salary: string;
  description: string;
  city_id: string;
  district_id: string;
  skill_ids: number[];
  province_id: number;
}
