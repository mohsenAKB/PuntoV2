import { Checkbox, CheckboxChangeEvent } from "antd";
import React, { FC } from "react";

export type GeneralFilter = {
  name: string;
  id: number;
  cover_url?: string;
};

export interface FiltersSelectProps {
  title: string;
  items: GeneralFilter[];
  selectedFilters: GeneralFilter[]; 
  onSelectedFiltersChange?: (selected: GeneralFilter[]) => void;
}

const FiltersSelect: FC<FiltersSelectProps> = ({
  items,
  title,
  selectedFilters,
  onSelectedFiltersChange,
}): JSX.Element => {
  const handleCheckboxChange = (
    item: GeneralFilter,
    e: CheckboxChangeEvent
  ) => {
    const { checked } = e.target;
    let newSelectedFilters: GeneralFilter[];
    if (checked) {
      newSelectedFilters = [...selectedFilters, item];
    } else {
      newSelectedFilters = selectedFilters.filter((i) => i.id !== item.id);
    }
    if (onSelectedFiltersChange) {
      onSelectedFiltersChange(newSelectedFilters);
    }
  };

  const itemsRender = items.map((item) => (
    <li key={item.id} className="filters-select__list--item">
      <Checkbox
        onChange={(e) => handleCheckboxChange(item, e)}
        checked={selectedFilters.some((i) => i.id === item.id)}
      >
        {item.name}
      </Checkbox>
    </li>
  ));

  return (
    <section className="filters-select">
      <h2 className="filters-select__heading">فیلتر بر اساس {title}</h2>
      <ul className="filters-select__list">{itemsRender}</ul>
    </section>
  );
};

export default FiltersSelect;
