import { FC, MouseEventHandler, ReactNode, useMemo } from "react";
import DashboardTagInputItem from "./DashboardTagInputItem/DashboardTagInputItem";

export interface IDashboardTagItem<T = any> {
  value: T;
  children: ReactNode;
}

interface IProps {
  items: IDashboardTagItem<any>[]
  rowKey?: keyof IDashboardTagItem['value'];
  onDeselect?: (value: IDashboardTagItem['value']) => void
}

const DashboardTagInputItems: FC<IProps> = ({
  items,
  rowKey,
  onDeselect
}): JSX.Element => {


  const itemElements = useMemo<JSX.Element[]>(() => {
    return items.map(item => <DashboardTagInputItem
      onDeselect={() => onDeselect && onDeselect(item.value)}
      key={rowKey ? item.value[rowKey] : item.value}
      item={item} />)
  }, [items])


  const onMousedDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }

  return <div
    className="dashboard-tag-input-items"
    onMouseDown={onMousedDown}>
    {itemElements}
  </div>
}

export default DashboardTagInputItems