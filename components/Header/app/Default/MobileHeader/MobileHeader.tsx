import HeaderButton from "@/components/UI/Button/HeaderButton/HeaderButton";
import React, { FC, useEffect, useMemo, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Search from "@/components/UI/Search/Search";
import { useSelector } from "react-redux";
import useUser from "@/hook/use-user";
import { useRouter } from "next/navigation";
import useAuth from "@/hook/refactor/use-auth";

const MobileHeader: FC = (): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const {isAuthenticated , logoutUser} = useAuth();
  // const { logoutUser } = useUser();

  const router = useRouter();
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;
  const logoutHandler = () => {
    logoutUser();
    router.replace("/");
  };
  const loginHandler = () => {
    logoutUser();
    router.replace("/auth/login");
  };
  return (
    <div className="mobile-header">
      {/* <Search ClassName="mobile-header__search" /> */}
      <Navbar ClassName="mobile-header__navbar" />
      {isAuthenticated ? (
        <HeaderButton
          src="/assets/icons/header-btn-icon.svg "
          ClassName="mobile-header__btn"
          onClick={logoutHandler}
        >
          jhj
          خروج
        </HeaderButton>
      ) : (
        <HeaderButton
          src="/assets/icons/header-btn-icon.svg "
          ClassName="mobile-header__btn"
          onClick={loginHandler}
        >
          ورود و ثبت نام
        </HeaderButton>
      )}
    </div>
  );
};

export default MobileHeader;
