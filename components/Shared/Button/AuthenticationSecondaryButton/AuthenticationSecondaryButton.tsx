import React, { FC } from "react";
import BaseButton, { IBaseButtonProps } from "../BaseButton/BaseButton";
import classNames from "classnames";

export interface IAuthenticationSecondaryButtonProps extends IBaseButtonProps {}

const AuthenticationSecondaryButton: FC<IAuthenticationSecondaryButtonProps> = (
  props
): JSX.Element => {
  const { className, children } = props;

  return (
    <BaseButton
      {...props}
      className={classNames("new-auth-button--secondary", className)}
    >
      {children}
    </BaseButton>
  );
};

export default AuthenticationSecondaryButton;
