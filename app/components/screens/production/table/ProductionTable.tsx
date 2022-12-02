import { ColumnsType } from "antd/es/table";
import React from "react";
import { useGetProductionAllQuery } from "../../../../redux/index.endpoints";
import { TPostIncomeIngredientItem } from "../../../../redux/production/production.types";

import { localeString } from "../../../../utils/numberLocaleString";
import { TableContainer } from "../../../shared";

const ProductionTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const { data: productionItems, isLoading } =
    useGetProductionAllQuery(current);
  const columns: ColumnsType<TPostIncomeIngredientItem> = [
    {
      title: "№",
      dataIndex: "inputId",
      key: "inputId",
      width: 30,
    },
    {
      title: "Названия",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Количество",
      dataIndex: "amount",
      key: "amount",
      render: (number) => <div>{localeString(number, "штук")}</div>,
    },
    {
      title: "Цена",
      dataIndex: "productPrice",
      key: "productPrice",
      render: (number) => <div>{localeString(number, "сум")}</div>,
    },
    {
      title: "Склад",
      dataIndex: "warehouse",
      key: "warehouse",
    },
    {
      title: "Добавлено",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return (
    <TableContainer
      title="Производства"
      rowKey={({ inputId }) => inputId}
      columns={columns}
      data={productionItems?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
    />
  );
};

export default ProductionTable;
