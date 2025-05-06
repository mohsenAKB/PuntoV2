import { ISelectItem } from "@/components/UI/Base/BaseSelect/@types/SelectItem";
import { FC, MouseEventHandler, useMemo } from "react";
import DashboardMultipleSelectItem from "./DashboardMultipleSelectItem/DashboardMultipleSelectItem";

interface IProps {
  items: ISelectItem<any>[]
  rowKey?: keyof ISelectItem['value'];
  onDeselect: (value: ISelectItem['value']) => void
}

const DashboardMultipleSelectItems: FC<IProps> = ({
  items,
  rowKey,
  onDeselect
}): JSX.Element => {

  const itemElements = useMemo<JSX.Element[]>(() => {
    return items.map(item => <DashboardMultipleSelectItem
      onDeselect={() => onDeselect(item.value)}
      key={rowKey ? item.value[rowKey] : item.value}
      item={item} />)
  }, [items])

  const onMousedDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }

  return <div
    className="dashboard-multiple-select-input-items"
    onMouseDown={onMousedDown}>
    {itemElements}
  </div>
}

export default DashboardMultipleSelectItems