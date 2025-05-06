import { FC, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { IDropDownItem } from '../../@types/DropDownItem';

interface IProps {
  item: IDropDownItem;
  onClick: (item: IDropDownItem) => void;
  className?: string;
  children?: ReactNode
}

const BaseDropDownItem: FC<IProps> = ({
  item,
  onClick,
  className,
  children
}): JSX.Element => {

  // Handle item click event
  const onClickItem = (): void => {
    onClick(item);
  };

  return (
    <div
      className={classNames(
        'base-dropdown-item',
        { [`${className}-item`]: className },
      )}
      onClick={onClickItem}
    >
      {children}
    </div>
  );
};

export default BaseDropDownItem;
