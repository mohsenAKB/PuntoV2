import { FC, ReactNode, useEffect, useMemo } from "react";
import classNames from "classnames";
import BaseUploader, {
  BaseUploaderProps,
} from "../../Base/BaseUploader/BaseUploader";
import ProfileDashboardUploaderWrapper from "./ProfileDashboardUploaderWrapper/ProfileDashboardUploaderWrapper";

interface IProps extends BaseUploaderProps {
  children?: ReactNode;
  description?: string;
  onChangeThumbnails?: () => void
}

const ProfileDashboardUploader: FC<IProps> = (props): JSX.Element => {
  const { className, description, children, value, onChangeThumbnails } = props;

  return (
    <BaseUploader
      {...props}
      label={children}
      WrapperComponent={({ children, thumbnails, onClear, onChangeFile }) => (
        <ProfileDashboardUploaderWrapper
          onChangeThumbnails={onChangeThumbnails}
          children={children}
          thumbnails={thumbnails}
          onClear={onClear}
          onChangeFile={onChangeFile}
          value={value}
          description={description}
        />
      )}
      className={classNames(className, "profile-dashboard-uploader")}
    />
  );
};

export interface IProfileDashboardUploaderProps extends IProps { }
export default ProfileDashboardUploader;
