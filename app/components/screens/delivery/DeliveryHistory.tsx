import React from "react";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { DeliveryTabs, DeliveryUsersTabs } from "./tabs";

const DeliveryHistory: React.FC = () => {
  return (
    <>
      <Meta title="Доставщик | История" />
      <Heading title="Доставщик / История" />
      <DeliveryUsersTabs />
      <DeliveryTabs />
    </>
  );
};

export default DeliveryHistory;
