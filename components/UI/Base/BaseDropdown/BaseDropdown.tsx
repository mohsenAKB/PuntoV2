import {
  FC,
  JSX,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BasePortal from '../BasePortal/BasePortal';
import classNames from 'classnames';
import { InputStatus } from '@/@types/ui/input-status';
import BaseDropDownItems from './BaseDropDownItems/BaseDropDownItems';
import { IDropDownItem } from './@types/DropDownItem';
import { useComponent } from '@/hook/use-component';

interface IProps {
  className?: string;
  open?: boolean;
  items: IDropDownItem[];
  rowKey?: keyof IDropDownItem['value'];
  disabled?: boolean;
  noData?: ReactNode;
  status?: InputStatus;
  closeAfterChangeValue?: boolean;
  topPlacement?: boolean;
  children?: ReactNode
}

const BaseDropDown: FC<IProps> = ({
  className,
  children,
  open = false,
  rowKey,
  items,
  disabled,
  noData,
  status,
  topPlacement
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [dimension, setDimension] = useState<DOMRect | undefined>();

  const makeId = () => {
    return String("id" +
      Math.random().toString(10)
    ).replace(/\./g, '');
  }
  const [id, setId] = useState<string>(makeId());

  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useRef<boolean>(false);
  const isOpenRef = useRef<boolean>(false);
  const { isMounted } = useComponent();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  const onClick: MouseEventHandler<HTMLDivElement> = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleItemClick = (item: IDropDownItem): void => {
    item.onClick && item.onClick()
  };

  const setElementBoundingRect = (): void => {
    setDimension(ref.current!.getBoundingClientRect());
  };

  const onBodyClickHandler = (ev: MouseEvent): void => {
    if (!isHovered.current && isOpenRef.current) {
      setIsOpen(false);
    }
  };

  const setBodyClickEventListener = (): void => {
    document.addEventListener('mousedown', onBodyClickHandler);
  };

  const removeBodyClickEventListener = (): void => {
    document.removeEventListener('mousedown', onBodyClickHandler);
  };

  // set parent dimension
  useEffect(() => {
    if (isMounted) {
      setElementBoundingRect();
      setBodyClickEventListener();
    }

    return () => {
      removeBodyClickEventListener();
    };
  }, [isMounted]);

  const onMouseEnter = () => {
    isHovered.current = true;
  };

  const onMouseLeave = () => {
    isHovered.current = false;
  };

  const showItems = useMemo<boolean>(() => {
    return !disabled && isMounted;
  }, [disabled, isMounted]);

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classNames(
        'base-dropdown',
        { 'base-dropdown--disabled': disabled },
        { [`base-dropdown--${status}`]: status },
        { [`${className}--${status}`]: (status && className) },
        className,
      )}
      onMouseDown={onClick}
      id={id}
    >
      {children}

      <BasePortal
        parentSelector={`#${id}`}>
        {showItems && (
          <BaseDropDownItems
            parentId={id}
            className={className}
            isOpen={isOpen}
            items={items}
            parentRect={dimension!}
            rowKey={rowKey}
            noData={noData}
            onItemClick={handleItemClick}
            changeVisibility={setIsOpen}
            topPlacement={topPlacement}
          />
        )}
      </BasePortal>
    </div>
  );
};

export interface IBaseDropDownProps extends IProps { }
export default BaseDropDown;
