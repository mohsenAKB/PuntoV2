import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

export interface IProjectsSliderItem {
  id: number;
  user: React.ReactNode;
  title: string;
  image: string | null;
  onClick?: () => void;
}

const ProjectsSliderItem: FC<{ singleSlide: IProjectsSliderItem }> = ({
  singleSlide,
  onClick,
}): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/projects?usage=${singleSlide.id}`);
    }
  };

  return (
    <article className="usages-slider-item" onClick={handleClick}>
      <div className="usages-slider-item__link">
        <Image
          src={
            singleSlide.image
              ? singleSlide.image
              : "/images/default/error-default-img.jpg"
          }
          width={300}
          height={300}
          className="usages-slider-item__link--img"
          alt={singleSlide.title}
        />
        <h3 className="usages-slider-item__link--heading">
          {singleSlide.title}
        </h3>
      </div>
    </article>
  );
};

export default ProjectsSliderItem;
