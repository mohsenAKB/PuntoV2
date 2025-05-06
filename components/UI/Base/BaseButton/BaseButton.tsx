import {
  ButtonHTMLAttributes,
  FC,
  ReactNode,
  PropsWithChildren,
  useMemo,
} from 'react';
import classnames from 'classnames';

export interface BaseButtonProps {
  children?: ReactNode;
  btnProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
  value?: ButtonHTMLAttributes<HTMLButtonElement>['value'];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

const BaseButton: FC<
  PropsWithChildren<BaseButtonProps>
> = ({
  children,
  btnProps,
  className,
  onClick,
  disabled,
}) => {
    const classNames = useMemo(() => {
      return classnames('BaseButton', className, {
        [`${className}--disabled`]: disabled,
      });
    }, [className, disabled]);

    return (
      <button
        {...btnProps}
        onClick={onClick}
        disabled={disabled}
        className={classNames}
      >
        {children}
      </button>
    );
  };

export default BaseButton;
