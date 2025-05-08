import { FC, useMemo } from "react";
import FilterItem, {
  FilterItemProps,
  FilterItemValue,
} from "./FilterItem/FilterItem";
import TotalFiltersItem from "./TotalFiltersItem/TotalFiltersItem";
import { ListFilterValues } from "../ListFilter";

export interface FiltersProps {
  filters: FilterItemProps[];
  onClick: () => void;
}

export interface IProps extends FiltersProps {
  values: ListFilterValues;
  onChange: (field: string, value: FilterItemValue | undefined) => void;
}

const Filters: FC<IProps> = ({
  filters,
  values,
  onChange,
  onClick,
}): JSX.Element => {
  const filterItemsElements = useMemo(() => {
    return filters.map((filter) => (
      <FilterItem
        values={values}
        onChange={onChange}
        key={filter.field}
        {...filter}
      />
    ));
  }, [filters, values]);

  return (
    <div className="list-filter-items">
      <TotalFiltersItem onClick={onClick} />

      {filterItemsElements}
    </div>
  );
};

export default Filters;
