import React from "react";
import { ColumnsType } from "antd/es/table";

import { TClientItem } from "../../../../redux/client/client.types";
import { StatisticsNumber, TableContainer } from "../../../shared";
import { useGetClientAllQuery } from "../../../../redux/index.endpoints";

const ClientTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const { data: client, isLoading } = useGetClientAllQuery(current);
  const columns: ColumnsType<TClientItem> = [
    {
      title: "Добавил",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Номер",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Комментария",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Баланс",
      dataIndex: "balance",
      key: "balance",
      render: (_, record) => <StatisticsNumber number={record.balance} />,
    },
    {
      title: "Добавлено",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return (
    <TableContainer
      title="Клиенты"
      rowKey={({ id }) => id}
      columns={columns}
      data={client?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
    />
  );
};

export default ClientTable;
