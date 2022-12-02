import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import { IProductAll, IProductIngredients } from "./product.types";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductProducts: builder.query<IProductAll, number>({
      query: () => ({
        url: `api/product/products`,
      }),
      providesTags: ["product"],
    }),
    getProductIngredients: builder.query<IProductAll, number>({
      query: () => ({
        url: `api/product/ingredients`,
      }),
      providesTags: ["product"],
    }),
    getProductIdIngredients: builder.query<IProductIngredients, number | null>({
      query: (id) => ({
        url: `api/product/${id}/ingredients`,
      }),
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
