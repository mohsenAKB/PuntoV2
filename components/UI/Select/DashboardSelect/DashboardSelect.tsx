import { FC, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { ISelectItem } from "../../Base/BaseSelect/@types/SelectItem";
import BaseSingleSelect, { IBaseSingleSelectProps } from "../../Base/BaseSelect/BaseSingleSelect/BaseSingleSelect";
import DashboardSelectInput from "./DashboardSelectInput/DashboardSelectInput";
import DashboardSelectInputNoData from "./DashboardSelectInput/DashboardSelectInputNoData/DashboardSelectInputNoData";

interface IProps extends IBaseSingleSelectProps {
  onSearch?: (value: string, item: ISelectItem["value"]) => boolean
  showSelectedItems?: boolean
  allowClear?: boolean
}

const DashboardSelect: FC<IProps> = (props): JSX.Element => {

  const { className, placeholder, items, onSearch, value, rowKey, onChange, showSelectedItems = true, allowClear = true } = props

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

  const selectedItem = useMemo<ISelectItem | undefined>(() => {
    return items?.find(item => item.value === value)
  }, [value, items])


  return <div>
    <BaseSingleSelect
      {...props}
      className={classNames(
        className,
        'dashboard-select'
      )}
      filteredItems={filteredItems}
      items={items}
      noData={<DashboardSelectInputNoData />}
      onRenderInput={args => <DashboardSelectInput
        {...args}
        allowClear={allowClear}
        onSearch={onSearchHandler}
        placeholder={placeholder}
        selectedItem={selectedItem}
      />}
    />
  </div>
}

export default DashboardSelect