import React from "react";
import { useAppSelector, useSetModalOpen } from "../../../hooks";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { UiButton } from "../../ui";
import { DeliveryReturnModal, DeliveryFriendReturnModal } from "./modal";
import { DeliveryDefaultBaggageTable } from "./table";

const DeliveryBaggage: React.FC = () => {
  const { handleClick, handleClick2 } = useSetModalOpen();
  const { isModalOpen, isModalOpen2 } = useAppSelector((state) => state.modal);
  return (
    <>
      <Meta title="Доставщик | Багаж" />
      <Heading
        title="Доставщик / Багаж"
        extra={[
          <UiButton text="Перемещать" onClick={handleClick} />,
          <UiButton
            text="Перемещать (другу)"
            color=""
            onClick={handleClick2}
          />,
        ]}
      />
      {isModalOpen && <DeliveryReturnModal />}
      {isModalOpen2 && <DeliveryFriendReturnModal />}
      <DeliveryDefaultBaggageTable />
    </>
  );
};

export default DeliveryBaggage;
