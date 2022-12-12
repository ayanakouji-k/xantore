import { Form, InputNumber, Select } from "antd";
import Cookies from "js-cookie";
import React from "react";
import {
  useGetDeliveryBaggageIdQuery,
  useGetWarehouseProductsQuery,
  usePostDeliveryReturnProductMutation,
} from "../../../../redux/index.endpoints";
import { FormContainer, ModalContainer } from "../../../shared";

const DeliveryReturnModal: React.FC = () => {
  const [form] = Form.useForm();

  const role = Cookies.get("role");
  const userId = Cookies.get("userId");

  const [returnProduct, { isLoading, isSuccess, isError }] =
    usePostDeliveryReturnProductMutation();
  const { data: deliveryBaggage } = useGetDeliveryBaggageIdQuery(userId, {
    skip: !(role === "DRIVER") || !userId,
  });
  const { data: warehouseProducts } = useGetWarehouseProductsQuery(1);

  const onFinish = (values: any) => {
    returnProduct(values);
  };
  return (
    <ModalContainer
      title="Багаж"
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
            label: "Склад",
            name: "recipientWarehouseId",
            input: (
              <Select allowClear loading={isLoading}>
                {warehouseProducts?.data.map((prev) => (
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
            name: "returnedProductItemId",
            input: (
              <Select allowClear loading={isLoading}>
                {deliveryBaggage?.data
                  .filter((prev) => prev.productAmount)
                  .map((prev) => (
                    <Select.Option
                      key={prev.productItemId}
                      value={prev.productItemId}
                    >
                      {prev.product} / {prev.productAmount} штук
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

export default DeliveryReturnModal;
