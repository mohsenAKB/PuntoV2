import { IThumbnails } from "@/components/UI/Base/BaseUploader/BaseUploader";
import { FC, useMemo, MouseEvent, ReactNode } from "react";
import ProfileDashboardUploaderPreviewItems from "./ProfileDashboardUploaderPreviewItems/ProfileDashboardUploaderPreviewItems";
import ProfileDashboardUploaderPreviewHeader from "./ProfileDashboardUploaderPreviewHeader/ProfileDashboardUploaderPreviewHeader";

interface IProps {
  thumbnails: IThumbnails
  onClear?: () => void
  onChangeFile?: () => void
  children?: ReactNode
}

const ProfileDashboardUploaderPreview: FC<IProps> = ({
  thumbnails,
  onClear,
  onChangeFile,
  children
}): JSX.Element => {

  return <div
    className="dashboard-uploader-preview">

    <ProfileDashboardUploaderPreviewHeader
      onClear={onClear!}
      onEdit={onChangeFile!}
    />

    <ProfileDashboardUploaderPreviewItems thumbnails={thumbnails} />

    <div className="dashboard-uploader-preview__child">
      {children}
    </div>
  </div>
}

export default ProfileDashboardUploaderPreview