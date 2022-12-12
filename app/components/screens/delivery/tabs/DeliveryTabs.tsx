import React from "react";
import { Tabs } from "antd";
import {
  DeliveryOrdersTable,
  DeliveryBaggageTable,
  DeliveryWaitReturnsTable,
} from "../table";
import { useAppSelector } from "../../../../hooks";

const DeliveryTabs: React.FC = () => {
  const { id } = useAppSelector((state) => state.getId);
  const items = [
    {
      label: "Загружено",
      key: "1",
      children: <DeliveryOrdersTable />,
    },
    {
      label: "В багаже",
      key: "2",
      children: <DeliveryBaggageTable />,
      disabled: Number(id) === 0,
    },
    {
      label: "Перемещения",
      key: "3",
      children: <DeliveryWaitReturnsTable />,
    },
  ];
  return <Tabs centered items={items} type="card" />;
};

export default DeliveryTabs;
