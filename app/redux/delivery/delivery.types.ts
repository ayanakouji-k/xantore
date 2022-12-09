import { TWarehouseIdItem } from "../warehouse/warehouse.types";

export type TDeliveryAllItem = {
  createdAt: string;
  deliveryId: number;
  baggage: string;
  createdBy: string;
  name: string;
};
export type TDeliveryOrderItem = {
  createdAt: string;
  outputId: number;
  productItems: [
    {
      productItem: TWarehouseIdItem;
      ingredientId: number;
      itemAmount: number;
    }
  ];
  createdBy: string;
  outputType: string;
};
export type TDeliveryWaitReturnItem = {
  inputId: number;
  createdAt: string;
  amount: number;
  product: string;
  warehouse: string;
  productPrice: number;
};
