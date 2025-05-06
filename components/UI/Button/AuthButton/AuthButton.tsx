import { FC, ReactNode } from "react";
import BaseButton, { BaseButtonProps } from "../../Base/BaseButton/BaseButton";
import classNames from "classnames";

interface IProps extends BaseButtonProps {
}

const AuthButton: FC<IProps> = (props): JSX.Element => {

  return (
    <BaseButton
      {...props}
      className={classNames("auth-button", props.className)}
    />
  );
}

export interface IAuthButtonProps extends IProps { }

export default AuthButton