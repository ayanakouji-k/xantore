import React from "react";
import { Button, Form, Spin } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

import { IForm } from "./form.types";

import styles from "./form.module.scss";
import { UiButton } from "../../ui";

const FormContainer: React.FC<IForm> = ({
  form,
  onFinish,
  items,
  itemsEnd,
  formList = null,
  loading = false,
  listName = "",
  formListActive = true,
}) => {
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      {items?.length &&
        items
          .filter(({ active = true }) => active)
          .map(({ input, label, name, required = true }, i) => (
            <Form.Item
              key={i}
              label={label}
              name={name}
              rules={[
                {
                  required,
                  message: `Пожалуйста, заполните поле ${label?.toLocaleLowerCase()}!`,
                },
              ]}
            >
              {input}
            </Form.Item>
          ))}
      {formListActive && (
        <Spin spinning={loading}>
          <Form.List name={listName}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className={styles.formList}>
                    {formList?.map((prev, i) => (
                      <Form.Item
                        {...restField}
                        key={i}
                        name={[name, prev.name]}
                        style={{ marginBottom: 0 }}
                        initialValue={prev.initialValue && 0}
                        rules={[
                          {
                            required: true,
                            message: `Пожалуйста, заполните поле ${prev.label?.toLocaleLowerCase()}!`,
                          },
                        ]}
                      >
                        {prev.input}
                      </Form.Item>
                    ))}
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <div style={{ width: "100px" }}>
                        <UiButton
                          text="Удалить"
                          color="crimson"
                          onClick={() => remove(name)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={() => add()}
                    block
                    icon={<AiOutlinePlus />}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#7367F0",
                      justifyContent: "center",
                      gap: 5,
                    }}
                  >
                    Добавить
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Spin>
      )}
      {itemsEnd?.length &&
        itemsEnd
          .filter(({ active = true }) => active)
          .map(({ input, label, name, required = true }, i) => (
            <Form.Item
              key={i}
              label={label}
              name={name}
              rules={[
                {
                  required,
                  message: `Пожалуйста, заполните поле ${label?.toLocaleLowerCase()}!`,
                },
              ]}
            >
              {input}
            </Form.Item>
          ))}
    </Form>
  );
};

export default FormContainer;
