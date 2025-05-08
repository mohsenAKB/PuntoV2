import React, { FC, ReactNode } from "react";

type FormItemGroupInputProps = {
  children: ReactNode;
};

const FormItemGroupInput: FC<FormItemGroupInputProps> = ({
  children,
}): JSX.Element => {
  return <div className="new-form-item-group__input">{children}</div>;
};

export default FormItemGroupInput;
