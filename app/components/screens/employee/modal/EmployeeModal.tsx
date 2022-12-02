import { Form, Input, InputNumber } from "antd";
import React from "react";
import { useAppSelector } from "../../../../hooks";

import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from "../../../../redux/index.endpoints";
import { FormContainer, ModalContainer } from "../../../shared";

const EmployeeModal: React.FC = () => {
  const [form] = Form.useForm();
  const { data: employee, isFetching } = useGetEmployeeQuery(1);
  const [createEmployee, { isLoading: createLoading, isError: createError }] =
    useCreateEmployeeMutation();
  const [editEmployee, { isLoading: editLoading, isError: editError }] =
    useEditEmployeeMutation();
  const { id } = useAppSelector((state) => state.getId);
  const findItem = employee?.data.find((prev) => prev.employeeId === id);
  const onFinish = (values: any) => {
    if (id) {
      editEmployee({ employeeId: id, ...values }).unwrap();
    } else {
      createEmployee(values).unwrap();
    }
  };
  React.useEffect(() => {
    if (findItem) {
      form.setFieldsValue({
        name: findItem.name,
        phoneNumber: findItem.phoneNumber,
        comment: findItem.comment,
      });
    }
  }, [id]);
  return (
    <ModalContainer
      title="Поставщик"
      form={form}
      success={isFetching || createError || editError}
      loading={createLoading || editLoading}
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
          { label: "Комментария", name: "comment", input: <Input.TextArea /> },
        ]}
      />
    </ModalContainer>
  );
};

export default EmployeeModal;
