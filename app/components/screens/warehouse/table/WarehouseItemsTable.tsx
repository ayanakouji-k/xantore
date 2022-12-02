import React from "react";
import { ColumnsType } from "antd/es/table";

import { TableContainer } from "../../../shared";
import { useGetWarehouseItemsQuery } from "../../../../redux/index.endpoints";
import { localeString } from "../../../../utils/numberLocaleString";

const WarehouseItemsTable: React.FC<any> = ({ id }) => {
  const [current, setCurrent] = React.useState(1);
  const [warehouseName, setWarehouseName] = React.useState<string | null>("");
  const { data: warehouseItems, isLoading } = useGetWarehouseItemsQuery(id);
  const columns: ColumnsType<any> = [
    {
      title: "№",
      dataIndex: "productItemId",
      key: "productItemId",
      width: 30,
    },
    {
      title: "Названия",
      dataIndex: "name",
      key: "name",
      render: (_, record: { product: any }) => <div>{record.product.name}</div>,
    },
    {
      title: "Количество",
      dataIndex: "productAmount",
      key: "productAmount",
      render: (number) =>
        localeString(number, warehouseName === "Ингредиенты" ? "кг" : "штук"),
    },
    {
      title: "Цена",
      dataIndex: "productAmount",
      key: "productAmount",
      render: (_, record: { product: any }) => (
        <div>{localeString(record.product.price, "сум")}</div>
      ),
    },
    {
      title: "Склад",
      dataIndex: "warehouseName",
      key: "warehouseName",
      render: (_, record: { warehouse: any }) => (
        <div>{record.warehouse.name}</div>
      ),
    },
  ];
  React.useEffect(() => {
    const warehouseTabs = localStorage.getItem("warehouseTabs");
    setWarehouseName(warehouseTabs);
  }, []);
  return (
    <TableContainer
      title={warehouseName}
      rowKey={({ productItemId }) => productItemId}
      columns={columns}
      data={warehouseItems?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
    />
  );
};

export default WarehouseItemsTable;
