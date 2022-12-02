import { useRouter } from "next/router";
import React from "react";

import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { UiButton } from "../../ui";
import { WarehouseItemsTable } from "./table";

const WarehouseItems: React.FC = () => {
  const router = useRouter();
  const { query } = router;
  const [warehouseName, setWarehouseName] = React.useState<string | null>("");
  React.useEffect(() => {
    const warehouseTabs = localStorage.getItem("warehouseTabs");
    setWarehouseName(warehouseTabs);
  }, []);
  return (
    <>
      <Meta title="Склад" />
      <Heading
        title={`Склад / ${warehouseName}`}
        extra={[
          <UiButton text="Назад" onClick={() => router.push("/warehouse")} />,
        ]}
      />
      <WarehouseItemsTable id={query.id} />
    </>
  );
};

export default WarehouseItems;
