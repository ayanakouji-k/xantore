import { ColumnsType } from "antd/es/table";
import React from "react";
import { GoPencil } from "react-icons/go";
import { useSetModalOpen } from "../../../../hooks";
import { setGetId } from "../../../../redux/getId/getId.slice";

import { useGetProductIngredientsQuery } from "../../../../redux/index.endpoints";
import { localeString } from "../../../../utils/numberLocaleString";
import { SpaceContainer, TableContainer } from "../../../shared";

const ProductIngredientsTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const { dispatch, handleClick2 } = useSetModalOpen();
  const onHandleClick = (id: number) => {
    dispatch(setGetId(id));
    handleClick2();
  };
  const { data: ingredientItems, isLoading } =
    useGetProductIngredientsQuery(current);
  const columns: ColumnsType<any> = [
    {
      title: "№",
      dataIndex: "productId",
      key: "productId",
      width: 30,
    },
    {
      title: "Названия",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
      render: (number) => <div>{localeString(number, "сум")}</div>,
    },
    {
      title: "Действие",
      dataIndex: "action",
      key: "action",
      align: "center",
      width: 30,
      render: (_, record: { productId: number }) => (
        <SpaceContainer
          items={[
            {
              icon: <GoPencil />,
              color: "yellow",
              onClick: () => onHandleClick(record.productId),
            },
          ]}
        />
      ),
    },
  ];
  return (
    <TableContainer
      title="Ингредиенты"
      rowKey={({ productId }) => productId}
      columns={columns}
      data={ingredientItems?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
    />
  );
};

export default ProductIngredientsTable;
