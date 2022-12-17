import { Form, Input, InputNumber } from "antd";
import React from "react";

import {
  useEditProductMutation,
  useGetProductIngredientsQuery,
} from "../../../../redux/index.endpoints";
import { formatter } from "../../../../utils/formatter";
import { useAppSelector } from "../../../../hooks";
import { FormContainer, ModalContainer } from "../../../shared";

const ProductIngredientModal: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useAppSelector((state) => state.getId);
  const { data: ingredientItems } = useGetProductIngredientsQuery(1);
  const [
    editProduct,
    { isLoading: editLoading, isSuccess: editSuccess, isError },
  ] = useEditProductMutation();
  const findProductItem = ingredientItems?.data.find(
    (prev) => prev.productId === id
  );
  const onFinish = (values: any) => {
    editProduct({ id, type: "INGREDIENT", ingredients: [], ...values });
  };
  React.useEffect(() => {
    if (id && findProductItem) {
      form.setFieldsValue({
        name: findProductItem.name,
        price: findProductItem.price,
      });
    }
  }, [id, form, findProductItem]);
  return (
    <ModalContainer
      title="Продукт"
      form={form}
      success={editSuccess || isError}
      loading={editLoading}
    >
      <FormContainer
        form={form}
        onFinish={onFinish}
        formListActive={false}
        items={[
          { label: "Названия", name: "name", input: <Input /> },
          {
            label: "Цена",
            name: "price",
            input: <InputNumber inputMode="numeric" formatter={formatter} />,
          },
        ]}
      />
    </ModalContainer>
  );
};

export default ProductIngredientModal;
