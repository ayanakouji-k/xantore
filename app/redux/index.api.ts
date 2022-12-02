import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "./index.types";

export const api = createApi({
  reducerPath: "api/xantore",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_KEY,
    prepareHeaders: (headers) => {
      const token = "12";
      if (token) {
        // headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnFocus: true,
  tagTypes: [
    "employee",
    "warehouse",
    "warehouse-item",
    "product",
    "product-item",
    "production",
    "production-income",
    "sale",
    "client",
    "delivery",
    "delivery-item",
  ],
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], string>({
      query: () => `/users`,
    }),
  }),
});
export const { useGetUsersQuery } = api;
