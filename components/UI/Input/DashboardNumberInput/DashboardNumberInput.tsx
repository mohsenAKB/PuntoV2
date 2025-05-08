import { FC } from "react";
import BaseInputNumber, {
  BaseInputNumberProps,
} from "../../Base/BaseInputNumber/BaseInputNumber";
import classNames from "classnames";

interface IProps extends BaseInputNumberProps {}

const DashboardNumberInput: FC<IProps> = (props): JSX.Element => {
  return (
    <BaseInputNumber
      {...props}
      className={classNames("dashboard-input-number", props.className)}
    />
  );
};

export interface IDashboardNumberInput extends IProps {}

export default DashboardNumberInput;
