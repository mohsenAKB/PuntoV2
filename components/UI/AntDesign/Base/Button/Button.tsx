import React, { FC } from "react";
import { Button, ButtonProps } from "antd";
import classNames from "classnames";

interface BaseButtonProps extends ButtonProps {}

const BaseButton: FC<BaseButtonProps> = (props): JSX.Element => {
  const { className, children } = props;
  return (
    <Button className={classNames(`base-ant-btn`, className)} {...props}>
      {children}
    </Button>
  );
};

export default BaseButton;
