export type TProductionItem = {
  inputId: number;
  createdAt: string;
  amount: number;
  product: string;
  warehouse: string;
  employee: string;
  productPrice: number;
};
export type TPostProductionItem = {
  productItemId: number;
  amount: number;
};
export interface IPostProductions {
  products: TPostProductionItem[];
}
export type TPostIncomeIngredientItem = {
  productItemId: number;
  amount: number;
  price: number;
  employerId: number;
};
