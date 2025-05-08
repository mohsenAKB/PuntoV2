import { FC, ReactNode, useMemo } from "react";
import BaseInput, { BaseInputProps } from "../../Base/BaseInput/BaseInput";
import classNames from "classnames";
import ExclamationDashboardInputIcon from "./Icons/ExclamationDashboardInputIcon";

interface IProps extends BaseInputProps {
  hasExclamationIcon?: boolean
  suffix?: ReactNode
}

const DashboardInput: FC<IProps> = (props): JSX.Element => {
  const { className, hasExclamationIcon, suffix } = props

  const iconElement = useMemo<JSX.Element | null>(() => {
    if (hasExclamationIcon) {
      return <div
        className={classNames("dashboard-input__icon", `${className}__icon`)}>
        <ExclamationDashboardInputIcon />
      </div>
    }

    return null
  }, [hasExclamationIcon])

  const suffixElement = useMemo<JSX.Element | null>(() => {
    if (suffix) {
      return <div
        className={classNames("dashboard-input__suffix", `${className}__suffix`)}>

        <span
          className={classNames("dashboard-input__suffix--text", `${className}__suffix--text`)}>
          {suffix}
        </span>

      </div>
    }

    return null
  }, [suffix])

  return <div className="dashboard-input">
    {iconElement}
    {suffixElement}
    <BaseInput
      {...props}
      className={classNames(
        "dashboard-input__input",
        { "dashboard-input__input--exclamation-icon": hasExclamationIcon },
        { "dashboard-input__input--suffix": suffix },
        className
      )}
    />
  </div>
}

export interface IDashboardInputProps extends IProps { }
export default DashboardInput