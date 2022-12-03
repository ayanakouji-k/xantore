import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import Cookies from "js-cookie";

import { useStepAuthLoginMutation } from "../../../../redux/index.endpoints";

import logo from "../../../../assets/images/logo.png";

import styles from "./styles.module.scss";
import { TStepAuthLogin } from "../../../../redux/auth/auth.types";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const [stepAuthLogin, { data: authLogin, isLoading, isSuccess }] =
    useStepAuthLoginMutation();

  const onFinish = (values: TStepAuthLogin) => {
    stepAuthLogin(values);
  };
  React.useEffect(() => {
    if (isSuccess) {
      router.push("/home");
      form.resetFields();
    }
  }, [isSuccess]);
  React.useEffect(() => {
    if (authLogin) {
      Cookies.set("token", authLogin.data);
    }
  }, [authLogin, isSuccess]);
  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <Image
          width={80}
          height={80}
          src={logo}
          alt="Logo"
          placeholder="blur"
        />
      </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="phoneNumber"
          className={styles.formItem}
          rules={[
            { required: true, message: "Пожалуйста, заполните поле номер!" },
          ]}
        >
          <Input
            placeholder="Номер"
            inputMode="tel"
            prefix={<PhoneOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Пожалуйста, заполните поле пароль!" },
          ]}
        >
          <Input.Password
            placeholder="Пароль"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          style={{ backgroundColor: "#7367f0", width: "100%" }}
        >
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
