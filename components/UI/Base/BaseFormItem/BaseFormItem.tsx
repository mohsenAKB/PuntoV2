import { InputStatus } from '@/@types/ui/input-status';
import classNames from 'classnames';
import {
  FC,
  LabelHTMLAttributes,
  ReactNode,
  useMemo,
} from 'react';

interface IProps {
  children?: ReactNode;
  label?: ReactNode;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  htmlFor?: string;
  validationMessage?: string;
  className?: string;
  topSpace?: boolean;
  disabled?: boolean;
  status?: InputStatus;
}

const BaseFormItem: FC<IProps> = ({
  children,
  label,
  labelProps,
  htmlFor,
  validationMessage,
  topSpace = true,
  className,
  disabled,
  status,
}): JSX.Element => {
  const labelElement = useMemo<ReactNode | null>(() => {
    if (label) {
      return (
        <label htmlFor={htmlFor} {...labelProps}>
          {label}
        </label>
      );
    }

    return null;
  }, [label, labelProps, htmlFor]);

  const validationMessageElement =
    useMemo<ReactNode | null>(() => {
      if (validationMessage) {
        return (
          <span
            className={`base-form-item__message ${className}__message`}
          >
            {validationMessage}
          </span>
        );
      }

      return null;
    }, [validationMessage, className]);

  const topSpaceClassName = useMemo<string>(() => {
    return topSpace
      ? `base-form-item--spaced ${className}--spaced`
      : '';
  }, [topSpace, className]);

  const mainClassName = useMemo(() => {
    return classNames(
      'base-form-item',
      topSpaceClassName,
      className,
      {
        [`${className}--disabled`]: disabled,
      },
      `${className}--${status}`,
    );
  }, [topSpaceClassName, className, disabled, status]);

  return (
    <div className={mainClassName}>
      {labelElement}

      {children}

      {validationMessageElement}
    </div>
  );
};

export default BaseFormItem;
export interface IBaseFormItemProps extends IProps { }
