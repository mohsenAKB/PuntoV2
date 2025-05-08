import React, { FC } from "react";

type AuthHeaderProps = {
  header: string;
};

const AuthHeader: FC<AuthHeaderProps> = ({ header }): JSX.Element => {
  return (
    <div className="new-auth-header">
      <h1 className="new-auth-header__text">{header}</h1>
    </div>
  );
};

export default AuthHeader;
