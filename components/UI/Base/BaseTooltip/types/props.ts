import { ReactNode } from 'react';
import { TooltipContentProps } from './content-props';

export interface BaseTooltipProps
  extends TooltipContentProps {
  title?: ReactNode;
  className?: string;
  children?: ReactNode;
}
