import React, { FC } from "react";
import BaseButton from "../../Base/Button/Button";
import { ButtonProps } from "antd";
import classNames from "classnames";

export interface DefaultButtonProps extends ButtonProps {}

const DefaultButton: FC<DefaultButtonProps> = (props): JSX.Element => {
  const { className, children } = props;
  return (
    <BaseButton {...props} className={classNames("default-button", className)}>
      {children}
    </BaseButton>
  );
};

export default DefaultButton;
