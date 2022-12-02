import { Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

import { useGetSaleAllQuery } from "../../../../redux/index.endpoints";
import { TSaleItem } from "../../../../redux/sale/sale.types";
import { localeString } from "../../../../utils/numberLocaleString";
import { TableContainer } from "../../../shared";

const SaleTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const { data, isLoading } = useGetSaleAllQuery(1);
  const columns: ColumnsType<TSaleItem> = [
    {
      title: "№",
      dataIndex: "saleId",
      key: "saleId",
      width: 30,
    },
    {
      title: "Клиент",
      dataIndex: "client",
      key: "client",
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
      render: (number) => (
        <Tag icon={<CheckCircleOutlined spin />} color="error">
          {localeString(number, "сум")}
        </Tag>
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
    />
  );
};

export default SaleTable;
