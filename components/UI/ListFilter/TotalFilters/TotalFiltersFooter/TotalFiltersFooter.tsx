import { FC, useMemo } from "react"
import { Tag as AntdTag } from "antd";
import { FilterItemProps } from "../../Filters/FilterItem/FilterItem";
import { ListFilterValues } from "../../ListFilter";

interface ITotalFiltersFooter {
  filters: FilterItemProps[];
  filterValues: ListFilterValues
  onRemoveFilter: (field: string, value: string) => void
}

interface IFilterFooterTag {
  label: string
  value: string
  field: string
}

const TotalFiltersFooter: FC<ITotalFiltersFooter> = ({
  filters,
  filterValues,
  onRemoveFilter
}): JSX.Element => {

  const selectedFilterValues = useMemo<IFilterFooterTag[]>(() => {
    const tags: IFilterFooterTag[] = []

    for (const key in filterValues) {

      const foundFilter = filters.find(filter => filter.field === key)
      if (!foundFilter) continue

      const value = filterValues[key]

      if (Array.isArray(value)) {

        for (const filterValue of value) {
          const foundItem = foundFilter.items?.find(item => item.value === filterValue)

          if (!foundItem) continue

          tags.push({
            field: key as string,
            label: foundItem.label as string,
            value: filterValue as string
          })
        }

      } else {

        const foundItem = foundFilter.items?.find(item => item.value === value)

        if (!foundItem) continue

        tags.push({
          field: key as string,
          label: foundItem.label as string,
          value: value as string
        })
      }

    }

    return tags
  }, [filterValues, filterValues])

  return <div className="footer-jobs-modal-tags">
    {selectedFilterValues.map((tag) => (
      <AntdTag
        className="footer-jobs-modal-tag"
        key={tag.value}
        closable
        onClose={() => onRemoveFilter(tag.field, tag.value)}
      >
        {tag.label}
      </AntdTag>
    ))}
  </div>
}

export default TotalFiltersFooter