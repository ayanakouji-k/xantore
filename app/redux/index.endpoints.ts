import { employeeApi } from "./employee/employee.api";
import { warehouseApi } from "./warehouse/warehouse.api";
import { productApi } from "./product/product.api";
import { productionApi } from "./production/production.api";
import { saleApi } from "./sale/sale.api";
import { clientApi } from "./client/client.api";
import { authApi } from "./auth/auth.api";
export const {
  useGetEmployeeQuery,
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
} = employeeApi;
export const {
  useGetWarehouseIngredientsQuery,
  useGetWarehouseProductsQuery,
  useGetWarehouseItemsQuery,
  useCreateWarehouseMutation,
  useWarehouseAddItemMutation,
  useWarehouseMoveItemMutation,
  useGetWarehouseProductItemsQuery,
  useGetWarehouseIngredientItemsQuery,
} = warehouseApi;
export const {
  useGetProductIdIngredientsQuery,
  useGetProductIngredientsQuery,
  useGetProductProductsQuery,
  useCreateProductMutation,
  useEditProductMutation,
} = productApi;
export const {
  useGetProductionAllQuery,
  useCreateProductionMutation,
  useCreateIncomeIngredientMutation,
  useGetProductionIngredientsQuery,
} = productionApi;
export const { useGetSaleAllQuery, useCreateSaleMutation } = saleApi;
export const { useGetClientAllQuery, useCreateClientMutation } = clientApi;
export const { useCreateUserMutation, useStepAuthLoginMutation } = authApi;
