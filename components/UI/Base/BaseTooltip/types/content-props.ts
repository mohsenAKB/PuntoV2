export type TooltipContentPlacement =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left';

export interface TooltipContentProps {
  placement?: TooltipContentPlacement;
}
