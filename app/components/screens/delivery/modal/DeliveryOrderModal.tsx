import { Form, InputNumber, Select } from "antd";
import React from "react";
import {
  useGetDeliveryAllQuery,
  useGetWarehouseProductItemsQuery,
  usePostDeliveryOrderMutation,
} from "../../../../redux/index.endpoints";
import { FormContainer, ModalContainer } from "../../../shared";

const DeliveryOrderModal: React.FC = () => {
  const [form] = Form.useForm();

  const [postOrder, { isLoading, isSuccess, isError }] =
    usePostDeliveryOrderMutation();
  const { data: warehouseItems } = useGetWarehouseProductItemsQuery(1);
  const { data: deliveryAll } = useGetDeliveryAllQuery(1);

  const onFinish = (values: any) => {
    postOrder(values);
  };
  return (
    <ModalContainer
      title="Доставщик"
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
            label: "Доставщик",
            name: "deliveryId",
            input: (
              <Select allowClear loading={isLoading}>
                {deliveryAll?.data.map((prev) => (
                  <Select.Option key={prev.deliveryId} value={prev.deliveryId}>
                    {prev.name}
                  </Select.Option>
                ))}
              </Select>
            ),
          },
          {
            label: "Продукт",
            name: "productItemId",
            input: (
              <Select allowClear loading={isLoading}>
                {warehouseItems?.data
                  ?.filter((prev) => prev.productAmount)
                  .map((prev) => (
                    <Select.Option
                      key={prev.productItemId}
                      value={prev.productItemId}
                    >
                      {prev.product} / {prev.productAmount} штук /{" "}
                      {prev.warehouseName}
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

export default DeliveryOrderModal;
