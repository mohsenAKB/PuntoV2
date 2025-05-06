import classNames from "classnames";
import { FC, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export interface BaseBreadCrumbItem {
  title: string | JSX.Element;
  href: string;
}
export interface BaseBreadCrumbProps {
  className?: string;
  root?: string;
  rootImg?: string;
  breadcrumbItems: BaseBreadCrumbItem[];
  isDashboard?: boolean;
  isBlog?: boolean;
}

const BaseBreadCrumb: FC<BaseBreadCrumbProps> = ({
  className,
  root,
  breadcrumbItems,
  rootImg,
  isDashboard,
}): JSX.Element => {
  return (
    <nav className={classNames("base-breadcrumb", className)}>
      <ol
        className={classNames(
          "base-breadcrumb__wrapper",
          `${className}__wrapper`
        )}
      >
        <li
          className={classNames("base-breadcrumb__item", `${className}__item`)}
        >
          {isDashboard ? <div className="icon"></div> : null}

          <Link href="/">
            {root
              ? root
              : rootImg && (
                  <Image src={rootImg} height={20} width={20} alt="root" />
                )}
          </Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <Fragment key={index}>
            <div
              className={isDashboard ? "backward-icon" : "previous-icon"}
            ></div>
            <li
              className={classNames(
                "base-breadcrumb__item",
                `${className}__item`
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default BaseBreadCrumb;
