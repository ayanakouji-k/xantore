import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TNavbar } from "./navbar.types";

const initialState: TNavbar = {
  navShow: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    isNavbarShow(state, { payload }: PayloadAction<boolean>) {
      state.navShow = payload;
    },
  },
});
export const { isNavbarShow } = navbarSlice.actions;
export default navbarSlice.reducer;
