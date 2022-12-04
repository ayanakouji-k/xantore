import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import { IWarehouseIdItems, IWarehouseItems } from "./warehouse.types";

export const warehouseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWarehouseProducts: builder.query<IWarehouseItems, number>({
      query: () => ({
        url: `api/warehouse/products`,
      }),
      transformErrorResponse,
      providesTags: ["warehouse"],
    }),
    getWarehouseIngredients: builder.query<IWarehouseItems, number>({
      query: () => ({
        url: `api/warehouse/ingredients`,
      }),
      transformErrorResponse,
      providesTags: ["warehouse"],
    }),
    getWarehouseItems: builder.query<IWarehouseIdItems, number>({
      query: (id) => ({
        url: `api/warehouse/${id}/items`,
      }),
      transformErrorResponse,
      providesTags: ["warehouse-item", "product-item", "sale"],
    }),
    getWarehouseProductItems: builder.query<IWarehouseIdItems, number>({
      query: () => ({
        url: `api/warehouse/products/items`,
      }),
      transformErrorResponse,
      providesTags: ["warehouse-item", "product-item", "sale"],
    }),
    getWarehouseIngredientItems: builder.query<IWarehouseIdItems, number>({
      query: () => ({
        url: `api/warehouse/ingredient/items`,
      }),
      transformErrorResponse,
      providesTags: ["warehouse-item", "product-item", "sale"],
    }),
    createWarehouse: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: "api/warehouse/create",
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["warehouse"],
    }),
    warehouseMoveItem: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: "api/warehouse/move-item",
        method: "POST",
        body,
      }),
      invalidatesTags: ["warehouse-item"],
      transformResponse,
      transformErrorResponse,
    }),
    warehouseAddItem: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: `api/warehouse/${body.id}/addItem`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["warehouse", "warehouse-item"],
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
