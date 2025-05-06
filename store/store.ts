import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { configsSlice } from "./slices/configsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    config: configsSlice.reducer,
  },
  devTools: process.env.NEXT_PUBLIC_MODE === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpatch = typeof store.dispatch;
