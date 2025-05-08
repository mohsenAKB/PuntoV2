import { InputStatus } from "@/@types/ui/input-status";
import classNames from "classnames";
import { FC, ReactNode, useMemo } from "react";

interface TextAreaFormItemSecondaryProps {
  heading?: string;
  children: ReactNode;
  topSpace?: boolean
  className?: string,
  status?: InputStatus
  validationMessage?: string;
  isRequired?: boolean
}

const TextAreaFormItemSecondary: FC<TextAreaFormItemSecondaryProps> = ({
  heading = "",
  children,
  topSpace = true,
  className,
  status,
  validationMessage,
  isRequired
}): JSX.Element => {

  const topSpaceClassName = useMemo<string>(() => {
    return topSpace
      ? `TextAreaFormItemSecondary--spaced ${className}--spaced`
      : '';
  }, [topSpace, className]);

  const validationMessageElement =
    useMemo<ReactNode | null>(() => {
      if (validationMessage) {
        return (
          <span
            className={`TextAreaFormItemSecondary__message ${className}__message`}
          >
            {validationMessage}
          </span>
        );
      }

      return null;
    }, [validationMessage, className]);

  const requiredElement = useMemo<ReactNode>(() => {
    if (isRequired) {
      return <span className="TextAreaFormItemSecondary--required">*</span>
    }

    return null
  }, [isRequired])

  return (
    <div className={
      classNames(
        "TextAreaFormItemSecondary",
        className,
        topSpaceClassName,
        { [`TextAreaFormItemSecondary--${status}`]: status },
        { [`${className}--${status}`]: (status && className) }
      )
    }>
      <div className="TextAreaFormItemSecondary__header">
        <h4 className="TextAreaFormItemSecondary__header--title">
          {heading}

          {requiredElement}
        </h4>
      </div>

      <div className="TextAreaFormItemSecondary__body">
        {children}
      </div>

      {validationMessageElement}
    </div>
  );
};

export default TextAreaFormItemSecondary;
