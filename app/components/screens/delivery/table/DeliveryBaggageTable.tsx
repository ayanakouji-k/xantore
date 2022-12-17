import { ColumnsType } from "antd/es/table";
import React from "react";
import { useAppSelector } from "../../../../hooks";
import { useGetDeliveryBaggageIdQuery } from "../../../../redux/index.endpoints";
import { TWarehouseIdItem } from "../../../../redux/warehouse/warehouse.types";
import { localeString } from "../../../../utils/numberLocaleString";
import { TableContainer } from "../../../shared";

const DeliveryBaggageTable: React.FC = () => {
  const { id } = useAppSelector((state) => state.getId);
  const [current, setCurrent] = React.useState(1);
  const { data: deliveryBaggageId, isLoading: deliveryBaggageIdLoading } =
    useGetDeliveryBaggageIdQuery(Number(id), {
      skip: !Number(id),
    });
  const columns: ColumnsType<TWarehouseIdItem> = [
    {
      title: "№",
      dataIndex: "productItemId",
      key: "productItemId",
    },
    {
      title: "Названия",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Количество",
      dataIndex: "productAmount",
      key: "productAmount",
      render: (number) => localeString(number, "штук"),
    },
    {
      title: "Цена",
      dataIndex: "productPrice",
      key: "productPrice",
      render: (number) => localeString(number, "сум"),
    },
  ];
  return (
    <TableContainer
      title="Багаж"
      rowKey={({ productItemId }) => productItemId}
      columns={columns}
      data={id ? deliveryBaggageId?.data : deliveryBaggageId?.data}
      loading={id ? deliveryBaggageIdLoading : deliveryBaggageIdLoading}
      current={current}
      total={11}
      setCurrent={setCurrent}
      showExpand={false}
    />
  );
};

export default DeliveryBaggageTable;
