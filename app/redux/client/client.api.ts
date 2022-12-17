import { ServerResponse } from "./../index.types";
import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import { TClientItem, TCreateClient } from "./client.types";

export const clientApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getClientAll: builder.query<ServerResponse<TClientItem>, number>({
      query: () => ({
        url: `api/client/all`,
      }),
      transformErrorResponse,
      providesTags: ["client", "sale"],
    }),
    createClient: builder.mutation<TMessage, TCreateClient>({
      query: (body) => ({
        url: "api/client/create",
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["client"],
    }),
  }),
});
