import { ColumnsType } from "antd/es/table";
import React from "react";
import { useGetProductionIngredientsQuery } from "../../../../redux/index.endpoints";
import { TPostIncomeIngredientItem } from "../../../../redux/production/production.types";
import { localeString } from "../../../../utils/numberLocaleString";
import { TableContainer } from "../../../shared";

const EmployeeIngredientsTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const { data: productionIngredients, isLoading } =
    useGetProductionIngredientsQuery(current);
  const columns: ColumnsType<TPostIncomeIngredientItem> = [
    {
      title: "Названия",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Количество",
      dataIndex: "amount",
      key: "amount",
      render: (number) => <div>{localeString(number, "кг")}</div>,
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
      title: "Поставщик",
      dataIndex: "employee",
      key: "employee",
    },
    {
      title: "Добавлено",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return (
    <TableContainer
      title="Товары"
      rowKey={({ inputId }) => inputId}
      columns={columns}
      data={productionIngredients?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
    />
  );
};

export default EmployeeIngredientsTable;
