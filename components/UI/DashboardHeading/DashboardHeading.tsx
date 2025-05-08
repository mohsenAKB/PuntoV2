import { FC } from "react";
import BaseHeading, { BaseHeadingProps } from "../Base/BaseHeading/BaseHeading";

export interface DashboardHeadingProps extends BaseHeadingProps {}

const DashboardHeading: FC<DashboardHeadingProps> = ({children}): JSX.Element => {
  //TODO: use level props & default level value
  return (
    <BaseHeading level={2} className="dashboard-heading">
      {children}
    </BaseHeading>
  );
};

export default DashboardHeading;
