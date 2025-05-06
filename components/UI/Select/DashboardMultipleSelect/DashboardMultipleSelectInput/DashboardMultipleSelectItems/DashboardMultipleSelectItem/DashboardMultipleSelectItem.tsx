import { ISelectItem } from "@/components/UI/Base/BaseSelect/@types/SelectItem";
import { FC } from "react";
import CloseIcon from "./Icons/CloseIcon";

interface IProps {
  item: ISelectItem,
  onDeselect: () => void
}

const DashboardMultipleSelectItem: FC<IProps> = ({
  item,
  onDeselect
}): JSX.Element => {

  return <div className="dashboard-multiple-select-item-input">
    <span className="dashboard-multiple-select-item-input__icon" onClick={onDeselect}>
      <CloseIcon />
    </span>

    <span className="dashboard-multiple-select-item-input__title">{item.children}</span>
  </div>
}

export default DashboardMultipleSelectItem