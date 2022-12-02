import { Form, Input, InputNumber, Select } from "antd";
import React from "react";
import {
  useCreateWarehouseMutation,
  useGetProductIngredientsQuery,
  useGetProductProductsQuery,
} from "../../../../redux/index.endpoints";

import { FormContainer, ModalContainer } from "../../../shared";

const WarehouseMadal: React.FC = () => {
  const [form] = Form.useForm();
  const { data: productIngredients } = useGetProductIngredientsQuery(1);
  const { data: productProducts } = useGetProductProductsQuery(1);
  const [createWarehouse, { isLoading, isSuccess, isError }] =
    useCreateWarehouseMutation();

  const [productType, setProductType] = React.useState<any>(null);

  const handleChange = (value: string) => {
    form.setFieldsValue({ productList: [] });
    setProductType(value);
  };
  const onFinish = (values: any) => {
    createWarehouse(values);
  };
  return (
    <ModalContainer
      title="Склад"
      form={form}
      success={isSuccess || isError}
      loading={isLoading}
    >
      <FormContainer
        form={form}
        onFinish={onFinish}
        listName="productList"
        formList={[
          {
            name: "productId",
            label: "Продукт",
            input: (
              <Select allowClear placeholder="Выберите продукта">
                {(productType === "PRODUCT"
                  ? productProducts?.data
                  : productIngredients?.data
                )?.map((prev: any) => (
                  <Select.Option key={prev.productId} value={prev.productId}>
                    {prev.name}
                  </Select.Option>
                ))}
              </Select>
            ),
          },
          {
            name: "amount",
            label: "Количество",
            initialValue: true,
            input: (
              <InputNumber placeholder="Добавьте количество" type="number" />
            ),
          },
        ]}
        items={[
          { label: "Названия", name: "name", input: <Input /> },
          {
            label: "Тип",
            name: "type",
            input: (
              <Select allowClear onChange={handleChange}>
                <Select.Option value="PRODUCT">Продукт</Select.Option>
                <Select.Option value="INGREDIENT">Ингредиент</Select.Option>
              </Select>
            ),
          },
        ]}
      />
    </ModalContainer>
  );
};

export default WarehouseMadal;
