import { IRenderSingleSelectInputHandlerArgs } from "@/components/UI/Base/BaseSelect/@types/SignleSelect";
import { FC, ReactNode, useMemo } from "react";
import ArrowIcon from "./Icons/ArrowIcon";
import classNames from "classnames";
import { ISelectItem } from "@/components/UI/Base/BaseSelect/@types/SelectItem";

export interface DesignerProfileFilterInputProps extends IRenderSingleSelectInputHandlerArgs {
  placeholder?: string
  showArrow: boolean,
  value?: number[]
  showSelectedCount: boolean
  showSelectedValue: boolean
  selectedItems: ISelectItem<any>[]
  borderless?: boolean

}

const DesignerProfileFilterInput: FC<DesignerProfileFilterInputProps> = (props): JSX.Element => {

  const { placeholder, showArrow, isOpen, value, showSelectedCount, showSelectedValue, selectedItems, borderless } = props

  const selectedItemsCount = useMemo<string>(() => {
    if (!showSelectedCount) return ""

    if (value?.length === 0) return ""

    return `(${value?.length})`
  }, [value, showSelectedCount])

  const arrowElement = useMemo<ReactNode>(() => {
    if (!showArrow) return null

    return <span className={classNames(
      "designer-profile-filter-input__icon",
      { [`designer-profile-filter-input__icon--open`]: isOpen },
      { [`designer-profile-filter-input__icon--close`]: !isOpen },
    )}>
      <ArrowIcon />
    </span>
  }, [showArrow, isOpen])

  const placeholderText = useMemo<ReactNode>(() => {
    if (showSelectedValue) {
      return selectedItems.length ? selectedItems[selectedItems.length - 1].children : ""
    }

    return placeholder || ""

  }, [placeholder, showSelectedValue, value])

  return <div className={classNames(
    "designer-profile-filter-input",
    { "designer-profile-filter-input--active": value?.length },
    { "designer-profile-filter-input--borderless": borderless },
  )}>
    <span className="designer-profile-filter-input__placeholder">
      {placeholderText}

      <span>{selectedItemsCount}</span>
    </span>

    {arrowElement}
  </div>
}

export default DesignerProfileFilterInput