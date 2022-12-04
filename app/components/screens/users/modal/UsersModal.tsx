import React from "react";
import { Form, Input, InputNumber, Select } from "antd";
import { FormContainer, ModalContainer } from "../../../shared";
import { useCreateUserMutation } from "../../../../redux/index.endpoints";
import { TCreateUser } from "../../../../redux/auth/auth.types";

const UsersModal: React.FC = () => {
  const [form] = Form.useForm();

  const [createUser, { isLoading, isSuccess, isError }] =
    useCreateUserMutation();

  const onFinish = (values: TCreateUser) => {
    createUser(values);
  };
  return (
    <ModalContainer
      title="Пользователь"
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
            name: "phoneNumber",
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
          { label: "Пароль", name: "password", input: <Input /> },
          {
            label: "Тип",
            name: "roleName",
            input: (
              <Select allowClear placement="topLeft">
                <Select.Option value="ADMIN">Админ</Select.Option>
                <Select.Option value="DRIVER">Доставщик</Select.Option>
                <Select.Option value="SELLER">Продавец</Select.Option>
              </Select>
            ),
          },
        ]}
      />
    </ModalContainer>
  );
};

export default UsersModal;
