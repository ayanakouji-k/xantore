import { Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { TAuthAllUserItem } from "../../../../redux/auth/auth.types";
import { useGetAuthAllUsersQuery } from "../../../../redux/index.endpoints";
import { TableContainer } from "../../../shared";

const UsersTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);

  const { data: authUsers, isLoading } = useGetAuthAllUsersQuery(current);

  const columns: ColumnsType<TAuthAllUserItem> = [
    {
      title: "Добавил",
      dataIndex: "createdBy",
      key: "createdBy",
      render: (text) => (text ? text : <Tag color="green">Главный</Tag>),
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Номер",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Роль",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Добавлено",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return (
    <TableContainer
      title="Пользователи"
      rowKey={({ userId }) => userId}
      columns={columns}
      data={authUsers?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
      showExpand={false}
    />
  );
};

export default UsersTable;
