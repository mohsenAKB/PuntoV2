import { FC } from "react";
import BaseButton, { BaseButtonProps } from "../../Base/BaseButton/BaseButton";
import classNames from "classnames";

interface IProps extends BaseButtonProps { }

const AuthSecondaryButton: FC<IProps> = (props): JSX.Element => {

  const { className } = props

  return <BaseButton {...props} className={classNames("auth-secondary-button", className)} />
}

export interface IAuthSecondaryButtonProps extends IProps { }
export default AuthSecondaryButton