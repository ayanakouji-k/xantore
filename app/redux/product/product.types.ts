export type TProductItem = {
  productId: number;
  price: number;
  name: string;
};
export type TProductItemIngredients = {
  productItem: {
    createdAt: string;
    product: string;
    productAmount: number;
    createdBy: string;
    warehouseId: number;
    productItemId: number;
    warehouseName: string;
    productPrice: number;
  };
  ingredientId: number;
  itemAmount: number;
};
