import classNames from "classnames";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

export interface HeadingSectionProps {
  heading: string;
  anchorText: string;
  link: string;
  children?: ReactNode
  className?: string
}

const HeadingSection: FC<HeadingSectionProps> = ({
  heading,
  anchorText,
  link,
  children,
  className
}): JSX.Element => {
  return (
    <div className={classNames(
      "heading-section",
      className
    )}>
      <div className="heading-section__header">
        <h2 className="heading-section__title"> {heading}</h2>
        <Link href={link} className="heading-section__link">
          {anchorText}
        </Link>
      </div>

      <div>
        {children}
      </div>
    </div>
  );
};

export default HeadingSection;
