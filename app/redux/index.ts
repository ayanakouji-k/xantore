import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./index.api";

import navbar from "./navbar/navbar.slice";
import modal from "./modal/modal.slice";
import getId from "./getId/getId.slice";
import sale from "./sale/sale.slice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    navbar,
    modal,
    getId,
    sale,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
