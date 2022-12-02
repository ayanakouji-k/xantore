import React from "react";
import Meta from "../../../utils/Meta";
import LoginForm from "./form/LoginForm";

import fon from "../../../assets/images/fon.jpg";

import styles from "./login.module.scss";
import Image from "next/image";

const Login: React.FC = () => {
  return (
    <>
      <Meta title="Логин" />
      <div className={styles.login}>
        <Image
          className={styles.fon}
          src={fon}
          alt="Fon"
          placeholder="blur"
          loading="lazy"
        />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
