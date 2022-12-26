import { ServerResponse } from "./../index.types";
import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import {
  TDeliveryAllItem,
  TDeliveryMovingId,
  TDeliveryOrderItem,
  TDeliveryWaitReturnItem,
} from "./delivery.types";
import { TWarehouseIdItem } from "../warehouse/warehouse.types";

export const deliveryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDeliveryAll: builder.query<ServerResponse<TDeliveryAllItem>, number>({
      query: () => ({
        url: `api/delivery/all`,
      }),
      transformErrorResponse,
      providesTags: ["delivery", "auth"],
    }),
    getDeliveryOrders: builder.query<
      ServerResponse<TDeliveryOrderItem>,
      number
    >({
      query: () => ({
        url: `api/delivery/orders`,
      }),
      transformErrorResponse,
      providesTags: ["delivery"],
    }),
    getDeliveryWaitReturns: builder.query<
      ServerResponse<TDeliveryWaitReturnItem>,
      number
    >({
      query: () => ({
        url: `api/delivery/wait-returns`,
      }),
      providesTags: ["delivery-item"],
      transformErrorResponse,
    }),
    getDeliveryMovingId: builder.query<ServerResponse<TDeliveryMovingId>, any>({
      query: (id) => ({
        url: `api/delivery/${id}/moving`,
      }),
      transformErrorResponse,
      providesTags: ["delivery-item"],
    }),
    getDeliveryBaggageId: builder.query<ServerResponse<TWarehouseIdItem>, any>({
      query: (id) => ({
        url: `api/delivery/${id}/baggage`,
      }),
      transformErrorResponse,
      providesTags: ["delivery-item", "sale"],
    }),
    getDeliveryWaitReturnsId: builder.query<
      ServerResponse<TDeliveryWaitReturnItem>,
      number | null
    >({
      query: (id) => ({
        url: `api/delivery/${id}/wait-returns`,
      }),
      transformErrorResponse,
      providesTags: ["delivery-item"],
    }),
    getDeliveryOrdersId: builder.query<
      ServerResponse<TDeliveryOrderItem>,
      number | null
    >({
      query: (id) => ({
        url: `api/delivery/${id}/orders`,
      }),
      transformErrorResponse,
      providesTags: ["delivery-item"],
    }),
    postDeliveryOrder: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: "api/delivery/order",
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["delivery"],
    }),
    postDeliveryReturnProduct: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: "api/delivery/return-product",
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["delivery-item"],
    }),
    postDeliveryReturnFriendProduct: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: "api/delivery/share-with-driver",
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["delivery-item"],
    }),
    postDeliveryAcceptId: builder.mutation<TMessage, any>({
      query: (id) => ({
        url: `api/delivery/accept/${id}`,
        method: "POST",
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["delivery-item"],
    }),
    postDeliveryRejectId: builder.mutation<TMessage, any>({
      query: (id) => ({
        url: `api/delivery/reject/${id}`,
        method: "POST",
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["delivery-item"],
    }),
    postDeliveryAcceptMovingId: builder.mutation<TMessage, any>({
      query: (id) => ({
        url: `api/delivery/accept-moving/${id}`,
        method: "POST",
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["delivery-item"],
    }),
    postDeliveryRejectMovingId: builder.mutation<TMessage, any>({
      query: (id) => ({
        url: `api/delivery/reject-moving/${id}`,
        method: "POST",
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["delivery-item"],
    }),
  }),
});
