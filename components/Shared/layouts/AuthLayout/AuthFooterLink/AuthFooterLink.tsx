import Link from "next/link";
import React, { FC } from "react";

type AuthFooterLinkProps = {
  text: string;
  linkText: string;
  href: string;
};

const AuthFooterLink: FC<AuthFooterLinkProps> = ({
  text,
  linkText,
  href,
}): JSX.Element => {
  return (
    <div className="new-auth-footer">
      <p className="new-auth-footer__text">
        {text}
        <Link href={href} className="new-auth-footer__link">
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default AuthFooterLink;
