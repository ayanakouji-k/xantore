import { ColumnsType } from "antd/es/table";
import React from "react";
import { GoPencil } from "react-icons/go";
import { useSetModalOpen } from "../../../../hooks";
import { setGetId } from "../../../../redux/getId/getId.slice";

import { useGetProductProductsQuery } from "../../../../redux/index.endpoints";
import { localeString } from "../../../../utils/numberLocaleString";
import { SpaceContainer, TableContainer } from "../../../shared";

const ProductProductsTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const { dispatch, handleClick } = useSetModalOpen();
  const onHandleClick = (id: number) => {
    dispatch(setGetId(id));
    handleClick();
  };
  const { data: productItems, isLoading } = useGetProductProductsQuery(current);
  const columns: ColumnsType<any> = [
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
      title="Продукты"
      rowKey={({ productId }) => productId}
      columns={columns}
      data={productItems?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
    />
  );
};

export default ProductProductsTable;
