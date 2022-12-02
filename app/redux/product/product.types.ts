export type TProductItem = {
  productId: number;
  price: number;
  name: string;
};
export type TProductItemIngredients = {
  productItem: {
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
  ingredientId: number;
  createdAt: string;
  itemAmount: number;
};
export interface IProductIngredients {
  data: TProductItemIngredients[];
}
export interface IProductAll {
  data: TProductItem[];
}
