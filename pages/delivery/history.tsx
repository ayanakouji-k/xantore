import { NextPage } from "next";
import dynamic from "next/dynamic";

const DeliveryHistory = dynamic(
  () => import("../../app/components/screens/delivery/DeliveryHistory"),
  {
    ssr: false,
  }
);

const DeliveryHistoryPage: NextPage = () => <DeliveryHistory />;

export default DeliveryHistoryPage;
