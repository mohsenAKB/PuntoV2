import { FC, ReactNode, useMemo } from 'react';
import {
  IRenderSelectItemHandler,
  ISelectItem,
} from '../../@types/SelectItem';
import classNames from 'classnames';

interface IProps {
  value: ISelectItem['value'];
  children: ISelectItem['children'];
  onRenderItems?: IRenderSelectItemHandler;
  onClick: (value: ISelectItem['value']) => void;
  isSelected: boolean;
  className?: string,
  item: ISelectItem<any>
}

const BaseSelectItem: FC<IProps> = ({
  children,
  value,
  onRenderItems,
  onClick,
  isSelected,
  className,
  item
}): JSX.Element => {
  const element = useMemo<ReactNode>(() => {
    if (onRenderItems) {
      return onRenderItems(children, value, isSelected);
    }

    return children;
  }, [item, children, onRenderItems, isSelected]);

  const onClickItem = (): void => {
    onClick(item.value);
  };

  return (
    <div
      className={classNames(
        'base-select-item',
        { 'base-select-item--selected': isSelected },
        { [`${className}-item`]: className },
        { [`${className}-item--selected`]: (className && isSelected) },
      )}
      onClick={onClickItem}
    >
      {element}
    </div>
  );
};

export default BaseSelectItem;
