import React from "react";
import { AiFillEye } from "react-icons/ai";
import { useRouter } from "next/router";
import { ColumnsType } from "antd/es/table";

import { TableContainer } from "../../../shared";
import { useGetWarehouseIngredientsQuery } from "../../../../redux/index.endpoints";
import { TWarehouseItem } from "../../../../redux/warehouse/warehouse.types";
import { UiButton } from "../../../ui";

const WarehouseIngredientsTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const router = useRouter();
  const { data: ingredients, isLoading } =
    useGetWarehouseIngredientsQuery(current);
  const columns: ColumnsType<TWarehouseItem> = [
    {
      title: "№",
      dataIndex: "warehouseId",
      key: "warehouseId",
      width: 30,
    },
    {
      title: "Названия",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Тип",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Действие",
      key: "action",
      width: 30,
      align: "center",
      render: (_, record: { warehouseId: number }) => (
        <UiButton
          icon={<AiFillEye />}
          onClick={() => router.push(`/warehouse/${record.warehouseId}`)}
        />
      ),
    },
  ];
  return (
    <TableContainer
      title="Склад ингредиентов"
      rowKey={({ warehouseId }) => warehouseId}
      columns={columns}
      data={ingredients?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
    />
  );
};

export default WarehouseIngredientsTable;
