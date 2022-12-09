import { TWarehouseIdItem } from "../warehouse/warehouse.types";

export type TSaleProductItem = {
  products: [
    {
      productItem: TWarehouseIdItem;
      ingredientId: number;
      itemAmount: number;
    }
  ];
};

export type TSaleItem = {
  createdAt: string;
  saleId: number;
  createdBy: string;
  debtPrice: number;
  wholePrice: number;
  client: string;
  payment: {
    createdAt: string;
    amount: number;
    paymentId: number;
    type: string;
  };
  products: [
    {
      productItem: TWarehouseIdItem;
      ingredientId: number;
      itemAmount: number;
    }
  ];
  paidPrice: number;
};
export type TCreateSale = {
  productItemsList: [
    {
      productItemId: number;
      amount: number;
    }
  ];
  clientId: number;
  paymentAmount: number;
};
