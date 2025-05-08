import { IBaseUploaderWrapperComponentProps } from "@/components/UI/Base/BaseUploader/DefaultWrapperComponent/DefaultWrapperComponent";
import classNames from "classnames";
import { FC, useEffect } from "react";
import ProfileDashboardUploaderInput from "./ProfileDashboardUploaderInput/ProfileDashboardUploaderInput";
import ProfileDashboardUploaderPreview from "./ProfileDashboardUploaderPreview/ProfileDashboardUploaderPreview";
import { useComponent } from "@/hook/use-component";

interface IProps extends IBaseUploaderWrapperComponentProps {
  description?: string,
  onChangeThumbnails?: (thumbnails: string[] | undefined) => void
}

const ProfileDashboardUploaderWrapper: FC<IProps> = ({
  children,
  description,
  value,
  thumbnails,
  onClear,
  onChangeFile,
  onChangeThumbnails
}): JSX.Element => {

  const { isMounted } = useComponent()

  useEffect(() => {
    if (onChangeThumbnails && isMounted) onChangeThumbnails(thumbnails)
  }, [thumbnails])

  return <div className={classNames(
    "profile-dashboard-uploader-wrapper",
    { "profile-dashboard-uploader-wrapper--preview": thumbnails?.length }
  )}>

    {
      thumbnails
        ? <ProfileDashboardUploaderPreview
          onClear={onClear}
          onChangeFile={onChangeFile}
          thumbnails={thumbnails}
          children={children} />
        : <ProfileDashboardUploaderInput
          description={description}
          children={children} />
    }
  </div>
}

export default ProfileDashboardUploaderWrapper