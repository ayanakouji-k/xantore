import React from "react";
import { useSetModalOpen } from "../../../hooks";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { UiButton } from "../../ui";
import { DeliveryOrderModal } from "./modal";
import { DeliveryTabs, DeliveryUsersTabs } from "./tabs";

const Delivery: React.FC = () => {
  const { handleClick } = useSetModalOpen();
  return (
    <>
      <Meta title="Доставщик" />
      <Heading
        title="Доставщик"
        extra={[<UiButton text="Добавить" onClick={handleClick} />]}
      />
      <DeliveryOrderModal />
      <DeliveryUsersTabs />
      <DeliveryTabs />
    </>
  );
};

export default Delivery;
