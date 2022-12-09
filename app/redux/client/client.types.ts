export type TClientItem = {
  outputId: number;
  createdAt: string;
  createdBy: string;
  name: string;
  phone: string;
  comment: string;
  type: string;
  balance: number;
};
export type TCreateClient = {
  name: string;
  phone: string;
  comment: string;
};
