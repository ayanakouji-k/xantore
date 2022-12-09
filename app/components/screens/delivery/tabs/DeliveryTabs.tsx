import React from "react";
import { Tabs } from "antd";
import {
  DeliveryOrdersTable,
  DeliveryBaggageTable,
  DeliveryWaitReturnsTable,
} from "../table";

const DeliveryTabs: React.FC = () => {
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
