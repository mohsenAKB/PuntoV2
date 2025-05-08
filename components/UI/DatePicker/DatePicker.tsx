import { FC, InputHTMLAttributes, useMemo } from "react";
import ReactDatePicker from 'react-datepicker2';
import DashboardInput, { IDashboardInputProps } from "../Input/DashboardInput/DashboardInput";
import moment from "jalali-moment"
import { InputStatus } from "@/@types/ui/input-status";
import classNames from "classnames";

interface IDatePickerProps {
  value?: Date
  onChange?: (value: Date | undefined) => void
  status?: InputStatus;
}

const DatePicker: FC<IDatePickerProps> = ({
  onChange,
  value,
  status
}): JSX.Element => {

  const convertedValue = useMemo<moment.Moment | undefined>(() => {
    if (value && !isNaN(value.getTime())) {
      return moment(value)
    }

    return undefined
  }, [value])

  const onChangeHandler = (val?: moment.Moment | undefined): Date | undefined => {
    if (!onChange) return

    if (val && val?.isValid()) {
      onChange(val.toDate())
    } else {
      onChange(undefined)
    }

  }

  return <div>
    <ReactDatePicker
      isGregorian={false}
      persianDigits
      timePicker={false}
      value={convertedValue}
      onChange={onChangeHandler}
      className={classNames(
        "custom-date-picker",
        { [`custom-date-picker--${status}`]: status }
      )}

    // input={<DashboardInput
    //   {...inputProps}
    //   value="amir"
    //   disabled
    // />}

    // defaultValue={moment()}
    // onChange={onChangeHandler}
    // value={stringifyValue}
    // lang={"fa"}
    />
  </div>
}

export default DatePicker