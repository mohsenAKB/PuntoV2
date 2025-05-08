import { FC } from "react";
import BaseInputNumber, { BaseInputNumberProps } from "../../Base/BaseInputNumber/BaseInputNumber";

interface IProps extends BaseInputNumberProps { }

const AuthNumberInput: FC<IProps> = (props): JSX.Element => {

  return <BaseInputNumber {...props} className="auth-input-number" />
}

export interface IAuthNumberInput extends IProps { }

export default AuthNumberInput