import { FC } from "react";

import { IProject } from "@/@types/entity/project";
import ProjectGallery from "@/components/Project/ProjectInformation/ProjectGallery/ProjectGallery";
import ProjectInformation from "@/components/Project/ProjectInformation/ProjectInformation";
import Link from "next/link";
import TopCard from "../TopCard/TopCard";
interface ProjectCardProps {
  project: IProject;
}
const CardGallery: FC<ProjectCardProps> = ({ project }): JSX.Element => {
  return (
    <div className="designer-project-card">
      <Link href="">
        <TopCard />
        <ProjectGallery project={project} />
        <ProjectInformation />
      </Link>
    </div>
  );
};

export default CardGallery;
