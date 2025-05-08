import { IRenderModalElementsArgs } from "@/components/UI/Base/BaseModal/@types/modal";
import { FC } from "react";
import ModalCloseIcon from "../Icons/ModalCloseIcon";

interface DashboardModalHeaderProps {
  title?: string
  close: IRenderModalElementsArgs["close"]
}

const DashboardModalHeader: FC<DashboardModalHeaderProps> = ({
  title,
  close
}): JSX.Element => {

  if (!title) {
    return (<></>)
  }

  return <div className="dashboard-modal-header__container">
    <div className="dashboard-modal-header">
      <span className="dashboard-modal-header__title">{title}</span>

      <span
        className="dashboard-modal-header__close"
        onClick={close}>
        <ModalCloseIcon />
      </span>
    </div>
  </div>
}

export default DashboardModalHeader