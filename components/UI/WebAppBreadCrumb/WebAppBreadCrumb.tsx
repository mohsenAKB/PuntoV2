import { FC } from "react";
import BaseBreadCrumb, {
  BaseBreadCrumbProps,
} from "../Base/BaseBreadCrumb/BaseBreadCrumb";

export interface WebAppBreadCrumbProps extends BaseBreadCrumbProps {
  className: string;
}

const WebAppBreadCrumb: FC<WebAppBreadCrumbProps> = ({
  className,
  breadcrumbItems,
  root,
  rootImg
}): JSX.Element => {
  return (
    <BaseBreadCrumb
      className={className}
      root={root}
      rootImg={rootImg}
      breadcrumbItems={breadcrumbItems}
      isDashboard={false}
    />
  );
};

export default WebAppBreadCrumb;
