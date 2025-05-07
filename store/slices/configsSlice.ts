// import { IInitializeResponse } from "@/@types/Response/refactor/initialize";
import { IStartupRes } from "@/@types/response/startupRes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IConfigsState extends IStartupRes {
  isInitialized: boolean;
}

const initialState: IConfigsState = {
  isInitialized: false,
  colors: [],
  expertises: [],
  materials: [],
  service_locations: [],
  skills: [],
  small_residential_spaces: [],
  styles: [],
  usages: [],
  company_sizes: [],
  tags: [],
  categories: [],
  degrees: [],
  provinces: [],
  salaries: [],
  user_profile: {},
  work_types: [],
  auth: {},
};

export const configsSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    setConfigs(state, action: PayloadAction<IStartupRes>) {
      const newConfigs = { ...action.payload };
      // delete newConfigs.user_profile;

      return { ...state, ...newConfigs, isInitialized: true };
    },
  },
});

export const { setConfigs } = configsSlice.actions;

export default configsSlice.reducer;
