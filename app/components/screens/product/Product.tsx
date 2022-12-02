import React from "react";

import { useAppSelector, useSetModalOpen } from "../../../hooks";

import Meta from "../../../utils/Meta";
import { Heading } from "../../shared";
import { UiButton } from "../../ui";
import { ProductModal, ProductIngredientModal } from "./modal";
import ProductTabs from "./ProductTabs";

const Product: React.FC = () => {
  const { handleClick } = useSetModalOpen();
  const { isModalOpen, isModalOpen2 } = useAppSelector((state) => state.modal);
  return (
    <>
      <Meta title="Продукт" />
      <Heading
        title="Продукт"
        extra={[<UiButton text="Добавить" onClick={handleClick} />]}
      />
      <ProductTabs />
      {isModalOpen && <ProductModal />}
      {isModalOpen2 && <ProductIngredientModal />}
    </>
  );
};

export default Product;
