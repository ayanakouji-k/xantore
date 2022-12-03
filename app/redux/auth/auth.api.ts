import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import { TCreateUser, TStepAuthLogin } from "./auth.types";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<TMessage, TCreateUser>({
      query: (body) => ({
        url: "api/auth/register-user",
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
    }),
    stepAuthLogin: builder.mutation<TMessage, TStepAuthLogin>({
      query: (body) => ({
        url: "api/auth/log-in",
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
