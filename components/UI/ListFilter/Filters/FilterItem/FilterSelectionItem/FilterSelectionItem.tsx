import { FC, useMemo } from "react";
import { FilterItemProps, FilterItemValue } from "../FilterItem";
import DesignerProfileFilter from "@/components/UI/Select/DesignerProfileFilter/DesignerProfileFilter";
import { Control, Controller } from "react-hook-form";
import { ListFilterValues } from "../../../ListFilter";
import { ISelectItem } from "@/components/UI/Base/BaseSelect/@types/SelectItem";

interface FilterSelectionItemProps extends FilterItemProps {
  values: ListFilterValues
  onChange: (field: string, value: FilterItemValue | undefined) => void
}

const FilterSelectionItem: FC<FilterSelectionItemProps> = ({
  field,
  items,
  label,
  type,
  values,
  onChange
}): JSX.Element => {

  const selectItems = useMemo<ISelectItem<number>[]>(() => {
    return items?.map(item => ({ children: item.label, value: item.value as number })) || []
  }, [items])

  return <DesignerProfileFilter
    items={selectItems}
    onChange={(newValue) => onChange(field, newValue)}
    value={values[field] as number[]}
    placeholder={label as string}
  />
}

export default FilterSelectionItem