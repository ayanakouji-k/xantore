import dynamic from "next/dynamic";
import React from "react";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";

const SaleSellForm = dynamic(() => import("./form/SaleSellForm"), {
  ssr: false,
});

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
