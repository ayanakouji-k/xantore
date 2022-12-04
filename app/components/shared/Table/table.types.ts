import { GetRowKey } from "antd/es/table/interface";

export interface ITable {
  columns: any;
  data: any;
  loading: boolean;
  title: string | null | undefined;
  current: number;
  total: number | undefined;
  rowKey?: string | GetRowKey<any>;
  setCurrent: (page: number) => void;
  showExpand?: boolean;
  expandableItems?: any;
}
