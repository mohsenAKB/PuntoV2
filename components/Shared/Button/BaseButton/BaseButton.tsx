import { Button, ButtonProps } from "antd";
import React, { FC } from "react";

export interface IBaseButtonProps extends ButtonProps {}

const BaseButton: FC<IBaseButtonProps> = (props): JSX.Element => {
  return <Button {...props} />;
};

export default BaseButton;
