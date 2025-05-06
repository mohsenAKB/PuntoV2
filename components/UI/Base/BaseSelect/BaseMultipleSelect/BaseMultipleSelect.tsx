import { FC } from 'react';
import BaseSelect, {
  IBaseSelectProps,
} from '../BaseSelect';

interface IProps extends IBaseSelectProps {}

const BaseMultipleSelect: FC<IProps> = (
  props,
): JSX.Element => {
  return <BaseSelect {...props} />;
};

export interface IBaseMultipleSelectProps extends IProps {}
export default BaseMultipleSelect;
