import { Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

import { useGetSaleAllQuery } from "../../../../redux/index.endpoints";
import { TSaleItem, TSaleProductItem } from "../../../../redux/sale/sale.types";
import { localeString } from "../../../../utils/numberLocaleString";
import { TableContainer } from "../../../shared";

const SaleTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const { data, isLoading } = useGetSaleAllQuery(1);
  const columns: ColumnsType<TSaleItem> = [
    {
      title: "Клиент",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Добавил",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Оплачено",
      dataIndex: "paidPrice",
      key: "paidPrice",
      render: (number) => (
        <Tag icon={<CheckCircleOutlined />} color="success">
          {localeString(number, "сум")}
        </Tag>
      ),
    },
    {
      title: "Ожидается",
      dataIndex: "debtPrice",
      key: "debtPrice",
      render: (number) =>
        number ? (
          <Tag icon={<CheckCircleOutlined spin />} color="error">
            {localeString(number, "сум")}
          </Tag>
        ) : (
          <Tag color="#2db7f5">полностью оплатил</Tag>
        ),
    },
    {
      title: "Сумма",
      dataIndex: "wholePrice",
      key: "wholePrice",
      render: (number) => <div>{localeString(number, "сум")}</div>,
    },
    {
      title: "Добавлено",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  const productsList = (record: TSaleProductItem) => (
    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {record.products?.map((prev, i: number) => (
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
      title="Продажа"
      rowKey={({ saleId }) => saleId}
      columns={columns}
      data={data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
      showExpand={true}
      expandableItems={productsList}
    />
  );
};

export default SaleTable;
