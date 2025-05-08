import { IThumbnails } from "@/components/UI/Base/BaseUploader/BaseUploader";
import { FC, useMemo } from "react";
import ProfileDashboardUploaderPreviewItem from "./ProfileDashboardUploaderPreviewItem/PreviewItem";

interface IProps {
  thumbnails: IThumbnails
}

const ProfileDashboardUploaderPreviewItems: FC<IProps> = ({
  thumbnails
}): JSX.Element => {

  const thumbnailElements = useMemo<JSX.Element[] | null>(() => {
    if (!thumbnails) return null

    return thumbnails?.map(thumbnail => <ProfileDashboardUploaderPreviewItem
      key={thumbnail}
      thumbnail={thumbnail} />)
  }, [thumbnails])

  return <div className="profile-dashboard-uploader-preview-items">
    {thumbnailElements}
  </div>
}

export default ProfileDashboardUploaderPreviewItems