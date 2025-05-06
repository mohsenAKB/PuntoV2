import Image from "next/image";
import React, { FC, useMemo, useState } from "react";
import Collapse from "./Collapse/Collapse";
import Expanded from "./Expanded/Expanded";

export interface SearchProps {
  isCollapse?: boolean;
  ClassName?: string;
}

const Search: FC<SearchProps> = ({
  isCollapse = false,
  ClassName,
}): JSX.Element => {
  const [isCollapseState, setIsCollapseState] = useState<boolean>(isCollapse);
  const stateSearch = useMemo(() => {
    return isCollapseState ? (
      <Collapse />
    ) : (
      <Expanded ClassName={ClassName} />
    );
  }, [isCollapseState]);

  return <>{stateSearch}</>;
};

export default Search;
