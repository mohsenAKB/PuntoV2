import React, { FC, JSX, ReactNode } from "react";
import SmallView from "./SmallView/SmallView";
import AuthLogo from "./AuthLogo/AuthLogo";
import AuthHeader from "./AuthHeader/AuthHeader";
import LargeView from "./LargeView/LargeView";

type AuthLayoutProps = {
  header: string;
  children: ReactNode;
};

const AuthenticationLayout: FC<AuthLayoutProps> = (props): JSX.Element => {
  const { children, header } = props;
  return (
    <div className="new-auth-layout">
      <div className="new-auth-layout__side-banner">
        <LargeView />
      </div>
      <div className="new-auth-layout__patterns">
        <SmallView />
      </div>
      <div className="new-auth-layout__main-container">
        <div className="new-auth-layout__main-container--content">
          <AuthLogo />
          <AuthHeader header={header} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
