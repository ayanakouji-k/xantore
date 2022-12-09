import { ServerResponse } from "./../index.types";
import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import {
  TPostIncomeIngredientItem,
  TPostProductionItem,
  TProductionItem,
} from "./production.types";

export const productionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductionProducts: builder.query<
      ServerResponse<TProductionItem>,
      number
    >({
      query: () => ({
        url: `api/input/products`,
      }),
      transformErrorResponse,
      providesTags: ["production", "production-item", "sale"],
    }),
    getProductionIngredients: builder.query<
      ServerResponse<TProductionItem>,
      number
    >({
      query: () => ({
        url: `api/input/ingredients`,
      }),
      transformErrorResponse,
      providesTags: ["production-item"],
    }),
    createProduction: builder.mutation<TMessage, TPostProductionItem[]>({
      query: (body) => ({
        url: "api/input/production",
        method: "POST",
        body,
      }),
      invalidatesTags: ["production", "warehouse-item"],
      transformResponse,
      transformErrorResponse,
    }),
    createIncomeIngredient: builder.mutation<
      TMessage,
      TPostIncomeIngredientItem
    >({
      query: (body) => ({
        url: "api/input/income-ingredient",
        method: "POST",
        body,
      }),
      invalidatesTags: ["warehouse-item", "production-item"],
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
