import React, { FC } from "react";
import BaseButton from "../../Base/Button/Button";
import { ButtonProps } from "antd";
import classNames from "classnames";

export interface PrimaryButtonProps extends ButtonProps {}

const PrimaryButton: FC<PrimaryButtonProps> = (props): JSX.Element => {
  const { className, children } = props;
  return (
    <BaseButton
      className={classNames("primary-button", className)}
      type="primary"
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export default PrimaryButton;
