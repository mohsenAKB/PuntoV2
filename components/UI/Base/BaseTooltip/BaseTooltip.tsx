import classNames from 'classnames';
import { FC } from 'react';
import { BaseTooltipProps } from './types/props';

const BaseTooltip: FC<BaseTooltipProps> = ({
  title,
  className,
  children,
  placement = 'top',
}): JSX.Element => {

  return (
    <div
      className={classNames(
        'base-tooltip',
        className,
      )}
    >
      {children}

      <div
        className={classNames(
          'base-tooltip__content',
          `base-tooltip__content--${placement}`,
          `${className}__content`,
          `${className}--${placement}`
        )}
      >
        {title}
      </div>
    </div>
  );
};

export default BaseTooltip;
