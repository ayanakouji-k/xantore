import React from "react";
import { useAppSelector } from "../../../../hooks";
import SaleSellItem from "./SaleSellItem";

import styles from "./form.module.scss";

const SaleSellItems: React.FC = () => {
  const { saleItems } = useAppSelector((state) => state.sale);
  console.log(saleItems);
  return (
    <div className={styles.items}>
      {saleItems.map((prev, i) => (
        <SaleSellItem key={prev.id} item={prev} id={prev.id} index={i} />
      ))}
    </div>
  );
};

export default SaleSellItems;
