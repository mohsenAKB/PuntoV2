import { FC, ReactNode, useMemo } from "react";
import BaseFormItem, { IBaseFormItemProps } from "../../Base/BaseFormItem/BaseFormItem";
import classNames from "classnames";

interface IProps extends IBaseFormItemProps {
  isRequired?: boolean
}

const DashboardFormItem: FC<IProps> = (props): JSX.Element => {

  const { isRequired, label, className } = props

  const requiredLabelContent = useMemo<ReactNode | undefined>(() => {

    if (label && isRequired) {
      return <>
        {label}

        <span className="dashboard-form-item__required">*</span>
      </>
    }

    return label
  }, [isRequired])

  return <BaseFormItem
    {...props}
    label={requiredLabelContent}
    className={classNames(
      "dashboard-form-item",
      className
    )}
  />
}

export interface IDashboardFormItem extends IProps { }
export default DashboardFormItem