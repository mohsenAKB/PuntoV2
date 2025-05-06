import { ReactNode } from 'react';
import { ISelectItem } from './SelectItem';

export type ISingleSelectOnChange = (
  value?: ISelectItem['value'],
) => void;

export interface IRenderSingleSelectInputHandlerArgs {
  selectedItem?: ISelectItem | undefined,
  disabled?: boolean,
  onClear?: () => void,
  isOpen: boolean
  open: () => void
  close: () => void
  rowKey?: keyof ISelectItem['value'];
  onDeselect: (value: ISelectItem['value']) => void,
}

export type IRenderSingleSelectInputHandler = (args: IRenderSingleSelectInputHandlerArgs) => ReactNode;
