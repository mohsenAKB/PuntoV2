import { FC } from "react";
import BasePasswordInput, { BasePasswordInputProps } from "../../Base/BasePasswordInput/BasePasswordInput";

interface IProps extends BasePasswordInputProps { }

const AuthPasswordInput: FC<IProps> = (props): JSX.Element => {

  return <BasePasswordInput {...props} className="auth-password-input" />
}

export interface IAuthPasswordInput extends IProps { }

export default AuthPasswordInput