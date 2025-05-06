import {
  TextareaHTMLAttributes,
  FC,
  ReactNode,
  PropsWithChildren,
  useState,
  ChangeEvent,
} from "react";
import classNames from "classnames";
import { InputStatus } from "@/@types/ui/input-status";

export interface BaseTextAreaProps {
  children?: ReactNode;
  textAreaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
  className?: TextareaHTMLAttributes<HTMLTextAreaElement>["className"];
  disabled?: TextareaHTMLAttributes<HTMLTextAreaElement>["disabled"];
  value?: TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
  rows?: TextareaHTMLAttributes<HTMLTextAreaElement>["rows"];
  cols?: TextareaHTMLAttributes<HTMLTextAreaElement>["cols"];
  maxLength?: TextareaHTMLAttributes<HTMLTextAreaElement>["maxLength"];
  placeholder?: TextareaHTMLAttributes<HTMLTextAreaElement>["placeholder"];
  onChange?: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"];
  status?: InputStatus
}

const BaseTextArea: FC<PropsWithChildren<BaseTextAreaProps>> = ({
  children,
  textAreaProps,
  className,
  disabled,
  cols,
  rows,
  placeholder,
  onChange,
  value,
  status,
  maxLength
}) => {
  return (
    <textarea
      {...textAreaProps}
      disabled={disabled}
      className={classNames(
        "BaseTextArea",
        className,
        { [`BaseTextArea--${status}`]: status },
        { [`${className}--${status}`]: (status && className) }
      )}
      onChange={onChange}
      cols={cols}
      rows={rows}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
    >
      {children}
    </textarea>
  );
};

export default BaseTextArea;
