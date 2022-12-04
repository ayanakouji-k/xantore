import { message } from "antd";
import Cookies from "js-cookie";

export const transformResponse = (response: any) => {
  message.success(response?.message);
  return response;
};
export const transformErrorResponse = (response: any) => {
  if (response.status === 403) {
    Cookies.remove("token");
  } else {
    message.error(response?.data.message);
    return response;
  }
};
