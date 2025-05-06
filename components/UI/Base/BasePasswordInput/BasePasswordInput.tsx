import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { InputStatus } from '@/@types/ui/input-status';

export interface BasePasswordInputProps {
  placeholder?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  className?: InputHTMLAttributes<HTMLInputElement>['className'];
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  disabled?: InputHTMLAttributes<HTMLInputElement>['disabled'];
  id?: InputHTMLAttributes<HTMLInputElement>['id'];
  value?: string;
  pattern?: InputHTMLAttributes<HTMLInputElement>['pattern'];
  readOnly?: InputHTMLAttributes<HTMLInputElement>['readOnly'];
  status?: InputStatus;
}

const BasePasswordInput: FC<BasePasswordInputProps> = ({
  placeholder,
  id,
  inputProps,
  onChange,
  disabled,
  className,
  value,
  pattern,
  readOnly,
  status,
}) => {
  return (
    <input
      {...inputProps}
      type="password"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={classNames(
        'BasePasswordInput',
        className,
        `BasePasswordInput--${status}`,
        `${className}--${status}`,
      )}
      pattern={pattern}
      readOnly={readOnly}
    />
  );
};

export default BasePasswordInput;
