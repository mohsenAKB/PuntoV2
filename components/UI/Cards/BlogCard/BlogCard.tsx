import Image from "next/image";
import Link from "next/link";
import React, { FC, JSX } from "react";
import { htmlToText } from "html-to-text";
import { blogsProps } from "@/@types/entities/blog/blogs";

export interface BlogCardProps {
  data: blogsProps;
}

const BlogCard: FC<BlogCardProps> = ({ data }): JSX.Element => {
  const htmlString = data?.short_description;
  const plainText = htmlToText(htmlString, {
    wordwrap: false,
  });
  console.log(data, "data");

  return (
    <article className="blog-card">
      <Link href={`/blog/${data?.slug}`}>
        <Image
          src={data?.thumbnail_url || ""}
          width={590}
          height={320}
          className="blog-card__cover"
          alt="cover-img"
        />
        <div className="blog-card__details">
          <h2 className="blog-card__details__heading">{data?.name}</h2>
        </div>
        {/* <h3 className="blog-card__author">{data?.details?.authorName}</h3> */}
        <p className="blog-card__description">{plainText}</p>
        <Link className="blog-card__link" href={`/blog/${data?.slug}`}>
          داستان کامل
        </Link>
      </Link>
    </article>
  );
};

export default BlogCard;
