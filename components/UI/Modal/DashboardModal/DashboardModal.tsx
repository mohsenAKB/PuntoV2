import { FC, ReactNode, useMemo } from "react";
import BaseModal, { ModalProps } from "../../Base/BaseModal/BaseModal";
import classNames from "classnames";
import DashboardModalHeader from "./DashboardModalHeader/DashboardModalHeader";

export interface DashboardModalProps extends ModalProps {
  title?: string
}

const DashboardModal: FC<DashboardModalProps> = (props): JSX.Element => {

  const { children, className, title } = props

  return <BaseModal
    {...props}
    renderHeader={(props) => <DashboardModalHeader title={title} {...props} />}
    className={classNames(
      className,
      "dashboard-modal"
    )}
  >
    {children}
  </BaseModal>
}

export default DashboardModal