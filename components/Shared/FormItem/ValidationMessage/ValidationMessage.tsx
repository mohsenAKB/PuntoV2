import React, { FC } from "react";

type ValidationMessageProps = {
  message: string;
  type: "info" | "error";
};

const ValidationMessage: FC<ValidationMessageProps> = ({
  message,
  type,
}): JSX.Element => {
  return (
    <span
      className={`validation-message ${
        type === "info"
          ? "validation-message--info"
          : "validation-message--error"
      }`}
    >
      {message}
    </span>
  );
};

export default ValidationMessage;
