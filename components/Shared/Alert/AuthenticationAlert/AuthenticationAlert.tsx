import { Alert, AlertProps } from "antd";
import classNames from "classnames";
import { FC, useMemo } from "react";
import BaseAlert from "../BaseAlert/BaseAlert";

interface AuthenticationAlertProps extends AlertProps {
}

const AuthenticationAlert: FC<AuthenticationAlertProps> = (props): JSX.Element => {

    return <BaseAlert  {...props} />
}

export default AuthenticationAlert