import React from "react";
import { useSetModalOpen } from "../../../hooks";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { UiButton } from "../../ui";
import { DeliveryReturnModal } from "./modal";
import { DeliveryDefaultBaggageTable } from "./table";

const DeliveryBaggage: React.FC = () => {
  const { handleClick } = useSetModalOpen();
  return (
    <>
      <Meta title="Доставщик | Багаж" />
      <Heading
        title="Доставщик / Багаж"
        extra={[<UiButton text="Перемещать" onClick={handleClick} />]}
      />
      <DeliveryReturnModal />
      <DeliveryDefaultBaggageTable />
    </>
  );
};

export default DeliveryBaggage;
