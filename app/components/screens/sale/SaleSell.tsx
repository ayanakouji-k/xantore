import React from "react";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import SaleSellForm from "./form/SaleSellForm";

const SaleSell: React.FC = () => {
  return (
    <>
      <Meta title="Продажа | Оплата" />
      <Heading title="Продажа / Оплата" />
      <SaleSellForm />
    </>
  );
};

export default SaleSell;
