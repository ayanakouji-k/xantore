export type TSaleItem = {
  createdAt: string;
  product: string;
  amount: number;
  saleId: number;
  debtPrice: number;
  wholePrice: number;
  client: string;
  paidPrice: number;
};
export type TCreateSale = {
  productItemId: number;
  amount: number;
  clientId: number;
  paymentAmount: number;
};
export interface ISale {
  data: TSaleItem[];
}
