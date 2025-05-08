import { FC } from "react";
import BaseInput, { BaseInputProps } from "../../Base/BaseInput/BaseInput";

interface IProps extends BaseInputProps {

}

const AuthInput: FC<IProps> = (props): JSX.Element => {

  return <BaseInput {...props} className="auth-input" />
}


export interface IAuthInputProps extends IProps { }
export default AuthInput