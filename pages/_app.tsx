import React from "react";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";

import { store } from "../app/redux";

import Layout from "../app/components/layouts/Layout";

import "antd/dist/reset.css";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <NextNProgress color="#887EF2" />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
