import { Form, InputNumber, Select } from "antd";
import React from "react";

import {
  useGetWarehouseIngredientsQuery,
  useGetWarehouseItemsQuery,
  useGetWarehouseProductsQuery,
  useWarehouseMoveItemMutation,
} from "../../../../redux/index.endpoints";
import { FormContainer, ModalContainer } from "../../../shared";

const WarehouseModalMoveItem: React.FC = () => {
  const [form] = Form.useForm();
  const [warehouseId1, setWarehouseId1] = React.useState(0);
  const [warehouseId2, setWarehouseId2] = React.useState(0);
  const [productType, setProductType] = React.useState("");

  const { data: warehouseProducts } = useGetWarehouseProductsQuery(1);
  const { data: warehouseIngredients } = useGetWarehouseIngredientsQuery(1);
  const { data: warehouseItems1 } = useGetWarehouseItemsQuery(warehouseId1);
  const { data: warehouseItems2 } = useGetWarehouseItemsQuery(warehouseId2);
  const [warehouseMoveItem, { isLoading, isSuccess, isError }] =
    useWarehouseMoveItemMutation();
  const handleChangeType = (value: string) => {
    setProductType(value);
  };
  const handleChange1 = (value: number) => {
    setWarehouseId1(value);
  };
  const handleChange2 = (value: number) => {
    setWarehouseId2(value);
  };
  const onFinish = (values: any) => {
    warehouseMoveItem(values);
  };
  return (
    <ModalContainer
      title="Перемещать"
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
            input: (
              <Select allowClear onChange={handleChangeType}>
                <Select.Option value="PRODUCT">Продукт</Select.Option>
                <Select.Option value="INGREDIENT">Ингредиент</Select.Option>
              </Select>
            ),
          },
          {
            name: "warehouse 1",
            label: "Выберите склад 1",
            required: false,
            input: (
              <Select allowClear onChange={handleChange1}>
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
            name: "itemOneId",
            label: "Продукт 1",
            input: (
              <Select allowClear>
                {warehouseItems1?.data.map((prev) => (
                  <Select.Option
                    key={prev.productItemId}
                    value={prev.productItemId}
                  >
                    {prev.product} ({prev.productAmount}) кг
                  </Select.Option>
                ))}
              </Select>
            ),
          },
          {
            name: "warehouse 2",
            label: "Выберите склад 2",
            required: false,
            input: (
              <Select allowClear onChange={handleChange2}>
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
            name: "itemTwoId",
            label: "Продукт 2",
            input: (
              <Select allowClear>
                {warehouseItems2?.data.map((prev) => (
                  <Select.Option
                    key={prev.productItemId}
                    value={prev.productItemId}
                  >
                    {prev.product} ({prev.productAmount}) кг
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
        ]}
      />
    </ModalContainer>
  );
};

export default WarehouseModalMoveItem;
