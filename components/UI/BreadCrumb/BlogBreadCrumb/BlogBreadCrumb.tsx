import React, { FC } from "react";
import BaseBreadCrumb, {
  BaseBreadCrumbProps,
} from "../../Base/BaseBreadCrumb/BaseBreadCrumb";

export interface BlogBreadCrumbProps extends BaseBreadCrumbProps {}
const BlogBreadCrumb: FC<BlogBreadCrumbProps> = ({
  className,
  breadcrumbItems,
  root,
  rootImg,
}): JSX.Element => {
  return (
    <BaseBreadCrumb
      className={className}
      root={root}
      rootImg={rootImg}
      breadcrumbItems={breadcrumbItems}
    />
  );
};

export default BlogBreadCrumb;
