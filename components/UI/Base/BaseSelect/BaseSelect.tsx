'use client';

import {
  FC,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BasePortal from '../BasePortal/BasePortal';
import BaseSelectItems from './BaseSelectItems/BaseSelectItems';
import classNames from 'classnames';
import {
  IRenderSelectItemHandler,
  ISelectItem,
} from './@types/SelectItem';
import {
  BaseSelectOnChangeHandler,
  IRenderSelectInputHandler,
} from './@types/Select';
import useComponent from '../../Utilities/hooks/use-component';
import { InputStatus } from '@/@types/ui/input-status';

interface IProps {
  className?: string;
  placeholder?: string;
  open?: boolean;
  items: ISelectItem[];
  filteredItems?: ISelectItem[];
  value: ISelectItem['value'][];
  rowKey?: keyof ISelectItem['value'];
  disabled?: boolean;
  noData?: ReactNode
  onRenderInput?: IRenderSelectInputHandler;
  onRenderItems?: IRenderSelectItemHandler;
  onChange?: BaseSelectOnChangeHandler;
  status?: InputStatus;
  closeAfterChangeValue?: boolean
  topPlacement?: boolean
}

const BaseSelect: FC<IProps> = ({
  className,
  placeholder,
  open = false,
  rowKey,
  items,
  value,
  disabled,
  noData,
  onChange,
  onRenderItems,
  onRenderInput,
  filteredItems,
  status,
  closeAfterChangeValue,
  topPlacement
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [dimension, setDimension] = useState<
    DOMRect | undefined
  >();

  const makeId = () => {
    return String("id" +
      Math.random().toString(10)
    ).replace(/\./g, '')
  }
  const [id, setId] = useState<string>(makeId())

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

  const onClick: MouseEventHandler<
    HTMLDivElement
  > = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const onChangeHandler: BaseSelectOnChangeHandler = (values): void => {
    if (onChange) {
      onChange(values)
    }

    if (closeAfterChangeValue && values.length) {
      setIsOpen(false)
    }
  }

  const selectedItems = useMemo<ISelectItem<any>[]>(() => {
    return items?.filter((item) => {
      return value?.includes(item.value);
    });
  }, [items, value]);

  const setElementBoundingRect = (): void => {
    setDimension(ref.current!.getBoundingClientRect());
  };

  const onBodyClickHandler = (ev: MouseEvent): void => {
    if (!isHovered.current && isOpenRef.current) {
      setIsOpen(false);
    }
  };

  const setBodyClickEventListener = (): void => {
    document.addEventListener(
      'mousedown',
      onBodyClickHandler,
    );
  };

  const removeBodyClickEventListener = (): void => {
    document.removeEventListener(
      'mousedown',
      onBodyClickHandler,
    );
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

  const onClear = (): void => {
    onChange && onChange([]);
  };

  const renderInputElement = (): ReactNode => {
    if (onRenderInput)
      return onRenderInput({
        selectedItems,
        disabled,
        onClear,
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(true),
        rowKey,
        onDeselect,
        // setDimension,
      }
      );

    return placeholder;
  };

  const showItems = useMemo<boolean>(() => {
    return !disabled && isMounted;
  }, [disabled, isMounted]);

  const onDeselect = (deselectValue: ISelectItem["value"]): void => {
    if (!onChange) return

    const newValue = value.filter(val => val !== deselectValue)

    onChangeHandler(newValue)
  }

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classNames(
        'base-select',
        { 'base-select--disabled': disabled },
        { [`base-select--${status}`]: status },
        { [`${className}--${status}`]: (status && className) },
        className,
      )}
      onMouseDown={onClick}
      id={id}
    >
      <div
        className={classNames('base-select__input', {
          [`${className}__input`]: className,
        })}
      // onMouseDown={onInputMouseDown}
      >
        {renderInputElement()}
      </div>

      <BasePortal
        parentSelector={`#${id}`}>
        {showItems && (
          <BaseSelectItems
            parentId={id}
            className={className}
            isOpen={isOpen}
            items={items}
            filteredItems={filteredItems}
            parentRect={dimension!}
            rowKey={rowKey}
            value={value}
            noData={noData}
            onRenderItems={onRenderItems}
            onChange={onChangeHandler}
            changeVisibility={setIsOpen}
            topPlacement={topPlacement}
          />
        )}
      </BasePortal>
    </div>
  );
};

export interface IBaseSelectProps extends IProps { }
export default BaseSelect;
