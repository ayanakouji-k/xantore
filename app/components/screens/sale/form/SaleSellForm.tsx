import { Button, Form, InputNumber, message, Select } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  useCreateSaleMutation,
  useGetClientAllQuery,
} from "../../../../redux/index.endpoints";
import {
  addSaleItem,
  removeSaleItems,
} from "../../../../redux/sale/sale.slice";
import { formatter } from "../../../../utils/formatter";
import { localeString } from "../../../../utils/numberLocaleString";
import { UiButton } from "../../../ui";

import styles from "./form.module.scss";
import SaleSellItems from "./SaleSellItems";

const SaleSellForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { saleItems } = useAppSelector((state) => state.sale);
  const [form] = Form.useForm();
  const { totalSum } = useAppSelector((state) => state.sale);
  const { data: client } = useGetClientAllQuery(1);
  const [createSale, { isLoading, isSuccess, isError }] =
    useCreateSaleMutation();

  const some = saleItems.some((prev) => prev.amount === 0);

  const onFinish = (values: any) => {
    if (some) {
      message.warning("Заполните все поле");
    } else {
      createSale({ ...values, productItemsList: saleItems });
    }
  };
  React.useEffect(() => {
    if (isSuccess || isError) {
      form.resetFields();
      dispatch(removeSaleItems());
    }
  }, [isSuccess, isError]);
  return (
    <div className={styles.form}>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Клиент"
          name="clientId"
          rules={[
            { required: true, message: "Пожалуйста, заполните поле клиент!" },
          ]}
        >
          <Select
            allowClear
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            {client?.data.map((prev) => (
              <Select.Option key={prev.id} value={prev.id}>
                {prev.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <SaleSellItems />
        <Form.Item
          label="Оплата"
          name="paymentAmount"
          initialValue={0}
          rules={[
            { required: true, message: "Пожалуйста, заполните поле оплата" },
          ]}
        >
          <InputNumber
            min={0}
            addonAfter={localeString(totalSum, "сум")}
            inputMode="numeric"
            formatter={formatter}
          />
        </Form.Item>
        <div style={{ display: "flex", gap: "10px" }}>
          <UiButton loading={isLoading} text="Сохранить" />
          <Button
            onClick={() =>
              dispatch(
                addSaleItem({
                  id: Date.now(),
                  productItemId: 0,
                  amount: 0,
                  price: 0,
                })
              )
            }
          >
            Добавить +
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SaleSellForm;
