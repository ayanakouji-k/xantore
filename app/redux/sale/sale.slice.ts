import { createSlice } from "@reduxjs/toolkit";

interface ISaleItems {
  saleItems: {
    id: number;
    productItemId: number;
    amount: number;
    price: number;
  }[];
  totalSum: number;
}

const initialState: ISaleItems = {
  saleItems: [
    {
      id: Date.now(),
      productItemId: 0,
      amount: 0,
      price: 0,
    },
  ],
  totalSum: 0,
};

export const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    addSaleItem(state, { payload }) {
      state.saleItems = [...state.saleItems, payload];
    },
    setSaleProductId(state, { payload }) {
      const findItem = state.saleItems.find((prev) => prev.id === payload.id);
      if (findItem) {
        findItem.productItemId = payload.productItemId;
        findItem.price = payload.price;
      }
    },
    setSaleProductAmount(state, { payload }) {
      const findItem = state.saleItems.find((prev) => prev.id === payload.id);
      if (findItem) {
        findItem.amount = payload.amount;
        state.totalSum = state.saleItems.reduce(
          (sum, prev) => sum + prev.price * prev.amount,
          0
        );
      }
    },
    deleteSaleProductItem(state, { payload }) {
      const findItem = state.saleItems.find((prev) => prev.id === payload);
      if (findItem) {
        findItem.amount = 0;
        state.totalSum = state.saleItems.reduce(
          (sum, prev) => sum + prev.price * prev.amount,
          0
        );
      }
      state.saleItems = state.saleItems.filter((prev) => prev.id !== payload);
    },
    removeSaleItems(state) {
      state.totalSum = 0;
      state.saleItems = [
        {
          id: Date.now(),
          productItemId: 0,
          amount: 0,
          price: 0,
        },
      ];
    },
  },
});
export const {
  addSaleItem,
  setSaleProductId,
  setSaleProductAmount,
  deleteSaleProductItem,
  removeSaleItems,
} = saleSlice.actions;
export default saleSlice.reducer;
