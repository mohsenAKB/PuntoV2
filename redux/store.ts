import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  devTools: process.env.NEXT_PUBLIC_MODE === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpatch = typeof store.dispatch;
