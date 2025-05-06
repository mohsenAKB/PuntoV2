import { IUserProfile } from "@/@types/entities/user-profile";
import { useDispatch, useSelector } from "react-redux";
import {
  IAuthState,
  setUserLoggedIn,
  setUserLoggedOut,
  setUserAuthenticated,
  setUser as setUserStore,
} from "@/store/slices/authSlice";
import { CookieType } from "@/@types/cookie";
import { RootState } from "@/store/store";
import { setCookie } from "@/actions/cookie/set-cookie";
import { IAuth } from "@/@types/entities/auth/auth";
import { removeCookie } from "@/actions/cookie/remove-cookies";

interface UseUserResult {
  setUser: (
    user: IUserProfile | undefined,
    setAuthenticationFlag?: boolean
  ) => void;
  loginUser: (user: IUserProfile) => void;
  logoutUser: () => void;
}

const useAuth = (): UseUserResult => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector<RootState, IAuthState>(
    (state) => state.auth
  );

  const setUser = (user: IUserProfile, setAuthenticationFlag: boolean) => {
    dispatch(setUserStore(user));
    if (setAuthenticationFlag) {
      dispatch(setUserAuthenticated(!!user));
    }
  };

  const loginUser = (user: IUserProfile, auth: IAuth): void => {
    dispatch(setUserLoggedIn(user));
    setCookie(CookieType.Token, auth.access_token);
  };

  const logoutUser = (): void => {
    dispatch(setUserLoggedOut());
    removeCookie(CookieType.Token);
  };

  return {
    setUser,
    isAuthenticated,
    user,
    loginUser,
    logoutUser,
  };
};

export default useAuth;
