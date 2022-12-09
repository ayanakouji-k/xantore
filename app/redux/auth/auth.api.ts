import { ServerResponse } from "./../index.types";
import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import {
  IAuthMe,
  TAuthAllUserItem,
  TCreateUser,
  TStepAuthLogin,
} from "./auth.types";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAuthAllUsers: builder.query<ServerResponse<TAuthAllUserItem>, number>({
      query: () => ({
        url: `api/auth/all-users`,
      }),
      providesTags: ["auth"],
      transformErrorResponse,
    }),
    getAuthMe: builder.query<IAuthMe, number>({
      query: () => ({
        url: `api/auth/me`,
      }),
      transformErrorResponse,
      providesTags: ["auth-item"],
    }),
    createUser: builder.mutation<TMessage, TCreateUser>({
      query: (body) => ({
        url: "api/auth/register-user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
      transformResponse,
      transformErrorResponse,
    }),
    stepAuthLogin: builder.mutation<TMessage, TStepAuthLogin>({
      query: (body) => ({
        url: "api/auth/log-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth-item"],
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
