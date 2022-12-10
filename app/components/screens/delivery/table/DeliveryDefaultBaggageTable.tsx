import { ColumnsType } from "antd/es/table";
import Cookies from "js-cookie";
import React from "react";
import { useGetDeliveryBaggageIdQuery } from "../../../../redux/index.endpoints";
import { TWarehouseIdItem } from "../../../../redux/warehouse/warehouse.types";
import { localeString } from "../../../../utils/numberLocaleString";
import { TableContainer } from "../../../shared";

const DeliveryDefaultBaggageTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);

  const role = Cookies.get("role");
  const userId = Cookies.get("userId");

  const { data: deliveryBaggage, isLoading } = useGetDeliveryBaggageIdQuery(
    userId,
    {
      skip: !(role === "DRIVER") || !userId,
    }
  );
  const columns: ColumnsType<TWarehouseIdItem> = [
    {
      title: "№",
      dataIndex: "productItemId",
      key: "productItemId",
    },
    {
      title: "Добавил",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Названия",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Количество",
      dataIndex: "productAmount",
      key: "productAmount",
      render: (number) => localeString(number, "штук"),
    },
    {
      title: "Цена",
      dataIndex: "productPrice",
      key: "productPrice",
      render: (number) => localeString(number, "сум"),
    },
    {
      title: "Добавлено",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return (
    <TableContainer
      title="Багаж"
      rowKey={({ productItemId }) => productItemId}
      columns={columns}
      data={deliveryBaggage?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
      showExpand={false}
    />
  );
};

export default DeliveryDefaultBaggageTable;
