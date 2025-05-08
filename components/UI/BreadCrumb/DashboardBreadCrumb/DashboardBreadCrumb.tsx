import { FC } from "react";
import BaseBreadCrumb, {
  BaseBreadCrumbProps,
} from "@/components/UI/Base/BaseBreadCrumb/BaseBreadCrumb";

export interface DashboardBreadCrumbProps extends BaseBreadCrumbProps {
  className: string;
}

const DashboardBreadCrumb: FC<DashboardBreadCrumbProps> = ({
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

export default DashboardBreadCrumb;
