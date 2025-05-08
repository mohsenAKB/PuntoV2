import React, { FC } from "react";

type AuthSubHeaderProps = {
  children: string;
};

const AuthSubHeader: FC<AuthSubHeaderProps> = ({ children }): JSX.Element => {
  return (
    <div className="new-auth-sub-header">
      <h2 className="new-auth-sub-header__text">{children}</h2>
    </div>
  );
};

export default AuthSubHeader;
