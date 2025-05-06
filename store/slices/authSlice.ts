import { IUserProfile } from "@/@types/entities/user-profile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  isAuthenticated: boolean;
  user: IUserProfile | undefined;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserProfile | undefined>) {
      return { ...state, user: action.payload };
    },
    setUserAuthenticated(state, action: PayloadAction<boolean>) {
      return { ...state, isAuthenticated: action.payload };
    },
    setUserLoggedIn(state, action: PayloadAction<IUserProfile>) {
      return { ...state, user: action.payload, isAuthenticated: true };
    },
    setUserLoggedOut(state) {
      return { ...state, user: undefined, isAuthenticated: false };
    },
  },
});

export const {
  setUser,
  setUserAuthenticated,
  setUserLoggedIn,
  setUserLoggedOut,
} = authSlice.actions;

export default authSlice.reducer;
