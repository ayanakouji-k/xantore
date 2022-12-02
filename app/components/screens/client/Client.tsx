import React from "react";
import { useSetModalOpen } from "../../../hooks";

import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { UiButton } from "../../ui";
import { ClientModal } from "./modal";
import { ClientTable } from "./table";

const Client: React.FC = () => {
  const { handleClick } = useSetModalOpen();
  return (
    <>
      <Meta title="Клиент" />
      <Heading
        title="Клиент"
        extra={[<UiButton text="Добавить" onClick={handleClick} />]}
      />
      <ClientTable />
      <ClientModal />
    </>
  );
};

export default Client;
