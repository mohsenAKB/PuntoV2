import { FC, useMemo } from "react";

export interface ListPaginationProps {
  count?: number
  total?: number
  entityLabel?: string
}

const ListPagination: FC<ListPaginationProps> = ({
  count,
  entityLabel,
  total
}): JSX.Element => {

  const countDetailText = useMemo(() => {
    const formatter = new Intl.NumberFormat('fa-IR');

    return ` ${formatter.format(count || 0)}  ${entityLabel} از ${formatter.format(total || 0)} ${entityLabel}`
  }, [count, total])

  return <span className="list-filter-pagination">{countDetailText}</span>
}

export default ListPagination