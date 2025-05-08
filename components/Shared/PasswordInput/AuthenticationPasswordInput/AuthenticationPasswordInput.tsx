import React, { FC } from "react";
import BasePasswordInput, {
  IBasePasswordInputProps,
} from "../BasePasswordInput/BasePasswordInput";
import classNames from "classnames";

export interface IAuthenticationPasswordInputProps
  extends IBasePasswordInputProps {}

const AuthenticationPasswordInput: FC<IAuthenticationPasswordInputProps> = (
  props
): JSX.Element => {
  const { className, value } = props;

  const finalValue = value ? value.toString() : undefined;

  return (
    <BasePasswordInput
      {...props}
      value={finalValue}
      className={classNames("new-auth-password-input", className)}
      
    />
  );
};

export default AuthenticationPasswordInput;
