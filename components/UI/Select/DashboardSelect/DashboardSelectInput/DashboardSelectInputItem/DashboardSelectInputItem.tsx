import { ISelectItem } from "@/components/UI/Base/BaseSelect/@types/SelectItem";
import { FC, useMemo } from "react";

interface DashboardSelectInputItemProps {
  selectedItem: ISelectItem<any>
  onClick: (value: any) => void
}

const DashboardSelectInputItem: FC<DashboardSelectInputItemProps> = ({
  selectedItem,
  onClick
}): JSX.Element => {

  return <div
    className="dashboard-select-input-item__container"
    onClick={() => onClick(selectedItem.value)}>
    <span className="dashboard-select-input-item">
      {selectedItem.children}
    </span>
  </div>
}

export default DashboardSelectInputItem