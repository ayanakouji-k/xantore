import React from "react";

import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { ProductionTable } from "./table";

const ProductionHistory: React.FC = () => {
  return (
    <>
      <Meta title="Производства | История" />
      <Heading title="Производства / История" />
      <ProductionTable />
    </>
  );
};

export default ProductionHistory;
