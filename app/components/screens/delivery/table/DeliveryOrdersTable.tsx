import { Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { useAppSelector } from "../../../../hooks";
import { TDeliveryOrderItem } from "../../../../redux/delivery/delivery.types";
import {
  useGetDeliveryOrdersIdQuery,
  useGetDeliveryOrdersQuery,
} from "../../../../redux/index.endpoints";
import { localeString } from "../../../../utils/numberLocaleString";
import { TableContainer } from "../../../shared";

const DeliveryOrdersTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const { id } = useAppSelector((state) => state.getId);
  const { data: deliveryOrders, isLoading: deliveryOrderLoading } =
    useGetDeliveryOrdersQuery(1);
  const { data: deliveryOrdersId, isLoading: deliveryOrderIdLoading } =
    useGetDeliveryOrdersIdQuery(id, {
      skip: !id,
    });
  const columns: ColumnsType<TDeliveryOrderItem> = [
    {
      title: "Добавил",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Добавлено",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  const productsList = (record: any) => (
    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {record.productItems.map((prev: any, i: number) => (
        <li key={i}>
          <Tag color="cyan">{i + 1}</Tag>
          <Tag color="green">{prev.productItem.product}</Tag>
          <Tag color="geekblue">{prev.itemAmount} штук</Tag>
          <Tag color="gold">
            {localeString(prev.productItem.productPrice, "сум")}
          </Tag>
          <Tag color="purple">{prev.productItem.warehouseName}</Tag>
          <Tag color="#87d068">
            Сумма:{" "}
            {localeString(
              prev.itemAmount * prev.productItem.productPrice,
              "сум"
            )}
          </Tag>
        </li>
      ))}
    </ul>
  );
  return (
    <TableContainer
      title="Загружено"
      rowKey={({ outputId }) => outputId}
      columns={columns}
      data={id ? deliveryOrdersId?.data : deliveryOrders?.data}
      loading={id ? deliveryOrderIdLoading : deliveryOrderLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
      showExpand={true}
      expandableItems={productsList}
    />
  );
};

export default DeliveryOrdersTable;
