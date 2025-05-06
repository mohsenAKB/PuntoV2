import { FC, JSX, MouseEventHandler, ReactNode, useMemo } from "react";
import NavbarDropdownItem, { NavbarDropdownItemProps } from "../../NavbarDropdownItem";
import Link from "next/link";
import { it } from "node:test";
import classNames from "classnames";

interface NavbarDropdownItemSubItemProps {
  item: Omit<NavbarDropdownItemProps, "children">
  className?: string
}


const NavbarDropdownItemSubItem: FC<NavbarDropdownItemSubItemProps> = ({
  item: {
    title,
    link,
    items
  },
  className
}): JSX.Element => {

  const onClick: MouseEventHandler<HTMLAnchorElement> = (e): void => {
    e.stopPropagation()
  }

  const hasChildren = useMemo<boolean>(() => {
    return Boolean(items?.length)
  }, [items])

  const linkElement = useMemo<ReactNode>(() => {
    if (hasChildren) {
      return <NavbarDropdownItem
        className="navbar-dropdown-item-subitem__group"
        items={items}
        link=""
        title={title} />
    }

    return <Link
      className={classNames("navbar-dropdown-item-subitem", className)}
      role="listitem"
      onClick={onClick}
      href={hasChildren ? "" : link} >
      {title}

    </Link>
  }, [link, title, hasChildren])

  return <>{linkElement}</>
}

export default NavbarDropdownItemSubItem