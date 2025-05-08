import { ISelectItem } from "@/components/UI/Base/BaseSelect/@types/SelectItem";
import { FC } from "react";
import CloseIcon from "./Icons/CloseIcon";

interface IProps {
  item: ISelectItem,
  onDeselect: () => void
}

const DashboardTagInputItems: FC<IProps> = ({
  item,
  onDeselect
}): JSX.Element => {

  return <div className="dashboard-tag-input-item">
    <span className="dashboard-tag-input-item__icon" onClick={onDeselect}>
      <CloseIcon />
    </span>

    <span className="dashboard-tag-input-item__title">{item.children}</span>
  </div>
}

export default DashboardTagInputItems