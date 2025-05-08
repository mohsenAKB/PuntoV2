import { FC, ReactNode, useMemo } from "react";
import BaseFormItem, { IBaseFormItemProps } from "../../Base/BaseFormItem/BaseFormItem";
import classNames from "classnames";
import UploaderHeaderFormItem from "./UploaderHeaderFormItem/UploaderHeaderFormItem";

export enum UploaderFormItemSize {
  full = "full-width",
  half = "half-width",
}

interface IUploaderFormItemProps extends IBaseFormItemProps {
  description?: string
  title?: string
  size?: UploaderFormItemSize
  isRequired?: boolean
}

const UploaderFormItem: FC<IUploaderFormItemProps> = (props): JSX.Element => {

  const { title, description, children, size = UploaderFormItemSize.full, topSpace = true, isRequired } = props

  const requiredLabelContent = useMemo<ReactNode | undefined>(() => {

    if (title && isRequired) {
      return <>
        {title}

        <span className="dashboard-form-item__required">*</span>
      </>
    }

    return title
  }, [isRequired])

  const sizeClassName = useMemo<string>(() => {
    return `uploader-form-item--${size}`
  }, [size])

  const spacedClassName = useMemo(() => {
    return topSpace ? 'uploader-form-item--spaced' : ''
  }, [topSpace])

  return <BaseFormItem
    {...props}
    className={classNames('uploader-form-item', sizeClassName, spacedClassName)}>

    <UploaderHeaderFormItem
      title={requiredLabelContent}
      description={description} />

    {children}
  </BaseFormItem>
}

export default UploaderFormItem