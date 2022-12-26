import { ColumnsType } from "antd/es/table";
import Cookies from "js-cookie";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import { TDeliveryMovingId } from "../../../../redux/delivery/delivery.types";
import {
  useGetDeliveryMovingIdQuery,
  usePostDeliveryAcceptMovingIdMutation,
  usePostDeliveryRejectMovingIdMutation,
} from "../../../../redux/index.endpoints";
import { localeString } from "../../../../utils/numberLocaleString";
import { SpaceContainer, TableContainer } from "../../../shared";

const DeliveryMovingTable: React.FC = () => {
  const userId = Cookies.get("userId");
  const [current, setCurrent] = React.useState(1);
  const [stateUserId, setStateUserId] = React.useState(0);

  const { data: deliveryMoving, isLoading } = useGetDeliveryMovingIdQuery(
    stateUserId,
    {
      skip: !stateUserId,
    }
  );

  const [acceptDelivery] = usePostDeliveryAcceptMovingIdMutation();
  const [rejectDelivery] = usePostDeliveryRejectMovingIdMutation();

  const onAcceptDelivery = (value: number) => {
    acceptDelivery(value);
  };
  const onRejectDelivery = (value: number) => {
    rejectDelivery(value);
  };

  const columns: ColumnsType<TDeliveryMovingId> = [
    {
      title: "От",
      dataIndex: "fromDeliverer",
      key: "fromDeliverer",
    },
    {
      title: "До",
      dataIndex: "toDeliverer",
      key: "toDeliverer",
    },
    {
      title: "Продукт",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Количество",
      dataIndex: "amount",
      key: "amount",
      render: (number) => localeString(number, "штук"),
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
              onClick: () => onAcceptDelivery(record.id),
            },
            {
              icon: <MdCancel />,
              color: "crimson",
              confirm: true,
              onClick: () => onRejectDelivery(record.id),
            },
          ]}
        />
      ),
    },
  ];
  React.useEffect(() => {
    if (userId) {
      setStateUserId(Number(userId));
    }
  }, [userId]);
  return (
    <TableContainer
      title="Перемещения"
      rowKey={({ id }) => id}
      columns={columns}
      data={deliveryMoving?.data}
      loading={isLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
      showExpand={false}
    />
  );
};

export default DeliveryMovingTable;
