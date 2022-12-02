import React from "react";

import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { useAppSelector, useSetModalOpen } from "../../../hooks";
import { UiButton } from "../../ui";
import {
  WarehouseMadal,
  WarehouseModalAddItem,
  WarehouseModalMoveItem,
} from "./modal";
import WarehouseTabs from "./WarehouseTabs";
import { selectModal } from "../../../redux/modal/modal.selectors";

const Warehouse: React.FC = () => {
  const { handleClick, handleClick2, handleClick3 } = useSetModalOpen();
  const { isModalOpen, isModalOpen2, isModalOpen3 } =
    useAppSelector(selectModal);
  return (
    <>
      <Meta title="Склад" />
      <Heading
        title="Склад"
        extra={[
          <UiButton text="Добавить" onClick={handleClick} />,
          <UiButton
            text="Добавить (выборочно)"
            color=""
            onClick={handleClick2}
          />,
          <UiButton text="Перемещать" color="#F26E00" onClick={handleClick3} />,
        ]}
      />
      {isModalOpen && <WarehouseMadal />}
      {isModalOpen2 && <WarehouseModalAddItem />}
      {isModalOpen3 && <WarehouseModalMoveItem />}
      <WarehouseTabs />
    </>
  );
};

export default Warehouse;
