import React, { FC, ReactElement, ReactNode } from "react";
import ValidationMessage from "./ValidationMessage/ValidationMessage";

type FormItemProps = {
  label: string;
  children: ReactElement;
  message?: string;
  type?: "info" | "error";
  isRequired: true | false;
  id: string;
};

const FormItem: FC<FormItemProps> = ({
  label,
  children,
  message,
  type = "error",
  isRequired,
  id,
}): JSX.Element => {
  return (
    <div className="form-item">
      <label className="form-item__label" htmlFor={id}>
        {label}&nbsp;
        {isRequired === true ? (
          <span className="form-item__star">*</span>
        ) : (
          <span className="form-item__optional">اختیاری</span>
        )}
      </label>
      <div className="form-item__input">
        {React.cloneElement(children, { id: id })}
      </div>
      {message && type && <ValidationMessage message={message} type={type} />}
    </div>
  );
};

export default FormItem;
