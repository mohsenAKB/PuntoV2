import { Alert, AlertProps } from "antd";
import classNames from "classnames";
import { FC, useMemo } from "react";

interface BaseAlertProps extends AlertProps {
    
}

const BaseAlert: FC<BaseAlertProps> = (props): JSX.Element => {
    const {type = "error", className } = props

    const typeClassName = useMemo(() => {
        return classNames(`base-alert--${type}`, `${className}--${type}`)
    }, [type, className])
 
    const classes = useMemo<string>(() => {
        return classNames('base-alert', className, typeClassName)
    }, [className, typeClassName])

    return <Alert  {...props} className={classes} closable />
}

export default BaseAlert