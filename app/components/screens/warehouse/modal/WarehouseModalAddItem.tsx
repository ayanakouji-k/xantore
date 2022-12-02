import { Form, InputNumber, Select } from "antd";
import React from "react";

import {
  useGetProductIngredientsQuery,
  useGetProductProductsQuery,
  useGetWarehouseIngredientsQuery,
  useGetWarehouseProductsQuery,
  useWarehouseAddItemMutation,
} from "../../../../redux/index.endpoints";
import { FormContainer, ModalContainer } from "../../../shared";

const WarehouseModalAddItem: React.FC = () => {
  const [form] = Form.useForm();

  const { data: warehouseProducts } = useGetWarehouseProductsQuery(1);
  const { data: warehouseIngredients } = useGetWarehouseIngredientsQuery(1);
  const { data: productIngredients } = useGetProductIngredientsQuery(1);
  const { data: productProducts } = useGetProductProductsQuery(1);
  const [warehouseAddItem, { isLoading, isSuccess, isError }] =
    useWarehouseAddItemMutation();
  const [productId, setProductId] = React.useState(0);
  const [productType, setProductType] = React.useState("");

  const handleChangeType = (value: string) => {
    setProductType(value);
  };
  const handleChangeId = (value: number) => {
    setProductId(value);
  };
  const onFinish = (values: any) => {
    warehouseAddItem({ id: productId, ...values });
  };
  return (
    <ModalContainer
      title="Склад (выборочно)"
      form={form}
      success={isSuccess || isError}
      loading={isLoading}
    >
      <FormContainer
        form={form}
        onFinish={onFinish}
        formListActive={false}
        items={[
          {
            label: "Тип",
            name: "type",
            required: false,
            input: (
              <Select allowClear onChange={handleChangeType}>
                <Select.Option value="PRODUCT">Продукт</Select.Option>
                <Select.Option value="INGREDIENT">Ингредиент</Select.Option>
              </Select>
            ),
          },
          {
            label: "Склад",
            name: "warehouse",
            required: false,
            input: (
              <Select allowClear onChange={handleChangeId}>
                {(productType === "PRODUCT"
                  ? warehouseProducts
                  : warehouseIngredients
                )?.data.map((prev) => (
                  <Select.Option
                    key={prev.warehouseId}
                    value={prev.warehouseId}
                  >
                    {prev.name}
                  </Select.Option>
                ))}
              </Select>
            ),
          },
          {
            label: "Продукт",
            name: "productId",
            input: (
              <Select allowClear>
                {(productType === "PRODUCT"
                  ? productProducts
                  : productIngredients
                )?.data.map((prev: any) => (
                  <Select.Option key={prev.productId} value={prev.productId}>
                    {prev.name}
                  </Select.Option>
                ))}
              </Select>
            ),
          },
          {
            label: "Количество",
            name: "amount",
            input: <InputNumber min={0} type="number" />,
          },
        ]}
      />
    </ModalContainer>
  );
};

export default WarehouseModalAddItem;
