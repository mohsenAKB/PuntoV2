import React, { FC, useMemo } from "react";
import type { GetProps } from "antd";
import { Flex, Input, Typography } from "antd";
import classNames from "classnames";
import { OTPProps } from "antd/es/input/OTP";

export interface IBasePassCodeInputProps extends OTPProps {}

const BasePassCodeInput: FC<OTPProps> = (props): JSX.Element => {
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
    <Flex
      className={classNames(
        "new-base-passcode-input",
        className,
        errorClassName
      )}
      gap="middle"
      align="center"
      vertical
    >
      <Input.OTP length={5} {...props} />
    </Flex>
  );
};

export default BasePassCodeInput;
