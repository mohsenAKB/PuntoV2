import { ReactNode } from 'react';

export interface IDropDownItem<T = any> {
  value: T;
  children: ReactNode;
  onClick?: () => void
}
