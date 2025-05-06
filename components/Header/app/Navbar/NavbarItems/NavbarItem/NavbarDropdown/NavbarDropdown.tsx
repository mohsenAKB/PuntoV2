import { FC, JSX, useEffect, useMemo, useState } from "react";
import NavbarSubgroupItem, { NavbarDropdownItemProps } from "./NavbarDropdownItem/NavbarDropdownItem";

export interface NavbarDropdown {
  items: NavbarDropdownItemProps[]
}

const NavbarDropdown: FC<NavbarDropdown> = ({
  items,
}): JSX.Element => {

  const [visibleItemsCount, setVisibleItemsCount] = useState(0)


  const itemsElements = useMemo<JSX.Element[]>(() => {
    return items.map((item, index) => <NavbarSubgroupItem
      key={item.title}
      {...item} />)
  }, [items])

  const rowCount = useMemo<number>(() => {
    return Math.min(visibleItemsCount, 9);
  }, [visibleItemsCount])


  return <ul className="navbar-dropdown" style={{
    gridTemplateRows: `repeat(${rowCount}, 1fr)`
  }}>
    {itemsElements}
  </ul>
}

export default NavbarDropdown