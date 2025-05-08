import { FC } from "react";
import BaseFormItem, { IBaseFormItemProps } from "../../Base/BaseFormItem/BaseFormItem";

interface IProps extends IBaseFormItemProps { }

const AuthFormItem: FC<IProps> = (props): JSX.Element => {

  return <BaseFormItem
    {...props}
    className="auth-form-item" />
}

export default AuthFormItem