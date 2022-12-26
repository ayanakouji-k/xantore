import React from "react";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { DeliveryMovingTable } from "./table";

const DeliveryMoving: React.FC = () => {
  return (
    <>
      <Meta title="Доставщик | Перемещения" />
      <Heading title="Доставщик / Перемещения" />
      <DeliveryMovingTable />
    </>
  );
};

export default DeliveryMoving;
