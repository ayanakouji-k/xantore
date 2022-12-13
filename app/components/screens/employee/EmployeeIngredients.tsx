import React from "react";
import { useSetModalOpen } from "../../../hooks";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { UiButton } from "../../ui";
import { EmployeeIncomeModal } from "./modal";
import { EmployeeIngredientsTable } from "./table";

const EmployeeIngredients: React.FC = () => {
  const { handleClick } = useSetModalOpen();
  return (
    <>
      <Meta title="Поставщик | Товары" />
      <Heading
        title="Поставщик / Товары"
        extra={[<UiButton text="Получать" onClick={handleClick} />]}
      />
      <EmployeeIncomeModal />
      <EmployeeIngredientsTable />
    </>
  );
};

export default EmployeeIngredients;
