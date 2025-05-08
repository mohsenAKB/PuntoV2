import Image from "next/image";
import React, { FC, ReactNode, useState } from "react";

export interface SidebarProps {
  menuItems: ReactNode;
  onClick: () => {};
}
const Sidebar: FC<SidebarProps> = (): JSX.Element => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__close-icon"></div>
      <div className="app-sidebar__profile">
        <Image
          height={20}
          width={20}
          alt=""
          src=""
          className="app-sidebar__profile--avatar"
        />
        <h2 className="app-sidebar__profile--heading">سلام اسم کاربر</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
