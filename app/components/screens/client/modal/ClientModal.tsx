import { Form, Input, InputNumber } from "antd";
import React from "react";
import { TCreateClient } from "../../../../redux/client/client.types";
import { useCreateClientMutation } from "../../../../redux/index.endpoints";
import { FormContainer, ModalContainer } from "../../../shared";

const ClientModal: React.FC = () => {
  const [form] = Form.useForm();

  const [createClient, { isLoading, isSuccess, isError }] =
    useCreateClientMutation();

  const onFinish = (values: TCreateClient) => {
    createClient(values);
  };
  return (
    <ModalContainer
      title="Клиент"
      form={form}
      success={isSuccess || isError}
      loading={isLoading}
    >
      <FormContainer
        form={form}
        onFinish={onFinish}
        formListActive={false}
        items={[
          { label: "Имя", name: "name", input: <Input /> },
          {
            label: "Номер",
            name: "phone",
            input: (
              <InputNumber
                formatter={(value) =>
                  `${value?.toString()}`.replace(
                    /(\d{2})(\d{3})(\d{2})(\d{2})/,
                    "($1) $2-$3-$4"
                  )
                }
                type="tel"
                parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
                addonBefore="+998"
              />
            ),
          },
          { label: "Комментария", name: "comment", input: <Input.TextArea /> },
        ]}
      />
    </ModalContainer>
  );
};

export default ClientModal;
