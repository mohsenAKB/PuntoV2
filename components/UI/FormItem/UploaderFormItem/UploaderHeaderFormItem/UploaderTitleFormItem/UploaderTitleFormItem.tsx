import { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

const UploaderTitleFormItem: FC<IProps> = ({
  children
}): JSX.Element => {

  return <span className="uploader-title-form-item">
    {children}
  </span>
}

export default UploaderTitleFormItem