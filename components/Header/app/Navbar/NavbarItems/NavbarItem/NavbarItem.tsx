import { FC, JSX, MouseEventHandler, ReactNode, useMemo } from "react";
import ArrowIcon from "@/components/UI/Select/DashboardMultipleSelect/DashboardMultipleSelectInput/Icons/ArrowIcon";
import NavbarDropdown from "./NavbarDropdown/NavbarDropdown";
import Link from "next/link";
import { NavbarDropdownItemProps } from "./NavbarDropdown/NavbarDropdownItem/NavbarDropdownItem";
import useLink from "@/hook/use-link";
import { useScreen } from "@/hook/use-screen";

export interface NavbarItemProps {
  title: string;
  link?: string;
  items?: NavbarDropdownItemProps[];
}

const NavbarItem: FC<NavbarItemProps> = ({
  title,
  link,
  items,
}): JSX.Element => {
  const { isTabletMode, isDesktopMode } = useScreen();
  const { redirect } = useLink();

  const arrowElement = useMemo<ReactNode>(() => {
    if (items?.length)
      return (
        <span className="navbar-item__link--arrow">
          <ArrowIcon />
        </span>
      );

    return null;
  }, [items]);

  const dropdownElement = useMemo<ReactNode>(() => {
    if (items?.length) return <NavbarDropdown items={items} />;

    return null;
  }, [items]);

  const onClick: MouseEventHandler<HTMLAnchorElement> = (e): void => {
    if (isTabletMode || isDesktopMode) {
      link && redirect(link);
      return;
    }

    if (items?.length) {
      e.preventDefault();

      return;
    }
  };

  return (
    <li role="listitem" className="navbar-item">
      <Link className="navbar-item__link" href={link || ""}>
        <span className="navbar-item__link--title">{title}</span>

        {arrowElement}
      </Link>

      {dropdownElement}
    </li>
  );
};

export default NavbarItem;
