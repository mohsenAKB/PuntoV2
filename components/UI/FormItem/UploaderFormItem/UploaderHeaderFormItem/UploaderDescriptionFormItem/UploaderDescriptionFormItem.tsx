import { FC } from "react";

interface IProps {
  children?: string
}

const UploaderDescriptionFormItem: FC<IProps> = ({
  children
}): JSX.Element => {

  return <span className="uploader-description-form-item">
    {children}
  </span>
}

export default UploaderDescriptionFormItem