import classNames from 'classnames';
import {
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
// import useComponent from '@/components/ui/Utilities/hooks/use-component';
import useComponent from '@/components/UI/Utilities/hooks/use-component';
import { IDimension } from '../@types/Dimension.interface';
import {
  IRenderSelectItemHandler,
  ISelectItem,
} from '../@types/SelectItem';
import { BaseSelectOnChangeHandler } from '../@types/Select';
import BaseSelectItem from './BaseSelectItem/BaseSelectItem';
import usePageMetricsAndScroll from '@/components/UI/Utilities/hooks/use-page-metrics';
import useDebounce from '@/components/UI/Utilities/hooks/use-debounce';

interface IProps {
  isOpen: boolean;
  parentRect: DOMRect;
  items: ISelectItem[];
  filteredItems?: ISelectItem[];
  rowKey?: string | number | symbol | undefined;
  value: ISelectItem['value'][];
  onRenderItems?: IRenderSelectItemHandler;
  onChange?: BaseSelectOnChangeHandler;
  changeVisibility: (visibility: boolean) => void,
  className?: string
  noData?: ReactNode
  parentId: string
  topPlacement?: boolean
}

const BaseSelectItems: FC<IProps> = ({
  isOpen,
  parentRect,
  items,
  filteredItems,
  rowKey,
  value,
  className,
  onChange,
  onRenderItems,
  noData,
  parentId,
  changeVisibility,
  topPlacement
}): JSX.Element => {
  const itemsElementRef = useRef<HTMLDivElement | null>(
    null,
  );
  const { isMounted } = useComponent();
  const { execute } = useDebounce()
  const [dimension, setPosition] = useState<IDimension>({
    top: 0,
    left: 0,
    width: 0,
  });
  const [isPositionCalculated, setIsPositionCalculated] =
    useState<boolean>(false);
  const [showItems, setShowItems] =
    useState<boolean>(false);
  const pageMetrics = usePageMetricsAndScroll()

  useEffect(() => {
    if (isOpen) {
      setItemsPosition()
    }
  }, [value])

  useEffect(() => {
    if (!isOpen) setIsPositionCalculated(false);
  }, [isOpen]);

  const setItemsPosition = (showItems?: boolean): void => {
    const parentElement = document.getElementById(parentId)

    if (!parentElement) return

    const triggerRect = parentElement.getBoundingClientRect();
    const dropdownRect =
      itemsElementRef.current!.getBoundingClientRect();

    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerHeight;

    let newTop = triggerRect.height;
    let newLeft = 0;

    // Check if dropdown causes scroll and adjust
    if (
      (triggerRect.top + triggerRect.height + dropdownRect.height >
        viewportHeight * 0.9) || topPlacement
    ) {
      newTop = -1 * dropdownRect.height;
    }

    setIsPositionCalculated(true);
    setPosition({
      top: newTop,
      left: newLeft,
      width: triggerRect.width,
    });

    if (showItems !== undefined) setShowItems(showItems)
  };

  useEffect(() => {
    setIsPositionCalculated(false);
  }, [items, filteredItems])

  useEffect(() => {
    if (isMounted && isOpen && !isPositionCalculated) {
      setItemsPosition();
    }
  }, [isOpen, isPositionCalculated]);

  useEffect(() => {
    if (isPositionCalculated) {
      setItemsPosition(true)
    }
  }, [isPositionCalculated])

  const positionStyles = useMemo<CSSProperties>(() => {
    return {
      top: isPositionCalculated
        ? `${dimension.top}px`
        : '-9999px',
      left: isPositionCalculated
        ? `${dimension.left}px`
        : '-9999px',
      visibility: showItems
        ? 'visible'
        : 'hidden',
      width: dimension.width,
    };
  }, [dimension, isPositionCalculated]);

  const onMousedDown: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  const onClickItem = (newItemValue: ISelectItem["value"]): void => {
    if (!onChange) return;
    const isValueSelected = value.includes(newItemValue);

    let newValue: ISelectItem['value'][] = [];
    if (isValueSelected) {
      newValue = value.filter(
        (val) => val !== newItemValue,
      );
    } else {
      newValue = value.concat(newItemValue);
    }

    onChange(newValue);
  };

  const itemsElement = useMemo(() => {
    let foundedItems = filteredItems ? filteredItems : items

    if (!foundedItems?.length) return noData

    return foundedItems.map((item) => {
      const isSelected: boolean = value.includes(
        item.value,
      );

      return (
        <BaseSelectItem
          className={className}
          onClick={onClickItem}
          key={rowKey ? item.value[rowKey] : item.value}
          value={value}
          item={item}
          onRenderItems={onRenderItems}
          isSelected={isSelected}
        >
          {item.children}
        </BaseSelectItem>
      );
    });
  }, [items, filteredItems, value]);

  return (
    <div
      ref={itemsElementRef}
      style={positionStyles}
      onMouseDown={onMousedDown}
      className={classNames(
        'base-select-items',
        { [`${className}-items`]: className },
        { 'base-select-items--open': isPositionCalculated },
        {
          'base-select-items--close': !isPositionCalculated,
        },
      )}
    >
      {itemsElement}
    </div>
  );
};

export default BaseSelectItems;
