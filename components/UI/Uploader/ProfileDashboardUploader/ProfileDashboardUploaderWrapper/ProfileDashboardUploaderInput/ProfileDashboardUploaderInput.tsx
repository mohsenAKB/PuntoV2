import classNames from "classnames";
import { FC, ReactNode } from "react";

interface IProps {
  description?: string
  children?: ReactNode
}

const ProfileDashboardUploaderInput: FC<IProps> = ({
  children,
  description
}): JSX.Element => {

  return <>
    <div className={classNames("profile-dashboard-uploader-wrapper__items")}>
      <img
        src="/assets/icons/empty.svg"
        className={classNames("profile-dashboard-uploader-wrapper__image")} />

      {description
        && <span>
          {description}
        </span>
      }
    </div>

    {children}
  </>
}

export default ProfileDashboardUploaderInput