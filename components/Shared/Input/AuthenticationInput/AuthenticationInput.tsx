import React, { FC, useMemo } from "react";
import BaseInput, { IBaseInputProps } from "../BaseInput/BaseInput";
import classNames from "classnames";

export interface IAuthenticationInputProps extends IBaseInputProps {}

const AuthenticationInput: FC<IAuthenticationInputProps> = (
  props
): JSX.Element => {
  const { className } = props;

  return (
    <BaseInput {...props} className={classNames("new-auth-input", className)} />
  );
};

export default AuthenticationInput;
