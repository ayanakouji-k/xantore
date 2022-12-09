import { ServerResponse } from "./../index.types";
import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import { TProductItem, TProductItemIngredients } from "./product.types";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductProducts: builder.query<ServerResponse<TProductItem>, number>({
      query: () => ({
        url: `api/product/products`,
      }),
      transformErrorResponse,
      providesTags: ["product"],
    }),
    getProductIngredients: builder.query<ServerResponse<TProductItem>, number>({
      query: () => ({
        url: `api/product/ingredients`,
      }),
      transformErrorResponse,
      providesTags: ["product"],
    }),
    getProductIdIngredients: builder.query<
      ServerResponse<TProductItemIngredients>,
      number | null
    >({
      query: (id) => ({
        url: `api/product/${id}/ingredients`,
      }),
      transformErrorResponse,
      providesTags: ["product-item"],
    }),
    createProduct: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: "api/product/create",
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["product"],
    }),
    editProduct: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: `api/product/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["product", "product-item"],
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
