import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";

export const deliveryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDeliveryAll: builder.query<any, number>({
      query: () => ({
        url: `api/delivery/all`,
      }),
      transformErrorResponse,
      providesTags: ["delivery"],
    }),
    getDeliveryBaggage: builder.query<any, number>({
      query: (id) => ({
        url: `api/delivery/${id}/baggage`,
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
    postDeliveryAcceptId: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: `api/delivery/accept/${body.id}`,
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["delivery-item"],
    }),
    postDeliveryRejectId: builder.mutation<TMessage, any>({
      query: (body) => ({
        url: `api/delivery/reject/${body.id}`,
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["delivery-item"],
    }),
  }),
});
