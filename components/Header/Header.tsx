import React, { FC, JSX, ReactNode } from "react";


export interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }): JSX.Element => {
  return <header className="header">{children}</header>;
};

export default Header;
