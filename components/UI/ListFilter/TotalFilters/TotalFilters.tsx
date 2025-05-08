import React, { FC, useEffect, useMemo, useState } from 'react'
import { Button, Modal, Tabs, TabsProps } from "antd";
import TotalFiltersFooter from './TotalFiltersFooter/TotalFiltersFooter';
import { FilterItemProps, FilterItemValue } from '../Filters/FilterItem/FilterItem';
import { ListFilterValues } from '../ListFilter';
import FiltersSelect, { GeneralFilter } from '../../FiltersSelect/FiltersSelect';

export interface ITotalFilters {
  filters: FilterItemProps[];
  isOpen?: boolean;
  onCancel: () => void;
  onSubmit: (value: ListFilterValues) => void;
  value: ListFilterValues
}

const TotalFilters: FC<ITotalFilters> = ({
  isOpen,
  onCancel,
  onSubmit,
  filters,
  value
}): JSX.Element => {

  const [selectedValue, setSelectedValues] = useState<ListFilterValues>(value)

  const onChangeHandler = (field: string, newValues: GeneralFilter[]): void => {
    const convertedValues = newValues.map((item) => item.id)

    setSelectedValues(prev => ({
      ...prev,
      [field]: convertedValues
    }))
  }

  const tabFilters = useMemo<TabsProps["items"]>(() => {
    const items: TabsProps["items"] = [];

    for (const filter of filters) {

      const filterItem: GeneralFilter[] = filter.items?.map((item) => {
        return {
          id: item.value as number,
          name: item.label as string,
        }
      }) || []

      const convertedFilterValue: GeneralFilter[] = []
      const currentFilterValue = selectedValue[filter.field]
      if (currentFilterValue) {
        if (Array.isArray(currentFilterValue)) {
          for (const filterValueId of currentFilterValue) {
            const foundFilterValue = filter.items?.find(filterItem => filterItem.value === filterValueId)
            if (foundFilterValue) {
              convertedFilterValue.push({
                id: foundFilterValue.value as number,
                name: foundFilterValue.label as string,
              })
            }
          }
        } else {
          const foundFilterValue = filter.items?.find(filterItem => filterItem.value === currentFilterValue)
          if (foundFilterValue) {
            convertedFilterValue.push({
              id: foundFilterValue.value as number,
              name: foundFilterValue.label as string,
            })
          }
        }
      }

      items.push({
        label: filter.label as string,
        key: filter.label as string,
        children: <FiltersSelect
          title={filter.label as string}
          items={filterItem}
          selectedFilters={convertedFilterValue}
          onSelectedFiltersChange={(newValue) => onChangeHandler(filter.field, newValue)}
        />
      })
    }

    return items;

  }, [filters, selectedValue])

  const totalSelectedValuesCount = useMemo<number>(() => {
    let count = 0;

    for (const valueKey in selectedValue) {
      const fieldValue = selectedValue[valueKey]

      if (fieldValue) {
        if (Array.isArray(fieldValue)) {
          count += fieldValue.length
        } else {
          count += 1
        }
      }
    }

    return count
  }, [selectedValue])

  useEffect(() => {
    setSelectedValues(value)
  }, [value])

  useEffect(() => {
    setSelectedValues(value)
  }, [isOpen])

  const onSubmitHandler = (): void => {
    onSubmit(selectedValue)
  }

  const onRemoveFilter = (field: string, value: string): void => {
    const newSelectedValues: ListFilterValues = { ...selectedValue }

    if (Array.isArray(newSelectedValues[field])) {
      newSelectedValues[field] = newSelectedValues[field].filter(item => item !== value) as FilterItemValue
    } else {
      newSelectedValues[field] = undefined
    }

    setSelectedValues(newSelectedValues)
  }

  return (
    <Modal
      title="همه فیلترها"
      open={isOpen}
      onCancel={onCancel}
      // onOk={onSubmitHandler}
      className="ant-modal-jobs"
      footer={
        <div className="flex justify-between items-center w-full">
          <h2 className="p-8 mr-8 font-bold">
            {totalSelectedValuesCount} فیلتر انتخاب شده
          </h2>
          <Button
            className="p-8 ml-8 bg-gray-100 text-black font-bold text-2xl"
            onClick={onSubmitHandler}
          >
            اعمال فیلترها
          </Button>
        </div>
      }
    >
      <Tabs tabPosition="left" items={tabFilters} />
      <TotalFiltersFooter
        filterValues={selectedValue}
        filters={filters}
        onRemoveFilter={onRemoveFilter} />
    </Modal>
  )
}

export default TotalFilters