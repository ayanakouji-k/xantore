import { message } from "antd";

export const transformResponse = (response: any) => {
  message.success(response?.message);
  return response;
};
export const transformErrorResponse = (response: any) => {
  message.error(response?.data.message);
  return response;
};
