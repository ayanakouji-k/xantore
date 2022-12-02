import React from "react";
import { Tabs } from "antd";

import { WarehouseIngredientsTable, WarehouseProductsTable } from "./table";

const WarehouseTabs: React.FC = () => {
  const onChange = (key: string) => {
    localStorage.setItem("warehouseTabs", key);
  };
  const items = [
    {
      label: "Ингредиенты",
      key: "Ингредиенты",
      children: <WarehouseIngredientsTable />,
    },
    {
      label: "Продукты",
      key: "Продукты",
      children: <WarehouseProductsTable />,
    },
  ];
  React.useEffect(() => {
    localStorage.setItem("warehouseTabs", "Ингредиенты");
  }, []);
  return <Tabs items={items} type="card" onChange={onChange} />;
};

export default WarehouseTabs;
