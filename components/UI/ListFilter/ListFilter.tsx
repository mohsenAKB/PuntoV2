import { FC, useEffect, useRef, useState } from "react";
import ListInformation, {
  ListInformationProps,
} from "./ListInformation/ListInformation";
import Filters, { FiltersProps } from "./Filters/Filters";
import {
  FilterItemProps,
  FilterItemType,
  FilterItemValue,
} from "./Filters/FilterItem/FilterItem";
import { useComponent } from "@/hook/use-component";
import { useModal } from "@/hook/use-modal";
import TotalFilters from "./TotalFilters/TotalFilters";

export interface ListFilterValues {
  [key: string]: FilterItemValue | undefined;
}

export interface ListOrderValues {
  order: number | string;
}

export interface ListFilterProps extends FiltersProps {
  information?: ListInformationProps;
  onChangeFilters?: (filters: ListFilterValues) => void;
  onChangeOrder?: (newOrder: ListOrderValues) => void;
  defaultValues?: ListFilterValues
  hasTotalFilters?: boolean;
}

const ListFilter: FC<ListFilterProps> = ({
  information,
  filters,
  defaultValues,
  onChangeFilters,
  onChangeOrder,
  hasTotalFilters
}): JSX.Element => {

  const totalFiltersModal = useModal()
  const { isMounted } = useComponent();

  const prepareFilterItemValue = (
    filter: FilterItemProps
  ): FilterItemValue | undefined => {
    const { defaultValue, type = FilterItemType.selection } = filter;

    if (defaultValue) return defaultValue;

    switch (type) {
      case FilterItemType.selection:
        return [];
    }

    return undefined;
  };

  const prepareDefaultValues = (): ListFilterValues => {
    let values: ListFilterValues = {};

    for (const item of filters) {
      values[item.field] = prepareFilterItemValue(item);
    }

    return values;
  };

  const [filterValues, setFilterValues] = useState<ListFilterValues>(
    prepareDefaultValues()
  );
  const [orderValue, setOrderValue] = useState<ListOrderValues>({
    order: information?.defaultValue!,
  });

  const onChangeFilterValue = (
    field: string,
    value: FilterItemValue | undefined
  ): void => {
    const newFilterValues: ListFilterValues = { ...filterValues, [field]: value }
    setFilterValues((prevState) => ({ ...prevState, [field]: value }));

    onChangeFilters && onChangeFilters(newFilterValues)

  };

  const onChangeOrderValue = (
    field: string,
    value: FilterItemValue | undefined
  ): void => {
    if (value) {
      const newOrderValues = { ...orderValue, [field]: value }
      setOrderValue((prevState) => ({ ...prevState, [field]: value }));

      if (onChangeOrder) onChangeOrder(newOrderValues);

    }
  };

  useEffect(() => {
    if (defaultValues && isMounted) {
      setFilterValues(prevValues => ({ ...prevValues, ...defaultValues }))
    }
  }, [defaultValues, isMounted])


  // useEffect(() => {
  //   if (isMounted && onChangeFilters && !isDefaultFilterChanged.current) {

  //     onChangeFilters(filterValues)
  //     isDefaultFilterChanged.current = false
  //   }
  // }, [filterValues]);

  // useEffect(() => {
  //   if (onChangeOrder && isMounted) onChangeOrder(orderValue);
  // }, [orderValue]);

  const onSubmitTotalFilter = (values: ListFilterValues): void => {
    setFilterValues(values)
    totalFiltersModal.close()
  }

  return (
    <div className="list-filter">
      {filters && (
        <Filters
          onChange={onChangeFilterValue}
          values={filterValues}
          filters={filters}
          onClick={totalFiltersModal.open}
        />
      )}

      {information && (
        <ListInformation
          values={orderValue}
          onChange={onChangeOrderValue}
          {...information}
        />
      )}

      {hasTotalFilters && <TotalFilters
        isOpen={totalFiltersModal.isOpen}
        onCancel={totalFiltersModal.close}
        onSubmit={onSubmitTotalFilter}
        value={filterValues}
        filters={filters} />}
    </div>
  );
};

export default ListFilter;
