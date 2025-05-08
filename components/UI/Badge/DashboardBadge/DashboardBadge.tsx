import { BadgeType } from "@/@types/entity/badge-type.enum";
import classNames from "classnames";
import { FC, ReactNode } from "react";

export interface DashboardBadgeProps {
  type?: BadgeType
  children?: ReactNode
  className?: string
}

const DashboardBadge: FC<DashboardBadgeProps> = ({
  type = BadgeType.info,
  children,
  className
}): JSX.Element => {

  return <div className={classNames(
    "dashboard-badge",
    `dashboard-badge--${type}`,
    className,
    `${className}--${type}`
  )}>
    {children}
  </div>
}

export default DashboardBadge