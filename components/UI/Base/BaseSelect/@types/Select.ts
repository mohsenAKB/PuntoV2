import { ReactNode } from 'react';
import { ISelectItem } from './SelectItem';

export type BaseSelectOnChangeHandler<T = any> = (
  values: ISelectItem<T>['value'][],
) => void;

export interface IRenderSelectInputHandlerArgs {
  selectedItems: ISelectItem[],
  disabled?: boolean,
  onClear?: () => void,
  isOpen: boolean
  open: () => void
  close: () => void
  rowKey?: keyof ISelectItem['value'];
  onDeselect: (value: ISelectItem['value']) => void,
  // setDimension: (dimensions: DOMRect) => void
}

export type IRenderSelectInputHandler = (args: IRenderSelectInputHandlerArgs) => ReactNode;
