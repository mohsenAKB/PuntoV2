import { FC, useEffect, useMemo, useState } from "react";
import BaseMultipleSelect, { IBaseMultipleSelectProps } from "../../Base/BaseSelect/BaseMultipleSelect/BaseMultipleSelect";
import classNames from "classnames";
import DashboardMultipleSelectInput from "./DashboardMultipleSelectInput/DashboardMultipleSelectInput";
import { ISelectItem } from "../../Base/BaseSelect/@types/SelectItem";
import DashboardMultipleSelectNoData from "./DashboardMultipleSelectInput/DashboardMultipleSelectNoData/DashboardMultipleSelectNoData";
import DashboardMultipleSelectItems from "./DashboardMultipleSelectInput/DashboardMultipleSelectItems/DashboardMultipleSelectItems";

interface IProps extends IBaseMultipleSelectProps {
  onSearch?: (value: string, item: ISelectItem["value"]) => boolean
  onAddItem?: (value: string) => void
  showSelectedItems?: boolean
}

const DashboardMultipleSelect: FC<IProps> = (props): JSX.Element => {

  const { className, placeholder, items, onSearch, value, rowKey, onChange, showSelectedItems = true, onAddItem, disabled } = props

  const [filteredItems, setFilteredItems] = useState<ISelectItem["value"][]>(items)

  const onSearchHandler = (searchedValue: string): void => {
    let foundedItems: ISelectItem<any>[] = items

    if (onSearch) {
      foundedItems = items.filter(item => onSearch(searchedValue, item))
    } else {
      foundedItems = items.filter(item => item.children?.toString().toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase().trim()))

    }

    setFilteredItems(foundedItems)
  }

  useEffect(() => {
    setFilteredItems(items)
  }, [items])

  const selectedItems = useMemo<ISelectItem[]>(() => {
    const foundedItems: ISelectItem[] = []

    for (const val of value) {
      const foundedItem = items.find(item => item.value === val)

      if (foundedItem) {
        foundedItems.push(foundedItem)
      }
    }

    return foundedItems
  }, [value, items])

  const onDeselect = (deselectValue: ISelectItem["value"]): void => {
    if (!onChange) return

    const newValue = value.filter(val => val !== deselectValue)

    onChange(newValue)
  }

  const selectedItemsElement = useMemo(() => {
    if (selectedItems.length && showSelectedItems) {
      return <DashboardMultipleSelectItems
        onDeselect={onDeselect}
        rowKey={rowKey}
        items={selectedItems} />
    }

    return <></>
  }, [rowKey, selectedItems, showSelectedItems])


  const onAddItemHandler = (newKey: string): void => {
    if (!onAddItem || disabled) return

    const foundedFilteredItem = filteredItems.find(item => item.children === newKey)
    if (foundedFilteredItem) {
      const isSelected = !!value.find(val => val === foundedFilteredItem.value)


      if (isSelected) {
        onChange && onChange(value.filter(val => val !== foundedFilteredItem.value))
      } else {
        onChange && onChange(value.concat(foundedFilteredItem.value))
      }

    } else {

      onAddItem(newKey)
    }
  }

  return <div>
    <BaseMultipleSelect
      {...props}
      className={classNames(
        className,
        'dashboard-multiple-select'
      )}
      filteredItems={filteredItems}
      items={items}
      noData={<DashboardMultipleSelectNoData />}
      onRenderInput={args => <DashboardMultipleSelectInput
        onSearch={onSearchHandler}
        disabled={disabled}
        onAddItem={onAddItemHandler}
        placeholder={placeholder}
        {...args} />}
    />

    {selectedItemsElement}
  </div>
}

export default DashboardMultipleSelect