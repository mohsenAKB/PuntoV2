import { IProject } from "../entity/project";
import { IPaginationList } from "./pagination-list";

export interface IProjectsListResponse extends IPaginationList<IProject[]> { }