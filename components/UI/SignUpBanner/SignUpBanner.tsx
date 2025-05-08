import SignUpModal from "@/components/modal/signUpModal";
import { URL } from "@/constant/url";
import useAuth from "@/hook/use-auth";
import useSavePath from "@/hook/refactor/use-save-path";
import useLink from "@/hook/use-link";
import Image from "next/image";
import React, { FC, useState } from "react";

export interface SignUpBannerProps {
  path: string;
}

const SignUpBanner: FC<SignUpBannerProps> = ({ path }): JSX.Element | null => {
  // const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const { savePath } = useSavePath();
  const { redirect } = useLink();

  const clickHandler = () => {
    savePath(path);
    redirect(URL.AuthLoginOtpEnterPhoneNumber);
  };
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? (
    <section className="signup-banner">
      <picture onClick={clickHandler}>
        <source
          media="(max-width:640px)"
          srcSet="/images/signup-banner-mobile.jpg"
        />
        <source
          media="(min-width:641px)"
          srcSet="/images/signup-banner-desktop.jpg"
        />
        <Image alt="signup banner" src="" width={1400} height={300} />
      </picture>
    </section>
  ) : null;
};

export default SignUpBanner;
