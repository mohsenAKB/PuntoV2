import React, { FC } from "react";
import { Breadcrumb, BreadcrumbProps } from "antd";
import classNames from "classnames";

interface BaseBreadcrumbProps extends BreadcrumbProps {}

const BaseBreadcrumb: FC<BaseBreadcrumbProps> = (props): JSX.Element => {
  const { className } = props;
  return (
    <Breadcrumb
      className={classNames(`base-ant-Breadcrumb`, className)}
      {...props}
    />
  );
};

export default BaseBreadcrumb;
