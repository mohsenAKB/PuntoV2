import React, { FC, ReactNode } from "react";

type FormItemGroupProps = {
  children: ReactNode;
};

const FormItemGroup: FC<FormItemGroupProps> = ({ children }): JSX.Element => {
  return <div className="new-form-item-group">{children}</div>;
};

export default FormItemGroup;

{
  /* 
<formItemGroup >
        <formItemGroupInput>
          <FormItem label="نام" isRequired={true}>
            <AuthenticationInput />
          </FormItem>
        </formItemGroupInput>
        <formItemGroupInput></formItemGroupInput>
</formItemGroup /> */
}
