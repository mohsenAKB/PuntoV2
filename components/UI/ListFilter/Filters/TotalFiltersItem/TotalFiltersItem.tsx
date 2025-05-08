import { FC } from "react";
import FiltersIcon from "./Icon/FilterIcons";

export interface TotalFiltersItemProps {
  onClick: () => void;
}

const TotalFiltersItem: FC<TotalFiltersItemProps> = ({
  onClick,
}): JSX.Element => {
  return (
    <div className="total-filter-item-label" onClick={onClick}>
      <FiltersIcon />

      <span className="total-filter-item-label__text">همه فیلترها</span>
    </div>
  );
};

export default TotalFiltersItem;
