import { FC, useMemo } from 'react';
import BaseSelect, {
  IBaseSelectProps,
} from '../BaseSelect';
import {
  IRenderSingleSelectInputHandler,
  ISingleSelectOnChange,
} from '../@types/SignleSelect';
import { ISelectItem } from '../@types/SelectItem';
import {
  BaseSelectOnChangeHandler,
} from '../@types/Select';

interface IProps
  extends Omit<
    IBaseSelectProps,
    'value' | 'onRenderInput'
  > {
  onChange: ISingleSelectOnChange;
  onRenderInput?: IRenderSingleSelectInputHandler;
  value?: ISelectItem['value'];
}

const BaseSingleSelect: FC<IProps> = (
  props,
): JSX.Element => {
  const { value, onChange } = props;

  const onChangeHandler: BaseSelectOnChangeHandler = (
    values,
  ) => {
    const newValue = values[values.length - 1];

    if (newValue === value) {
      onChange(undefined);
    } else {
      onChange(newValue);
    }
  };

  const validValue = useMemo<ISelectItem['value'][]>(() => {
    if (value === undefined) return [];

    return [value];
  }, [value]);

  return (
    <BaseSelect
      {...props}
      value={validValue}
      onChange={onChangeHandler}
      closeAfterChangeValue
    />
  );
};

export interface IBaseSingleSelectProps extends IProps { }
export default BaseSingleSelect;
