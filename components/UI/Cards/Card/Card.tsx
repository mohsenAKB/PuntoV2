import { blogsProps } from "@/@types/entities/blog/blogs";
import Image from "next/image";
import Link from "next/link";
import React, { FC, JSX } from "react";

export interface cardProps {
  card?: {}[];
  blog: blogsProps;
}

const Card: FC<cardProps> = ({ blog }): JSX.Element => {
  return (
    <article className="card">
      <Link href={`blog/blog-category/${blog?.slug}`} className="card__link">
        <Image
          src={blog.cover_url}
          alt=""
          className="card__cover"
          width={380}
          height={300}
        />
        <div className="card__body_blog">
          <h3 className="card__body_blog--heading">{blog?.name}</h3>
          <p className="card__body_blog--des">{blog?.description}</p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
