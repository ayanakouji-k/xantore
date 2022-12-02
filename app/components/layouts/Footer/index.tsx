import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div style={{ color: "#6e6b7b" }}>
      COPYRIGHT © 2022{" "}
      <Link href="https://t.me/dbc_uz" target="_blank">
        <b>DBC</b>
      </Link>
      , All rights Reserved
    </div>
  );
};

export default Footer;
