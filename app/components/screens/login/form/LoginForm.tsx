import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";

import logo from "../../../../assets/images/logo.png";

import styles from "./styles.module.scss";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = (values: any) => {
    if (values) {
      Cookies.set("token", "1212231");
      router.push("/home");
    }
    form.resetFields();
  };
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
          name="username"
          className={styles.formItem}
          rules={[
            { required: true, message: "Пожалуйста, заполните поле имя!" },
          ]}
        >
          <Input
            placeholder="Имя"
            prefix={<UserOutlined className="site-form-item-icon" />}
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
          style={{ backgroundColor: "#7367f0", width: "100%" }}
        >
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
