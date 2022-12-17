import React from "react";
import { ColumnsType } from "antd/es/table";
import { GoPencil } from "react-icons/go";

import { useGetEmployeeQuery } from "../../../../redux/index.endpoints";

import {
  SpaceContainer,
  StatisticsNumber,
  TableContainer,
} from "../../../shared";
import { useSetModalOpen } from "../../../../hooks";
import { setGetId } from "../../../../redux/getId/getId.slice";
import { TEmployeeItem } from "../../../../redux/employee/employee.types";

const EmployeeTable: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const { data: employees, isLoading } = useGetEmployeeQuery(1);
  const { dispatch, handleClick } = useSetModalOpen();
  const onHandleClick = (id: number) => {
    dispatch(setGetId(id));
    handleClick();
  };
  const columns: ColumnsType<TEmployeeItem> = [
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
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Комментария",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Баланс",
      dataIndex: "amount",
      key: "amount",
      render: (_, record) => <StatisticsNumber number={record.balance} />,
    },
    {
      title: "Добавлено",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Действие",
      dataIndex: "action",
      key: "action",
      align: "center",
      width: 30,
      render: (_, record) => (
        <SpaceContainer
          items={[
            {
              icon: <GoPencil />,
              color: "yellow",
              onClick: () => onHandleClick(record.employeeId),
            },
          ]}
        />
      ),
    },
  ];
  return (
    <TableContainer
      title="Поставщик"
      rowKey={({ employeeId }) => employeeId}
      columns={columns}
      data={employees?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
    />
  );
};

export default EmployeeTable;
