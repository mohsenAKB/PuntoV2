import Image from "next/image";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";
import { IProject } from "@/@types/entities/projects/project";

export interface IdeasCardProps {
  project: IProject;
}

const IdeasCard: FC<IdeasCardProps> = ({ project }): JSX.Element | null => {
  const router = useRouter();
  const clickHandler = (id: number) => {
    router.push(`project/${id}`);
  };

  const defaultBannerImage = "/images/default/banner-default-img.jpg";
  const defaultProfileImage = "/images/default/profile-default-img.jpg";

  const bannerImage = project.cover_url
    ? `${project.cover_url}`
    : defaultBannerImage;

  const profileImage =
    project.user && project?.user?.avatar_url
      ? `${project?.user?.avatar_url}`
      : defaultProfileImage;

  const authorName =
    project.user && project.user.first_name && project.user.last_name
      ? `${project.user.first_name || ""} ${
          project.user.last_name || ""
        }`.trim()
      : "ناشناس";

  return (
    <article className="card" onClick={() => clickHandler(project.id)}>
      <Link href={`/project/${project.id}`}>
        <div className="card__link">
          <Image
            src={bannerImage}
            alt="Project banner"
            className="card__cover"
            width={380}
            height={300}
          />
          <div className="card__body__idea">
            <Image
              src={profileImage}
              alt=""
              width={41}
              height={41}
              className="card__body__idea--img"
            />
            <p className="card__body__idea--name">{authorName}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default IdeasCard;
