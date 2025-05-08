import React, { FC } from "react";
import BaseTextarea, {
  BaseTextAreaProps,
} from "@/components/UI/Base/BaseTextarea/BaseTextArea";
import "./DashboardTextArea.scss";
import classNames from "classnames";

export interface DashboardTextAreaProps extends BaseTextAreaProps { }
const DashboardTextArea: FC<DashboardTextAreaProps> = (props): JSX.Element => {
  const { rows = 4, className } = props;
  return (
    <div className="DashboardTextArea_wrapper">
      <BaseTextarea
        {...props}
        className={classNames("DashboardTextArea", className)}
        rows={rows}
      />
    </div>
  );
};

export default DashboardTextArea;
