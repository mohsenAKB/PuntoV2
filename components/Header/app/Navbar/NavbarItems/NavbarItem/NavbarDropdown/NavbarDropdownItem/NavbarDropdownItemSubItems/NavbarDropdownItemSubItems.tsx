import { FC, JSX, useMemo } from "react";
import { NavbarDropdownItemProps } from "../NavbarDropdownItem";
import NavbarDropdownItemSubItem from "./NavbarDropdownItemSubItem/NavbarDropdownItemSubItem";

interface NavbarDropdownItemSubItemsProps {
  items: Omit<NavbarDropdownItemProps, "children">[]
  className?: string
}

const NavbarDropdownItemSubItems: FC<NavbarDropdownItemSubItemsProps> = ({
  items,
  className
}): JSX.Element => {

  const itemsElements = useMemo(() => {
    return items.map(item => <NavbarDropdownItemSubItem item={item} key={item.title} className={className} />)
  }, [items])

  return <>{itemsElements}</>
}

export default NavbarDropdownItemSubItems