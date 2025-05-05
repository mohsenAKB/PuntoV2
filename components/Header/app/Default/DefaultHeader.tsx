import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/UI/Logo/Logo";
import Navbar from "../Navbar/Navbar";
import ProfileManegement from "../ProfileManegement/ProfileManegement";
import Search, { SearchProps } from "@/components/UI/Search/Search";
import HeaderButton from "@/components/UI/Button/HeaderButton/HeaderButton";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import { Src } from "@/constant/Src";
import MobileHeader from "./MobileHeader/MobileHeader";
import BasePortal from "@/components/UI/Base/BasePortal/BasePortal";
import NewProjectButton from "@/components/UI/Button/NewProjectButton/NewProjectButton";
import Login from "@/components/modal/Login/Login";
import SignUpModal from "@/components/modal/signUpModal";
import useAuth from "@/hook/refactor/use-auth";
import useLink from "@/hook/use-link";
import { URL } from "@/constant/url";

export interface DefaultHeaderProps extends SearchProps {}

const DefaultHeader: FC<DefaultHeaderProps> = ({ isCollapse }): JSX.Element => {
  const { isAuthenticated } = useAuth();
  const [src, setSrc] = useState<string>(Src.OpenHambergurIcon);
  const [isLoginVisible, setLoginVisible] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
const {redirect}=useLink()
  const toggleLoginModal = () => {
    // setLoginVisible((prev) => !prev);
redirect(URL.AuthLoginOtpEnterPhoneNumber)
  };

  const toggleHamburgerIcon = () => {
    setSrc((prev) =>
      prev === Src.OpenHambergurIcon
        ? Src.CloseHambergurIcon
        : Src.OpenHambergurIcon
    );
  };

  const newProjectHandler = () => {
    if (isAuthenticated) {
      router.push("/dashboard/projects/");
    } else {
      setShowAuthModal(true);
    }
  };

  const UserLoginHandler = useMemo(() => {
    return isAuthenticated ? (
      <ProfileManegement />
    ) : (
      <HeaderButton
        src="/assets/icons/header-btn-icon.svg"
        onClick={toggleLoginModal}
      >
        ثبت نام و ورود
      </HeaderButton>
    );
  }, [isAuthenticated]);

  return (
    <>
      <Logo />
      <Navbar />
      {/* <Search isCollapse={isCollapse} /> */}

      {pathname?.includes("projects") && isAuthenticated && (
        <NewProjectButton
          onClick={newProjectHandler}
          src="/assets/icons/plus.svg"
        >
          پروژه جدید
        </NewProjectButton>
      )}

      {UserLoginHandler}

      <HamburgerIcon onClick={toggleHamburgerIcon} src={src} />

      {src === Src.CloseHambergurIcon && (
        <BasePortal>
          <MobileHeader />
        </BasePortal>
      )}

      {isLoginVisible && (
        <Login
          visible={true}
          onClose={toggleLoginModal}
          hanldeSignUp={() => {}}
        />
      )}

      {showAuthModal && (
        <SignUpModal
          visible={showAuthModal}
          handleLogin={() => {}}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </>
  );
};

export default DefaultHeader;
