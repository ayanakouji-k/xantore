import { FormInstance } from "antd";

type TFormItem = {
  label?: string;
  name: string;
  input?: any;
  required?: boolean;
  active?: boolean;
  initialValue?: boolean;
  value?: any;
};
export interface IForm {
  form: FormInstance<any>;
  onFinish: (values: any) => void;
  items?: TFormItem[];
  itemsEnd?: TFormItem[];
  formList?: TFormItem[];
  formListActive?: boolean;
  loading?: boolean;
  listName?: string;
}
