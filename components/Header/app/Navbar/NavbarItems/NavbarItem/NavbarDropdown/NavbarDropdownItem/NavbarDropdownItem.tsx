import Link from "next/link";
import { FC, JSX, ReactNode, useEffect, useMemo, useState } from "react";
import NavbarDropdownItemSubItems from "./NavbarDropdownItemSubItems/NavbarDropdownItemSubItems";
import ArrowItem from "./Icons/ArrowItem";
import NavbarBulletIcon from "./Icons/NavbarBulletIcon";
import classNames from "classnames";

export interface NavbarDropdownItemProps {
  title: string
  link: string,
  items?: Omit<NavbarDropdownItemProps, "children">[]
  defaultShowSubItems?: boolean
  hideTitle?: boolean
}

export interface IProps extends NavbarDropdownItemProps {
  className?: string
}

const NavbarDropdownItem: FC<IProps> = ({
  link = "",
  title,
  items,
  defaultShowSubItems = false,
  hideTitle,
  className
}): JSX.Element => {

  const [showSubItems, setShowSubItems] = useState<boolean>(defaultShowSubItems)

  const subItems = useMemo<ReactNode>(() => {
    if (items && showSubItems) {
      return <NavbarDropdownItemSubItems items={items}
        className={classNames({ [`${className}--item`]: className })} />
    }

    return null
  }, [items, showSubItems])

  const onClick = (): void => {
    setShowSubItems(prevShow => !prevShow)
  }

  const titleElement = useMemo<ReactNode>(() => {
    if (hideTitle) return <></>

    return <li
      onClick={onClick}
      className={classNames(
        "navbar-dropdown-item",
        { "navbar-dropdown-item--open": showSubItems },
        className
      )}>
      <NavbarBulletIcon />

      <span className="navbar-dropdown-item__title">
        {title}
      </span>

      <span className="navbar-dropdown-item__arrow-icon">
        <ArrowItem />
      </span>
    </li>
  }, [hideTitle])


  return <>
    {titleElement}

    {subItems}
  </>
}

export default NavbarDropdownItem