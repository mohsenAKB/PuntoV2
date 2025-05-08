import DesignerProfileFilter from "@/components/UI/Select/DesignerProfileFilter/DesignerProfileFilter";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { ListOrderValues } from "../../ListFilter";

export interface OrderItemProps {
  value: string | number
  children: string | number
}

export interface OrdersProps {
  showOrders?: boolean
  items?: OrderItemProps[]
  label?: string
  defaultValue?: string | number
}

interface IProps extends OrdersProps {
  values: ListOrderValues
  onChange: (field: string, newValue: number | string) => void
}

const Orders: FC<IProps> = ({
  items = [],
  label,
  defaultValue,
  onChange,
  values
}): JSX.Element => {

  return <div className="list-filter-orders">
    <span className="list-filter-orders__filter--label">
      ترتیب نمایش:
    </span>

    <DesignerProfileFilter
      className="list-filter-orders__filter--select"
      onChange={(items) => onChange("order", items[items.length - 1])}
      value={[values.order]}
      items={items}
      placeholder={label}
      showSelectedCount={false}
      showArrow
      showSelectedValue
      borderless />
  </div>
}

export default Orders