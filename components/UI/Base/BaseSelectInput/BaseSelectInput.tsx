import classNames from "classnames";
import React, { FC, ReactNode, SelectHTMLAttributes } from "react";

export interface BaseSelectInputProps {
  selectInputProps?: SelectHTMLAttributes<HTMLSelectElement>;
  options: { label: string; value: string | number }[]; 
  value: SelectHTMLAttributes<HTMLSelectElement>["value"];
  onChange: (value: string | number) => void; 
  className?: string;
  children?: ReactNode;
}

const BaseSelectInput: FC<BaseSelectInputProps> = ({
  children,
  className,
  onChange,
  options,
  value,selectInputProps
}): JSX.Element => {
  return (
    <select
      className={classNames("BaseSelectInput",className)}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...selectInputProps}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default BaseSelectInput;
