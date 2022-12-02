export type TWarehouseItem = {
  warehouseId: number;
  name: string;
  type: string;
};
export type TWarehouseIdItem = {
  product: {
    productId: number;
    price: number;
    name: string;
  };
  productAmount: number;
  productItemId: number;
  warehouse: {
    warehouseId: number;
    name: string;
    type: string;
  };
};
export interface IWarehouseIdItems {
  data: TWarehouseIdItem[];
}
export interface IWarehouseItems {
  data: TWarehouseItem[];
}
