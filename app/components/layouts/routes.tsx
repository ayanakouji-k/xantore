import { MenuProps } from "antd";
import { BiHomeAlt, BiStoreAlt } from "react-icons/bi";
import { BsFillInboxesFill } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { TbShoppingCartPlus, TbBuildingFactory } from "react-icons/tb";
export const routes: MenuProps["items"] = [
  { key: "/", label: "Главная", icon: <BiHomeAlt /> },
  {
    key: "/warehouse",
    label: "Склад",
    icon: <BiStoreAlt />,
  },
  {
    key: "/product",
    label: "Продукт",
    icon: <BsFillInboxesFill />,
  },
  {
    key: "/production",
    label: "Производства",
    icon: <TbBuildingFactory />,
    children: [
      { label: "Производить", key: "/production/create" },
      { label: "История", key: "/production/history" },
    ],
  },
  {
    key: "/sale",
    label: "Продажа",
    icon: <ImPriceTag />,
    children: [
      { label: "Оплата", key: "/sale/sell" },
      { label: "История", key: "/sale/history" },
    ],
  },
  {
    key: "/employees",
    label: "Поставщик",
    icon: <TbShoppingCartPlus />,
    children: [
      { label: "Поставщики", key: "/employee" },
      { label: "Товары", key: "/employee/ingredients" },
    ],
  },
  {
    key: "/client",
    label: "Клиент",
    icon: <HiUsers />,
  },
];
