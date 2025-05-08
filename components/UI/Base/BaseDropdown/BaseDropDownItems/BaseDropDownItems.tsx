import classNames from 'classnames';
import {
  FC,
  MouseEventHandler,
  ReactNode,
  useMemo,
  useRef,
} from 'react';
import { IDropDownItem } from '../@types/DropDownItem';
import BaseDropDownItem from './BaseDropDownItem/BaseDropDownItem';
import { CSSProperties } from 'styled-components';

interface IProps {
  isOpen: boolean;
  parentRect: DOMRect;
  items: IDropDownItem[];
  rowKey?: keyof IDropDownItem['value'];
  onItemClick: (item: IDropDownItem) => void;
  changeVisibility: (visibility: boolean) => void;
  className?: string;
  noData?: ReactNode;
  parentId: string;
  topPlacement?: boolean;
}

const BaseDropDownItems: FC<IProps> = ({
  isOpen,
  parentRect,
  items,
  rowKey,
  className,
  onItemClick,
  noData,
  changeVisibility,
  topPlacement
}): JSX.Element => {
  const itemsElementRef = useRef<HTMLDivElement | null>(null);


  const positionStyles = useMemo<CSSProperties>(() => {
    return {
      visibility: isOpen ? 'visible' : 'hidden',
    };
  }, [isOpen, parentRect, topPlacement]);

  const onMouseDown: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  const handleItemClick = (item: IDropDownItem): void => {
    if (onItemClick) {
      onItemClick(item);
    }
    changeVisibility(false); // Close dropdown after item selection
  };

  const itemsElement = useMemo(() => {
    if (!items.length) return noData;

    return items?.map((item) => (
      <BaseDropDownItem
        className={className}
        onClick={() => handleItemClick(item)}
        key={rowKey ? item.value[rowKey] : item.value}
        item={item}
      >
        {item.children}
      </BaseDropDownItem>
    ));
  }, [items, noData, className]);

  return (
    <div
      ref={itemsElementRef}
      style={positionStyles}
      onMouseDown={onMouseDown}
      className={classNames(
        'base-dropdown-items',
        { [`${className}-items`]: className },
        { 'base-dropdown-items--open': isOpen },
        { 'base-dropdown-items--close': !isOpen },
      )}
    >
      {itemsElement}
    </div>
  );
};

export default BaseDropDownItems;
