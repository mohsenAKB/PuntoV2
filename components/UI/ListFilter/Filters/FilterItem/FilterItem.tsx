import { FC, ReactNode, useMemo } from "react";
import FilterSelectionItem from "./FilterSelectionItem/FilterSelectionItem";
import { Control } from "react-hook-form";
import { ListFilterValues } from "../../ListFilter";

export enum FilterItemType {
  selection = "selection"
}

export interface FilterSelectionItem {
  label: ReactNode
  value: string | number
}

export type FilterItemValue = string | number | string[] | number[]

export interface FilterItemProps {
  field: string
  label?: ReactNode
  type?: FilterItemType
  items?: FilterSelectionItem[]
  defaultValue?: FilterItemValue
}

export interface IProps extends FilterItemProps {
  values: ListFilterValues
  onChange: (field: string, value: FilterItemValue | undefined) => void
}

const FilterItem: FC<IProps> = (props): JSX.Element => {

  const {
    type = FilterItemType.selection,
    values,
    onChange
  } = props

  const filterElement = useMemo(() => {

    switch (type) {

      case FilterItemType.selection:
        return <FilterSelectionItem {...props} onChange={onChange} />

      default:
        return <></>
    }

  }, [props])

  return <div className="filter-list-item ">
    {filterElement}
  </div>
}

export default FilterItem