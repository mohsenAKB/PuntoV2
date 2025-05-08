export interface ICreateProject {
  name: string;
  usage_ids: number[];
  style_ids: number[];
  launch_date: string;
  country_id: number;
  province_id: number;
  dimensions: number;
  fa_description: string;
  en_description: string;
}
