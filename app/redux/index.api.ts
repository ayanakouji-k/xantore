import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { apiUrl } from "../config/url.config";
import { TUser } from "./index.types";

export const api = createApi({
  reducerPath: "api/xantore",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
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
    "production-item",
    "sale",
    "client",
    "delivery",
    "delivery-item",
    "auth",
    "auth-item",
  ],
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], string>({
      query: () => `/users`,
    }),
  }),
});
export const { useGetUsersQuery } = api;
