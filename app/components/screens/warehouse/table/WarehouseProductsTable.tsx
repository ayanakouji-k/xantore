import React from "react";
import Link from "next/link";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/router";
import { AiFillEye } from "react-icons/ai";

import { TableContainer } from "../../../shared";
import { useGetWarehouseProductsQuery } from "../../../../redux/index.endpoints";
import { TWarehouseItem } from "../../../../redux/warehouse/warehouse.types";
import { UiButton } from "../../../ui";

const WarehouseProductsTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const router = useRouter();
  const { data: products, isLoading } = useGetWarehouseProductsQuery(current);
  const columns: ColumnsType<TWarehouseItem> = [
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
      title="Склад продуктов"
      rowKey={({ warehouseId }) => warehouseId}
      columns={columns}
      data={products?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
    />
  );
};

export default WarehouseProductsTable;
