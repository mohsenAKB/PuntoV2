import { FC, ReactNode, useMemo } from "react";
import BaseInput, { BaseInputProps } from "../../Base/BaseInput/BaseInput";
import classNames from "classnames";
import ExclamationDashboardTagInputIcon from "./Icons/ExclamationDashboardTagInput";
import DashboardTagInputItems, { IDashboardTagItem } from "./DashboardTagInputItems/DashboardTagInputItems";

interface IProps extends BaseInputProps {
  hasExclamationIcon?: boolean
  suffix?: ReactNode
  onSubmit?: (value: string) => void
  items?: IDashboardTagItem[]
  onChangeItems?: (newItems: IDashboardTagItem[]) => void
}

const DashboardTagInput: FC<IProps> = (props): JSX.Element => {
  const { className, hasExclamationIcon, suffix, onSubmit, items = [], onChangeItems } = props

  const iconElement = useMemo<JSX.Element | null>(() => {
    if (hasExclamationIcon) {
      return <div
        className={classNames("dashboard-tag-input__icon", `${className}__icon`)}>
        <ExclamationDashboardTagInputIcon />
      </div>
    }

    return null
  }, [hasExclamationIcon])

  const suffixElement = useMemo<JSX.Element | null>(() => {
    if (suffix) {
      return <div
        className={classNames("dashboard-tag-input__suffix", `${className}__suffix`)}>
        {/* <div className="dashboard-tag-input__suffix--separator"></div> */}

        <span
          className={classNames("dashboard-tag-input__suffix--text", `${className}__suffix--text`)}>
          {suffix}
        </span>

      </div>
    }

    return null
  }, [suffix])

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

    const value = event.currentTarget.value

    if (!onSubmit || !value.trim().length) return

    if (event.key === 'Enter') {
      onSubmit && onSubmit(value)
      event.currentTarget.value = ""
      event.currentTarget.focus()
    }
  }

  const onDeselectHandler = (deselectedValue: IDashboardTagItem["value"]): void => {
    if (onChangeItems) {
      onChangeItems(items.filter(item => item.value !== deselectedValue))
    }
  }

  return <div className="dashboard-tag-input">
    {iconElement}
    {suffixElement}
    <BaseInput
      {...props}
      inputProps={{
        onKeyDown
      }}
      className={classNames(
        "dashboard-tag-input__input",
        { "dashboard-tag-input__input--exclamation-icon": hasExclamationIcon },
        { "dashboard-tag-input__input--suffix": suffix },
        className
      )}
    />

    <DashboardTagInputItems
      onDeselect={onDeselectHandler}
      items={items} />
  </div>
}

export interface IDashboardTagInputProps extends IProps { }
export default DashboardTagInput