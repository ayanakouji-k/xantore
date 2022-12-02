import React from "react";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { localeString } from "../../../utils/numberLocaleString";

import styles from "./statistics.module.scss";

const StatisticsNumber: React.FC<Record<string, number>> = ({ number }) => {
  return (
    <div className={styles.statistics}>
      {number > 0 ? (
        <div className={styles.statisticsNumber}>
          {localeString(number, "сум")}{" "}
          <AiOutlineRise fontSize={20} color="green" />
        </div>
      ) : (
        <div className={styles.statisticsNumber}>
          {localeString(number, "сум")}{" "}
          <AiOutlineFall fontSize={20} color="red" />
        </div>
      )}
    </div>
  );
};

export default StatisticsNumber;
