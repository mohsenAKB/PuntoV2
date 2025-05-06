import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { InputStatus } from '@/@types/ui/input-status';

export interface BaseInputProps {
  placeholder?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  className?: InputHTMLAttributes<HTMLInputElement>['className'];
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  disabled?: InputHTMLAttributes<HTMLInputElement>['disabled'];
  id?: InputHTMLAttributes<HTMLInputElement>['id'];
  value?: string;
  status?: InputStatus;
}

const BaseInput: FC<BaseInputProps> = ({
  placeholder,
  id,
  inputProps,
  onChange,
  disabled,
  className,
  value,
  status,
}) => {
  return (
    <input
      {...inputProps}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={classNames(
        'baseInput',
        className,
        `baseInput--${status}`,
        `${className}--${status}`,
      )}
    />
  );
};

export default BaseInput;
