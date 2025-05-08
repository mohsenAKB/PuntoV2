import React, { FC, useEffect, useState } from "react";

const RememberMe: FC = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("rememberMe");

    if (saved === "true") {
      setIsChecked(true);
    }
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    localStorage.setItem("rememberMe", checked.toString());
  };
  return (
    <label className="new-remember-me">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      مرا به خاطر بسپار.
    </label>
  );
};

export default RememberMe;
