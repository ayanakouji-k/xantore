import React from "react";
import { ColumnsType } from "antd/es/table";

import { TableContainer } from "../../../shared";
import { useGetWarehouseItemsQuery } from "../../../../redux/index.endpoints";
import { localeString } from "../../../../utils/numberLocaleString";

const WarehouseItemsTable: React.FC<any> = ({ id }) => {
  const [current, setCurrent] = React.useState(1);
  const [warehouseName, setWarehouseName] = React.useState<string | null>("");
  const { data: warehouseItems, isLoading } = useGetWarehouseItemsQuery(id, {
    skip: !id,
  });
  const columns: ColumnsType<any> = [
    {
      title: "Названия",
      dataIndex: "product",
      key: "product",
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
      dataIndex: "productPrice",
      key: "productPrice",
      render: (_, record: { productPrice: any }) => (
        <div>{localeString(record.productPrice, "сум")}</div>
      ),
    },
    {
      title: "Склад",
      dataIndex: "warehouseName",
      key: "warehouseName",
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
