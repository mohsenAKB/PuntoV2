import { FC } from "react";
import Orders, { OrdersProps } from "./Orders/Orders";
import ListPagination, { ListPaginationProps } from "./ListPagination/ListPagination";
import { Control } from "react-hook-form";
import { ListOrderValues } from "../ListFilter";

export interface ListInformationProps extends OrdersProps, ListPaginationProps { }

interface IProps extends ListInformationProps {
  values: ListOrderValues
  onChange: (field: string, newValue: number | string) => void
}

const ListInformation: FC<IProps> = ({
  count,
  entityLabel,
  items,
  label,
  total,
  defaultValue,
  onChange,
  values,
  showOrders = true
}): JSX.Element => {


  return <div className="filter-list-information">
    {showOrders && <Orders
      label={label}
      items={items}
      defaultValue={defaultValue}
      onChange={onChange}
      values={values} />}

    <ListPagination
      count={count}
      entityLabel={entityLabel}
      total={total} />
  </div>
}

export default ListInformation