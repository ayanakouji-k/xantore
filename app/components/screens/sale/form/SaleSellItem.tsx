import React from "react";
import { InputNumber, Select } from "antd";

import {
  useGetDeliveryBaggageIdQuery,
  useGetWarehouseProductItemsQuery,
} from "../../../../redux/index.endpoints";

import styles from "./form.module.scss";
import { localeString } from "../../../../utils/numberLocaleString";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  deleteSaleProductItem,
  setSaleProductAmount,
  setSaleProductId,
} from "../../../../redux/sale/sale.slice";
import { AiFillDelete } from "react-icons/ai";
import Cookies from "js-cookie";

const SaleSellItem: React.FC<any> = React.memo(({ index, id }) => {
  const dispatch = useAppDispatch();
  const role = Cookies.get("role");
  const userId = Cookies.get("userId");

  const [stateUserId, setStateUserId] = React.useState(0);
  const [stateRole, setStateRole] = React.useState("");

  const { data: warehouseItems, isLoading } =
    useGetWarehouseProductItemsQuery(1);
  const { data: deliveryBaggage } = useGetDeliveryBaggageIdQuery(stateUserId, {
    skip: !stateUserId,
  });
  const handleChange = (value: number) => {
    const findItem = (
      stateRole === "DRIVER" ? deliveryBaggage : warehouseItems
    )?.data.find((prev) => prev.productItemId === value);
    if (findItem) {
      dispatch(
        setSaleProductId({
          id,
          productItemId: findItem.productItemId,
          price: findItem.productPrice,
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
  React.useEffect(() => {
    if (role) {
      setStateUserId(Number(userId));
      setStateRole(role);
    }
  }, [userId, role]);
  return (
    <div className={styles.item}>
      <div className={styles.itemInput}>
        <Select
          allowClear
          placeholder="Продукт"
          onChange={handleChange}
          loading={isLoading}
        >
          {(stateRole === "DRIVER"
            ? deliveryBaggage
            : warehouseItems
          )?.data.map((prev) => (
            <Select.Option key={prev.productItemId} value={prev.productItemId}>
              {prev.product} / {prev.productAmount} штук /{" "}
              {localeString(prev.productPrice, "сум")} / {prev.warehouseName}
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
