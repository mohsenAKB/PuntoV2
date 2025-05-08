import React, { FC, useMemo } from "react";
import { Tag, TagProps } from "antd";

type Tag = {
  id: number | string;
  name: string;
  cover_url?: string;
};

export interface TagCProps extends TagProps {
  items: Tag[];
  onClose: (tag: Tag) => void;
}

const AntTag: FC<TagCProps> = ({ items, onClose }): JSX.Element => {

  const renderTag = useMemo(() => {
    return items?.map((item, i) => {
      return (
        <li
          key={item.id}
          className="ant-tag"
          onClose={(tag: Tag) => onClose(tag)}
        >
          {item.name}
        </li>
      );
    });
  }, [items]);
  return <ul className="ant-tags">{renderTag}</ul>;
};

export default AntTag;
