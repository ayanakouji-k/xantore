import React from "react";
import { Tabs } from "antd";
import { useAppDispatch } from "../../../../hooks";
import { useGetDeliveryAllQuery } from "../../../../redux/index.endpoints";
import { setGetId } from "../../../../redux/getId/getId.slice";

const DeliveryUsersTabs: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: delivery } = useGetDeliveryAllQuery(1);

  const handleChange = (value: any) => {
    if (value === "0") {
      dispatch(setGetId(null));
    } else {
      dispatch(setGetId(value));
    }
  };
  return (
    <Tabs onChange={handleChange} type="card" defaultActiveKey="all">
      <Tabs.TabPane tab="Все" key="0" />
      {delivery?.data.map((prev) => (
        <Tabs.TabPane tab={prev.name} key={prev.deliveryId} />
      ))}
    </Tabs>
  );
};

export default DeliveryUsersTabs;
