import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import { IClients, TCreateClient } from "./client.types";

export const clientApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getClientAll: builder.query<IClients, number>({
      query: () => ({
        url: `api/client/all`,
      }),
      providesTags: ["client"],
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
