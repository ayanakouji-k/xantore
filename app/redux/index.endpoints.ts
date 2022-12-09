import { employeeApi } from "./employee/employee.api";
import { warehouseApi } from "./warehouse/warehouse.api";
import { productApi } from "./product/product.api";
import { productionApi } from "./production/production.api";
import { saleApi } from "./sale/sale.api";
import { clientApi } from "./client/client.api";
import { authApi } from "./auth/auth.api";
import { deliveryApi } from "./delivery/delivery.api";
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
  useGetProductionProductsQuery,
  useCreateProductionMutation,
  useCreateIncomeIngredientMutation,
  useGetProductionIngredientsQuery,
} = productionApi;
export const { useGetSaleAllQuery, useCreateSaleMutation } = saleApi;
export const { useGetClientAllQuery, useCreateClientMutation } = clientApi;
export const {
  useCreateUserMutation,
  useStepAuthLoginMutation,
  useGetAuthAllUsersQuery,
  useGetAuthMeQuery,
} = authApi;
export const {
  useGetDeliveryAllQuery,
  useGetDeliveryBaggageIdQuery,
  useGetDeliveryOrdersIdQuery,
  useGetDeliveryOrdersQuery,
  useGetDeliveryWaitReturnsIdQuery,
  useGetDeliveryWaitReturnsQuery,
  usePostDeliveryAcceptIdMutation,
  usePostDeliveryOrderMutation,
  usePostDeliveryRejectIdMutation,
  usePostDeliveryReturnProductMutation,
} = deliveryApi;
