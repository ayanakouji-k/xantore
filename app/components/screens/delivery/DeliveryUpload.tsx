import dynamic from "next/dynamic";
import React from "react";
import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";

const DeliveryForm = dynamic(() => import("./form/DeliveryForm"), {
  ssr: false,
});

const DeliveryUpload: React.FC = () => {
  return (
    <>
      <Meta title="Доставщик | Подгружать" />
      <Heading title="Доставщик / Подгружать" />
      <DeliveryForm />
    </>
  );
};

export default DeliveryUpload;
