import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";

const LastIdeasItem: FC = ({ ideas }): JSX.Element => {
  return (
    <div className="last-ideas">
      <Link href="" className="last-ideas__link">
        <article className="last-ideas__card">
          <img
            alt=""
            src={
              ideas.img ? ideas.img : "images/default/error-default-img.jpg"
            }
            className="last-ideas__card__cover"
          ></img>
          <div className="last-ideas__card__body">
            <img
              alt=""
              src={
                ideas.avatarImg
                  ? ideas.avatarImg
                  : "images/default/profile-default-img.jpg"
              }
              className="last-ideas__card__body--img"
            />
            <span className="last-ideas__card__body--name">{ideas.name}</span>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default LastIdeasItem;
