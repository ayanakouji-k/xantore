import React from "react";

import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { SaleTable } from "./table";

const SaleHistory: React.FC = () => {
  return (
    <>
      <Meta title="Продажа | История" />
      <Heading title="Продажа / История" />
      <SaleTable />
    </>
  );
};

export default SaleHistory;
