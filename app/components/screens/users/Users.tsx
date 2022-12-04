import React from "react";
import { useSetModalOpen } from "../../../hooks";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { UiButton } from "../../ui";
import { UsersModal } from "./modal";

const Users: React.FC = () => {
  const { handleClick } = useSetModalOpen();
  return (
    <>
      <Meta title="Пользователи" />
      <Heading
        title="Пользователи"
        extra={[<UiButton text="Добавить" onClick={handleClick} />]}
      />
      <UsersModal />
    </>
  );
};

export default Users;
