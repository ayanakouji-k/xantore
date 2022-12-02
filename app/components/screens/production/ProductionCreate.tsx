import React from "react";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import ProductionForm from "./form/ProductionForm";

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
