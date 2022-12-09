export type TUser = {
  id: number;
  name: string;
};
export type TMessage = {
  massage: string;
  data: string;
};
export interface ServerResponse<T> {
  data: T[];
}
