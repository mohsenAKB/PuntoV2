import { IRenderSelectInputHandler, IRenderSelectInputHandlerArgs } from "@/components/UI/Base/BaseSelect/@types/Select";
import { ISelectItem } from "@/components/UI/Base/BaseSelect/@types/SelectItem";
import { ChangeEventHandler, FC, MouseEventHandler, useEffect, useRef, useState } from "react";
import ClearIcon from "./Icons/ClearIcon";
import ArrowIcon from "./Icons/ArrowIcon";
import DashboardMultipleSelectItems from "./DashboardMultipleSelectItems/DashboardMultipleSelectItems";
import classNames from "classnames";
import BaseInput from "@/components/UI/Base/BaseInput/BaseInput";

interface IProps extends IRenderSelectInputHandlerArgs {
  placeholder?: string
  onSearch: (value: string) => void
  onAddItem?: (value: string) => void
}

const DashboardMultipleSelectInput: FC<IProps> = ({
  isOpen,
  selectedItems,
  disabled,
  onClear,
  placeholder = "",
  close,
  open,
  onDeselect,
  rowKey,
  onSearch,
  onAddItem
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

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!onAddItem || !searchValue.trim().length) return

    if (event.key === 'Enter') {
      onAddItem(searchValue)
    }
  }

  return <div className={classNames("dashboard-multiple-select-input",)}>

    <div
      ref={ref}
      className={classNames(
        "dashboard-multiple-select-input__input",
        { "dashboard-multiple-select-input__input--active": isOpen }
      )}>

      <span className="dashboard-multiple-select-input__input--placeholder">
        <BaseInput
          value={searchValue}
          onChange={onChangeSearchValue}
          inputProps={{
            onKeyDown
          }}
          disabled={disabled}
          className="dashboard-multiple-select-input__input--input"
          placeholder={placeholder} />
      </span>

      <div className="dashboard-multiple-select-input__actions">
        <span
          className="dashboard-multiple-select-input__actions--item dashboard-multiple-select-input__actions--clear"
          onMouseDown={onCLearHandler}>
          <ClearIcon />
        </span>

        <span className="dashboard-multiple-select-input__actions--spacer"></span>

        <span
          className="dashboard-multiple-select-input__actions--item dashboard-multiple-select-input__actions--arrow">
          <ArrowIcon />
        </span>
      </div>
    </div>

    {/* {selectedItems.length
      ? <DashboardMultipleSelectItems
        onDeselect={onDeselect}
        rowKey={rowKey}
        items={selectedItems} />
      : <></>} */}
  </div>
}

export default DashboardMultipleSelectInput
