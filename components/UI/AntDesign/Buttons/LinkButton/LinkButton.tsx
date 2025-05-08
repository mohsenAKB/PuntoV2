import React, { FC } from "react";
import BaseButton from "../../Base/Button/Button";
import { ButtonProps } from "antd";
import classNames from "classnames";

export interface LinkButtonProps extends ButtonProps {}

const LinkButton: FC<LinkButtonProps> = (props): JSX.Element => {
  const { className, children } = props;
  return (
    <BaseButton
      {...props}
      type="link"
      className={classNames("link-button", className)}
    >
      {children}
    </BaseButton>
  );
};

export default LinkButton;
