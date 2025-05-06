import { ReactNode } from 'react';

export interface IRenderModalElementsArgs {
  open: () => void;
  close: () => void;
  isShow: boolean;
}

export type IRenderModalElementsHandler = (
  args: IRenderModalElementsArgs,
) => ReactNode;
