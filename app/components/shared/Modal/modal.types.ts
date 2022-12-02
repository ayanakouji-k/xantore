import { FormInstance } from "antd";

export interface IModal {
  title: string;
  children: any;
  form?: FormInstance<any>;
  success: boolean;
  loading: boolean;
  reset?: boolean;
}
