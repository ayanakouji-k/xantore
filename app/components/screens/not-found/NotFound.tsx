import React from "react";
import { Result } from "antd";
import { useRouter } from "next/router";

import { UiButton } from "../../ui";
import Meta from "../../../utils/Meta";

import styles from "./not-found.module.scss";
import Cookies from "js-cookie";

const NotFound: React.FC = () => {
  const router = useRouter();
  const token = Cookies.get("token");
  React.useEffect(() => {
    if (token) {
      setTimeout(() => router.push("/home"), 2000);
    } else {
      setTimeout(() => router.push("/"), 2000);
    }
  }, [token]);
  return (
    <>
      <Meta title="NotFound" />
      <div className={styles.notFound}>
        <Result
          status="404"
          title="404"
          subTitle="Извините, страница, которую вы посетили, не существует."
          extra={
            <UiButton
              onClick={() => router.push("/")}
              text="Главная страница"
            />
          }
        />
      </div>
    </>
  );
};

export default NotFound;
