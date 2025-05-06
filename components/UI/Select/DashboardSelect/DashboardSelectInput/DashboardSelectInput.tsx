import { IRenderSelectInputHandler, IRenderSelectInputHandlerArgs } from "@/components/UI/Base/BaseSelect/@types/Select";
import { ISelectItem } from "@/components/UI/Base/BaseSelect/@types/SelectItem";
import { ChangeEventHandler, FC, MouseEventHandler, useEffect, useRef, useState } from "react";
import ClearIcon from "./Icons/ClearIcon";
import ArrowIcon from "./Icons/ArrowIcon";
import classNames from "classnames";
import BaseInput from "@/components/UI/Base/BaseInput/BaseInput";
import DashboardSelectInputItem from "./DashboardSelectInputItem/DashboardSelectInputItem";
import { IRenderSingleSelectInputHandlerArgs } from "@/components/UI/Base/BaseSelect/@types/SignleSelect";

interface IProps extends IRenderSingleSelectInputHandlerArgs {
  placeholder?: string
  onSearch: (value: string) => void
  allowClear?: boolean
}

const DashboardSelectInput: FC<IProps> = ({
  isOpen,
  selectedItem,
  disabled,
  onClear,
  placeholder = "",
  close,
  open,
  onDeselect,
  rowKey,
  onSearch,
  allowClear
}): JSX.Element => {

  const [searchValue, setSearchValue] = useState<string>("")

  const ref = useRef<HTMLDivElement | null>(null)
  const onCLearHandler = (): void => {
    if (onClear) {
      onClear()
      close()
    }
  }

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value
    !isOpen && open()
    onSearch(value)
    setSearchValue(value)
  }

  return <div className={classNames("dashboard-select-input",)}>

    <div
      ref={ref}
      className={classNames(
        "dashboard-select-input__input",
        { "dashboard-select-input__input--active": isOpen }
      )}>

      <span className="dashboard-select-input__input--placeholder">

        {selectedItem && <DashboardSelectInputItem
          onClick={onDeselect}
          selectedItem={selectedItem}
        />}

        <BaseInput
          value={searchValue}
          onChange={onChangeSearchValue}
          className="dashboard-select-input__input--input"
          placeholder={placeholder} />
      </span>

      <div className="dashboard-select-input__actions">
        {allowClear && <span
          className="dashboard-select-input__actions--item dashboard-select-input__actions--clear"
          onMouseDown={onCLearHandler}>
          <ClearIcon />
        </span>
        }
        <span className="dashboard-select-input__actions--spacer"></span>

        <span
          className="dashboard-select-input__actions--item dashboard-select-input__actions--arrow">
          <ArrowIcon />
        </span>
      </div>
    </div>

  </div>
}

export default DashboardSelectInput
