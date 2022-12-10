import React from "react";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { DeliveryDefaultBaggageTable } from "./table";

const DeliveryBaggage: React.FC = () => {
  return (
    <>
      <Meta title="Доставщик | Багаж" />
      <Heading title="Доставщик / Багаж" />
      <DeliveryDefaultBaggageTable />
    </>
  );
};

export default DeliveryBaggage;
