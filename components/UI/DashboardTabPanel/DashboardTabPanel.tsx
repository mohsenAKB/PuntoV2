import { FC, ReactNode, useMemo } from "react";
import BaseTabs, { BaseTabsProps } from "../Base/BaseTabs/BaseTabs";
import BaseTab from "../Base/BaseTabs/BaseTab/BaseTab";
import classNames from "classnames";

export interface IDashboardTabPanelItem {
  label: string,
  children?: ReactNode
}

interface DashboardTabPanelProps extends Omit<BaseTabsProps, "children"> {
  items: IDashboardTabPanelItem[]
}

const DashboardTabPanel: FC<DashboardTabPanelProps> = ({
  items,
  className
}): JSX.Element => {

  const tabItems = useMemo<JSX.Element[]>(() => {
    return items.map(item => <BaseTab
      key={item.label}
      label={item.label}>{item.children}</BaseTab>)
  }, [items])

  return <BaseTabs
    className={classNames("dashboard-tab-panel", className)}>
    {tabItems}
  </BaseTabs>
}


export default DashboardTabPanel