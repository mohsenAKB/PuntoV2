import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";

export interface BaseLinkProps {
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  className?: AnchorHTMLAttributes<HTMLAnchorElement>["className"];
  href?: AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  children?: ReactNode; // Content of the dropdown
}

const BaseLink: FC<BaseLinkProps> = ({
  linkProps,
  className,
  href,
  children,
}): JSX.Element => {
  return (
    <>
      <a
        href={href}
        {...linkProps}
        className={classNames("BaseLink", className)}
      >
        {children}
      </a>
    </>
  );
};

export default BaseLink;
