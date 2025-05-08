import { FC, ReactNode, useMemo } from "react";
import "./TextAreaFormItem.scss";
import classNames from "classnames";
import { NumberSchema } from "yup";
interface TextAreaFormItem {
  heading: string;
  description?: string;
  children: ReactNode;
  topSpace?: boolean
  footer?: ReactNode
}

const TextAreaFormItem: FC<TextAreaFormItem> = ({
  heading,
  description,
  children,
  topSpace = true,
  footer,
}): JSX.Element => {

  const topSpaceClassName = useMemo<string>(() => {
    return topSpace
      ? `TextAreaFormItem--spaced`
      : '';
  }, [topSpace]);

  return (
    <div className={classNames(
      "TextAreaFormItem", topSpaceClassName
    )}>
      <h4 className="TextAreaFormItem_heading">{heading}</h4>
      <p className="TextAreaFormItem_description">{description}</p>
      {children}

      {footer && <div className="TextAreaFormItem__footer">{footer}</div>}
    </div>
  );
};

export default TextAreaFormItem;
