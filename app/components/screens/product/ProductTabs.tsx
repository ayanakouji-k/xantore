import { Tabs } from "antd";
import React from "react";

import { ProductIngredientsTable, ProductProductsTable } from "./table";

const ProductTabs: React.FC = () => {
  const items = [
    {
      label: "Продукты",
      key: "Продукты",
      children: <ProductProductsTable />,
    },
    {
      label: "Ингредиенты",
      key: "Ингредиенты",
      children: <ProductIngredientsTable />,
    },
  ];
  return <Tabs items={items} type="card" />;
};

export default ProductTabs;
