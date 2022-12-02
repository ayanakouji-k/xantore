import { createSlice } from "@reduxjs/toolkit";

import { IGetId } from "./getId.types";

const initialState: IGetId = {
  id: null,
};

const getIdSlice = createSlice({
  name: "getId",
  initialState,
  reducers: {
    setGetId(state, { payload }) {
      state.id = payload;
    },
  },
});
export const { setGetId } = getIdSlice.actions;
export default getIdSlice.reducer;
