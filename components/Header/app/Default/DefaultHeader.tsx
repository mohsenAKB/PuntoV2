"use client";
import React, { FC, JSX, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/UI/Logo/Logo";
import Navbar from "../Navbar/Navbar";
import ProfileManegement from "../ProfileManegement/ProfileManegement";
import Search, { SearchProps } from "@/components/UI/Search/Search";
import HeaderButton from "@/components/UI/Button/HeaderButton/HeaderButton";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import { Src } from "@/constant/Src";
import MobileHeader from "./MobileHeader/MobileHeader";
// import BasePortal from "@/components/UI/Base/BasePortal/BasePortal";
import NewProjectButton from "@/components/UI/Button/NewProjectButton/NewProjectButton";
import { URL } from "@/constant/url";
import useAuth from "@/hook/use-auth";
import useLink from "@/hook/use-link";

export interface DefaultHeaderProps extends SearchProps {}

const DefaultHeader: FC<DefaultHeaderProps> = ({ isCollapse }): JSX.Element => {
  const { isAuthenticated } = useAuth();
  const [src, setSrc] = useState<string>(Src.OpenHambergurIcon);
  const pathname = usePathname();
  const router = useRouter();
  const { redirect } = useLink();
  const toggleLoginModal = () => {
    // setLoginVisible((prev) => !prev);
    redirect(URL.AuthLoginOtpEnterPhoneNumber);
  };

  const toggleHamburgerIcon = () => {
    setSrc((prev) =>
      prev === Src.OpenHambergurIcon
        ? Src.CloseHambergurIcon
        : Src.OpenHambergurIcon
    );
  };

  // const newProjectHandler = () => {
  //   if (isAuthenticated) {
  //     router.push("/dashboard/projects/");
  //   } else {
  //     setShowAuthModal(true);
  //   }
  // };

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

      {/* {src === Src.CloseHambergurIcon && (
        <BasePortal>
          <MobileHeader />
        </BasePortal>
      )} */}
    </>
  );
};

export default DefaultHeader;
