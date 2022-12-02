import React from "react";

import { THeading } from "./heading.types";

import styles from "./heading.module.scss";

const Heading: React.FC<THeading> = ({ title, extra }) => {
  return (
    <div className={styles.heading}>
      <h2>{title}</h2>
      <ul>
        {extra?.map((prev: any, i: number) => (
          <li key={i}>{prev}</li>
        ))}
      </ul>
    </div>
  );
};

export default Heading;
