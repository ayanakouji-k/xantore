import {
  transformErrorResponse,
  transformResponse,
} from "../../utils/transformResponse";
import { api } from "../index.api";
import { TMessage } from "../index.types";
import { IEmployee, TEmployeeItem } from "./employee.types";

export const employeeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query<IEmployee, number>({
      query: () => ({
        url: `api/employee/all`,
      }),
      transformErrorResponse,
      providesTags: ["employee"],
    }),
    createEmployee: builder.mutation<TMessage, TEmployeeItem>({
      query: (body) => ({
        url: "api/employee/create",
        method: "POST",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["employee"],
    }),
    editEmployee: builder.mutation<TMessage, TEmployeeItem>({
      query: (body) => ({
        url: `api/employee/${body.employeeId}`,
        method: "PUT",
        body,
      }),
      transformResponse,
      transformErrorResponse,
      invalidatesTags: ["employee"],
    }),
  }),
});
