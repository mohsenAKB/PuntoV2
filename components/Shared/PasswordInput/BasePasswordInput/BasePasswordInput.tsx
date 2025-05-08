import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import { PasswordProps } from "antd/es/input";
import React, { FC, useMemo } from "react";
import classNames from "classnames";

export interface IBasePasswordInputProps extends PasswordProps {}

const BasePasswordInput: FC<PasswordProps> = (props): JSX.Element => {
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

  return (
    <Input.Password
      {...props}
      className={classNames(className, errorClassName)}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  );
};

export default BasePasswordInput;
