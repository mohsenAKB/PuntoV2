import classNames from "classnames";
import { FC, ReactNode, createElement } from "react";

export interface BaseHeadingProps {
  children: ReactNode;
  className?: HTMLHeadingElement["className"];
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const BaseHeading: FC<BaseHeadingProps> = ({
  children,
  className,
  level,
}): JSX.Element => {
  //   return <h2 className=>{children}</h2>;
  return createElement(
    `h${level}`,
    classNames("base-heading", className),
    children
  );
};

export default BaseHeading;
