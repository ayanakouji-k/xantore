import dynamic from "next/dynamic";
import React from "react";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";

const ProductionForm = dynamic(() => import("./form/ProductionForm"), {
  ssr: false,
});

const ProductionCreate: React.FC = () => {
  return (
    <>
      <Meta title="Производства | Производить" />
      <Heading title="Производства / Производить" />
      <ProductionForm />
    </>
  );
};

export default ProductionCreate;
