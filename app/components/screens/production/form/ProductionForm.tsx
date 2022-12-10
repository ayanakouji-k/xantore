import { Button, Form, InputNumber, Select } from "antd";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  useCreateProductionMutation,
  useGetWarehouseProductItemsQuery,
} from "../../../../redux/index.endpoints";
import { UiButton } from "../../../ui";

import styles from "./form.module.scss";

const ProductionForm: React.FC = () => {
  const [form] = Form.useForm();

  const { data: warehouseItems } = useGetWarehouseProductItemsQuery(1);
  const [createProduction, { isError, isLoading, isSuccess }] =
    useCreateProductionMutation();

  const onFinish = (values: any) => {
    createProduction(values);
  };
  React.useEffect(() => {
    if (isError || isSuccess) {
      form.resetFields();
    }
  }, [isError, isSuccess]);
  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
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
                          {prev.product} / {prev.warehouseName}
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
                <AiFillDelete
                  color="crimson"
                  size={30}
                  cursor="pointer"
                  onClick={() => remove(name)}
                />
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
  );
};

export default ProductionForm;
