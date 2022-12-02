import { createSlice } from "@reduxjs/toolkit";

import { IModal } from "./modal.types";

const initialState: IModal = {
  isModalOpen: false,
  isModalOpen2: false,
  isModalOpen3: false,
  isModalOpen4: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModalOpen(state, { payload }) {
      state.isModalOpen = payload;
    },
    setIsModalOpen2(state, { payload }) {
      state.isModalOpen2 = payload;
    },
    setIsModalOpen3(state, { payload }) {
      state.isModalOpen3 = payload;
    },
    setIsModalOpen4(state, { payload }) {
      state.isModalOpen4 = payload;
    },
  },
});
export const {
  setIsModalOpen,
  setIsModalOpen2,
  setIsModalOpen3,
  setIsModalOpen4,
} = modalSlice.actions;
export default modalSlice.reducer;
