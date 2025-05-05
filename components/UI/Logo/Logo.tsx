import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = (): JSX.Element => {
  return (
    <div className="punto-logo">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          className="punto-logo__img"
          width={0}
          height={0}
        />
      </Link>
    </div>
  );
};

export default Logo;
