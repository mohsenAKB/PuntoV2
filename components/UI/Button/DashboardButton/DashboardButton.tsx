import React, { FC, ReactNode } from "react";
import BaseButton, { BaseButtonProps } from "../../Base/BaseButton/BaseButton";
import classNames from "classnames";
export interface DashboardButtonProps extends BaseButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void
}
const DashboardButton: FC<DashboardButtonProps> = (props) => {
  const {
    children,
    className,
  } = props

  return (
    <BaseButton
      {...props}
      className={classNames("dashboard-button", className)}
    >
      {children}
    </BaseButton>
  );
};

export default DashboardButton;
