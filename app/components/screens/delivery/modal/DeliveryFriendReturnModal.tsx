import { Form, InputNumber, Select } from "antd";
import Cookies from "js-cookie";
import React from "react";
import {
  useGetDeliveryAllQuery,
  useGetDeliveryBaggageIdQuery,
  usePostDeliveryReturnFriendProductMutation,
} from "../../../../redux/index.endpoints";
import { FormContainer, ModalContainer } from "../../../shared";

const DeliveryFriendReturnModal: React.FC = () => {
  const [form] = Form.useForm();

  const role = Cookies.get("role");
  const userId = Cookies.get("userId");

  const [returnProduct, { isLoading, isSuccess, isError }] =
    usePostDeliveryReturnFriendProductMutation();
  const { data: deliveryBaggage } = useGetDeliveryBaggageIdQuery(userId, {
    skip: !(role === "DRIVER") || !userId,
  });
  const { data: deliveryAll } = useGetDeliveryAllQuery(1);

  const onFinish = (values: any) => {
    returnProduct(values);
  };
  return (
    <ModalContainer
      title="Перемещать другу"
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

export default DeliveryFriendReturnModal;
