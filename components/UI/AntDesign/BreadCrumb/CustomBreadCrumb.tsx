import React, { FC } from "react";
import { BreadcrumbProps } from "antd";
import classNames from "classnames";
import BaseBreadcrumb from "../Base/BreadCrumb/BaseBreadcrumb";

interface CustomBreadCrumbProps extends BreadcrumbProps {}

const CustomBreadCrumb: FC<CustomBreadCrumbProps> = (props): JSX.Element => {
  const { className } = props;
  return (
    <BaseBreadcrumb
      className={classNames(`ant-custom-breadcrumb`, className)}
      {...props}
    />
  );
};

export default CustomBreadCrumb;
