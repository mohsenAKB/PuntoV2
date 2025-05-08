import { Input, InputProps } from "antd";
import classNames from "classnames";
import React, { FC, useMemo } from "react";

export interface IBaseInputProps extends InputProps {}

const BaseInput: FC<InputProps> = (props): JSX.Element => {
  const { className, status } = props;

  const errorClassName = useMemo<string>(() => {
    if (!className) return "";

    if (status === "error") {
      return className
        .split(" ")
        .map((cls) => `${cls}--error`)
        .join(" ");
    }

    return "";
  }, [className, status]);

  return <Input {...props} className={classNames(className, errorClassName)} />;
};

export default BaseInput;
