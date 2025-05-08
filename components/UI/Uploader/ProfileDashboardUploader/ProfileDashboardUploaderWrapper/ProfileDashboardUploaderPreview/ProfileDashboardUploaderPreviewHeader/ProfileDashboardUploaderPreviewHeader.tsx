import { FC } from "react";

interface IProps {
  onClear: () => void
  onEdit: () => void
}

const ProfileDashboardUploaderPreviewHeader: FC<IProps> = ({
  onClear,
  onEdit
}): JSX.Element => {

  return <div
    className="profile-preview-uploader-header">

    <span
      onClick={onEdit}
      className="profile-preview-uploader-header__item profile-preview-uploader-header--edit"></span>

    <span
      onClick={onClear}
      className="profile-preview-uploader-header__item profile-preview-uploader-header--delete"></span>

  </div>
}

export default ProfileDashboardUploaderPreviewHeader
