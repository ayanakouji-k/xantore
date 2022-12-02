import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import {
  IProduction,
  TPostIncomeIngredientItem,
  TPostProductionItem,
} from "./production.types";

export const productionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductionAll: builder.query<IProduction, number>({
      query: () => ({
        url: `api/input/products`,
      }),
      providesTags: ["production", "production-income", "sale"],
    }),
    getProductionIngredients: builder.query<IProduction, number>({
      query: () => ({
        url: `api/input/ingredients`,
      }),
      providesTags: ["production-income"],
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
      invalidatesTags: ["warehouse-item", "production-income"],
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
