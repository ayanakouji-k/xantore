import { Form, Input, InputNumber, Select } from "antd";
import React from "react";
import { useAppSelector } from "../../../../hooks";
import {
  useCreateProductMutation,
  useEditProductMutation,
  useGetProductIdIngredientsQuery,
  useGetProductProductsQuery,
  useGetWarehouseIngredientsQuery,
  useGetWarehouseItemsQuery,
  useGetWarehouseProductsQuery,
} from "../../../../redux/index.endpoints";
import { formatter } from "../../../../utils/formatter";
import { FormContainer, ModalContainer } from "../../../shared";

const ProductModal: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useAppSelector((state) => state.getId);

  const [productType, setProductType] = React.useState("");
  const [productId, setProductId] = React.useState<number | any>(0);

  const { data: productIdItems, isLoading } = useGetProductIdIngredientsQuery(
    id,
    {
      skip: !id,
    }
  );
  const { data: warehouseProducts } = useGetWarehouseProductsQuery(1);
  const { data: warehouseIngredients } = useGetWarehouseIngredientsQuery(1);
  const { data: warehouseItems } = useGetWarehouseItemsQuery(productId, {
    skip: !productId,
  });
  const { data: productItems } = useGetProductProductsQuery(1);
  const findProductItem = productItems?.data.find(
    (prev) => prev.productId === id
  );
  const [
    createProduct,
    {
      isLoading: createLoading,
      isSuccess: createSuccess,
      isError: createError,
    },
  ] = useCreateProductMutation();
  const [
    editProduct,
    { isLoading: editLoading, isSuccess: editSuccess, isError: editError },
  ] = useEditProductMutation();

  const warehouseId = productIdItems?.data[0].productItem.warehouseId;
  const filterProductIdItems = productIdItems?.data.map((prev) => {
    return {
      productItemId: prev.productItem.productItemId,
      amount: prev.itemAmount,
    };
  });

  const handleChangeType = (value: string) => {
    setProductType(value);
  };

  const handleChangeId = (value: number) => {
    form.setFieldsValue({ ingredients: [] });
    setProductId(value);
  };
  const onFinish = (values: any) => {
    if (id) {
      editProduct({ id: findProductItem?.productId, ...values });
    } else {
      createProduct(values);
    }
  };
  const time = setTimeout(() => console.log(""), 100);
  React.useEffect(() => {
    if (id && findProductItem) {
      form.setFieldsValue({
        name: findProductItem?.name,
        price: findProductItem?.price,
        warehouseId,
        ingredients: filterProductIdItems,
        type: "PRODUCT",
      });
      setProductId(warehouseId);
    }
  }, [time]);
  return (
    <ModalContainer
      title="Продукт"
      form={form}
      success={createSuccess || editSuccess || createError || editError}
      loading={createLoading || editLoading}
    >
      <FormContainer
        form={form}
        onFinish={onFinish}
        loading={isLoading}
        formListActive={productType === "PRODUCT" || Boolean(id)}
        listName="ingredients"
        items={[
          { label: "Названия", name: "name", input: <Input /> },
          {
            label: "Цена",
            name: "price",
            input: <InputNumber inputMode="numeric" formatter={formatter} />,
          },
          {
            label: "Тип",
            name: "type",
            input: (
              <Select
                allowClear
                disabled={Boolean(id)}
                onChange={handleChangeType}
                placement="topLeft"
              >
                <Select.Option value="PRODUCT">Продукт</Select.Option>
                <Select.Option value="INGREDIENT">Ингредиент</Select.Option>
              </Select>
            ),
          },
          {
            label: "Склад",
            name: "warehouseId",
            required: false,
            active: productType === "PRODUCT" || Boolean(id),
            input: (
              <Select
                allowClear
                onChange={handleChangeId}
                disabled={Boolean(id)}
              >
                {(productType === "INGREDIENT"
                  ? warehouseProducts
                  : warehouseIngredients
                )?.data.map((prev) => (
                  <Select.Option
                    key={prev.warehouseId}
                    value={prev.warehouseId}
                  >
                    {prev.name} ({prev.type})
                  </Select.Option>
                ))}
              </Select>
            ),
          },
        ]}
        formList={[
          {
            name: "productItemId",
            label: "Продукт",
            input: (
              <Select allowClear placeholder="Продукт">
                {warehouseItems?.data.map((prev) => (
                  <Select.Option
                    key={prev.productItemId}
                    value={prev.productItemId}
                  >
                    {prev.product}
                  </Select.Option>
                ))}
              </Select>
            ),
          },
          {
            name: "amount",
            label: "Количество",
            input: (
              <InputNumber placeholder="Количество" min={0} type="number" />
            ),
          },
        ]}
      />
    </ModalContainer>
  );
};

export default ProductModal;
