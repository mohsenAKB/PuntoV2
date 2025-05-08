import React, { FC } from "react";
import BaseButton, { IBaseButtonProps } from "../BaseButton/BaseButton";
import classNames from "classnames";

export interface IAuthenticationButtonProps extends IBaseButtonProps {}

const AuthenticationButton: FC<IAuthenticationButtonProps> = (
  props
): JSX.Element => {
  const { className, children } = props;

  return (
    <BaseButton {...props} className={classNames("new-auth-button", className)}>
      {children}
    </BaseButton>
  );
};

export default AuthenticationButton;
