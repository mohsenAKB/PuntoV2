import { FC } from "react";

interface IProps {
  thumbnail: string
}

const PreviewItem: FC<IProps> = ({
  thumbnail
}): JSX.Element => {

  return <div className="profile-dashboard-uploader-preview-item">
    <img className="profile-dashboard-uploader-preview-item__img" src={thumbnail} alt="" />
  </div>
}

export default PreviewItem