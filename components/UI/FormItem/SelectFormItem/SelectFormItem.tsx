import { FC, ReactNode, useMemo } from "react";
import "./SelectFormItem.scss";
interface SelectFormItem {
  heading: string;
  description?: string;
  children: ReactNode;
  isRequired?: boolean
}

const SelectFormItem: FC<SelectFormItem> = ({
  heading,
  description,
  children,
  isRequired
}): JSX.Element => {

  const requiredLabelContent = useMemo<ReactNode | undefined>(() => {

    if (heading && isRequired) {
      return <>
        {heading}

        <span className="dashboard-form-item__required">*</span>
      </>
    }

    return heading
  }, [isRequired])

  return (
    <div className="SelectFormItem">
      <h4 className="SelectFormItem_heading">{requiredLabelContent}</h4>
      <p className="SelectFormItem_description">{description}</p>
      {children}
    </div>
  );
};

export default SelectFormItem;
