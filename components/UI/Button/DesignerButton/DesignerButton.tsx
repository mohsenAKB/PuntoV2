import { FC, ReactNode } from "react";
import BaseButton, { BaseButtonProps } from "../../Base/BaseButton/BaseButton";
import classNames from "classnames";

export interface DesignerButtonProps extends BaseButtonProps {
  icon?: ReactNode;
  children?: string;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

const DesignerButton: FC<DesignerButtonProps> = (props): JSX.Element => {
  const {
    icon,
    children,
    className,
    primary = true,
    secondary,
    onClick,
  } = props;

  return (
    <BaseButton
      {...props}
      onClick={onClick}
      className={classNames(
        "designer-button",
        className,
        { "designer-button--primary": primary },
        { "designer-button--secondary": secondary }
      )}
    >
      <span>{icon}</span>

      <span>{children}</span>
    </BaseButton>
  );
};

export default DesignerButton;
