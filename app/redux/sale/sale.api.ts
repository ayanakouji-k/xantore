import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import { TCreateSale, TSaleItem } from "./sale.types";

export const saleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSaleAll: builder.query<TSaleItem[], number>({
      query: () => ({
        url: `api/sale/all`,
      }),
      transformErrorResponse,
      providesTags: ["sale"],
    }),
    createSale: builder.mutation<TMessage, TCreateSale>({
      query: (body) => ({
        url: "api/sale/sell",
        method: "POST",
        body,
      }),
      invalidatesTags: ["sale"],
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
