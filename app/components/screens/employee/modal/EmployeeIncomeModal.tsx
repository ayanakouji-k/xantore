import { Form, InputNumber, Select } from "antd";
import React from "react";
import {
  useCreateIncomeIngredientMutation,
  useGetEmployeeQuery,
  useGetWarehouseIngredientsQuery,
  useGetWarehouseItemsQuery,
} from "../../../../redux/index.endpoints";
import { TPostIncomeIngredientItem } from "../../../../redux/production/production.types";
import { formatter } from "../../../../utils/formatter";
import { FormContainer, ModalContainer } from "../../../shared";

const EmployeeIncomeModal: React.FC = () => {
  const [form] = Form.useForm();
  const [productId, setProductId] = React.useState<number>(0);

  const { data: warehouseIngredients } = useGetWarehouseIngredientsQuery(1);
  const { data: warehouseItems } = useGetWarehouseItemsQuery(productId, {
    skip: !productId,
  });
  const { data: employeeUsers } = useGetEmployeeQuery(1);
  const [getIncomeIngredients, { isLoading, isSuccess, isError }] =
    useCreateIncomeIngredientMutation();

  const handleChangeId = (value: number) => {
    setProductId(value);
  };
  const onFinish = (values: TPostIncomeIngredientItem) => {
    getIncomeIngredients(values);
  };
  return (
    <ModalContainer
      title="Получать"
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
            name: "employerId",
            label: "Поставщик",
            input: (
              <Select allowClear placeholder="Выберите поставщика">
                {employeeUsers?.data.map((prev) => (
                  <Select.Option key={prev.employeeId} value={prev.employeeId}>
                    {prev.name}
                  </Select.Option>
                ))}
              </Select>
            ),
          },
          {
            label: "Склад",
            name: "warehouseId",
            required: false,
            input: (
              <Select
                allowClear
                onChange={handleChangeId}
                placeholder="Выберите склад"
              >
                {warehouseIngredients?.data.map((prev) => (
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
            name: "productItemId",
            label: "Продукт",
            input: (
              <Select allowClear placeholder="Выберите продукта">
                {warehouseItems?.data.map((prev) => (
                  <Select.Option
                    key={prev.productItemId}
                    value={prev.productItemId}
                  >
                    {prev.product} ({prev.productAmount}) (кг)
                  </Select.Option>
                ))}
              </Select>
            ),
          },
          {
            name: "amount",
            label: "Количество",
            input: <InputNumber min={0} type="number" />,
          },
          {
            name: "price",
            label: "Цена",
            input: (
              <InputNumber min={0} inputMode="numeric" formatter={formatter} />
            ),
          },
        ]}
      />
    </ModalContainer>
  );
};

export default EmployeeIncomeModal;
