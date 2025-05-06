import { FC, useMemo } from "react";
import classNames from "classnames";
import DesignerProfileFilterInput from "./DesignerProfileFilterInput/DesignerProfileFilterInput";
import BaseMultipleSelect, { IBaseMultipleSelectProps } from "../../Base/BaseSelect/BaseMultipleSelect/BaseMultipleSelect";
import { ISelectItem } from "../../Base/BaseSelect/@types/SelectItem";

export interface DesignerProfileFilterProps extends Omit<IBaseMultipleSelectProps, "onChange"> {
  showArrow?: boolean
  onChange: (values: ISelectItem['value'][], items: ISelectItem[]) => void,
  borderless?: boolean
  showSelectedCount?: boolean
  showSelectedValue?: boolean

}

const DesignerProfileFilter: FC<DesignerProfileFilterProps> = (props): JSX.Element => {

  const { placeholder, showArrow = true, items, value, onChange, showSelectedCount = true, borderless, showSelectedValue = false, className } = props

  const findSelectedItems = (values: ISelectItem["value"][]): ISelectItem[] => {
    return items.filter(item => values.includes(item.value))
  }

  const onChangeHandler = (values: ISelectItem['value'][]): void => {
    const foundedItems = findSelectedItems(values)
    onChange(values, foundedItems)
  }

  return <BaseMultipleSelect
    {...props}
    className={classNames(
      "designer-profile-filter",
    )}
    items={items}
    noData={<></>}
    onChange={onChangeHandler}
    onRenderInput={args => <DesignerProfileFilterInput
      {...args}
      showSelectedValue={showSelectedValue}
      showSelectedCount={showSelectedCount}
      placeholder={placeholder}
      showArrow={showArrow}
      value={value}
      borderless={borderless}
    />}
  />
}

export default DesignerProfileFilter