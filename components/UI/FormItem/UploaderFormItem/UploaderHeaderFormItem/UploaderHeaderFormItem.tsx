import { FC, ReactNode } from "react";
import UploaderDescriptionFormItem from "./UploaderDescriptionFormItem/UploaderDescriptionFormItem";
import UploaderTitleFormItem from "./UploaderTitleFormItem/UploaderTitleFormItem";

interface IProps {
  title?: ReactNode,
  description?: string
}

const UploaderHeaderFormItem: FC<IProps> = ({
  title,
  description,
}): JSX.Element => {

  return <div className="uploader-header-form-item">

    {title && <UploaderTitleFormItem>
      {title}
    </UploaderTitleFormItem>}

    {description && <UploaderDescriptionFormItem>
      {description}
    </UploaderDescriptionFormItem>}

  </div>
}

export default UploaderHeaderFormItem