import React from "react";
import { InputNumber, Select } from "antd";

import {
  useGetWarehouseItemsQuery,
  useGetWarehouseProductItemsQuery,
} from "../../../../redux/index.endpoints";

import styles from "./form.module.scss";
import { localeString } from "../../../../utils/numberLocaleString";
import { useAppDispatch } from "../../../../hooks";
import {
  deleteSaleProductItem,
  setSaleProductAmount,
  setSaleProductId,
} from "../../../../redux/sale/sale.slice";
import { AiFillDelete } from "react-icons/ai";

const SaleSellItem: React.FC<any> = React.memo(({ index, id }) => {
  const dispatch = useAppDispatch();

  const { data: warehouseItems, isLoading } =
    useGetWarehouseProductItemsQuery(1);
  const handleChange = (value: number) => {
    const findItem = warehouseItems?.data.find(
      (prev) => prev.productItemId === value
    );
    if (findItem) {
      dispatch(
        setSaleProductId({
          id,
          productItemId: findItem.productItemId,
          price: findItem.product.price,
        })
      );
    }
  };
  const handleInputChange = (value: number | null) => {
    dispatch(setSaleProductAmount({ id, amount: value }));
  };
  const onDeleteProductItem = () => {
    dispatch(deleteSaleProductItem(id));
  };
  return (
    <div className={styles.item}>
      <div className={styles.itemInput}>
        <Select
          allowClear
          placeholder="Продукт"
          onChange={handleChange}
          loading={isLoading}
        >
          {warehouseItems?.data.map((prev) => (
            <Select.Option key={prev.productItemId} value={prev.productItemId}>
              {prev.product.name} / {prev.productAmount} штук /{" "}
              {localeString(prev.product.price, "сум")} / {prev.warehouse.name}
            </Select.Option>
          ))}
        </Select>
        <InputNumber
          onChange={handleInputChange}
          placeholder="Количество"
          min={0}
          type="number"
        />
      </div>
      <div>
        {index !== 0 && (
          <AiFillDelete
            color="crimson"
            size={30}
            cursor="pointer"
            onClick={onDeleteProductItem}
          />
        )}
      </div>
    </div>
  );
});

export default SaleSellItem;
