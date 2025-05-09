import { detailsBlog } from "@/@types/blog/details-blog";
import { IGetFeaturedProjects } from "@/@types/response/refactor/feature-project-res";
import Image from "next/image";
import Link from "next/link";
import React, { FC, JSX } from "react";
import { htmlToText } from "html-to-text";

export interface FeaturedCardProps {
  title: string;
  viewAllLink: string;
  projectDetail?: IGetFeaturedProjects;
  blogDetail?: detailsBlog;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  title,
  viewAllLink,
  blogDetail,
  projectDetail,
}): JSX.Element => {
  const shortDescription = htmlToText(blogDetail?.short_description, {
    wordwrap: false,
  });
  return (
    <article className="featured-card">
      <div className="featured-card__row">
        <h2 className="featured-card__heading">{title}</h2>
        <Link href={viewAllLink} className="featured-card__viewAllLink--link">
          مشاهده همه
        </Link>
      </div>
      {projectDetail && (
        <Link
          href={`/project/${projectDetail?.id}`}
          className="featured-card__link"
        >
          <Image
            alt=""
            width={400}
            height={400}
            src={projectDetail?.cover_url}
            className="featured-card__cover"
          />
          <div className="featured-card__content">
            <h3 className="featured-card__content--title">
              {projectDetail?.name}
            </h3>

            <span className="featured-card__content--description cut-text">
              {projectDetail?.fa_description}
            </span>
          </div>
        </Link>
      )}
      {blogDetail && (
        <Link href={`blog/${blogDetail?.slug}`} className="featured-card__link">
          <Image
            alt=""
            width={400}
            height={400}
            src={blogDetail?.thumbnail_url}
            className="featured-card__cover"
          />
          <div className="featured-card__content">
            <h3 className="featured-card__content--title">
              {blogDetail?.name}
            </h3>

            <span className="featured-card__content--description cut-text">
              {shortDescription}
            </span>
          </div>
        </Link>
      )}
    </article>
  );
};

export default FeaturedCard;
