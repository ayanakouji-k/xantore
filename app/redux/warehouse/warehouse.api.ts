import { ServerResponse } from "./../index.types";
import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import { TWarehouseIdItem, TWarehouseItem } from "./warehouse.types";

export const warehouseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWarehouseProducts: builder.query<ServerResponse<TWarehouseItem>, number>(
      {
        query: () => ({
          url: `api/warehouse/products`,
        }),
        transformErrorResponse,
        providesTags: ["warehouse"],
      }
    ),
    getWarehouseIngredients: builder.query<
      ServerResponse<TWarehouseItem>,
      number
    >({
      query: () => ({
        url: `api/warehouse/ingredients`,
      }),
      transformErrorResponse,
      providesTags: ["warehouse"],
    }),
    getWarehouseItems: builder.query<ServerResponse<TWarehouseIdItem>, number>({
      query: (id) => ({
        url: `api/warehouse/${id}/items`,
      }),
      transformErrorResponse,
      providesTags: ["warehouse-item", "product-item", "sale", "delivery-item"],
    }),
    getWarehouseProductItems: builder.query<
      ServerResponse<TWarehouseIdItem>,
      number
    >({
      query: () => ({
        url: `api/warehouse/products/items`,
      }),
      transformErrorResponse,
      providesTags: ["warehouse-item", "product-item", "sale", "delivery-item"],
    }),
    getWarehouseIngredientItems: builder.query<
      ServerResponse<TWarehouseIdItem>,
      number
    >({
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
      invalidatesTags: ["warehouse-item"],
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
