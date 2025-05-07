import { IProject } from "@/@types/entities/projects/project";
import Image from "next/image";
import React, { FC, JSX } from "react";

export interface LastIdeaItemProps {
  projects: IProject;
  onClick: (id: IProject["id"]) => void;
}

const LastIdeaItem: FC<LastIdeaItemProps> = ({
  data,
  onClick,
}): JSX.Element => {
  return (
    <article className="last-idea-item" onClick={() => onClick(data.id)}>
      <Image
        className="last-idea-item__cover"
        alt=""
        //src={data.main_image}
        src=""
        width={22}
        height={33}
      />
      <div className="last-idea-item__body">
        <Image
          className="last-idea-item__body--img"
          alt=""
          //src={data.author_profile.img}
          src=""
          width={22}
          height={22}
        />
        {/* <p className="last-idea-item__body--name">{`${data.author_profile.first_name} ${data.author_profile.last_name}`}</p> */}
      </div>
    </article>
  );
};

export default LastIdeaItem;
