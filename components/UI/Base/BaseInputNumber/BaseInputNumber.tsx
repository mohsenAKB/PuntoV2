import { FC, InputHTMLAttributes, WheelEventHandler } from 'react';
import classNames from 'classnames';
import { InputStatus } from '@/@types/ui/input-status';

export interface BaseInputNumberProps {
  placeholder?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  className?: InputHTMLAttributes<HTMLInputElement>['className'];
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  disabled?: InputHTMLAttributes<HTMLInputElement>['disabled'];
  id?: InputHTMLAttributes<HTMLInputElement>['id'];
  min?: InputHTMLAttributes<HTMLInputElement>['min'];
  max?: InputHTMLAttributes<HTMLInputElement>['max'];
  maxLength?: InputHTMLAttributes<HTMLInputElement>['maxLength'];
  minLength?: InputHTMLAttributes<HTMLInputElement>['minLength'];
  value?: string;
  name?: InputHTMLAttributes<HTMLInputElement>['name'];
  status?: InputStatus;
}

const BaseInputNumber: FC<BaseInputNumberProps> = ({
  placeholder,
  id,
  inputProps,
  onChange,
  disabled,
  className,
  value,
  name,
  maxLength,
  minLength,
  min,
  max,
  status,
}) => {

  const onWheel: WheelEventHandler<HTMLInputElement> = (e): void => {
    e.preventDefault()
  }

  return (
    <input
      {...inputProps}
      id={id}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      max={max}
      min={min}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      onWheel={onWheel}
      type="number"
      className={classNames(
        'BaseInputNumber',
        className,
        `BaseInputNumber--${status}`,
        `${className}--${status}`,
      )}
    />
  );
};

export default BaseInputNumber;
