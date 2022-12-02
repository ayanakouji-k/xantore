import { Form, InputNumber, Select } from "antd";
import React from "react";
import {
  useCreateProductionMutation,
  useGetWarehouseItemsQuery,
} from "../../../../redux/index.endpoints";

import { FormContainer, ModalContainer } from "../../../shared";

const ProductionModal: React.FC = () => {
  const [form] = Form.useForm();
  const { data: warehouseItems } = useGetWarehouseItemsQuery(4);
  const [createProduction, { isError, isLoading, isSuccess }] =
    useCreateProductionMutation();
  const onFinish = (values: any) => {
    createProduction(values.productionList);
  };
  return (
    <ModalContainer
      title="Производства"
      form={form}
      success={isSuccess || isError}
      loading={isLoading}
    >
      <FormContainer
        form={form}
        onFinish={onFinish}
        listName="productionList"
        formListActive={true}
        formList={[
          {
            label: "Продукт",
            name: "productItemId",
            input: (
              <Select allowClear placeholder="Выберите продукта">
                {warehouseItems?.data.map((prev) => (
                  <Select.Option
                    key={prev.productItemId}
                    value={prev.productItemId}
                  >
                    {prev.product.name} ({prev.warehouse.name})
                  </Select.Option>
                ))}
              </Select>
            ),
          },
          {
            label: "Количество",
            name: "amount",
            input: (
              <InputNumber
                min={0}
                type="number"
                placeholder="Добавьте количество"
              />
            ),
          },
        ]}
      />
    </ModalContainer>
  );
};

export default ProductionModal;
