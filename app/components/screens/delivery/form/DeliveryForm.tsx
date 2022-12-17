import { Button, Form, InputNumber, Select } from "antd";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  useGetDeliveryAllQuery,
  useGetWarehouseProductItemsQuery,
  usePostDeliveryOrderMutation,
} from "../../../../redux/index.endpoints";
import { UiButton } from "../../../ui";

import styles from "../../production/form/form.module.scss";

const DeliveryForm: React.FC = () => {
  const [form] = Form.useForm();

  const { data: warehouseItems } = useGetWarehouseProductItemsQuery(1);
  const { data: deliveryAll } = useGetDeliveryAllQuery(1);
  const [postOrder, { isError, isLoading, isSuccess }] =
    usePostDeliveryOrderMutation();

  const onFinish = (values: any) => {
    postOrder(values);
  };
  React.useEffect(() => {
    if (isError || isSuccess) {
      form.resetFields();
    }
  }, [isError, isSuccess]);
  return (
    <div className={styles.form}>
      <Form
        form={form}
        layout="vertical"
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Доставщик"
          name="deliveryId"
          rules={[
            {
              required: true,
              message: "Пожалуйста, заполните поле доставщик!",
            },
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
            {deliveryAll?.data.map((prev) => (
              <Select.Option key={prev.deliveryId} value={prev.deliveryId}>
                {prev.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.List name="items" initialValue={[{}]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className={styles.items}>
                  <div className={styles.item}>
                    <Form.Item
                      {...restField}
                      style={{ marginBottom: 0 }}
                      name={[name, "productItemId"]}
                      rules={[
                        {
                          required: true,
                          message: "Пожалуйста, заполните поле продукт",
                        },
                      ]}
                    >
                      <Select allowClear placeholder="Продукт">
                        {warehouseItems?.data.map((prev) => (
                          <Select.Option
                            key={prev.productItemId}
                            value={prev.productItemId}
                          >
                            {prev.product} / {prev.productAmount} штук /{" "}
                            {prev.warehouseName}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      style={{ marginBottom: 0 }}
                      name={[name, "amount"]}
                      rules={[
                        {
                          required: true,
                          message: "Пожалуйста, заполните поле количество!",
                        },
                      ]}
                    >
                      <InputNumber
                        min={0}
                        type="number"
                        placeholder="Количество"
                      />
                    </Form.Item>
                  </div>
                  {key ? (
                    <AiFillDelete
                      color="crimson"
                      size={30}
                      cursor="pointer"
                      onClick={() => remove(name)}
                    />
                  ) : null}
                </div>
              ))}
              <Button
                type="primary"
                onClick={() => add()}
                style={{ marginRight: 20, marginBottom: 10 }}
              >
                Добавить +
              </Button>
            </>
          )}
        </Form.List>
        <UiButton text="Сохранить" loading={isLoading} />
      </Form>
    </div>
  );
};

export default DeliveryForm;
