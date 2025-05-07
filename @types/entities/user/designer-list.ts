import { IExpertise } from "../expertises";
import { ISkill } from "../skill";

export interface IDesignerListItem {
  id: number;
  first_name: string | null;
  last_name: string | null;
  biography: string;
  avatar_url: string;
  cover_url: string;
  skills: ISkill[];
  expertises: IExpertise[];
  username: string;
}
