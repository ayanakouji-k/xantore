export type TClientItem = {
  id: number;
  createdAt: string;
  createdBy: string;
  name: string;
  phone: string;
  comment: string;
  type: string;
  balance: {
    createdAt: string;
    amount: number;
    balanceId: number;
  };
};
export type TCreateClient = {
  name: string;
  phone: string;
  comment: string;
};
export interface IClients {
  data: TClientItem[];
}
