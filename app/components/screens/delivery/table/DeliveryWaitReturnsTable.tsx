import { ColumnsType } from "antd/es/table";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import { useAppSelector } from "../../../../hooks";
import { TDeliveryWaitReturnItem } from "../../../../redux/delivery/delivery.types";
import {
  useGetDeliveryWaitReturnsIdQuery,
  useGetDeliveryWaitReturnsQuery,
  usePostDeliveryAcceptIdMutation,
  usePostDeliveryRejectIdMutation,
} from "../../../../redux/index.endpoints";
import { localeString } from "../../../../utils/numberLocaleString";
import { SpaceContainer, TableContainer } from "../../../shared";

const DeliveryWaitReturnsTable: React.FC = () => {
  const { id } = useAppSelector((state) => state.getId);
  const [current, setCurrent] = React.useState(1);

  const { data: deliveryWait, isLoading: deliveryWaitLoading } =
    useGetDeliveryWaitReturnsQuery(1);
  const { data: deliveryWaitId, isLoading: deliveryWaitIdLoading } =
    useGetDeliveryWaitReturnsIdQuery(id, {
      skip: !id,
    });
  const [acceptDelivery] = usePostDeliveryAcceptIdMutation();
  const [rejectDelivery] = usePostDeliveryRejectIdMutation();

  const onAcceptDelivery = (value: number) => {
    acceptDelivery(value);
  };
  const onRejectDelivery = (value: number) => {
    rejectDelivery(value);
  };

  const columns: ColumnsType<TDeliveryWaitReturnItem> = [
    {
      title: "Названия",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Цена",
      dataIndex: "productPrice",
      key: "productPrice",
      render: (number) => localeString(number, "сум"),
    },
    {
      title: "Склад",
      dataIndex: "warehouse",
      key: "warehouse",
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
              icon: <FaCheckSquare />,
              color: "green",
              confirm: true,
              onClick: () => onAcceptDelivery(record.inputId),
            },
            {
              icon: <MdCancel />,
              color: "crimson",
              confirm: true,
              onClick: () => onRejectDelivery(record.inputId),
            },
          ]}
        />
      ),
    },
  ];
  return (
    <TableContainer
      title="Перемещения"
      rowKey={({ inputId }) => inputId}
      columns={columns}
      data={id ? deliveryWaitId?.data : deliveryWait?.data}
      loading={id ? deliveryWaitIdLoading : deliveryWaitLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
      showExpand={false}
    />
  );
};

export default DeliveryWaitReturnsTable;
