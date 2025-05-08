import React, { FC } from "react";
import BasePassCodeInput, {
  IBasePassCodeInputProps,
} from "../BasePassCodeInput/BasePassCodeInput";
import classNames from "classnames";
import ValidationMessage from "../../FormItem/ValidationMessage/ValidationMessage";

export interface IAuthenticationPassCodeInputProps
  extends IBasePassCodeInputProps {
  errorMessage?: string;
}

const AuthenticationPassCodeInput: FC<IAuthenticationPassCodeInputProps> = (
  props
): JSX.Element => {
  const { className, status, errorMessage } = props;

  return (
    <div className="new-auth-passcode-input__wrapper">
      <BasePassCodeInput
        {...props}
        className={classNames("new-auth-passcode-input", className)}
        status={errorMessage ? "error" : status}
      />
      {errorMessage && (
        <ValidationMessage message={errorMessage} type="error" />
      )}
    </div>
  );
};

export default AuthenticationPassCodeInput;
