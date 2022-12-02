import React from "react";
import { Result } from "antd";
import { useRouter } from "next/router";

import { UiButton } from "../../ui";
import Meta from "../../../utils/Meta";

const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Meta title="NotFound" />
      <Result
        status="404"
        title="404"
        subTitle="Извините, страница, которую вы посетили, не существует."
        extra={
          <UiButton onClick={() => router.push("/")} text="Главная страница" />
        }
      />
    </>
  );
};

export default NotFound;
