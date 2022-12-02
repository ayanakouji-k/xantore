import React from "react";

import Meta from "../../../utils/Meta";
import { useSetModalOpen } from "../../../hooks";
import { Heading } from "../../shared";
import { UiButton } from "../../ui";
import { EmployeeModal } from "./modal";
import { EmployeeTable } from "./table";

const Employee: React.FC = () => {
  const { handleClick } = useSetModalOpen();
  return (
    <>
      <Meta title="Поставщик" />
      <Heading
        title="Поставщик"
        extra={[<UiButton text="Добавить" onClick={handleClick} />]}
      />
      <EmployeeModal />
      <EmployeeTable />
    </>
  );
};

export default Employee;
