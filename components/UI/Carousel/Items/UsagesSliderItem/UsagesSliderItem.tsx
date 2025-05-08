import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
export interface ProjectsSliderItemProps {
  singleSlide: IProjectsSliderItem;
}
export interface IProjectsSliderItem {
  id: number;
  user: ReactNode;
  title: string;
  image: string | null;
}
const ProjectsSliderItem: FC<ProjectsSliderItemProps> = ({
  singleSlide,
}): JSX.Element => {
  return (
    <article className="usages-slider-item">
      <Link href="" className="usages-slider-item__link">
        <Image
          src={
            singleSlide.image
              ? singleSlide.image
              : "/assets/pic/Alternative.svg"
          }
          width={300}
          height={300}
          className="usages-slider-item__link--img"
          alt=""
        />

        <h3 className="usages-slider-item__link--heading">
          {singleSlide.title}
        </h3>
      </Link>
    </article>
  );
};

export default ProjectsSliderItem;
