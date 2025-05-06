import { ReactNode } from 'react';

export interface ISelectItem<T = any> {
  value: T;
  children: ReactNode;
}

export type IRenderSelectItemHandler = (
  value: ISelectItem['value'],
  children: ISelectItem['children'],
  isSelected: boolean,
) => ReactNode;
