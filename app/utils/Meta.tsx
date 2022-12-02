import React from "react";
import Head from "next/head";

const Meta: React.FC<Record<string, string>> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default Meta;
